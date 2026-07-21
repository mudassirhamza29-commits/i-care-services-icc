import Link from "next/link";

import { GraphicScene } from "@/components/graphics/GraphicScene";
import { graphicAccent } from "@/lib/graphics";
import type { GraphicVariant } from "@/types";
interface PageHeroProps {
  title: string;
  subtitle: string;
  eyebrow?: string;
  accentColor?: string;
  breadcrumb?: string;
  visualVariant?: GraphicVariant;
  compact?: boolean;
}

export function PageHero({
  title,
  subtitle,
  eyebrow = "I-Care Services CIC",
  accentColor,
  breadcrumb,
  visualVariant = "community",
  compact = false,
}: PageHeroProps) {
  const resolvedAccent = accentColor ?? graphicAccent(visualVariant);
  return (
    <section className="relative isolate overflow-hidden bg-navy text-white">
      <div
        aria-hidden="true"
        className="absolute -left-24 -top-32 h-80 w-80 rounded-[44%_56%_64%_36%/52%_42%_58%_48%] bg-purple/35 blur-sm"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-44 right-[8%] h-96 w-96 rounded-full border-[70px]"
        style={{ borderColor: `${resolvedAccent}26` }}
      />
      <div
        aria-hidden="true"
        className="absolute right-[20%] top-12 h-24 w-24 rounded-[60%_40%_45%_55%]"
        style={{ backgroundColor: `${resolvedAccent}40` }}
      />
      <div className={`relative mx-auto grid max-w-7xl items-center px-4 sm:px-6 lg:px-8 ${compact ? "gap-7 py-12 sm:py-14 md:grid-cols-[minmax(0,1fr)_14rem]" : "gap-10 py-20 sm:py-24 md:grid-cols-[minmax(0,1fr)_20rem] lg:grid-cols-[minmax(0,1fr)_minmax(28rem,0.9fr)] lg:py-28"}`}>
        <div className="max-w-4xl">
          {breadcrumb && (
            <nav aria-label="Breadcrumb" className="mb-6 text-sm text-white/65">
              <Link href="/" className="hover:text-white">
                Home
              </Link>
              <span aria-hidden="true" className="mx-2">
                /
              </span>
              <span aria-current="page">{breadcrumb}</span>
            </nav>
          )}
          <p
            className="text-sm font-extrabold uppercase tracking-[0.2em]"
            style={{ color: resolvedAccent }}
          >
            {eyebrow}
          </p>
          <h1 className={`mt-5 font-heading font-extrabold leading-[1.05] tracking-[-0.045em] ${compact ? "text-4xl sm:text-5xl" : "text-5xl sm:text-6xl lg:text-7xl"}`}>
            {title}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/75 sm:text-xl sm:leading-9">
            {subtitle}
          </p>
        </div>
        <GraphicScene variant={visualVariant} mode={compact ? "spot" : "hero"} className="mx-auto" />
      </div>
    </section>
  );
}
