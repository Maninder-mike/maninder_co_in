"use client";

import { useActionState, useEffect, useRef, useState } from "react";
import { useFormStatus } from "react-dom";
import { useToast } from "./toast-provider";

export type NewsletterState =
  | { status: "idle"; message?: string }
  | { status: "success"; message: string }
  | { status: "error"; message: string };

export const INITIAL_NEWSLETTER_STATE: NewsletterState = { status: "idle" };

type Props = {
  action: (
    state: NewsletterState,
    formData: FormData
  ) => Promise<NewsletterState>;
};

function Submit() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      className="group relative flex w-auto items-center justify-center gap-2 overflow-hidden rounded-full bg-zinc-900 px-4 py-2 text-xs font-medium text-white shadow-lg transition-all hover:bg-zinc-800 hover:shadow-xl hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-70 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200"
      disabled={pending}
    >
      {pending ? (
        <>
          <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
          </svg>
          <span>Joining...</span>
        </>
      ) : (
        <>
          <span>Subscribe</span>
          <svg
            className="h-4 w-4 transition-transform group-hover:translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </>
      )}
    </button>
  );
}

export default function NewsletterForm({ action }: Props) {
  const [state, formAction] = useActionState(action, INITIAL_NEWSLETTER_STATE);
  const { showToast } = useToast();
  // Avoid showing the same toast repeatedly across re-renders
  // Track last shown toast locally for the session to avoid duplicates.
  const lastShownRef = useRef<{
    status?: NewsletterState["status"];
    message?: string;
  }>({});

  useEffect(() => {
    // Persist last shown in a global to survive component re-mounts without causing SSR issues
    const setLast = (s: NewsletterState) => {
      lastShownRef.current = { status: s.status, message: s.message };
    };

    if (state.status === "success") {
      if (
        lastShownRef.current.status !== "success" ||
        lastShownRef.current.message !== state.message
      ) {
        showToast(state.message, "success");
        setLast(state);
      }
      const form = document.getElementById(
        "newsletter-form"
      ) as HTMLFormElement | null;
      form?.reset();
    } else if (state.status === "error") {
      if (
        lastShownRef.current.status !== "error" ||
        lastShownRef.current.message !== state.message
      ) {
        showToast(state.message, "error");
        setLast(state);
      }
    }
  }, [state, showToast]);

  return <AutoLocationForm formAction={formAction} />;
}

// Separate component to encapsulate geolocation logic
function AutoLocationForm({
  formAction,
}: {
  formAction: (fd: FormData) => void;
}) {
  const [loc, setLoc] = useState<string>("");
  const [locStatus, setLocStatus] = useState<"idle" | "getting" | "ok" | "err">(
    "idle"
  );

  useEffect(() => {
    let cancelled = false;
    async function resolveLocation() {
      setLocStatus("getting");
      // Try Geolocation API
      if (navigator.geolocation) {
        const geo = await new Promise<{ success: boolean; value?: string }>(
          (res) => {
            navigator.geolocation.getCurrentPosition(
              async (pos) => {
                try {
                  const { latitude, longitude } = pos.coords;
                  // Reverse geocoding would normally call an external API; we avoid that here.
                  // Store as lat,long with timezone so backend can enrich later.
                  const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
                  res({
                    success: true,
                    value: `${latitude.toFixed(3)},${longitude.toFixed(
                      3
                    )}|${tz}`,
                  });
                } catch {
                  res({ success: false });
                }
              },
              () => res({ success: false }),
              { enableHighAccuracy: false, timeout: 5000, maximumAge: 600000 }
            );
          }
        );
        if (geo.success && !cancelled) {
          setLoc(geo.value || "");
          setLocStatus("ok");
          return;
        }
      }
      // Fallback: timezone only
      if (!cancelled) {
        const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
        setLoc(tz);
        setLocStatus("err");
      }
    }
    resolveLocation();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <form id="newsletter-form" action={formAction} className="space-y-3">
      <div className="flex gap-2 max-sm:flex-col">
        <input
          type="email"
          name="email"
          required
          placeholder="you@example.com"
          className="w-1/2 rounded-full border border-zinc-300 bg-white px-4 py-2 text-xs text-zinc-900 outline-none transition focus:border-zinc-500 focus:ring-2 focus:ring-zinc-200 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100 dark:focus:border-zinc-500"
        />
        {/* Hidden auto location field */}
        <input type="hidden" name="location" value={loc} />
        <Submit />
      </div>
      <p className="text-[11px] text-zinc-500 dark:text-zinc-400">
        {locStatus === "getting" && "Detecting approximate location..."}
        {locStatus === "ok" && "Location captured (coarse)."}
        {locStatus === "err" && "Using timezone as location fallback."}
        {locStatus === "idle" && "Preparing location..."}
      </p>
    </form>
  );
}
