import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How We Help",
  description:
    "We offer free, confidential, impartial advice without judgment. Private one-to-one support is available where needed.",
  alternates: { canonical: "/services" },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
