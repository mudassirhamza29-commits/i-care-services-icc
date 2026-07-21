import { ArrowRight, PhoneCall } from "lucide-react";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";
import { CONTACT_INFO, CRISIS_NOTICE } from "@/lib/constants";

export function CTABanner() {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <AnimatedSection
        variant="scaleIn"
        className="relative isolate mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-navy px-6 py-14 text-center text-white shadow-[var(--shadow-hover)] sm:px-10 lg:py-20"
      >
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-navy via-navy to-purple" />
        <div className="absolute -left-24 -top-24 z-0 h-64 w-64 rounded-full border-[44px] border-orange/20" />
        <div className="absolute -bottom-28 right-10 z-0 h-72 w-72 rounded-[44%_56%_60%_40%] bg-coral/18" />
        <div className="relative z-10 mx-auto max-w-3xl">
          <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-orange">
            We are here to listen
          </p>
          <h2 className="mt-4 font-heading text-4xl font-extrabold tracking-[-0.04em] sm:text-5xl lg:text-6xl">
            Ready to Take the First Step?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/78 sm:text-lg">
            You do not need to have everything figured out. Tell us what is
            happening, and we will help you understand what support is
            available.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button href="/get-support" className="gap-2 px-7 py-3.5 text-base">
              Get Support
              <ArrowRight size={18} aria-hidden="true" />
            </Button>
            <Button
              href="/for-professionals"
              className="gap-2 border-2 border-white bg-transparent px-7 py-3.5 text-base text-white hover:bg-white hover:text-navy"
            >
              Refer a Client
              <ArrowRight size={18} aria-hidden="true" />
            </Button>
          </div>
          <a
            href="tel:+442080400433"
            className="interactive-button mt-7 inline-flex items-center gap-2 rounded-full px-3 py-2 text-sm font-semibold text-white/82 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange"
          >
            <PhoneCall size={17} aria-hidden="true" />
            Or call us on {CONTACT_INFO.phone}
          </a>
          <p className="mx-auto mt-4 max-w-2xl text-xs font-semibold leading-5 text-white/70">
            {CRISIS_NOTICE}
          </p>
        </div>
      </AnimatedSection>
    </section>
  );
}
