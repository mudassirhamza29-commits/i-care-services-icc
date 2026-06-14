import type { HTMLAttributes, ReactNode } from 'react';
import { cn } from '../../lib/utils';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  hoverable?: boolean;
}

export function Card({
  children,
  className,
  hoverable = false,
  ...props
}: CardProps): JSX.Element {
  return (
    <div
      className={cn(
        'overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-300 dark:bg-[#1a2d52]',
        hoverable &&
          'motion-safe:hover:-translate-y-1 hover:shadow-lg',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
