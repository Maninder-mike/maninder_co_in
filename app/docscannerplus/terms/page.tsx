
import Link from "next/link";
import { ArrowLeft, FileText } from "lucide-react";

export const metadata = {
    title: "Terms and Conditions | DocScanner Plus",
    description: "Read the Terms and Conditions for using DocScanner Plus.",
};

export default function TermsPage() {
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

            <main className="mx-auto max-w-3xl px-6 py-32">
                <div className="mb-12">
                    <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-medium text-zinc-700 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300">
                        <FileText className="h-3 w-3" />
                        Legal Documentation
                    </div>
                    <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">Terms and Conditions</h1>
                    <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
                        Last Updated: {new Date().toLocaleDateString()}
                    </p>
                </div>

                <div className="prose prose-zinc dark:prose-invert max-w-none">
                    <h3>1. Agreement to Terms</h3>
                    <p>
                        By accessing or using the DocScanner Plus mobile application, you agree to be bound by these Terms and Conditions. If you disagree with any part of these terms, you may not use our service.
                    </p>

                    <h3>2. Intellectual Property Rights</h3>
                    <p>
                        Unless otherwise indicated, the Application is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Application (collectively, the “Content”) and the trademarks, service marks, and logos contained therein (the “Marks”) are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws.
                    </p>

                    <h3>3. User Representations</h3>
                    <p>
                        By using the Application, you represent and warrant that: (1) all registration information you submit will be true, accurate, current, and complete; (2) you will maintain the accuracy of such information and promptly update such registration information as necessary; (3) you have the legal capacity and you agree to comply with these Terms of Use; (4) you will not access the Application through automated or non-human means, whether through a bot, script or otherwise.
                    </p>

                    <h3>4. Prohibited Activities</h3>
                    <p>
                        You may not access or use the Application for any purpose other than that for which we make the Application available. The Application may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.
                    </p>

                    <h3>5. Subscriptions and Payments</h3>
                    <p>
                        Some parts of the Service are billed on a subscription basis ("Subscription(s)"). You will be billed in advance on a recurring and periodic basis (such as daily, weekly, monthly or annually), depending on the type of Subscription plan you select when purchasing the Subscription.
                    </p>

                    <h3>6. Limitation of Liability</h3>
                    <p>
                        In no event will we or our directors, employees, or agents be liable to you or any third party for any direct, indirect, consequential, exemplary, incidental, special, or punitive damages, including lost profit, lost revenue, loss of data, or other damages arising from your use of the Application, even if we have been advised of the possibility of such damages.
                    </p>

                    <h3>7. Contact Us</h3>
                    <p>If you have questions or comments about these Terms, please contact us at:</p>
                    <p>
                        <strong>Email:</strong> info@maninder.co.in<br />
                        <strong>Website:</strong> www.maninder.co.in
                    </p>
                </div>
            </main>
        </div>
    );
}
