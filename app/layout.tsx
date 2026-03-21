import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import { ToastProvider } from "./_components/toast-provider";
import { headers } from "next/headers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://maninder.co.in"),
  title: "Maninder | Mobile Dev, Traveler & Runner",
  description:
    "Portfolio of Maninder – iOS & Android developer, world traveler, runner. Projects, journeys and upcoming experiments.",
  openGraph: {
    title: "Maninder | Mobile Dev, Traveler & Runner",
    description:
      "iOS & Android apps, travel log, running snapshot and build-in-progress features.",
    type: "website",
    locale: "en_US",
    url: "https://maninder.co.in",
    siteName: "Maninder",
  },
  twitter: {
    card: "summary_large_image",
    title: "Maninder | Mobile Dev, Traveler & Runner",
    description:
      "iOS & Android apps, travel log, running snapshot and build-in-progress features.",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const nonce = (await headers()).get("x-nonce") ?? "";
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Responsive meta */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
        {/* Prevent initial flash & set theme early */}
        <script
          nonce={nonce}
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const stored = localStorage.getItem('theme');
                  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  
                  if (stored === 'dark' || ((!stored || stored === 'system') && prefersDark)) {
                    document.documentElement.classList.add('dark');
                  }
                } catch (_) {}
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-bold focus:text-zinc-900 focus:shadow-2xl focus:outline-none dark:focus:bg-zinc-900 dark:focus:text-white"
        >
          Skip to content
        </a>
        <ToastProvider>{children}</ToastProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
