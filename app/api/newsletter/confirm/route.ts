import { NextResponse } from "next/server";

// Newsletter email confirmation is no longer used.
// This endpoint now returns 410 Gone to indicate deprecation.
export async function GET() {
  return NextResponse.json(
    { error: "Newsletter confirmation flow has been removed." },
    { status: 410 }
  );
}
