import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ExternalLink,
  HeartHandshake,
  MapPin,
  PackageOpen,
} from "lucide-react";

import { PageHero } from "@/components/shared/PageHero";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Community Support and Reach",
  description:
    "How I-Care Services CIC supports community reinvestment, food-bank connections and referrals from London and beyond.",
  alternates: { canonical: "/community" },
};

export default function CommunityPage() {
  return (
    <>
      <PageHero
        title="Community Support and Reach"
        subtitle="Practical connections, careful reinvestment and a welcoming first conversation wherever you are"
        eyebrow="Community-led by design"
        visualVariant="community"
        breadcrumb="Community"
      />

      <section id="community-reinvestment" className="scroll-mt-24 bg-white">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 lg:py-24">
          <AnimatedSection variant="slideInLeft">
            <span className="flex h-16 w-16 items-center justify-center rounded-3xl bg-purple/10 text-purple">
              <HeartHandshake size={30} aria-hidden="true" />
            </span>
            <p className="mt-6 text-sm font-extrabold uppercase tracking-[0.2em] text-purple">
              Community Reinvestment
            </p>
            <h2 className="mt-4 font-heading text-4xl font-extrabold tracking-[-0.04em] text-navy sm:text-5xl">
              Support that returns to the community
            </h2>
          </AnimatedSection>
          <AnimatedSection variant="slideInRight" className="rounded-[2rem] bg-cream-dark p-7 sm:p-9">
            <p className="text-lg leading-8 text-text-secondary">
              As a community-based initiative, I-Care Services CIC aims to use
              resources and any available surplus to strengthen support,
              connection and practical opportunities for the communities it
              serves.
            </p>
            <p className="mt-5 leading-8 text-text-secondary">
              From time to time, community projects may need donations of
              funds, useful items, professional time or practical help. There
              is no pressure to give. If support is needed, we will explain the
              purpose and an appropriate verified route before accepting it.
            </p>
            <Button href="/contact" className="mt-7 gap-2">
              Ask how to support
              <ArrowRight size={17} aria-hidden="true" />
            </Button>
          </AnimatedSection>
        </div>
      </section>

      <section id="food-bank-partnerships" className="scroll-mt-24 bg-cream-dark">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-24">
          <AnimatedSection variant="slideInLeft" className="rounded-[2rem] bg-white p-7 shadow-sm sm:p-9">
            <p className="text-lg leading-8 text-text-secondary">
              We work alongside local food-bank services and community food
              partners to help people understand referral and voucher routes.
              Where appropriate, this may include connections to established
              networks such as Trussell.
            </p>
            <p className="mt-5 leading-8 text-text-secondary">
              Depending on local arrangements and availability, support may
              include emergency food parcels, fresh items or safely prepared
              home-cooked food. Each partner sets its own eligibility,
              collection, delivery and dietary-safety arrangements, so a
              particular parcel cannot be guaranteed.
            </p>
            <a
              href="https://www.trussell.org.uk/emergency-food/find-a-foodbank"
              target="_blank"
              rel="noreferrer"
              className="mt-7 inline-flex min-h-11 items-center gap-2 rounded-full border-2 border-purple px-5 py-2.5 text-sm font-extrabold text-purple transition-colors hover:bg-purple hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-purple"
            >
              Find food-bank information
              <ExternalLink size={16} aria-hidden="true" />
            </a>
          </AnimatedSection>
          <AnimatedSection variant="slideInRight">
            <span className="flex h-16 w-16 items-center justify-center rounded-3xl bg-orange/20 text-navy">
              <PackageOpen size={30} aria-hidden="true" />
            </span>
            <p className="mt-6 text-sm font-extrabold uppercase tracking-[0.2em] text-purple">
              Food Bank Partnerships
            </p>
            <h2 className="mt-4 font-heading text-4xl font-extrabold tracking-[-0.04em] text-navy sm:text-5xl">
              Helping reduce immediate hardship
            </h2>
          </AnimatedSection>
        </div>
      </section>

      <section id="catchment-area" className="scroll-mt-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <AnimatedSection className="mx-auto max-w-4xl rounded-[2.5rem] bg-navy p-7 text-white shadow-[var(--shadow-hover)] sm:p-10 lg:p-14">
            <span className="flex h-16 w-16 items-center justify-center rounded-3xl bg-orange text-navy">
              <MapPin size={30} aria-hidden="true" />
            </span>
            <p className="mt-7 text-sm font-extrabold uppercase tracking-[0.2em] text-orange">
              Catchment Area
            </p>
            <h2 className="mt-4 font-heading text-4xl font-extrabold tracking-[-0.04em] sm:text-5xl">
              London and beyond
            </h2>
            <p className="mt-6 text-lg leading-8 text-white/78">
              We welcome enquiries and referrals from London. Referrals from
              other counties and cities may also be considered case by case.
            </p>
            <p className="mt-4 leading-8 text-white/70">
              Support outside the usual service area is not guaranteed. It
              depends on capacity, the type of help requested, travel or
              home-visit practicalities, and whether suitable partner services are
              available in the person&apos;s area.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/get-support" className="gap-2">
                Ask about support
                <ArrowRight size={17} aria-hidden="true" />
              </Button>
              <Link
                href="/for-professionals"
                className="interactive-button inline-flex min-h-11 items-center justify-center rounded-full border-2 border-white/60 px-5 py-2.5 text-sm font-extrabold text-white hover:border-orange hover:bg-orange hover:text-navy"
              >
                Make a professional referral
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
