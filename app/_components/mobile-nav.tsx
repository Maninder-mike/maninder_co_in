"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { TwitterIcon, GithubIcon } from "./social-icons";

export function MobileNav() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    const navLinks = [
        { href: "#work", label: "Work" },
        { href: "#travel", label: "Travel" },
        { href: "/about", label: "About" },
        { href: "/blog", label: "Blog" },
    ];

    return (
        <div className="sm:hidden">
            <button
                onClick={() => setIsOpen(true)}
                className="p-3 text-zinc-900 dark:text-zinc-100 transition-transform active:scale-95"
                aria-label="Open menu"
            >
                <Menu size={24} />
            </button>

            {/* Backdrop */}
            <div
                onClick={() => setIsOpen(false)}
                data-open={isOpen}
                className="fixed inset-0 z-[100] bg-zinc-950/40 transition-opacity duration-300 opacity-0 pointer-events-none data-[open=true]:opacity-100 data-[open=true]:pointer-events-auto"
            />

            {/* Drawer */}
            <div
                data-open={isOpen}
                className="fixed inset-y-0 right-0 z-[110] w-[80%] max-w-sm border-l border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950 shadow-2xl overflow-hidden transition-all duration-300 ease-in-out translate-x-full invisible data-[open=true]:translate-x-0 data-[open=true]:visible"
            >
                <div className="flex flex-col h-full bg-white dark:bg-zinc-950 p-8">
                    <div className="flex items-center justify-between mb-12">
                        <span className="text-lg font-bold tracking-tighter">Menu</span>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="p-2 text-zinc-900 dark:text-zinc-100 transition-transform active:scale-95"
                            aria-label="Close menu"
                        >
                            <X size={24} />
                        </button>
                    </div>

                    <nav className="flex flex-col gap-6">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={() => {
                                    setIsOpen(false);
                                }}
                                className="text-3xl font-bold tracking-tight text-zinc-900 hover:text-blue-600 dark:text-zinc-100 dark:hover:text-blue-400 transition-all active:scale-[0.98]"
                            >
                                {link.label}
                            </a>
                        ))}
                    </nav>

                    <div className="mt-auto space-y-8">
                        <div className="space-y-4">
                            <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-500">Socials</h4>
                            <div className="flex gap-6">
                                <a href="https://x.com/maninder_mike" aria-label="Twitter / X Profile" className="text-zinc-600 dark:text-zinc-400 hover:text-blue-600 transition-colors"><TwitterIcon className="h-5 w-5" /></a>
                                <a href="https://github.com/maninder-mike" aria-label="GitHub Profile" className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 transition-colors"><GithubIcon className="h-5 w-5" /></a>
                            </div>
                        </div>
                        <p suppressHydrationWarning className="text-xs text-zinc-500">© {new Date().getFullYear()} Maninder</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

