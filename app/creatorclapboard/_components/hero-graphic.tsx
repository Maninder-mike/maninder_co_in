"use client";

import { Clapperboard, Film, Video } from "lucide-react";

export function HeroGraphic() {
    return (
        <div className="relative mx-auto aspect-square w-full max-w-[600px] overflow-hidden rounded-3xl bg-gradient-to-br from-violet-600 to-indigo-700 p-12 shadow-2xl sm:aspect-[4/3] lg:aspect-square lg:w-[600px]">
            <div className="absolute inset-0 bg-grid-white/10 [mask-image:radial-gradient(white,transparent)]" />
            <div className="relative flex h-full flex-col items-center justify-center gap-8">
                {/* Simulated Clapboard */}
                <div className="glass w-full max-w-[320px] rounded-[2rem] p-6 shadow-2xl">
                    {/* Clapper top */}
                    <div className="mb-2 flex items-center justify-between rounded-t-xl bg-zinc-950 px-4 py-3 border-2 border-zinc-800">
                        <div className="flex items-center gap-2">
                            <Clapperboard className="h-5 w-5 text-white" />
                            <span className="text-sm font-bold text-white tracking-wide">CREATOR CLAPBOARD</span>
                        </div>
                    </div>
                    {/* Slate body */}
                    <div className="rounded-b-xl bg-zinc-950 p-4 border-2 border-t-0 border-zinc-800 space-y-3">
                        <div className="flex items-center justify-between">
                            <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Scene</span>
                            <span className="text-lg font-bold text-white font-mono">14A</span>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Take</span>
                            <span className="text-lg font-bold text-emerald-400 font-mono">03</span>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Shot</span>
                            <span className="text-sm font-semibold text-violet-300">Close-Up</span>
                        </div>
                        <div className="h-px w-full bg-zinc-800" />
                        <div className="flex items-center justify-between">
                            <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Project</span>
                            <span className="text-sm font-semibold text-zinc-300">My Short Film</span>
                        </div>
                    </div>
                </div>

                {/* Floating icons */}
                <div className="glass p-4 rounded-2xl">
                    <div className="flex items-center gap-4 text-white">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20">
                            <Film className="h-5 w-5" />
                        </div>
                        <div>
                            <p className="text-xs font-semibold uppercase tracking-wider opacity-60">Production Ready</p>
                            <p className="text-lg font-bold">100% Offline</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
