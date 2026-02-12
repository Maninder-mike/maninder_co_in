"use client";

import Link from "next/link";
import * as Icons from "lucide-react";
import { Project } from "@/lib/types";

interface ProjectCardProps {
    project: Project;
    className?: string;
    isFeatured?: boolean;
}

export function ProjectCard({ project, className = "", isFeatured = false }: ProjectCardProps) {
    const IconComponent = project.icon ? (Icons as any)[project.icon] : Icons.Box;

    const getGradientClass = (category?: string) => {
        const cat = category?.toLowerCase() || "";
        if (cat.includes("logistics")) return "gradient-logistics";
        if (cat.includes("fitness")) return "gradient-fitness";
        if (cat.includes("productivity")) return "gradient-productivity";
        if (cat.includes("supply")) return "gradient-supply";
        return "gradient-productivity";
    };

    const gradientClass = getGradientClass(project.category);

    return (
        <div
            className={`glass-premium group relative flex flex-col h-full rounded-3xl p-6 transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1 ${gradientClass} ${className}`}
        >
            <div className="flex flex-col h-full space-y-6 relative z-10">
                <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 space-y-2">
                        {project.category && (
                            <span className="inline-block rounded-full bg-zinc-100 dark:bg-zinc-800/50 px-3 py-1 text-[9px] font-bold uppercase tracking-[0.15em] text-zinc-500 dark:text-zinc-400">
                                {project.category}
                            </span>
                        )}
                        <h3 className="text-xl font-bold tracking-tight leading-tight min-h-[3rem]">
                            {project.title}
                        </h3>
                    </div>
                    <div className="shrink-0 rounded-xl bg-white/50 dark:bg-zinc-800/50 p-2.5 text-zinc-900 dark:text-zinc-100 shadow-sm transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-md">
                        <IconComponent size={20} strokeWidth={1.5} />
                    </div>
                </div>

                <div className="flex-1 space-y-6">
                    <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 font-medium line-clamp-3 min-h-[4.5rem]">
                        {project.description}
                    </p>

                    {project.outcome && (
                        <div className="flex items-center gap-2">
                            <div className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                                <Icons.Sparkles size={12} />
                            </div>
                            <span className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                                {project.outcome}
                            </span>
                        </div>
                    )}
                </div>

                <div className="mt-auto pt-6 flex items-center justify-between border-t border-zinc-100/50 dark:border-zinc-800/50">
                    <div className="flex items-center gap-4">
                        {project.link && (
                            <Link
                                href={project.link}
                                target={project.link.startsWith('http') ? "_blank" : undefined}
                                rel={project.link.startsWith('http') ? "noopener noreferrer" : undefined}
                                className="group/link flex items-center gap-2 text-xs font-bold text-blue-600 dark:text-blue-400 transition-all font-mono uppercase tracking-wider"
                            >
                                <span>View Project</span>
                                <Icons.ExternalLink size={12} className="transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                            </Link>
                        )}
                    </div>
                </div>
            </div>

            {/* Subtle Background Glow */}
            <div className="absolute -right-20 -top-20 -z-10 h-64 w-64 rounded-full bg-current opacity-0 blur-[100px] transition-opacity duration-1000 group-hover:opacity-10 pointer-events-none" />
        </div>
    );
}
