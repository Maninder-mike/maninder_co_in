
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Github, Shield, Truck, BarChart3, Map as MapIcon, FileText, Settings, Sparkles, Vibrate, Zap, Monitor, Smartphone, Users, Receipt, Route, MessageSquare, Bell, Building2, Calculator, CheckCircle2 } from "lucide-react";
import { HeroImage } from "./_components/hero-image";
import { BrandStrip } from "./_components/brand-strip";
import { BentoCard } from "./_components/bento-card";
import { MsStoreBadge } from "./_components/ms-store-badge";

export const metadata = {
    title: "Milow | Semi Trucking Platform",
    description: "A modern Flutter platform for semi-truck drivers and trucking companies. Driver mobile app + Terminal desktop app.",
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
            {/* Hero Section */}
            <section className="relative z-10 mx-auto grid max-w-7xl gap-12 px-6 pt-32 lg:grid-cols-2 lg:items-center">
                <div className="max-w-3xl space-y-8">
                    <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700 dark:border-blue-900/50 dark:bg-blue-900/20 dark:text-blue-400">
                        <span className="relative flex h-2 w-2">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75"></span>
                            <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-500"></span>
                        </span>
                        Open Source Flutter Platform
                    </div>

                    <h1 className="text-6xl font-bold tracking-tighter sm:text-7xl xl:text-8xl">
                        Milow<span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">.</span>
                    </h1>

                    <p className="max-w-2xl text-xl font-light leading-relaxed text-zinc-600 dark:text-zinc-400 sm:text-2xl">
                        The complete trucking operating system. <span className="font-medium text-zinc-900 dark:text-zinc-100">Driver App</span> for the road, <span className="font-medium text-zinc-900 dark:text-zinc-100">Terminal</span> for the office. Built for scale.
                    </p>

                    <div className="flex flex-wrap gap-4 pt-4">
                        <a
                            href="https://github.com/Maninder-mike/milow"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group inline-flex items-center gap-2 rounded-full bg-zinc-900 px-8 py-4 text-sm font-semibold text-white shadow-xl shadow-zinc-900/20 transition-all hover:scale-105 hover:bg-zinc-800 active:scale-95 dark:bg-white dark:text-zinc-900 dark:shadow-white/10 dark:hover:bg-zinc-100"
                        >
                            <Github className="h-5 w-5 transition-transform group-hover:rotate-12" />
                            Start Building
                        </a>
                        <Link
                            href="/milow/privacypolicy"
                            className="group inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-8 py-4 text-sm font-semibold text-zinc-900 shadow-sm transition-all hover:bg-zinc-50 hover:text-blue-600 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-100 dark:hover:bg-zinc-800"
                        >
                            <Shield className="h-5 w-5 text-zinc-400 transition-colors group-hover:text-blue-500" />
                            Privacy & Security
                        </Link>
                    </div>

                    <div className="flex items-center gap-6 pt-4 text-sm text-zinc-500">
                        <div className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-green-500" />
                            <span>Free & Open Source</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-green-500" />
                            <span>No Credit Card Req.</span>
                        </div>
                    </div>
                </div>

                <div className="relative hidden lg:block">
                    <HeroImage />
                </div>
            </section>

            {/* Social Proof */}
            <BrandStrip />

            {/* Driver App Spotlight */}
            <section className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-6 py-32 lg:grid-cols-2">
                <div className="space-y-8">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600 shadow-xl shadow-blue-500/20">
                        <Smartphone className="h-8 w-8 text-white" />
                    </div>
                    <div>
                        <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl">Driver App</h2>
                        <p className="mt-4 text-xl text-zinc-600 dark:text-zinc-400">
                            The ultimate companion for the modern trucker. Detailed maps, trip logging, and instant dispatch communication.
                        </p>
                    </div>

                    <div className="space-y-4">
                        {[
                            "Pre-trip inspections & DVIRs",
                            "Offline-first navigation",
                            "Instant document scanning"
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-3">
                                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/30">
                                    <Truck className="h-3 w-3 text-blue-600 dark:text-blue-400" />
                                </div>
                                <span className="font-medium text-zinc-700 dark:text-zinc-300">{item}</span>
                            </div>
                        ))}
                    </div>

                    <a
                        href="https://play.google.com/apps/testing/maninder.co.in.milow"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block transition-transform hover:scale-105 active:scale-95"
                    >
                        <Image
                            alt="Get it on Google Play"
                            src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                            width={203}
                            height={60}
                            style={{ width: "auto", height: "60px" }}
                        />
                    </a>
                </div>

                {/* Mobile Mockup Placeholder */}
                <div className="relative mx-auto h-[600px] w-full max-w-[320px] rounded-[3rem] border-4 border-zinc-900 bg-zinc-950 shadow-2xl dark:border-zinc-800">
                    {/* Dynamic Island / Notch */}
                    <div className="absolute left-1/2 top-4 z-20 h-7 w-24 -translate-x-1/2 rounded-full bg-black"></div>
                    <div className="h-full w-full overflow-hidden rounded-[2.7rem] bg-zinc-900">
                        {/* Mock UI */}
                        <div className="h-full bg-zinc-50 p-6 dark:bg-zinc-900/50">
                            <div className="mt-12 flex justify-between">
                                <div>
                                    <div className="h-2 w-20 rounded-full bg-zinc-200 dark:bg-zinc-800" />
                                    <div className="mt-2 h-6 w-32 rounded-lg bg-zinc-200 dark:bg-zinc-800" />
                                </div>
                                <div className="h-10 w-10 rounded-full bg-blue-100 dark:bg-blue-900/30" />
                            </div>
                            <div className="mt-8 space-y-4">
                                <div className="h-32 rounded-2xl bg-blue-500 shadow-lg shadow-blue-500/20" />
                                <div className="h-24 rounded-2xl bg-white shadow-sm dark:bg-zinc-800" />
                                <div className="h-24 rounded-2xl bg-white shadow-sm dark:bg-zinc-800" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Terminal App Spotlight */}
            <section className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 border-t border-zinc-200 bg-zinc-50/50 px-6 py-32 dark:border-zinc-800 dark:bg-zinc-900/20 lg:grid-cols-2">
                {/* Desktop Mockup Placeholder (Left) */}
                <div className="order-2 lg:order-1">
                    <div className="relative mx-auto aspect-video w-full overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-2xl dark:border-zinc-800 dark:bg-zinc-900">
                        {/* Mock Desktop UI */}
                        <div className="absolute inset-x-0 top-0 flex h-8 items-center gap-2 border-b border-zinc-100 bg-zinc-50 px-4 dark:border-zinc-800 dark:bg-zinc-900">
                            <div className="h-3 w-3 rounded-full bg-red-400" />
                            <div className="h-3 w-3 rounded-full bg-amber-400" />
                            <div className="h-3 w-3 rounded-full bg-green-400" />
                        </div>
                        <div className="flex h-full pt-8">
                            <div className="w-16 border-r border-zinc-100 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900" />
                            <div className="flex-1 p-6">
                                <div className="flex gap-4">
                                    <div className="w-1/3 space-y-3">
                                        <div className="h-24 rounded-lg bg-violet-50 dark:bg-violet-900/10" />
                                        <div className="h-24 rounded-lg bg-zinc-100 dark:bg-zinc-800" />
                                    </div>
                                    <div className="flex-1 space-y-3">
                                        <div className="h-8 w-1/4 rounded-lg bg-zinc-100 dark:bg-zinc-800" />
                                        <div className="h-full rounded-lg bg-zinc-50 dark:bg-zinc-900/50" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Content (Right) */}
                <div className="order-1 flex flex-col items-start lg:order-2">
                    <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-violet-600 shadow-xl shadow-violet-500/20">
                        <Monitor className="h-8 w-8 text-white" />
                    </div>
                    <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl">Terminal App</h2>
                    <p className="mt-4 text-xl text-zinc-600 dark:text-zinc-400">
                        A powerful command center for dispatchers. Manage fleets, loads, and invoices with desktop-grade productivity.
                    </p>

                    <div className="my-8 grid grid-cols-2 gap-4">
                        {[
                            "Kanban Dispatch Board",
                            "CRM & Load Management",
                            "Automated Settlements",
                            "Fleet Tracking"
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-2">
                                <CheckCircle2 className="h-4 w-4 text-violet-500" />
                                <span className="font-medium text-zinc-700 dark:text-zinc-300">{item}</span>
                            </div>
                        ))}
                    </div>

                    <MsStoreBadge />
                </div>
            </section>

            {/* Why Milow? (Bento Grid) */}
            <section className="relative z-10 mx-auto max-w-7xl px-6 py-32">
                <h2 className="mb-12 text-center text-4xl font-bold tracking-tighter sm:text-5xl">Engineered for Scale</h2>

                <div className="grid gap-4 md:grid-cols-3 md:grid-rows-2 lg:gap-6">
                    {/* Main Feature: Performance */}
                    <BentoCard
                        title="60fps Performance"
                        description="Powered by the Impeller Engine. Memory-cached images, repaint isolation, and optimized rebuilds ensure buttery smooth scrolling even with thousands of loads."
                        icon={<Zap className="h-6 w-6 text-amber-500" />}
                        className="md:col-span-2 md:row-span-2"
                        graphic={
                            <div className="absolute inset-x-0 bottom-0 h-1/2 translate-y-12 bg-gradient-to-t from-amber-500/10 to-transparent blur-3xl" />
                        }
                    />

                    {/* Haptics */}
                    <BentoCard
                        title="Haptic Feedback"
                        description="14 tactile patterns. Feel the road in your app."
                        icon={<Vibrate className="h-6 w-6 text-indigo-500" />}
                        className="md:col-span-1 md:row-span-1"
                    />

                    {/* Realtime */}
                    <BentoCard
                        title="Real-time Sync"
                        description="Sub-millisecond latency with Supabase Realtime."
                        icon={<Bell className="h-6 w-6 text-green-500" />}
                        className="md:col-span-1 md:row-span-1"
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
                        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                            <TechItem name="Flutter 3.10+" />
                            <TechItem name="Supabase" />
                            <TechItem name="PostgreSQL" />
                            <TechItem name="Dart 3" />
                            <TechItem name="Provider" />
                            <TechItem name="Riverpod" />
                            <TechItem name="GoRouter" />
                            <TechItem name="Fluent UI" />
                            <TechItem name="M3 Expressive" />
                            <TechItem name="Hive" />
                            <TechItem name="PDF Gen" />
                            <TechItem name="Maps" />
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
                        <Link href="/milow/termsandconditions" className="hover:text-blue-600 dark:hover:text-blue-400">Terms & Conditions</Link>
                        <a href="https://github.com/Maninder-mike/milow" className="hover:text-blue-600 dark:hover:text-blue-400">Repository</a>
                        <a href="https://github.com/Maninder-mike/milow/issues" className="hover:text-blue-600 dark:hover:text-blue-400">Report Issue</a>
                    </div>
                </div>
            </footer>
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
