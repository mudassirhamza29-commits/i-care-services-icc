"use client";

import { motion } from "framer-motion";
import { Mail, MessageSquareText, Phone, ShieldAlert } from "lucide-react";

import { ContactForm } from "@/components/forms/ContactForm";
import { PageHero } from "@/components/shared/PageHero";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { CONTACT_INFO } from "@/lib/constants";
import { scaleIn } from "@/lib/animations";

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="We're here to listen. Reach out in whatever way feels right for you."
        breadcrumb="Contact Us"
        visualVariant="contact"
      />

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <AnimatedSection className="text-center">
            <h2 className="font-heading text-4xl font-extrabold text-navy sm:text-5xl">
              Get In Touch
            </h2>
          </AnimatedSection>
          <AnimatedSection
            variant="staggerContainer"
            className="mx-auto mt-12 grid max-w-4xl gap-6 md:grid-cols-2"
          >
            {[
              {
                icon: Phone,
                title: "Call Us",
                detail: CONTACT_INFO.phone,
                sub: "For non-emergency enquiries and support",
                label: "Call Now",
                href: "tel:+442080400433",
                style: "bg-orange text-navy",
              },
              {
                icon: Mail,
                title: "Email Us",
                detail: CONTACT_INFO.email,
                sub: "Not monitored for emergencies",
                label: "Send Email",
                href: `mailto:${CONTACT_INFO.email}`,
                style: "bg-purple text-white",
              },
            ].map((card) => (
              <motion.article
                key={card.title}
                variants={scaleIn}
                className="interactive-card flex flex-col rounded-[2rem] border border-cream-dark bg-cream/40 p-7 text-center"
              >
                <card.icon size={32} className="mx-auto text-coral" />
                <h3 className="mt-5 font-heading text-2xl font-extrabold text-navy">
                  {card.title}
                </h3>
                <p className="mt-3 flex-1 font-semibold leading-7 text-navy">
                  {card.detail}
                </p>
                <p className="mt-2 text-sm text-text-secondary">{card.sub}</p>
                <a
                  href={card.href}
                  className={`interactive-button mt-6 rounded-full px-5 py-3 text-sm font-extrabold ${card.style}`}
                >
                  {card.label}
                </a>
              </motion.article>
            ))}
          </AnimatedSection>
        </div>
      </section>

      <section className="bg-cream">
        <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <AnimatedSection>
            <ContactForm />
          </AnimatedSection>
        </div>
      </section>

      <section className="bg-cream-dark">
        <div className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center">
            <h2 className="font-heading text-4xl font-extrabold text-navy">
              Before You Contact Us
            </h2>
            <div className="mt-9 grid gap-4 text-left sm:grid-cols-2">
              <div className="rounded-3xl bg-white p-6 shadow-sm">
                <MessageSquareText className="text-purple" aria-hidden="true" />
                <h3 className="mt-4 font-heading text-lg font-extrabold text-navy">
                  Keep online messages brief
                </h3>
                <p className="mt-2 text-sm leading-7 text-text-secondary">
                  Share only enough information for first contact. Sensitive
                  details can be discussed later through a staffed process.
                </p>
              </div>
              <div className="rounded-3xl bg-white p-6 shadow-sm">
                <ShieldAlert className="text-coral" aria-hidden="true" />
                <h3 className="mt-4 font-heading text-lg font-extrabold text-navy">
                  Use crisis routes for urgent risk
                </h3>
                <p className="mt-2 text-sm leading-7 text-text-secondary">
                  This website and support service are not monitored 24/7 and
                  must not be used for emergencies.
                </p>
              </div>
            </div>
            <p className="mt-6 font-semibold leading-7 text-text-secondary">
              This website and our support service are not an emergency service
              and are not monitored 24/7. Emotional support (24/7): Samaritans
              — call <a href="tel:116123" className="text-purple">116 123</a> (free).
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="bg-navy px-4 py-16 text-center text-cream sm:px-6 lg:px-8">
        <AnimatedSection>
          <h2 className="font-heading text-3xl font-extrabold">
            I-Care Services CIC
          </h2>
          <div className="mt-5 space-y-2 text-white/70">
            <p>Company Limited by Guarantee</p>
            <p>Registration Number: {CONTACT_INFO.regNumber}</p>
          </div>
        </AnimatedSection>
      </section>
    </>
  );
}
