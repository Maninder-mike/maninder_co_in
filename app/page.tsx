import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import * as Icons from "lucide-react";
import { type NewsletterState } from "./_components/newsletter-form";
import { LogoAnimator } from "./_components/logo-animator";
import { ProjectCard } from "./_components/project-card";
import { MobileNav } from "./_components/mobile-nav";
import { projects } from "@/lib/data/projects";
import { travelLogs } from "@/lib/data/travel-logs";
import { TravelVectorCover } from "./travel/_components/travel-vector-cover";

const NewsletterForm = dynamic(() => import("./_components/newsletter-form"));
const SiteCustomizer = dynamic(() =>
  import("./_components/site-customizer").then((mod) => mod.SiteCustomizer)
);

async function subscribeAction(
  _prev: NewsletterState,
  formData: FormData
): Promise<NewsletterState> {
  "use server";

  const email = formData.get("email")?.toString().trim().toLowerCase();

  if (!email) return { status: "error", message: "Email is required" };

  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!emailOk) return { status: "error", message: "Enter a valid email" };

  // Note: Supabase interaction removed as per static migration.
  return {
    status: "success",
    message: "Thanks! You're subscribed to updates (Static Mode).",
  };
}

export default async function Home() {
  const publishedLogs = travelLogs.filter(l => l.published);

  return (
    <div className="min-h-dvh bg-zinc-50 text-zinc-900 selection:bg-zinc-900 selection:text-white dark:bg-zinc-950 dark:text-zinc-100 dark:selection:bg-zinc-100 dark:selection:text-zinc-900">
      {/* Background Grid */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-grid-pattern opacity-50"></div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-200 bg-white/80 backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-950/80">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <LogoAnimator />
          <div className="hidden gap-8 text-sm font-bold uppercase tracking-widest sm:flex">
            <a href="#work" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Work</a>
            <a href="#travel" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Travel</a>
            <a href="/about" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">About</a>
          </div>
          <MobileNav />
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 mx-auto flex min-h-[85vh] max-w-6xl flex-col justify-center px-6 pt-20">
        <div className="max-w-4xl space-y-8">
          <h1 className="text-5xl font-bold tracking-tighter sm:text-7xl lg:text-9xl leading-[0.9]">
            Engineering <br />
            <span className="text-gradient">
              The Journey.
            </span>
          </h1>

          <p className="max-w-3xl text-lg sm:text-2xl leading-relaxed text-zinc-600 dark:text-zinc-400 font-medium">
            Mobile Engineer & World Traveler. I build seamless digital products by day and explore global trails by foot, merging technical rigor with a passion for exploration.
          </p>
        </div>
      </section>

      {/* Scrolling Marquee */}
      <div className="relative z-10 w-full overflow-hidden border-y border-zinc-200 bg-white py-6 dark:border-zinc-800 dark:bg-zinc-950">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...Array(10)].map((_, i) => (
            <span key={i} className="mx-12 text-3xl sm:text-5xl font-bold uppercase tracking-widest text-zinc-200 dark:text-zinc-800 transition-colors">
              Developer • Traveler • Runner •
            </span>
          ))}
        </div>
      </div>

      {/* Selected Work (Grid) */}
      <section id="work" className="relative z-10 mx-auto max-w-6xl px-6 py-24 sm:py-32">
        <div className="mb-16 flex flex-col gap-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-6xl">Selected Work</h2>
          <p className="max-w-xl text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed font-medium">
            A few of the problems I&apos;ve solved and products I&apos;ve built.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </div>
      </section>

      {/* Travel Section */}
      <section id="travel" className="relative z-10 mx-auto max-w-6xl px-6 py-24 sm:py-32">
        <div className="mb-16 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Travel Log</h2>
          <p className="max-w-xs text-left sm:text-right text-sm sm:text-base text-zinc-500 font-medium">
            Collecting stories and miles from around the globe.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {publishedLogs.map((place) => {
            return (
              <a
                key={place.slug}
                href={`/travel/${place.slug}`}
                className="group relative aspect-[4/5] overflow-hidden rounded-2xl bg-zinc-100 dark:bg-zinc-900"
              >
                <TravelVectorCover slug={place.slug} className="transition-transform duration-500 group-hover:scale-105" />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-6 flex flex-col justify-end">
                  <h3 className="text-xl font-bold text-white">{place.title}</h3>
                  <span className="mt-2 inline-block translate-y-4 text-xs font-medium text-white/80 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    View Gallery →
                  </span>
                </div>
              </a>
            );
          })}
          {publishedLogs.length === 0 && (
            <div className="col-span-full py-12 text-center text-zinc-500 dark:text-zinc-400">
              No travel logs yet. Check back soon!
            </div>
          )}
        </div>
      </section>





      {/* Footer / Contact */}
      <footer className="relative z-10 border-t border-zinc-200 bg-white py-24 dark:border-zinc-800 dark:bg-zinc-950">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-16 lg:grid-cols-2">
            <div className="space-y-8">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Stay in the loop.</h2>
              <p className="max-w-md text-lg text-zinc-600 dark:text-zinc-400 font-medium">
                Join my newsletter for occasional updates on new projects, travel stories, and tech insights.
              </p>
              <div className="max-w-md">
                <NewsletterForm action={subscribeAction} />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-12 sm:gap-16 lg:pl-20">
              <div className="space-y-6">
                <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500">Socials</h3>
                <ul className="space-y-4 text-base font-medium">
                  <li><a href="https://x.com/maninder_mike" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Twitter / X</a></li>
                  <li><a href="https://github.com/maninder-mike" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">GitHub</a></li>
                  <li><a href="https://linkedin.com/in/maninder-mike" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">LinkedIn</a></li>
                  <li><a href="https://instagram.com" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Instagram</a></li>
                </ul>
              </div>
              <div className="space-y-6">
                <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500">Navigation</h3>
                <ul className="space-y-4 text-base font-medium">
                  <li><a href="#work" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Work</a></li>
                  <li><a href="#travel" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Travel</a></li>
                  <li><a href="/about" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">About</a></li>
                  <li className="pt-4">
                    <SiteCustomizer />
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-24 flex flex-col items-center justify-between gap-4 border-t border-zinc-200 pt-8 text-sm text-zinc-500 sm:flex-row dark:border-zinc-800">
            <p>© {new Date().getFullYear()} Maninder. All rights reserved.</p>
            <p>Built in Canada 🇨🇦</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
