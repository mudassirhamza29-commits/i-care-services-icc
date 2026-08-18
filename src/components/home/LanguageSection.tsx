"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Languages, MessageCircle } from "lucide-react";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { fadeInUp } from "@/lib/animations";
import { SUPPORTED_LANGUAGES } from "@/lib/constants";

export function LanguageSection() {
  return (
    <section className="overflow-hidden bg-[#fff7ef]">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20 lg:px-8 lg:py-28">
        <AnimatedSection variant="slideInLeft" className="relative">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[5rem_2rem_2rem_2rem] shadow-[var(--shadow-hover)]">
            <Image
              src="/images/community/communication-choice-table.webp"
              alt="Hands using communication symbol cards, a telephone and a notebook around a community table"
              fill
              sizes="(min-width: 1024px) 52vw, 100vw"
              className="object-cover"
            />
          </div>
          <span className="absolute -bottom-5 right-6 flex h-16 w-16 items-center justify-center rounded-3xl bg-purple text-white shadow-xl" aria-hidden="true">
            <Languages size={29} />
          </span>
        </AnimatedSection>

        <div>
          <AnimatedSection variant="slideInRight">
            <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-purple">Communication without pressure</p>
            <h2 className="mt-4 font-heading text-5xl font-semibold tracking-[-0.045em] text-navy sm:text-6xl">
              We Speak Your Language
            </h2>
            <p className="mt-6 text-lg leading-8 text-text-secondary">
              Support feels different when you can speak in a language you are
              comfortable with. Tell us what language works best when you make
              first contact.
            </p>
          </AnimatedSection>

          <AnimatedSection variant="staggerContainer" className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
            {SUPPORTED_LANGUAGES.map((language) => (
              <motion.div
                key={language}
                variants={fadeInUp}
                className="flex min-h-24 flex-col justify-between rounded-2xl border border-orange/20 bg-white p-4 shadow-sm"
              >
                <MessageCircle size={20} className="text-orange" aria-hidden="true" />
                <p className="mt-4 font-extrabold text-navy">{language}</p>
              </motion.div>
            ))}
          </AnimatedSection>
          <p className="mt-5 text-sm leading-6 text-text-secondary">
            Language availability may depend on the team member or support
            route involved. We will explain the available options clearly.
          </p>
        </div>
      </div>
    </section>
  );
}
