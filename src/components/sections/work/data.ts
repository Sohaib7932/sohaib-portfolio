import type { Project, ProjectCategory } from "./types";

export const projectCategories: ("All" | ProjectCategory)[] = [
  "All",
  "Web Development",
  "UI/UX Design",
  "Mobile Apps",
];

export const projects: Project[] = [
  {
    slug: "sweden-relocators-portal",
    title: "Sweden Relocators Client Portal",
    description:
      "An enterprise client and company portal for Sweden Relocators, managing immigration, relocation, accounting, property, and business services end-to-end. Includes a 9-step case flow, document vault, appointment booking, invoicing, multi-language support (English, Svenska, Urdu), and live status tracking, all built with Next.js 15, React, and Material UI.",
    category: "Web Development",
    tech: ["Next.js", "React", "MUI", "Auth0", "Supabase", "i18n"],
    image: "/sweden-portal.png",
    placeholderBg:
      "bg-[radial-gradient(ellipse_at_55%_40%,#1939B7_0%,#0E1E5C_55%,#08060f_100%)]",
    primary: {
      label: "Live Demo",
      href: "https://portal.swedenrelocators.se/",
    },
  },
  {
    slug: "paypalm",
    title: "PayPalm, Palm Vein Payments",
    description:
      "My final-year project: a full mobile banking app paired with custom-built palm-vein scanning hardware. Users sign in and pay by simply scanning the vein pattern in their palm, no card, no PIN, no phone unlock needed.",
    category: "Mobile Apps",
    tech: ["React Native", "Expo", "IoT Hardware"],
    image: "/paypalm.svg",
    placeholderBg:
      "bg-[radial-gradient(ellipse_at_60%_40%,#3b1f7a_0%,#1a0b3a_55%,#08060f_100%)]",
    primary: {
      label: "Download APK",
      href: "https://expo.dev/accounts/sohaib7933/projects/PayPalm/builds/6b24fd37-d78a-4881-8982-f96146565019",
    },
  },
  {
    slug: "ielts-counsel",
    title: "IELTS Counsel, Full Mock Test Suite",
    description:
      "A complete IELTS prep platform with Listening, Reading, Writing, and an AI-powered Speaking module. The Speaking AI runs the full 3-part interview, Part 1 personal questions, Part 2 cue-card with 1 minute prep, and Part 3 deeper discussion, then scores you on fluency, vocabulary, grammar, and pronunciation with proper band-level feedback.",
    category: "Web Development",
    tech: ["Next.js", "React", "Node.js", "AI Speaking"],
    image: "/ielts.png",
    placeholderBg:
      "bg-[radial-gradient(ellipse_at_50%_40%,#1e3a8a_0%,#0a1e3f_55%,#04081a_100%)]",
    primary: {
      label: "Live Demo",
      href: "https://www.ieltscounsel.com/",
    },
  },
  {
    slug: "sweden-relocators-website",
    title: "Sweden Relocators Website",
    description:
      "The public marketing website for Sweden Relocators. Built with Next.js and a clean component system to showcase services, country guides, pricing tiers, and lead-capture flows, fully responsive and SEO-friendly.",
    category: "Web Development",
    tech: ["Next.js", "React", "Tailwind CSS", "SEO"],
    image: "/sweden-web.png",
    placeholderBg:
      "bg-[radial-gradient(ellipse_at_50%_40%,#1939B7_0%,#0a1740_55%,#04081a_100%)]",
    primary: {
      label: "Live Demo",
      href: "https://website.swedenrelocators.se/",
    },
  },
  {
    slug: "corefinity",
    title: "Corefinity, Studio Website",
    description:
      "Marketing site for Corefinity, a software studio that helps startups, businesses, and enterprises design, build, and launch web, mobile, and AI products. Clean hero, animated sections, and a service-led layout that converts visitors into real conversations.",
    category: "Web Development",
    tech: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
    image: "/corefinity.png",
    placeholderBg:
      "bg-[radial-gradient(ellipse_at_50%_40%,#3b1f7a_0%,#1a0b3a_55%,#08060f_100%)]",
    primary: {
      label: "Live Demo",
      href: "https://corefinity-website.vercel.app/",
    },
  },
  {
    slug: "blood-pulse-connect",
    title: "Blood Pulse Connect",
    description:
      "A full Figma design with prototypes for a blood-donation app that helps donors and recipients connect in minutes. Built around urgency, trust, and removing friction when it matters most.",
    category: "UI/UX Design",
    tech: ["Figma", "Prototyping", "UX Research"],
    image: "/BPC.png",
    placeholderBg:
      "bg-[radial-gradient(ellipse_at_50%_45%,#7a2230_0%,#3a0e1a_55%,#0e0610_100%)]",
    primary: {
      label: "Figma",
      href: "https://www.figma.com/design/EwgWWL85cK6T0Xs091esDv/Blood-Pulse-Connect?node-id=0-1&t=wZ5s5smaqUzYT63K-1",
    },
  },
  {
    slug: "code-smell-detection",
    title: "Code Smell Detection",
    description:
      "A web-based tool that scans uploaded source code and flags common design issues like Bloaters, Couplers, and other Object-Oriented smells. Helps developers spot quality and maintainability problems early, with clear, structured feedback for each finding.",
    category: "Web Development",
    tech: ["Next.js", "React", "Static Analysis"],
    image: "/CodeSmellDetection.png",
    placeholderBg:
      "bg-[radial-gradient(ellipse_at_45%_45%,#0e3a4a_0%,#0a1c2e_55%,#04080f_100%)]",
    primary: {
      label: "Live Demo",
      href: "https://code-smell-detection.vercel.app/",
    },
  },
  {
    slug: "fb-marketplace-scraper",
    title: "FB Marketplace Scraper",
    description:
      "A Python and HTML web scraper that pulls live product listings from Facebook Marketplace. Just type a product name and the tool gives back clean results, title, price, location, image, and listing URL, ready to export or analyse.",
    category: "Web Development",
    tech: ["Python", "HTML", "Web Scraping"],
    illustration: "scrape",
    placeholderBg:
      "bg-[radial-gradient(ellipse_at_45%_45%,#0e3a4a_0%,#0a1c2e_55%,#04080f_100%)]",
    primary: {
      label: "GitHub",
      href: "https://github.com/Maarij07/fb-marketplace",
    },
  },
];
