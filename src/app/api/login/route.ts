import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST(req: Request) {
  const { email, password } = await req.json();

  // Default credentials
  const defaultCredentials = {
    email: "admin@urbanoffice.com",
    password: "admin123",
  };

  if (email === defaultCredentials.email && password === defaultCredentials.password) {
    const response = NextResponse.json({ success: true });
    // Set cookie
    response.cookies.set("isLoggedIn", "true", {
      httpOnly: true,
      path: "/",
      maxAge: 60 * 60 * 24, // 1 hari
    });
    response.cookies.set("userEmail", email, {
      httpOnly: true,
      path: "/",
      maxAge: 60 * 60 * 24,
    });

    return NextResponse.json({ success: true });
  }

  return NextResponse.json({ success: false }, { status: 401 });
}
