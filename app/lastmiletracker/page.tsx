import Link from "next/link";
import { ArrowLeft, Github, Shield, Cpu, Zap, Signal, Map as MapIcon, Bell, CheckCircle2, Smartphone, Monitor, Bluetooth, Activity, Database, Wifi, Globe, Clock, Layers } from "lucide-react";
import { HeroGraphic } from "./_components/hero-graphic";

export const metadata = {
    title: "Last Mile Tracker | Precision IoT Fleet Intelligence",
    description: "Real-time fleet tracking and IoT telemetry powered by ESP32 C6 and Supabase. Precision monitoring for local delivery and logistics.",
};

export default function LastMileTrackerPage() {
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
                            href="https://github.com/Maninder-mike"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-100 px-4 py-2 text-sm font-medium transition-colors hover:bg-zinc-200 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:bg-zinc-800"
                        >
                            <Github className="h-4 w-4" />
                            <span>Source</span>
                        </a>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="relative z-10 mx-auto grid max-w-7xl gap-12 px-6 pt-32 lg:grid-cols-2 lg:items-center">
                <div className="max-w-3xl space-y-8">
                    <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700 dark:border-emerald-900/50 dark:bg-emerald-900/20 dark:text-emerald-400">
                        <span className="relative flex h-2 w-2">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
                        </span>
                        v0.1.0 Beta Live
                    </div>

                    <h1 className="text-6xl font-bold tracking-tighter sm:text-7xl xl:text-8xl">
                        Smart Fleet <br />
                        <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Intelligence.</span>
                    </h1>

                    <p className="max-w-2xl text-xl font-light leading-relaxed text-zinc-600 dark:text-zinc-400 sm:text-2xl">
                        Complete visibility for your final mile logistics. <span className="font-medium text-zinc-900 dark:text-zinc-100">Ready-to-deploy</span> sensors, <span className="font-medium text-zinc-900 dark:text-zinc-100">automated</span> tracking, and real-time oversight.
                    </p>

                    <div className="flex flex-wrap gap-4 pt-4">
                        <a
                            href="#features"
                            className="group inline-flex items-center gap-2 rounded-full bg-zinc-900 px-8 py-4 text-sm font-semibold text-white shadow-xl shadow-zinc-900/20 transition-all hover:scale-105 hover:bg-zinc-800 active:scale-95 dark:bg-white dark:text-zinc-900 dark:shadow-white/10 dark:hover:bg-zinc-100"
                        >
                            <Cpu className="h-5 w-5 transition-transform group-hover:rotate-12" />
                            Explore Hardware
                        </a>
                        <Link
                            href="/lastmiletracker/support"
                            className="group inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-8 py-4 text-sm font-semibold text-zinc-900 shadow-sm transition-all hover:bg-zinc-50 hover:text-emerald-600 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-100 dark:hover:bg-zinc-800"
                        >
                            <Shield className="h-5 w-5 text-zinc-400 transition-colors group-hover:text-emerald-500" />
                            Security Protocol
                        </Link>
                    </div>
                </div>

                <div className="relative hidden lg:block">
                    <HeroGraphic />
                </div>
            </section>

            {/* Hardware Spotlight */}
            <section id="features" className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-6 py-32 lg:grid-cols-2">
                <div className="order-2 lg:order-1">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="glass aspect-square rounded-3xl p-8 flex flex-col justify-between">
                            <Bluetooth className="h-10 w-10 text-blue-500" />
                            <span className="font-bold text-lg">BLE 5.3 Mesh</span>
                        </div>
                        <div className="glass aspect-square rounded-3xl p-8 flex flex-col justify-between translate-y-8">
                            <Signal className="h-10 w-10 text-emerald-500" />
                            <span className="font-bold text-lg">Zigbee Support</span>
                        </div>
                        <div className="glass aspect-square rounded-3xl p-8 flex flex-col justify-between">
                            <Activity className="h-10 w-10 text-red-500" />
                            <span className="font-bold text-lg">IMU Analytics</span>
                        </div>
                        <div className="glass aspect-square rounded-3xl p-8 flex flex-col justify-between translate-y-8">
                            <Zap className="h-10 w-10 text-amber-500" />
                            <span className="font-bold text-lg">Ultra Low Power</span>
                        </div>
                    </div>
                </div>
                <div className="order-1 lg:order-2 space-y-8">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-600 shadow-xl shadow-emerald-500/20">
                        <Activity className="h-8 w-8 text-white" />
                    </div>
                    <div>
                        <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl">Automated Intelligence</h2>
                        <p className="mt-4 text-xl text-zinc-600 dark:text-zinc-400">
                            Stop guessing and start knowing. Our intelligence layer handles the monitoring so you can focus on the delivery.
                        </p>
                    </div>

                    <div className="space-y-4">
                        {[
                            "Zero-configuration setup",
                            "Military-grade data protection",
                            "Weeks of battery on a single charge"
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-3">
                                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-900/30">
                                    <CheckCircle2 className="h-3 w-3 text-emerald-600 dark:text-emerald-400" />
                                </div>
                                <span className="font-medium text-zinc-700 dark:text-zinc-300">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="relative z-10 mx-auto max-w-7xl px-6 py-32 border-t border-zinc-200 dark:border-zinc-800">
                <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl text-center mb-16">3 Steps to Full Visibility</h2>
                <div className="grid gap-8 md:grid-cols-3">
                    {[
                        { step: "01", title: "Attach", desc: "Easily mount our modular sensors to any vehicle or asset in seconds." },
                        { step: "02", title: "Connect", desc: "Sensors automatically link to your fleet app via secure Bluetooth." },
                        { step: "03", title: "Monitor", desc: "Real-time data streams straight to your central command center." },
                    ].map((item, i) => (
                        <div key={i} className="glass p-8 rounded-3xl space-y-4">
                            <span className="text-4xl font-bold text-emerald-500/20">{item.step}</span>
                            <h3 className="text-2xl font-bold">{item.title}</h3>
                            <p className="text-zinc-600 dark:text-zinc-400">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>
            <section id="apps" className="relative z-10 border-t border-zinc-200 py-32 dark:border-zinc-800">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="mb-24 text-center">
                        <h2 className="text-4xl font-bold tracking-tighter sm:text-6xl">Distributed Intelligence</h2>
                        <p className="mx-auto mt-4 max-w-2xl text-xl text-zinc-600 dark:text-zinc-400">
                            A vertically integrated stack from silicon to cloud. Built for reliability in the most demanding environments.
                        </p>
                    </div>

                    {/* Driver Mobile Section */}
                    <div className="grid gap-16 lg:grid-cols-2 lg:items-center pb-32">
                        <div className="space-y-8">
                            <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-1.5 text-sm font-semibold text-blue-700 dark:bg-blue-900/30 dark:text-blue-400">
                                <Smartphone className="h-4 w-4" />
                                Mobile Application
                            </div>
                            <h3 className="text-4xl font-bold tracking-tight">Unified Logistics Intelligence</h3>
                            <p className="text-xl text-zinc-600 dark:text-zinc-400">
                                A high-performance Flutter ecosystem designed for <span className="font-semibold text-zinc-900 dark:text-zinc-100">shippers, receivers, drivers, and administrators</span>. Seamless coordination across the entire supply chain.
                            </p>
                            <div className="grid gap-6 sm:grid-cols-2">
                                {[
                                    { icon: Database, title: "Offline-First", desc: "Local SQLite sync engine for persistent data integrity." },
                                    { icon: Bluetooth, title: "BLE Bridge", desc: "Native communication with ESP32 sensors." },
                                    { icon: Clock, title: "Persistence", desc: "Battery-optimized background tracking nodes." },
                                    { icon: Layers, title: "Glass UI", desc: "Premium Cupertino-based design system." },
                                ].map((feature, i) => (
                                    <div key={i} className="space-y-2">
                                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-100 dark:bg-zinc-900">
                                            <feature.icon className="h-5 w-5 text-blue-500" />
                                        </div>
                                        <h4 className="font-bold">{feature.title}</h4>
                                        <p className="text-sm text-zinc-500 dark:text-zinc-500">{feature.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative aspect-square lg:aspect-auto lg:h-[600px] overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-blue-600 to-indigo-700 p-12 shadow-2xl">
                            <div className="absolute inset-0 bg-grid-white/10 [mask-image:radial-gradient(white,transparent)]" />
                            <div className="relative flex h-full flex-col justify-between">
                                <div className="glass mx-auto w-full max-w-[280px] rounded-[3rem] p-6 shadow-2xl">
                                    <div className="aspect-[9/19] rounded-[2.5rem] bg-zinc-950 p-4 border-4 border-zinc-800">
                                        <div className="space-y-4">
                                            <div className="h-2 w-12 rounded-full bg-zinc-800 mx-auto" />
                                            <div className="h-8 w-full rounded-xl bg-blue-600/20 border border-blue-500/30 animate-pulse" />
                                            <div className="space-y-2">
                                                <div className="h-12 w-full rounded-xl bg-zinc-900" />
                                                <div className="h-12 w-full rounded-xl bg-zinc-900" />
                                                <div className="h-12 w-full rounded-xl bg-zinc-900" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="glass p-6 rounded-2xl">
                                    <div className="flex items-center gap-4 text-white">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20">
                                            <Activity className="h-6 w-6" />
                                        </div>
                                        <div>
                                            <p className="text-xs font-semibold uppercase tracking-wider opacity-60">Live Telemetry</p>
                                            <p className="text-xl font-bold">98.4 bps sync rate</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Fleet Dashboard Section */}
                    <div className="grid gap-16 lg:grid-cols-2 lg:items-center pt-32 border-t border-zinc-200 dark:border-zinc-800">
                        <div className="lg:order-2 space-y-8">
                            <div className="inline-flex items-center gap-2 rounded-full bg-violet-100 px-4 py-1.5 text-sm font-semibold text-violet-700 dark:bg-violet-900/30 dark:text-violet-400">
                                <Monitor className="h-4 w-4" />
                                Web Command Center
                            </div>
                            <h3 className="text-4xl font-bold tracking-tight">Enterprise Fleet Visibility</h3>
                            <p className="text-xl text-zinc-600 dark:text-zinc-400">
                                A centralized command center providing real-time oversight of <span className="font-semibold text-zinc-900 dark:text-zinc-100">every ESP32 tracking node</span> in your network as they move across territories.
                            </p>
                            <div className="grid gap-6 sm:grid-cols-2">
                                {[
                                    { icon: Globe, title: "Real-time Ops", desc: "Live position updates powered by Supabase channels." },
                                    { icon: MapIcon, title: "Interactive Maps", desc: "Custom Leaflet layer for detailed asset tracking." },
                                    { icon: Bell, title: "Smart Alerts", desc: "Instant notifications for threshold violations." },
                                    { icon: Wifi, title: "IoT Engine", desc: "Seamless integration with remote hardware nodes." },
                                ].map((feature, i) => (
                                    <div key={i} className="space-y-2">
                                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-100 dark:bg-zinc-900">
                                            <feature.icon className="h-5 w-5 text-violet-500" />
                                        </div>
                                        <h4 className="font-bold">{feature.title}</h4>
                                        <p className="text-sm text-zinc-500 dark:text-zinc-500">{feature.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="lg:order-1 relative aspect-video lg:aspect-auto lg:h-[500px] overflow-hidden rounded-[2.5rem] bg-zinc-900 border border-zinc-800 shadow-2xl">
                            <div className="absolute inset-0 bg-grid-white/5" />
                            <div className="p-8 space-y-6">
                                <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
                                    <div className="flex gap-2">
                                        <div className="h-3 w-3 rounded-full bg-red-500/50" />
                                        <div className="h-3 w-3 rounded-full bg-amber-500/50" />
                                        <div className="h-3 w-3 rounded-full bg-emerald-500/50" />
                                    </div>
                                    <div className="h-4 w-32 rounded-full bg-zinc-800" />
                                </div>
                                <div className="grid grid-cols-4 gap-4">
                                    {[...Array(4)].map((_, i) => (
                                        <div key={i} className="h-24 rounded-2xl bg-zinc-800/50 border border-zinc-700/50" />
                                    ))}
                                </div>
                                <div className="relative h-64 rounded-2xl bg-zinc-800/30 border border-zinc-700/30 overflow-hidden">
                                    {/* Simulated Map */}
                                    <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,theme(colors.blue.500),transparent_70%)]" />
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-4 w-4 rounded-full bg-blue-500 animate-ping" />
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-4 w-4 rounded-full bg-blue-500 shadow-lg shadow-blue-500/50" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="relative z-10 border-t border-zinc-200 bg-white py-12 dark:border-zinc-800 dark:bg-zinc-950">
                <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 sm:flex-row">
                    <p className="text-sm text-zinc-500">© {new Date().getFullYear()} Maninder. IoT Fleet Solutions.</p>
                    <div className="flex gap-6 text-sm font-medium">
                        <Link href="/lastmiletracker/privacypolicy" className="hover:text-emerald-600 dark:hover:text-emerald-400">Privacy Policy</Link>
                        <Link href="/lastmiletracker/terms" className="hover:text-emerald-600 dark:hover:text-emerald-400">Terms of Service</Link>
                        <Link href="/lastmiletracker/support" className="hover:text-emerald-600 dark:hover:text-emerald-400">Support</Link>
                    </div>
                </div>
            </footer>
        </div>
    );
}
