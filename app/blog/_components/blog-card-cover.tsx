"use client";

import React from "react";
import {
    FileText,
    Terminal,
    Code2,
    Cpu,
    BookOpen,
    Newspaper
} from "lucide-react";

interface BlogCardCoverProps {
    slug: string;
    className?: string;
}

export function BlogCardCover({ slug, className = "" }: BlogCardCoverProps) {
    // Generate a pseudo-random number based on slug string to pick a theme
    const hash = slug.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    
    // Array of abstract themes for blog posts
    const themes = [
        { colors: ["#0f172a", "#334155", "#020617"], icon: <Terminal className="h-24 w-24 opacity-20" /> },
        { colors: ["#1e1b4b", "#4c1d95", "#0f172a"], icon: <Code2 className="h-24 w-24 opacity-20" /> },
        { colors: ["#064e3b", "#047857", "#022c22"], icon: <Cpu className="h-24 w-24 opacity-20" /> },
        { colors: ["#7f1d1d", "#b91c1c", "#450a0a"], icon: <BookOpen className="h-24 w-24 opacity-20" /> },
        { colors: ["#172554", "#1d4ed8", "#0f172a"], icon: <FileText className="h-24 w-24 opacity-20" /> },
        { colors: ["#451a03", "#b45309", "#2dd4bf"], icon: <Newspaper className="h-24 w-24 opacity-20" /> },
    ];

    const theme = themes[hash % themes.length];

    return (
        <div
            className={`relative flex items-center justify-center overflow-hidden h-full w-full ${className}`}
            style={{
                background: `linear-gradient(135deg, ${theme.colors[0]}, ${theme.colors[1]}, ${theme.colors[2]})`
            }}
        >
            {/* Background patterns */}
            <div className="absolute inset-0 opacity-20 mix-blend-overlay">
                <div className="h-full w-full" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)", backgroundSize: "20px 20px" }} />
            </div>

            {/* Gradient Overlay for bottom text legibility is added directly to the page wrapper, not here */}

            {/* Large Focus Icon */}
            <div className="relative z-10 transition-transform duration-700 hover:scale-110 text-white">
                {theme.icon}
            </div>

            {/* Glassmorphism Flare */}
            <div className="absolute -top-1/2 -left-1/2 h-full w-full animate-pulse rounded-full bg-white/5 blur-3xl mix-blend-overlay" />
        </div>
    );
}
