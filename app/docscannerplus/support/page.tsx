
import Link from "next/link";
import { ArrowLeft, Mail, MessageSquare, ExternalLink } from "lucide-react";

export const metadata = {
    title: "Support | DocScanner Plus",
    description: "Get help and support for DocScanner Plus. We are here to assist you.",
};

export default function SupportPage() {
    return (
        <div className="min-h-dvh bg-zinc-50 text-zinc-900 selection:bg-indigo-900 selection:text-white dark:bg-zinc-950 dark:text-zinc-100 dark:selection:bg-indigo-100 dark:selection:text-indigo-900">
            {/* Navigation */}
            <nav className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-200 bg-white/80 backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-950/80">
                <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
                    <Link href="/docscannerplus" className="flex items-center gap-2 text-sm font-medium hover:text-zinc-600 dark:hover:text-zinc-300">
                        <ArrowLeft className="h-4 w-4" />
                        Back to DocScanner Plus
                    </Link>
                </div>
            </nav>

            <main className="mx-auto max-w-4xl px-6 py-32">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">How can we help?</h1>
                    <p className="mt-4 text-xl text-zinc-600 dark:text-zinc-400">
                        Find answers to common questions or get in touch with our team.
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-2">
                    {/* Contact Card */}
                    <div className="rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
                        <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 dark:bg-blue-900/30">
                            <Mail className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                        </div>
                        <h2 className="text-2xl font-bold">Email Support</h2>
                        <p className="mt-2 text-zinc-600 dark:text-zinc-400 mb-6">
                            For technical issues, feedback, or general inquiries, shoot us an email. We typically respond within 24 hours.
                        </p>
                        <a
                            href="mailto:info@maninder.co.in"
                            className="inline-flex items-center gap-2 font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                        >
                            info@maninder.co.in <ArrowLeft className="h-4 w-4 rotate-180" />
                        </a>
                    </div>

                    {/* FAQ/Resources Card */}
                    <div className="rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
                        <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-purple-100 dark:bg-purple-900/30">
                            <MessageSquare className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                        </div>
                        <h2 className="text-2xl font-bold">Common Topics</h2>
                        <ul className="mt-4 space-y-3">
                            <li>
                                <Link href="/docscannerplus/privacypolicy" className="flex items-center justify-between group">
                                    <span className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100">Privacy Policy</span>
                                    <ExternalLink className="h-4 w-4 text-zinc-300 transition-colors group-hover:text-zinc-500" />
                                </Link>
                            </li>
                            <li>
                                <Link href="/docscannerplus/terms" className="flex items-center justify-between group">
                                    <span className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100">Terms & Conditions</span>
                                    <ExternalLink className="h-4 w-4 text-zinc-300 transition-colors group-hover:text-zinc-500" />
                                </Link>
                            </li>
                            <li>
                                <Link href="/docscannerplus/delete-account" className="flex items-center justify-between group">
                                    <span className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100">Request Account Deletion</span>
                                    <ExternalLink className="h-4 w-4 text-zinc-300 transition-colors group-hover:text-zinc-500" />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* FAQ Section */}
                <div className="mt-20">
                    <h2 className="text-2xl font-bold mb-8">Frequently Asked Questions</h2>
                    <div className="space-y-6">
                        <div className="border-b border-zinc-200 pb-6 dark:border-zinc-800">
                            <h3 className="font-semibold text-lg">Where is my data stored?</h3>
                            <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                                We prioritize on-device storage for your security. If you enable Cloud Sync, your formatted documents are securely stored on our encrypted servers using Google Cloud services.
                            </p>
                        </div>
                        <div className="border-b border-zinc-200 pb-6 dark:border-zinc-800">
                            <h3 className="font-semibold text-lg">Is the app free to use?</h3>
                            <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                                DocScanner Plus offers a robust free version with unlimited scanning. Some advanced features like heavy-duty OCR and Cloud Sync may require a premium subscription.
                            </p>
                        </div>
                        <div className="border-b border-zinc-200 pb-6 dark:border-zinc-800">
                            <h3 className="font-semibold text-lg">How do I cancel my subscription?</h3>
                            <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                                Subscriptions are managed directly by the Google Play Store. Go to Play Store &gt; Profile &gt; Payments &amp; subscriptions &gt; Subscriptions to manage or cancel.
                            </p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
