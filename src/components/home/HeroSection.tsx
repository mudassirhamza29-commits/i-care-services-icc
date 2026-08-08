"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Check, MessageCircle, ShieldAlert } from "lucide-react";

import { Button } from "@/components/ui/Button";
import { fadeInUp, slideInRight, staggerContainer } from "@/lib/animations";
import { CRISIS_NOTICE } from "@/lib/constants";

const trustPoints = [
  "Free to access",
  "No referral needed",
  "Confidential within safeguarding limits",
];

export function HeroSection() {
  return (
    <section className="soft-noise relative isolate overflow-hidden bg-[#fffaf2]">
      <div aria-hidden="true" className="absolute -left-24 top-28 h-64 w-64 rounded-full bg-orange/18 blur-2xl" />
      <div aria-hidden="true" className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-purple/12 blur-2xl" />

      <div className="mx-auto grid min-h-[calc(100svh-5rem)] max-w-[90rem] items-center gap-12 px-4 py-14 sm:px-6 sm:py-18 lg:grid-cols-[0.92fr_1.08fr] lg:px-8 lg:py-20">
        <motion.div
          variants={staggerContainer}
          initial={false}
          animate="visible"
          className="relative z-10 max-w-3xl"
        >
          <motion.p
            variants={fadeInUp}
            className="mb-6 inline-flex items-center gap-2 rounded-full bg-purple/10 px-4 py-2 text-sm font-extrabold text-purple"
          >
            <MessageCircle size={17} aria-hidden="true" />
            A welcoming place to start
          </motion.p>
          <motion.h1
            variants={fadeInUp}
            className="font-heading text-[clamp(4.2rem,10vw,7.7rem)] font-semibold leading-[0.84] tracking-[-0.065em] text-navy"
          >
            How Can
            <span className="block text-purple">I Help?</span>
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className="mt-7 max-w-xl text-xl font-semibold leading-8 text-navy sm:text-2xl sm:leading-9"
          >
            Whatever you&apos;re going through, you don&apos;t have to figure it
            out alone.
          </motion.p>
          <motion.p
            variants={fadeInUp}
            className="mt-5 max-w-2xl text-base leading-8 text-text-secondary sm:text-lg"
          >
            Sometimes you just need someone to listen, explain your options,
            or help you find the right practical, emotional, health or
            community support.
          </motion.p>
          <motion.div variants={fadeInUp} className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="/get-support" className="gap-2 px-7 py-3.5 text-base">
              Find Support
              <ArrowRight size={18} aria-hidden="true" />
            </Button>
            <Button
              href="/contact"
              className="border-2 border-navy bg-transparent px-7 py-3.5 text-base text-navy hover:bg-navy hover:text-white"
            >
              Talk to Us
            </Button>
          </motion.div>
          <motion.ul
            variants={fadeInUp}
            className="mt-8 flex flex-col gap-3 text-sm font-bold text-text-secondary sm:flex-row sm:flex-wrap sm:gap-x-5"
          >
            {trustPoints.map((point) => (
              <li key={point} className="flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-orange text-navy">
                  <Check size={14} strokeWidth={3} aria-hidden="true" />
                </span>
                {point}
              </li>
            ))}
          </motion.ul>
          <motion.p
            variants={fadeInUp}
            className="mt-6 flex max-w-xl items-start gap-2 text-xs font-semibold leading-5 text-text-secondary"
          >
            <ShieldAlert className="mt-0.5 shrink-0 text-coral" size={16} aria-hidden="true" />
            {CRISIS_NOTICE}
          </motion.p>
        </motion.div>

        <motion.div
          variants={slideInRight}
          initial={false}
          animate="visible"
          className="relative"
        >
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem_2rem_5rem_2rem] bg-cream-dark shadow-[0_28px_80px_rgba(26,26,46,0.18)] sm:aspect-[5/4] lg:aspect-[4/5] xl:aspect-[5/4]">
            <Image
              src="/images/community/hero-community.webp"
              alt="A diverse group of adults having a supportive conversation in a welcoming community room"
              fill
              priority
              sizes="(min-width: 1024px) 54vw, 100vw"
              className="object-cover"
            />
            <span aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-navy/22 via-transparent to-transparent" />
          </div>
          <div className="absolute -bottom-6 left-4 max-w-64 rounded-3xl bg-white p-5 shadow-[var(--shadow-hover)] sm:left-8">
            <p className="font-heading text-2xl font-semibold text-navy">People first.</p>
            <p className="mt-1 text-sm font-semibold leading-6 text-text-secondary">We listen before we decide what the next step should be.</p>
          </div>
          <div aria-hidden="true" className="absolute -right-5 -top-5 -z-10 h-32 w-32 rounded-full bg-orange" />
        </motion.div>
      </div>
    </section>
  );
}
