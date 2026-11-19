"use client";

import { useActionState, useState } from "react";
import { submitContactForm } from "@/app/actions/contact";
import { CONTACT_FORM_INITIAL_STATE, CONTACT_SUBJECTS } from "@/lib/contact";
import { Send, CheckCircle2, AlertCircle, ArrowRight } from "lucide-react";

function SubmitButton({ isPending }: { isPending: boolean }) {
  return (
    <button
      type="submit"
      disabled={isPending}
      className="group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-zinc-900 px-6 py-4 text-sm font-bold text-white shadow-xl transition-all duration-300 hover:bg-zinc-800 disabled:opacity-50 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-white"
    >
      <span className="relative z-10">
        {isPending ? "Sending Message..." : "Send Message"}
      </span>
      <Send className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
    </button>
  );
}

function ContactFormInner({ onReset }: { onReset: () => void }) {
  const [state, formAction, isPending] = useActionState(submitContactForm, CONTACT_FORM_INITIAL_STATE);
  const [messageText, setMessageText] = useState("");
  const [subject, setSubject] = useState("");

  const MAX_CHARS = 1000;
  const isNearLimit = messageText.length > MAX_CHARS - 100;

  if (state.status === "success") {
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
          type="button"
          onClick={onReset}
          className="group inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-5 py-2.5 text-xs font-semibold text-zinc-800 shadow-sm transition-all hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:bg-zinc-800"
        >
          <span>Send another message</span>
          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
        </button>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-6 animate-page-enter">
      {state.status === "error" && (
        <div className="flex items-center gap-3 rounded-xl bg-red-50 p-4 text-sm text-red-600 dark:bg-red-950/30 dark:text-red-400 border border-red-500/10">
          <AlertCircle className="h-5 w-5 shrink-0" />
          <p>{state.message}</p>
        </div>
      )}

      <div className="space-y-4">
        <div>
          <label htmlFor="name" className="mb-2 block text-xs font-bold uppercase tracking-wider text-zinc-500">
            Your Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            placeholder="John Doe"
            className="w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm font-medium text-zinc-900 placeholder-zinc-400 transition-colors focus:border-zinc-900 focus:outline-none dark:border-zinc-800 dark:bg-zinc-900/50 dark:text-zinc-100 dark:placeholder-zinc-600 dark:focus:border-zinc-100"
          />
        </div>

        <div>
          <label htmlFor="email" className="mb-2 block text-xs font-bold uppercase tracking-wider text-zinc-500">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="john@example.com"
            className="w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm font-medium text-zinc-900 placeholder-zinc-400 transition-colors focus:border-zinc-900 focus:outline-none dark:border-zinc-800 dark:bg-zinc-900/50 dark:text-zinc-100 dark:placeholder-zinc-600 dark:focus:border-zinc-100"
          />
        </div>

        <div>
          <label htmlFor="subject" className="mb-2 block text-xs font-bold uppercase tracking-wider text-zinc-500">
            Topic / Subject <span className="text-red-500">*</span>
          </label>
          <select
            id="subject"
            name="subject"
            required
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm font-medium text-zinc-900 transition-colors focus:border-zinc-900 focus:outline-none dark:border-zinc-800 dark:bg-zinc-900/50 dark:text-zinc-100 dark:focus:border-zinc-100"
          >
            <option value="" disabled>Select a topic...</option>
            {CONTACT_SUBJECTS.map((sub) => (
              <option key={sub} value={sub}>
                {sub}
              </option>
            ))}
          </select>
        </div>

        <div>
          <div className="mb-2 flex items-center justify-between">
            <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-zinc-500">
              Message <span className="text-red-500">*</span>
            </label>
            <span className={`text-[10px] font-bold ${isNearLimit ? "text-amber-500" : "text-zinc-400"}`}>
              {messageText.length}/{MAX_CHARS}
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
            placeholder="Tell me about your project, timeline, or inquiry..."
            className="w-full resize-none rounded-xl border border-zinc-200 bg-white p-4 text-sm font-medium text-zinc-900 placeholder-zinc-400 transition-colors focus:border-zinc-900 focus:outline-none dark:border-zinc-800 dark:bg-zinc-900/50 dark:text-zinc-100 dark:placeholder-zinc-600 dark:focus:border-zinc-100"
          />
        </div>
      </div>

      <SubmitButton isPending={isPending} />
    </form>
  );
}

export function ContactForm() {
  const [resetKey, setResetKey] = useState(0);
  return <ContactFormInner key={resetKey} onReset={() => setResetKey((k) => k + 1)} />;
}
