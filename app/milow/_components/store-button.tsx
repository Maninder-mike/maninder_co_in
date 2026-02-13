"use client";

import React from "react";

interface StoreButtonProps {
    store: "google" | "microsoft";
    href: string;
}

export function StoreButton({ store, href }: StoreButtonProps) {
    const isGoogle = store === "google";

    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-xl border border-zinc-200 bg-white px-4 py-2 transition-all hover:scale-[1.02] hover:bg-zinc-50 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900 dark:hover:bg-zinc-800"
        >
            {isGoogle ? (
                <svg viewBox="0 0 24 24" className="h-6 w-6" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 20.5V3.5C3 2.91 3.34 2.39 3.84 2.15L13.69 12L3.84 21.85C3.34 21.61 3 21.09 3 20.5Z" fill="#00E676" />
                    <path d="M17.94 15.06L13.69 12L3.84 21.85C4.38 22.11 5.03 22.05 5.54 21.71L17.94 15.06Z" fill="#F44336" />
                    <path d="M21 12.78C21 13.43 20.6 14.03 20 14.33L17.94 15.06L13.69 12L17.94 8.94L20 9.67C20.6 9.97 21 10.57 21 11.22V12.78Z" fill="#3F51B5" />
                    <path d="M17.94 8.94L5.54 2.29C5.03 1.95 4.38 1.89 3.84 2.15L13.69 12L17.94 8.94Z" fill="#FFC107" />
                </svg>
            ) : (
                <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.25 4.5V20.25H21.75V4.5H2.25ZM3.75 6H12V11.25H3.75V6ZM3.75 12.75H12V18.75H3.75V12.75ZM13.5 18.75V12.75H20.25V18.75H13.5ZM20.25 11.25H13.5V6H20.25V11.25Z" fill="currentColor" />
                </svg>
            )}
            <div className="flex flex-col leading-none">
                <span className="text-[10px] font-medium text-zinc-500 uppercase tracking-wider">
                    {isGoogle ? "Get it on" : "Download from"}
                </span>
                <span className="text-sm font-bold text-zinc-900 dark:text-zinc-100 mt-0.5">
                    {isGoogle ? "Google Play" : "Microsoft Store"}
                </span>
            </div>
        </a>
    );
}
