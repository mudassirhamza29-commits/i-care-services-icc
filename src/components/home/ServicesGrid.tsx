"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Brain,
  HeartHandshake,
  HeartPulse,
  House,
  HandHelping,
  Landmark,
  Palette,
  ShieldCheck,
  UsersRound,
} from "lucide-react";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SERVICES } from "@/lib/constants";
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

export function ServicesGrid() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <AnimatedSection className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-coral">
            Support for real life
          </p>
          <h2 className="mt-4 font-heading text-4xl font-extrabold tracking-[-0.04em] text-navy sm:text-5xl">
            How We Can Help You
          </h2>
          <p className="mt-5 text-base leading-8 text-text-secondary sm:text-lg">
            Whatever you are facing, our team will listen without judgement
            and help you find a practical way forward.
          </p>
        </AnimatedSection>

        <AnimatedSection
          variant="staggerContainer"
          className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3"
        >
          {SERVICES.map((service) => {
            const Icon = serviceIcons[service.icon];

            return (
              <motion.article
                key={service.id}
                variants={fadeInUp}
                className="interactive-card group flex min-h-72 flex-col rounded-3xl border border-cream-dark bg-cream/45 p-7 hover:-translate-y-1.5"
              >
                <div
                  className="flex h-14 w-14 items-center justify-center rounded-2xl"
                  style={{
                    backgroundColor: `${service.color}1F`,
                    color: service.color,
                  }}
                >
                  <Icon size={27} strokeWidth={2} aria-hidden="true" />
                </div>
                <h3 className="mt-6 font-heading text-xl font-extrabold text-navy">
                  {service.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-7 text-text-secondary">
                  {service.description}
                </p>
                <Link
                  href={`/services/${service.slug}`}
                  className="mt-6 inline-flex w-fit items-center gap-2 rounded-md text-sm font-bold text-purple focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-purple"
                  aria-label={`Learn more about ${service.title}`}
                >
                  Learn More
                  <ArrowUpRight
                    size={17}
                    className="transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1"
                    aria-hidden="true"
                  />
                </Link>
              </motion.article>
            );
          })}
        </AnimatedSection>
      </div>
    </section>
  );
}
