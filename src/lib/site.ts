/**
 * Single source of truth for everything search engines and social cards read.
 *
 * Swap `url` here when a custom domain replaces the Vercel one; canonical tags,
 * the sitemap, robots.txt and Open Graph images all derive from it, so nothing
 * else needs editing.
 */
export const siteConfig = {
  url: "https://sohaib-portfolio.vercel.app",
  name: "Muhammad Sohaib",
  jobTitle: "Front-End Developer",

  /**
   * Under ~60 characters so Google renders it without truncating. Leads with
   * the name (branded search) then the two terms worth ranking for.
   */
  title: "Muhammad Sohaib — Front-End Developer (React & Next.js)",

  /**
   * ~155 characters. Written to be read by a human in a results page, not
   * stuffed: the keywords earn their place inside a real sentence.
   */
  description:
    "Front-end developer building fast, accessible web apps with React, Next.js and TypeScript. Software Engineering graduate based in Pakistan, working remotely worldwide.",

  locale: "en_US",
  location: {
    country: "Pakistan",
    countryCode: "PK",
  },

  email: "muhammadsohaib7932@gmail.com",
  social: {
    github: "https://github.com/Sohaib7932",
    linkedin: "https://www.linkedin.com/in/-muhammadsohaib-",
  },

  /**
   * Not used by Google for ranking, but still read by Bing and by several
   * social scrapers. Cheap to keep accurate.
   */
  keywords: [
    "Muhammad Sohaib",
    "front-end developer",
    "React developer",
    "Next.js developer",
    "TypeScript developer",
    "UI/UX designer",
    "Flutter developer",
    "web developer Pakistan",
    "remote front-end developer",
    "Tailwind CSS",
    "n8n automation",
    "portfolio",
  ],

  /** Feeds the `knowsAbout` field of the Person schema. */
  skills: [
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Tailwind CSS",
    "Flutter",
    "React Native",
    "UI/UX Design",
    "Figma",
    "n8n",
    "Web Performance",
    "Accessibility",
  ],
} as const;
