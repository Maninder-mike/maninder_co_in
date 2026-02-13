"use client";

import React from "react";
import { Info, Lightbulb, AlertTriangle, MapPin } from "lucide-react";

interface TravelCalloutProps {
    type: "tip" | "info" | "warning" | "location";
    title?: string;
    children: React.ReactNode;
}

export function TravelCallout({ type, title, children }: TravelCalloutProps) {
    const configs = {
        tip: {
            icon: <Lightbulb className="h-5 w-5 text-amber-500" />,
            bg: "bg-amber-50/50 dark:bg-amber-900/10",
            border: "border-amber-200/50 dark:border-amber-800/50",
            accent: "text-amber-900 dark:text-amber-100",
        },
        info: {
            icon: <Info className="h-5 w-5 text-blue-500" />,
            bg: "bg-blue-50/50 dark:bg-blue-900/10",
            border: "border-blue-200/50 dark:border-blue-800/50",
            accent: "text-blue-900 dark:text-blue-100",
        },
        warning: {
            icon: <AlertTriangle className="h-5 w-5 text-rose-500" />,
            bg: "bg-rose-50/50 dark:bg-rose-900/10",
            border: "border-rose-200/50 dark:border-rose-800/50",
            accent: "text-rose-900 dark:text-rose-100",
        },
        location: {
            icon: <MapPin className="h-5 w-5 text-emerald-500" />,
            bg: "bg-emerald-50/50 dark:bg-emerald-900/10",
            border: "border-emerald-200/50 dark:border-emerald-800/50",
            accent: "text-emerald-900 dark:text-emerald-100",
        },
    };

    const config = configs[type];

    return (
        <div className={`my-6 flex gap-4 rounded-2xl border ${config.border} ${config.bg} p-5 backdrop-blur-sm transition-all hover:shadow-md`}>
            <div className="shrink-0">{config.icon}</div>
            <div className="space-y-1">
                {title && (
                    <h4 className={`text-sm font-bold uppercase tracking-wider ${config.accent}`}>
                        {title}
                    </h4>
                )}
                <div className="text-sm font-medium leading-relaxed text-zinc-600 dark:text-zinc-400">
                    {children}
                </div>
            </div>
        </div>
    );
}
