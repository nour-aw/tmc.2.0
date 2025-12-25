
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const data = await req.json();
  // In production, forward this to your email/CRM (e.g., SendGrid, Resend, Slack webhook).
  console.log("Contact form submission:", data);
  return NextResponse.json({ ok: true, message: "Thanks! We received your message." });
}
