"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Check, HeartHandshake, ShieldCheck, UsersRound } from "lucide-react";

import { Button } from "@/components/ui/Button";
import { fadeInUp, slideInRight, staggerContainer } from "@/lib/animations";

const trustPoints = [
  "Free to Access",
  "Fully Confidential",
  "No Referral Needed",
];

const statChips = [
  { label: "500+ People Supported", icon: UsersRound, position: "left-0 top-8" },
  { label: "7 Services", icon: HeartHandshake, position: "right-0 top-1/2" },
  {
    label: "100% Confidential",
    icon: ShieldCheck,
    position: "bottom-8 left-6 sm:left-16",
  },
];

export function HeroSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative isolate flex min-h-[calc(100svh-5rem)] items-center overflow-hidden bg-cream">
      <div
        aria-hidden="true"
        className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-orange/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-purple/10 blur-3xl"
      />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-14 px-4 py-16 sm:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:gap-10 lg:px-8 lg:py-20">
        <motion.div
          variants={staggerContainer}
          initial={shouldReduceMotion ? false : "hidden"}
          animate="visible"
          className="relative z-10"
        >
          <motion.p
            variants={fadeInUp}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-purple/15 bg-white/70 px-4 py-2 text-sm font-bold text-purple shadow-sm backdrop-blur"
          >
            <span className="h-2 w-2 rounded-full bg-orange" />
            Community support in Stanmore, London
          </motion.p>
          <motion.h1
            variants={fadeInUp}
            className="max-w-3xl font-heading text-[clamp(3rem,7vw,5rem)] font-extrabold leading-[0.98] tracking-[-0.055em] text-navy"
          >
            Everyone Deserves Support.
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className="mt-4 font-heading text-[clamp(2rem,4.5vw,3.75rem)] font-medium leading-tight tracking-[-0.04em] text-purple"
          >
            You&apos;re Not Alone.
          </motion.p>
          <motion.p
            variants={fadeInUp}
            className="mt-7 max-w-2xl text-base leading-8 text-text-secondary sm:text-lg"
          >
            I-Care Services ICC is a specialist community support hub in
            Stanmore, London, offering confidential, person-centred support
            across health, housing, mental wellbeing, family, and more.
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
              variant="secondary"
              className="px-7 py-3.5 text-base"
            >
              Explore Services
            </Button>
          </motion.div>
          <motion.ul
            variants={fadeInUp}
            className="mt-8 flex flex-col gap-3 text-sm font-semibold text-navy sm:flex-row sm:flex-wrap sm:gap-x-6"
          >
            {trustPoints.map((point) => (
              <li key={point} className="flex items-center gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-purple/10 text-purple">
                  <Check size={13} strokeWidth={3} aria-hidden="true" />
                </span>
                {point}
              </li>
            ))}
          </motion.ul>
        </motion.div>

        <motion.div
          variants={slideInRight}
          initial={shouldReduceMotion ? false : "hidden"}
          animate="visible"
          className="relative mx-auto min-h-[430px] w-full max-w-[550px] sm:min-h-[540px]"
          aria-label="A warm abstract illustration representing people connected in a supportive community"
          role="img"
        >
          <div className="absolute inset-[9%] rounded-[42%_58%_60%_40%/48%_35%_65%_52%] bg-purple/10" />
          <motion.div
            aria-hidden="true"
            animate={shouldReduceMotion ? undefined : { y: [0, -9, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-[13%] top-[17%] h-[48%] w-[47%] rounded-[55%_45%_48%_52%/58%_45%_55%_42%] bg-orange"
          />
          <motion.div
            aria-hidden="true"
            animate={shouldReduceMotion ? undefined : { y: [0, 10, 0] }}
            transition={{
              duration: 5.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.4,
            }}
            className="absolute bottom-[16%] right-[12%] h-[48%] w-[48%] rounded-[42%_58%_55%_45%/46%_52%_48%_54%] bg-purple"
          />
          <motion.div
            aria-hidden="true"
            animate={shouldReduceMotion ? undefined : { x: [0, 7, 0] }}
            transition={{
              duration: 4.8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.8,
            }}
            className="absolute bottom-[18%] left-[20%] h-[32%] w-[34%] rounded-[60%_40%_45%_55%/45%_60%_40%_55%] bg-coral"
          />
          <div
            aria-hidden="true"
            className="absolute left-[31%] top-[27%] h-16 w-16 rounded-full border-[12px] border-cream/80 sm:h-20 sm:w-20 sm:border-[15px]"
          />
          <div
            aria-hidden="true"
            className="absolute bottom-[30%] right-[26%] h-20 w-20 rounded-full border-[14px] border-white/65 sm:h-24 sm:w-24 sm:border-[17px]"
          />
          <div
            aria-hidden="true"
            className="absolute bottom-[28%] left-[31%] h-14 w-14 rounded-full border-[10px] border-navy/15 sm:h-16 sm:w-16"
          />

          {statChips.map(({ label, icon: Icon, position }, index) => (
            <motion.div
              key={label}
              initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: shouldReduceMotion ? 0 : 0.45,
                delay: shouldReduceMotion ? 0 : 0.65 + index * 0.15,
              }}
              className={`absolute ${position} flex items-center gap-2 rounded-2xl border border-white/80 bg-white/90 px-3 py-3 text-xs font-bold text-navy shadow-[var(--shadow-hover)] backdrop-blur sm:px-4 sm:text-sm`}
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-orange/15 text-coral">
                <Icon size={17} aria-hidden="true" />
              </span>
              {label}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
