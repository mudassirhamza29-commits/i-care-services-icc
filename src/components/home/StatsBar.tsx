import { useCountUp } from '../../hooks/useCountUp';
import { useInView } from '../../hooks/useInView';

interface StatProps {
  target: number;
  suffix: string;
  label: string;
  inView: boolean;
}

function Stat({ target, suffix, label, inView }: StatProps): JSX.Element {
  const value = useCountUp(target, 1600, inView);

  return (
    <div className="px-4 py-6 text-center">
      <p className="font-heading text-4xl font-bold text-gold-light md:text-5xl">
        {value}
        {suffix}
      </p>
      <p className="mt-2 text-sm font-semibold uppercase tracking-wider text-white/80">
        {label}
      </p>
    </div>
  );
}

export function StatsBar(): JSX.Element {
  const [ref, inView] = useInView<HTMLDivElement>(0.25);

  return (
    <section className="bg-navy py-8" aria-label="Our impact">
      <div
        ref={ref}
        className="mx-auto grid max-w-7xl divide-y divide-white/15 px-4 sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4"
      >
        <Stat target={500} suffix="+" label="Lives Touched" inView={inView} />
        <Stat target={8} suffix="" label="Specialist Services" inView={inView} />
        <Stat target={5} suffix="" label="Ways to Get Help" inView={inView} />
        <Stat target={100} suffix="%" label="Confidential" inView={inView} />
      </div>
    </section>
  );
}
