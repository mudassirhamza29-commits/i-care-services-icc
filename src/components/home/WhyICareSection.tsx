"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { HandHeart, HeartHandshake, ShieldCheck, Sparkles } from "lucide-react";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { fadeInUp } from "@/lib/animations";

const features = [
  {
    title: "Community-Based",
    description: "Support rooted in the needs and strengths of each person.",
    icon: HeartHandshake,
  },
  {
    title: "Fully Confidential",
    description: "Your privacy, dignity and trust guide every conversation.",
    icon: ShieldCheck,
  },
  {
    title: "Person-Centred",
    description: "Support shaped around your needs, choices and circumstances.",
    icon: HandHeart,
  },
  {
    title: "Free to Access",
    description: "Clear, compassionate guidance without cost being a barrier.",
    icon: Sparkles,
  },
];

export function WhyICareSection() {
  return (
    <section className="overflow-hidden bg-cream-dark">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16 lg:px-8 lg:py-28">
        <AnimatedSection variant="slideInLeft" className="relative">
          <div className="interactive-card relative aspect-[4/3] overflow-hidden rounded-[2rem] bg-white">
            <Image
              src="/images/advisor-listening.jpg"
              alt="A support advisor listening during a calm conversation"
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-6 left-6 rounded-3xl bg-white p-5 shadow-[var(--shadow-hover)]">
            <p className="font-heading text-3xl font-black text-purple">1:1</p>
            <p className="text-sm font-bold text-text-secondary">
              Support shaped around you
            </p>
          </div>
        </AnimatedSection>

        <div>
          <AnimatedSection variant="slideInRight">
            <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-purple">
              Why I-Care
            </p>
            <h2 className="mt-4 font-heading text-4xl font-extrabold leading-tight tracking-[-0.04em] text-navy sm:text-5xl">
              Care That Starts With Listening
            </h2>
            <p className="mt-6 text-base leading-8 text-text-secondary sm:text-lg">
              Asking for help can feel difficult. We make that first
              conversation simpler, warmer and focused on what matters to you.
            </p>
          </AnimatedSection>

          <AnimatedSection
            variant="staggerContainer"
            className="mt-8 grid gap-4 sm:grid-cols-2"
          >
            {features.map(({ title, description, icon: Icon }) => (
              <motion.article
                key={title}
                variants={fadeInUp}
                className="interactive-card rounded-3xl border border-white bg-white p-6 hover:-translate-y-1.5"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-purple/10 text-purple">
                  <Icon size={24} aria-hidden="true" />
                </div>
                <h3 className="mt-5 font-heading text-lg font-extrabold text-navy">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-7 text-text-secondary">
                  {description}
                </p>
              </motion.article>
            ))}
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
