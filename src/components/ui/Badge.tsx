import type { HTMLAttributes, ReactNode } from 'react';
import { cn } from '../../lib/utils';

type BadgeVariant = 'navy' | 'gold' | 'outline' | 'light';

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
  variant?: BadgeVariant;
}

const variants: Record<BadgeVariant, string> = {
  navy: 'bg-navy text-white',
  gold: 'bg-gold text-navy-dark',
  outline: 'border border-current bg-transparent text-navy dark:text-gold',
  light: 'bg-slate text-navy dark:bg-white/10 dark:text-white',
};

export function Badge({
  children,
  variant = 'navy',
  className,
  ...props
}: BadgeProps): JSX.Element {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider',
        variants[variant],
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}
