import { JsonLd } from "../_components/json-ld";
import { Shield, Clapperboard, Zap, Film, CheckCircle2, Smartphone, Palette, Lock, FileDown, ListChecks, SlidersHorizontal, Eye, Plane, Infinity, ClipboardList, Share2 } from "lucide-react";
import { HeroGraphic } from "./_components/hero-graphic";
import { SiteNav } from "../_components/site-nav";
import { SiteFooter } from "../_components/site-footer";

export const metadata = {
    title: "Creator Clapboard | Digital Slate for Filmmakers",
    description: "A professional digital slate app for filmmakers, content creators, and video production teams. Organize scenes, track takes, and clap — all from your phone, fully offline.",
};

export default function CreatorClapboardPage() {
    return (
        <div className="min-h-dvh bg-zinc-50 text-zinc-900 selection:bg-violet-900 selection:text-white dark:bg-zinc-950 dark:text-zinc-100 dark:selection:bg-violet-100 dark:selection:text-violet-900">
            <JsonLd
                data={{
                    "@context": "https://schema.org",
                    "@type": "SoftwareApplication",
                    name: "Creator Clapboard",
                    operatingSystem: "Android",
                    applicationCategory: "MultimediaApplication",
                    offers: {
                        "@type": "Offer",
                        price: "0",
                        priceCurrency: "USD",
                    },
                }}
            />
            {/* Background Grid */}
            <div className="fixed inset-0 z-0 pointer-events-none bg-grid-pattern opacity-50"></div>

            {/* Navigation */}
            <SiteNav variant="product" githubUrl="https://github.com/Maninder-mike/creator_clapboard" />

            {/* Hero Section */}
            <section className="relative z-10 mx-auto grid max-w-7xl gap-12 px-6 pt-32 lg:grid-cols-2 lg:items-center">
                <div className="max-w-3xl space-y-8">
                    <div className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-3 py-1 text-xs font-medium text-violet-700 dark:border-violet-900/50 dark:bg-violet-900/20 dark:text-violet-400">
                        <span className="relative flex h-2 w-2">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-violet-400 opacity-75"></span>
                            <span className="relative inline-flex h-2 w-2 rounded-full bg-violet-500"></span>
                        </span>
                        v1.0 — Now on Play Store
                    </div>

                    <h1 className="text-6xl font-bold tracking-tighter sm:text-7xl xl:text-8xl">
                        Digital Slate <br />
                        <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">for Creators.</span>
                    </h1>

                    <p className="max-w-2xl text-xl font-light leading-relaxed text-zinc-600 dark:text-zinc-400 sm:text-2xl">
                        Replace your physical clapperboard with a <span className="font-medium text-zinc-900 dark:text-zinc-100">fast, reliable</span>, and <span className="font-medium text-zinc-900 dark:text-zinc-100">fully offline</span> digital slate. Built for real film sets.
                    </p>

                    <div className="flex flex-wrap gap-4 pt-4">
                        <a
                            href="#features"
                            className="group inline-flex items-center gap-2 rounded-full bg-zinc-900 px-8 py-4 text-sm font-semibold text-white shadow-xl shadow-zinc-900/20 transition-all hover:scale-105 hover:bg-zinc-800 active:scale-95 dark:bg-white dark:text-zinc-900 dark:shadow-white/10 dark:hover:bg-zinc-100"
                        >
                            <Clapperboard className="h-5 w-5 transition-transform group-hover:rotate-12" />
                            Explore Features
                        </a>
                        <a
                            href="https://play.google.com/store/apps/details?id=com.maninder.creator_clapboard"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-8 py-4 text-sm font-semibold text-zinc-900 shadow-sm transition-all hover:bg-zinc-50 hover:text-violet-600 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-100 dark:hover:bg-zinc-800"
                        >
                            <Smartphone className="h-5 w-5 text-zinc-400 transition-colors group-hover:text-violet-500" />
                            Get it on Google Play
                        </a>
                    </div>
                </div>

                <div className="relative hidden lg:block">
                    <HeroGraphic />
                </div>
            </section>

            {/* Core Features Grid */}
            <section id="features" className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-6 py-32 lg:grid-cols-2">
                <div className="order-2 lg:order-1">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="glass aspect-square rounded-3xl p-8 flex flex-col justify-between">
                            <Film className="h-10 w-10 text-violet-500" />
                            <span className="font-bold text-lg">Scene Manager</span>
                        </div>
                        <div className="glass aspect-square rounded-3xl p-8 flex flex-col justify-between translate-y-8">
                            <ListChecks className="h-10 w-10 text-emerald-500" />
                            <span className="font-bold text-lg">Take Tracker</span>
                        </div>
                        <div className="glass aspect-square rounded-3xl p-8 flex flex-col justify-between">
                            <SlidersHorizontal className="h-10 w-10 text-amber-500" />
                            <span className="font-bold text-lg">Shot Types</span>
                        </div>
                        <div className="glass aspect-square rounded-3xl p-8 flex flex-col justify-between translate-y-8">
                            <Zap className="h-10 w-10 text-red-500" />
                            <span className="font-bold text-lg">Instant Clap</span>
                        </div>
                    </div>
                </div>
                <div className="order-1 lg:order-2 space-y-8">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-violet-600 shadow-xl shadow-violet-500/20">
                        <Clapperboard className="h-8 w-8 text-white" />
                    </div>
                    <div>
                        <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl">Built for the Set</h2>
                        <p className="mt-4 text-xl text-zinc-600 dark:text-zinc-400">
                            Every feature is designed for the chaos of a real film set. Fast, reliable, and zero distractions.
                        </p>
                    </div>

                    <div className="space-y-4">
                        {[
                            "Works offline — no Wi-Fi or data needed",
                            "Clean, modern design that's easy to read on set",
                            "Swipe to remove — manage scenes in a flash"
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-3">
                                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-violet-100 dark:bg-violet-900/30">
                                    <CheckCircle2 className="h-3 w-3 text-violet-600 dark:text-violet-400" />
                                </div>
                                <span className="font-medium text-zinc-700 dark:text-zinc-300">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="relative z-10 mx-auto max-w-7xl px-6 py-32 border-t border-zinc-200 dark:border-zinc-800">
                <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl text-center mb-16">3 Steps to Action</h2>
                <div className="grid gap-8 md:grid-cols-3">
                    {[
                        { step: "01", title: "Create", desc: "Set up your project with a title, director, and camera info in seconds." },
                        { step: "02", title: "Organize", desc: "Add scenes and takes. Select shot types. Keep your production structured." },
                        { step: "03", title: "Clap!", desc: "Tap to clap. The slate displays scene, take, and shot info clearly for the camera." },
                    ].map((item, i) => (
                        <div key={i} className="glass p-8 rounded-3xl space-y-4">
                            <span className="text-4xl font-bold text-violet-500/20">{item.step}</span>
                            <h3 className="text-2xl font-bold">{item.title}</h3>
                            <p className="text-zinc-600 dark:text-zinc-400">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* App Details Section */}
            <section id="app" className="relative z-10 border-t border-zinc-200 py-32 dark:border-zinc-800">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="mb-24 text-center">
                        <h2 className="text-4xl font-bold tracking-tighter sm:text-6xl">Why Creators Love It</h2>
                        <p className="mx-auto mt-4 max-w-2xl text-xl text-zinc-600 dark:text-zinc-400">
                            Everything you need to run a smooth shoot — from first slate to final take.
                        </p>
                    </div>

                    {/* Mobile App Section */}
                    <div className="grid gap-16 lg:grid-cols-2 lg:items-center pb-32">
                        <div className="space-y-8">
                            <div className="inline-flex items-center gap-2 rounded-full bg-violet-100 px-4 py-1.5 text-sm font-semibold text-violet-700 dark:bg-violet-900/30 dark:text-violet-400">
                                <Smartphone className="h-4 w-4" />
                                Android Application
                            </div>
                            <h3 className="text-4xl font-bold tracking-tight">Your Digital Slate</h3>
                            <p className="text-xl text-zinc-600 dark:text-zinc-400">
                                Designed for <span className="font-semibold text-zinc-900 dark:text-zinc-100">filmmakers, YouTubers, and production teams</span>. Replace your physical clapperboard with confidence.
                            </p>
                            <div className="grid gap-6 sm:grid-cols-2">
                                {[
                                    { icon: Plane, title: "Works Offline", desc: "Use it anywhere — no internet needed, ever." },
                                    { icon: Palette, title: "Beautiful Design", desc: "A sleek, modern look that's easy on the eyes." },
                                    { icon: FileDown, title: "Export Your Logs", desc: "Share your scene data with your editing team." },
                                    { icon: Zap, title: "Fast & Reliable", desc: "Snappy performance, even on older phones." },
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
                        <div className="relative aspect-square lg:aspect-auto lg:h-[600px] overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-violet-600 to-indigo-700 p-12 shadow-2xl">
                            <div className="absolute inset-0 bg-grid-white/10 [mask-image:radial-gradient(white,transparent)]" />
                            <div className="relative flex h-full flex-col justify-between">
                                <div className="glass mx-auto w-full max-w-[280px] rounded-[3rem] p-6 shadow-2xl">
                                    <div className="aspect-[9/19] rounded-[2.5rem] bg-zinc-950 p-4 border-4 border-zinc-800">
                                        <div className="space-y-4">
                                            <div className="h-2 w-12 rounded-full bg-zinc-800 mx-auto" />
                                            <div className="h-8 w-full rounded-xl bg-violet-600/20 border border-violet-500/30 animate-pulse" />
                                            <div className="space-y-2">
                                                <div className="h-14 w-full rounded-xl bg-zinc-900 flex items-center px-3 gap-2">
                                                    <div className="h-3 w-3 rounded-full bg-violet-500" />
                                                    <div className="h-3 w-20 rounded bg-zinc-700" />
                                                </div>
                                                <div className="h-14 w-full rounded-xl bg-zinc-900 flex items-center px-3 gap-2">
                                                    <div className="h-3 w-3 rounded-full bg-emerald-500" />
                                                    <div className="h-3 w-16 rounded bg-zinc-700" />
                                                </div>
                                                <div className="h-14 w-full rounded-xl bg-zinc-900 flex items-center px-3 gap-2">
                                                    <div className="h-3 w-3 rounded-full bg-amber-500" />
                                                    <div className="h-3 w-24 rounded bg-zinc-700" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="glass p-6 rounded-2xl">
                                    <div className="flex items-center gap-4 text-white">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20">
                                            <Eye className="h-6 w-6" />
                                        </div>
                                        <div>
                                            <p className="text-xs font-semibold uppercase tracking-wider opacity-60">Privacy First</p>
                                            <p className="text-xl font-bold">Your data stays private</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Privacy & Architecture Section */}
                    <div className="grid gap-16 lg:grid-cols-2 lg:items-center pt-32 border-t border-zinc-200 dark:border-zinc-800">
                        <div className="lg:order-2 space-y-8">
                            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-1.5 text-sm font-semibold text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400">
                                <Lock className="h-4 w-4" />
                                Privacy by Design
                            </div>
                            <h3 className="text-4xl font-bold tracking-tight">Your Data Stays on Your Phone</h3>
                            <p className="text-xl text-zinc-600 dark:text-zinc-400">
                                We don't collect anything. <span className="font-semibold text-zinc-900 dark:text-zinc-100">No accounts, no tracking, no internet access.</span> Your production data stays on your phone.
                            </p>
                            <div className="grid gap-6 sm:grid-cols-2">
                                {[
                                    { icon: Plane, title: "No Internet Needed", desc: "Works in airplane mode — even off-grid locations." },
                                    { icon: Lock, title: "Stored on Your Phone", desc: "All your data lives securely on your device." },
                                    { icon: Shield, title: "No Cloud Sync", desc: "Your data is never uploaded anywhere." },
                                    { icon: Eye, title: "No Tracking", desc: "No ads, no analytics, no hidden data collection." },
                                ].map((feature, i) => (
                                    <div key={i} className="space-y-2">
                                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-100 dark:bg-zinc-900">
                                            <feature.icon className="h-5 w-5 text-emerald-500" />
                                        </div>
                                        <h4 className="font-bold">{feature.title}</h4>
                                        <p className="text-sm text-zinc-500 dark:text-zinc-500">{feature.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="lg:order-1 relative aspect-video lg:aspect-auto lg:h-[500px] overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-emerald-600 to-teal-700 shadow-2xl">
                            <div className="absolute inset-0 bg-grid-white/10 [mask-image:radial-gradient(white,transparent)]" />
                            <div className="relative p-8 sm:p-12 flex flex-col justify-center h-full">
                                <h4 className="text-sm font-semibold uppercase tracking-widest text-emerald-200/70 mb-6">What You Get</h4>
                                <div className="grid grid-cols-2 gap-4 sm:gap-6">
                                    {[
                                        { icon: Infinity, label: "Unlimited Projects" },
                                        { icon: Film, label: "Scenes & Takes" },
                                        { icon: ClipboardList, label: "Shot Type Picker" },
                                        { icon: Share2, label: "Export to CSV" },
                                        { icon: Lock, label: "100% Private" },
                                        { icon: Plane, label: "Works Offline" },
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-center gap-3 glass rounded-2xl px-5 py-4">
                                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/20">
                                                <item.icon className="h-5 w-5 text-white" />
                                            </div>
                                            <span className="text-sm font-bold text-white">{item.label}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <SiteFooter
                variant="product"
                productName="Creator Clapboard"
                links={[
                    { label: "Privacy Policy", href: "/creatorclapboard/privacypolicy" },
                    { label: "Terms of Service", href: "/creatorclapboard/termsandconditions" },
                ]}
            />
        </div>
    );
}
