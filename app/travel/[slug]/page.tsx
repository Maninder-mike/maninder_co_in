import Link from "next/link";
import { travelLogs } from "@/lib/data/travel-logs";
import { notFound } from "next/navigation";

export default async function TravelPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const log = travelLogs.find(l => l.slug === slug);

  if (!log) {
    notFound();
  }

  // Calculate trip duration
  let duration = "";
  if (log.start_date && log.end_date) {
    const start = new Date(log.start_date);
    const end = new Date(log.end_date);
    const diffTime = Math.abs(end.getTime() - start.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1; // Inclusive
    duration = `${diffDays} Days`;
  }

  return (
    <div className="min-h-dvh bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100">
      {/* Hero Header */}
      <div className="relative h-[60vh] w-full overflow-hidden">
        <div className={`absolute inset-0 ${log.cover_image || 'bg-zinc-100 dark:bg-zinc-800'}`} />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-50 via-black/40 to-black/60 dark:from-zinc-950" />

        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
          <div className="animate-slide-up space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium text-white backdrop-blur-md">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              {duration ? `${duration} Trip` : "Travel Log"}
            </div>

            <h1 className="text-6xl font-black tracking-tighter text-white sm:text-8xl drop-shadow-2xl">
              {log.title}
            </h1>

            {log.description && (
              <p className="mx-auto max-w-2xl text-xl font-medium text-white/90 sm:text-2xl drop-shadow-lg">
                {log.description}
              </p>
            )}
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-6 -mt-32 relative z-10">
        <div className="mb-8">
          <Link
            href="/#travel"
            className="group inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-md transition hover:bg-white/20"
          >
            <span>←</span> Back to Map
          </Link>
        </div>

        <div className="grid gap-8 lg:grid-cols-[2fr_1fr]">
          {/* Main Content Card */}
          <div className="glass rounded-3xl bg-white/80 p-8 dark:bg-zinc-900/80 sm:p-12">
            <div className="prose prose-lg prose-zinc max-w-none dark:prose-invert">
              {log.content?.split('\n').map((line, i) => {
                if (line.startsWith('## ')) {
                  return (
                    <div key={i} className="group flex items-center gap-4 mt-12 mb-6">
                      <div className="h-px flex-1 bg-zinc-200 dark:bg-zinc-800" />
                      <h2 className="m-0 text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
                        {line.replace('## ', '')}
                      </h2>
                      <div className="h-px flex-1 bg-zinc-200 dark:bg-zinc-800" />
                    </div>
                  );
                }
                if (line.trim() === '') return <br key={i} />;

                const parts = line.split(/(\*\*.*?\*\*)/g);
                return (
                  <p key={i} className="mb-4 leading-relaxed text-zinc-600 dark:text-zinc-400">
                    {parts.map((part, j) => {
                      if (part.startsWith('**') && part.endsWith('**')) {
                        return <strong key={j} className="font-semibold text-zinc-900 dark:text-zinc-100">{part.slice(2, -2)}</strong>;
                      }
                      return part;
                    })}
                  </p>
                );
              })}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Trip Details Card */}
            <div className="glass sticky top-24 space-y-6 rounded-3xl bg-white/80 p-6 dark:bg-zinc-900/80">
              <div>
                <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-zinc-500">
                  Trip Details
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-100 text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400">
                      📅
                    </div>
                    <div>
                      <p className="text-xs font-medium text-zinc-500">Date</p>
                      <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                        {log.start_date ? new Date(log.start_date).toLocaleDateString(undefined, { month: 'short', year: 'numeric' }) : 'TBD'}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-100 text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400">
                      ⏱️
                    </div>
                    <div>
                      <p className="text-xs font-medium text-zinc-500">Duration</p>
                      <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                        {duration || 'N/A'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {log.locations_to_visit && log.locations_to_visit.length > 0 && (
                <div className="pt-6 border-t border-zinc-200 dark:border-zinc-800">
                  <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-zinc-500">
                    Highlights
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {log.locations_to_visit.map((loc) => (
                      <span key={loc} className="inline-flex items-center rounded-md border border-zinc-200 bg-zinc-50 px-2 py-1 text-xs font-medium text-zinc-600 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
                        {loc}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {log.transportation_rates && Object.keys(log.transportation_rates).length > 0 && (
                <div className="pt-6 border-t border-zinc-200 dark:border-zinc-800">
                  <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-zinc-500">
                    Typical Costs
                  </h3>
                  <div className="space-y-2">
                    {Object.entries(log.transportation_rates).map(([mode, rate]) => (
                      <div key={mode} className="flex items-center justify-between rounded-lg bg-zinc-50 p-2 text-sm dark:bg-zinc-800/50">
                        <span className="capitalize text-zinc-600 dark:text-zinc-400">
                          {mode.replace(/_/g, ' ')}
                        </span>
                        <span className="font-mono font-semibold text-zinc-900 dark:text-zinc-100">{rate}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
