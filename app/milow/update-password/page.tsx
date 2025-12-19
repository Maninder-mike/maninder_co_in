
import { updatePassword } from "./action";
import { Lock, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { createClient } from "@/lib/supabase/ssr";
import { redirect } from "next/navigation";

export const metadata = {
    title: "Update Password | Milow",
    description: "Set a new password for your Milow account.",
};

export default async function UpdatePasswordPage() {
    const supabase = await createClient();
    const {
        data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
        // If no user, they might have clicked a bad link or session expired.
        // However, the callback should have established the session.
        // If we are strictly secure, we might want to show an error or redirect to login.
        // But since this is a simple implementation, let's redirect to milow main page with a hint.
        redirect("/milow?error=Invalid session. Please request a new password reset link.");
    }

    return (
        <div className="flex min-h-dvh flex-col items-center justify-center bg-zinc-50 p-6 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100">
            <div className="w-full max-w-md space-y-8 rounded-2xl bg-white p-8 shadow-xl dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
                <div className="text-center">
                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/30">
                        <Lock className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <h2 className="mt-2 text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
                        Set new password
                    </h2>
                    <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                        Please enter a secure password for your account associated with <strong>{user.email}</strong>.
                    </p>
                </div>

                <form action={updatePassword} className="space-y-6">
                    <div className="space-y-2">
                        <label
                            htmlFor="password"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                            New Password
                        </label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            required
                            minLength={6}
                            className="flex h-10 w-full rounded-md border border-zinc-300 bg-transparent px-3 py-2 text-sm placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-zinc-700 dark:focus:ring-blue-400 dark:focus:ring-offset-zinc-900"
                            placeholder="••••••••"
                        />
                    </div>
                    <div className="space-y-2">
                        <label
                            htmlFor="confirmPassword"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                            Confirm Password
                        </label>
                        <input
                            id="confirmPassword"
                            name="confirmPassword"
                            type="password"
                            required
                            minLength={6}
                            className="flex h-10 w-full rounded-md border border-zinc-300 bg-transparent px-3 py-2 text-sm placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-zinc-700 dark:focus:ring-blue-400 dark:focus:ring-offset-zinc-900"
                            placeholder="••••••••"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
                    >
                        Update Password
                    </button>
                </form>

                <div className="text-center text-sm">
                    <Link href="/milow" className="font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400">
                        <span className="flex items-center justify-center gap-1">
                            <ArrowLeft className="h-4 w-4" />
                            Back to Milow
                        </span>
                    </Link>
                </div>
            </div>
        </div>
    );
}
