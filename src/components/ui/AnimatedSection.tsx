import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import { useInView } from '../../hooks/useInView';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { cn } from '../../lib/utils';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function AnimatedSection({
  children,
  className,
  delay = 0,
}: AnimatedSectionProps): JSX.Element {
  const [ref, isInView] = useInView<HTMLDivElement>();
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      className={cn(className)}
      initial={{ opacity: 0, y: reducedMotion ? 0 : 32 }}
      animate={
        isInView
          ? { opacity: 1, y: 0 }
          : { opacity: 0, y: reducedMotion ? 0 : 32 }
      }
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}
