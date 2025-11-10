import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ToastProvider } from "./_components/toast-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Responsive meta */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
        {/* Prevent initial flash & set theme early */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const stored = localStorage.getItem('theme');
                  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  const theme = stored || (prefersDark ? 'dark' : 'light');
                  if (theme === 'dark') {
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
        <ToastProvider>{children}</ToastProvider>
      </body>
    </html>
  );
}
