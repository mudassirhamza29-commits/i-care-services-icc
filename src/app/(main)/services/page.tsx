"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Brain,
  Check,
  HeartHandshake,
  HeartPulse,
  HandHelping,
  House,
  Landmark,
  LockKeyhole,
  Palette,
  ShieldCheck,
  UsersRound,
} from "lucide-react";

import { CTABanner } from "@/components/home/CTABanner";
import { PageHero } from "@/components/shared/PageHero";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { DELIVERY_TYPES, SERVICES } from "@/lib/constants";
import { fadeInUp } from "@/lib/animations";
import type { ServiceIconName } from "@/types";

const serviceIcons = {
  HeartHandshake,
  Landmark,
  House,
  HeartPulse,
  Brain,
  UsersRound,
  ShieldCheck,
  Palette,
  HandHelping,
} satisfies Record<ServiceIconName, typeof HeartHandshake>;

const trustPoints = ["Free", "Confidential", "No Referral Needed"];
const process = [
  {
    title: "Reach Out",
    description: "Call, email or complete our support form.",
  },
  {
    title: "Initial Assessment",
    description: "We listen and understand what is happening.",
  },
  {
    title: "Support Plan",
    description: "Together, we agree practical next steps.",
  },
  {
    title: "Ongoing Support",
    description: "We stay connected and review your progress.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Our Services"
        subtitle="Specialist support across every area of your life"
        eyebrow="Support that meets you where you are"
      />

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <AnimatedSection className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-coral">
              One place to start
            </p>
            <h2 className="mt-4 font-heading text-4xl font-extrabold tracking-[-0.04em] text-navy sm:text-5xl">
              Whatever You&apos;re Facing, We Have Support For You
            </h2>
            <p className="mt-6 text-base leading-8 text-text-secondary sm:text-lg">
              Our services work together, so you can get practical guidance
              without being passed between disconnected systems.
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

          <AnimatedSection
            variant="staggerContainer"
            className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {SERVICES.map((service) => {
              const Icon = serviceIcons[service.icon];
              const deliveryTypes = DELIVERY_TYPES.slice(
                0,
                service.isSensitive ? 3 : 2,
              );

              return (
                <motion.article
                  key={service.slug}
                  variants={fadeInUp}
                  className="interactive-card group flex overflow-hidden rounded-[2rem] border border-cream-dark bg-white"
                >
                  <div className="flex w-full flex-col">
                    <div
                      className="h-3"
                      style={{ backgroundColor: service.color }}
                    />
                    <div className="flex flex-1 flex-col p-7">
                      <div className="flex items-start justify-between gap-4">
                        <span
                          className="flex h-14 w-14 items-center justify-center rounded-2xl"
                          style={{
                            backgroundColor: `${service.color}1F`,
                            color: service.color,
                          }}
                        >
                          <Icon size={27} aria-hidden="true" />
                        </span>
                        {service.isSensitive && (
                          <span className="flex items-center gap-1.5 rounded-full bg-coral/10 px-3 py-1.5 text-xs font-extrabold text-coral">
                            Safe Space
                            <LockKeyhole size={13} aria-hidden="true" />
                          </span>
                        )}
                      </div>
                      <h3 className="mt-6 font-heading text-2xl font-extrabold text-navy">
                        {service.title}
                      </h3>
                      <p className="mt-3 flex-1 text-sm leading-7 text-text-secondary">
                        {service.description}
                      </p>
                      <ul className="mt-6 flex flex-wrap gap-2">
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
                        className="mt-7 inline-flex w-fit items-center gap-2 rounded-md font-bold text-purple focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-purple"
                      >
                        Learn More
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
            })}
          </AnimatedSection>
          <AnimatedSection className="mt-8 rounded-3xl border border-purple/25 bg-purple/5 p-6 sm:p-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-purple text-white">
                <HandHelping size={24} aria-hidden="true" />
              </span>
              <div>
                <h3 className="font-heading text-xl font-extrabold text-navy">
                  Advocacy &amp; Support Across All Services
                </h3>
                <p className="mt-2 leading-7 text-text-secondary">
                  Our team advocates on your behalf across every service we
                  offer, ensuring your voice is heard and your rights are
                  upheld.
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
            <h2 className="mt-4 font-heading text-4xl font-extrabold tracking-[-0.04em] text-navy sm:text-5xl">
              How It Works
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
                <span className="relative z-10 mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-purple font-heading text-lg font-extrabold text-white ring-8 ring-cream-dark">
                  {index + 1}
                </span>
                <h3 className="mt-6 font-heading text-lg font-extrabold text-navy">
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
