"use client";

import { useActionState, useState, useEffect } from "react";
import { submitContactForm } from "@/app/actions/contact";
import { CONTACT_FORM_INITIAL_STATE, CONTACT_SUBJECTS } from "@/lib/contact";
import { Send, CheckCircle2, AlertCircle, Loader2, ArrowRight } from "lucide-react";
import { useFormStatus } from "react-dom";

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="group flex w-full items-center justify-center gap-2 rounded-xl bg-zinc-900 px-6 py-4 text-sm font-semibold text-white transition-all hover:bg-zinc-800 disabled:opacity-50 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200"
    >
      {pending ? (
        <>
          <Loader2 className="h-4 w-4 animate-spin" />
          <span>Sending...</span>
        </>
      ) : (
        <>
          <span>Send Message</span>
          <Send className="h-4 w-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
        </>
      )}
    </button>
  );
}

export function ContactForm() {
  const [state, formAction] = useActionState(submitContactForm, CONTACT_FORM_INITIAL_STATE);
  const [messageText, setMessageText] = useState("");
  const [subject, setSubject] = useState("");
  const [forceResetKey, setForceResetKey] = useState(0);
  const [showSuccess, setShowSuccess] = useState(false);

  // Sync action state success status
  useEffect(() => {
    if (state.status === "success") {
      setShowSuccess(true);
    }
  }, [state.status]);

  const handleReset = () => {
    // Increment the key to completely unmount and remount/reset the form fields
    setForceResetKey((prev) => prev + 1);
    setMessageText("");
    setSubject("");
    setShowSuccess(false);
    // Force reset state to idle by setting history state or reload logic (or simply updating reset key since key controls form)
    state.status = "idle";
    state.message = null;
  };

  const MAX_CHARS = 1000;
  const isNearLimit = messageText.length > MAX_CHARS - 100;

  if (showSuccess) {
    return (
      <div className="flex flex-col items-center justify-center space-y-6 rounded-3xl bg-emerald-50/50 p-8 text-center dark:bg-emerald-950/10 border border-emerald-500/10 animate-page-enter">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-900/40">
          <CheckCircle2 className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />
        </div>
        <div className="space-y-2">
          <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">Message Sent!</h3>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 max-w-sm mx-auto">
            {state.message || "Thanks for reaching out! I'll get back to you soon."}
          </p>
        </div>
        <button
          onClick={handleReset}
          className="group inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-5 py-2.5 text-xs font-semibold text-zinc-800 shadow-sm transition-all hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:bg-zinc-800"
        >
          <span>Send another message</span>
          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
        </button>
      </div>
    );
  }

  return (
    <form key={forceResetKey} action={formAction} className="space-y-6 animate-page-enter">
      {state.status === "error" && (
        <div className="flex items-center gap-3 rounded-xl bg-red-50 p-4 text-sm text-red-600 dark:bg-red-950/30 dark:text-red-400 border border-red-500/10">
          <AlertCircle className="h-5 w-5 shrink-0" />
          <p>{state.message}</p>
        </div>
      )}

      <div className="space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              autoComplete="name"
              autoCorrect="off"
              className="w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-base sm:text-sm text-zinc-900 placeholder-zinc-400 focus:border-zinc-900 focus:outline-none focus:ring-1 focus:ring-zinc-900 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-100 dark:placeholder-zinc-600 dark:focus:border-zinc-100 dark:focus:ring-zinc-100 transition-colors"
              placeholder="John Doe"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              autoComplete="email"
              autoCapitalize="none"
              autoCorrect="off"
              className="w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-base sm:text-sm text-zinc-900 placeholder-zinc-400 focus:border-zinc-900 focus:outline-none focus:ring-1 focus:ring-zinc-900 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-100 dark:placeholder-zinc-600 dark:focus:border-zinc-100 dark:focus:ring-zinc-100 transition-colors"
              placeholder="john@example.com"
            />
          </div>
        </div>

        {/* Subject Select Dropdown */}
        <div className="space-y-2">
          <label htmlFor="subject" className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
            What can I help you with?
          </label>
          <div className="relative">
            <select
              id="subject"
              name="subject"
              required
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="w-full appearance-none rounded-xl border border-zinc-200 bg-white px-4 py-3 text-base sm:text-sm text-zinc-900 focus:border-zinc-900 focus:outline-none focus:ring-1 focus:ring-zinc-900 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-100 dark:focus:border-zinc-100 dark:focus:ring-zinc-100 transition-colors cursor-pointer"
            >
              <option value="" disabled hidden>
                Select a category...
              </option>
              {CONTACT_SUBJECTS.map((sub) => (
                <option key={sub} value={sub}>
                  {sub}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-zinc-500">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Message Input with character counter */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label htmlFor="message" className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
              Message
            </label>
            <span
              className={`text-xs ${
                isNearLimit
                  ? "text-amber-600 dark:text-amber-400 font-semibold animate-pulse"
                  : "text-zinc-400 dark:text-zinc-500"
              }`}
            >
              {messageText.length} / {MAX_CHARS}
            </span>
          </div>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            maxLength={MAX_CHARS}
            value={messageText}
            onChange={(e) => setMessageText(e.target.value)}
            className="w-full resize-none rounded-xl border border-zinc-200 bg-white px-4 py-3 text-base sm:text-sm text-zinc-900 placeholder-zinc-400 focus:border-zinc-900 focus:outline-none focus:ring-1 focus:ring-zinc-900 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-100 dark:placeholder-zinc-600 dark:focus:border-zinc-100 dark:focus:ring-zinc-100 transition-colors"
            placeholder="Tell me about your project, goals, or timeline..."
          />
        </div>
      </div>

      <SubmitButton />
    </form>
  );
}
