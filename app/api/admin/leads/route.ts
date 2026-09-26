import { NextResponse } from "next/server";
import { isAuthenticated } from "@/lib/auth";
import fs from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "data", "leads.json");

function getLeads(): any[] {
  if (!fs.existsSync(filePath)) return [];
  try {
    return JSON.parse(fs.readFileSync(filePath, "utf-8"));
  } catch {
    return [];
  }
}

function saveLeads(leads: any[]): void {
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(filePath, JSON.stringify(leads, null, 2), "utf-8");
}

export async function GET() {
  const authed = await isAuthenticated();
  if (!authed) {
    return NextResponse.json({ error: "Unauthorized access" }, { status: 401 });
  }

  const leads = getLeads();
  return NextResponse.json({ total: leads.length, leads });
}

export async function PATCH(request: Request) {
  const authed = await isAuthenticated();
  if (!authed) {
    return NextResponse.json({ error: "Unauthorized access" }, { status: 401 });
  }

  try {
    const { id, status } = await request.json();
    if (!id || !status) {
      return NextResponse.json({ error: "Missing id or status" }, { status: 400 });
    }

    const leads = getLeads();
    const index = leads.findIndex((l) => l.id === id);
    if (index === -1) {
      return NextResponse.json({ error: "Lead not found" }, { status: 404 });
    }

    leads[index].status = status;
    leads[index].updatedAt = new Date().toISOString();
    saveLeads(leads);

    return NextResponse.json({ success: true, lead: leads[index] });
  } catch {
    return NextResponse.json({ error: "Failed to update lead" }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  const authed = await isAuthenticated();
  if (!authed) {
    return NextResponse.json({ error: "Unauthorized access" }, { status: 401 });
  }

  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");
    if (!id) {
      return NextResponse.json({ error: "Missing lead id" }, { status: 400 });
    }

    let leads = getLeads();
    leads = leads.filter((l) => l.id !== id);
    saveLeads(leads);

    return NextResponse.json({ success: true, message: "Lead deleted" });
  } catch {
    return NextResponse.json({ error: "Failed to delete lead" }, { status: 500 });
  }
}
