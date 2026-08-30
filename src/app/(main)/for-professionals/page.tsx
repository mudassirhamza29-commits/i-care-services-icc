import type { Metadata } from "next";
import Link from "next/link";
import {
  Building2,
  GraduationCap,
  HeartPulse,
  House,
  MapPin,
  Scale,
  Stethoscope,
} from "lucide-react";

import { ProfessionalReferralForm } from "@/components/forms/ProfessionalReferralForm";
import { CrisisNotice } from "@/components/shared/CrisisNotice";
import { PageHero } from "@/components/shared/PageHero";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Professional Referrals",
  description:
    "First-contact referral information for professionals, including consent checks and emergency boundaries.",
  alternates: { canonical: "/for-professionals" },
};

const professionalTypes = [
  [
    Stethoscope,
    "GPs & Primary Care",
    "Community support beyond the consultation where appropriate.",
  ],
  [
    HeartPulse,
    "Social Workers",
    "Support for people navigating complex circumstances.",
  ],
  [
    House,
    "Housing Officers",
    "Practical wellbeing and welfare signposting alongside housing work.",
  ],
  [
    GraduationCap,
    "Schools & Education",
    "Early support routes for young people and their families.",
  ],
  [
    Scale,
    "Probation & Justice",
    "Person-centred pathways supporting stability and rehabilitation.",
  ],
  [
    Building2,
    "Health & Voluntary Sector",
    "Community follow-up and signposting where appropriate.",
  ],
  [
    Stethoscope,
    "Clinical Practitioners",
    "Doctors and nurses supporting people who may benefit from community guidance.",
  ],
  [
    HeartPulse,
    "Medical Professionals",
    "Health professionals seeking a clear first-contact referral route.",
  ],
  [
    Building2,
    "Social Professionals",
    "Professionals supporting people with social care and everyday needs.",
  ],
] as const;

const referralBenefits = [
  "First-contact professional referral route",
  "Consent position captured before follow-up",
  "Updates provided where consent and data-sharing allow",
  "Confidential support within safeguarding limits",
  "Not an emergency or 24/7 monitored pathway",
  "We offer free, confidential, impartial advice without judgment. Private one-to-one support is available where needed.",
];

export default function ForProfessionalsPage() {
  return (
    <>
      <PageHero
        title="For Professionals"
        subtitle="Referral pathways for professionals supporting people who may benefit from community-based help"
        eyebrow="Professional referrals"
        visualVariant="professional"
      />

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <AnimatedSection className="mx-auto max-w-3xl text-center">
            <h2 className="font-heading text-4xl font-extrabold text-navy sm:text-5xl">
              Refer With Care and Clarity
            </h2>
            <p className="mt-6 leading-8 text-text-secondary">
              I-Care Services works alongside professionals to understand the
              consent position and the most appropriate next step. Emergency
              and safeguarding concerns must always follow the relevant
              statutory pathway first.
            </p>
            <p className="mt-4 leading-8 text-text-secondary">
              We offer clinical support from Doctors, Nurses, and Social Workers.
            </p>
          </AnimatedSection>

          <AnimatedSection
            variant="staggerContainer"
            className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          >
            {professionalTypes.map(([Icon, title, description]) => (
              <article
                key={title}
                className="interactive-card rounded-3xl border border-cream-dark bg-white p-6"
              >
                <Icon size={28} className="text-purple" aria-hidden="true" />
                <h3 className="mt-4 font-heading text-xl font-extrabold text-navy">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-7 text-text-secondary">
                  {description}
                </p>
              </article>
            ))}
          </AnimatedSection>
        </div>
      </section>

      <section className="bg-cream-dark">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-24">
          <AnimatedSection variant="slideInLeft">
            <CrisisNotice />
          </AnimatedSection>

          <AnimatedSection variant="slideInRight">
            <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-purple">
              Referral boundaries
            </p>
            <h2 className="mt-4 font-heading text-4xl font-extrabold text-navy">
              A Careful Extension of Your Support
            </h2>
            <ul className="mt-7 space-y-4">
              {referralBenefits.map((item) => (
                <li key={item} className="flex gap-3 font-semibold text-navy">
                  <span className="text-purple" aria-hidden="true">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </AnimatedSection>
        </div>
      </section>

      <section className="bg-cream">
        <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <AnimatedSection className="mb-10 flex flex-col gap-5 rounded-3xl border border-purple/20 bg-white p-6 sm:flex-row sm:items-center">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-purple/10 text-purple">
              <MapPin size={23} aria-hidden="true" />
            </span>
            <div className="flex-1">
              <h2 className="font-heading text-xl font-extrabold text-navy">Catchment and referral reach</h2>
              <p className="mt-1 text-sm leading-6 text-text-secondary">
                Referrals from London are welcomed. Other counties and cities
                are considered case by case and are not guaranteed.
              </p>
            </div>
            <Link href="/community#catchment-area" className="font-bold text-purple underline decoration-purple/35 underline-offset-4">
              Read the full guidance
            </Link>
          </AnimatedSection>
          <AnimatedSection className="mb-10 text-center">
            <h2 className="font-heading text-4xl font-extrabold text-navy sm:text-5xl">
              Make a Referral
            </h2>
            <p className="mt-4 text-text-secondary">
              Professional first-contact form with consent and emergency
              boundary checks.
            </p>
          </AnimatedSection>
          <ProfessionalReferralForm />
        </div>
      </section>

      <section className="bg-cream-dark px-4 py-20 text-center sm:px-6 lg:px-8">
        <AnimatedSection className="mx-auto max-w-3xl">
          <h2 className="font-heading text-4xl font-extrabold text-navy">
            Want to Partner With Us?
          </h2>
          <p className="mt-5 leading-8 text-text-secondary">
            We welcome conversations with organisations that share a commitment
            to community wellbeing, consent-aware working and safeguarding.
          </p>
          <Button href="/contact" variant="secondary" className="mt-7">
            Get In Touch
          </Button>
        </AnimatedSection>
      </section>
    </>
  );
}
