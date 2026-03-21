
import Link from "next/link";
import {
    ArrowLeft,
    ScrollText,
    Video,
    Monitor,
    ShieldAlert,
    Ban,
    Scale,
    Mail,
    Lock,
    Clapperboard
} from "lucide-react";

export const metadata = {
    title: "Terms and Conditions | Creator Clapboard",
    description: "Terms and Conditions for Creator Clapboard - Digital Filmmaker Toolkit",
};

const sections = [
    {
        id: "acceptance",
        title: "1. Acceptance of Terms",
        icon: ScrollText,
        content: (
            <div className="space-y-4">
                <p>
                    By downloading, installing, or using the Creator Clapboard application (&quot;App&quot;), you agree to be bound by these Terms and Conditions. If you do not agree, please do not use the App.
                </p>
                <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-900/50">
                    <p className="text-sm text-zinc-600 dark:text-zinc-400">
                        These terms apply to all individuals and production teams using the App.
                    </p>
                </div>
            </div>
        )
    },
    {
        id: "usage",
        title: "2. App Usage Terms",
        icon: Clapperboard,
        content: (
            <div className="space-y-4">
                <p>
                    Users of Creator Clapboard agree to the following responsibilities:
                </p>
                <ul className="grid gap-3 sm:grid-cols-1">
                    {[
                        "You are responsible for managing and backing up your production data.",
                        "The App is intended for professional filmmaking use; please use it responsibly on set.",
                        "You must not attempt to reverse engineer or modify the App's core functionality.",
                        "The App's effectiveness depends on the accuracy of data entered by the user."
                    ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-zinc-600 dark:text-zinc-400">
                            <div className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-blue-500" />
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
            </div>
        )
    },
    {
        id: "content",
        title: "3. User Data & Content",
        icon: Video,
        content: (
            <div className="space-y-4">
                <p>
                    Regarding the data you store in Creator Clapboard:
                </p>
                <div className="grid gap-4 sm:grid-cols-2">
                    <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-900/50">
                        <h4 className="flex items-center gap-2 font-semibold text-zinc-900 dark:text-zinc-100">
                            <Lock className="h-4 w-4 text-orange-500" />
                            Data Ownership
                        </h4>
                        <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                            You retain full ownership of all production data, scene logs, and metadata entered into the App.
                        </p>
                    </div>
                    <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-900/50">
                        <h4 className="flex items-center gap-2 font-semibold text-zinc-900 dark:text-zinc-100">
                            <ShieldAlert className="h-4 w-4 text-red-500" />
                            Data Safety
                        </h4>
                        <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                            While we provide local and optional cloud storage, we recommend regular exports for critical productions.
                        </p>
                    </div>
                </div>
            </div>
        )
    },
    {
        id: "liability",
        title: "4. Limitation of Liability",
        icon: Scale,
        content: (
            <div className="space-y-4">
                <p>
                    Creator Clapboard is provided &quot;as is&quot;.
                </p>
                <div className="rounded-xl border border-red-200 bg-red-50 p-4 dark:border-red-900/30 dark:bg-red-950/10">
                    <p className="text-sm text-red-900 dark:text-red-200">
                        <strong>Maninder.co.in</strong> shall not be liable for any production delays, data loss, or technical failures on set arising from the use of the App. The user assumes all risk for data accuracy and availability.
                    </p>
                </div>
            </div>
        )
    },
    {
        id: "termination",
        title: "5. Termination",
        icon: Ban,
        content: (
            <p>
                We reserve the right to suspend or terminate access to the App's premium or cloud features for any user $who breaches these Terms.
            </p>
        )
    },
    {
        id: "contact",
        title: "6. Contact Us",
        icon: Mail,
        content: (
            <p>
                If you have any questions about these Terms and Conditions, please contact us at <a href="mailto:info@maninder.co.in" className="font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300">info@maninder.co.in</a>.
            </p>
        )
    }
];

export default function CreatorClapboardTermsPage() {
    return (
        <div className="min-h-dvh bg-white text-zinc-900 selection:bg-blue-100 selection:text-blue-900 dark:bg-zinc-950 dark:text-zinc-100 dark:selection:bg-blue-900 dark:selection:text-white">
            {/* Background Pattern */}
            <div className="fixed inset-0 z-0 bg-grid-pattern opacity-[0.03] dark:opacity-[0.05] pointer-events-none" />

            {/* Navbar */}
            <nav className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-200 bg-white/80 backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-950/80">
                <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
                    <Link href="/#work" className="group flex items-center gap-2 text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100">
                        <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                        Back to Projects
                    </Link>
                    <span className="text-sm font-semibold text-zinc-400 dark:text-zinc-600">Terms & Conditions</span>
                </div>
            </nav>

            <main className="relative z-10 mx-auto max-w-7xl px-6 pt-32 pb-24">
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-24">
                    {/* Header & Sticky TOC */}
                    <div className="lg:col-span-4 lg:col-start-1">
                        <div className="lg:sticky lg:top-32">
                            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl text-gradient">
                                Terms & Conditions
                            </h1>
                            <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
                                Guidelines for using the Creator Clapboard toolkit.
                            </p>
                            <div className="mt-4 inline-flex items-center rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs font-medium text-zinc-500 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400">
                                Last updated: {new Date().toLocaleDateString()}
                            </div>

                            <div className="my-8 hidden h-px w-full bg-zinc-200 dark:bg-zinc-800 lg:block" />

                            <nav className="hidden space-y-1 lg:block">
                                <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-zinc-500">Contents</p>
                                {sections.map((section) => (
                                    <a
                                        key={section.id}
                                        href={`#${section.id}`}
                                        className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-100"
                                    >
                                        <section.icon className="h-4 w-4 opacity-50" />
                                        {section.title.split('. ')[1]}
                                    </a>
                                ))}
                            </nav>
                        </div>
                    </div>

                    {/* Content Column */}
                    <div className="lg:col-span-7 lg:col-start-6">
                        <div className="prose prose-zinc max-w-none dark:prose-invert">
                            <p className="text-xl leading-relaxed text-zinc-600 dark:text-zinc-300">
                                Welcome to <strong>Creator Clapboard</strong>. Please read these terms carefully before using the App for your film productions.
                            </p>
                        </div>

                        <div className="mt-12 space-y-16">
                            {sections.map((section) => (
                                <section key={section.id} id={section.id} className="scroll-mt-32">
                                    <h2 className="mb-6 flex items-center gap-3 text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
                                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-100 dark:bg-zinc-800">
                                            <section.icon className="h-5 w-5 text-zinc-600 dark:text-zinc-400" />
                                        </div>
                                        {section.title.split('. ')[1]}
                                    </h2>
                                    <div className="text-base leading-7 text-zinc-600 dark:text-zinc-400">
                                        {section.content}
                                    </div>
                                </section>
                            ))}
                        </div>
                    </div>
                </div>
            </main>

            <footer className="border-t border-zinc-200 bg-zinc-50 py-12 dark:border-zinc-800 dark:bg-zinc-900">
                <div className="mx-auto max-w-7xl px-6 text-center">
                    <p className="text-sm text-zinc-500">
                        &copy; {new Date().getFullYear()} Maninder. All rights reserved.
                    </p>
                </div>
            </footer>
        </div>
    );
}
