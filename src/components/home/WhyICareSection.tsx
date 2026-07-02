"use client";

import { motion } from "framer-motion";
import { ClipboardCheck, HandHeart, HeartHandshake, ShieldCheck, Sparkles } from "lucide-react";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { fadeInUp } from "@/lib/animations";

const features = [
  {
    title: "Community-Based",
    description: "Support rooted in the needs and strengths of each person.",
    icon: HeartHandshake,
  },
  {
    title: "Confidential Within Limits",
    description: "We explain safeguarding limits and handle information carefully.",
    icon: ShieldCheck,
  },
  {
    title: "Person-Centred",
    description: "Support shaped around your needs, choices and circumstances.",
    icon: HandHeart,
  },
  {
    title: "Access Policy Under Review",
    description: "We explain any access limits clearly before support begins.",
    icon: Sparkles,
  },
];

export function WhyICareSection() {
  return (
    <section className="overflow-hidden bg-cream-dark">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16 lg:px-8 lg:py-28">
        <AnimatedSection variant="slideInLeft" className="relative">
          <div className="interactive-card relative aspect-[4/3] overflow-hidden rounded-[2rem] bg-white">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_22%,rgba(244,132,95,0.26),transparent_30%),radial-gradient(circle_at_80%_72%,rgba(91,63,166,0.20),transparent_30%),linear-gradient(135deg,#FAF8F4,#F0ECE4)]" />
            <div className="absolute left-10 top-10 rounded-3xl bg-white p-5 shadow-sm">
              <ClipboardCheck className="text-purple" size={40} aria-hidden="true" />
              <p className="mt-3 text-sm font-extrabold text-navy">First contact</p>
            </div>
            <div className="absolute bottom-12 right-12 rounded-3xl bg-navy p-5 text-white shadow-sm">
              <ShieldCheck className="text-orange" size={40} aria-hidden="true" />
              <p className="mt-3 text-sm font-extrabold">Safeguarding limits</p>
            </div>
            <div className="absolute left-[42%] top-[38%] h-24 w-24 rounded-full border-[18px] border-orange/40" aria-hidden="true" />
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
