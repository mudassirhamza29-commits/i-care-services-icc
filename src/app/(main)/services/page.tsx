"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  HandHelping,
  HeartPulse,
  Home,
  LockKeyhole,
  MessageCircleHeart,
} from "lucide-react";

import { CTABanner } from "@/components/home/CTABanner";
import { PageHero } from "@/components/shared/PageHero";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { fadeInUp } from "@/lib/animations";
import { DELIVERY_TYPES, SERVICES } from "@/lib/constants";
import type { Service, ServiceSlug } from "@/types";

const trustPoints = [
  "Free initial consultation",
  "Confidential within safeguarding limits",
  "Self-referral and professional routes",
];

const serviceGroups: Array<{
  title: string;
  description: string;
  icon: typeof Home;
  tint: string;
  slugs: ServiceSlug[];
}> = [
  {
    title: "Home, money and everyday life",
    description:
      "Practical guidance when housing, benefits, money or several worries are making daily life harder.",
    icon: Home,
    tint: "bg-[#fff1e8]",
    slugs: ["housing-support", "welfare-support", "additional-support"],
  },
  {
    title: "Health and social care",
    description:
      "Clear information, advocacy and referral support for health, care and private concerns.",
    icon: HeartPulse,
    tint: "bg-[#eaf7f4]",
    slugs: ["health-social-care", "general-health", "sexual-health"],
  },
  {
    title: "Feelings, family and wellbeing",
    description:
      "A calm place to talk, reflect and find an appropriate route for emotional or family support.",
    icon: MessageCircleHeart,
    tint: "bg-[#f4eff8]",
    slugs: ["mental-health", "family-support", "art-therapy"],
  },
];

const process = [
  {
    title: "Reach Out",
    description: "Call, email or complete our support form.",
  },
  {
    title: "First Contact",
    description: "We listen and identify what information is needed next.",
  },
  {
    title: "Support Plan",
    description: "Together, we agree practical next steps.",
  },
  {
    title: "Ongoing Support",
    description: "Follow-up depends on the agreed support route.",
  },
];

