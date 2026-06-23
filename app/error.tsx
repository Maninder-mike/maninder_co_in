"use client";

import { useEffect } from "react";
import Link from "next/link";
import { SiteNav } from "./_components/site-nav";
import { SiteFooter } from "./_components/site-footer";
import { CursorGlow } from "./_components/cursor-glow";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-dvh flex flex-col bg-zinc-50 text-zinc-900 selection:bg-zinc-900 selection:text-white dark:bg-black dark:text-zinc-100 dark:selection:bg-blue-500/30 dark:selection:text-blue-200 relative overflow-hidden">
      <CursorGlow />
      
      {/* Background Grid */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-grid-pattern opacity-40 dark:opacity-[0.12]"></div>

      {/* Aurora Background Effect */}
      <div className="absolute inset-0 z-0 bg-gradient-to-tr from-blue-500/5 via-transparent to-purple-500/5 dark:from-blue-950/20 dark:via-transparent dark:to-purple-950/20 pointer-events-none animate-aurora"></div>

      <SiteNav variant="default" />
      
      <main className="relative z-10 flex-1 flex flex-col items-center justify-center p-6 text-center">
        <div className="glitch-container mb-6">
          <h1 className="text-8xl font-black tracking-tighter sm:text-9xl md:text-[12rem] glitch-text leading-none select-none text-zinc-900 dark:text-zinc-100" data-text="500">
            500
          </h1>
        </div>
        
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl text-zinc-950 dark:text-zinc-50">
          Something went wrong!
        </h2>
        <p className="mt-4 text-base sm:text-lg text-zinc-600 dark:text-zinc-400 font-medium max-w-md leading-relaxed">
          An unexpected error occurred in the system. Please try resetting the page, or return home.
        </p>

        <div className="mt-10 flex items-center justify-center gap-4">
          <button
            onClick={() => reset()}
            className="rounded-full bg-zinc-900 px-8 py-4 text-sm font-semibold text-white shadow-sm hover:scale-105 active:scale-95 transition-all dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-100"
          >
            Try Again
          </button>
          <Link
            href="/"
            className="rounded-full border border-zinc-200 bg-white/50 backdrop-blur-sm px-8 py-4 text-sm font-semibold text-zinc-900 shadow-sm hover:scale-105 active:scale-95 transition-all dark:border-zinc-800 dark:bg-zinc-900/50 dark:text-zinc-100 dark:hover:bg-zinc-900"
          >
            Back to Home
          </Link>
        </div>
      </main>
      
      <SiteFooter variant="default" />
    </div>
  );
}

