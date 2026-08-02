import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

/**
 * Served at /sitemap.xml. Tells crawlers which pages exist and how they rank
 * against each other, so a new deploy gets discovered without waiting for the
 * crawler to stumble across the internal links.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: siteConfig.url,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${siteConfig.url}/work`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${siteConfig.url}/about`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.8,
    },
  ];
}
