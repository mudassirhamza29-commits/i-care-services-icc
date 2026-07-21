import {
  Clock3,
  Handshake,
  Languages,
  LockKeyhole,
  Mail,
  Phone,
  PoundSterling,
} from "lucide-react";

import { SelfReferralForm } from "@/components/forms/SelfReferralForm";
import { CrisisNotice } from "@/components/shared/CrisisNotice";
import { PageHero } from "@/components/shared/PageHero";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { CONTACT_INFO, SUPPORTED_LANGUAGES_TEXT } from "@/lib/constants";

const accessOptions = [
  {
    icon: Phone,
    title: "Speak to Someone Now",
    body: "Call the team using the published contact number. If nobody is available, use email or the first-contact form. This is not an emergency line.",
    label: CONTACT_INFO.phone,
    href: "tel:+442080400433",
    button: "bg-orange text-navy",
  },
  {
    icon: Clock3,
    title: "Fill In Our Online Form",
    body: "Complete a short first-contact form. Sensitive details can be discussed later through a staffed conversation.",
    label: "Request Contact",
    href: "#self-referral",
    button: "bg-navy text-white",
  },
  {
    icon: Mail,
    title: "Send Us a Message",
    body: `Prefer to write? Email us at ${CONTACT_INFO.email}. This inbox is not monitored for emergencies.`,
    label: CONTACT_INFO.email,
    href: `mailto:${CONTACT_INFO.email}`,
    button: "bg-purple text-white",
  },
];

export default function GetSupportPage() {
  return (
    <>
      <PageHero
        title="Get Support"
        subtitle="Taking the first step is the hardest part. We make everything else easy."
        breadcrumb="Get Support"
        visualVariant="contact"
      />

      <section className="bg-cream">
        <AnimatedSection className="mx-auto max-w-3xl px-4 py-20 text-center sm:px-6 lg:py-24">
          <h2 className="font-heading text-4xl font-extrabold tracking-[-0.04em] text-navy sm:text-5xl">
            You Don&apos;t Have to Face This Alone
          </h2>
          <p className="mt-6 text-base leading-8 text-text-secondary sm:text-lg">
            Whatever you&apos;re going through, whether it&apos;s a housing crisis,
            struggles with your mental health, welfare concerns, or something
            you can&apos;t quite name yet, I-Care Services CIC is here with
            non-judgemental guidance and clear next steps.
          </p>
          <CrisisNotice className="mt-8" />
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {[
              [LockKeyhole, "Confidential with safeguarding exceptions"],
              [PoundSterling, "Free to access"],
              [Languages, SUPPORTED_LANGUAGES_TEXT],
              [Handshake, "Non-Judgmental"],
            ].map(([Icon, label]) => {
              const PillIcon = Icon as typeof LockKeyhole;
              return (
                <span key={label as string} className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold text-navy shadow-sm">
                  <PillIcon size={16} className="text-coral" />{label as string}
                </span>
              );
            })}
          </div>
        </AnimatedSection>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <AnimatedSection className="text-center">
            <h2 className="font-heading text-4xl font-extrabold tracking-[-0.04em] text-navy sm:text-5xl">
              Choose How You&apos;d Like to Reach Us
            </h2>
          </AnimatedSection>
          <AnimatedSection variant="staggerContainer" className="mt-12 grid gap-6 lg:grid-cols-3">
            {accessOptions.map(({ icon: Icon, title, body, label, href, button }) => (
              <article key={title} className="interactive-card flex flex-col rounded-[2rem] border border-cream-dark bg-cream/40 p-7">
                <Icon size={32} className="text-coral" />
                <h3 className="mt-5 font-heading text-2xl font-extrabold text-navy">{title}</h3>
                <p className="mt-4 flex-1 leading-7 text-text-secondary">{body}</p>
                <a href={href} className={`interactive-button mt-7 rounded-full px-5 py-3 text-center text-sm font-extrabold ${button}`}>{label}</a>
              </article>
            ))}
          </AnimatedSection>
        </div>
      </section>

      <section id="self-referral" className="scroll-mt-24 bg-cream-dark">
        <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <AnimatedSection className="mb-10 text-center">
            <h2 className="font-heading text-4xl font-extrabold tracking-[-0.04em] text-navy sm:text-5xl">Self-Referral Form</h2>
            <p className="mt-4 text-text-secondary">This first-contact form collects the minimum information needed to get back to you.</p>
          </AnimatedSection>
          <SelfReferralForm />
        </div>
      </section>

      <section className="bg-navy text-white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center">
            <h2 className="font-heading text-4xl font-extrabold text-cream sm:text-5xl">What Happens After You Reach Out?</h2>
          </AnimatedSection>
          <AnimatedSection variant="staggerContainer" className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              ["We Receive Your Request", "Your form is sent through the configured secure submission route."],
              ["Review & Follow-Up", "The team reviews the first-contact information and follows up using your preferred method."],
              ["Next Steps", "We agree what information is needed and what support options may fit."],
            ].map(([title, body], index) => (
              <article key={title} className="rounded-3xl border border-white/10 bg-white/5 p-7 text-center">
                <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-orange font-heading font-extrabold text-navy">{index + 1}</span>
                <h3 className="mt-5 font-heading text-xl font-extrabold">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/70">{body}</p>
              </article>
            ))}
          </AnimatedSection>
        </div>
      </section>

      <section className="bg-white px-4 py-12 sm:px-6 lg:px-8">
        <AnimatedSection className="mx-auto max-w-5xl">
          <CrisisNotice />
        </AnimatedSection>
      </section>
    </>
  );
}
