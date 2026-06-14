import {
  useRef,
  useState,
  type MouseEvent,
  type ReactNode,
} from 'react';
import { motion } from 'framer-motion';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { cn } from '../../lib/utils';

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  strength?: number;
}

interface Position {
  x: number;
  y: number;
}

export function MagneticButton({
  children,
  className,
  strength = 0.18,
}: MagneticButtonProps): JSX.Element {
  const containerRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();
  const isTouch = useMediaQuery('(hover: none), (pointer: coarse)');
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });
  const disabled = reducedMotion || isTouch;

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>): void => {
    if (disabled || !containerRef.current) {
      return;
    }

    const bounds = containerRef.current.getBoundingClientRect();
    setPosition({
      x: (event.clientX - bounds.left - bounds.width / 2) * strength,
      y: (event.clientY - bounds.top - bounds.height / 2) * strength,
    });
  };

  const resetPosition = (): void => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <div
      ref={containerRef}
      className={cn('inline-flex', className)}
      onMouseMove={handleMouseMove}
      onMouseLeave={resetPosition}
    >
      <motion.div
        animate={{
          x: disabled ? 0 : position.x,
          y: disabled ? 0 : position.y,
        }}
        transition={{ type: 'spring', stiffness: 260, damping: 18, mass: 0.4 }}
      >
        {children}
      </motion.div>
    </div>
  );
}
