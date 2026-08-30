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
    title: "Free, Impartial First Contact",
    description: "We offer free, confidential, impartial advice without judgment. Private one-to-one support is available where needed.",
    icon: Sparkles,
  },
];

export function WhyICareSection() {
  return (
    <section className="overflow-hidden bg-cream-dark">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16 lg:px-8 lg:py-28">
        <AnimatedSection variant="slideInLeft" className="relative">
          <div className="interactive-card group relative aspect-[4/3] overflow-hidden rounded-[2rem] bg-navy">
            <Image
              src="/images/home/support-route-review.webp"
              alt="Two people reviewing a simple support route with a phone, notebook and refreshments nearby"
              fill
              sizes="(min-width: 1024px) 46vw, 100vw"
              className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            />
            <span
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-navy/20 via-transparent to-transparent"
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
            <p className="mt-4 text-base leading-8 text-text-secondary sm:text-lg">
              Our community-led approach is shaped by <strong className="text-navy">I Know My Illness</strong>{" "}
              champions: people who understand that lived experience belongs
              alongside professional knowledge when support is planned.
            </p>
            <blockquote className="mt-6 rounded-3xl border-l-4 border-orange bg-white px-6 py-5 font-heading text-2xl font-semibold text-navy shadow-sm">
              &ldquo;We come to you.&rdquo;
              <span className="mt-2 block font-body text-sm font-semibold leading-6 text-text-secondary">
                Home visits can help reduce social isolation when leaving home
                or reaching services feels difficult. Availability is agreed
                case by case.
              </span>
            </blockquote>
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
