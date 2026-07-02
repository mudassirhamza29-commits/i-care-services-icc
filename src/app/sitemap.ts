import type { MetadataRoute } from "next";

import { NEWS_POSTS } from "@/lib/news";
import { SERVICES } from "@/lib/constants";

const baseUrl = "https://i-care-services-icc.vercel.app";

const staticRoutes = [
  "",
  "/about",
  "/services",
  "/get-support",
  "/for-professionals",
  "/resources",
  "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    ...staticRoutes.map((route) => ({
      url: `${baseUrl}${route}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: route === "" ? 1 : 0.7,
    })),
    ...SERVICES.map((service) => ({
      url: `${baseUrl}/services/${service.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...NEWS_POSTS.map((post) => ({
      url: `${baseUrl}/news/${post.slug}`,
      lastModified: now,
      changeFrequency: "yearly" as const,
      priority: 0.5,
    })),
  ];
}
