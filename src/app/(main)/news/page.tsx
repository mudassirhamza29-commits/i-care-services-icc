import type { Metadata } from "next";
import { Newspaper } from "lucide-react";

import { PageHero } from "@/components/shared/PageHero";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "News & Updates",
  description:
    "Reviewed updates and community support information from I-Care Services.",
  robots: { index: false, follow: false },
};

export default function NewsPage() {
  return (
    <>
      <PageHero
        title="News & Updates"
        subtitle="Reviewed updates will be published here after approval"
        eyebrow="From our community"
      />

      <section className="bg-cream">
        <div className="mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 lg:px-8 lg:py-28">
          <AnimatedSection>
            <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-orange text-navy">
              <Newspaper size={30} aria-hidden="true" />
            </span>
            <h2 className="mt-6 font-heading text-4xl font-extrabold tracking-[-0.04em] text-navy sm:text-5xl">
              Articles Under Review
            </h2>
            <p className="mt-6 text-base leading-8 text-text-secondary sm:text-lg">
              News and guidance posts will appear here when they have a real
              title, date, author, reviewed content and approval to publish.
            </p>
            <Button href="/contact" className="mt-8 px-7 text-base">
              Contact Us
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
