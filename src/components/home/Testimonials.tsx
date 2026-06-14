import { Quote, Star } from 'lucide-react';
import { TESTIMONIALS } from '../../lib/constants';
import { AnimatedSection } from '../ui/AnimatedSection';
import { Card } from '../ui/Card';
import { SectionWrapper } from '../ui/SectionWrapper';

export function Testimonials(): JSX.Element {
  return (
    <SectionWrapper
      className="bg-white dark:bg-navy-dark"
      labelledBy="testimonials-heading"
    >
      <AnimatedSection className="text-center">
        <span className="text-sm font-bold uppercase tracking-[0.2em] text-gold">
          Stories of Change
        </span>
        <h2
          id="testimonials-heading"
          className="mt-3 text-3xl font-bold text-navy dark:text-white md:text-5xl"
        >
          Real People. Real Change.
        </h2>
      </AnimatedSection>

      <div className="mt-14 grid gap-6 lg:grid-cols-3">
        {TESTIMONIALS.map((testimonial, index) => (
          <AnimatedSection key={testimonial.name} delay={index * 0.1}>
            <Card className="relative h-full p-7">
              <Quote
                className="absolute right-6 top-6 h-10 w-10 text-gold/20"
                aria-hidden="true"
              />
              <div className="flex gap-1" aria-label="Five out of five stars">
                {Array.from({ length: 5 }, (_, star) => (
                  <Star
                    key={star}
                    className="h-4 w-4 fill-gold text-gold"
                    aria-hidden="true"
                  />
                ))}
              </div>
              <blockquote className="mt-6">
                <p className="italic text-gray-700 dark:text-gray-200">
                  “{testimonial.quote}”
                </p>
                <footer className="mt-6">
                  <cite className="not-italic">
                    <span className="block font-bold text-navy dark:text-white">
                      {testimonial.name}
                    </span>
                    <span className="mt-1 block text-sm font-semibold text-gold">
                      {testimonial.service}
                    </span>
                  </cite>
                </footer>
              </blockquote>
            </Card>
          </AnimatedSection>
        ))}
      </div>
    </SectionWrapper>
  );
}
