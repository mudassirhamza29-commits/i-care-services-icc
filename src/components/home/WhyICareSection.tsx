"use client";

import { motion } from "framer-motion";
import { HandHeart, HeartHandshake, ShieldCheck, Sparkles } from "lucide-react";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { fadeInUp } from "@/lib/animations";

const features = [
  {
    title: "Community-Based",
    description: "Support rooted in the needs and strengths of each community.",
    icon: HeartHandshake,
    color: "bg-orange/15 text-coral",
  },
  {
    title: "Fully Confidential",
    description: "Your privacy, dignity and trust guide every conversation.",
    icon: ShieldCheck,
    color: "bg-purple/10 text-purple",
  },
  {
    title: "Person-Centred",
    description: "Support shaped around your needs, choices and circumstances.",
    icon: HandHeart,
    color: "bg-coral/10 text-coral",
  },
  {
    title: "Free to Access",
    description: "Clear, compassionate guidance without cost being a barrier.",
    icon: Sparkles,
    color: "bg-navy/10 text-navy",
  },
];

export function WhyICareSection() {
  return (
    <section className="overflow-hidden bg-cream">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20 lg:px-8 lg:py-28">
        <AnimatedSection variant="slideInLeft">
          <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-coral">
            Why I-Care
          </p>
          <h2 className="mt-4 font-heading text-4xl font-extrabold leading-tight tracking-[-0.04em] text-navy sm:text-5xl">
            Care That Starts With Listening
          </h2>
          <p className="mt-6 text-base leading-8 text-text-secondary sm:text-lg">
            Asking for help can feel difficult. We make that first conversation
            simpler, warmer and focused on what matters to you.
          </p>
          <p className="mt-4 text-base leading-8 text-text-secondary">
            Our team brings services together, helping you avoid repeating your
            story and giving you practical support at your own pace.
          </p>
        </AnimatedSection>

        <AnimatedSection
          variant="staggerContainer"
          className="grid gap-4 sm:grid-cols-2"
        >
          {features.map(({ title, description, icon: Icon, color }) => (
            <motion.article
              key={title}
              variants={fadeInUp}
              className="interactive-card rounded-3xl border border-white bg-white/85 p-6 hover:-translate-y-1.5"
            >
              <div
                className={`flex h-12 w-12 items-center justify-center rounded-2xl ${color}`}
              >
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
    </section>
  );
}
