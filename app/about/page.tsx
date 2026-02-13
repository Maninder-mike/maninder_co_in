import Link from "next/link";

export default function AboutPage() {
    return (
        <div className="min-h-dvh bg-zinc-50 text-zinc-900 selection:bg-zinc-900 selection:text-white dark:bg-zinc-950 dark:text-zinc-100 dark:selection:bg-zinc-100 dark:selection:text-zinc-900">
            {/* Navigation */}
            <nav className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-200 bg-white/80 backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-950/80">
                <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
                    <Link href="/" className="text-xl font-bold tracking-tighter">
                        Maninder
                    </Link>
                    <div className="hidden gap-6 text-sm font-medium sm:flex">
                        <Link href="/#work" className="hover:text-zinc-600 dark:hover:text-zinc-300">Work</Link>
                        <Link href="/#travel" className="hover:text-zinc-600 dark:hover:text-zinc-300">Travel</Link>
                        <Link href="/about" className="text-zinc-900 dark:text-zinc-100">About</Link>
                    </div>
                </div>
            </nav>

            <main className="mx-auto max-w-4xl px-6 py-32">
                <div className="grid gap-16 lg:grid-cols-2 lg:items-start">
                    <div className="space-y-8">
                        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
                            More than just code.
                        </h1>
                        <div className="space-y-6 text-lg text-zinc-600 dark:text-zinc-400">
                            <p>
                                I&apos;m Maninder, a software engineer with a passion for building intuitive, high-performance mobile and web applications. My journey in tech is driven by a curiosity to understand how things work and a desire to make them better.
                            </p>
                            <p>
                                When I&apos;m not debugging complex systems, you can find me pounding the pavement training for my next marathon or exploring new corners of the globe. I believe in the balance of mental agility and physical endurance.
                            </p>
                            <p>
                                Whether it&apos;s shaving seconds off a 5K time or milliseconds off a page load, I&apos;m always chasing that next personal best.
                            </p>
                        </div>

                        <div className="pt-8">
                            <h2 className="mb-6 text-2xl font-bold tracking-tight">Experience</h2>
                            <div className="space-y-8 border-l-2 border-zinc-200 pl-6 dark:border-zinc-800">
                                <div className="relative">
                                    <span className="absolute -left-[29px] top-1 h-3 w-3 rounded-full border-2 border-white bg-zinc-300 dark:border-zinc-950 dark:bg-zinc-700" />
                                    <h3 className="font-semibold">Senior Mobile Engineer</h3>
                                    <p className="text-sm text-zinc-500">Tech Company Inc. • 2022 - Present</p>
                                    <p className="mt-2 text-zinc-600 dark:text-zinc-400">Leading the mobile team in building cross-platform applications using React Native and native iOS/Android technologies.</p>
                                </div>
                                <div className="relative">
                                    <span className="absolute -left-[29px] top-1 h-3 w-3 rounded-full border-2 border-white bg-zinc-300 dark:border-zinc-950 dark:bg-zinc-700" />
                                    <h3 className="font-semibold">Software Developer</h3>
                                    <p className="text-sm text-zinc-500">Startup Co. • 2019 - 2022</p>
                                    <p className="mt-2 text-zinc-600 dark:text-zinc-400">Full stack development with a focus on frontend performance and user experience.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="sticky top-32 space-y-8">
                        <div className="relative aspect-square rotate-3 overflow-hidden rounded-3xl border border-zinc-200 bg-zinc-100 shadow-2xl transition-transform hover:rotate-0 dark:border-zinc-800 dark:bg-zinc-900">
                            <div className="absolute inset-0 bg-gradient-to-br from-zinc-100 to-zinc-200 dark:from-zinc-800 dark:to-zinc-900" />
                            <video
                                src="/me.mp4"
                                autoPlay
                                muted
                                loop
                                playsInline
                                className="absolute inset-0 h-full w-full object-cover"
                            />
                        </div>

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
            </main>
        </div>
    );
}
