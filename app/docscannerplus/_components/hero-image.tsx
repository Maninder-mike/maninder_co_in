import { ScanLine, FileText, Smartphone, Image as ImageIcon, CheckCircle2, Wand2 } from "lucide-react";

export function HeroImage() {
    return (
        <div className="relative mx-auto aspect-square w-full max-w-[600px] overflow-hidden rounded-3xl bg-zinc-100 dark:bg-zinc-900/50 sm:aspect-[4/3] lg:aspect-square lg:w-[600px]">
            {/* Abstract Background Elements */}
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-indigo-500/20 blur-3xl filter" />
            <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl filter" />

            {/* Central Content */}
            <div className="absolute inset-0 flex items-center justify-center p-8">

                {/* Background Doc (The "Scanned" one) */}
                <div className="absolute top-1/2 left-1/2 h-80 w-64 -translate-x-1/2 -translate-y-[60%] rotate-3 transform rounded-xl border border-zinc-200 bg-white shadow-xl dark:border-zinc-700 dark:bg-zinc-800">
                    <div className="p-4 space-y-3 opacity-30">
                        <div className="h-4 w-1/2 rounded bg-zinc-300 dark:bg-zinc-600" />
                        <div className="h-2 w-full rounded bg-zinc-200 dark:bg-zinc-700" />
                        <div className="h-2 w-full rounded bg-zinc-200 dark:bg-zinc-700" />
                        <div className="h-2 w-3/4 rounded bg-zinc-200 dark:bg-zinc-700" />
                        <div className="mt-4 h-32 w-full rounded bg-zinc-100 dark:bg-zinc-800" />
                    </div>
                </div>

                {/* Phone Frame */}
                <div className="absolute top-1/2 left-1/2 h-96 w-56 -translate-x-1/2 -translate-y-1/2 transform rounded-[2.5rem] border-8 border-zinc-900 bg-zinc-900 shadow-2xl dark:border-zinc-800">
                    {/* Screen Content */}
                    <div className="h-full w-full overflow-hidden rounded-[2rem] bg-zinc-50 dark:bg-zinc-950 relative">
                        {/* Dynamic Island */}
                        <div className="absolute top-2 left-1/2 h-6 w-20 -translate-x-1/2 rounded-full bg-black z-20"></div>

                        {/* Camera Viewfinder UI */}
                        <div className="absolute inset-0 p-4 flex flex-col pt-12">
                            {/* The "Live View" */}
                            <div className="relative flex-1 rounded-2xl overflow-hidden bg-white shadow-inner border border-zinc-200 dark:bg-zinc-900 dark:border-zinc-800">
                                {/* Document in view */}
                                <div className="absolute inset-4 bg-zinc-100 dark:bg-zinc-800 rounded-lg border-2 border-dashed border-blue-500/50 flex flex-col p-3 gap-2">
                                    <div className="h-3 w-1/2 bg-zinc-200 dark:bg-zinc-700 rounded-full" />
                                    <div className="h-2 w-full bg-zinc-200 dark:bg-zinc-700 rounded-full" />
                                    <div className="h-2 w-full bg-zinc-200 dark:bg-zinc-700 rounded-full" />
                                    <div className="h-20 w-full mt-2 bg-zinc-200 dark:bg-zinc-700 rounded-lg opacity-50" />
                                </div>

                                {/* Scanning Beam */}
                                <div className="absolute inset-x-0 top-1/2 h-1 bg-blue-500 shadow-[0_0_20px_2px_rgba(59,130,246,0.5)] animate-scan-y opacity-80" />

                                {/* Corner Guides */}
                                <div className="absolute top-4 left-4 h-4 w-4 border-l-2 border-t-2 border-blue-600 rounded-tl-lg" />
                                <div className="absolute top-4 right-4 h-4 w-4 border-r-2 border-t-2 border-blue-600 rounded-tr-lg" />
                                <div className="absolute bottom-4 left-4 h-4 w-4 border-l-2 border-b-2 border-blue-600 rounded-bl-lg" />
                                <div className="absolute bottom-4 right-4 h-4 w-4 border-r-2 border-b-2 border-blue-600 rounded-br-lg" />
                            </div>

                            {/* Bottom Controls */}
                            <div className="h-20 flex items-center justify-between px-4 mt-4">
                                <div className="h-10 w-10 rounded-full bg-zinc-200 dark:bg-zinc-800" />
                                <div className="h-14 w-14 rounded-full border-4 border-blue-600 bg-white dark:bg-zinc-800 p-1">
                                    <div className="h-full w-full rounded-full bg-blue-600" />
                                </div>
                                <div className="h-10 w-10 rounded-full bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center">
                                    <ScanLine className="h-5 w-5 text-zinc-500" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Floating Badges */}
                <div className="absolute top-24 right-8 transform rotate-6 animate-pulse-slow">
                    <div className="flex items-center gap-2 rounded-full border border-zinc-100 bg-white/90 px-4 py-2 shadow-lg backdrop-blur-sm dark:border-zinc-700 dark:bg-zinc-800/90">
                        <Wand2 className="h-4 w-4 text-purple-500" />
                        <span className="text-xs font-bold text-zinc-900 dark:text-zinc-100">AI Enhanced</span>
                    </div>
                </div>

                <div className="absolute bottom-24 left-8 transform -rotate-3">
                    <div className="flex items-center gap-2 rounded-full border border-zinc-100 bg-white/90 px-4 py-2 shadow-lg backdrop-blur-sm dark:border-zinc-700 dark:bg-zinc-800/90">
                        <CheckCircle2 className="h-4 w-4 text-green-500" />
                        <span className="text-xs font-bold text-zinc-900 dark:text-zinc-100">OCR Ready</span>
                    </div>
                </div>

            </div>
        </div>
    );
}
