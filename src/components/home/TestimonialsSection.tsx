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
  },
  {
    quote:
      "The counselling support gave me a calm, private space to talk. I never felt rushed or judged, and for the first time in months I could see a way forward.",
    attribution: "Wellbeing support client",
  },
  {
    quote:
      "The referral process was straightforward and the communication was excellent. Most importantly, our client felt heard and received practical support quickly.",
    attribution: "Local community professional",
  },
];

export function TestimonialsSection() {
  return (
    <section className="bg-cream-dark">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <AnimatedSection className="max-w-2xl">
          <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-coral">
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
          className="mt-12 grid gap-5 lg:grid-cols-3"
        >
          {testimonials.map((testimonial) => (
            <motion.figure
              key={testimonial.attribution}
              variants={fadeInUp}
              className="interactive-card flex min-h-80 flex-col rounded-3xl bg-white p-7 hover:-translate-y-1.5 sm:p-8"
            >
              <Quote
                size={38}
                fill="currentColor"
                className="text-orange"
                aria-hidden="true"
              />
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
