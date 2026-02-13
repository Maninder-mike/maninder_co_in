import Link from "next/link";
import { ArrowLeft, Shield, Lock, Eye, Cloud } from "lucide-react";

export const metadata = {
    title: "Privacy Policy | Last Mile Tracker",
};

export default function PrivacyPolicy() {
    return (
        <div className="min-h-dvh bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 selection:bg-emerald-900 selection:text-white">
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
                        <div className="inline-flex items-center gap-2 rounded-full bg-emerald-100 dark:bg-emerald-900/30 px-3 py-1 text-xs font-bold text-emerald-700 dark:text-emerald-400">
                            <Shield className="h-3 w-3" />
                            Data Security Protocol
                        </div>
                        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Privacy Policy</h1>
                        <p className="text-zinc-500">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                    </header>

                    <section className="space-y-6">
                        <p className="text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
                            At Last Mile Tracker, we are committed to protecting your privacy. This policy explains how we handle your data when you use our ESP32-based hardware and mobile applications.
                        </p>

                        <div className="grid gap-6 sm:grid-cols-2">
                            <div className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm">
                                <LocationIcon className="h-8 w-8 text-emerald-600 mb-4" />
                                <h3 className="font-bold mb-2">Location Data</h3>
                                <p className="text-sm text-zinc-500">We collect precise geolocation data to enable real-time fleet tracking and arrival predictions.</p>
                            </div>
                            <div className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm">
                                <ActivityIcon className="h-8 w-8 text-blue-600 mb-4" />
                                <h3 className="font-bold mb-2">Telemetry</h3>
                                <p className="text-sm text-zinc-500">Hardware vitals (battery, signal strength, IMU data) are monitored for predictive maintenance.</p>
                            </div>
                        </div>
                    </section>

                    <article className="prose dark:prose-invert max-w-none space-y-8">
                        <div>
                            <h2 className="text-2xl font-bold flex items-center gap-2">
                                <Lock className="h-5 w-5 text-emerald-500" />
                                1. Data Collection
                            </h2>
                            <p className="mt-4 text-zinc-600 dark:text-zinc-400">
                                We collect information that you provide directly to us (registration, support) and data generated automatically by the IoT hardware (vessel tracking, route optimization).
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold flex items-center gap-2">
                                <Cloud className="h-5 w-5 text-blue-500" />
                                2. Data Usage
                            </h2>
                            <ul className="mt-4 list-disc list-inside space-y-2 text-zinc-600 dark:text-zinc-400">
                                <li>Real-time asset visibility</li>
                                <li>Route efficiency analytics</li>
                                <li>Automated incident reporting</li>
                                <li>System health monitoring</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold flex items-center gap-2">
                                <Eye className="h-5 w-5 text-zinc-400" />
                                3. Your Rights
                            </h2>
                            <p className="mt-4 text-zinc-600 dark:text-zinc-400">
                                You have the right to access, correct, or delete your personal data. You can manage these settings directly in the Fleet Dashboard or by contacting support.
                            </p>
                            <Link href="/lastmiletracker/delete-account" className="mt-4 inline-block text-emerald-600 font-medium hover:underline">
                                Learn about account deletion →
                            </Link>
                        </div>
                    </article>

                    <footer className="pt-12 border-t border-zinc-200 dark:border-zinc-800 text-sm text-zinc-500">
                        If you have questions about this policy, please contact <a href="mailto:info@maninder.co.in" className="text-emerald-600 hover:underline">info@maninder.co.in</a>.
                    </footer>
                </div>
            </main>
        </div>
    );
}

function LocationIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg {...props} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
            <circle cx="12" cy="9" r="2" />
        </svg>
    );
}

function ActivityIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg {...props} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
        </svg>
    );
}
