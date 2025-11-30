import NewsletterForm, {
  type NewsletterState,
} from "./_components/newsletter-form";
import { LogoAnimator } from "./_components/logo-animator";
import { SiteCustomizer } from "./_components/site-customizer";
import { getProjects, getPersonalBests, getTravelLogs } from "@/lib/supabase/queries";

async function subscribeAction(
  _prev: NewsletterState,
  formData: FormData
): Promise<NewsletterState> {
  "use server";

  const email = formData.get("email")?.toString().trim().toLowerCase();

  if (!email) return { status: "error", message: "Email is required" };

  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!emailOk) return { status: "error", message: "Enter a valid email" };

  if (
    !process.env.SUPABASE_SERVICE_ROLE_KEY ||
    !process.env.NEXT_PUBLIC_SUPABASE_URL
  ) {
    return {
      status: "error",
      message:
        "Missing Supabase env. Set SUPABASE_SERVICE_ROLE_KEY & NEXT_PUBLIC_SUPABASE_URL.",
    };
  }

  try {
    const { supabaseServer } = await import("@/lib/supabase/server");

    const location = formData.get("location")?.toString().slice(0, 120) || null;

    const { error } = await supabaseServer
      .from("newsletter_subscribers")
      .upsert(
        { email, location: location || undefined },
        { onConflict: "email" }
      );

    if (error) {
      const code = (error as { code?: string }).code;
      const msg = error.message || "";

      if (
        code === "42P01" ||
        msg.toLowerCase().includes("newsletter_subscribers")
      ) {
        return {
          status: "error",
          message:
            "Table newsletter_subscribers not found. Run the SQL in supabase-migration.sql on your Supabase project, then retry.",
        };
      }
      return { status: "error", message: `Supabase: ${msg}` };
    }
  } catch (e) {
    console.error("Subscribe failed", e);
    return {
      status: "error",
      message: "Could not subscribe. Try again later.",
    };
  }

  return {
    status: "success",
    message: "Thanks! You're subscribed to updates.",
  };
}

