"use client";

import { useActionState } from "react";
import { updatePassword } from "./action";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const initialState = {
    error: "",
};

export default function UpdatePasswordForm() {
    const [state, formAction, isPending] = useActionState(updatePassword, initialState);

    return (
        <>
            <form action={formAction} className="space-y-6">
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

                {state?.error && (
                    <div className="text-sm text-red-500 font-medium">
                        {state.error}
                    </div>
                )}

                <button
                    type="submit"
                    disabled={isPending}
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {isPending ? "Updating..." : "Update Password"}
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
        </>
    );
}
