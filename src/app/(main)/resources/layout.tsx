import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Practical support guides and links to trusted external organisations.",
  alternates: { canonical: "/resources" },
};

export default function ResourcesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
