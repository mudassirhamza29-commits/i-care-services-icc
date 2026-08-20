import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How We Help",
  description:
    "Start with what is happening and find a free initial consultation for health, care, housing, money, wellbeing, family life and related needs.",
  alternates: { canonical: "/services" },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
