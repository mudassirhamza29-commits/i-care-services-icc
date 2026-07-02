import { ArrowRight, UsersRound } from "lucide-react";
import type { Metadata } from "next";

import { PageHero } from "@/components/shared/PageHero";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Our Team",
  description: "Team information will be published after internal review.",
  robots: { index: false, follow: false },
};

export default function TeamPage() {
  return (
    <>
      <PageHero
        title="Our Team"
        subtitle="Team information will be published after internal review"
        eyebrow="People behind I-Care"
      />

      <section className="bg-cream">
        <div className="mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 lg:px-8 lg:py-28">
          <AnimatedSection>
            <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-orange text-navy">
              <UsersRound size={30} aria-hidden="true" />
            </span>
            <h2 className="mt-6 font-heading text-4xl font-extrabold tracking-[-0.04em] text-navy sm:text-5xl">
              Team Information Under Review
            </h2>
            <p className="mt-6 text-base leading-8 text-text-secondary sm:text-lg">
              We will publish team names, roles, qualifications, registrations
              and profile links only after internal approval. This avoids
              showing placeholder staff details or unverified professional
              claims.
            </p>
            <p className="mt-5 rounded-2xl border border-orange/30 bg-white p-4 text-sm font-semibold leading-6 text-navy">
              【CONTENT NEEDED: approved team member names, roles, biographies,
              qualifications or registrations, and any approved profile links】
            </p>
            <Button href="/contact" className="mt-8 gap-2 px-7 text-base">
              Contact Us
              <ArrowRight size={18} aria-hidden="true" />
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
