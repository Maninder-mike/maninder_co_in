import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getTravelLogBySlug, getTravelLogs } from "@/lib/travel";
import { TravelCallout } from "../_components/travel-callout";
import { TravelVectorCover } from "../_components/travel-vector-cover";
import { SiteNav } from "../../_components/site-nav";
import { SiteFooter } from "../../_components/site-footer";
import { Plane, Bus, Train, Car, Ship, MapPin, Calendar, Clock, ChevronLeft, ChevronRight } from "lucide-react";
import { ShareButton } from "../../_components/share-button";
import { ReadingProgress } from "../../_components/reading-progress";

const mdxComponents = {
    TravelCallout,
    h2: ({ children }: any) => (
        <h2 className="mt-16 mb-8 text-3xl font-black tracking-tight text-zinc-900 dark:text-zinc-100 first:mt-0">
            {children}
        </h2>
    ),
    h3: ({ children }: any) => (
        <h3 className="mt-10 mb-4 text-xl font-bold text-zinc-800 dark:text-zinc-200">
            {children}
        </h3>
    ),
    p: ({ children }: any) => (
        <p className="mb-6 leading-relaxed text-zinc-600 dark:text-zinc-400 font-medium last:mb-0">
            {children}
        </p>
    ),
    ul: ({ children }: any) => (
        <div className="space-y-3 mb-6">{children}</div>
    ),
    li: ({ children }: any) => (
        <div className="flex gap-3 pl-2">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
            <p className="m-0 text-zinc-600 dark:text-zinc-400 font-medium">{children}</p>
        </div>
    ),
    strong: ({ children }: any) => (
        <strong className="font-bold text-zinc-900 dark:text-zinc-100">{children}</strong>
    ),
    // Define special callouts if needed, or use standard markdown and handle in content
};

