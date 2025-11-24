"use client";

import { useEffect, useState } from "react";

export function SiteCustomizer() {
  const [theme, setTheme] = useState<"light" | "dark" | "system">("system");
  const [accent, setAccent] = useState<string>("default");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
    const storedTheme = localStorage.getItem("theme") as
      | "light"
      | "dark"
      | "system"
      | null;
    if (storedTheme) setTheme(storedTheme);

    const storedAccent = localStorage.getItem("accent");
    if (storedAccent) setAccent(storedAccent);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    const applyTheme = () => {
      if (theme === "system") {
        const systemDark = window.matchMedia(
          "(prefers-color-scheme: dark)"
        ).matches;
        root.classList.toggle("dark", systemDark);
      } else {
        root.classList.toggle("dark", theme === "dark");
      }
    };

    applyTheme();

    if (theme === "system") {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      const handler = () => applyTheme();
      mediaQuery.addEventListener("change", handler);
      return () => mediaQuery.removeEventListener("change", handler);
    }
  }, [theme]);

  useEffect(() => {
    const root = document.documentElement;
    if (accent === "default") {
      root.style.removeProperty("--color-accent");
      root.style.removeProperty("--color-accent-foreground");
    } else {
      root.style.setProperty("--color-accent", accent);
      root.style.setProperty("--color-accent-foreground", "#ffffff");
    }
  }, [accent]);

  const updateTheme = (val: "light" | "dark" | "system") => {
    setTheme(val);
    localStorage.setItem("theme", val);
  };

  const updateAccent = (val: string) => {
    setAccent(val);
    localStorage.setItem("accent", val);
  };

  if (!mounted) return null;

  const colors = [
    { name: "Default", value: "default", bg: "bg-zinc-900 dark:bg-zinc-100" },
    { name: "Blue", value: "#3b82f6", bg: "bg-blue-500" },
    { name: "Green", value: "#22c55e", bg: "bg-green-500" },
    { name: "Orange", value: "#f97316", bg: "bg-orange-500" },
    { name: "Violet", value: "#8b5cf6", bg: "bg-violet-500" },
  ];

  return (
    <div className="flex flex-col gap-4 text-xs text-zinc-500 dark:text-zinc-400">
      <div className="flex items-center gap-4">
        <span className="font-semibold text-zinc-900 dark:text-zinc-100">
          Customize
        </span>

        <div className="flex items-center gap-2">
          <label htmlFor="theme-select">Theme:</label>
          <div className="relative">
            <select
              id="theme-select"
              value={theme}
              onChange={(e) =>
                updateTheme(e.target.value as "light" | "dark" | "system")
              }
              className="appearance-none rounded-md border border-zinc-200 bg-zinc-100 py-1 pl-2 pr-6 text-zinc-900 focus:border-zinc-500 focus:outline-none dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-100"
            >
              <option value="system">System</option>
              <option value="light">Light</option>
              <option value="dark">Dark</option>
            </select>
            <div className="pointer-events-none absolute right-1.5 top-1/2 -translate-y-1/2 text-zinc-500">
              <svg
                width="10"
                height="10"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <span>Accent:</span>
        <div className="flex gap-2">
          {colors.map((c) => (
            <button
              key={c.name}
              onClick={() => updateAccent(c.value)}
              className={`h-5 w-5 rounded-full border border-zinc-200 shadow-sm transition hover:scale-110 dark:border-zinc-700 ${c.bg
                } ${accent === c.value ? "ring-2 ring-zinc-400 dark:ring-zinc-500" : ""}`}
              title={c.name}
              aria-label={`Set accent color to ${c.name}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
