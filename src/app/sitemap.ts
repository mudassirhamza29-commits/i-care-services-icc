import type { MetadataRoute } from "next";

import { SERVICES } from "@/lib/constants";
import { SITE_URL } from "@/lib/site";

const baseUrl = SITE_URL;

const staticRoutes = [
  "",
  "/about",
  "/services",
  "/support-groups",
  "/get-support",
  "/for-professionals",
  "/resources",
  "/contact",
  "/team",
  "/privacy-policy",
  "/cookies",
  "/accessibility-statement",
  "/safeguarding",
  "/complaints",
  "/terms",
  "/data-protection",
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
  ];
}
