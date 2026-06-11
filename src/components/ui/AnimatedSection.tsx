"use client";

import type { ReactNode } from "react";
import {
  motion,
  type HTMLMotionProps,
  useReducedMotion,
} from "framer-motion";

import {
  animationVariants,
  type AnimationVariant,
} from "@/lib/animations";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface AnimatedSectionProps
  extends Omit<HTMLMotionProps<"div">, "animate" | "initial" | "variants"> {
  children: ReactNode;
  variant?: AnimationVariant;
}

export function AnimatedSection({
  children,
  variant = "fadeInUp",
  className,
  ...props
}: AnimatedSectionProps) {
  const { ref, isInView } = useScrollAnimation<HTMLDivElement>();
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      variants={animationVariants[variant]}
      initial={shouldReduceMotion ? false : "hidden"}
      animate={isInView ? "visible" : "hidden"}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
