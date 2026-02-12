"use client";

import { useState, useEffect } from "react";
import * as Icons from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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
    ];

    return (
        <div className="sm:hidden">
            <button
                onClick={() => setIsOpen(true)}
                className="p-2 text-zinc-900 dark:text-zinc-100"
                aria-label="Open menu"
            >
                <Icons.Menu size={24} />
            </button>

            <AnimatePresence>
                {isOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="fixed inset-0 z-[100] bg-zinc-950/40"
                        />
                        <motion.div
                            initial={{ x: "100%", opacity: 1 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: "100%", opacity: 1 }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="fixed inset-y-0 right-0 z-[110] w-[80%] max-w-sm border-l border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950 shadow-2xl overflow-hidden"
                            style={{ backgroundColor: 'rgb(255, 255, 255)', opacity: 1 }}
                        >
                            <div className="flex flex-col h-full bg-white dark:bg-zinc-950 p-8" style={{ backgroundColor: 'inherit' }}>
                                <div className="flex items-center justify-between mb-12">
                                    <span className="text-lg font-bold tracking-tighter">Menu</span>
                                    <button
                                        onClick={() => setIsOpen(false)}
                                        className="p-2 text-zinc-900 dark:text-zinc-100 transition-transform active:scale-95"
                                        aria-label="Close menu"
                                    >
                                        <Icons.X size={24} />
                                    </button>
                                </div>

                                <nav className="flex flex-col gap-6">
                                    {navLinks.map((link) => (
                                        <a
                                            key={link.href}
                                            href={link.href}
                                            onClick={(e) => {
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
                                            <a href="https://x.com/maninder_mike" className="text-zinc-600 dark:text-zinc-400 hover:text-blue-600 transition-colors"><Icons.Twitter size={20} /></a>
                                            <a href="https://github.com/maninder-mike" className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 transition-colors"><Icons.Github size={20} /></a>
                                            <a href="https://linkedin.com/in/maninder-mike" className="text-zinc-600 dark:text-zinc-400 hover:text-blue-700 transition-colors"><Icons.Linkedin size={20} /></a>
                                        </div>
                                    </div>
                                    <p className="text-xs text-zinc-500">© {new Date().getFullYear()} Maninder</p>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
}
