import Link from "next/link";
import { SiteNav } from "./_components/site-nav";
import { SiteFooter } from "./_components/site-footer";
import { CursorGlow } from "./_components/cursor-glow";

export const metadata = {
  title: "404 - Not Found | Maninder",
  description: "The page you are looking for does not exist.",
};

export default function NotFound() {
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
          <h1 className="text-8xl font-black tracking-tighter sm:text-9xl md:text-[12rem] glitch-text leading-none select-none text-zinc-900 dark:text-zinc-100" data-text="404">
            404
          </h1>
        </div>
        
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl text-zinc-950 dark:text-zinc-50">
          Lost in Space?
        </h2>
        <p className="mt-4 text-base sm:text-lg text-zinc-600 dark:text-zinc-400 font-medium max-w-md leading-relaxed">
          Sorry, I couldn&apos;t find the page you&apos;re looking for. It might have been moved, deleted, or never existed in this timeline.
        </p>

        <div className="mt-10 flex items-center justify-center gap-4">
          <Link 
            href="/" 
            className="rounded-full bg-zinc-900 px-8 py-4 text-sm font-semibold text-white shadow-sm hover:scale-105 active:scale-95 transition-all dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-100"
          >
            Back to Home
          </Link>
          <Link 
            href="/contact" 
            className="rounded-full border border-zinc-200 bg-white/50 backdrop-blur-sm px-8 py-4 text-sm font-semibold text-zinc-900 shadow-sm hover:scale-105 active:scale-95 transition-all dark:border-zinc-800 dark:bg-zinc-900/50 dark:text-zinc-100 dark:hover:bg-zinc-900"
          >
            Report Issue
          </Link>
        </div>
      </main>
      
      <SiteFooter variant="default" />
    </div>
  );
}

