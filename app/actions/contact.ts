"use server";

import { headers } from "next/headers";
import { createClient } from "@supabase/supabase-js";
import { ContactFormState } from "@/lib/contact";

// In-memory IP rate limiter: max 5 messages per hour per IP
const contactIpAttempts = new Map<string, { count: number; resetAt: number }>();
const MAX_CONTACT_PER_IP = 5;
const CONTACT_WINDOW_MS = 60 * 60 * 1000;

function checkContactIpRateLimit(ip: string): boolean {
  const now = Date.now();
  const record = contactIpAttempts.get(ip);
  if (!record || now > record.resetAt) {
    contactIpAttempts.set(ip, { count: 1, resetAt: now + CONTACT_WINDOW_MS });
    return true;
  }
  record.count += 1;
  return record.count <= MAX_CONTACT_PER_IP;
}

export async function submitContactForm(
  prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const headerList = await headers();
  const ip =
    headerList.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    headerList.get("x-real-ip") ||
    "unknown";

  if (!checkContactIpRateLimit(ip)) {
    return {
      status: "error",
      message: "Too many messages sent from this network. Please try again later.",
    };
  }

  // Use anon key for least privilege if available, falling back to service role key
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
  const supabaseKey =
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
    process.env.SUPABASE_SERVICE_ROLE_KEY!;
  const supabase = createClient(supabaseUrl, supabaseKey);

  const name = formData.get("name")?.toString().trim();
  const email = formData.get("email")?.toString().trim().toLowerCase();
  const subject = formData.get("subject")?.toString().trim();
  const message = formData.get("message")?.toString().trim();

  if (!name || !email || !subject || !message) {
    return { status: "error", message: "Please fill in all fields." };
  }

  // Strict server-side input length validation
  if (name.length > 200) {
    return { status: "error", message: "Name is too long (max 200 characters)." };
  }
  if (email.length > 320) {
    return { status: "error", message: "Email is too long." };
  }
  if (message.length > 5000) {
    return { status: "error", message: "Message is too long (max 5000 characters)." };
  }

  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!emailOk) {
    return { status: "error", message: "Enter a valid email address." };
  }

  const { CONTACT_SUBJECTS } = await import("@/lib/contact");
  if (!CONTACT_SUBJECTS.includes(subject as import("@/lib/contact").ContactSubject)) {
    return { status: "error", message: "Invalid subject selected." };
  }

  try {
    // Check if this email has submitted in the last 1 hour
    const oneHourAgo = new Date();
    oneHourAgo.setHours(oneHourAgo.getHours() - 1);

    const { data: recentMessages, error: checkError } = await supabase
      .from("contact_messages")
      .select("id")
      .eq("email", email)
      .gte("created_at", oneHourAgo.toISOString());

    // Fail-closed on database check errors
    if (checkError) {
      console.error("Supabase rate limit query check failed");
      return {
        status: "error",
        message: "Unable to verify submission limits. Please try again shortly.",
      };
    }

    if (recentMessages && recentMessages.length > 0) {
      return {
        status: "error",
        message: "You've already sent a message recently. Please wait a while before sending another.",
      };
    }

    const { error } = await supabase
      .from("contact_messages")
      .insert([{ name, email, subject, message }]);

    if (error) {
      console.error("Supabase contact insert failed");
      return {
        status: "error",
        message: "Failed to send message. Please try again later.",
      };
    }

    return {
      status: "success",
      message: "Thanks for reaching out! I'll get back to you soon.",
    };
  } catch {
    return { status: "error", message: "An unexpected error occurred." };
  }
}
