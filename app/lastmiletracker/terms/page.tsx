import Link from "next/link";
import { ArrowLeft, FileText, Scale, Gavel } from "lucide-react";

export const metadata = {
    title: "Terms of Service | Last Mile Tracker",
};

export default function TermsPage() {
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

            <main className="mx-auto max-w-3xl px-6 pt-32 pb-24">
                <div className="space-y-12">
                    <header className="space-y-4">
                        <div className="inline-flex items-center gap-2 rounded-full bg-zinc-100 dark:bg-zinc-900 px-3 py-1 text-xs font-bold text-zinc-600 dark:text-zinc-400">
                            <FileText className="h-3 w-3" />
                            Usage Agreement
                        </div>
                        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Terms of Service</h1>
                        <p className="text-zinc-500">Effective Date: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                    </header>

                    <article className="prose dark:prose-invert max-w-none space-y-8">
                        <p className="text-lg text-zinc-600 dark:text-zinc-400">
                            Welcome to Last Mile Tracker. By utilizing our hardware devices and software services, you agree to the following terms.
                        </p>

                        <div>
                            <h2 className="text-2xl font-bold flex items-center gap-2">
                                <Scale className="h-5 w-5 text-emerald-500" />
                                1. Service Use
                            </h2>
                            <p className="mt-4 text-zinc-600 dark:text-zinc-400">
                                Last Mile Tracker provides IoT-based fleet management solutions. You agree to use these services only for lawful purposes related to fleet operations and personnel management.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold flex items-center gap-2">
                                <Gavel className="h-5 w-5 text-blue-500" />
                                2. Responsibility
                            </h2>
                            <p className="mt-4 text-zinc-600 dark:text-zinc-400">
                                You are responsible for the installation of the hardware and ensuring it complies with local vehicle safety standards. We are not liable for any vehicle modifications or damage resulting from improper installation.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold">3. Data Accuracy</h2>
                            <p className="mt-4 text-zinc-600 dark:text-zinc-400">
                                While we strive for high precision, telemetry data can be affected by signal interference and environmental factors. Our services are provided &ldquo;as is&rdquo; without guarantees of 100% uptime or accuracy.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold">4. Termination</h2>
                            <p className="mt-4 text-zinc-600 dark:text-zinc-400">
                                We reserve the right to suspend accounts that violate our security protocols or engage in unauthorized data scraping/reverse engineering of our hardware.
                            </p>
                        </div>
                    </article>

                    <footer className="pt-12 border-t border-zinc-200 dark:border-zinc-800 text-sm text-zinc-500">
                        Agreement governed by the laws of Canada. Managed by Mike &amp; Co.
                    </footer>
                </div>
            </main>
        </div>
    );
}
