"use client";

import { useEffect } from "react";
import Link from "next/link";
import { SiteNav } from "./_components/site-nav";
import { SiteFooter } from "./_components/site-footer";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-dvh flex flex-col bg-zinc-50 text-zinc-900 selection:bg-zinc-900 selection:text-white dark:bg-zinc-950 dark:text-zinc-100 dark:selection:bg-zinc-100 dark:selection:text-zinc-900">
      <SiteNav variant="default" />
      <main className="flex-1 flex flex-col items-center justify-center p-6 text-center">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl">500</h1>
        <h2 className="mt-4 text-xl font-semibold tracking-tight sm:text-2xl">Something went wrong!</h2>
        <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400 font-medium max-w-md">
          An unexpected error occurred. Please try again or head back to the homepage.
        </p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            onClick={() => reset()}
            className="rounded-full bg-zinc-900 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-zinc-800 transition-colors dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
          >
            Try Again
          </button>
          <Link
            href="/"
            className="rounded-full border border-zinc-200 bg-white px-6 py-3 text-sm font-semibold text-zinc-900 shadow-sm transition-colors hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-100 dark:hover:bg-zinc-800"
          >
            Back to Home
          </Link>
        </div>
      </main>
      <SiteFooter variant="default" />
    </div>
  );
}
