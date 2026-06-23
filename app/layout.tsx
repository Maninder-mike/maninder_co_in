import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import dynamic from "next/dynamic";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import { ToastProvider } from "./_components/toast-provider";

const KonamiCode = dynamic(() => import("./_components/konami-code").then((mod) => mod.KonamiCode));

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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

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
    images: [
      {
        url: "/api/og",
        width: 1200,
        height: 630,
        alt: "Maninder | Mobile Dev, Traveler & Runner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Maninder | Mobile Dev, Traveler & Runner",
    description:
      "iOS & Android apps, travel log, running snapshot and build-in-progress features.",
    images: ["/api/og"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://va.vercel-analytics.com" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Prevent FOUC — must run before first paint */}
        <script
          id="theme-initializer"
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var s=localStorage.getItem('theme');var d=window.matchMedia('(prefers-color-scheme:dark)').matches;if(s==='dark'||(!s||s==='system')&&d){document.documentElement.classList.add('dark')}}catch(e){}})();`
          }}
        />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-bold focus:text-zinc-900 focus:shadow-2xl focus:outline-none dark:focus:bg-zinc-900 dark:focus:text-white"
        >
          Skip to content
        </a>
        <ToastProvider>{children}</ToastProvider>
        <KonamiCode />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
