import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { Logo } from '../ui/Logo';

const SESSION_KEY = 'i-care-splash-seen';

export function SplashScreen(): JSX.Element {
  const reducedMotion = useReducedMotion();
  const [visible, setVisible] = useState(
    () =>
      typeof window !== 'undefined' &&
      window.sessionStorage.getItem(SESSION_KEY) !== 'true',
  );

  useEffect(() => {
    if (!visible) {
      return undefined;
    }

    window.sessionStorage.setItem(SESSION_KEY, 'true');
    const timeout = window.setTimeout(
      () => setVisible(false),
      reducedMotion ? 500 : 1800,
    );

    return () => window.clearTimeout(timeout);
  }, [reducedMotion, visible]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-navy"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reducedMotion ? 0.1 : 0.4 }}
          aria-label="Loading I-Care Services"
          role="status"
        >
          <motion.div
            className="text-center"
            initial={{ opacity: 0, scale: reducedMotion ? 1 : 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: reducedMotion ? 0.1 : 0.5 }}
          >
            <Logo variant="white" showText={false} className="justify-center" />
            <p className="mt-5 font-heading text-3xl font-bold text-white">
              I-Care Services
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
