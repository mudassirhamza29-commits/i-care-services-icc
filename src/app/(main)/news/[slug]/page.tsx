import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { CTABanner } from "@/components/home/CTABanner";
import { PageHero } from "@/components/shared/PageHero";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ALL_NEWS_POSTS } from "@/lib/news";

export const revalidate = 3600;

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export function generateStaticParams() {
  return ALL_NEWS_POSTS.map((post) => ({ slug: post.slug }));
}

export default async function NewsArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = ALL_NEWS_POSTS.find((item) => item.slug === slug);
  if (!post) notFound();

  return (
    <>
      <PageHero
        title={post.title}
        subtitle={`${post.date} · ${post.author}`}
        eyebrow={post.category}
        accentColor={post.color}
        breadcrumb="News"
        visualVariant="news"
      />
      <article className="bg-white">
        <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
          <AnimatedSection>
            <p className="text-xl leading-9 text-text-secondary">{post.excerpt}</p>
            <h2 className="mt-10 font-heading text-3xl font-extrabold text-navy">
              Community support that responds to real needs
            </h2>
            <p className="mt-5 leading-8 text-text-secondary">
              I-Care Services CIC brings practical guidance and compassionate
              practical support together in one accessible community setting.
              Our team works alongside individuals, families and professionals
              to make services easier to understand and reach.
            </p>
            <p className="mt-5 leading-8 text-text-secondary">
              If this update relates to something you are experiencing, you do
              not need to wait for a professional referral. Contact our team for
              a confidential conversation about the next step.
            </p>
          </AnimatedSection>
        </div>
      </article>
      <CTABanner />
    </>
  );
}
