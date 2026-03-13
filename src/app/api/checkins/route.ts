import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const duration = Number(body?.duration ?? 30);
  const contact = String(body?.contact ?? "").trim();

  if (!contact) {
    return NextResponse.json({ error: "Emergency contact is required" }, { status: 400 });
  }

  if (duration < 5 || duration > 180) {
    return NextResponse.json({ error: "Duration must be 5-180 minutes" }, { status: 400 });
  }

  return NextResponse.json({
    status: "armed",
    contact,
    duration,
    nextCheckInInMinutes: Math.max(5, Math.round(duration / 3)),
    backupProtocol: "If no response, notify campus security and selected contact.",
  });
}
