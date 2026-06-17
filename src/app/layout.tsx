import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";

import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { PageTransition } from "@/components/layout/PageTransition";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.icaree.co.uk"),
  title: {
    default: "I-Care Services ICC | Community Support",
    template: "%s | I-Care Services ICC",
  },
  description:
    "Community-based health, welfare, housing and family support.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "I-Care Services ICC",
    title: "I-Care Services ICC | Community Support",
    description:
      "Community-based health, welfare, housing and family support.",
    images: [
      {
        url: "/images/hero-bg.jpg",
        width: 1200,
        height: 630,
        alt: "A warm support conversation at I-Care Services ICC",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "I-Care Services ICC | Community Support",
    description:
      "Community-based health, welfare, housing and family support.",
    images: ["/images/hero-bg.jpg"],
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
      <head>
        <link
          rel="preload"
          as="image"
          href="/images/hero-bg.jpg"
          fetchPriority="high"
        />
      </head>
      <body className={`${inter.variable} flex min-h-screen flex-col`}>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Navbar />
        <PageTransition>{children}</PageTransition>
        <Footer />
      </body>
    </html>
  );
}