function ServiceOverviewCard({ service }: { service: Service }) {
  const deliveryTypes = DELIVERY_TYPES.slice(0, service.isSensitive ? 3 : 2);

  return (
    <motion.article
      variants={fadeInUp}
      className="interactive-card group flex h-full overflow-hidden rounded-[2rem] border border-navy/8 bg-white"
    >
      <div className="flex w-full flex-col">
        <div className="relative aspect-[16/9] overflow-hidden">
          <Image
            src={service.image}
            alt={service.imageAlt}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
            style={{ objectPosition: service.imagePosition }}
          />
          <span
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-navy/25 via-transparent to-transparent"
          />
          {service.isSensitive ? (
            <span className="absolute right-4 top-4 flex items-center gap-1.5 rounded-full bg-navy/90 px-3 py-1.5 text-xs font-extrabold text-white backdrop-blur-sm">
              <LockKeyhole size={13} aria-hidden="true" />
              Private support
            </span>
          ) : null}
        </div>

        <div className="flex flex-1 flex-col p-6 sm:p-7">
          <h3 className="font-heading text-3xl font-semibold leading-tight text-navy">
            {service.title}
          </h3>
          <p className="mt-3 flex-1 text-sm leading-7 text-text-secondary">
            {service.description}
          </p>
          <ul className="mt-6 flex flex-wrap gap-2" aria-label="Ways we may support you">
            {deliveryTypes.map((type) => (
              <li
                key={type}
                className="rounded-full bg-cream px-3 py-1.5 text-xs font-bold text-text-secondary"
              >
                {type}
              </li>
            ))}
          </ul>
          <Link
            href={`/services/${service.slug}`}
            className="mt-7 inline-flex min-h-11 w-fit items-center gap-2 rounded-full bg-purple px-5 py-2.5 text-sm font-extrabold text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-purple"
          >
            Learn about {service.title}
            <ArrowRight
              size={17}
              className="transition-transform group-hover:translate-x-1"
              aria-hidden="true"
            />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="How We Help"
        subtitle="You do not need to know which service to ask for. Start with what is happening, and we will help you find the right next step."
        eyebrow="People first. Services second."
        visualVariant="services"
      />

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <AnimatedSection className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-coral">
              One welcoming place to start
            </p>
            <h2 className="mt-4 font-heading text-4xl font-semibold tracking-[-0.04em] text-navy sm:text-5xl">
              What would make life feel a little easier today?
            </h2>
            <p className="mt-6 text-base leading-8 text-text-secondary sm:text-lg">
              Choose the area that sounds closest to what you are facing. It is
              also fine to contact us without choosing a service first.
            </p>
            <ul className="mt-8 flex flex-wrap justify-center gap-3">
              {trustPoints.map((point) => (
                <li
                  key={point}
                  className="flex items-center gap-2 rounded-full bg-cream px-4 py-2 text-sm font-bold text-navy"
                >
                  <Check size={16} className="text-coral" aria-hidden="true" />
                  {point}
                </li>
              ))}
            </ul>
          </AnimatedSection>

          <div className="mt-16 space-y-16">
            {serviceGroups.map(({ title, description, icon: Icon, tint, slugs }) => {
              const services = SERVICES.filter((service) => slugs.includes(service.slug));

              return (
                <section key={title} aria-labelledby={`group-${slugs[0]}`}>
                  <AnimatedSection className={`rounded-[2rem] p-6 sm:p-8 ${tint}`}>
                    <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
                      <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white text-purple shadow-sm">
                        <Icon size={27} aria-hidden="true" />
                      </span>
                      <div>
                        <h2
                          id={`group-${slugs[0]}`}
                          className="font-heading text-3xl font-semibold text-navy sm:text-4xl"
                        >
                          {title}
                        </h2>
                        <p className="mt-2 max-w-3xl leading-7 text-text-secondary">
                          {description}
                        </p>
                      </div>
                    </div>
                  </AnimatedSection>

                  <AnimatedSection
                    variant="staggerContainer"
                    className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
                  >
                    {services.map((service) => (
                      <ServiceOverviewCard key={service.slug} service={service} />
                    ))}
                  </AnimatedSection>
                </section>
              );
            })}
          </div>

          <AnimatedSection className="mt-16 rounded-[2rem] border border-purple/25 bg-purple/5 p-6 sm:p-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-purple text-white">
                <HandHelping size={24} aria-hidden="true" />
              </span>
              <div>
                <h2 className="font-heading text-2xl font-semibold text-navy">
                  Advocacy &amp; Support Across All Services
                </h2>
                <p className="mt-2 leading-7 text-text-secondary">
                  Our team can help you ask questions, explain your choices and
                  make your voice heard across every area of support.
                </p>
                <p className="mt-2 text-sm font-semibold leading-6 text-text-secondary">
                  Psychology and counselling are offered by independent
                  third-party providers. I-Care can support the referral route.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="bg-cream-dark">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <AnimatedSection className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-coral">
              Simple and supportive
            </p>
            <h2 className="mt-4 font-heading text-4xl font-semibold tracking-[-0.04em] text-navy sm:text-5xl">
              What happens after you contact us?
            </h2>
          </AnimatedSection>
          <AnimatedSection
            variant="staggerContainer"
            className="relative mt-12 grid gap-5 md:grid-cols-4"
          >
            <div
              aria-hidden="true"
              className="absolute left-[12.5%] right-[12.5%] top-8 hidden border-t-2 border-dashed border-purple/25 md:block"
            />
            {process.map((step, index) => (
              <motion.article
                key={step.title}
                variants={fadeInUp}
                className="relative rounded-3xl bg-white p-6 text-center shadow-sm"
              >
                <span className="relative z-10 mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-purple font-heading text-lg font-semibold text-white ring-8 ring-cream-dark">
                  {index + 1}
                </span>
                <h3 className="mt-6 font-heading text-xl font-semibold text-navy">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-text-secondary">
                  {step.description}
                </p>
              </motion.article>
            ))}
          </AnimatedSection>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
