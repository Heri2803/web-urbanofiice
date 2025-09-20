import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST() {
  const cookieStore = await cookies(); // tunggu promise selesai
  cookieStore.delete("isLoggedIn");
  cookieStore.delete("userEmail");

  return NextResponse.json({ success: true });
}
