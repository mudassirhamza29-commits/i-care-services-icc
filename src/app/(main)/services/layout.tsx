import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore free community support across health, welfare, housing, wellbeing, family and related needs.",
  alternates: { canonical: "/services" },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
