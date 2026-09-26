import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const key = searchParams.get("key");
    const adminKey = process.env.ADMIN_LEADS_KEY || "vican2026";

    if (key !== adminKey) {
      return NextResponse.json(
        { error: "Unauthorized. Pass ?key=vican2026 or configure ADMIN_LEADS_KEY in .env" },
        { status: 401 }
      );
    }

    const filePath = path.join(process.cwd(), "data", "leads.json");
    if (!fs.existsSync(filePath)) {
      return NextResponse.json({ total: 0, leads: [] });
    }

    const data = JSON.parse(fs.readFileSync(filePath, "utf-8"));
    return NextResponse.json({ total: data.length, leads: data });
  } catch (error) {
    return NextResponse.json({ error: "Failed to read leads" }, { status: 500 });
  }
}
