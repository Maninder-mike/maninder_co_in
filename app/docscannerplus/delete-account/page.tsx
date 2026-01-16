
import Link from "next/link";
import { ArrowLeft, Trash2, AlertTriangle, ShieldAlert, Mail } from "lucide-react";

export const metadata = {
    title: "Delete Account Request | DocScanner Plus",
    description: "Request deletion of your DocScanner Plus account and associated data.",
};

export default function DeleteAccountPage() {
    return (
        <div className="min-h-dvh bg-zinc-50 text-zinc-900 selection:bg-red-900 selection:text-white dark:bg-zinc-950 dark:text-zinc-100 dark:selection:bg-red-100 dark:selection:text-red-900">
            {/* Navigation */}
            <nav className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-200 bg-white/80 backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-950/80">
                <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
                    <Link href="/docscannerplus" className="flex items-center gap-2 text-sm font-medium hover:text-zinc-600 dark:hover:text-zinc-300">
                        <ArrowLeft className="h-4 w-4" />
                        Back to DocScanner Plus
                    </Link>
                </div>
            </nav>

            <main className="mx-auto max-w-3xl px-6 py-32">
                <div className="mb-12 space-y-4">
                    <div className="inline-flex items-center gap-2 rounded-full border border-red-200 bg-red-50 px-3 py-1 text-xs font-medium text-red-700 dark:border-red-900/50 dark:bg-red-900/20 dark:text-red-400">
                        <ShieldAlert className="h-3 w-3" />
                        Data Privacy Center
                    </div>
                    <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Delete Your Account</h1>
                    <p className="text-xl text-zinc-600 dark:text-zinc-400">
                        We value your privacy. You have the right to request the deletion of your account and all associated data at any time.
                    </p>
                </div>

                <div className="grid gap-8">
                    {/* What is deleted */}
                    <div className="rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
                        <h2 className="mb-6 flex items-center gap-3 text-2xl font-bold">
                            <Trash2 className="h-6 w-6 text-red-500" />
                            What data will be deleted?
                        </h2>
                        <ul className="space-y-4 pl-4 text-zinc-600 dark:text-zinc-400">
                            {[
                                "Personal Profile Information (Name, Email, Preferences)",
                                "All Scanned Documents and Images stored in Cloud Sync",
                                "OCR Data and Search Metadata",
                                "Device identifiers and usage logs"
                            ].map((item, i) => (
                                <li key={i} className="list-disc pl-2 marker:text-zinc-300 dark:marker:text-zinc-600">
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <div className="mt-6 flex items-start gap-3 rounded-xl bg-amber-50 p-4 text-amber-800 dark:bg-amber-900/20 dark:text-amber-200">
                            <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0" />
                            <p className="text-sm">
                                <strong>Warning:</strong> This action is permanent and cannot be undone. Once deleted, your data cannot be recovered.
                            </p>
                        </div>
                    </div>

                    {/* How to delete - Option 1: In App */}
                    <section className="space-y-4">
                        <h3 className="text-xl font-semibold">Option 1: In-App Deletion (Instant)</h3>
                        <p className="text-zinc-600 dark:text-zinc-400">
                            The fastest way to delete your data is directly through the mobile application:
                        </p>
                        <ol className="list-decimal space-y-2 pl-5 text-zinc-600 dark:text-zinc-400">
                            <li>Open the <strong>DocScanner Plus</strong> app on your device.</li>
                            <li>Navigate to <strong>Settings</strong> {">"} <strong>Account</strong>.</li>
                            <li>Tap <strong>Delete Account</strong> at the bottom of the screen.</li>
                            <li>Confirm your choice. Your data will be wiped immediately.</li>
                        </ol>
                    </section>

                    {/* How to delete - Option 2: Request */}
                    <section className="space-y-4 pt-8 border-t border-zinc-200 dark:border-zinc-800">
                        <h3 className="text-xl font-semibold">Option 2: Submit a Request</h3>
                        <p className="text-zinc-600 dark:text-zinc-400">
                            If you have uninstalled the app or cannot access it, you can submit a manual deletion request here. We will process your request within 7 business days.
                        </p>

                        <form className="mt-6 space-y-4 rounded-2xl border border-zinc-200 bg-zinc-50 p-6 dark:border-zinc-800 dark:bg-zinc-900/50">
                            <div className="grid gap-2">
                                <label htmlFor="email" className="font-medium text-sm">Account Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="you@example.com"
                                    className="w-full rounded-lg border border-zinc-300 bg-white px-4 py-2.5 outline-none focus:ring-2 focus:ring-zinc-900 dark:border-zinc-700 dark:bg-zinc-950 dark:focus:ring-zinc-100"
                                />
                            </div>
                            <div className="grid gap-2">
                                <label htmlFor="reason" className="font-medium text-sm">Reason (Optional)</label>
                                <textarea
                                    id="reason"
                                    rows={3}
                                    className="w-full rounded-lg border border-zinc-300 bg-white px-4 py-2.5 outline-none focus:ring-2 focus:ring-zinc-900 dark:border-zinc-700 dark:bg-zinc-950 dark:focus:ring-zinc-100"
                                ></textarea>
                            </div>
                            <a
                                href="mailto:info@maninder.co.in?subject=Account Deletion Request&body=Please delete my account associated with [Insert Email Here]."
                                className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-red-600 px-4 py-3 font-semibold text-white transition-colors hover:bg-red-700"
                            >
                                <Mail className="h-4 w-4" />
                                Submit Deletion Request
                            </a>
                            <p className="text-center text-xs text-zinc-500">
                                Clicking this button will open your default email client.
                            </p>
                        </form>
                    </section>
                </div>
            </main>
        </div>
    );
}
