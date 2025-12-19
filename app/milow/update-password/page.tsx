
import { Lock } from "lucide-react";
import { createClient } from "@/lib/supabase/ssr";
import { redirect } from "next/navigation";
import UpdatePasswordForm from "./UpdatePasswordForm";

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

                <UpdatePasswordForm />
            </div>
        </div>
    );
}
