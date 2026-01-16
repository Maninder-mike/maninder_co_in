
import Link from "next/link";
import { ArrowLeft, Github, Scan, Smartphone, Wand2, Zap, Share2, Layers, Cloud, FileText, CheckCircle2, Shield } from "lucide-react";
import { HeroImage } from "./_components/hero-image";
import { BrandStrip } from "./_components/brand-strip";
import { BentoCard } from "./_components/bento-card";

export const metadata = {
    title: "DocScanner Plus | AI Document Scanner",
    description: "Scan, enhance, and organize documents with AI-powered precision. The smartest scanner in your pocket.",
};

export default function DocScannerPlusPage() {
    return (
        <div className="min-h-dvh bg-zinc-50 text-zinc-900 selection:bg-indigo-900 selection:text-white dark:bg-zinc-950 dark:text-zinc-100 dark:selection:bg-indigo-100 dark:selection:text-indigo-900">
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
                            <span>GitHub</span>
                        </a>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="relative z-10 mx-auto grid max-w-7xl gap-12 px-6 pt-32 lg:grid-cols-2 lg:items-center">
                <div className="max-w-3xl space-y-8">
                    <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700 dark:border-indigo-900/50 dark:bg-indigo-900/20 dark:text-indigo-400">
                        <span className="relative flex h-2 w-2">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-indigo-400 opacity-75"></span>
                            <span className="relative inline-flex h-2 w-2 rounded-full bg-indigo-500"></span>
                        </span>
                        v2.0 Now Available
                    </div>

                    <h1 className="text-6xl font-bold tracking-tighter sm:text-7xl xl:text-8xl">
                        DocScanner <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Plus.</span>
                    </h1>

                    <p className="max-w-2xl text-xl font-light leading-relaxed text-zinc-600 dark:text-zinc-400 sm:text-2xl">
                        Turn your device into a powerful portable scanner. <span className="font-medium text-zinc-900 dark:text-zinc-100">AI-enhanced</span> clarity, instant <span className="font-medium text-zinc-900 dark:text-zinc-100">OCR</span>, and seamless cloud sync.
                    </p>

                    <div className="flex flex-wrap gap-4 pt-4">
                        <button className="group inline-flex items-center gap-2 rounded-full bg-zinc-900 px-8 py-4 text-sm font-semibold text-white shadow-xl shadow-zinc-900/20 transition-all hover:scale-105 hover:bg-zinc-800 active:scale-95 dark:bg-white dark:text-zinc-900 dark:shadow-white/10 dark:hover:bg-zinc-100">
                            <Smartphone className="h-5 w-5 transition-transform group-hover:-translate-y-1" />
                            Download App
                        </button>
                        <button className="group inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-8 py-4 text-sm font-semibold text-zinc-900 shadow-sm transition-all hover:bg-zinc-50 hover:text-indigo-600 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-100 dark:hover:bg-zinc-800">
                            <Scan className="h-5 w-5 text-zinc-400 transition-colors group-hover:text-indigo-500" />
                            View Demo
                        </button>
                    </div>

                    <div className="flex items-center gap-6 pt-4 text-sm text-zinc-500">
                        <div className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-green-500" />
                            <span>Privacy First</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-green-500" />
                            <span>No Watermarks</span>
                        </div>
                    </div>
                </div>

                <div className="relative hidden lg:block">
                    <HeroImage />
                </div>
            </section>

            {/* Social Proof */}
            <BrandStrip />

            {/* Features Spotlight */}
            <section className="relative z-10 mx-auto max-w-7xl px-6 py-32">
                <h2 className="mb-12 text-center text-4xl font-bold tracking-tighter sm:text-5xl">Intelligent Scanning</h2>

                <div className="grid gap-4 md:grid-cols-3 md:grid-rows-2 lg:gap-6">
                    {/* Main Feature: AI Magic */}
                    <BentoCard
                        title="AI Magic Filter"
                        description="Automatically detects edges, corrects perspective, and enhances legibility. Removes shadows and glares instantly."
                        icon={<Wand2 className="h-6 w-6 text-purple-500" />}
                        className="md:col-span-2 md:row-span-2"
                        graphic={
                            <div className="absolute inset-x-0 bottom-0 h-1/2 translate-y-12 bg-gradient-to-t from-purple-500/10 to-transparent blur-3xl" />
                        }
                    />

                    {/* OCR */}
                    <BentoCard
                        title="Instant OCR"
                        description="Extract text from any document in seconds. Searchable PDF export included."
                        icon={<FileText className="h-6 w-6 text-indigo-500" />}
                        className="md:col-span-1 md:row-span-1"
                    />

                    {/* Batch Mode */}
                    <BentoCard
                        title="Batch Mode"
                        description="Scan multi-page contracts rapidly. Auto-collated into single files."
                        icon={<Layers className="h-6 w-6 text-blue-500" />}
                        className="md:col-span-1 md:row-span-1"
                    />
                </div>
            </section>

            {/* Cloud Section */}
            <section className="relative z-10 border-t border-zinc-200 bg-zinc-50/50 py-32 dark:border-zinc-800 dark:bg-zinc-900/50">
                <div className="mx-auto max-w-5xl px-6 text-center">
                    <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-600 shadow-xl shadow-indigo-500/20 mb-8">
                        <Cloud className="h-8 w-8 text-white" />
                    </div>
                    <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl mb-6">Sync Everywhere</h2>
                    <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto mb-12">
                        Your documents follow you. Scan on your phone, edit on your tablet, and share from your desktop.
                    </p>

                    <div className="grid gap-8 sm:grid-cols-3">
                        <div className="rounded-2xl bg-white p-6 shadow-sm border border-zinc-100 dark:bg-zinc-900 dark:border-zinc-800">
                            <div className="mb-4 h-10 w-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mx-auto">
                                <Share2 className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                            </div>
                            <h3 className="font-semibold">One-Tap Share</h3>
                            <p className="text-sm text-zinc-500 mt-2">Email, WhatsApp, or Slack instantly.</p>
                        </div>
                        <div className="rounded-2xl bg-white p-6 shadow-sm border border-zinc-100 dark:bg-zinc-900 dark:border-zinc-800">
                            <div className="mb-4 h-10 w-10 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center mx-auto">
                                <Zap className="h-5 w-5 text-orange-600 dark:text-orange-400" />
                            </div>
                            <h3 className="font-semibold">Fast Upload</h3>
                            <p className="text-sm text-zinc-500 mt-2">Optimized compression for speed.</p>
                        </div>
                        <div className="rounded-2xl bg-white p-6 shadow-sm border border-zinc-100 dark:bg-zinc-900 dark:border-zinc-800">
                            <div className="mb-4 h-10 w-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mx-auto">
                                <Shield className="h-5 w-5 text-green-600 dark:text-green-400" />
                            </div>
                            <h3 className="font-semibold">Encrypted</h3>
                            <p className="text-sm text-zinc-500 mt-2">End-to-end encryption for sensitive docs.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="relative z-10 border-t border-zinc-200 bg-white py-12 dark:border-zinc-800 dark:bg-zinc-950">
                <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 sm:flex-row">
                    <p className="text-sm text-zinc-500">© {new Date().getFullYear()} DocScanner Plus. All rights reserved.</p>
                    <div className="flex gap-6 text-sm font-medium">
                        <Link href="/docscannerplus/privacypolicy" className="hover:text-indigo-600 dark:hover:text-indigo-400">Privacy Policy</Link>
                        <Link href="/docscannerplus/terms" className="hover:text-indigo-600 dark:hover:text-indigo-400">Terms of Service</Link>
                        <Link href="/docscannerplus/support" className="hover:text-indigo-600 dark:hover:text-indigo-400">Support</Link>
                    </div>
                </div>
            </footer>
        </div>
    );
}

