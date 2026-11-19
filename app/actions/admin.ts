"use server";

import { cookies, headers } from "next/headers";
import { redirect } from "next/navigation";
import {
  generateSessionToken,
  signSessionToken,
  isTimingSafeMatch,
} from "@/lib/auth";

// Rate limiting state for admin login: max 5 attempts per 15 minutes per IP
const loginAttempts = new Map<string, { count: number; resetAt: number }>();
const MAX_LOGIN_ATTEMPTS = 5;
const LOGIN_WINDOW_MS = 15 * 60 * 1000;

function checkLoginRateLimit(ip: string): boolean {
  const now = Date.now();
  const record = loginAttempts.get(ip);
  if (!record || now > record.resetAt) {
    loginAttempts.set(ip, { count: 1, resetAt: now + LOGIN_WINDOW_MS });
    return true;
  }
  record.count += 1;
  return record.count <= MAX_LOGIN_ATTEMPTS;
}

export async function loginAdmin(formData: FormData) {
  const headerList = await headers();
  const ip =
    headerList.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    headerList.get("x-real-ip") ||
    "unknown";

  if (!checkLoginRateLimit(ip)) {
    return { error: "Too many login attempts. Please try again in 15 minutes." };
  }

  const password = formData.get("password")?.toString() ?? "";
  const expectedPassword = process.env.ADMIN_PASSWORD;

  if (!expectedPassword) {
    return { error: "Admin access is currently unconfigured." };
  }

  // Timing-safe password comparison
  const passwordsMatch = isTimingSafeMatch(password, expectedPassword);

  if (passwordsMatch) {
    const token = generateSessionToken();
    const signedToken = signSessionToken(token);

    const cookieStore = await cookies();
    cookieStore.set("admin_session", signedToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24, // 1 day
      path: "/",
      sameSite: "lax",
    });

    redirect("/admin");
  }

  return { error: "Invalid password" };
}

export async function logoutAdmin() {
  const cookieStore = await cookies();
  cookieStore.delete("admin_session");
  redirect("/admin");
}
