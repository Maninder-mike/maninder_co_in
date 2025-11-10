import { NextResponse } from 'next/server';
import { sendEmail } from '@/lib/email/resend';
import { supabase } from '@/lib/supabase/client';

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    // Store contact message in Supabase
    const { data, error: dbError } = await supabase
      .from('contact_messages')
      .insert([
        {
          name,
          email,
          message,
          created_at: new Date().toISOString(),
        },
      ])
      .select();

    if (dbError) {
      return NextResponse.json(
        { error: 'Failed to store message' },
        { status: 500 }
      );
    }

    // Send confirmation email
    const { success, error: emailError } = await sendEmail({
      to: email,
      subject: 'Thanks for contacting us!',
      html: `
        <h1>Thanks for reaching out, ${name}!</h1>
        <p>We've received your message and will get back to you soon.</p>
        <p>Your message:</p>
        <blockquote>${message}</blockquote>
      `,
    });

    if (!success) {
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: 'Message sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}