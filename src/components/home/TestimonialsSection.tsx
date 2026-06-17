"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { fadeInUp } from "@/lib/animations";

const testimonials = [
  {
    quote:
      "I was worried about losing my home and did not know who to speak to. I-Care helped me understand my options, complete the right forms and feel in control again.",
    attribution: "Housing support client",
    initials: "HS",
  },
  {
    quote:
      "The counselling support gave me a calm, private space to talk. I never felt rushed or judged, and for the first time in months I could see a way forward.",
    attribution: "Wellbeing support client",
    initials: "WB",
  },
  {
    quote:
      "The referral process was straightforward and the communication was excellent. Most importantly, our client felt heard and received practical support quickly.",
    attribution: "Community professional",
    initials: "CP",
  },
  {
    quote:
      "They explained everything in plain language and stayed patient with me. That made the process feel possible instead of overwhelming.",
    attribution: "Welfare support client",
    initials: "WS",
  },
];

export function TestimonialsSection() {
  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <AnimatedSection className="max-w-2xl">
          <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-purple">
            In their own words
          </p>
          <h2 className="mt-4 font-heading text-4xl font-extrabold tracking-[-0.04em] text-navy sm:text-5xl">
            Support That Makes a Difference
          </h2>
          <p className="mt-5 text-base leading-8 text-text-secondary">
            Shared anonymously to protect the privacy of the people and
            professionals we support.
          </p>
        </AnimatedSection>

        <AnimatedSection
          variant="staggerContainer"
          className="-mx-4 mt-12 flex snap-x gap-5 overflow-x-auto px-4 pb-4 [scrollbar-width:thin] sm:mx-0 sm:px-0"
        >
          {testimonials.map((testimonial) => (
            <motion.figure
              key={testimonial.attribution}
              variants={fadeInUp}
              className="interactive-card flex min-h-80 w-[86vw] shrink-0 snap-start flex-col rounded-3xl bg-white p-7 hover:-translate-y-1.5 sm:w-[28rem] sm:p-8"
            >
              <div className="flex items-center justify-between gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-purple to-navy font-heading text-sm font-black text-white">
                  {testimonial.initials}
                </div>
                <Quote
                  size={34}
                  fill="currentColor"
                  className="text-orange"
                  aria-hidden="true"
                />
              </div>
              <blockquote className="mt-6 flex-1 font-heading text-lg font-semibold leading-8 text-navy">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-7 border-t border-cream-dark pt-5 text-sm font-bold text-purple">
                {testimonial.attribution}
              </figcaption>
            </motion.figure>
          ))}
        </AnimatedSection>
      </div>
    </section>
  );
}
