import type { Project, ProjectCategory } from "./types";

export const projectCategories: ("All" | ProjectCategory)[] = [
  "All",
  "Web Development",
  "UI/UX Design",
  "Mobile Apps",
];

export const projects: Project[] = [
  {
    slug: "vault-analytics",
    title: "Vault Analytics",
    description:
      "Real-time financial monitoring dashboard with advanced data visualization, alerts, and neural security layers.",
    category: "Web Development",
    tech: ["Next.js", "Framer Motion"],
    placeholderBg:
      "bg-[radial-gradient(ellipse_at_70%_50%,#22d3ee_0%,#0e7490_25%,#0a1a2a_60%,#050a14_100%)]",
    primary: { label: "Live Demo", href: "#" },
    secondary: { label: "GitHub", href: "#" },
  },
  {
    slug: "luxe-commerce",
    title: "Luxe Commerce",
    description:
      "A high-end e-commerce platform redesign focused on micro-interactions, animations, and performance optimization.",
    category: "Web Development",
    tech: ["Next.js", "Tailwind"],
    placeholderBg:
      "bg-[radial-gradient(circle_at_70%_30%,#7a4a2a_0%,#2a1610_55%,#120a08_100%)]",
    primary: { label: "Live Demo", href: "#" },
    secondary: { label: "GitHub", href: "#" },
  },
  {
    slug: "nomad-guide",
    title: "Nomad Guide",
    description:
      "A cross-platform travel companion providing offline-first access to remote destination data and curated itineraries.",
    category: "Mobile Apps",
    tech: ["React Native", "Expo"],
    placeholderBg:
      "bg-[radial-gradient(circle_at_50%_30%,#f0a5a0_0%,#9a4a52_30%,#3a1a26_70%,#120a14_100%)]",
    primary: { label: "Live Demo", href: "#" },
    secondary: { label: "GitHub", href: "#" },
  },
  {
    slug: "aura-ai",
    title: "Aura AI",
    description:
      "Immersive landing page concept showcasing AI capabilities through layered typography, fluid motion, and bold color.",
    category: "UI/UX Design",
    tech: ["Figma", "Prototyping"],
    placeholderBg:
      "bg-[radial-gradient(ellipse_at_50%_55%,#e879f9_0%,#a21caf_30%,#3a1245_60%,#0a0410_100%)]",
    primary: { label: "Link", href: "#" },
    secondary: { label: "Open", href: "#" },
  },
];
