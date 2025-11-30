"use client";

import { useEffect, useState } from "react";

export function SiteCustomizer() {
  const [theme, setTheme] = useState<"light" | "dark" | "system">("system");
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

  const updateTheme = (val: "light" | "dark" | "system") => {
    setTheme(val);
    localStorage.setItem("theme", val);
  };

  if (!mounted) return null;

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
    </div>
  );
}
