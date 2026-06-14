import { ArrowRight } from 'lucide-react';
import { AnimatedSection } from '../ui/AnimatedSection';
import { Button } from '../ui/Button';
import { SectionWrapper } from '../ui/SectionWrapper';

export function FinalCTA(): JSX.Element {
  return (
    <SectionWrapper
      className="relative overflow-hidden bg-navy"
      labelledBy="final-cta-heading"
      containerClassName="relative text-center"
    >
      <div
        className="absolute -left-24 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full border-[3rem] border-white/5"
        aria-hidden="true"
      />
      <div
        className="absolute -right-16 bottom-0 h-52 w-52 rounded-full bg-gold/10"
        aria-hidden="true"
      />
      <AnimatedSection className="relative mx-auto max-w-3xl">
        <h2
          id="final-cta-heading"
          className="text-3xl font-bold text-white md:text-5xl"
        >
          You Don&apos;t Have to Face This Alone
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-white/80">
          A confidential conversation can be the first step towards clarity,
          stability, and meaningful support.
        </p>
        <Button to="/contact" variant="outline-light" size="lg" className="mt-8">
          Reach Out Today
          <ArrowRight className="h-5 w-5" aria-hidden="true" />
        </Button>
      </AnimatedSection>
    </SectionWrapper>
  );
}
