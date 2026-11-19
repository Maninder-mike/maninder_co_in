"use server";

import { headers } from "next/headers";
import { createClient } from "@supabase/supabase-js";
import { type NewsletterState } from "../_components/newsletter-form";

// In-memory IP rate limiter: max 5 newsletter subscription attempts per hour per IP
const newsletterIpAttempts = new Map<string, { count: number; resetAt: number }>();
const MAX_NEWSLETTER_PER_IP = 5;
const NEWSLETTER_WINDOW_MS = 60 * 60 * 1000;

function checkNewsletterIpRateLimit(ip: string): boolean {
  const now = Date.now();
  const record = newsletterIpAttempts.get(ip);
  if (!record || now > record.resetAt) {
    newsletterIpAttempts.set(ip, { count: 1, resetAt: now + NEWSLETTER_WINDOW_MS });
    return true;
  }
  record.count += 1;
  return record.count <= MAX_NEWSLETTER_PER_IP;
}

export async function subscribeAction(
  _prev: NewsletterState,
  formData: FormData
): Promise<NewsletterState> {
  const headerList = await headers();
  const ip =
    headerList.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    headerList.get("x-real-ip") ||
    "unknown";

  if (!checkNewsletterIpRateLimit(ip)) {
    return {
      status: "error",
      message: "Too many subscription attempts. Please try again later.",
    };
  }

  // Use anon key for least privilege if available, falling back to service role key
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
  const supabaseKey =
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
    process.env.SUPABASE_SERVICE_ROLE_KEY!;
  const supabase = createClient(supabaseUrl, supabaseKey);

  const email = formData.get("email")?.toString().trim().toLowerCase();

  if (!email) return { status: "error", message: "Email is required" };
  if (email.length > 320) return { status: "error", message: "Enter a valid email" };

  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!emailOk) return { status: "error", message: "Enter a valid email" };

  try {
    const { error } = await supabase
      .from("subscribers")
      .insert([{ email }]);

    if (error) {
      // Prevent email enumeration: return the exact same success response for duplicates
      if (error.code === "23505") {
        return {
          status: "success",
          message: "Thanks! You're subscribed to updates.",
        };
      }
      console.error("Supabase subscriber insert failed");
      return {
        status: "error",
        message: "Failed to subscribe. Please try again later.",
      };
    }

    return {
      status: "success",
      message: "Thanks! You're subscribed to updates.",
    };
  } catch {
    return {
      status: "error",
      message: "An unexpected error occurred. Please try again.",
    };
  }
}
