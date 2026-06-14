import type { ReactNode } from 'react';
import { cn } from '../../lib/utils';

interface SectionWrapperProps {
  children: ReactNode;
  id?: string;
  className?: string;
  containerClassName?: string;
  labelledBy?: string;
}

export function SectionWrapper({
  children,
  id,
  className,
  containerClassName,
  labelledBy,
}: SectionWrapperProps): JSX.Element {
  return (
    <section
      id={id}
      className={className}
      aria-labelledby={labelledBy}
    >
      <div
        className={cn(
          'mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:px-8',
          containerClassName,
        )}
      >
        {children}
      </div>
    </section>
  );
}
