"use client";

import { useState } from "react";

export function ThemeToggle() {
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window === "undefined") return false;
    return document.documentElement.classList.contains("dark");
  });

  const toggle = () => {
    const willBeDark = !isDark;
    setIsDark(willBeDark);
    document.documentElement.classList.toggle("dark", willBeDark);
    localStorage.setItem("theme", willBeDark ? "dark" : "light");
  };

  return (
    <button
      onClick={toggle}
      className="h-11 w-11 rounded-xl bg-zinc-100 p-2.5 shadow-sm ring-1 ring-zinc-200 transition hover:bg-zinc-200 hover:ring-zinc-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 dark:bg-zinc-800 dark:hover:bg-zinc-700 dark:ring-zinc-700 dark:hover:ring-zinc-600 dark:focus-visible:ring-zinc-500"
      aria-label="Toggle dark mode"
    >
      {isDark ? (
        <svg
          className="h-5 w-5 text-zinc-900 dark:text-zinc-100"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      ) : (
        <svg
          className="h-5 w-5 text-zinc-600 dark:text-zinc-200"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </svg>
      )}
    </button>
  );
}
