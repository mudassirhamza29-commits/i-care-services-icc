import { useEffect, useState } from 'react';
import { useReducedMotion } from './useReducedMotion';

export function useCountUp(
  target: number,
  duration = 1800,
  isInView = true,
): number {
  const reducedMotion = useReducedMotion();
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!isInView) {
      setValue(0);
      return undefined;
    }

    if (reducedMotion || duration <= 0) {
      setValue(target);
      return undefined;
    }

    const startedAt = performance.now();
    let animationFrame = 0;

    const updateValue = (timestamp: number): void => {
      const elapsed = timestamp - startedAt;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);

      setValue(Math.round(target * easedProgress));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(updateValue);
      }
    };

    animationFrame = requestAnimationFrame(updateValue);

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, [duration, isInView, reducedMotion, target]);

  return value;
}
