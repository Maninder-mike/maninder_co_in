import { Truck, Map as MapIcon, BarChart3, Bell, Shield } from "lucide-react";

export function HeroImage() {
    return (
        <div className="relative mx-auto aspect-square w-full max-w-[600px] overflow-hidden rounded-3xl bg-zinc-100 dark:bg-zinc-900/50 sm:aspect-[4/3] lg:aspect-square lg:w-[600px]">
            {/* Abstract Background Elements */}
            <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl filter" />
            <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-violet-500/20 blur-3xl filter" />

            {/* Glassmorphic Cards Stack */}
            <div className="absolute inset-0 flex items-center justify-center p-8">
                {/* Back Card (Terminal) */}
                <div className="absolute -right-4 top-12 h-64 w-80 rotate-6 rounded-2xl border border-white/20 bg-white/40 p-4 shadow-xl backdrop-blur-md dark:border-white/10 dark:bg-white/5">
                    <div className="mb-3 flex items-center gap-2 border-b border-black/5 pb-2 dark:border-white/5">
                        <div className="h-3 w-3 rounded-full bg-red-400" />
                        <div className="h-3 w-3 rounded-full bg-amber-400" />
                        <div className="h-3 w-3 rounded-full bg-green-400" />
                    </div>
                    <div className="space-y-2">
                        <div className="flex gap-2">
                            <div className="h-20 w-1/3 rounded-lg bg-black/5 dark:bg-white/5" />
                            <div className="h-20 w-2/3 rounded-lg bg-black/5 dark:bg-white/5" />
                        </div>
                        <div className="h-8 w-full rounded-lg bg-black/5 dark:bg-white/5" />
                        <div className="h-8 w-full rounded-lg bg-black/5 dark:bg-white/5" />
                    </div>
                </div>

                {/* Front Card (Mobile App) */}
                <div className="absolute -left-4 bottom-12 h-96 w-56 -rotate-6 rounded-[2rem] border border-zinc-200 bg-white p-4 shadow-2xl ring-4 ring-zinc-900/5 dark:border-zinc-800 dark:bg-zinc-950 dark:ring-white/10">
                    <div className="mb-6 flex justify-between">
                        <div className="h-2 w-12 rounded-full bg-zinc-200 dark:bg-zinc-800" />
                        <div className="flex gap-1">
                            <div className="h-2 w-2 rounded-full bg-zinc-200 dark:bg-zinc-800" />
                            <div className="h-2 w-2 rounded-full bg-zinc-200 dark:bg-zinc-800" />
                        </div>
                    </div>
                    {/* App Mock Interface */}
                    <div className="space-y-4">
                        <div className="flex items-center justify-between rounded-xl bg-blue-50 p-3 dark:bg-blue-900/20">
                            <div className="flex items-center gap-2">
                                <div className="rounded-lg bg-blue-100 p-2 dark:bg-blue-800/30">
                                    <Truck className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                                </div>
                                <div className="h-2 w-16 rounded-full bg-blue-200 dark:bg-blue-800" />
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                            <div className="aspect-square rounded-xl bg-zinc-100 p-3 dark:bg-zinc-900">
                                <MapIcon className="mb-2 h-4 w-4 text-zinc-400" />
                                <div className="h-2 w-8 rounded-full bg-zinc-200 dark:bg-zinc-800" />
                            </div>
                            <div className="aspect-square rounded-xl bg-zinc-100 p-3 dark:bg-zinc-900">
                                <BarChart3 className="mb-2 h-4 w-4 text-zinc-400" />
                                <div className="h-2 w-8 rounded-full bg-zinc-200 dark:bg-zinc-800" />
                            </div>
                        </div>
                        <div className="rounded-xl border border-zinc-100 p-3 dark:border-zinc-800">
                            <div className="mb-2 flex gap-3">
                                <div className="h-8 w-8 rounded-full bg-zinc-100 dark:bg-zinc-900" />
                                <div className="space-y-1">
                                    <div className="h-2 w-20 rounded-full bg-zinc-100 dark:bg-zinc-800" />
                                    <div className="h-2 w-12 rounded-full bg-zinc-100 dark:bg-zinc-800" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute right-0 top-1/2 flex -translate-y-1/2 items-center gap-2 rounded-full border border-zinc-100 bg-white px-4 py-2 shadow-lg dark:border-zinc-800 dark:bg-zinc-900">
                    <Shield className="h-4 w-4 text-green-500" />
                    <span className="text-xs font-bold">Secure</span>
                </div>
                <div className="absolute left-10 top-20 flex items-center gap-2 rounded-full border border-zinc-100 bg-white px-4 py-2 shadow-lg dark:border-zinc-800 dark:bg-zinc-900">
                    <Bell className="h-4 w-4 text-amber-500" />
                    <span className="text-xs font-bold">Updates</span>
                </div>
            </div>
        </div>
    );
}
