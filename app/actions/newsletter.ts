"use server";

import { createClient } from "@supabase/supabase-js";
import { type NewsletterState } from "../_components/newsletter-form";

export async function subscribeAction(
  _prev: NewsletterState,
  formData: FormData
): Promise<NewsletterState> {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;
  const supabase = createClient(supabaseUrl, supabaseKey);

  const email = formData.get("email")?.toString().trim().toLowerCase();

  if (!email) return { status: "error", message: "Email is required" };

  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!emailOk) return { status: "error", message: "Enter a valid email" };

  try {
    // Insert into the 'subscribers' table. 
    // Assuming the table 'subscribers' has an 'email' column and a unique constraint on 'email'.
    const { error } = await supabase
      .from("subscribers")
      .insert([{ email }]);

    if (error) {
      // Handle unique constraint violation (code 23505 in Postgres)
      if (error.code === '23505') {
        return {
          status: "success",
          message: "You are already subscribed. Thank you!",
        };
      }
      console.error("Supabase insert error:", error);
      return {
        status: "error",
        message: "Failed to subscribe. Please try again later.",
      };
    }

    return {
      status: "success",
      message: "Thanks! You're subscribed to updates.",
    };
  } catch (err) {
    console.error("Newsletter subscription error:", err);
    return {
      status: "error",
      message: "An unexpected error occurred. Please try again.",
    };
  }
}
