"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  ChevronDown,
  CircleDot,
  HandHeart,
  LockKeyhole,
} from "lucide-react";

import { CTABanner } from "@/components/home/CTABanner";
import { CrisisNotice } from "@/components/shared/CrisisNotice";
import { PageHero } from "@/components/shared/PageHero";
import type { SupportVisualVariant } from "@/components/shared/SupportVisual";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SERVICES } from "@/lib/constants";
import { fadeInUp } from "@/lib/animations";
import type { ServiceSlug } from "@/types";

interface OfferItem {
  title: string;
  description: string;
}

interface ExpectationStep {
  step: number;
  title: string;
  description: string;
}

interface FAQ {
  question: string;
  answer: string;
}

interface ServicePageTemplateProps {
  slug: ServiceSlug;
  title: string;
  color: string;
  description: string;
  whatWeOffer: OfferItem[];
  whoIsItFor: string[];
  whatToExpect: ExpectationStep[];
  faqs: FAQ[];
  isSensitive: boolean;
  confidentialityNote?: string;
}

export function ServicePageTemplate({
  slug,
  title,
  color,
  description,
  whatWeOffer,
  whoIsItFor,
  whatToExpect,
  faqs,
  isSensitive,
  confidentialityNote,
}: ServicePageTemplateProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const visualVariant: SupportVisualVariant = slug.includes("housing")
    ? "housing"
    : slug.includes("health")
      ? "health"
      : slug.includes("art") || slug.includes("mental")
        ? "wellbeing"
        : "community";
  const relatedServices = SERVICES.filter((service) => service.slug !== slug).slice(
    0,
    3,
  );

  return (
    <>
      <PageHero
        title={title}
        subtitle={description}
        eyebrow="Community support"
        accentColor={color}
        visualVariant={visualVariant}
        serviceSlug={slug}
      />

      {isSensitive ? (
        <section className="bg-white px-4 py-10 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <CrisisNotice />
          </div>
        </section>
      ) : null}

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <AnimatedSection className="max-w-2xl">
            <p
              className="text-sm font-extrabold uppercase tracking-[0.2em]"
              style={{ color }}
            >
              Practical help
            </p>
            <h2 className="mt-4 font-heading text-4xl font-extrabold tracking-[-0.04em] text-navy sm:text-5xl">
              What We Offer
            </h2>
          </AnimatedSection>
          <AnimatedSection
            variant="staggerContainer"
            className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          >
            {whatWeOffer.map((offer) => {
              const titleText = offer.title;
              const descriptionText = offer.description;

              return (
                <motion.article
                  key={titleText}
                  variants={fadeInUp}
                  className="interactive-card rounded-3xl border border-cream-dark bg-cream/45 p-6"
                >
                  <span
                    className="flex h-12 w-12 items-center justify-center rounded-2xl"
                    style={{ backgroundColor: `${color}1F`, color }}
                  >
                    <HandHeart size={24} aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 font-heading text-lg font-extrabold text-navy">
                    {titleText}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-text-secondary">
                    {descriptionText}
                  </p>
                </motion.article>
              );
            })}
          </AnimatedSection>
        </div>
      </section>

      <section className="bg-cream-dark">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:px-8 lg:py-24">
          <AnimatedSection variant="slideInLeft">
            <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-coral">
              Is this for me?
            </p>
            <h2 className="mt-4 font-heading text-4xl font-extrabold tracking-[-0.04em] text-navy">
              Who Is This For?
            </h2>
            <p className="mt-5 leading-8 text-text-secondary">
              You do not need a diagnosis, referral or perfectly explained
              situation. If any of these feel familiar, you can contact us.
            </p>
          </AnimatedSection>
          <AnimatedSection
            variant="staggerContainer"
            className="grid gap-3"
          >
            {whoIsItFor.map((item) => (
              <motion.div
                key={item}
                variants={fadeInUp}
                className="flex items-start gap-4 rounded-2xl bg-white p-5 shadow-sm"
              >
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-orange text-navy">
                  <Check size={15} strokeWidth={3} aria-hidden="true" />
                </span>
                <p className="font-semibold leading-7 text-navy">{item}</p>
              </motion.div>
            ))}
          </AnimatedSection>
        </div>
      </section>

      <section className="bg-navy text-white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <AnimatedSection className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-orange">
              A clear path forward
            </p>
            <h2 className="mt-4 font-heading text-4xl font-extrabold tracking-[-0.04em] sm:text-5xl">
              What To Expect
            </h2>
          </AnimatedSection>
          <AnimatedSection
            variant="staggerContainer"
            className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4"
          >
            {whatToExpect.map((item) => (
              <motion.article
                key={item.step}
                variants={fadeInUp}
                className="rounded-3xl border border-white/10 bg-white/5 p-6"
              >
                <span className="font-heading text-4xl font-extrabold text-orange">
                  {String(item.step).padStart(2, "0")}
                </span>
                <h3 className="mt-5 font-heading text-lg font-extrabold">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-white/65">
                  {item.description}
                </p>
              </motion.article>
            ))}
          </AnimatedSection>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 py-20 sm:px-6 lg:grid-cols-3 lg:px-8 lg:py-24">
          {[
            {
              title: "What We Cannot Do",
              body: "We are not an emergency service and cannot replace statutory, clinical, legal or regulated advice. Where specialist or emergency support is needed, we help identify appropriate routes.",
            },
            {
              title: "What To Prepare",
              body: "Bring only what you feel comfortable sharing at first contact. Useful basics may include your preferred contact method, the service area you are interested in and a short summary of what is happening.",
            },
            {
              title: "After You Contact Us",
              body: "We review first-contact requests as soon as possible, but this service is not monitored 24/7.",
            },
          ].map((item) => (
            <AnimatedSection
              key={item.title}
              className="rounded-3xl border border-cream-dark bg-cream/40 p-6"
            >
              <h2 className="font-heading text-2xl font-extrabold text-navy">
                {item.title}
              </h2>
              <p className="mt-3 text-sm leading-7 text-text-secondary">
                {item.body}
              </p>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {isSensitive && (
        <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
          <AnimatedSection
            variant="scaleIn"
            className="mx-auto flex max-w-5xl flex-col gap-6 rounded-[2rem] border-l-8 border-coral bg-navy p-7 text-white shadow-[var(--shadow-hover)] sm:flex-row sm:items-center sm:p-10"
          >
            <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-coral text-white">
              <LockKeyhole size={30} aria-hidden="true" />
            </span>
            <div>
              <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-orange">
                Your privacy matters
              </p>
              <h2 className="mt-2 font-heading text-2xl font-extrabold">
                Confidential, respectful support
              </h2>
              <p className="mt-3 leading-7 text-white/75">
                {confidentialityNote ??
                  "Information is handled carefully, with safeguarding and immediate safety limits explained."}
              </p>
            </div>
          </AnimatedSection>
        </section>
      )}

      <section className="bg-cream">
        <div className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <AnimatedSection className="text-center">
            <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-coral">
              Common questions
            </p>
            <h2 className="mt-4 font-heading text-4xl font-extrabold tracking-[-0.04em] text-navy sm:text-5xl">
              Frequently Asked Questions
            </h2>
          </AnimatedSection>
          <AnimatedSection className="mt-10 space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={faq.question}
                  className="overflow-hidden rounded-2xl border border-cream-dark bg-white"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${index}`}
                    className="flex w-full items-center justify-between gap-4 p-5 text-left font-heading font-extrabold text-navy sm:p-6"
                  >
                    {faq.question}
                    <ChevronDown
                      size={20}
                      className={`shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`faq-panel-${index}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                      >
                        <p className="px-5 pb-6 leading-7 text-text-secondary sm:px-6">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </AnimatedSection>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="font-heading text-3xl font-extrabold tracking-[-0.03em] text-navy sm:text-4xl">
              Related Services
            </h2>
          </AnimatedSection>
          <AnimatedSection
            variant="staggerContainer"
            className="mt-8 grid gap-5 md:grid-cols-3"
          >
            {relatedServices.map((service) => (
              <motion.article
                key={service.slug}
                variants={fadeInUp}
                className="interactive-card rounded-3xl border border-cream-dark bg-cream/40 p-6"
              >
                <CircleDot
                  size={28}
                  style={{ color: service.color }}
                  aria-hidden="true"
                />
                <h3 className="mt-5 font-heading text-xl font-extrabold text-navy">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-text-secondary">
                  {service.description}
                </p>
                <Link
                  href={`/services/${service.slug}`}
                  className="mt-5 inline-flex items-center gap-2 font-bold text-purple"
                >
                  Explore service
                  <ArrowRight size={17} aria-hidden="true" />
                </Link>
              </motion.article>
            ))}
          </AnimatedSection>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
