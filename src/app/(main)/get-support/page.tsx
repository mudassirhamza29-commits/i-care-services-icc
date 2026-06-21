import {
  Clock3,
  Handshake,
  LockKeyhole,
  Mail,
  Phone,
  PoundSterling,
  ShieldAlert,
  Zap,
} from "lucide-react";

import { SelfReferralForm } from "@/components/forms/SelfReferralForm";
import { PageHero } from "@/components/shared/PageHero";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { CONTACT_INFO } from "@/lib/constants";

const accessOptions = [
  {
    icon: Phone,
    title: "Speak to Someone Now",
    body: "Pick up the phone and speak directly with our team. Available Monday-Friday, 9am-5pm.",
    label: CONTACT_INFO.phone,
    href: "tel:+442080400433",
    button: "bg-orange text-navy",
  },
  {
    icon: Clock3,
    title: "Fill In Our Online Form",
    body: "Complete our self-referral form and our team will review your request as soon as possible.",
    label: "Start Your Referral",
    href: "#self-referral",
    button: "bg-navy text-white",
  },
  {
    icon: Mail,
    title: "Send Us a Message",
    body: `Prefer to write? Email us at ${CONTACT_INFO.email} and our team will respond as soon as possible.`,
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
      />

      <section className="bg-cream">
        <AnimatedSection className="mx-auto max-w-3xl px-4 py-20 text-center sm:px-6 lg:py-24">
          <h2 className="font-heading text-4xl font-extrabold tracking-[-0.04em] text-navy sm:text-5xl">
            You Don&apos;t Have to Face This Alone
          </h2>
          <p className="mt-6 text-base leading-8 text-text-secondary sm:text-lg">
            Whatever you&apos;re going through, whether it&apos;s a housing crisis,
            struggles with your mental health, welfare concerns, or something
            you can&apos;t quite name yet, I-Care Services ICC is here with
            non-judgemental guidance and clear next steps.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {[
              [LockKeyhole, "Confidential with safeguarding exceptions"],
              [PoundSterling, "No cost to enquire"],
              [Zap, "Prompt review"],
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
            <p className="mt-4 text-text-secondary">Information is handled carefully, with safeguarding exceptions explained in our policies.</p>
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
              ["We Receive Your Referral", "Within minutes of submission"],
              ["Review & Follow-Up", "We aim to review requests promptly"],
              ["Your Support Begins", "A tailored plan is created together"],
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

      <section className="bg-coral px-4 py-12 text-white sm:px-6 lg:px-8">
        <AnimatedSection className="mx-auto flex max-w-5xl flex-col gap-5 sm:flex-row sm:items-start">
          <ShieldAlert size={44} className="shrink-0" />
          <div>
            <h2 className="font-heading text-3xl font-extrabold">If You Are In Crisis Right Now</h2>
            <p className="mt-4 whitespace-pre-line text-base leading-8 text-white/90">
              {"If you or someone else is in immediate danger, please call 999.\nFor urgent mental health support: Samaritans 116 123 (free, 24/7)\nFor mental health crisis: NHS 111 (option 2)"}
            </p>
          </div>
        </AnimatedSection>
      </section>
    </>
  );
}
