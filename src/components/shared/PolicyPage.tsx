import type { ReactNode } from "react";

import { PageHero } from "@/components/shared/PageHero";
import type { GraphicVariant } from "@/types";

interface PolicyPageProps {
  title: string;
  subtitle: string;
  children: ReactNode;
}

export function PolicyPage({ title, subtitle, children }: PolicyPageProps) {
  const policyGraphics: Record<string, GraphicVariant> = {
    "Privacy Policy": "privacy",
    "Cookie Policy": "cookies",
    "Accessibility Statement": "accessibility",
    Safeguarding: "safeguarding",
    Complaints: "complaints",
    "Website Terms": "terms",
    "Data Protection": "data-protection",
  };
  const graphic = policyGraphics[title] ?? "privacy";

  return (
    <>
      <PageHero title={title} subtitle={subtitle} visualVariant={graphic} compact />
      <div className="bg-white">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="mb-8 rounded-2xl border border-purple/20 bg-cream-dark p-5 text-sm font-semibold leading-6 text-navy">
            This page explains I-Care Services CIC&apos;s current website and
            service practice. It is reviewed as our services and legal
            responsibilities change.
          </div>
          <div className="prose prose-slate max-w-none prose-headings:font-heading prose-headings:text-navy prose-a:font-bold prose-a:text-purple">
            {children}
          </div>
        </div>
      </div>
    </>
  );
}
