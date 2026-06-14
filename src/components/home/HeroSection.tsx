import { ArrowRight, Check } from 'lucide-react';
import { IMAGES } from '../../lib/constants';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { MagneticButton } from '../ui/MagneticButton';
import { Marquee } from '../ui/Marquee';

const benefits = ['Free to Access', 'No Referral Needed', '100% Confidential'];
const highlights = [
  'Compassionate support',
  'Specialist guidance',
  'Community focused',
  'Here when you need us',
];

export function HeroSection(): JSX.Element {
  return (
    <section
      className="relative flex min-h-[calc(100vh-5rem)] items-center overflow-hidden bg-navy"
      aria-labelledby="home-hero-title"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url("${IMAGES.hero}")` }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-navy/75" aria-hidden="true" />
      <div
        className="absolute -right-24 top-20 h-80 w-80 rounded-full border border-gold/30"
        aria-hidden="true"
      />
      <div
        className="absolute -right-10 top-36 h-52 w-52 rounded-full border border-white/20"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <Badge variant="gold">Every Person</Badge>
          <h1
            id="home-hero-title"
            className="mt-6 text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl"
          >
            Deserves <span className="text-gold-light">Support.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/85 md:text-lg">
            I-Care Services ICC is a community hub offering free,
            confidential, specialist support across health, mental wellbeing,
            housing, welfare, and family services. No referral. No judgement.
            Just support.
          </p>

          <ul className="mt-7 flex flex-wrap gap-3" aria-label="Service benefits">
            {benefits.map((benefit) => (
              <li
                key={benefit}
                className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur"
              >
                <Check className="h-4 w-4 text-gold-light" aria-hidden="true" />
                {benefit}
              </li>
            ))}
          </ul>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <MagneticButton>
              <Button to="/contact" variant="cta" size="lg">
                Get Support Today
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </Button>
            </MagneticButton>
            <Button to="/services" variant="outline-light" size="lg">
              Explore Our Services
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 z-10 border-y border-white/10 bg-navy-dark/90 py-3 backdrop-blur">
        <Marquee label="I-Care service highlights">
          {highlights.map((highlight) => (
            <span
              key={highlight}
              className="flex items-center gap-8 whitespace-nowrap text-sm font-semibold uppercase tracking-widest text-white/85"
            >
              {highlight}
              <span className="h-1.5 w-1.5 rounded-full bg-gold" aria-hidden="true" />
            </span>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
