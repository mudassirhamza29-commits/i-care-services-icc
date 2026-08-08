import Link from "next/link";
import Image from "next/image";

import {
  SupportVisual,
  type SupportVisualVariant,
} from "@/components/shared/SupportVisual";
interface PageHeroProps {
  title: string;
  subtitle: string;
  eyebrow?: string;
  accentColor?: string;
  breadcrumb?: string;
  visualVariant?: SupportVisualVariant;
  serviceImage?: string;
  serviceImageAlt?: string;
  serviceImagePosition?: string;
}

export function PageHero({
  title,
  subtitle,
  eyebrow = "I-Care Services CIC",
  accentColor = "#F4845F",
  breadcrumb,
  visualVariant = "community",
  serviceImage,
  serviceImageAlt,
  serviceImagePosition,
}: PageHeroProps) {
  return (
    <section className="relative isolate overflow-hidden bg-navy text-white">
      <div
        aria-hidden="true"
        className="absolute -left-24 -top-32 h-80 w-80 rounded-[44%_56%_64%_36%/52%_42%_58%_48%] bg-purple/35 blur-sm"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-44 right-[8%] h-96 w-96 rounded-full border-[70px]"
        style={{ borderColor: `${accentColor}26` }}
      />
      <div
        aria-hidden="true"
        className="absolute right-[20%] top-12 h-24 w-24 rounded-[60%_40%_45%_55%]"
        style={{ backgroundColor: `${accentColor}40` }}
      />
      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 sm:py-20 md:grid-cols-[minmax(0,1fr)_20rem] lg:grid-cols-[minmax(0,1fr)_28rem] lg:px-8 lg:py-24">
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
            style={{ color: accentColor }}
          >
            {eyebrow}
          </p>
          <h1 className="mt-5 font-heading text-5xl font-semibold leading-[0.98] tracking-[-0.05em] sm:text-6xl lg:text-7xl">
            {title}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/75 sm:text-xl sm:leading-9">
            {subtitle}
          </p>
        </div>
        {serviceImage ? (
          <div className="relative mx-auto aspect-[4/3] w-full overflow-hidden rounded-[2rem_4rem_2rem_2rem] border-4 border-white/10 bg-white/10 shadow-2xl">
            <Image
              src={serviceImage}
              alt={serviceImageAlt ?? ""}
              fill
              loading="eager"
              sizes="(min-width: 1024px) 448px, (min-width: 768px) 320px, calc(100vw - 2rem)"
              className="object-cover"
              style={{ objectPosition: serviceImagePosition }}
            />
            <span
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-navy/35 via-transparent to-transparent"
            />
          </div>
        ) : (
          <SupportVisual
            variant={visualVariant}
            accentColor={accentColor}
            className="mx-auto hidden md:block"
          />
        )}
      </div>
    </section>
  );
}
