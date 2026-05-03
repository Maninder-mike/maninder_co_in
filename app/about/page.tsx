import { Metadata } from "next";
import { SiteNav } from "../_components/site-nav";
import { SiteFooter } from "../_components/site-footer";

export const metadata: Metadata = {
  title: "About | Maninder",
  description: "Learn more about Maninder, an app developer, traveler, and runner.",
};

export default function AboutPage() {
    return (
        <div className="min-h-dvh bg-zinc-50 text-zinc-900 selection:bg-zinc-900 selection:text-white dark:bg-zinc-950 dark:text-zinc-100 dark:selection:bg-zinc-100 dark:selection:text-zinc-900">
            {/* Navigation */}
            <SiteNav variant="default" />

            <main id="main-content" className="mx-auto max-w-4xl px-6 py-32">
                <div className="grid gap-16 lg:grid-cols-2 lg:items-start">
                    <div className="space-y-16">
                        <div className="space-y-8">
                            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl lg:text-5xl">
                                More than just code.
                            </h1>
                            <div className="space-y-6 text-lg text-zinc-600 dark:text-zinc-400">
                                <p>
                                    I&apos;m Maninder, an app developer with a passion for building fast, intuitive, and easy-to-use digital experiences. My journey in tech is driven by a curiosity to understand how things work and a desire to make them better.
                                </p>
                                <p>
                                    When I&apos;m not solving tricky problems, you can find me pounding the pavement training for my next marathon or exploring new corners of the globe. I believe in the balance of mental agility and physical endurance.
                                </p>
                                <p>
                                    Whether it&apos;s shaving seconds off a 5K time or making an app feel instantly responsive, I&apos;m always chasing that next personal best.
                                </p>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold tracking-tight mb-6">Currently</h2>
                            <div className="rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900 shadow-sm">
                                <ul className="space-y-4 text-zinc-600 dark:text-zinc-400">
                                    <li className="flex gap-4">
                                        <span className="font-semibold text-zinc-900 dark:text-zinc-100 min-w-[100px]">Building:</span>
                                        <span>Milow & Last Mile Tracker</span>
                                    </li>
                                    <li className="flex gap-4">
                                        <span className="font-semibold text-zinc-900 dark:text-zinc-100 min-w-[100px]">Reading:</span>
                                        <span>Technical documentation and sci-fi novels</span>
                                    </li>
                                    <li className="flex gap-4">
                                        <span className="font-semibold text-zinc-900 dark:text-zinc-100 min-w-[100px]">Training:</span>
                                        <span>For the next big race</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="lg:sticky lg:top-32 space-y-8">


                        <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6 dark:border-zinc-800 dark:bg-zinc-900/50">
                            <h3 className="mb-4 font-semibold">Connect</h3>
                            <ul className="space-y-3 text-sm text-zinc-600 dark:text-zinc-400">
                                <li><a href="https://x.com/maninder_mike" className="flex items-center hover:text-zinc-900 dark:hover:text-zinc-100">Twitter / X ↗</a></li>
                                <li><a href="https://github.com/maninder-mike" className="flex items-center hover:text-zinc-900 dark:hover:text-zinc-100">GitHub ↗</a></li>
                                <li><a href="https://linkedin.com/in/maninder-mike" className="flex items-center hover:text-zinc-900 dark:hover:text-zinc-100">LinkedIn ↗</a></li>
                                <li><a href="mailto:info@maninder.co.in" className="flex items-center hover:text-zinc-900 dark:hover:text-zinc-100">Email ↗</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Easter Egg Hints */}
                <div className="mt-24 rounded-2xl border border-dashed border-zinc-300 bg-zinc-100/50 p-8 dark:border-zinc-700 dark:bg-zinc-900/30">
                    <h3 className="mb-1 text-xs font-bold uppercase tracking-[0.2em] text-zinc-400">🥚 Secrets</h3>
                    <p className="mb-6 text-sm text-zinc-500 dark:text-zinc-500">This site has hidden easter eggs. Here are some hints&hellip;</p>
                    <div className="grid gap-4 sm:grid-cols-2">
                        <div className="rounded-xl bg-white/80 p-4 dark:bg-zinc-800/50">
                            <p className="text-sm font-semibold text-zinc-700 dark:text-zinc-300">🎮 The Classic Code</p>
                            <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
                                Gamers from the &apos;80s know this one. Up, up, down, down&hellip; you know the rest.
                            </p>
                        </div>
                        <div className="rounded-xl bg-white/80 p-4 dark:bg-zinc-800/50">
                            <p className="text-sm font-semibold text-zinc-700 dark:text-zinc-300">🖱️ Click Happy</p>
                            <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
                                Ever clicked a logo more times than you should? Try it on mine. Five times fast.
                            </p>
                        </div>
                    </div>
                </div>
            </main>

            <SiteFooter variant="default" />
        </div>
    );
}
