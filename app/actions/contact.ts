"use server";

import { Resend } from "resend";
import { ContactFormState } from "@/lib/contact";

export async function submitContactForm(
  prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  if (!name || !email || !message) {
    return { status: "error", message: "Please fill in all fields." };
  }

  const resendApiKey = process.env.RESEND_API_KEY;
  if (!resendApiKey) {
    console.error("Missing RESEND_API_KEY environment variable. Cannot send email.");
    return { status: "error", message: "Messaging is currently unavailable. Please try again later." };
  }

  const resend = new Resend(resendApiKey);

  try {
    const { error } = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: process.env.CONTACT_EMAIL_TO || "maninder_mike@yahoo.com",
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });

    if (error) {
      console.error("Resend API error:", error);
      return { status: "error", message: "Failed to send message. Please try again later." };
    }

    return { status: "success", message: "Thanks for reaching out! I'll get back to you soon." };
  } catch (err) {
    console.error("Unexpected server action error:", err);
    return { status: "error", message: "An unexpected error occurred." };
  }
}
