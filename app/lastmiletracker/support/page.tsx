import Link from "next/link";
import { ArrowLeft, MessageSquare, Mail, Globe, LifeBuoy } from "lucide-react";

export const metadata = {
    title: "Support | Last Mile Tracker",
};

export default function SupportPage() {
    return (
        <div className="min-h-dvh bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100">
            <nav className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-200 bg-white/80 backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-950/80">
                <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
                    <Link href="/lastmiletracker" className="flex items-center gap-2 text-sm font-medium hover:text-emerald-600">
                        <ArrowLeft className="h-4 w-4" />
                        Back to Last Mile Tracker
                    </Link>
                </div>
            </nav>

            <main className="mx-auto max-w-4xl px-6 pt-32 pb-24">
                <div className="text-center space-y-4 mb-20">
                    <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-600 shadow-xl shadow-emerald-500/20">
                        <LifeBuoy className="h-8 w-8 text-white" />
                    </div>
                    <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">We&apos;re here to help.</h1>
                    <p className="text-xl text-zinc-500 max-w-2xl mx-auto">
                        Whether you&apos;re configuring your first ESP32 node or managing a fleet of a thousand, our team is ready.
                    </p>
                </div>

                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    <SupportCard
                        icon={<Mail className="h-6 w-6" />}
                        title="Email Support"
                        description="General inquiries and technical support."
                        link="mailto:support@maninder.co.in"
                        linkText="support@maninder.co.in"
                    />
                    <SupportCard
                        icon={<MessageSquare className="h-6 w-6" />}
                        title="Developer Chat"
                        description="Direct line for fleet integrations."
                        link="https://github.com/Maninder-mike"
                        linkText="Open GitHub Issues"
                    />
                    <SupportCard
                        icon={<Globe className="h-6 w-6" />}
                        title="Documentation"
                        description="Setup guides and API references."
                        link="/lastmiletracker"
                        linkText="Read Guides"
                    />
                </div>

                <div className="mt-20 p-8 rounded-3xl bg-emerald-600 text-white flex flex-col items-center text-center space-y-6">
                    <h2 className="text-3xl font-bold">Enterprise Solutions</h2>
                    <p className="max-w-xl opacity-90">
                        Need custom hardware integration or on-premise cloud deployment? We offer dedicated support and custom firmware development for enterprise fleets.
                    </p>
                    <a href="mailto:maninder@maninder.co.in" className="bg-white text-emerald-600 px-8 py-3 rounded-full font-bold hover:bg-zinc-100 transition-colors">
                        Contact Sales
                    </a>
                </div>
            </main>
        </div>
    );
}

interface SupportCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    link: string;
    linkText: string;
}

function SupportCard({ icon, title, description, link, linkText }: SupportCardProps) {
    return (
        <div className="glass p-8 rounded-3xl flex flex-col h-full border border-zinc-200 dark:border-zinc-800">
            <div className="h-12 w-12 rounded-xl bg-zinc-100 dark:bg-zinc-900 flex items-center justify-center mb-6 text-emerald-600">
                {icon}
            </div>
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <p className="text-zinc-500 text-sm flex-1 mb-6">{description}</p>
            <a href={link} className="text-emerald-600 font-bold hover:underline text-sm">
                {linkText}
            </a>
        </div>
    );
}
