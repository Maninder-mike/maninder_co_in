import { Resend } from 'resend';

if (!process.env.RESEND_API_KEY) {
  throw new Error('Missing environment variable RESEND_API_KEY');
}

// Create Resend client (Free tier limits: 100 emails/day, 3,000 emails/month)
export const resend = new Resend(process.env.RESEND_API_KEY);

// Example email sending function
export async function sendEmail({
  to,
  subject,
  html,
}: {
  to: string;
  subject: string;
  html: string;
}) {
  try {
    const data = await resend.emails.send({
      from: 'Maninder <onboarding@resend.dev>', // Update this with your verified domain
      to,
      subject,
      html,
    });

    return { success: true, data };
  } catch (error) {
    return { success: false, error };
  }
}