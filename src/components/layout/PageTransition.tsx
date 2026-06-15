"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { usePathname } from "next/navigation";

interface PageTransitionProps {
  children: ReactNode;
}

export function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();
  const shouldReduceMotion = useReducedMotion();
  const hasMounted = useRef(false);
  const shouldAnimate = hasMounted.current && !shouldReduceMotion;

  useEffect(() => {
    hasMounted.current = true;
  }, []);

  return (
    <motion.main
      id="main-content"
      key={pathname}
      initial={shouldAnimate ? { opacity: 0, y: 20 } : false}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: shouldAnimate ? 0.35 : 0, ease: "easeOut" }}
      className="min-h-[40vh] flex-1"
    >
      {children}
    </motion.main>
  );
}
