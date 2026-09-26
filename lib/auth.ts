import crypto from "crypto";
import { cookies } from "next/headers";

const SECRET = process.env.ADMIN_SESSION_SECRET || "vican-code-super-secret-key-2026-derabassi";
const COOKIE_NAME = "vican_admin_session";

export const ADMIN_CONFIG = {
  username: process.env.ADMIN_USERNAME || "admin",
  password: process.env.ADMIN_PASSWORD || "Vican@Admin#2026",
  cookieName: COOKIE_NAME
};

export function createSessionToken(username: string): string {
  const timestamp = Date.now();
  const data = `${username}:${timestamp}`;
  const signature = crypto.createHmac("sha256", SECRET).update(data).digest("hex");
  return Buffer.from(`${data}:${signature}`).toString("base64");
}

export function verifySessionToken(token: string): boolean {
  try {
    const decoded = Buffer.from(token, "base64").toString("utf-8");
    const [username, timestampStr, signature] = decoded.split(":");
    if (!username || !timestampStr || !signature) return false;

    // Check if expired (7 days)
    const timestamp = Number(timestampStr);
    if (isNaN(timestamp) || Date.now() - timestamp > 7 * 24 * 60 * 60 * 1000) {
      return false;
    }

    const expectedSig = crypto.createHmac("sha256", SECRET).update(`${username}:${timestampStr}`).digest("hex");
    return crypto.timingSafeEqual(Buffer.from(signature), Buffer.from(expectedSig));
  } catch {
    return false;
  }
}

export async function isAuthenticated(): Promise<boolean> {
  const cookieStore = await cookies();
  const sessionCookie = cookieStore.get(COOKIE_NAME);
  if (!sessionCookie || !sessionCookie.value) return false;
  return verifySessionToken(sessionCookie.value);
}
