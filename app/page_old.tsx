import NewsletterForm, {
  type NewsletterState,
} from "./_components/newsletter-form";

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

  return { status: "success", message: "Thanks! You’re on the list." };
}

export default function Home() {
  const videoSrc = process.env.NEXT_PUBLIC_HERO_VIDEO_URL || "/hero.mp4";
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="mx-auto flex max-w-5xl flex-col gap-10 px-6 pb-24 pt-32 md:flex-row md:items-center">
        <div className="flex-1 space-y-6">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Hi, I&#39;m Maninder.
          </h1>
          <p className="max-w-xl text-lg text-zinc-600">
            I build iOS & Android apps, love exploring new places, and hit the
            road as a runner. This is my digital basecamp—projects, journeys,
            and things I&#39;m learning.
          </p>
          <div className="flex flex-wrap gap-3">
            <span className="rounded-full bg-zinc-900 px-4 py-1 text-sm font-medium text-white">
              Mobile Dev
            </span>
            <span className="rounded-full bg-zinc-100 px-4 py-1 text-sm font-medium text-zinc-700">
              Traveler
            </span>
            <span className="rounded-full bg-zinc-100 px-4 py-1 text-sm font-medium text-zinc-700">
              Runner
            </span>
          </div>
          <div className="flex gap-4 pt-2">
            <a
              href="https://github.com/maninder-mike"
              className="text-sm font-medium text-zinc-700 underline decoration-zinc-300 underline-offset-4 hover:text-black"
            >
              GitHub
            </a>
            <a
              href="https://x.com/maninder_mike"
              className="text-sm font-medium text-zinc-700 underline decoration-zinc-300 underline-offset-4 hover:text-black"
            >
              X / Twitter
            </a>
            <a
              href="https://www.linkedin.com/in/maninder-mike/"
              className="text-sm font-medium text-zinc-700 underline decoration-zinc-300 underline-offset-4 hover:text-black"
            >
              LinkedIn
            </a>
            <a
              href="https://instagram.com/"
              className="text-sm font-medium text-zinc-700 underline decoration-zinc-300 underline-offset-4 hover:text-black"
            >
              Instagram
            </a>
          </div>
        </div>
        <div className="flex-1">
          <div className="aspect-square w-full overflow-hidden rounded-2xl shadow-inner">
            <video
              className="h-full w-full object-cover"
              muted
              loop
              autoPlay
              playsInline
              preload="metadata"
              poster="/window.svg"
            >
              <source src={videoSrc} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="mx-auto max-w-5xl px-6 py-16">
        <div className="mb-10 flex items-end justify-between">
          <h2 className="text-2xl font-semibold tracking-tight">
            Selected Projects
          </h2>
          <a href="#" className="text-sm text-zinc-600 hover:text-zinc-900">
            View all
          </a>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              title: "Travel Tracker",
              stack: ["Swift", "MapKit"],
              description: "iOS app logging countries & cities visited.",
            },
            {
              title: "Run Metrics",
              stack: ["Kotlin", "Compose"],
              description: "Android app for weekly mileage & pace trends.",
            },
            {
              title: "CrossFit Timer",
              stack: ["React Native"],
              description: "Custom interval timer with workout presets.",
            },
          ].map((p) => (
            <div
              key={p.title}
              className="group rounded-xl border border-zinc-200 p-5 transition hover:border-zinc-300 hover:shadow-sm"
            >
              <h3 className="mb-2 text-lg font-medium group-hover:text-black">
                {p.title}
              </h3>
              <p className="mb-4 text-sm text-zinc-600">{p.description}</p>
              <div className="flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="rounded-md bg-zinc-100 px-2 py-1 text-xs text-zinc-700"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Travel Section */}
      <section id="travel" className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="mb-8 text-2xl font-semibold tracking-tight">
          Travel Log
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {[
            "Japan",
            "Iceland",
            "New Zealand",
            "Italy",
            "Canada",
            "South Africa",
          ].map((place) => (
            <div
              key={place}
              className="relative overflow-hidden rounded-xl border border-zinc-200 bg-zinc-50 p-4"
            >
              <div className="h-28 w-full rounded-md bg-linear-to-br from-zinc-200 to-zinc-100" />
              <p className="mt-3 text-sm font-medium text-zinc-700">{place}</p>
              <p className="text-xs text-zinc-500">
                Memories & photos coming soon.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Running Section */}
      <section id="running" className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="mb-4 text-2xl font-semibold tracking-tight">
          Running Snapshot
        </h2>
        <p className="mb-6 max-w-xl text-sm text-zinc-600">
          Consistency {">"} Perfection. I&#39;ll wire this up later with real
          stats—weekly mileage, longest run, average pace and upcoming race
          goal.
        </p>
        <div className="grid gap-6 sm:grid-cols-3">
          {[
            { label: "Weekly Mileage", value: "-- km" },
            { label: "Avg Pace", value: "-- /km" },
            { label: "Longest Run", value: "-- km" },
          ].map((card) => (
            <div
              key={card.label}
              className="rounded-xl border border-zinc-200 bg-white p-5"
            >
              <p className="text-xs uppercase tracking-wide text-zinc-500">
                {card.label}
              </p>
              <p className="mt-2 text-2xl font-semibold text-zinc-800">
                {card.value}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="mb-4 text-2xl font-semibold tracking-tight">About</h2>
        <div className="prose max-w-none text-zinc-700 prose-p:leading-relaxed">
          <p>
            I&#39;m a self-driven mobile developer focused on crafting fast,
            native experiences. I enjoy simplifying complex problems into easy
            interfaces.
          </p>
          <p>
            Outside code I chase sunrises, train for distance runs, and collect
            stories from new places. Travel keeps my perspective fresh and
            running keeps my mind clear.
          </p>
          <p>
            This site will evolve—I&#39;ll add live run data, travel photo sets,
            and a proper blog. For collaboration or ideas, reach me on any
            platform above.
          </p>
        </div>
      </section>

      {/* Contact placeholder */}
      <section id="contact" className="mx-auto max-w-5xl px-6 pb-24">
        <h2 className="mb-4 text-2xl font-semibold tracking-tight">Contact</h2>
        <p className="max-w-xl text-sm text-zinc-600">
          Email & form coming soon. I&#39;ll integrate Resend + Supabase here
          for messaging and newsletter features.
        </p>
      </section>

      {/* Modern footer below */}
      <footer className="mt-20 bg-zinc-50/80">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <div className="grid gap-10 md:grid-cols-4">
            <div className="space-y-3">
              <h3 className="text-sm font-semibold text-zinc-900">Maninder</h3>
              <p className="text-sm leading-6 text-zinc-600">
                iOS/Android dev. Traveler. Runner. Crafting fast apps and
                collecting miles.
              </p>
            </div>
            <div>
              <h4 className="mb-3 text-xs font-semibold uppercase tracking-wide text-zinc-500">
                Navigation
              </h4>
              <ul className="space-y-2 text-sm text-zinc-700">
                <li>
                  <a className="hover:text-black" href="#projects">
                    Projects
                  </a>
                </li>
                <li>
                  <a className="hover:text-black" href="#travel">
                    Travel
                  </a>
                </li>
                <li>
                  <a className="hover:text-black" href="#running">
                    Running
                  </a>
                </li>
                <li>
                  <a className="hover:text-black" href="#about">
                    About
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-3 text-xs font-semibold uppercase tracking-wide text-zinc-500">
                Social
              </h4>
              <ul className="space-y-2 text-sm text-zinc-700">
                <li>
                  <a
                    className="hover:text-black"
                    href="https://github.com/maninder"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-black"
                    href="https://x.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    X / Twitter
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-black"
                    href="https://www.linkedin.com/in/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-black"
                    href="https://instagram.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-3 text-xs font-semibold uppercase tracking-wide text-zinc-500">
                Newsletter
              </h4>
              <p className="mb-3 text-sm text-zinc-600">
                Get occasional updates about new projects and travel posts.
              </p>
              <NewsletterForm action={subscribeAction} />
            </div>
          </div>
          <div className="mt-10 border-t border-zinc-200 pt-6 text-xs text-zinc-500">
            <p>© {new Date().getFullYear()} Maninder. Built in Canada 🇨🇦</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
