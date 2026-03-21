import type { Metadata } from "next";
import { SiteNav } from "@/app/_components/site-nav";
import { SiteFooter } from "@/app/_components/site-footer";
import { ContactForm } from "./_components/contact-form";
import { Mail, MapPin, MessagesSquare } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact | Maninder",
  description: "Get in touch for building web, mobile, and IoT products.",
};

export default function ContactPage() {
  return (
    <div className="min-h-dvh flex flex-col bg-zinc-50 text-zinc-900 selection:bg-zinc-900 selection:text-white dark:bg-zinc-950 dark:text-zinc-100 dark:selection:bg-zinc-100 dark:selection:text-zinc-900">
      <SiteNav variant="default" />

      <main className="flex-1 px-6 pt-32 pb-24">
        <div className="mx-auto max-w-5xl">
          <div className="mb-16 max-w-2xl">
            <h1 className="text-4xl font-black tracking-tighter sm:text-5xl lg:text-7xl">
              Let's build{' '}
              <br className="hidden sm:block" />
              <span className="text-zinc-400 dark:text-zinc-600">something together.</span>
            </h1>
            <p className="mt-8 text-lg font-medium leading-relaxed text-zinc-600 dark:text-zinc-400 sm:text-xl">
              I'm always open to discussing product design work or partnership opportunities. Reach out using the form below, and I'll get back to you within 24 hours.
            </p>
          </div>

          <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr]">
            {/* Contact Info Sidebar */}
            <div className="space-y-8">
              <div className="glass rounded-3xl bg-white/50 p-8 shadow-sm dark:bg-zinc-900/50">
                <h3 className="mb-6 text-sm font-bold uppercase tracking-widest text-zinc-400">
                  Contact Information
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100">
                      <Mail size={18} />
                    </div>
                    <div>
                      <h4 className="font-semibold">Email</h4>
                      <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                        maninder_mike@yahoo.com
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100">
                      <MapPin size={18} />
                    </div>
                    <div>
                      <h4 className="font-semibold">Location</h4>
                      <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                        San Francisco Bay Area, CA
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100">
                      <MessagesSquare size={18} />
                    </div>
                    <div>
                      <h4 className="font-semibold">Socials</h4>
                      <div className="mt-2 flex flex-col gap-2">
                        <a href="https://x.com/maninder_mike" className="text-sm font-medium text-zinc-600 hover:text-blue-600 dark:text-zinc-400 dark:hover:text-blue-400 transition-colors">Twitter @maninder_mike</a>
                        <a href="https://github.com/maninder-mike" className="text-sm font-medium text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors">GitHub maninder-mike</a>
                        <a href="https://linkedin.com/in/maninder-mike" className="text-sm font-medium text-zinc-600 hover:text-blue-700 dark:text-zinc-400 dark:hover:text-blue-400 transition-colors">LinkedIn maninder-mike</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Area */}
            <div className="glass rounded-2xl sm:rounded-3xl bg-white p-6 sm:p-8 shadow-xl dark:bg-zinc-900/90 lg:p-12">
              <ContactForm />
            </div>
          </div>
        </div>
      </main>

      <SiteFooter variant="default" />
    </div>
  );
}
