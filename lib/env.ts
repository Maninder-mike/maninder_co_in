/**
 * Validates and provides access to required environment variables.
 */
function getRequiredEnv(key: string): string {
  const value = process.env[key];
  if (!value) {
    if (process.env.NODE_ENV === "production") {
      throw new Error(`Missing required environment variable: ${key}`);
    }
    console.warn(`[WARN] Missing environment variable: ${key}`);
    return "";
  }
  return value;
}

export const env = {
  SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL || "",
  SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "",
  SUPABASE_SERVICE_ROLE_KEY: process.env.SUPABASE_SERVICE_ROLE_KEY || "",
  ADMIN_PASSWORD: process.env.ADMIN_PASSWORD || "",
  SESSION_SECRET: process.env.SESSION_SECRET || "",
  isProduction: process.env.NODE_ENV === "production",
  validateRequired() {
    getRequiredEnv("NEXT_PUBLIC_SUPABASE_URL");
    getRequiredEnv("SUPABASE_SERVICE_ROLE_KEY");
  },
} as const;
