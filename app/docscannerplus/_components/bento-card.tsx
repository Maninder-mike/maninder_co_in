import { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";

interface BentoCardProps {
    title: string;
    description: string;
    icon?: ReactNode;
    className?: string;
    graphic?: ReactNode;
    fade?: ("top" | "bottom")[];
}

export function BentoCard({ title, description, icon, className = "", graphic, fade = [] }: BentoCardProps) {
    return (
        <div className={`group relative overflow-hidden rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm transition-all hover:shadow-xl dark:border-zinc-800 dark:bg-zinc-950 ${className}`}>

            {/* Content Content - Positioned based on if there is a graphic */}
            <div className="relative z-10 flex h-full flex-col justify-between">
                <div>
                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-100 dark:bg-zinc-800">
                        {icon}
                    </div>
                    <h3 className="mb-2 text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">{title}</h3>
                    <p className="max-w-[80%] text-zinc-500 dark:text-zinc-400">{description}</p>
                </div>

                {/* Optional Graphic Slot */}
                {graphic && (
                    <div className="absolute inset-0 z-0">
                        {graphic}
                    </div>
                )}
            </div>

            {/* Hover Icon */}
            <div className="absolute right-6 top-6 opacity-0 transition-opacity group-hover:opacity-100">
                <ArrowUpRight className="h-5 w-5 text-zinc-400" />
            </div>

            {/* Fade Overlays */}
            {fade.includes("top") && <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white to-transparent dark:from-zinc-950" />}
            {fade.includes("bottom") && <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent dark:from-zinc-950" />}
        </div>
    );
}
