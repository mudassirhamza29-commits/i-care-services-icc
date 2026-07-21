import { ClipboardCheck, MessageCircle, ShieldAlert } from "lucide-react";

import { CrisisNotice } from "@/components/shared/CrisisNotice";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const steps = [
  {
    title: "Tell us the basics",
    description:
      "Use the first-contact form, phone or email. Please keep public form details brief.",
    icon: MessageCircle,
  },
  {
    title: "We review the request",
    description:
      "The team reviews the information and uses your preferred contact method for follow-up.",
    icon: ClipboardCheck,
  },
  {
    title: "Emergency routes stay separate",
    description:
      "Immediate danger and urgent crisis support should use the listed emergency routes.",
    icon: ShieldAlert,
  },
];

export function ContactProcessSection() {
  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <AnimatedSection className="max-w-2xl">
          <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-purple">
            What happens next
          </p>
          <h2 className="mt-4 font-heading text-4xl font-extrabold tracking-[-0.04em] text-navy sm:text-5xl">
            A Clear First Step
          </h2>
          <p className="mt-5 text-base leading-8 text-text-secondary">
            Contact is free, confidential within safeguarding limits and kept
            separate from emergency and crisis routes.
          </p>
        </AnimatedSection>

        <AnimatedSection
          variant="staggerContainer"
          className="mt-12 grid gap-5 md:grid-cols-3"
        >
          {steps.map(({ title, description, icon: Icon }) => (
            <article key={title} className="interactive-card rounded-3xl bg-white p-7">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-purple/10 text-purple">
                <Icon size={24} aria-hidden="true" />
              </span>
              <h3 className="mt-5 font-heading text-xl font-extrabold text-navy">
                {title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-text-secondary">
                {description}
              </p>
            </article>
          ))}
        </AnimatedSection>

        <AnimatedSection className="mt-10">
          <CrisisNotice />
        </AnimatedSection>
      </div>
    </section>
  );
}
