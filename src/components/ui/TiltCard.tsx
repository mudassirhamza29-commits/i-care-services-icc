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

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  maxTilt?: number;
}

interface Rotation {
  rotateX: number;
  rotateY: number;
}

export function TiltCard({
  children,
  className,
  maxTilt = 5,
}: TiltCardProps): JSX.Element {
  const cardRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();
  const isTouch = useMediaQuery('(hover: none), (pointer: coarse)');
  const [rotation, setRotation] = useState<Rotation>({
    rotateX: 0,
    rotateY: 0,
  });
  const disabled = reducedMotion || isTouch;

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>): void => {
    if (disabled || !cardRef.current) {
      return;
    }

    const bounds = cardRef.current.getBoundingClientRect();
    const horizontal = (event.clientX - bounds.left) / bounds.width - 0.5;
    const vertical = (event.clientY - bounds.top) / bounds.height - 0.5;

    setRotation({
      rotateX: vertical * -maxTilt * 2,
      rotateY: horizontal * maxTilt * 2,
    });
  };

  const resetRotation = (): void => {
    setRotation({ rotateX: 0, rotateY: 0 });
  };

  return (
    <div className="[perspective:1000px]">
      <motion.div
        ref={cardRef}
        className={cn('[transform-style:preserve-3d]', className)}
        animate={{
          rotateX: disabled ? 0 : rotation.rotateX,
          rotateY: disabled ? 0 : rotation.rotateY,
        }}
        transition={{ type: 'spring', stiffness: 220, damping: 20 }}
        onMouseMove={handleMouseMove}
        onMouseLeave={resetRotation}
      >
        {children}
      </motion.div>
    </div>
  );
}
