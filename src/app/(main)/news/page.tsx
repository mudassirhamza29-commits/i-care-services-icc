import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { PageHero } from "@/components/shared/PageHero";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { FEATURED_POST, NEWS_POSTS } from "@/lib/news";

export const metadata: Metadata = {
  title: "News & Updates",
  description:
    "Updates, guidance and reviewed community support information from I-Care Services.",
};

export default function NewsPage() {
  return (
    <>
      <PageHero
        title="News & Updates"
        subtitle="Stories, announcements, and resources from I-Care Services"
        eyebrow="From our community"
      />

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <AnimatedSection
            variant="scaleIn"
            className="grid overflow-hidden rounded-[2rem] border border-cream-dark bg-cream shadow-[var(--shadow-soft)] lg:grid-cols-2"
          >
            <div className="relative min-h-80 overflow-hidden bg-cream-dark">
              <div className="absolute left-[10%] top-[12%] h-56 w-56 rounded-[58%_42%_60%_40%] bg-orange" />
              <div className="absolute bottom-[8%] right-[8%] h-64 w-64 rounded-[40%_60%_46%_54%] bg-purple" />
              <div className="absolute left-[42%] top-[35%] h-32 w-32 rounded-full border-[24px] border-white/70" />
            </div>
            <div className="flex flex-col justify-center p-7 sm:p-10">
              <span className="w-fit rounded-full bg-purple/10 px-3 py-1.5 text-xs font-extrabold text-purple">
                {FEATURED_POST.category}
              </span>
              <h2 className="mt-5 font-heading text-3xl font-extrabold leading-tight text-navy sm:text-4xl">
                {FEATURED_POST.title}
              </h2>
              <p className="mt-5 leading-8 text-text-secondary">
                {FEATURED_POST.excerpt}
              </p>
              <p className="mt-5 text-sm font-semibold text-text-secondary">
                {FEATURED_POST.date} · {FEATURED_POST.author}
              </p>
              <Link
                href={`/news/${FEATURED_POST.slug}`}
                className="interactive-button mt-7 inline-flex w-fit items-center gap-2 rounded-full bg-orange px-5 py-3 text-sm font-extrabold text-navy"
              >
                Read More <ArrowRight size={17} aria-hidden="true" />
              </Link>
            </div>
          </AnimatedSection>

          <AnimatedSection
            variant="staggerContainer"
            className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {NEWS_POSTS.map((post) => (
              <article
                key={post.slug}
                className="interactive-card group flex overflow-hidden rounded-[2rem] border border-cream-dark bg-white"
              >
                <div className="flex w-full flex-col">
                  <div className="relative h-48 overflow-hidden bg-cream-dark">
                    <div
                      className="absolute -left-8 top-5 h-36 w-36 rounded-[60%_40%_55%_45%]"
                      style={{ backgroundColor: post.color }}
                    />
                    <div
                      className="absolute bottom-3 right-6 h-24 w-24 rounded-full border-[18px] opacity-45"
                      style={{ borderColor: post.color }}
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <span
                      className="w-fit rounded-full px-3 py-1 text-xs font-extrabold"
                      style={{
                        color: post.color,
                        backgroundColor: `${post.color}18`,
                      }}
                    >
                      {post.category}
                    </span>
                    <h3 className="mt-4 font-heading text-xl font-extrabold leading-7 text-navy">
                      {post.title}
                    </h3>
                    <p className="mt-3 line-clamp-2 flex-1 text-sm leading-7 text-text-secondary">
                      {post.excerpt}
                    </p>
                    <p className="mt-5 text-xs font-semibold text-text-secondary">
                      {post.date} · {post.author}
                    </p>
                    <Link
                      href={`/news/${post.slug}`}
                      className="mt-5 inline-flex items-center gap-2 font-bold text-purple"
                    >
                      Read More
                      <ArrowRight
                        size={16}
                        className="transition-transform group-hover:translate-x-1"
                        aria-hidden="true"
                      />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </AnimatedSection>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <AnimatedSection
          variant="fadeIn"
          className="mx-auto max-w-6xl rounded-[2rem] bg-gradient-to-br from-navy to-purple px-6 py-14 text-center text-white sm:px-10 lg:py-16"
        >
          <h2 className="font-heading text-4xl font-extrabold sm:text-5xl">
            Stay Connected With Our Community
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-8 text-white/75">
            Email updates will be added once a verified mailing provider and
            consent process are in place.
          </p>
          <Link
            href="/contact"
            className="interactive-button mt-8 inline-flex rounded-full bg-orange px-6 py-3 font-extrabold text-navy"
          >
            Contact us for updates
          </Link>
        </AnimatedSection>
      </section>
    </>
  );
}
