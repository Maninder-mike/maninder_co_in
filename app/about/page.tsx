import { Metadata } from "next";
import { SiteNav } from "../_components/site-nav";
import { SiteFooter } from "../_components/site-footer";
import { ScrollReveal } from "../_components/scroll-reveal";
import { CursorGlow } from "../_components/cursor-glow";

export const metadata: Metadata = {
  title: "About | Maninder",
  description: "Learn more about Maninder, an app developer, traveler, and runner.",
};

export default function AboutPage() {
    return (
        <div className="min-h-dvh bg-zinc-50 text-zinc-900 selection:bg-zinc-900 selection:text-white dark:bg-black dark:text-zinc-100 dark:selection:bg-blue-500/30 dark:selection:text-blue-200">
            <CursorGlow />

            {/* Background Grid */}
            <div className="fixed inset-0 z-0 pointer-events-none bg-grid-pattern opacity-50 dark:opacity-[0.15]"></div>

            {/* Ambient Orbs (Premium Dark Mode Effect) */}
            <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden opacity-0 dark:opacity-100 transition-opacity duration-1000 hidden md:block">
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-600/20 blur-[120px] mix-blend-screen animate-blob" />
                <div className="absolute top-[40%] right-[-10%] w-[50%] h-[50%] rounded-full bg-purple-600/20 blur-[120px] mix-blend-screen animate-blob animation-delay-2000" />
                <div className="absolute bottom-[-20%] left-[20%] w-[50%] h-[50%] rounded-full bg-emerald-600/10 blur-[120px] mix-blend-screen animate-blob animation-delay-4000" />
            </div>

            {/* Navigation */}
            <SiteNav variant="default" />

            <main id="main-content" className="relative z-10 mx-auto max-w-5xl px-6 py-32">
                <div className="grid gap-12 lg:grid-cols-3 lg:items-start">
                    {/* Left Column: Heading and Bio */}
                    <div className="lg:col-span-2 space-y-12">
                        <ScrollReveal>
                            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl lg:text-6xl">
                                More than <br />
                                <span className="text-gradient-animated">just code.</span>
                            </h1>
                        </ScrollReveal>

                        <ScrollReveal delay={100}>
                            <div className="space-y-6 text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed font-medium">
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
                        </ScrollReveal>

                        {/* Currently Section */}
                        <ScrollReveal delay={200}>
                            <div>
                                <h2 className="text-2xl font-bold tracking-tight mb-6">Currently</h2>
                                <div className="glass-premium card-glow-border rounded-[2rem] p-8">
                                    <ul className="space-y-6 text-zinc-600 dark:text-zinc-400">
                                        <li className="flex flex-col sm:flex-row sm:gap-4">
                                            <span className="font-bold text-zinc-950 dark:text-zinc-100 shrink-0 w-24">Building:</span>
                                            <span className="font-medium">Milow & Last Mile Tracker</span>
                                        </li>
                                        <li className="flex flex-col sm:flex-row sm:gap-4">
                                            <span className="font-bold text-zinc-950 dark:text-zinc-100 shrink-0 w-24">Reading:</span>
                                            <span className="font-medium">Technical documentation and sci-fi novels</span>
                                        </li>
                                        <li className="flex flex-col sm:flex-row sm:gap-4">
                                            <span className="font-bold text-zinc-950 dark:text-zinc-100 shrink-0 w-24">Training:</span>
                                            <span className="font-medium">For the next big race</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>

                    {/* Right Column: Connect sidebar */}
                    <div className="lg:sticky lg:top-32 space-y-8">
                        <ScrollReveal delay={150}>
                            <div className="glass-premium rounded-[2rem] p-8">
                                <h3 className="mb-6 font-bold tracking-tight text-lg">Connect</h3>
                                <ul className="space-y-4">
                                    <li>
                                        <a 
                                            href="https://x.com/maninder_mike" 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="group flex items-center justify-between text-base font-semibold text-zinc-600 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors py-2 border-b border-zinc-100/50 dark:border-zinc-800/50"
                                        >
                                            <span>Twitter / X</span>
                                            <span className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a 
                                            href="https://github.com/maninder-mike" 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="group flex items-center justify-between text-base font-semibold text-zinc-600 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors py-2 border-b border-zinc-100/50 dark:border-zinc-800/50"
                                        >
                                            <span>GitHub</span>
                                            <span className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a 
                                            href="mailto:info@maninder.co.in" 
                                            className="group flex items-center justify-between text-base font-semibold text-zinc-600 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors py-2"
                                        >
                                            <span>Email</span>
                                            <span className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>

                {/* Skills & Technologies Bento Grid */}
                <ScrollReveal delay={300}>
                    <div className="mt-24">
                        <h2 className="text-2xl font-bold tracking-tight mb-8">Skills & Technologies</h2>
                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {/* Mobile Development Card */}
                            <div className="glass-premium card-glow-border rounded-[2rem] p-8 relative overflow-hidden group">
                                <h3 className="text-lg font-bold mb-4 text-zinc-950 dark:text-zinc-100 flex items-center gap-2">
                                    <span className="h-2 w-2 rounded-full bg-blue-500" />
                                    Mobile Development
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {["Flutter", "Swift", "Kotlin", "React Native", "Android SDK", "iOS SDK"].map((skill) => (
                                        <span key={skill} className="rounded-full bg-zinc-100 dark:bg-zinc-800/60 px-3 py-1.5 text-xs font-bold text-zinc-700 dark:text-zinc-300 border border-zinc-200/50 dark:border-zinc-700/30">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Backend & Cloud Card */}
                            <div className="glass-premium card-glow-border rounded-[2rem] p-8 relative overflow-hidden group">
                                <h3 className="text-lg font-bold mb-4 text-zinc-950 dark:text-zinc-100 flex items-center gap-2">
                                    <span className="h-2 w-2 rounded-full bg-emerald-500" />
                                    Backend & Database
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {["Supabase", "Firebase", "PostgreSQL", "Node.js", "REST APIs", "GraphQL"].map((skill) => (
                                        <span key={skill} className="rounded-full bg-zinc-100 dark:bg-zinc-800/60 px-3 py-1.5 text-xs font-bold text-zinc-700 dark:text-zinc-300 border border-zinc-200/50 dark:border-zinc-700/30">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Web & Languages Card */}
                            <div className="glass-premium card-glow-border rounded-[2rem] p-8 relative overflow-hidden group sm:col-span-2 lg:col-span-1">
                                <h3 className="text-lg font-bold mb-4 text-zinc-950 dark:text-zinc-100 flex items-center gap-2">
                                    <span className="h-2 w-2 rounded-full bg-violet-500" />
                                    Web & Frontend
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {["TypeScript", "React", "Next.js", "HTML5/CSS3", "Tailwind CSS", "Git"].map((skill) => (
                                        <span key={skill} className="rounded-full bg-zinc-100 dark:bg-zinc-800/60 px-3 py-1.5 text-xs font-bold text-zinc-700 dark:text-zinc-300 border border-zinc-200/50 dark:border-zinc-700/30">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>

                {/* Easter Egg Hints */}
                <ScrollReveal delay={400}>
                    <div className="mt-24 rounded-[2rem] border border-dashed border-zinc-300 bg-zinc-100/50 p-8 dark:border-zinc-800 dark:bg-zinc-900/30">
                        <h3 className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-500">🥚 Secrets</h3>
                        <p className="mb-6 text-sm text-zinc-500 dark:text-zinc-400 font-medium">This site has hidden easter eggs. Here are some hints&hellip;</p>
                        <div className="grid gap-4 sm:grid-cols-2">
                            <div className="rounded-2xl bg-white/80 p-6 dark:bg-zinc-950/80 border border-zinc-100 dark:border-zinc-900">
                                <p className="text-sm font-bold text-zinc-800 dark:text-zinc-200">🎮 The Classic Code</p>
                                <p className="mt-2 text-xs text-zinc-500 dark:text-zinc-400 font-medium leading-relaxed">
                                    Gamers from the &apos;80s know this one. Up, up, down, down&hellip; you know the rest.
                                </p>
                            </div>
                            <div className="rounded-2xl bg-white/80 p-6 dark:bg-zinc-950/80 border border-zinc-100 dark:border-zinc-900">
                                <p className="text-sm font-bold text-zinc-800 dark:text-zinc-200">🖱️ Click Happy</p>
                                <p className="mt-2 text-xs text-zinc-500 dark:text-zinc-400 font-medium leading-relaxed">
                                    Ever clicked a logo more times than you should? Try it on mine. Five times fast.
                                </p>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>
            </main>

            <SiteFooter variant="default" />
        </div>
    );
}

