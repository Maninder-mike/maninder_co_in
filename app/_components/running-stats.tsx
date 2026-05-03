import { Activity, MapPin, Timer, Medal } from "lucide-react";
import { runningData } from "@/lib/data/running";

export function RunningStats() {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-50/50 to-transparent dark:via-blue-900/10"></div>
      
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-12 md:flex md:items-end md:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-4xl">
              Life on the Run
            </h2>
            <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
              When I'm not writing code, I'm usually pounding the pavement. Here's a snapshot of my current training block.
            </p>
          </div>
          
          <div className="mt-6 flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm font-medium text-zinc-900 shadow-sm dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-100 md:mt-0">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
            </span>
            Training for: {runningData.nextRace}
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard
            icon={<Activity className="h-5 w-5 text-blue-500" />}
            label="Weekly Distance"
            value={runningData.weeklyDistance}
            trend="Current Week"
          />
          <StatCard
            icon={<MapPin className="h-5 w-5 text-emerald-500" />}
            label="Total Distance"
            value={runningData.totalDistance}
            trend="Year to Date"
          />
          <StatCard
            icon={<Timer className="h-5 w-5 text-amber-500" />}
            label="Half Marathon PB"
            value={runningData.pbHalf}
            trend="Personal Best"
          />
          <StatCard
            icon={<Medal className="h-5 w-5 text-violet-500" />}
            label="10K PB"
            value={runningData.pb10k}
            trend="Personal Best"
          />
        </div>
      </div>
    </section>
  );
}

function StatCard({ icon, label, value, trend }: { icon: React.ReactNode; label: string; value: string; trend: string }) {
  return (
    <div className="group relative overflow-hidden rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm transition-all hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900">
      <div className="absolute inset-0 bg-gradient-to-br from-transparent to-zinc-50 opacity-0 transition-opacity group-hover:opacity-100 dark:to-zinc-800/50"></div>
      
      <div className="relative">
        <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-50 dark:bg-zinc-800">
          {icon}
        </div>
        
        <div className="space-y-1">
          <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">{label}</p>
          <p className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">{value}</p>
        </div>
        
        <div className="mt-4 flex items-center text-xs font-medium text-zinc-500 dark:text-zinc-400">
          {trend}
        </div>
      </div>
    </div>
  );
}
