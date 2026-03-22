import Link from "next/link";
import { JsonLd } from "./_components/json-ld";
import Image from "next/image";
import { LogoAnimator } from "./_components/logo-animator";
import { ProjectCard } from "./_components/project-card";
import { SiteNav } from "./_components/site-nav";
import { SiteFooter } from "./_components/site-footer";
import { ScrollReveal } from "./_components/scroll-reveal";
import { CursorGlow } from "./_components/cursor-glow";
import { projects } from "@/lib/data/projects";
import { getTravelLogs } from "@/lib/travel";
import { TravelVectorCover } from "./travel/_components/travel-vector-cover";



export default async function Home() {
  const travelLogs = getTravelLogs();
  const publishedLogs = travelLogs.filter(l => l.published);

  return (
    <div className="min-h-dvh bg-zinc-50 text-zinc-900 selection:bg-zinc-900 selection:text-white dark:bg-black dark:text-zinc-100 dark:selection:bg-blue-500/30 dark:selection:text-blue-200">
      <CursorGlow />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Maninder",
          url: "https://maninder.co.in",
          jobTitle: "Mobile Engineer",
          sameAs: [
            "https://github.com/maninder-mike",
            "https://linkedin.com/in/maninder-mike",
            "https://x.com/maninder_mike",
          ],
        }}
      />
      
      {/* Background Grid */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-grid-pattern opacity-50 dark:opacity-[0.15]"></div>

      {/* Ambient Orbs (Premium Dark Mode Effect) */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden opacity-0 dark:opacity-100 transition-opacity duration-1000">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-600/20 blur-[120px] mix-blend-screen animate-blob" />
        <div className="absolute top-[40%] right-[-10%] w-[50%] h-[50%] rounded-full bg-purple-600/20 blur-[120px] mix-blend-screen animate-blob animation-delay-2000" />
        <div className="absolute bottom-[-20%] left-[20%] w-[50%] h-[50%] rounded-full bg-emerald-600/10 blur-[120px] mix-blend-screen animate-blob animation-delay-4000" />
      </div>
      {/* Navigation */}
      <SiteNav variant="default" />

      {/* Main Content */}
      <main id="main-content">
        {/* Hero Section */}
        <section className="relative z-10 mx-auto flex min-h-[85vh] max-w-6xl flex-col justify-center px-6 pt-20">
        <div className="max-w-4xl space-y-8">
          <ScrollReveal>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl lg:text-7xl xl:text-9xl leading-[0.9]">
              Engineering <br />
              <span className="text-gradient">
                The Journey.
              </span>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <p className="max-w-3xl text-base sm:text-lg lg:text-2xl leading-relaxed text-zinc-600 dark:text-zinc-400 font-medium">
              App Developer & World Traveler. I build easy-to-use digital products by day and explore global trails by foot, merging creative problem-solving with a passion for exploration.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Scrolling Marquee */}
      <div className="relative z-10 w-full overflow-hidden border-y border-zinc-200 bg-white py-6 dark:border-zinc-800/30 dark:bg-black/50 dark:backdrop-blur-xl">
        <div className="flex animate-marquee whitespace-nowrap" aria-hidden="true">
          {[...Array(10)].map((_, i) => (
            <span key={i} className="mx-6 sm:mx-12 text-2xl sm:text-3xl lg:text-5xl font-bold uppercase tracking-widest text-zinc-200 dark:text-zinc-800 transition-colors">
              App Developer • Traveler • Runner •
            </span>
          ))}
        </div>
      </div>

      {/* Selected Work (Grid) */}
      <section id="work" className="relative z-10 mx-auto max-w-6xl px-6 py-24 sm:py-32">
        <ScrollReveal>
          <div className="mb-16 flex flex-col gap-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-6xl">Selected Work</h2>
            <p className="max-w-xl text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed font-medium">
              A few of the problems I&apos;ve solved and products I&apos;ve built.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, i) => (
            <ScrollReveal key={project.id} delay={i * 100}>
              <ProjectCard
                project={project}
              />
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Travel Section */}
      <section id="travel" className="relative z-10 mx-auto max-w-6xl px-6 py-24 sm:py-32">
        <ScrollReveal>
          <div className="mb-16 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Travel Log</h2>
            <p className="max-w-xs text-left sm:text-right text-sm sm:text-base text-zinc-500 font-medium">
              Collecting stories and miles from around the globe.
            </p>
          </div>
        </ScrollReveal>

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





      </main>

      {/* Footer / Contact */}
      <SiteFooter variant="default" />
    </div>
  );
}
