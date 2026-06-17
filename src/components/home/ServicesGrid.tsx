"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, ShieldCheck } from "lucide-react";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SERVICES } from "@/lib/constants";
import { fadeInUp } from "@/lib/animations";

export function ServicesGrid() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <AnimatedSection className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-purple">
            Support for real life
          </p>
          <h2 className="mt-4 font-heading text-4xl font-extrabold tracking-[-0.04em] text-navy sm:text-5xl">
            How We Can Help You
          </h2>
          <p className="mt-5 text-base leading-8 text-text-secondary sm:text-lg">
            Whatever you are facing, our team will listen without judgement
            and help you find a practical way forward.
          </p>
        </AnimatedSection>

        <AnimatedSection
          variant="staggerContainer"
          className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {SERVICES.map((service, index) => (
            <motion.article
              key={service.id}
              variants={fadeInUp}
              className="interactive-card group overflow-hidden rounded-[1.75rem] border border-cream-dark bg-white hover:-translate-y-1.5"
            >
              <div className="relative aspect-[16/9] overflow-hidden bg-cream-dark">
                <Image
                  src={`/images/services/${service.slug}.jpg`}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  priority={index < 3}
                />
                {service.isSensitive ? (
                  <span className="absolute right-4 top-4 inline-flex items-center gap-1 rounded-full bg-navy/90 px-3 py-1 text-xs font-bold text-white backdrop-blur">
                    <ShieldCheck size={14} aria-hidden="true" />
                    Safe Space
                  </span>
                ) : null}
              </div>
              <div className="flex min-h-64 flex-col p-6">
                <h3 className="font-heading text-xl font-extrabold text-navy">
                  {service.title}
                </h3>
                <p className="mt-3 line-clamp-3 flex-1 text-sm leading-7 text-text-secondary">
                  {service.description}
                </p>
                <Link
                  href={`/services/${service.slug}`}
                  className="interactive-button mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-purple px-5 py-2.5 text-sm font-bold text-white hover:bg-orange hover:text-navy focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-purple"
                  aria-label={`Learn more about ${service.title}`}
                >
                  Learn More
                  <ArrowUpRight
                    size={17}
                    className="transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1"
                    aria-hidden="true"
                  />
                </Link>
              </div>
            </motion.article>
          ))}
        </AnimatedSection>
      </div>
    </section>
  );
}
