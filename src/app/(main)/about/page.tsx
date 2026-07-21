import type { Metadata } from "next";
import {
  ArrowRight,
  Award,
  HandHeart,
  HeartHandshake,
  LockKeyhole,
  Network,
  Sparkles,
} from "lucide-react";

import { CTABanner } from "@/components/home/CTABanner";
import { PageHero } from "@/components/shared/PageHero";
import { GraphicScene } from "@/components/graphics/GraphicScene";
import { ProcessPathway } from "@/components/graphics/ProcessPathway";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { DELIVERY_TYPES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About I-Care Services",
  description:
    "Learn about I-Care Services, our values, approach, and person-centred community support model.",
  alternates: { canonical: "/about" },
};

const values = [
  {
    title: "Compassion",
    description: "We meet every person with warmth, patience and understanding.",
    icon: HandHeart,
  },
  {
    title: "Confidentiality",
    description: "Your privacy and dignity are protected at every step.",
    icon: LockKeyhole,
  },
  {
    title: "Inclusion",
    description: "Everyone is welcomed, respected and supported without judgement.",
    icon: Network,
  },
  {
    title: "Careful Practice",
    description: "We work carefully, document what needs review and avoid overpromising.",
    icon: Award,
  },
  {
    title: "Empowerment",
    description: "We help you make informed choices and move forward with confidence.",
    icon: Sparkles,
  },
  {
    title: "Community",
    description: "We build stronger local connections so nobody faces difficulty alone.",
    icon: HeartHandshake,
  },
];

const processSteps = [
  "First Contact",
  "Assessment",
  "Support Plan",
  "Review",
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About I-Care Services CIC"
        subtitle="A community-rooted hub built on compassion, trust, and practical support"
        visualVariant="about"
      />

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20 lg:px-8 lg:py-28">
          <AnimatedSection variant="slideInLeft">
            <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-coral">
              Our story
            </p>
            <h2 className="mt-4 font-heading text-4xl font-extrabold tracking-[-0.04em] text-navy sm:text-5xl">
              Built Around People, Not Systems
            </h2>
            <div className="mt-7 space-y-5 text-base leading-8 text-text-secondary">
              <p>
                I-Care Services CIC was founded on a simple belief: everyone
                deserves support, regardless of their circumstances, background
                or ability to navigate complex services alone.
              </p>
              <p>
                What began as a commitment to helping people find the right
                guidance has grown into a community hub supporting
                individuals and families with health, housing, welfare and
                emotional wellbeing.
              </p>
              <p>
                Our promise remains unchanged. We treat information with care,
                explain safeguarding exceptions clearly and help you take the
                next step with dignity and confidence.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection
            variant="slideInRight"
            className="rounded-[2rem] bg-cream p-6 shadow-[var(--shadow-soft)] sm:p-8"
          >
            {[
              ["Founded with purpose", "Support shaped by real community needs"],
              ["Community-rooted", "Approachable and easy to reach"],
              ["Open to everyone", "Inclusive guidance without barriers"],
            ].map(([title, description], index) => (
              <div
                key={title}
                className={`flex gap-4 py-5 ${
                  index > 0 ? "border-t border-cream-dark" : ""
                }`}
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-purple/10 font-heading text-lg font-extrabold text-purple">
                  0{index + 1}
                </span>
                <div>
                  <h3 className="font-heading text-lg font-extrabold text-navy">
                    {title}
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-text-secondary">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </AnimatedSection>
        </div>
      </section>

      <section className="bg-cream-dark">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <AnimatedSection className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-coral">
              Our values
            </p>
            <h2 className="mt-4 font-heading text-4xl font-extrabold tracking-[-0.04em] text-navy sm:text-5xl">
              What We Stand For
            </h2>
          </AnimatedSection>
          <AnimatedSection
            variant="staggerContainer"
            className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          >
            {values.map(({ title, description, icon: Icon }) => (
              <article
                key={title}
                className="interactive-card rounded-3xl bg-white p-7"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange/15 text-coral">
                  <Icon size={25} aria-hidden="true" />
                </span>
                <h3 className="mt-5 font-heading text-xl font-extrabold text-navy">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-text-secondary">
                  {description}
                </p>
              </article>
            ))}
          </AnimatedSection>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl space-y-20 px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-20">
            <AnimatedSection
              variant="slideInLeft"
              className="relative overflow-hidden rounded-[2rem] bg-navy p-6"
            >
              <GraphicScene variant="services" mode="card" className="mx-auto" />
            </AnimatedSection>
            <AnimatedSection variant="slideInRight">
              <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-coral">
                Our approach
              </p>
              <h2 className="mt-4 font-heading text-4xl font-extrabold tracking-[-0.04em] text-navy">
                Person-Centred From Day One
              </h2>
              <p className="mt-5 leading-8 text-text-secondary">
                We begin by listening carefully, understanding the whole
                situation and agreeing a plan that reflects your priorities.
              </p>
              <ProcessPathway steps={processSteps.map((title) => ({ title }))} columns={2} className="mt-8" />
            </AnimatedSection>
          </div>

          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-20">
            <AnimatedSection variant="slideInLeft" className="lg:order-1">
              <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-coral">
                Ongoing support
              </p>
              <h2 className="mt-4 font-heading text-4xl font-extrabold tracking-[-0.04em] text-navy">
                Always in Your Corner
              </h2>
              <p className="mt-5 leading-8 text-text-secondary">
                Support should feel consistent, not fragmented. We stay
                connected, review what is working and adjust the plan when your
                needs or circumstances change.
              </p>
              <p className="mt-4 leading-8 text-text-secondary">
                When another support route is needed, we help make that
                connection clear and manageable so you are never left wondering
                what happens next.
              </p>
            </AnimatedSection>
            <AnimatedSection
              variant="slideInRight"
              className="relative overflow-hidden rounded-[2rem] bg-navy p-6 lg:order-2"
            >
              <GraphicScene variant="contact" mode="card" className="mx-auto" />
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="bg-navy text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <AnimatedSection className="text-center">
            <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-orange">
              Flexible by design
            </p>
            <h2 className="mt-4 font-heading text-4xl font-extrabold tracking-[-0.04em] sm:text-5xl">
              Ways We Support You
            </h2>
            <div className="mt-9 flex flex-wrap justify-center gap-3">
              {DELIVERY_TYPES.map((type) => (
                <span
                  key={type}
                  className="interactive-button inline-flex min-h-12 items-center gap-2 rounded-full border border-white/25 px-5 py-3 text-sm font-bold hover:border-orange hover:bg-orange hover:text-navy"
                >
                  {type}
                  <ArrowRight size={16} aria-hidden="true" />
                </span>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
