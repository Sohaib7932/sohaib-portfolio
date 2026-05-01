export type Service = {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  iconKey: ServiceIconKey;
};

export type ServiceIconKey =
  | "web"
  | "mobile"
  | "design"
  | "ai";

export const services: Service[] = [
  {
    id: "web",
    number: "01",
    title: "Web Development",
    tagline: "Fast, accessible, production-ready.",
    description:
      "Modern web apps built with Next.js, React, and TypeScript — animated, responsive, SEO-aware, and tuned for performance from the first paint.",
    deliverables: [
      "Next.js + React architecture",
      "Server components & API layer",
      "Tailwind CSS design system",
      "Lighthouse-optimized delivery",
    ],
    iconKey: "web",
  },
  {
    id: "mobile",
    number: "02",
    title: "Mobile Apps",
    tagline: "iOS & Android, one codebase.",
    description:
      "Cross-platform mobile experiences with React Native — smooth, native-feeling UI with offline support, push notifications, and store-ready builds.",
    deliverables: [
      "React Native + Expo",
      "Native modules where it matters",
      "App Store & Play Store ready",
      "Crash-free release pipelines",
    ],
    iconKey: "mobile",
  },
  {
    id: "design",
    number: "03",
    title: "UI / UX Design",
    tagline: "Figma to flawless interfaces.",
    description:
      "End-to-end product design — research, wireframes, polished UI, and design systems that translate cleanly into code without losing the soul.",
    deliverables: [
      "Wireframes & user flows",
      "Hi-fi UI in Figma",
      "Reusable design system",
      "Developer-friendly handoff",
    ],
    iconKey: "design",
  },
  {
    id: "ai",
    number: "04",
    title: "AI Integration",
    tagline: "LLMs woven into real products.",
    description:
      "Practical AI features — assistants, summaries, smart search, and autonomous workflows — plugged into your stack with cost, latency, and UX in mind.",
    deliverables: [
      "OpenAI & Anthropic APIs",
      "Streaming chat interfaces",
      "Tool-using agents",
      "Vector search & RAG",
    ],
    iconKey: "ai",
  },
];

export type ProcessStep = {
  step: string;
  title: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Discover",
    description:
      "We start with the problem, not the solution. A short call to understand the user, the constraint, and what success actually looks like.",
  },
  {
    step: "02",
    title: "Design",
    description:
      "Wireframes first, then high-fidelity mockups in Figma. You see and feel the product before a single line of code is written.",
  },
  {
    step: "03",
    title: "Build",
    description:
      "Iterative builds in short cycles. You get clickable previews, not status updates — so feedback happens while it's still cheap.",
  },
  {
    step: "04",
    title: "Ship & support",
    description:
      "Production deploy, monitoring, and a follow-up window for tweaks. Handoff includes docs and a path to extend on your own.",
  },
];
