"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Check, HeartHandshake, Languages, ShieldCheck } from "lucide-react";

import { Button } from "@/components/ui/Button";
import { fadeInUp, slideInRight, staggerContainer } from "@/lib/animations";

const trustPoints = [
  "Free to Access",
  "Fully Confidential",
  "No Referral Needed",
];

export function HeroSection() {
  return (
    <section className="relative isolate flex min-h-[calc(100svh-5rem)] items-center overflow-hidden bg-navy text-white">
      <Image
        src="/images/hero-bg.jpg"
        alt=""
        fill
        priority
        fetchPriority="high"
        sizes="100vw"
        className="absolute inset-0 -z-20 object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-navy/95 via-navy/82 to-navy/35" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_20%,rgba(42,127,111,0.35),transparent_32%),radial-gradient(circle_at_70%_70%,rgba(244,162,97,0.22),transparent_28%)]" />

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
            We Speak Your Language
          </motion.p>
          <motion.p
            variants={fadeInUp}
            className="mt-7 max-w-2xl text-base leading-8 text-white/78 sm:text-lg"
          >
            I-Care Services ICC is a specialist community support hub offering
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
        </motion.div>

        <motion.div
          variants={slideInRight}
          initial={false}
          animate="visible"
          className="relative hidden min-h-[460px] lg:block"
          aria-hidden="true"
        >
          <div className="absolute right-0 top-8 w-80 rounded-[2rem] border border-white/15 bg-white/12 p-5 shadow-[var(--shadow-hover)] backdrop-blur-xl">
            <div className="flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange text-navy">
                <HeartHandshake size={24} />
              </span>
              <div>
                <p className="text-3xl font-black text-white">Many</p>
                <p className="text-sm font-semibold text-white/72">
                  People Supported
                </p>
              </div>
            </div>
          </div>
          <div className="absolute left-8 top-40 w-64 rounded-[2rem] border border-white/15 bg-white/12 p-5 shadow-[var(--shadow-hover)] backdrop-blur-xl">
            <div className="flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-purple text-white">
                <ShieldCheck size={24} />
              </span>
              <div>
                <p className="text-3xl font-black text-white">Careful</p>
                <p className="text-sm font-semibold text-white/72">
                  Data Handling
                </p>
              </div>
            </div>
          </div>
          <div className="absolute bottom-10 right-12 w-56 rounded-[2rem] border border-white/15 bg-white/12 p-5 shadow-[var(--shadow-hover)] backdrop-blur-xl">
            <p className="text-3xl font-black text-white">9</p>
            <p className="text-sm font-semibold text-white/72">
              Connected Services
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
