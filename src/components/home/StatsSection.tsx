import { HandHeart, Languages, LockKeyhole, ShieldAlert } from "lucide-react";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
const trustItems = [
  {
    title: "Free first contact",
    label: "Free initial consultation and impartial guidance",
    icon: HandHeart,
  },
  {
    title: "Your language",
    label: "Tell us which language feels most comfortable",
    icon: Languages,
  },
  {
    title: "Start your way",
    label: "Contact us yourself or ask a professional to refer",
    icon: LockKeyhole,
  },
  {
    title: "Not 24/7",
    label: "Not an emergency service",
    icon: ShieldAlert,
  },
];

export function StatsSection() {
  return (
    <section className="overflow-hidden bg-navy text-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
        <AnimatedSection
          variant="staggerContainer"
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
        >
          {trustItems.map(({ title, label, icon: Icon }) => (
            <article
              key={title}
              className="rounded-3xl border border-white/10 bg-white/5 p-5 text-center backdrop-blur"
            >
              <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-orange text-navy">
                <Icon size={23} aria-hidden="true" />
              </span>
              <h2 className="mt-4 font-heading text-3xl font-semibold tracking-tight text-orange">
                {title}
              </h2>
              <p className="mt-2 text-sm font-semibold leading-6 text-white/72">
                {label}
              </p>
            </article>
          ))}
        </AnimatedSection>
      </div>
    </section>
  );
}
