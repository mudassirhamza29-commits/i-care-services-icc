import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get Support",
  description:
    "Request free first-contact support from I-Care Services CIC by phone, email or online form.",
  alternates: { canonical: "/get-support" },
};

export default function GetSupportLayout({ children }: { children: React.ReactNode }) {
  return children;
}
