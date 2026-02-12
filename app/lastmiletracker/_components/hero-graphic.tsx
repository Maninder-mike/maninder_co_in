import { Cpu, Radio, Zap, Signal } from "lucide-react";

export function HeroGraphic() {
    return (
        <div className="relative mx-auto aspect-square w-full max-w-[600px] overflow-hidden rounded-3xl bg-zinc-100 dark:bg-zinc-900/50 sm:aspect-[4/3] lg:aspect-square lg:w-[600px]">
            {/* Background elements */}
            <div className="absolute inset-0 opacity-20 [mask-image:radial-gradient(ellipse_at_center,black,transparent)]">
                <div className="absolute inset-0 bg-grid-pattern" />
            </div>

            {/* Floating IoT Nodes */}
            <div className="absolute inset-0 flex items-center justify-center">
                {/* Central Hub */}
                <div className="relative z-10 flex h-32 w-32 animate-pulse items-center justify-center rounded-full bg-blue-600/10 shadow-[0_0_50px_rgba(37,99,235,0.2)]">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-blue-600 shadow-xl shadow-blue-500/40">
                        <Cpu className="h-10 w-10 text-white" />
                    </div>
                    {/* Orbitals */}
                    {[...Array(3)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute inset-0 rounded-full border border-blue-500/30"
                            style={{
                                transform: `scale(${1.5 + i * 0.5})`,
                                animation: `ping ${3 + i}s cubic-bezier(0, 0, 0.2, 1) infinite`,
                            }}
                        />
                    ))}
                </div>

                {/* Satellite Devices */}
                <div className="absolute top-1/4 left-1/4 animate-bounce delay-100">
                    <div className="glass flex items-center gap-3 rounded-2xl p-4">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-600 text-white shadow-lg shadow-violet-500/20">
                            <Radio className="h-6 w-6" />
                        </div>
                        <div className="space-y-1">
                            <div className="h-2 w-12 rounded-full bg-zinc-200 dark:bg-zinc-800" />
                            <div className="h-2 w-8 rounded-full bg-zinc-100 dark:bg-zinc-700" />
                        </div>
                    </div>
                </div>

                <div className="absolute bottom-1/4 right-1/4 animate-bounce delay-300">
                    <div className="glass flex items-center gap-3 rounded-2xl p-4">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-600 text-white shadow-lg shadow-emerald-500/20">
                            <Signal className="h-6 w-6" />
                        </div>
                        <div className="space-y-1">
                            <div className="h-2 w-16 rounded-full bg-zinc-200 dark:bg-zinc-800" />
                            <div className="h-2 w-10 rounded-full bg-zinc-100 dark:bg-zinc-700" />
                        </div>
                    </div>
                </div>

                <div className="absolute top-1/2 right-1/4 -translate-y-1/2 animate-pulse">
                    <div className="glass flex items-center gap-3 rounded-2xl p-4">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-600 text-white shadow-lg shadow-amber-500/20">
                            <Zap className="h-6 w-6" />
                        </div>
                        <div className="space-y-1 text-xs">
                            <span className="font-bold text-zinc-900 dark:text-zinc-100">98%</span>
                            <div className="h-1 w-12 rounded-full bg-zinc-200 dark:bg-zinc-800">
                                <div className="h-full w-[98%] rounded-full bg-emerald-500" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Connecting Lines (Simulated with CSS) */}
            <svg className="absolute inset-0 h-full w-full pointer-events-none opacity-20" viewBox="0 0 600 600">
                <line x1="150" y1="150" x2="300" y2="300" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" className="text-zinc-400" />
                <line x1="450" y1="450" x2="300" y2="300" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" className="text-zinc-400" />
                <line x1="450" y1="300" x2="300" y2="300" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" className="text-zinc-400" />
            </svg>
        </div>
    );
}
