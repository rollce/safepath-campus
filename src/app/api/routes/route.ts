import { NextRequest, NextResponse } from "next/server";

const zoneRisk: Record<string, number> = {
  dormitory: 2,
  library: 1,
  downtown: 5,
  riverside: 4,
  sports: 3,
  northgate: 2,
};

export async function POST(request: NextRequest) {
  const body = await request.json();
  const from = String(body?.from ?? "").toLowerCase();
  const to = String(body?.to ?? "").toLowerCase();
  const hour = Number(body?.hour ?? 21);

  if (!from || !to) {
    return NextResponse.json({ error: "Route points are required" }, { status: 400 });
  }

  const baseRisk = (zoneRisk[from] ?? 3) + (zoneRisk[to] ?? 3);
  const nightFactor = hour >= 22 || hour <= 5 ? 2 : 0;
  const riskScore = Math.min(10, baseRisk / 2 + nightFactor);

  return NextResponse.json({
    riskScore,
    recommendation:
      riskScore >= 7
        ? "Use buddy mode and security escort hotline."
        : riskScore >= 5
          ? "Use lit streets and share live location."
          : "Route considered relatively low risk.",
    routeVariants: [
      { name: "Main streets", eta: 18, lighting: "High", patrol: "Available" },
      { name: "Shortest route", eta: 13, lighting: "Medium", patrol: "Limited" },
      { name: "Campus corridor", eta: 21, lighting: "High", patrol: "Available" },
    ],
  });
}