export async function generateStaticParams() {
  const logs = getTravelLogs();
  return logs.map((log) => ({
    slug: log.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const log = getTravelLogBySlug(slug);

  if (!log) return {};

  return {
    title: `${log.title} | Travel Log`,
    description: log.description || `Read about my journey to ${log.title}.`,
    openGraph: {
      title: `${log.title} | Travel Log`,
      description: log.description || undefined,
      images: [
        {
          url: `/api/og?title=${encodeURIComponent(log.title)}`, 
          width: 1200,
          height: 630,
        },
      ],
    },
  };
}

export default async function TravelPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const log = getTravelLogBySlug(slug);

  if (!log) {
    notFound();
  }

  // Calculate trip duration
  let duration = "";
  const now = new Date();
  let isUpcoming = false;

  if (log.start_date && log.end_date) {
    const start = new Date(log.start_date);
    const end = new Date(log.end_date);
    const diffTime = Math.abs(end.getTime() - start.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1; // Inclusive
    duration = `${diffDays} Days`;
    isUpcoming = start > now;
  }

  const getTransportIcon = (mode: string) => {
    const m = mode.toLowerCase();
    if (m.includes("flight") || m.includes("plane")) return <Plane className="h-4 w-4" />;
    if (m.includes("bus")) return <Bus className="h-4 w-4" />;
    if (m.includes("rail") || m.includes("train")) return <Train className="h-4 w-4" />;
    if (m.includes("car") || m.includes("truck") || m.includes("taxi")) return <Car className="h-4 w-4" />;
    if (m.includes("ferry") || m.includes("ship")) return <Ship className="h-4 w-4" />;
    return <ChevronRight className="h-4 w-4" />; // Fallback
  };

  return (
    <div className="min-h-dvh bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100 selection:bg-zinc-900 selection:text-white dark:selection:bg-zinc-100 dark:selection:text-zinc-900">
      <ReadingProgress />
      <SiteNav variant="default" />
      
      {/* Hero Header */}
      <div className="relative h-[50vh] sm:h-[65vh] w-full overflow-hidden">
        <div className="absolute inset-0">
          <TravelVectorCover slug={log.slug} />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-50 via-black/10 to-black/30 dark:from-zinc-950" />

        <div className="absolute inset-x-0 top-0 z-50 p-6 pointer-events-none">
          <div className="mx-auto max-w-6xl flex justify-between items-center pointer-events-auto mt-20">
             <Link
                href="/#travel"
                className="group inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/20 px-4 py-2 text-sm font-semibold text-white backdrop-blur-xl transition hover:bg-black/40"
              >
                <ChevronLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                Explore More
              </Link>
          </div>
        </div>

        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
          <div className="animate-slide-up space-y-4 sm:space-y-6 px-4">
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-white backdrop-blur-md">
                <span className={`h-2 w-2 rounded-full ${isUpcoming ? 'bg-blue-400' : 'bg-emerald-400'} animate-pulse`} />
                {isUpcoming ? 'Planned Trip' : 'Completed Trip'}
              </div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-white backdrop-blur-md">
                {duration || "Travel Log"}
              </div>
            </div>

            <h1 className="text-4xl font-black tracking-tighter text-white sm:text-6xl lg:text-9xl drop-shadow-2xl">
              {log.title}
            </h1>

            {log.description && (
              <p className="mx-auto max-w-2xl text-base font-medium text-white/90 sm:text-xl lg:text-2xl drop-shadow-lg">
                {log.description}
              </p>
            )}
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 -mt-16 sm:-mt-32 relative z-10 pb-16 sm:pb-32">
        <div className="grid gap-6 sm:gap-8 lg:grid-cols-[2.5fr_1fr]">
          {/* Main Content Card */}
          <div className="glass rounded-2xl sm:rounded-[2.5rem] bg-white/90 p-5 sm:p-8 dark:bg-zinc-900/90 lg:p-14 shadow-2xl order-2 lg:order-1">
            <article className="prose prose-lg prose-zinc max-w-none dark:prose-invert">
                {log.content && <MDXRemote source={log.content} components={mdxComponents} />}
            </article>
          </div>


          {/* Sidebar */}
          <div className="space-y-6 order-1 lg:order-2">
            <div className="glass lg:sticky lg:top-24 space-y-8 rounded-2xl sm:rounded-[2rem] bg-white/90 p-6 sm:p-8 dark:bg-zinc-900/90 shadow-xl">
              <div>
                <h3 className="mb-6 text-xs font-bold uppercase tracking-[0.2em] text-zinc-400">
                  Itinerary Overview
                </h3>
                <div className="space-y-5">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-500 dark:bg-blue-900/20">
                      <Calendar className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-wider text-zinc-400">Start Date</p>
                      <p className="font-bold text-zinc-900 dark:text-zinc-100">
                        {log.start_date ? new Date(log.start_date).toLocaleDateString(undefined, { month: 'long', year: 'numeric' }) : 'TBD'}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-500 dark:bg-emerald-900/20">
                      <Clock className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-wider text-zinc-400">Duration</p>
                      <p className="font-bold text-zinc-900 dark:text-zinc-100">{duration || 'N/A'}</p>
                    </div>
                  </div>
                </div>
              </div>

              {log.locations_to_visit && log.locations_to_visit.length > 0 && (
                <div className="pt-8 border-t border-zinc-100 dark:border-zinc-800">
                  <h3 className="mb-6 text-xs font-bold uppercase tracking-[0.2em] text-zinc-400">
                    Pinned Locations
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {log.locations_to_visit.map((loc) => (
                      <div key={loc} className="flex items-center gap-2 rounded-xl bg-zinc-50 px-3 py-2 text-sm font-bold text-zinc-700 dark:bg-zinc-800/50 dark:text-zinc-300">
                        <MapPin className="h-3 w-3 text-emerald-500" />
                        {loc}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {log.transportation_rates && Object.keys(log.transportation_rates).length > 0 && (
                <div className="pt-8 border-t border-zinc-100 dark:border-zinc-800">
                  <h3 className="mb-6 text-xs font-bold uppercase tracking-[0.2em] text-zinc-400">
                    Est. Transport Rates
                  </h3>
                  <div className="space-y-3">
                    {Object.entries(log.transportation_rates).map(([mode, rate]) => (
                      <div key={mode} className="flex items-center justify-between rounded-2xl bg-zinc-50/50 p-4 transition-colors hover:bg-zinc-100/50 dark:bg-zinc-800/30 dark:hover:bg-zinc-800/50">
                        <div className="flex items-center gap-3">
                          <div className="text-zinc-400">
                            {getTransportIcon(mode)}
                          </div>
                          <span className="text-sm font-bold text-zinc-600 dark:text-zinc-400">
                            {mode.replace(/_/g, ' ')}
                          </span>
                        </div>
                        <span className="text-sm font-black text-zinc-900 dark:text-zinc-100">{rate}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="pt-8 border-t border-zinc-100 dark:border-zinc-800">
                <ShareButton 
                    title={log.title} 
                    url={`https://maninder.co.in/travel/${log.slug}`} 
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
