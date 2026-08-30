"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  HeartPulse,
  Home,
  MessageCircleHeart,
} from "lucide-react";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SERVICES } from "@/lib/constants";
import { fadeInUp } from "@/lib/animations";
import type { ServiceSlug } from "@/types";

const groups: Array<{
  title: string;
  introduction: string;
  icon: typeof Home;
  tint: string;
  slugs: ServiceSlug[];
}> = [
  {
    title: "Home, money and everyday life",
    introduction: "Practical help when housing, benefits or several worries are making daily life harder.",
    icon: Home,
    tint: "bg-[#fff1e8]",
    slugs: ["housing-support", "welfare-support", "additional-support"],
  },
  {
    title: "Health and social care",
    introduction: "Clear information and advocacy to help you understand care, appointments and your options.",
    icon: HeartPulse,
    tint: "bg-[#eaf7f4]",
    slugs: ["health-social-care", "general-health", "sexual-health"],
  },
  {
    title: "Feelings, family and wellbeing",
    introduction: "A calm place to talk, reflect and find an appropriate route for emotional or family support.",
    icon: MessageCircleHeart,
    tint: "bg-[#f4eff8]",
    slugs: ["mental-health", "family-support", "art-therapy"],
  },
];

export function ServicesGrid() {
  return (
    <section className="bg-white" id="how-we-help">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <AnimatedSection className="max-w-3xl">
          <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-purple">
            Start with what feels closest
          </p>
          <h2 className="mt-4 font-heading text-5xl font-semibold tracking-[-0.045em] text-navy sm:text-6xl">
            What would make life feel a little easier today?
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-8 text-text-secondary sm:text-lg">
            You do not need to know the name of a service. Choose the area that
            sounds most like what is happening, or simply contact us and we
            will help you find the right door.
          </p>
          <p className="mt-4 max-w-2xl text-base leading-8 text-text-secondary sm:text-lg">
            We are an advocacy service &mdash; we help raise your voice and make
            sure your views are heard.
          </p>
        </AnimatedSection>

        <AnimatedSection variant="staggerContainer" className="mt-12 grid gap-6 lg:grid-cols-3">
          {groups.map(({ title, introduction, icon: Icon, tint, slugs }) => {
            const services = SERVICES.filter((service) => slugs.includes(service.slug));
            return (
              <motion.article
                key={title}
                variants={fadeInUp}
                className={`interactive-card rounded-[2rem] p-6 sm:p-8 ${tint}`}
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-purple shadow-sm">
                  <Icon size={27} aria-hidden="true" />
                </span>
                <h3 className="mt-6 font-heading text-3xl font-semibold leading-tight text-navy">{title}</h3>
                <p className="mt-4 text-sm leading-7 text-text-secondary">{introduction}</p>
                <ul className="mt-7 divide-y divide-navy/10 border-y border-navy/10">
                  {services.map((service) => (
                    <li key={service.slug}>
                      <Link
                        href={`/services/${service.slug}`}
                        className="group flex min-h-14 items-center justify-between gap-3 py-3 font-bold text-navy focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple"
                      >
                        {service.title}
                        <ArrowUpRight size={18} className="shrink-0 text-purple transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden="true" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.article>
            );
          })}
        </AnimatedSection>

        <AnimatedSection className="mt-8 grid overflow-hidden rounded-[2rem] bg-navy text-white lg:grid-cols-[0.95fr_1.05fr]">
          <div className="relative min-h-72 lg:min-h-[25rem]">
            <Image
              src="/images/services/mental-health.webp"
              alt="A quiet, welcoming room prepared for a private wellbeing conversation"
              fill
              sizes="(min-width: 1024px) 48vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-14">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange text-navy">
              <MessageCircleHeart size={23} aria-hidden="true" />
            </span>
            <p className="mt-6 text-sm font-extrabold uppercase tracking-[0.18em] text-orange">Mental health &amp; wellbeing</p>
            <h3 className="mt-3 font-heading text-4xl font-semibold leading-tight sm:text-5xl">
              You do not have to wait until things feel unbearable.
            </h3>
            <div className="mt-6 grid max-w-xl gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <h4 className="font-heading text-lg font-semibold text-orange">In-house support</h4>
                <p className="mt-2 text-sm leading-6 text-white/72">
                  One-to-one mental health first aid, an initial needs and
                  safety conversation, practical support and agreed follow-up.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <h4 className="font-heading text-lg font-semibold text-orange">Referral pathways</h4>
                <p className="mt-2 text-sm leading-6 text-white/72">
                  Help connecting with primary care and suitable independent
                  third-party organisations. Psychology and counselling are
                  not delivered directly by I-Care.
                </p>
              </div>
            </div>
            <Link
              href="/services/mental-health"
              className="interactive-button mt-7 inline-flex w-fit items-center gap-2 rounded-full bg-orange px-6 py-3 font-extrabold text-navy focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange"
            >
              Find Mental Health Support
              <ArrowUpRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
