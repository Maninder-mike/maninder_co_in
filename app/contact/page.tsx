import type { Metadata } from "next";
import { SiteNav } from "@/app/_components/site-nav";
import { SiteFooter } from "@/app/_components/site-footer";
import { ContactForm } from "./_components/contact-form";
import { FAQSection } from "./_components/faq-section";
import { TwitterIcon, GithubIcon } from "@/app/_components/social-icons";
import {
  Mail,
  MapPin,
  Phone,
  MessagesSquare,
  ArrowUpRight
} from "lucide-react";

// Local brand icons
function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function YoutubeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <polygon points="10 15 15 12 10 9" />
    </svg>
  );
}

export const metadata: Metadata = {
  title: "Contact Maninder — App Developer & Product Builder",
  description: "Get in touch for mobile app development (iOS/Android), web products, IoT solutions, and freelance partnerships. Typically responds within a few hours.",
};

export default function ContactPage() {
  return (
    <div className="min-h-dvh flex flex-col bg-zinc-50 text-zinc-900 selection:bg-zinc-900 selection:text-white dark:bg-zinc-950 dark:text-zinc-100 dark:selection:bg-zinc-100 dark:selection:text-zinc-900">
      <SiteNav variant="default" />

      <main id="main-content" className="flex-1 px-6 pt-32 pb-24">
        <div className="mx-auto max-w-5xl">
          {/* Header & Status Badge */}
          <div className="mb-12 max-w-2xl animate-page-enter">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-3 py-1.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
              </span>
              Available for new projects
            </div>
            <h1 className="text-4xl font-black tracking-tighter sm:text-5xl lg:text-7xl">
              Let's build{' '}
              <br className="hidden sm:block" />
              <span className="text-zinc-400 dark:text-zinc-600">something together.</span>
            </h1>
            <p className="mt-6 text-lg font-medium leading-relaxed text-zinc-600 dark:text-zinc-400 sm:text-xl">
              Reach out for mobile app development, web products, or hardware/IoT partnerships. I typically respond within a few hours.
            </p>
          </div>

          {/* Quick Action Contact Cards */}
          <div className="mb-12 grid gap-4 sm:grid-cols-3 animate-page-enter" style={{ animationDelay: "100ms", animationFillMode: "both" }}>
            {/* Email Card */}
            <a
              id="quick-email-card"
              href="mailto:info@maninder.co.in"
              className="glass rounded-2xl p-5 hover:bg-white dark:hover:bg-zinc-900 border border-zinc-200/50 dark:border-zinc-800/30 transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 hover:shadow-lg flex flex-col justify-between min-h-[140px] group"
            >
              <div className="flex items-start justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400">
                  <Mail size={20} />
                </div>
                <ArrowUpRight size={16} className="text-zinc-400 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400">Email Me</h4>
                <p className="text-sm font-semibold text-zinc-850 dark:text-zinc-200 mt-1">info@maninder.co.in</p>
              </div>
            </a>

            {/* Phone Card */}
            <a
              id="quick-phone-card"
              href="tel:+16479395415"
              className="glass rounded-2xl p-5 hover:bg-white dark:hover:bg-zinc-900 border border-zinc-200/50 dark:border-zinc-800/30 transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 hover:shadow-lg flex flex-col justify-between min-h-[140px] group"
            >
              <div className="flex items-start justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                  <Phone size={20} />
                </div>
                <ArrowUpRight size={16} className="text-zinc-400 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400">Call / Message</h4>
                <p className="text-sm font-semibold text-zinc-850 dark:text-zinc-200 mt-1">+1 (647) 939-5415</p>
              </div>
            </a>

            {/* Location Card */}
            <a
              id="quick-location-card"
              href="https://maps.google.com/?q=Caledon,+ON,+Canada"
              target="_blank"
              rel="noopener noreferrer"
              className="glass rounded-2xl p-5 hover:bg-white dark:hover:bg-zinc-900 border border-zinc-200/50 dark:border-zinc-800/30 transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 hover:shadow-lg flex flex-col justify-between min-h-[140px] group"
            >
              <div className="flex items-start justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400">
                  <MapPin size={20} />
                </div>
                <ArrowUpRight size={16} className="text-zinc-400 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400">Base Location</h4>
                <p className="text-sm font-semibold text-zinc-850 dark:text-zinc-200 mt-1">Caledon, Ontario, Canada</p>
              </div>
            </a>
          </div>

          <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr] items-start animate-page-enter" style={{ animationDelay: "200ms", animationFillMode: "both" }}>
            {/* Contact Info Sidebar */}
            <div className="space-y-8 lg:sticky lg:top-28">
              <div className="glass rounded-3xl bg-white/50 p-8 shadow-sm dark:bg-zinc-900/50 border border-zinc-200/80 dark:border-zinc-800/30">
                <h3 className="mb-6 text-sm font-bold uppercase tracking-widest text-zinc-400">
                  Contact Information
                </h3>
                <div className="space-y-6">
                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100">
                      <Mail size={18} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-zinc-900 dark:text-zinc-100">Email</h4>
                      <a href="mailto:info@maninder.co.in" className="mt-1 text-sm text-zinc-600 dark:text-zinc-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors inline-block font-medium">
                        info@maninder.co.in
                      </a>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100">
                      <Phone size={18} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-zinc-900 dark:text-zinc-100">Phone</h4>
                      <a href="tel:+16479395415" className="mt-1 text-sm text-zinc-600 dark:text-zinc-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors inline-block font-medium">
                        +1 (647) 939-5415
                      </a>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100">
                      <MapPin size={18} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-zinc-900 dark:text-zinc-100">Base Location</h4>
                      <a
                        href="https://maps.google.com/?q=Caledon,+ON,+Canada"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-1 text-sm text-zinc-600 dark:text-zinc-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors inline-block leading-relaxed font-medium"
                      >
                        Caledon, ON, Canada
                      </a>
                    </div>
                  </div>

                  {/* Socials */}
                  <div className="flex items-start gap-4 border-t border-zinc-100 dark:border-zinc-800 pt-6">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100">
                      <MessagesSquare size={18} />
                    </div>
                    <div className="w-full">
                      <h4 className="font-semibold text-sm text-zinc-900 dark:text-zinc-100 mb-3">Connect Online</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {/* Twitter */}
                        <a
                          href="https://x.com/maninder_mike"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors font-medium py-0.5"
                        >
                          <TwitterIcon className="h-3.5 w-3.5 shrink-0" />
                          <span>Twitter</span>
                        </a>
                        {/* GitHub */}
                        <a
                          href="https://github.com/maninder-mike"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors font-medium py-0.5"
                        >
                          <GithubIcon className="h-3.5 w-3.5 shrink-0" />
                          <span>GitHub</span>
                        </a>
                        {/* Instagram */}
                        <a
                          href="https://instagram.com/maninder_diary"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400 hover:text-pink-500 dark:hover:text-pink-400 transition-colors font-medium py-0.5"
                        >
                          <InstagramIcon className="h-3.5 w-3.5 shrink-0" />
                          <span>Instagram</span>
                        </a>
                        {/* YouTube */}
                        <a
                          href="https://www.youtube.com/@Saffrata"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400 hover:text-red-600 dark:hover:text-red-400 transition-colors font-medium py-0.5"
                        >
                          <YoutubeIcon className="h-3.5 w-3.5 shrink-0" />
                          <span>YouTube</span>
                        </a>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            {/* Form Area */}
            <div className="glass rounded-2xl sm:rounded-3xl bg-white p-6 sm:p-8 shadow-xl dark:bg-zinc-900/90 lg:p-12 border border-zinc-200/80 dark:border-zinc-800/30">
              <ContactForm />
            </div>
          </div>

          {/* Collapsible FAQ Section */}
          <FAQSection />
        </div>
      </main>

      <SiteFooter variant="default" />
    </div>
  );
}
