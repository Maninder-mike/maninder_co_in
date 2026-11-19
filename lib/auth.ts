import { createHmac, randomBytes, timingSafeEqual } from "crypto";

const SESSION_SECRET =
  process.env.SESSION_SECRET ||
  "fallback-secret-for-dev-only-must-set-session-secret-in-production";

export function signSessionToken(token: string): string {
  const sig = createHmac("sha256", SESSION_SECRET).update(token).digest("hex");
  return `${token}.${sig}`;
}

export function generateSessionToken(): string {
  return randomBytes(32).toString("hex");
}

export function isValidSession(cookieValue: string | undefined): boolean {
  if (!cookieValue) return false;
  const parts = cookieValue.split(".");
  if (parts.length !== 2) return false;
  const [token, sig] = parts;
  if (!token || !sig) return false;

  const expected = createHmac("sha256", SESSION_SECRET).update(token).digest("hex");
  try {
    const sigBuf = Buffer.from(sig, "hex");
    const expBuf = Buffer.from(expected, "hex");
    if (sigBuf.length !== expBuf.length) return false;
    return timingSafeEqual(sigBuf, expBuf);
  } catch {
    return false;
  }
}

export function isTimingSafeMatch(a: string, b: string): boolean {
  try {
    const aBuf = Buffer.from(a);
    const bBuf = Buffer.from(b);
    if (aBuf.length !== bBuf.length) return false;
    return timingSafeEqual(aBuf, bBuf);
  } catch {
    return false;
  }
}
