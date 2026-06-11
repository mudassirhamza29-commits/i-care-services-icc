"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";

export function useScrollAnimation<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T | null>(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

  return { ref, isInView };
}
