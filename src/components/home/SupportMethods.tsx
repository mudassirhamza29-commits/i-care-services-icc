import { AnimatedSection } from '../ui/AnimatedSection';
import { SectionWrapper } from '../ui/SectionWrapper';

const methods = [
  {
    emoji: '1:1',
    title: 'One-to-One Support',
    description: 'Private conversations focused entirely on your needs and goals.',
  },
  {
    emoji: 'TEL',
    title: 'Telephone Guidance',
    description: 'Practical advice and reassurance from wherever you feel comfortable.',
  },
  {
    emoji: 'WEB',
    title: 'Online Support',
    description: 'Accessible digital appointments when travel or time is difficult.',
  },
  {
    emoji: 'GRP',
    title: 'Group Sessions',
    description: 'Welcoming spaces to learn, connect, and share with others.',
  },
  {
    emoji: 'OUT',
    title: 'Community Outreach',
    description: 'Support delivered through trusted places in your local community.',
  },
];

export function SupportMethods(): JSX.Element {
  return (
    <SectionWrapper
      className="bg-slate dark:bg-[#102344]"
      labelledBy="support-methods-heading"
    >
      <AnimatedSection className="mx-auto max-w-3xl text-center">
        <span className="text-sm font-bold uppercase tracking-[0.2em] text-gold">
          Flexible Support
        </span>
        <h2
          id="support-methods-heading"
          className="mt-3 text-3xl font-bold text-navy dark:text-white md:text-5xl"
        >
          Support That Fits Your Life
        </h2>
        <p className="mt-5 text-gray-600 dark:text-gray-300">
          Choose the way of connecting that feels safe, practical, and right
          for you.
        </p>
      </AnimatedSection>

      <div className="mt-12 grid gap-4">
        {methods.map((method, index) => (
          <AnimatedSection
            key={method.title}
            delay={index * 0.05}
            className="flex flex-col items-start gap-5 rounded-2xl bg-white p-5 shadow-sm dark:bg-[#1a2d52] sm:flex-row sm:items-center"
          >
            <span
              className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gold text-xs font-extrabold tracking-wider text-navy"
              aria-hidden="true"
            >
              {method.emoji}
            </span>
            <div>
              <h3 className="text-xl font-bold text-navy dark:text-white">
                {method.title}
              </h3>
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
                {method.description}
              </p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </SectionWrapper>
  );
}
