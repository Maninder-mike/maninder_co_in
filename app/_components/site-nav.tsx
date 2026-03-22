import Link from "next/link";
import { ArrowLeft, Github } from "lucide-react";
import { LogoAnimator } from "./logo-animator";
import { MobileNav } from "./mobile-nav";

interface SiteNavProps {
  variant?: "default" | "product";
  githubUrl?: string | null;
}

export function SiteNav({ variant = "default", githubUrl }: SiteNavProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-200 bg-white/80 backdrop-blur-md dark:border-zinc-800/50 dark:bg-black/50">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {variant === "default" && (
          <>
            <LogoAnimator />
            <div className="hidden gap-8 text-sm font-bold uppercase tracking-widest sm:flex">
              <Link href="/#work" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Work</Link>
              <Link href="/#travel" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Travel</Link>
              <Link href="/about" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">About</Link>
              <Link href="/blog" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Blog</Link>
            </div>
            <MobileNav />
          </>
        )}

        {variant === "product" && (
          <>
            <Link href="/" className="flex items-center gap-2 text-sm font-medium hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
            <div className="flex gap-4">
              {githubUrl && (
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-100 px-4 py-2 text-sm font-medium transition-colors hover:bg-zinc-200 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:bg-zinc-800"
                >
                  <Github className="h-4 w-4" />
                  <span>GitHub</span>
                </a>
              )}
            </div>
          </>
        )}
      </div>
    </nav>
  );
}
