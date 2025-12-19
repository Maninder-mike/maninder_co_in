
import Link from "next/link";
import {
    ArrowLeft,
    ScrollText,
    Truck,
    Monitor,
    ShieldAlert,
    Ban,
    Scale,
    Mail,
    Lock
} from "lucide-react";

export const metadata = {
    title: "Terms and Conditions | Milow",
    description: "Terms and Conditions for Milow - Semi Trucking App",
};

const sections = [
    {
        id: "acceptance",
        title: "1. Acceptance of Terms",
        icon: ScrollText,
        content: (
            <div className="space-y-4">
                <p>
                    By downloading, installing, or using the Milow mobile application (&quot;Driver App&quot;) or accessing the Milow web terminal (&quot;Terminal&quot;), you agree to be bound by these Terms and Conditions. If you do not agree, please do not use our services.
                </p>
                <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-900/50">
                    <p className="text-sm text-zinc-600 dark:text-zinc-400">
                        These terms apply to all users, including drivers, fleet managers, dispatchers, and administrators.
                    </p>
                </div>
            </div>
        )
    },
    {
        id: "driver-terms",
        title: "2. Driver Usage Terms",
        icon: Truck,
        content: (
            <div className="space-y-4">
                <p>
                    Users of the **Driver App** agree to the following responsibilities to ensure safety and data accuracy:
                </p>
                <ul className="grid gap-3 sm:grid-cols-1">
                    {[
                        "You must strictly adhere to all local traffic laws and regulations.",
                        "Do not interact with the app while the vehicle is in motion.",
                        "You are responsible for the accuracy of trip logs, mileage, and fuel data entered.",
                        "You must allow location permissions for the app to function correctly for trip tracking."
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
        id: "terminal-terms",
        title: "3. Terminal & Admin Usage",
        icon: Monitor,
        content: (
            <div className="space-y-4">
                <p>
                    Users of the **Milow Terminal** (web dashboard) agree to:
                </p>
                <div className="grid gap-4 sm:grid-cols-2">
                    <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-900/50">
                        <h4 className="flex items-center gap-2 font-semibold text-zinc-900 dark:text-zinc-100">
                            <Lock className="h-4 w-4 text-orange-500" />
                            Data Privacy
                        </h4>
                        <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                            Maintain the confidentiality of driver personal info and trip data. Unauthorized sharing is strictly prohibited.
                        </p>
                    </div>
                    <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-900/50">
                        <h4 className="flex items-center gap-2 font-semibold text-zinc-900 dark:text-zinc-100">
                            <ShieldAlert className="h-4 w-4 text-red-500" />
                            Account Security
                        </h4>
                        <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                            You are responsible for maintaining the security of your admin credentials and strictly controlling access.
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
                    The Milow services are provided &quot;as is&quot; and &quot;as available&quot;.
                </p>
                <div className="rounded-xl border border-red-200 bg-red-50 p-4 dark:border-red-900/30 dark:bg-red-950/10">
                    <p className="text-sm text-red-900 dark:text-red-200">
                        <strong>Maninder.co.in</strong> shall not be liable for any indirect, incidental, or consequential damages arising from the use of the app, including but not limited to data loss, service interruptions, or inaccuracies in trip reporting.
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
                We reserve the right to suspend or terminate your access to the Milow platform at any time, without prior notice or liability, for any reason, including without limitation if you breach the Terms.
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

export default function MilowTermsPage() {
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
                                Guidelines for using the Milow platform.
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
                                Welcome to <strong>Milow</strong>. Please read these terms carefully before starting to use our Driver App or Terminal.
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
