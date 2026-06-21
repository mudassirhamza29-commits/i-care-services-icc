import type { ReactNode } from "react";

import { PageHero } from "@/components/shared/PageHero";

interface PolicyPageProps {
  title: string;
  subtitle: string;
  children: ReactNode;
}

export function PolicyPage({ title, subtitle, children }: PolicyPageProps) {
  return (
    <>
      <PageHero title={title} subtitle={subtitle} />
      <main className="bg-white" id="main-content">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="prose prose-slate max-w-none prose-headings:font-heading prose-headings:text-navy prose-a:font-bold prose-a:text-purple">
            {children}
          </div>
        </div>
      </main>
    </>
  );
}
