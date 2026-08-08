"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, HeartHandshake, Home, Rainbow, Sparkles } from "lucide-react";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { fadeInUp } from "@/lib/animations";

const communityRoutes = [
  {
    title: "Muslim Community Support",
    description: "Specialist Muslim in the City group support for Muslim people living with chronic disabilities and their peers.",
    icon: Sparkles,
  },
  {
    title: "Migrant & Refugee Support",
    description: "Dignified support for BMEA migrants and refugees facing health inequalities or barriers to services.",
    icon: Home,
  },
  {
    title: "LGBTQ+ Support",
    description: "A discreet, respectful space to talk about sexuality, identity, wellbeing or belonging.",
    icon: Rainbow,
  },
  {
    title: "Pastoral & Faith Support",
    description: "Space to talk about faith, spirituality, purpose or personal struggles with belief, with appropriate referral where needed.",
    icon: HeartHandshake,
  },
];

export function CommunitySupportSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl space-y-20 px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <AnimatedSection variant="slideInLeft">
            <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-purple">Peer support</p>
            <h2 className="mt-4 font-heading text-5xl font-semibold tracking-[-0.045em] text-navy sm:text-6xl">You&apos;re Not Alone</h2>
            <p className="mt-6 text-lg leading-8 text-text-secondary">
              Sometimes the most powerful support comes from someone who
              understands what you are going through. Monthly peer support and
              community groups create space for shared experience, practical
              encouragement and social connection.
            </p>
            <Link
              href="/support-groups"
              className="interactive-button mt-7 inline-flex items-center gap-2 rounded-full bg-purple px-6 py-3 font-extrabold text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-purple"
            >
              Explore Support Groups
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </AnimatedSection>
          <AnimatedSection variant="slideInRight" className="relative aspect-[4/3] overflow-hidden rounded-[2rem_5rem_2rem_2rem] shadow-[var(--shadow-hover)]">
            <Image
              src="/images/community/peer-support.webp"
              alt="A diverse peer-support group listening to one another in a community room"
              fill
              sizes="(min-width: 1024px) 54vw, 100vw"
              className="object-cover"
            />
          </AnimatedSection>
        </div>

        <div className="overflow-hidden rounded-[2.5rem] bg-navy text-white">
          <div className="relative min-h-80 lg:min-h-[30rem]">
            <Image
              src="/images/community/inclusive-community.webp"
              alt="An inclusive community gathering with people from different cultures talking in small groups"
              fill
              sizes="100vw"
              className="object-cover"
            />
            <span aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/70 to-navy/15" />
            <AnimatedSection className="relative z-10 max-w-2xl p-7 sm:p-10 lg:p-14">
              <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-orange">Support groups &amp; community</p>
              <h2 className="mt-4 font-heading text-5xl font-semibold tracking-[-0.045em] sm:text-6xl">Belonging matters.</h2>
              <p className="mt-5 max-w-xl text-lg leading-8 text-white/82">
                Our community routes are inclusive without asking anyone to
                hide the parts of themselves that matter.
              </p>
            </AnimatedSection>
          </div>
          <AnimatedSection variant="staggerContainer" className="grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {communityRoutes.map(({ title, description, icon: Icon }) => (
              <motion.article key={title} variants={fadeInUp} className="bg-navy p-6 sm:p-7">
                <Icon size={25} className="text-orange" aria-hidden="true" />
                <h3 className="mt-5 font-heading text-2xl font-semibold">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/68">{description}</p>
              </motion.article>
            ))}
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
