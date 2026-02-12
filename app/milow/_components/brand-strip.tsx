
import { Truck, Shield, Zap, CheckCircle2, TrendingUp, Bell } from "lucide-react";

export function BrandStrip() {
    return (
        <section className="border-y border-zinc-100 bg-white/50 py-12 dark:border-white/5 dark:bg-zinc-900/20">
            <div className="mx-auto max-w-7xl px-6 text-center">
                <p className="mb-8 text-sm font-semibold uppercase tracking-widest text-zinc-400">Trusted Technology Partners</p>
                <div className="flex flex-wrap items-center justify-center gap-12 opacity-50 grayscale transition-all duration-700 hover:opacity-100 hover:grayscale-0 md:gap-20">
                    {[
                        { name: "Supabase", icon: Shield },
                        { name: "Flutter", icon: Zap },
                        { name: "Google Cloud", icon: CheckCircle2 },
                        { name: "Stripe", icon: TrendingUp },
                        { name: "Twilio", icon: Bell }
                    ].map((partner, i) => (
                        <div key={i} className="flex items-center gap-2 text-xl font-bold text-zinc-400 transition-colors hover:text-blue-600 dark:text-zinc-600 dark:hover:text-blue-400">
                            <partner.icon className="h-6 w-6" />
                            <span>{partner.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
