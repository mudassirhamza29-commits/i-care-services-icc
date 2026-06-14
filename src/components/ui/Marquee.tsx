import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { cn } from '../../lib/utils';

interface MarqueeProps {
  children: ReactNode;
  className?: string;
  duration?: number;
  label?: string;
}

export function Marquee({
  children,
  className,
  duration = 28,
  label = 'Highlights',
}: MarqueeProps): JSX.Element {
  const reducedMotion = useReducedMotion();

  if (reducedMotion) {
    return (
      <div
        className={cn('flex flex-wrap items-center justify-center gap-6', className)}
        aria-label={label}
      >
        {children}
      </div>
    );
  }

  return (
    <div
      className={cn('group overflow-hidden', className)}
      aria-label={label}
    >
      <motion.div
        className="flex w-max items-center"
        animate={{ x: ['0%', '-50%'] }}
        transition={{
          duration,
          ease: 'linear',
          repeat: Number.POSITIVE_INFINITY,
        }}
        whileHover={{ animationPlayState: 'paused' }}
      >
        <div className="flex shrink-0 items-center gap-8 pr-8">{children}</div>
        <div
          className="flex shrink-0 items-center gap-8 pr-8"
          aria-hidden="true"
        >
          {children}
        </div>
      </motion.div>
    </div>
  );
}
