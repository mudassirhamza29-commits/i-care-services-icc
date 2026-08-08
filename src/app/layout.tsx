import type { Metadata, Viewport } from "next";
import { Inter, Newsreader } from "next/font/google";

import { CookieConsent } from "@/components/cookies/CookieConsent";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { SITE_URL } from "@/lib/site";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "I-Care Services CIC | Community Support",
    template: "%s | I-Care Services CIC",
  },
  description:
    "Community-based health, welfare, housing and family support.",
  openGraph: {
    type: "website",
    url: "/",
    siteName: "I-Care Services CIC",
    title: "I-Care Services CIC | Community Support",
    description:
      "Community-based health, welfare, housing and family support.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "I-Care Services CIC community support",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "I-Care Services CIC | Community Support",
    description:
      "Community-based health, welfare, housing and family support.",
    images: ["/opengraph-image"],
  },
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#FAFAFA",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${newsreader.variable} flex min-h-screen flex-col`}>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Navbar />
        <main
          id="main-content"
          tabIndex={-1}
          className="flex-1 overflow-x-clip outline-none"
        >
          {children}
        </main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
