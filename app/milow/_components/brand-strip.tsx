
import { Truck } from "lucide-react";

export function BrandStrip() {
    return (
        <section className="border-y border-zinc-100 bg-white/50 py-12 dark:border-white/5 dark:bg-zinc-900/20">
            <div className="mx-auto max-w-7xl px-6 text-center">
                <p className="mb-8 text-sm font-medium text-zinc-500">TRUSTED BY MODERN FLEETS</p>
                <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5">
                    {["Apex Logistics", "Rapid Route", "Blue Horizon", "Starlight Trans", "Velocity Freight"].map((name, i) => (
                        <div key={i} className="flex items-center justify-center gap-2 text-xl font-bold text-zinc-300 grayscale transition-all duration-300 hover:scale-105 hover:text-zinc-400 hover:grayscale-0 dark:text-zinc-700 dark:hover:text-zinc-600">
                            <Truck className="h-6 w-6 opacity-50" />
                            <span>{name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
