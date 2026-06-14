import { Check, Lock, Quote } from 'lucide-react';
import type { ServiceDetail } from '../../types';
import { ProcessSection } from '../home/ProcessSection';
import { AnimatedSection } from '../ui/AnimatedSection';
import { Button } from '../ui/Button';
import { SectionWrapper } from '../ui/SectionWrapper';

interface ServicePageProps {
  service: ServiceDetail;
}

export function ServicePage({ service }: ServicePageProps): JSX.Element {
  const Icon = service.icon;

  return (
    <>
      <section className="relative overflow-hidden bg-navy px-4 py-20 text-center text-white sm:px-6 md:py-28">
        <Icon
          className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 text-white/[0.04]"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-4xl">
          <nav className="mb-8 text-sm text-white/70" aria-label="Breadcrumb">
            <ol className="flex flex-wrap justify-center gap-2">
              <li>
                <a href="/" className="hover:text-gold">
                  Home
                </a>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <a href="/services" className="hover:text-gold">
                  Services
                </a>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-white">
                {service.title}
              </li>
            </ol>
          </nav>
          <span className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-gold text-navy shadow-xl">
            <Icon className="h-10 w-10" aria-hidden="true" />
          </span>
          <h1 className="mt-7 text-4xl font-bold text-gold-light md:text-6xl">
            {service.title}
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-white/80">
            {service.heroDescription}
          </p>
        </div>
      </section>

      <SectionWrapper className="bg-offwhite dark:bg-navy-dark">
        {service.confidentialityNote && (
          <AnimatedSection className="mb-12 flex gap-4 rounded-2xl bg-navy p-6 text-white shadow-lg">
            <Lock className="h-7 w-7 shrink-0 text-gold" aria-hidden="true" />
            <div>
              <h2 className="font-body text-lg font-bold">Your confidentiality</h2>
              <p className="mt-2 text-sm text-white/80">
                {service.confidentialityNote}
              </p>
            </div>
          </AnimatedSection>
        )}

        <div className="grid gap-8 lg:grid-cols-2">
          <AnimatedSection className="rounded-3xl bg-white p-7 shadow-md dark:bg-[#1a2d52] md:p-9">
            <h2 className="text-3xl font-bold text-navy dark:text-white">
              What We Offer
            </h2>
            <ul className="mt-6 space-y-4">
              {service.whatWeOffer.map((item) => (
                <li key={item} className="flex gap-3 text-gray-700 dark:text-gray-200">
                  <Check className="mt-1 h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </AnimatedSection>
          <AnimatedSection
            delay={0.1}
            className="rounded-3xl bg-white p-7 shadow-md dark:bg-[#1a2d52] md:p-9"
          >
            <h2 className="text-3xl font-bold text-navy dark:text-white">
              Who This Is For
            </h2>
            <ul className="mt-6 space-y-4">
              {service.whoIsItFor.map((item) => (
                <li key={item} className="flex gap-3 text-gray-700 dark:text-gray-200">
                  <Check className="mt-1 h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </AnimatedSection>
        </div>

        <AnimatedSection className="relative mt-10 rounded-r-3xl border-l-4 border-gold bg-white p-8 shadow-md dark:bg-[#1a2d52]">
          <Quote className="absolute right-7 top-7 h-12 w-12 text-gold/20" aria-hidden="true" />
          <blockquote>
            <p className="max-w-3xl text-xl italic text-gray-700 dark:text-gray-200">
              “{service.quote.text}”
            </p>
            <footer className="mt-4 font-semibold text-gold">
              {service.quote.author}
            </footer>
          </blockquote>
        </AnimatedSection>
      </SectionWrapper>

      <SectionWrapper
        className="bg-white dark:bg-[#102344]"
        labelledBy="service-faq-heading"
      >
        <AnimatedSection className="mx-auto max-w-3xl text-center">
          <h2
            id="service-faq-heading"
            className="text-3xl font-bold text-navy dark:text-white md:text-5xl"
          >
            Frequently Asked Questions
          </h2>
        </AnimatedSection>
        <div className="mx-auto mt-10 max-w-3xl space-y-4">
          {service.faqs.map((faq, index) => (
            <AnimatedSection
              key={faq.question}
              delay={index * 0.05}
              className="rounded-2xl border border-slate bg-offwhite p-6 dark:border-white/10 dark:bg-navy"
            >
              <h3 className="text-xl font-bold text-navy dark:text-white">
                {faq.question}
              </h3>
              <p className="mt-3 text-gray-600 dark:text-gray-300">{faq.answer}</p>
            </AnimatedSection>
          ))}
        </div>
      </SectionWrapper>

      <ProcessSection />

      <section className="bg-offwhite px-4 py-16 dark:bg-navy-dark">
        <div className="mx-auto flex max-w-4xl flex-col items-center justify-center gap-4 sm:flex-row">
          <Button to="/contact" size="lg">
            Get Support Now
          </Button>
          <Button to="/services" variant="secondary" size="lg">
            Back to All Services
          </Button>
        </div>
      </section>
    </>
  );
}