export default async function Home() {
  const projects = await getProjects(true);
  const travelLogs = await getTravelLogs();

  return (
    <div className="min-h-dvh bg-zinc-50 text-zinc-900 selection:bg-zinc-900 selection:text-white dark:bg-zinc-950 dark:text-zinc-100 dark:selection:bg-zinc-100 dark:selection:text-zinc-900">
      {/* Background Grid */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-grid-pattern opacity-50"></div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-200 bg-white/80 backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-950/80">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <LogoAnimator />
          <div className="hidden gap-6 text-sm font-medium sm:flex">
            <a href="#work" className="hover:text-zinc-600 dark:hover:text-zinc-300">Work</a>
            <a href="#travel" className="hover:text-zinc-600 dark:hover:text-zinc-300">Travel</a>
            <a href="/about" className="hover:text-zinc-600 dark:hover:text-zinc-300">About</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 mx-auto flex min-h-[90vh] max-w-6xl flex-col justify-center px-6 pt-20">
        <div className="max-w-3xl space-y-8">


          <h1 className="text-6xl font-bold tracking-tighter sm:text-8xl">
            Building digital <br />
            <span className="text-gradient">
              experiences.
            </span>
          </h1>

          <p className="max-w-xl text-xl leading-relaxed text-zinc-600 dark:text-zinc-400">
            I&apos;m Maninder, a mobile developer and traveler. I craft fast, native applications and explore the world one run at a time.
          </p>

          <div className="flex flex-wrap gap-4">

          </div>
        </div>
      </section>

      {/* Scrolling Marquee */}
      <div className="relative z-10 w-full overflow-hidden border-y border-zinc-200 bg-white py-4 dark:border-zinc-800 dark:bg-zinc-950">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...Array(10)].map((_, i) => (
            <span key={i} className="mx-8 text-4xl font-bold uppercase tracking-widest text-zinc-200 dark:text-zinc-800">
              Developer • Traveler • Runner •
            </span>
          ))}
        </div>
      </div>

      {/* Selected Work (Bento Grid) */}
      <section id="work" className="relative z-10 mx-auto max-w-6xl px-6 py-32">
        <h2 className="mb-16 text-4xl font-bold tracking-tighter sm:text-5xl">Selected Work</h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <div
              key={project.id}
              className={`glass group relative overflow-hidden rounded-3xl p-8 transition-all hover:border-zinc-300 hover:shadow-xl dark:hover:border-zinc-700 ${i === 0 ? "md:col-span-2 md:row-span-2" : ""
                }`}
            >
              <div className="flex h-full flex-col justify-between space-y-8">
                <div>
                  <div className="mb-4 flex flex-wrap gap-2">
                    {project.stack?.map((tech) => (
                      <span key={tech} className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs font-medium text-zinc-600 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-2xl font-bold group-hover:underline">{project.title}</h3>
                  <p className="mt-2 text-zinc-600 dark:text-zinc-400">{project.description}</p>
                </div>

                <div className="flex items-center gap-4">
                  {project.link && (
                    <a
                      href={project.link.startsWith('http') ? project.link : `https://${project.link}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium underline underline-offset-4"
                    >
                      View Live
                    </a>
                  )}
                  {project.github_url && (
                    <a
                      href={project.github_url.startsWith('http') ? project.github_url : `https://${project.github_url}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Travel Section */}
      <section id="travel" className="relative z-10 mx-auto max-w-6xl px-6 py-32">
        <div className="mb-16 flex items-end justify-between">
          <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl">Travel Log</h2>
          <p className="hidden max-w-xs text-right text-sm text-zinc-500 sm:block">
            Collecting stories and miles from around the globe.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {travelLogs.map((place) => (
            <a
              key={place.slug}
              href={`/travel/${place.slug}`}
              className="group relative aspect-[4/5] overflow-hidden rounded-2xl bg-zinc-100 dark:bg-zinc-900"
            >
              <div className={`absolute inset-0 ${place.cover_image} opacity-80 transition-all duration-500 group-hover:scale-110 group-hover:opacity-100`} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-6 flex flex-col justify-end">
                <h3 className="text-xl font-bold text-white">{place.title}</h3>
                <span className="mt-2 inline-block translate-y-4 text-xs font-medium text-white/80 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  View Gallery →
                </span>
              </div>
            </a>
          ))}
          {travelLogs.length === 0 && (
            <div className="col-span-full py-12 text-center text-zinc-500 dark:text-zinc-400">
              No travel logs yet. Check back soon!
            </div>
          )}
        </div>
      </section>



      {/* Running Section (Achievements) */}
      <section id="running" className="relative z-10 mx-auto max-w-6xl px-6 py-32">
        <div className="mb-16 flex items-end justify-between">
          <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl">
            Personal Bests
          </h2>
          <p className="hidden max-w-xs text-right text-sm text-zinc-500 sm:block">
            All-time records from my training logs.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {(await getPersonalBests()).map((pb) => (
            <div
              key={pb.type}
              className="glass group relative overflow-hidden rounded-3xl p-8 transition-all hover:-translate-y-1 hover:shadow-2xl"
            >
              <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-gradient-to-br from-zinc-100 to-zinc-50 opacity-50 blur-2xl transition-opacity group-hover:opacity-100 dark:from-zinc-800 dark:to-zinc-900" />

              <div className="relative z-10">
                <p className="text-xs font-bold uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
                  {pb.distance_label}
                </p>
                <h3
                  className="mt-4 text-4xl font-black tracking-tighter"
                  style={{ color: "var(--color-accent)" }}
                >
                  {pb.time_str}
                </h3>
                <div className="mt-4 flex items-center gap-2">
                  <span className="inline-flex items-center rounded-full border border-zinc-200 bg-white px-2 py-1 text-[10px] font-medium text-zinc-600 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
                    {pb.date_str}
                  </span>
                  {pb.type === "42k" && (
                    <span className="inline-flex items-center rounded-full border border-yellow-200 bg-yellow-50 px-2 py-1 text-[10px] font-medium text-yellow-700 dark:border-yellow-900/50 dark:bg-yellow-900/20 dark:text-yellow-400">
                      ★ Marathoner
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
          {(await getPersonalBests()).length === 0 && (
            <div className="col-span-full py-12 text-center text-zinc-500 dark:text-zinc-400">
              No personal bests logged yet.
            </div>
          )}
        </div>
      </section>

      {/* Footer / Contact */}
      <footer className="relative z-10 border-t border-zinc-200 bg-white py-24 dark:border-zinc-800 dark:bg-zinc-950">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Stay in the loop.</h2>
              <p className="mt-4 max-w-md text-zinc-600 dark:text-zinc-400">
                Join my newsletter for occasional updates on new projects, travel stories, and tech insights. No spam, ever.
              </p>
              <div className="mt-8 max-w-md">
                <NewsletterForm action={subscribeAction} />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-8 lg:pl-20">
              <div>
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-zinc-500">Socials</h3>
                <ul className="space-y-3 text-sm">
                  <li><a href="https://x.com/maninder_mike" className="hover:underline">Twitter / X</a></li>
                  <li><a href="https://github.com/maninder-mike" className="hover:underline">GitHub</a></li>
                  <li><a href="https://linkedin.com/in/maninder-mike" className="hover:underline">LinkedIn</a></li>
                  <li><a href="https://instagram.com" className="hover:underline">Instagram</a></li>
                </ul>
              </div>
              <div>
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-zinc-500">Site</h3>
                <ul className="space-y-3 text-sm">
                  <li><a href="#work" className="hover:underline">Work</a></li>
                  <li><a href="#travel" className="hover:underline">Travel</a></li>
                  <li><a href="/about" className="hover:underline">About</a></li>
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
