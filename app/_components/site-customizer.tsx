"use client";

import { useCallback, useEffect, useState } from "react";
import { Sun, Moon, Monitor } from "lucide-react";

type ThemeMode = "light" | "dark" | "system";

function applyThemeToDOM(theme: ThemeMode) {
  const root = document.documentElement;
  if (theme === "system") {
    const systemDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    root.classList.toggle("dark", systemDark);
  } else {
    root.classList.toggle("dark", theme === "dark");
  }
}

export function SiteCustomizer() {
  const [theme, setTheme] = useState<ThemeMode>("system");
  const [mounted, setMounted] = useState(false);

  // On mount: read localStorage and apply immediately
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") as ThemeMode | null;
    const initial = storedTheme ?? "system";
    setTheme(initial);
    applyThemeToDOM(initial);
    setMounted(true);
  }, []);

  // When theme changes after mount: persist and apply
  useEffect(() => {
    if (!mounted) return;

    localStorage.setItem("theme", theme);
    applyThemeToDOM(theme);

    // Listen for OS-level changes when set to "system"
    if (theme === "system") {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      const handler = () => applyThemeToDOM("system");
      mediaQuery.addEventListener("change", handler);
      return () => mediaQuery.removeEventListener("change", handler);
    }
  }, [theme, mounted]);

  const updateTheme = useCallback((val: ThemeMode) => {
    setTheme(val);
  }, []);

  if (!mounted) return null;

  const options: { value: ThemeMode; icon: React.ReactNode; label: string }[] = [
    { value: "light", icon: <Sun className="h-3.5 w-3.5" />, label: "Light" },
    { value: "dark", icon: <Moon className="h-3.5 w-3.5" />, label: "Dark" },
    { value: "system", icon: <Monitor className="h-3.5 w-3.5" />, label: "Auto" },
  ];

  return (
    <div className="flex items-center gap-1 rounded-full border border-zinc-200 bg-zinc-100 p-1 dark:border-zinc-800 dark:bg-zinc-900">
      {options.map((opt) => (
        <button
          key={opt.value}
          onClick={() => updateTheme(opt.value)}
          aria-label={`Switch to ${opt.label} theme`}
          title={opt.label}
          className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold transition-all duration-200 ${
            theme === opt.value
              ? "bg-white text-zinc-900 shadow-sm dark:bg-zinc-800 dark:text-zinc-100"
              : "text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
          }`}
        >
          {opt.icon}
          <span className="hidden sm:inline">{opt.label}</span>
        </button>
      ))}
    </div>
  );
}
