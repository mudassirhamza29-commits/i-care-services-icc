import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/layout/SEO';
import { AnimatedSection } from '../components/ui/AnimatedSection';
import { SmartImage } from '../components/ui/SmartImage';
import { SERVICES } from '../lib/constants';

export default function Services(): JSX.Element {
  return (
    <>
      <SEO
        title="Our Services"
        description="Explore eight free and confidential specialist support services from I-Care Services ICC."
      />
      <section className="bg-navy px-4 py-20 text-center text-white sm:px-6 md:py-28">
        <span className="text-sm font-bold uppercase tracking-[0.2em] text-gold">
          Here For You
        </span>
        <h1 className="mt-4 text-4xl font-bold md:text-6xl">Our Services</h1>
        <p className="mx-auto mt-5 max-w-2xl text-white/80">
          Free, confidential guidance for the challenges that affect your
          health, home, finances, relationships, and wellbeing.
        </p>
      </section>

      <section className="bg-offwhite px-4 py-20 dark:bg-navy-dark sm:px-6 md:py-28 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-7 md:grid-cols-2">
          {SERVICES.map((service, index) => {
            const Icon = service.icon;

            return (
              <AnimatedSection key={service.slug} delay={index * 0.05}>
                <Link
                  to={`/services/${service.slug}`}
                  className="group relative block min-h-80 overflow-hidden rounded-3xl bg-navy shadow-lg focus-visible:ring-2 focus-visible:ring-gold"
                >
                  <SmartImage
                    src={service.image}
                    alt={`${service.title} support`}
                    width={1200}
                    height={800}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 motion-safe:group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/75 to-navy/20" />
                  <div className="absolute inset-x-0 bottom-0 p-7 text-white">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gold text-navy">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </span>
                    <h2 className="mt-5 text-2xl font-bold">{service.title}</h2>
                    <p className="mt-2 text-sm text-white/80">{service.description}</p>
                    <span className="mt-5 inline-flex items-center gap-2 font-semibold text-gold-light">
                      Learn More
                      <ArrowRight
                        className="h-4 w-4 transition-transform motion-safe:group-hover:translate-x-1"
                        aria-hidden="true"
                      />
                    </span>
                  </div>
                </Link>
              </AnimatedSection>
            );
          })}
        </div>
      </section>
    </>
  );
}
