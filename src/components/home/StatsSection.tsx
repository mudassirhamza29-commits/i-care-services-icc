"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { HeartHandshake, ListChecks, LockKeyhole, Sparkles } from "lucide-react";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { fadeInUp } from "@/lib/animations";

const stats = [
  { value: 500, suffix: "+", label: "People Supported", icon: HeartHandshake },
  { value: 9, suffix: "", label: "Services", icon: ListChecks },
  { value: 100, suffix: "%", label: "Confidential", icon: LockKeyhole },
  { value: 10, suffix: "+", label: "Years", icon: Sparkles },
];

interface CounterProps {
  value: number;
  suffix: string;
}

function Counter({ value, suffix }: CounterProps) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [hasStarted, setHasStarted] = useState(false);
  const [count, setCount] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -80px 0px", threshold: 0.2 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasStarted) return;

    if (shouldReduceMotion) {
      setCount(value);
      return;
    }

    const duration = 1300;
    const start = performance.now();
    let frameId = 0;

    const update = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(value * eased));
      if (progress < 1) frameId = requestAnimationFrame(update);
    };

    frameId = requestAnimationFrame(update);
    return () => cancelAnimationFrame(frameId);
  }, [hasStarted, shouldReduceMotion, value]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export function StatsSection() {
  return (
    <section className="overflow-hidden bg-navy text-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
        <AnimatedSection
          variant="staggerContainer"
          className="grid grid-cols-2 gap-6 md:grid-cols-4"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <motion.div
                key={stat.label}
                variants={fadeInUp}
                className={`rounded-3xl border border-white/10 bg-white/5 p-5 text-center backdrop-blur ${
                  index > 0 ? "md:border-l-white/10" : ""
                }`}
              >
                <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-orange text-navy">
                  <Icon size={23} aria-hidden="true" />
                </span>
                <p className="mt-4 font-heading text-4xl font-extrabold tracking-tight text-orange sm:text-5xl">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="mt-2 text-sm font-semibold text-white/72 sm:text-base">
                  {stat.label}
                </p>
              </motion.div>
            );
          })}
        </AnimatedSection>
      </div>
    </section>
  );
}
