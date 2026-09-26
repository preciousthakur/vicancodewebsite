import { NextResponse } from "next/server";
import { ADMIN_CONFIG, createSessionToken } from "@/lib/auth";

export async function POST(request: Request) {
  try {
    const { username, password } = await request.json();

    if (username !== ADMIN_CONFIG.username || password !== ADMIN_CONFIG.password) {
      return NextResponse.json(
        { error: "Invalid username or password" },
        { status: 401 }
      );
    }

    const token = createSessionToken(username);

    const response = NextResponse.json({
      success: true,
      message: "Authentication successful"
    });

    response.cookies.set({
      name: ADMIN_CONFIG.cookieName,
      value: token,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 7 * 24 * 60 * 60 // 7 days
    });

    return response;
  } catch (error) {
    return NextResponse.json({ error: "Login failed" }, { status: 500 });
  }
}
