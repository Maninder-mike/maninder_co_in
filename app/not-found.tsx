import Link from "next/link";
import { SiteNav } from "./_components/site-nav";
import { SiteFooter } from "./_components/site-footer";

export const metadata = {
  title: "404 - Not Found | Maninder",
  description: "The page you are looking for does not exist.",
};

export default function NotFound() {
  return (
    <div className="min-h-dvh flex flex-col bg-zinc-50 text-zinc-900 selection:bg-zinc-900 selection:text-white dark:bg-zinc-950 dark:text-zinc-100 dark:selection:bg-zinc-100 dark:selection:text-zinc-900">
      <SiteNav variant="default" />
      <main className="flex-1 flex flex-col items-center justify-center p-6 text-center">
        <h1 className="text-6xl font-bold tracking-tighter sm:text-8xl">404</h1>
        <h2 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">Page not found</h2>
        <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400 font-medium max-w-md">
          Sorry, I couldn't find the page you're looking for. It might have been moved or deleted.
        </p>
        <Link 
          href="/" 
          className="mt-8 rounded-full bg-zinc-900 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-zinc-800 transition-colors dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
        >
          Back to Home
        </Link>
      </main>
      <SiteFooter variant="default" />
    </div>
  );
}
