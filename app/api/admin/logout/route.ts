import { NextResponse } from "next/server";
import { ADMIN_CONFIG } from "@/lib/auth";

export async function POST() {
  const response = NextResponse.json({ success: true, message: "Logged out" });
  response.cookies.delete(ADMIN_CONFIG.cookieName);
  return response;
}
