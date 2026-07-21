import { ProcessPathway } from "@/components/graphics/ProcessPathway";
import { CrisisNotice } from "@/components/shared/CrisisNotice";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const steps = [
  {
    title: "Tell us the basics",
    description:
      "Use the first-contact form, phone or email. Please keep public form details brief.",
  },
  {
    title: "We review the request",
    description:
      "The team reviews the information and uses your preferred contact method for follow-up.",
  },
  {
    title: "Emergency routes stay separate",
    description:
      "Immediate danger and urgent crisis support should use the listed emergency routes.",
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

        <AnimatedSection className="mt-12">
          <ProcessPathway steps={steps} />
        </AnimatedSection>

        <AnimatedSection className="mt-10">
          <CrisisNotice />
        </AnimatedSection>
      </div>
    </section>
  );
}
