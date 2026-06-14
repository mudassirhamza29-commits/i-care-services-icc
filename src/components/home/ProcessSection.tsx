import { MessageCircle, PhoneCall, ShieldCheck } from 'lucide-react';
import { AnimatedSection } from '../ui/AnimatedSection';
import { SectionWrapper } from '../ui/SectionWrapper';

const steps = [
  {
    title: 'Reach Out',
    description: 'Contact us in the way that feels most comfortable for you.',
    icon: PhoneCall,
  },
  {
    title: 'We Listen',
    description: 'Tell us what is happening, at your own pace and without judgement.',
    icon: MessageCircle,
  },
  {
    title: "You're Supported",
    description: 'Together, we agree a clear plan and stay alongside you.',
    icon: ShieldCheck,
  },
];

export function ProcessSection(): JSX.Element {
  return (
    <SectionWrapper
      className="relative overflow-hidden bg-navy text-white"
      labelledBy="process-heading"
    >
      <div
        className="absolute inset-0 opacity-10 [background-image:radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]"
        aria-hidden="true"
      />
      <AnimatedSection className="relative text-center">
        <span className="text-sm font-bold uppercase tracking-[0.2em] text-gold-light">
          A Simple Journey
        </span>
        <h2 id="process-heading" className="mt-3 text-3xl font-bold md:text-5xl">
          From First Contact to Lasting Support
        </h2>
      </AnimatedSection>

      <div className="relative mt-16 grid gap-10 md:grid-cols-3">
        <div
          className="absolute left-[16.66%] right-[16.66%] top-9 hidden border-t-2 border-dashed border-gold/50 md:block"
          aria-hidden="true"
        />
        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <AnimatedSection
              key={step.title}
              className="relative text-center"
              delay={index * 0.12}
            >
              <span className="relative z-10 mx-auto flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-full border-4 border-navy bg-gold text-navy shadow-lg">
                <Icon className="h-7 w-7" aria-hidden="true" />
                <span className="absolute -right-1 -top-1 flex h-7 w-7 items-center justify-center rounded-full bg-white text-xs font-bold text-navy">
                  {index + 1}
                </span>
              </span>
              <h3 className="mt-6 text-2xl font-bold">{step.title}</h3>
              <p className="mx-auto mt-3 max-w-xs text-sm text-white/75">
                {step.description}
              </p>
            </AnimatedSection>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
