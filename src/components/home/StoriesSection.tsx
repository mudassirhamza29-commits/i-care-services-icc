import { MessageSquareQuote, ShieldCheck } from "lucide-react";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";

export function StoriesSection() {
  return (
    <section className="bg-cream-dark">
      <div className="mx-auto max-w-5xl px-4 py-20 text-center sm:px-6 lg:px-8 lg:py-24">
        <AnimatedSection>
          <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-3xl bg-white text-purple shadow-sm">
            <MessageSquareQuote size={29} aria-hidden="true" />
          </span>
          <p className="mt-7 text-sm font-extrabold uppercase tracking-[0.2em] text-purple">What people say</p>
          <h2 className="mt-4 font-heading text-5xl font-semibold tracking-[-0.045em] text-navy sm:text-6xl">Real words need real consent.</h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-text-secondary">
            We do not publish invented testimonials or private stories. This
            space will only contain feedback from people who have clearly
            agreed to share their words.
          </p>
          <p className="mx-auto mt-5 flex max-w-xl items-start justify-center gap-2 text-sm font-semibold leading-6 text-text-secondary">
            <ShieldCheck className="mt-0.5 shrink-0 text-purple" size={18} aria-hidden="true" />
            Names and identifying details will never be added without permission.
          </p>
          <Button href="/contact" className="mt-8">Share Feedback</Button>
        </AnimatedSection>
      </div>
    </section>
  );
}
