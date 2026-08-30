import type { Metadata } from "next";
import Image from "next/image";
import {
  ArrowRight,
  ClipboardCheck,
  FileHeart,
  HandHeart,
  HeartPulse,
  House,
  Palette,
  ShieldCheck,
} from "lucide-react";

import { CTABanner } from "@/components/home/CTABanner";
import { PageHero } from "@/components/shared/PageHero";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "People Who Care",
  description:
    "Social care professionals, a pastoral care leader and trained dedicated volunteers supporting people through I-Care Services CIC.",
  alternates: { canonical: "/team" },
};

const teamFunctions = [
  {
    title: "First Contact & Coordination",
    description:
      "Receives enquiries, listens to what matters, records the minimum information needed and helps identify a suitable next step.",
    support: ["Initial enquiries", "Referral coordination", "Follow-up planning"],
    icon: ClipboardCheck,
  },
  {
    title: "Health & Social Care Navigation",
    description:
      "Helps people understand health and social care routes, prepare questions and connect with appropriate services.",
    support: ["NHS navigation", "Care pathways", "Health advocacy"],
    icon: HeartPulse,
  },
  {
    title: "Housing & Welfare Guidance",
    description:
      "Offers practical guidance with housing concerns, welfare systems, forms and routes to specialist advice.",
    support: ["Housing options", "Benefits guidance", "Specialist signposting"],
    icon: House,
  },
  {
    title: "Mental Wellbeing Support",
    description:
      "Provides one-to-one mental health first aid, an initial needs and safety assessment, and referral to appropriate services. Psychology and counselling are provided by third parties.",
    support: ["Mental health first aid", "Initial assessment", "Referral coordination"],
    icon: FileHeart,
  },
  {
    title: "Family & Safeguarding Support",
    description:
      "Supports families to understand options while keeping consent, safety and safeguarding responsibilities clear.",
    support: ["Family guidance", "Safe next steps", "Safeguarding routes"],
    icon: ShieldCheck,
  },
  {
    title: "Creative Wellbeing & Outreach",
    description:
      "Uses accessible creative activities and community engagement to encourage reflection, confidence and connection.",
    support: ["Creative activities", "Community outreach", "Inclusive engagement"],
    icon: Palette,
  },
] as const;

export default function TeamPage() {
  return (
    <>
      <PageHero
        title="People Who Care"
        subtitle="Social care professionals, a pastoral care leader and trained dedicated volunteers, united by careful listening"
        eyebrow="Approachable, skilled and community-focused"
        visualVariant="team"
        breadcrumb="Our Team"
        serviceImage="/images/community/team-support-plan.webp"
        serviceImageAlt="Team members reviewing an anonymised support plan, calendar and referral cards"
      />

      <div>
        <section className="bg-white">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1fr_0.8fr] lg:px-8 lg:py-24">
            <AnimatedSection variant="slideInLeft">
              <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-purple">
                One connected team
              </p>
              <h2 className="mt-4 font-heading text-5xl font-semibold tracking-[-0.04em] text-navy sm:text-6xl">
                Support from people who listen first
              </h2>
              <p className="mt-6 text-base leading-8 text-text-secondary sm:text-lg">
                Our team brings together social care professionals, a pastoral
                care leader and trained dedicated volunteers. Together, they
                help people navigate health, housing, welfare, mental
                wellbeing, family life and community support. Individual names
                and photographs are not currently published on this website.
              </p>
              <p className="mt-4 leading-8 text-text-secondary">
                Community religious support is also available for people who
                want faith, belief or spiritual wellbeing to be part of the
                conversation, always without pressure or judgement.
              </p>
              <p className="mt-4 leading-8 text-text-secondary">
                We offer clinical support from Doctors, Nurses, and Social Workers.
              </p>
              <p className="mt-4 leading-8 text-text-secondary">
                Where a need falls outside our role, the team explains that
                boundary and helps identify an appropriate statutory,
                regulated or specialist service.
              </p>
            </AnimatedSection>

            <AnimatedSection variant="slideInRight">
              <figure className="overflow-hidden rounded-[2rem] bg-navy shadow-[var(--shadow-hover)]">
                <div className="relative aspect-[4/3]">
                  <Image
                    src="/images/community/team-support-plan.webp"
                    alt="Team members reviewing an anonymised support plan, calendar and referral cards"
                    fill
                    sizes="(min-width: 1024px) 40vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className="px-6 py-4 text-sm font-semibold leading-6 text-white/75">
                  Illustrative team-planning image. Individual I-Care staff are
                  not shown on this website.
                </figcaption>
              </figure>
            </AnimatedSection>
          </div>
        </section>

        <section className="bg-cream-dark">
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
            <AnimatedSection className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-purple">
                How we work
              </p>
              <h2 className="mt-4 font-heading text-5xl font-semibold text-navy sm:text-6xl">
                Different skills, one caring team
              </h2>
              <p className="mt-5 leading-8 text-text-secondary">
                These role-based areas explain how the team supports people
                without presenting unverified names, qualifications or
                professional registrations.
              </p>
            </AnimatedSection>

            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {teamFunctions.map(({ title, description, support, icon: Icon }) => (
                <AnimatedSection
                  key={title}
                  variant="scaleIn"
                  className="interactive-card flex h-full flex-col rounded-[2rem] border border-white bg-white p-7"
                >
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-purple/10 text-purple">
                    <Icon size={28} aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 font-heading text-xl font-extrabold text-navy">
                    {title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-7 text-text-secondary">
                    {description}
                  </p>
                  <ul className="mt-5 flex flex-wrap gap-2" aria-label={`${title} areas`}>
                    {support.map((item) => (
                      <li
                        key={item}
                        className="rounded-full bg-orange/15 px-3 py-1.5 text-xs font-bold text-navy"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto max-w-5xl px-4 py-20 text-center sm:px-6 lg:px-8">
            <AnimatedSection>
              <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-orange text-navy">
                <HandHeart size={30} aria-hidden="true" />
              </span>
              <h2 className="mt-6 font-heading text-4xl font-extrabold text-navy">
                Need Help Choosing a Service?
              </h2>
              <p className="mx-auto mt-5 max-w-2xl leading-8 text-text-secondary">
                You do not need to know which team function is right for you.
                Start with a short enquiry and we will help clarify the next
                step. We offer free, confidential, impartial advice without
                judgment. Private one-to-one support is available where needed.
              </p>
              <Button href="/get-support" className="mt-7 gap-2">
                Get Support
                <ArrowRight size={18} aria-hidden="true" />
              </Button>
            </AnimatedSection>
          </div>
        </section>
      </div>

      <CTABanner />
    </>
  );
}
