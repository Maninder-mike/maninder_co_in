
import Link from "next/link";
import {
    ArrowLeft,
    Shield,
    Lock,
    Eye,
    Server,
    Trash2,
    Baby,
    FileText,
    Mail,
    Globe,
    CheckCircle2
} from "lucide-react";

export const metadata = {
    title: "Privacy Policy | Milow",
    description: "Privacy Policy for Milow - Semi Trucking App",
};

const sections = [
    {
        id: "collection",
        title: "1. Information We Collect",
        icon: FileText,
        content: (
            <div className="space-y-4">
                <p>
                    We collect different types of information to provide and improve our service to you.
                </p>
                <div className="grid gap-4 sm:grid-cols-2">
                    <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-900/50">
                        <h4 className="flex items-center gap-2 font-semibold text-zinc-900 dark:text-zinc-100">
                            <div className="h-2 w-2 rounded-full bg-blue-500" />
                            Personal Data
                        </h4>
                        <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                            Personally identifiable information such as your email address, name, and profile picture (linked to social login).
                        </p>
                    </div>
                    <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-900/50">
                        <h4 className="flex items-center gap-2 font-semibold text-zinc-900 dark:text-zinc-100">
                            <div className="h-2 w-2 rounded-full bg-green-500" />
                            Location Data
                        </h4>
                        <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                            Collected only when you explicitly start a trip to track mileage and routes accurately.
                        </p>
                    </div>
                    <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-900/50">
                        <h4 className="flex items-center gap-2 font-semibold text-zinc-900 dark:text-zinc-100">
                            <div className="h-2 w-2 rounded-full bg-orange-500" />
                            Usage Data
                        </h4>
                        <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                            Non-personal metrics like crash logs and feature usage stats to help us improve stability.
                        </p>
                    </div>
                </div>
            </div>
        )
    },
    {
        id: "usage",
        title: "2. How We Use Your Information",
        icon: Eye,
        content: (
            <div className="space-y-4">
                <p>Your data powers the core Milow experience. Specifically, we use it to:</p>
                <ul className="grid gap-3 sm:grid-cols-1">
                    {[
                        "Provide trip tracking and fuel logging functionality.",
                        "Create and manage your unique user account.",
                        "Generate detailed reports and analytics for your personal records.",
                        "Identify and fix bugs to improve application performance."
                    ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-zinc-600 dark:text-zinc-400">
                            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-blue-500" />
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
            </div>
        )
    },
    {
        id: "storage",
        title: "3. Data Storage & Security",
        icon: Server,
        content: (
            <div className="space-y-4">
                <p>
                    We prioritize the security of your data using modern, industry-standard infrastructure.
                </p>
                <div className="flex flex-col gap-4 rounded-xl bg-blue-50/50 p-6 dark:bg-blue-950/10">
                    <div className="flex items-center gap-3 text-blue-700 dark:text-blue-300">
                        <Shield className="h-6 w-6" />
                        <h4 className="text-lg font-semibold">Secured by Supabase</h4>
                    </div>
                    <p className="text-zinc-700 dark:text-zinc-300">
                        Your data is stored securely using <strong>Supabase</strong>, a robust open-source backend-as-a-service. While we implement strong security measures, please remember that no method of transmission over the internet is absolutely 100% secure.
                    </p>
                </div>
            </div>
        )
    },
    {
        id: "third-party",
        title: "4. Third-Party Services",
        icon: Globe,
        content: (
            <div className="space-y-4">
                <p>
                    We partner with trusted third-party providers to deliver our services.
                </p>
                <div className="overflow-hidden rounded-xl border border-zinc-200 dark:border-zinc-800">
                    <div className="flex items-center justify-between border-b border-zinc-200 bg-zinc-50 px-4 py-3 dark:border-zinc-800 dark:bg-zinc-900/50">
                        <span className="font-medium text-zinc-900 dark:text-zinc-100">Service Provider</span>
                        <span className="font-medium text-zinc-900 dark:text-zinc-100">Purpose</span>
                    </div>
                    <div className="divide-y divide-zinc-200 dark:divide-zinc-800">
                        <div className="flex items-center justify-between px-4 py-3">
                            <span className="text-sm text-zinc-600 dark:text-zinc-400">Google / Apple Sign-In</span>
                            <span className="text-sm text-zinc-600 dark:text-zinc-400">Authentication</span>
                        </div>
                        <div className="flex items-center justify-between px-4 py-3">
                            <span className="text-sm text-zinc-600 dark:text-zinc-400">Supabase</span>
                            <span className="text-sm text-zinc-600 dark:text-zinc-400">Database & Backend</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    },
    {
        id: "deletion",
        title: "5. Data Deletion",
        icon: Trash2,
        content: (
            <div>
                <p className="mb-4">
                    You maintain full control over your data.
                </p>
                <div className="rounded-xl border border-red-200 bg-red-50 p-4 dark:border-red-900/30 dark:bg-red-950/10">
                    <h4 className="flex items-center gap-2 font-semibold text-red-900 dark:text-red-200">
                        <Trash2 className="h-4 w-4" />
                        Request Deletion
                    </h4>
                    <p className="mt-2 text-sm text-red-800 dark:text-red-300">
                        You can delete your account directly within the application settings, instantly removing your data. Alternatively, contact us at <a href="mailto:info@maninder.co.in" className="underline decoration-red-400 underline-offset-2 hover:decoration-2">info@maninder.co.in</a>.
                    </p>
                </div>
            </div>
        )
    },
    {
        id: "children",
        title: "6. Children's Privacy",
        icon: Baby,
        content: (
            <p>
                Milow is not intended for use by children under the age of 13. We do not knowingly collect personal information from children under 13. If we discover that a child under 13 has provided us with personal information, we strictly delete it from our servers.
            </p>
        )
    },
    {
        id: "changes",
        title: "7. Changes to This Policy",
        icon: Lock,
        content: (
            <p>
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. We advise you to review this page periodically for any changes.
            </p>
        )
    },
    {
        id: "contact",
        title: "8. Contact Us",
        icon: Mail,
        content: (
            <p>
                If you have any questions about this Privacy Policy, please contact us via the GitHub repository or at <a href="mailto:info@maninder.co.in" className="font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300">info@maninder.co.in</a>.
            </p>
        )
    }
];

export default function MilowPrivacyPage() {
    return (
        <div className="min-h-dvh bg-white text-zinc-900 selection:bg-blue-100 selection:text-blue-900 dark:bg-zinc-950 dark:text-zinc-100 dark:selection:bg-blue-900 dark:selection:text-white">
            {/* Background Pattern */}
            <div className="fixed inset-0 z-0 bg-grid-pattern opacity-[0.03] dark:opacity-[0.05] pointer-events-none" />

            {/* Navbar */}
            <nav className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-200 bg-white/80 backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-950/80">
                <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
                    <Link href="/milow" className="group flex items-center gap-2 text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100">
                        <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                        Back to Milow
                    </Link>
                    <span className="text-sm font-semibold text-zinc-400 dark:text-zinc-600">Privacy Policy</span>
                </div>
            </nav>

            <main className="relative z-10 mx-auto max-w-7xl px-6 pt-32 pb-24">
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-24">
                    {/* Header & Sticky TOC */}
                    <div className="lg:col-span-4 lg:col-start-1">
                        <div className="lg:sticky lg:top-32">
                            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl text-gradient">
                                Privacy Policy
                            </h1>
                            <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
                                Transparency about how we handle your data at Milow.
                            </p>
                            <div className="mt-4 inline-flex items-center rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs font-medium text-zinc-500 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400">
                                Last updated: {new Date().toLocaleDateString()}
                            </div>

                            <div className="my-8 hidden h-px w-full bg-zinc-200 dark:bg-zinc-800 lg:block" />

                            {/* Table of Contents for Desktop */}
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
                                Thank you for using <strong>Milow</strong>. We are committed to protecting your privacy and ensuring you have a secure experience while managing your trucking operations.
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
