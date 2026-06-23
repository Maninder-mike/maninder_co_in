"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
const NewsletterForm = dynamic(() => import("./newsletter-form"));
const SiteCustomizer = dynamic(() =>
  import("./site-customizer").then((mod) => mod.SiteCustomizer)
);

import { subscribeAction } from "@/app/actions/newsletter";

const socialLinks = [
  { label: "Twitter / X", href: "https://x.com/maninder_mike" },
  { label: "GitHub", href: "https://github.com/maninder-mike" },
  { label: "Instagram", href: "https://instagram.com/maninder_diary" },
] as const;

const navLinks = [
  { label: "Work", href: "/#work" },
  { label: "Blog", href: "/blog" },
  { label: "Travel", href: "/#travel" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

interface SiteFooterProps {
  variant?: "default" | "product";
  productName?: string;
  links?: { label: string; href: string }[];
}

export function SiteFooter({ variant = "default", productName, links }: SiteFooterProps) {
  if (variant === "product") {
    return (
      <footer className="relative z-10 border-t border-zinc-200 bg-zinc-50 py-12 dark:border-zinc-800/30 dark:bg-black/80 dark:backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 sm:flex-row">
          <p suppressHydrationWarning className="text-sm text-zinc-500">© {new Date().getFullYear()} {productName || "Maninder"}. All rights reserved.</p>
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm font-medium">
            {links && links.length > 0 ? (
              links.map((link) =>
                link.href.startsWith("http") ? (
                  <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-blue-600 dark:hover:text-blue-400">
                    {link.label}
                  </a>
                ) : (
                  <Link key={link.href} href={link.href} className="transition-colors hover:text-blue-600 dark:hover:text-blue-400">
                    {link.label}
                  </Link>
                )
              )
            ) : (
              <Link href="/" className="transition-colors hover:text-blue-600 dark:hover:text-blue-400">
                Home
              </Link>
            )}
          </div>
        </div>
      </footer>
    );
  }

  return (
    <footer className="relative z-10 border-t border-zinc-200 bg-zinc-50 py-24 dark:border-zinc-800/30 dark:bg-black/80 dark:backdrop-blur-xl">
      {/* Top Aurora Separator */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent dark:via-blue-400/30 animate-pulse"></div>

      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-16 lg:grid-cols-2">
          {/* Left: Newsletter CTA */}
          <div className="space-y-8 group/newsletter">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Stay in the loop.</h2>
            <p className="max-w-md text-lg font-medium text-zinc-600 dark:text-zinc-400">
              Join my newsletter for occasional updates on new projects, travel stories, and tech insights.
            </p>
            <div className="max-w-md relative">
              <div className="absolute -inset-6 z-0 rounded-3xl bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-50 blur-xl pointer-events-none group-hover/newsletter:opacity-100 transition-opacity duration-500 dark:from-blue-500/10 dark:to-purple-500/10"></div>
              <div className="relative z-10">
                <NewsletterForm action={subscribeAction} />
              </div>
            </div>
          </div>

          {/* Right: Nav + Socials */}
          <div className="grid grid-cols-2 gap-12 sm:gap-16 lg:pl-20">
            <div className="space-y-6">
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500">Socials</h3>
              <ul className="space-y-4 text-base font-medium">
                {socialLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-2 transition-colors hover:text-zinc-900 dark:hover:text-zinc-100"
                    >
                      <span className="inline-block h-px w-0 bg-current transition-all duration-300 group-hover:w-4" />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-6">
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500">Navigation</h3>
              <ul className="space-y-4 text-base font-medium">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="group inline-flex items-center gap-2 transition-colors hover:text-zinc-900 dark:hover:text-zinc-100"
                    >
                      <span className="inline-block h-px w-0 bg-current transition-all duration-300 group-hover:w-4" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-24 flex flex-col flex-wrap items-center justify-between gap-4 sm:gap-6 border-t border-zinc-200 pt-8 sm:flex-row dark:border-zinc-800">
          <p suppressHydrationWarning className="text-sm text-zinc-500">© {new Date().getFullYear()} Maninder. All rights reserved.</p>
          <SiteCustomizer />
          <p className="text-sm text-zinc-500">Built in Canada 🇨🇦</p>
        </div>
      </div>
    </footer>
  );
}
