import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

/** Served at /robots.txt. Opens the whole site and points crawlers at the sitemap. */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteConfig.url}/sitemap.xml`,
    host: siteConfig.url,
  };
}
