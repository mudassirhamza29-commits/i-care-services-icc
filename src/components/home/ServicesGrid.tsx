import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SERVICES } from '../../lib/constants';
import { AnimatedSection } from '../ui/AnimatedSection';
import { Card } from '../ui/Card';
import { SectionWrapper } from '../ui/SectionWrapper';
import { TiltCard } from '../ui/TiltCard';

export function ServicesGrid(): JSX.Element {
  return (
    <SectionWrapper
      id="services"
      className="bg-offwhite dark:bg-navy-dark"
      labelledBy="services-heading"
    >
      <AnimatedSection className="mx-auto max-w-3xl text-center">
        <span className="text-sm font-bold uppercase tracking-[0.2em] text-gold">
          Our Services
        </span>
        <h2
          id="services-heading"
          className="mt-3 text-3xl font-bold text-navy dark:text-white md:text-5xl"
        >
          Specialist Support, Built Around You
        </h2>
        <p className="mt-5 text-gray-600 dark:text-gray-300">
          Whatever you are facing, our trained team will listen, explain your
          options, and help you take the next practical step.
        </p>
      </AnimatedSection>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {SERVICES.map((service, index) => {
          const Icon = service.icon;

          return (
            <AnimatedSection key={service.id} delay={index * 0.05}>
              <TiltCard className="h-full">
                <Card
                  hoverable
                  className="h-full border-t-4 border-gold p-6"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-navy/10 text-navy dark:bg-white/10 dark:text-gold">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 text-xl font-bold text-navy dark:text-white">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm text-gray-600 dark:text-gray-300">
                    {service.description}
                  </p>
                  <Link
                    to={`/services/${service.slug}`}
                    className="mt-6 inline-flex items-center gap-2 font-semibold text-gold transition-colors hover:text-navy dark:hover:text-gold-light"
                  >
                    Learn More
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </Card>
              </TiltCard>
            </AnimatedSection>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
