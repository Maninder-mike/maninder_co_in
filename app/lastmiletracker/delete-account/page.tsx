import Link from "next/link";
import { ArrowLeft, Trash2, ShieldAlert, Clock } from "lucide-react";

export const metadata = {
    title: "Delete Account | Last Mile Tracker",
};

export default function DeleteAccountPage() {
    return (
        <div className="min-h-dvh bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100">
            <nav className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-200 bg-white/80 backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-950/80">
                <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
                    <Link href="/lastmiletracker" className="flex items-center gap-2 text-sm font-medium hover:text-emerald-600">
                        <ArrowLeft className="h-4 w-4" />
                        Back to Last Mile Tracker
                    </Link>
                </div>
            </nav>

            <main className="mx-auto max-w-2xl px-6 pt-32 pb-24">
                <div className="space-y-8">
                    <header className="space-y-4">
                        <div className="inline-flex items-center gap-2 rounded-full bg-red-100 dark:bg-red-900/30 px-3 py-1 text-xs font-bold text-red-700 dark:text-red-400">
                            <Trash2 className="h-3 w-3" />
                            Data Management
                        </div>
                        <h1 className="text-4xl font-bold tracking-tight">Delete Account</h1>
                        <p className="text-lg text-zinc-500">
                            We&apos;re sorry to see you go. Below is information on how to request deletion of your account and associated data.
                        </p>
                    </header>

                    <div className="glass p-8 rounded-3xl border border-red-200 dark:border-red-900/30 space-y-6">
                        <div className="flex gap-4">
                            <div className="flex-shrink-0">
                                <ShieldAlert className="h-6 w-6 text-red-600" />
                            </div>
                            <div className="space-y-2">
                                <h3 className="font-bold">What happens next?</h3>
                                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                                    When you delete your account, your profile, active fleet assignments, and telemetry history will be permanently removed from our active database.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="flex-shrink-0">
                                <Clock className="h-6 w-6 text-blue-600" />
                            </div>
                            <div className="space-y-2">
                                <h3 className="font-bold">Processing Time</h3>
                                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                                    Deletion requests are typically processed within 48-72 hours. Some data may remain in archival backups for a limited period as required by law.
                                </p>
                            </div>
                        </div>
                    </div>

                    <section className="space-y-6">
                        <h2 className="text-2xl font-bold">How to delete</h2>
                        <div className="space-y-4">
                            <div className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
                                <h3 className="font-bold mb-2">Option 1: In-App</h3>
                                <p className="text-sm text-zinc-500 mb-4">Go to Settings &gt; Account &gt; Delete Account in the Last Mile Tracker mobile app.</p>
                            </div>
                            <div className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
                                <h3 className="font-bold mb-2">Option 2: Email</h3>
                                <p className="text-sm text-zinc-500 mb-4">Send an email to <a href="mailto:delete@maninder.co.in" className="text-emerald-600 font-bold">delete@maninder.co.in</a> from your registered email address.</p>
                            </div>
                        </div>
                    </section>

                    <footer className="pt-12 text-center">
                        <p className="text-sm text-zinc-500 font-medium italic">
                            &ldquo;Your data belongs to you. We respect your decision to remove it.&rdquo;
                        </p>
                    </footer>
                </div>
            </main>
        </div>
    );
}
