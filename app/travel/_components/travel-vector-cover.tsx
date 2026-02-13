"use client";

import React from "react";
import {
    Plane,
    Palmtree,
    Mountain,
    Trees,
    Building2,
    Landmark,
    Waves,
    Sun,
    Map,
    Ship,
    Train,
    Wind
} from "lucide-react";

interface VectorCoverProps {
    slug: string;
    className?: string;
}

export function TravelVectorCover({ slug, className = "" }: VectorCoverProps) {
    // Define themes for each slug
    const themes: Record<string, {
        colors: string[];
        icon: React.ReactNode;
        overlay: React.ReactNode;
    }> = {
        "California": {
            colors: ["#f97316", "#ef4444", "#7c3aed"], // Orange to Purple
            icon: <Palmtree className="h-32 w-32 opacity-20" />,
            overlay: (
                <svg className="absolute inset-0 h-full w-full" preserveAspectRatio="none">
                    <path d="M0,100 Q25,50 50,100 T100,100 V100 H0 Z" fill="rgba(255,255,255,0.05)" />
                    <circle cx="80%" cy="20%" r="40" fill="rgba(255,165,0,0.2)" />
                </svg>
            )
        },
        "canadian-rockies": {
            colors: ["#06b6d4", "#3b82f6", "#1e40af"], // Cyan to Deep Blue
            icon: <Mountain className="h-32 w-32 opacity-20" />,
            overlay: (
                <svg className="absolute inset-0 h-full w-full" preserveAspectRatio="none">
                    <path d="M0,100 L30,40 L60,100 L80,60 L100,100 V100 H0 Z" fill="rgba(255,255,255,0.05)" />
                </svg>
            )
        },
        "atlantic-corridor": {
            colors: ["#4338ca", "#6d28d9", "#1e1b4b"], // Indigo to Deep purple
            icon: <Building2 className="h-32 w-32 opacity-20" />,
            overlay: (
                <div className="absolute inset-0 opacity-10">
                    <div className="grid h-full w-full grid-cols-12 items-end gap-1">
                        {Array.from({ length: 24 }).map((_, i) => {
                            // Deterministic height based on index
                            const height = 20 + ((i * 13) % 61);
                            return (
                                <div key={i} className="bg-white/20" style={{ height: `${height}%` }} />
                            );
                        })}
                    </div>
                </div>
            )
        },
        "florida-sunshine": {
            colors: ["#fbbf24", "#f97316", "#0ea5e9"], // Yellow to Blue
            icon: <Sun className="h-32 w-32 opacity-20" />,
            overlay: (
                <svg className="absolute inset-0 h-full w-full">
                    <circle cx="50%" cy="50%" r="30%" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="2" strokeDasharray="10 20" className="animate-spin-slow" />
                </svg>
            )
        },
        "pacific-northwest": {
            colors: ["#059669", "#065f46", "#0f172a"], // Emerald to Dark
            icon: <Trees className="h-32 w-32 opacity-20" />,
            overlay: (
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/20 to-transparent" />
            )
        },
        "quebec-heritage": {
            colors: ["#2563eb", "#1d4ed8", "#1e1b4b"], // Blue royal
            icon: <Landmark className="h-32 w-32 opacity-20" />,
            overlay: (
                <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 opacity-5">
                    {Array.from({ length: 36 }).map((_, i) => (
                        <div key={i} className="border border-white/20" />
                    ))}
                </div>
            )
        },
        "texas-triangle": {
            colors: ["#dc2626", "#2563eb", "#111827"], // Red to Blue to Black
            icon: <Map className="h-32 w-32 opacity-20" />,
            overlay: (
                <svg className="absolute inset-0 h-full w-full">
                    <path d="M10,10 L90,90 M90,10 L10,90" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" />
                </svg>
            )
        },
        "southwest-crossroads": {
            colors: ["#d97706", "#92400e", "#451a03"], // Amber to Brown
            icon: <Wind className="h-32 w-32 opacity-20" />,
            overlay: (
                <svg className="absolute inset-0 h-full w-full" preserveAspectRatio="none">
                    {Array.from({ length: 5 }).map((_, i) => (
                        <path key={i} d={`M0,${80 + i * 4} Q50,${70 + i * 4} 100,${80 + i * 4}`} fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
                    ))}
                </svg>
            )
        }
    };

    const theme = themes[slug] || themes["California"];

    return (
        <div
            className={`relative flex items-center justify-center overflow-hidden h-full w-full ${className}`}
            style={{
                background: `linear-gradient(135deg, ${theme.colors[0]}, ${theme.colors[1]}, ${theme.colors[2]})`
            }}
        >
            {/* Background patterns */}
            <div className="absolute inset-0 opacity-30 mix-blend-overlay">
                <div className="h-full w-full" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "32px 32px" }} />
            </div>

            {/* Theme-specific SVG/HTML Overlay */}
            {theme.overlay}

            {/* Large Focus Icon */}
            <div className="relative z-10 transition-transform duration-700 hover:scale-110">
                {theme.icon}
            </div>

            {/* Glassmorphism Flare */}
            <div className="absolute -top-1/2 -left-1/2 h-full w-full animate-pulse rounded-full bg-white/5 blur-3xl" />
        </div>
    );
}
