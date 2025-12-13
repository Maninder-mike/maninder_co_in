
import Link from "next/link";
import { ArrowLeft, Check, Github, Smartphone, Shield, Truck, BarChart3, Map as MapIcon, FileText, Settings } from "lucide-react";

export const metadata = {
    title: "Milow | Semi Trucking App",
    description: "A modern Flutter mobile application designed for semi-truck drivers and trucking companies.",
};

export default function MilowPage() {
    return (
        <div className="min-h-dvh bg-zinc-50 text-zinc-900 selection:bg-blue-900 selection:text-white dark:bg-zinc-950 dark:text-zinc-100 dark:selection:bg-blue-100 dark:selection:text-blue-900">
            {/* Background Grid */}
            <div className="fixed inset-0 z-0 pointer-events-none bg-grid-pattern opacity-50"></div>

            {/* Navigation */}
            <nav className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-200 bg-white/80 backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-950/80">
                <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
                    <Link href="/" className="flex items-center gap-2 text-sm font-medium hover:text-zinc-600 dark:hover:text-zinc-300">
                        <ArrowLeft className="h-4 w-4" />
                        Back to Home
                    </Link>
                    <div className="flex gap-4">
                        <a
                            href="https://github.com/Maninder-mike/milow"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-100 px-4 py-2 text-sm font-medium transition-colors hover:bg-zinc-200 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:bg-zinc-800"
                        >
                            <Github className="h-4 w-4" />
                            <span>GitHub</span>
                        </a>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="relative z-10 mx-auto flex min-h-[80vh] max-w-6xl flex-col justify-center px-6 pt-20">
                <div className="max-w-3xl space-y-8">
                    <div className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700 dark:border-blue-900/50 dark:bg-blue-900/20 dark:text-blue-400">
                        Open Source Flutter Project
                    </div>

                    <h1 className="text-6xl font-bold tracking-tighter sm:text-8xl">
                        Milow<span className="text-blue-600">.</span>
                    </h1>

                    <p className="max-w-2xl text-2xl font-light leading-relaxed text-zinc-600 dark:text-zinc-400">
                        The modern companion for semi-truck drivers. Manage trips, track fuel, and streamline operations with a beautiful, native mobile experience.
                    </p>

                    <div className="flex flex-wrap gap-4 pt-4">
                        <a
                            href="https://github.com/Maninder-mike/milow"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition-all hover:bg-blue-700 hover:scale-105 active:scale-95"
                        >
                            <Github className="h-5 w-5" />
                            View on GitHub
                        </a>
                        <Link
                            href="/milow/privacypolicy"
                            className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-6 py-3 text-sm font-semibold text-zinc-900 shadow-sm transition-all hover:bg-zinc-50 hover:text-blue-600 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-100 dark:hover:bg-zinc-800"
                        >
                            <Shield className="h-5 w-5" />
                            Privacy Policy
                        </Link>
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="relative z-10 mx-auto max-w-6xl px-6 py-32">
                <h2 className="mb-16 text-3xl font-bold tracking-tighter sm:text-4xl">Everything you need for the road.</h2>

                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    <FeatureCard
                        icon={<Shield className="h-6 w-6 text-blue-500" />}
                        title="Secure Auth"
                        description="Enterprise-grade security with email/password, social login, and biometric authentication support."
                    />
                    <FeatureCard
                        icon={<BarChart3 className="h-6 w-6 text-blue-500" />}
                        title="Dashboard Analytics"
                        description="Visualize weekly performance, track mileage, and monitor fuel consumption with interactive charts."
                    />
                    <FeatureCard
                        icon={<MapIcon className="h-6 w-6 text-blue-500" />}
                        title="Route Exploration"
                        description="Discover new routes, find truck-friendly stops, and search for destinations with integrated mapping."
                    />
                    <FeatureCard
                        icon={<Truck className="h-6 w-6 text-blue-500" />}
                        title="Trip Management"
                        description="Effortlessly record trips, automate mileage tracking via GPS, and manage fuel entries."
                    />
                    <FeatureCard
                        icon={<FileText className="h-6 w-6 text-blue-500" />}
                        title="Smart Exports"
                        description="Generate professional PDF reports of your logs and share them instantly via email or AirDrop."
                    />
                    <FeatureCard
                        icon={<Settings className="h-6 w-6 text-blue-500" />}
                        title="Customization"
                        description="Personalize your experience with dark mode, profile settings, and notification preferences."
                    />
                </div>
            </section>

            {/* Tech Stack */}
            <section className="relative z-10 border-t border-zinc-200 bg-zinc-50/50 py-32 dark:border-zinc-800 dark:bg-zinc-900/50">
                <div className="mx-auto max-w-6xl px-6">
                    <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
                        <div>
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Built with modern tech.</h2>
                            <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
                                Milow is engineered for performance and reliability using the latest cross-platform technologies.
                            </p>
                        </div>
                        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                            <TechItem name="Flutter 3.10+" />
                            <TechItem name="Supabase" />
                            <TechItem name="PostgreSQL" />
                            <TechItem name="Dart 3" />
                            <TechItem name="Riverpod" />
                            <TechItem name="GoRouter" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="relative z-10 border-t border-zinc-200 bg-white py-12 dark:border-zinc-800 dark:bg-zinc-950">
                <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 sm:flex-row">
                    <p className="text-sm text-zinc-500">© {new Date().getFullYear()} Maninder. Open Source.</p>
                    <div className="flex gap-6 text-sm font-medium">
                        <Link href="/milow/privacypolicy" className="hover:text-blue-600 dark:hover:text-blue-400">Privacy Policy</Link>
                        <a href="https://github.com/Maninder-mike/milow" className="hover:text-blue-600 dark:hover:text-blue-400">Repository</a>
                        <a href="https://github.com/Maninder-mike/milow/issues" className="hover:text-blue-600 dark:hover:text-blue-400">Report Issue</a>
                    </div>
                </div>
            </footer>
        </div>
    );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
    return (
        <div className="group rounded-2xl border border-zinc-200 bg-white p-8 transition-all hover:border-blue-200 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-blue-900/50">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 dark:bg-blue-900/20">
                {icon}
            </div>
            <h3 className="mb-2 text-xl font-bold">{title}</h3>
            <p className="text-zinc-600 dark:text-zinc-400">{description}</p>
        </div>
    );
}

function TechItem({ name }: { name: string }) {
    return (
        <div className="flex items-center justify-center rounded-lg border border-zinc-200 bg-white p-4 font-semibold text-zinc-700 shadow-sm dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300">
            {name}
        </div>
    );
}
