"use server";

import { createClient } from "@supabase/supabase-js";
import { ContactFormState } from "@/lib/contact";

export async function submitContactForm(
  prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;
  const supabase = createClient(supabaseUrl, supabaseKey);

  const name = formData.get("name")?.toString().trim();
  const email = formData.get("email")?.toString().trim().toLowerCase();
  const subject = formData.get("subject")?.toString().trim();
  const message = formData.get("message")?.toString().trim();

  if (!name || !email || !subject || !message) {
    return { status: "error", message: "Please fill in all fields." };
  }

  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!emailOk) {
    return { status: "error", message: "Enter a valid email address." };
  }

  // Import CONTACT_SUBJECTS inside or outside, but let's make sure it's validated
  const { CONTACT_SUBJECTS } = await import("@/lib/contact");
  if (!CONTACT_SUBJECTS.includes(subject as any)) {
    return { status: "error", message: "Invalid subject selected." };
  }

  try {
    // Basic rate limiting: check if this email has submitted in the last 1 hour
    const oneHourAgo = new Date();
    oneHourAgo.setHours(oneHourAgo.getHours() - 1);

    const { data: recentMessages, error: checkError } = await supabase
      .from("contact_messages")
      .select("id")
      .eq("email", email)
      .gte("created_at", oneHourAgo.toISOString());

    if (checkError) {
      console.error("Supabase rate limit check error:", checkError);
      // Continue anyway if check fails, to avoid blocking legit users entirely
    } else if (recentMessages && recentMessages.length > 0) {
      return { status: "error", message: "You've already sent a message recently. Please wait a while before sending another." };
    }

    const { error } = await supabase
      .from("contact_messages")
      .insert([{ name, email, subject, message }]);

    if (error) {
      console.error("Supabase insert error:", error);
      return { status: "error", message: "Failed to send message. Please try again later." };
    }

    return { status: "success", message: "Thanks for reaching out! I'll get back to you soon." };
  } catch (err) {
    console.error("Unexpected server action error:", err);
    return { status: "error", message: "An unexpected error occurred." };
  }
}
