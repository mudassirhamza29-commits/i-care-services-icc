"use client";

import { motion } from "framer-motion";
import { CalendarDays, Mail, Phone, XCircle } from "lucide-react";

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
                sub: "Monday - Friday, 9am - 5pm",
                label: "Call Now",
                href: "tel:+442080400433",
                style: "bg-orange text-navy",
              },
              {
                icon: Mail,
                title: "Email Us",
                detail: CONTACT_INFO.email,
                sub: "We aim to respond promptly",
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
              Opening Hours
            </h2>
            <div className="mt-9 overflow-hidden rounded-3xl bg-white text-left shadow-sm">
              {[
                ["Monday - Friday", "9:00am - 5:00pm", CalendarDays, "text-purple"],
                ["Saturday", "By Appointment Only", CalendarDays, "text-orange"],
                ["Sunday", "Closed", XCircle, "text-coral"],
                ["Bank Holidays", "Closed", XCircle, "text-coral"],
              ].map(([day, hours, Icon, color], index) => {
                const HoursIcon = Icon as typeof CalendarDays;
                return (
                  <div
                    key={day as string}
                    className={`flex items-center justify-between gap-4 p-5 ${
                      index ? "border-t border-cream-dark" : ""
                    }`}
                  >
                    <span className="font-bold text-navy">{day as string}</span>
                    <span className="flex items-center gap-2 text-right text-text-secondary">
                      {hours as string}
                      <HoursIcon size={18} className={color as string} />
                    </span>
                  </div>
                );
              })}
            </div>
            <p className="mt-6 font-semibold leading-7 text-text-secondary">
              For urgent support outside office hours, please call Samaritans
              on <a href="tel:116123" className="text-purple">116 123</a> (free, 24/7).
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="bg-navy px-4 py-16 text-center text-cream sm:px-6 lg:px-8">
        <AnimatedSection>
          <h2 className="font-heading text-3xl font-extrabold">
            I-Care Services ICC
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
