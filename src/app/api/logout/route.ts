import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST() {
  cookies().delete("isLoggedIn");
  cookies().delete("userEmail");
  return NextResponse.json({ success: true });
}
