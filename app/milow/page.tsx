
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Github, Shield, Truck, Vibrate, Zap, Monitor, Smartphone, Bell, CheckCircle2, Timer, FileX, EyeOff, BarChart3, TrendingUp } from "lucide-react";
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
                        Enterprise Logistics Platform
                    </div>

                    <h1 className="text-6xl font-bold tracking-tighter sm:text-7xl xl:text-8xl">
                        Logistics OS <br />
                        <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">for the 1%.</span>
                    </h1>

                    <p className="max-w-2xl text-xl font-light leading-relaxed text-zinc-600 dark:text-zinc-400 sm:text-2xl">
                        Operational control for the modern fleet. <span className="font-medium text-zinc-900 dark:text-zinc-100">Driver Experience</span> that retains elite talent, <span className="font-medium text-zinc-900 dark:text-zinc-100">Enterprise Tools</span> that drive exponential profit.
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

            {/* Section: The Operational Friction (Pain Points) */}
            <section className="relative z-10 bg-zinc-900 py-32 text-white overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-transparent blur-3xl opacity-50" />
                <div className="mx-auto max-w-7xl px-6 relative z-10">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl">Industry Friction Costs Millions</h2>
                        <p className="mt-4 text-xl text-zinc-400 max-w-2xl mx-auto">
                            Legacy systems are built for compliance, not performance. Milow is built for the actual reality of the road.
                        </p>
                    </div>

                    <div className="grid gap-12 md:grid-cols-3">
                        <div className="space-y-4 p-8 rounded-3xl bg-zinc-800/50 border border-zinc-700/50 backdrop-blur-md">
                            <div className="h-12 w-12 rounded-2xl bg-red-500/20 flex items-center justify-center">
                                <FileX className="h-6 w-6 text-red-400" />
                            </div>
                            <h3 className="text-2xl font-bold italic">"I lost the BOL."</h3>
                            <p className="text-zinc-400">
                                Paperwork errors cause <span className="text-white font-medium">15% of payment delays</span>. Our driver-first scanner eliminates the friction before it hits the office.
                            </p>
                        </div>
                        <div className="space-y-4 p-8 rounded-3xl bg-zinc-800/50 border border-zinc-700/50 backdrop-blur-md">
                            <div className="h-12 w-12 rounded-2xl bg-amber-500/20 flex items-center justify-center">
                                <Timer className="h-6 w-6 text-amber-400" />
                            </div>
                            <h3 className="text-2xl font-bold italic">"When do I get paid?"</h3>
                            <p className="text-zinc-400">
                                Manual settlements are slow. Milow automates the paperwork-to-payment pipeline, <span className="text-white font-medium">reducing days-to-pay by 60%</span>.
                            </p>
                        </div>
                        <div className="space-y-4 p-8 rounded-3xl bg-zinc-800/50 border border-zinc-700/50 backdrop-blur-md">
                            <div className="h-12 w-12 rounded-2xl bg-blue-500/20 flex items-center justify-center">
                                <EyeOff className="h-6 w-6 text-blue-400" />
                            </div>
                            <h3 className="text-2xl font-bold italic">"Where's my driver?"</h3>
                            <p className="text-zinc-400">
                                Constant calls distract drivers. Our real-time command center provides <span className="text-white font-medium">100% visibility</span> without a single phone call.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Driver App Spotlight */}
            <section className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-6 py-32 lg:grid-cols-2">
                <div className="space-y-8">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600 shadow-xl shadow-blue-500/20">
                        <Smartphone className="h-8 w-8 text-white" />
                    </div>
                    <div>
                        <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl">Driver Excellence</h2>
                        <p className="mt-4 text-xl text-zinc-600 dark:text-zinc-400">
                            Give your drivers the tools they actually want to use. Reducing friction on the road means higher retention and safer miles.
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
                    <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl">Enterprise Command</h2>
                    <p className="mt-4 text-xl text-zinc-600 dark:text-zinc-400">
                        Total oversight for dispatchers and fleet managers. Optimize your network with high-density data and automated workflows.
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

            {/* Multi-Platform Ecosystem */}
            <section className="relative z-10 border-t border-zinc-200 py-32 dark:border-zinc-800">
                <div className="mx-auto max-w-7xl px-6">
                    <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl text-center mb-16">One Platform, Every Device</h2>
                    <div className="grid gap-8 md:grid-cols-3">
                        {[
                            { platform: "Android", icon: Smartphone, title: "Mobile Fleet", desc: "Native experience for drivers on the road. Play Store ready." },
                            { platform: "macOS", icon: Github, title: "Terminal CLI", desc: "Automate your data with our Homebrew-powered command line tool." },
                            { platform: "Windows", icon: Monitor, title: "Command Center", desc: "Full-resolution dispatch management via Microsoft Store." },
                        ].map((item, i) => (
                            <div key={i} className="glass p-8 rounded-3xl space-y-4">
                                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-zinc-900 dark:bg-white dark:text-zinc-900">
                                    <item.icon className="h-6 w-6" />
                                </div>
                                <h3 className="text-2xl font-bold">{item.platform} {item.title}</h3>
                                <p className="text-zinc-600 dark:text-zinc-400">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Impact Metrics (Revised Bento) */}
            <section className="relative z-10 mx-auto max-w-7xl px-6 py-32">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl">Engineered for Extreme Reliability</h2>
                    <p className="mt-4 text-xl text-zinc-600 dark:text-zinc-400">No jargon. Just results that scale with your fleet.</p>
                </div>

                <div className="grid gap-4 md:grid-cols-3 md:grid-rows-2 lg:gap-6">
                    <BentoCard
                        title="Zero-Interruption Operations"
                        description="System-wide stability that handles thousands of concurrent loads without a single frame drop. Built on enterprise-grade architecture that keeps your business moving."
                        icon={<TrendingUp className="h-6 w-6 text-blue-500" />}
                        className="md:col-span-2 md:row-span-2"
                        graphic={
                            <div className="absolute inset-x-0 bottom-0 h-1/2 translate-y-12 bg-gradient-to-t from-blue-500/10 to-transparent blur-3xl" />
                        }
                    />

                    <BentoCard
                        title="Driver-First Design"
                        description="Intuitive 1-click workflows designed and tested for simplicity in the cab. Reduce stress, increase speed."
                        icon={<Truck className="h-6 w-6 text-emerald-500" />}
                        className="md:col-span-1 md:row-span-1"
                    />

                    <BentoCard
                        title="Mission-Critical Sync"
                        description="Data is synchronized to your home office in real-time. Never lose another shipment status or inspection report."
                        icon={<Zap className="h-6 w-6 text-amber-500" />}
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
