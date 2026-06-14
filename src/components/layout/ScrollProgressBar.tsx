import { motion, useScroll } from 'framer-motion';
import { useReducedMotion } from '../../hooks/useReducedMotion';

export function ScrollProgressBar(): JSX.Element | null {
  const { scrollYProgress } = useScroll();
  const reducedMotion = useReducedMotion();

  if (reducedMotion) {
    return null;
  }

  return (
    <motion.div
      className="fixed left-0 top-0 z-[60] h-1 w-full origin-left bg-gradient-to-r from-gold via-gold-light to-navy"
      style={{ scaleX: scrollYProgress }}
      aria-hidden="true"
    />
  );
}
