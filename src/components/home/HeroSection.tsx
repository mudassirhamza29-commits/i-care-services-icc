"use client";

import { motion } from "framer-motion";
import { Check, Languages, ShieldAlert } from "lucide-react";

import { GraphicScene } from "@/components/graphics/GraphicScene";
import { Button } from "@/components/ui/Button";
import { fadeInUp, slideInRight, staggerContainer } from "@/lib/animations";
import { CRISIS_NOTICE, SUPPORTED_LANGUAGES_TEXT } from "@/lib/constants";

const trustPoints = [
  "Free to access",
  "Confidential within safeguarding limits",
  "Self-referral and professional routes",
  "Company number 16861714",
];

export function HeroSection() {
  return (
    <section className="relative isolate flex min-h-[calc(100svh-5rem)] items-center overflow-hidden bg-navy text-white">
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_18%_18%,rgba(244,132,95,0.28),transparent_30%),radial-gradient(circle_at_78%_22%,rgba(91,63,166,0.24),transparent_28%),linear-gradient(135deg,#2E3250_0%,#242844_56%,#5B3FA6_100%)]" />
      <div className="absolute -right-24 top-24 -z-10 h-80 w-80 rounded-full border-[48px] border-orange/20" />
      <div className="absolute bottom-8 left-1/2 -z-10 h-56 w-56 rounded-[40%_60%_58%_42%] bg-coral/20 blur-sm" />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial={false}
          animate="visible"
          className="relative z-10 max-w-3xl"
        >
          <motion.p
            variants={fadeInUp}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-bold text-white shadow-sm backdrop-blur"
          >
            <span className="h-2 w-2 rounded-full bg-orange" />
            Community support that meets you where you are
          </motion.p>
          <motion.h1
            variants={fadeInUp}
            className="font-heading text-[clamp(3.4rem,8vw,5rem)] font-black leading-[0.95] tracking-[-0.06em] text-white"
          >
            Everyone Deserves Support.
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className="mt-5 max-w-2xl text-xl font-medium leading-8 text-white/88 sm:text-2xl"
          >
            You&apos;re Not Alone.
          </motion.p>
          <motion.p
            variants={fadeInUp}
            className="mt-5 inline-flex items-center gap-2 rounded-full border border-orange/40 bg-orange/20 px-4 py-2 text-sm font-extrabold italic text-orange backdrop-blur"
          >
            <Languages size={17} aria-hidden="true" />
            We speak your language: {SUPPORTED_LANGUAGES_TEXT}
          </motion.p>
          <motion.p
            variants={fadeInUp}
            className="mt-7 max-w-2xl text-base leading-8 text-white/78 sm:text-lg"
          >
            I-Care Services CIC is a community support hub offering
            confidential, person-centred support across health, housing, mental
            wellbeing, family, and more.
          </motion.p>
          <motion.div
            variants={fadeInUp}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <Button href="/get-support" className="px-7 py-3.5 text-base">
              Get Support Today
            </Button>
            <Button
              href="/services"
              className="border-2 border-white bg-transparent px-7 py-3.5 text-base text-white hover:bg-white hover:text-navy"
            >
              Explore Services
            </Button>
          </motion.div>
          <motion.ul
            variants={fadeInUp}
            className="mt-8 flex flex-col gap-3 text-sm font-semibold text-white/86 sm:flex-row sm:flex-wrap sm:gap-x-6"
          >
            {trustPoints.map((point) => (
              <li key={point} className="flex items-center gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-orange text-navy">
                  <Check size={13} strokeWidth={3} aria-hidden="true" />
                </span>
                {point}
              </li>
            ))}
          </motion.ul>
          <motion.p
            variants={fadeInUp}
            className="mt-6 flex max-w-2xl items-start gap-2 rounded-2xl border border-white/15 bg-white/10 p-4 text-sm font-semibold leading-6 text-white/82"
          >
            <ShieldAlert className="mt-0.5 shrink-0 text-orange" size={18} aria-hidden="true" />
            {CRISIS_NOTICE}
          </motion.p>
        </motion.div>

        <motion.div
          variants={slideInRight}
          initial={false}
          animate="visible"
          className="relative min-h-[22rem] lg:min-h-[460px]"
          aria-hidden="true"
        >
          <GraphicScene variant="home" mode="hero" className="absolute inset-x-0 top-1/2 -translate-y-1/2 border-white/15" />
          <div className="absolute bottom-1 right-3 rounded-2xl border border-white/20 bg-navy/90 px-5 py-3 shadow-xl backdrop-blur">
            <p className="font-heading text-xl font-black text-orange">9 connected routes</p>
            <p className="text-xs font-semibold text-white/75">One clear place to start</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
