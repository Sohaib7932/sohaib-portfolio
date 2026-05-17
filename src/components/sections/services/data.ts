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
    tagline: "Fast, clean, and ready to ship.",
    description:
      "Modern websites and web apps built with Next.js, React, and TypeScript. Animated, fully responsive, SEO-friendly, and tuned for speed from the first load.",
    deliverables: [
      "Next.js and React setup",
      "Clean component structure",
      "Tailwind CSS design system",
      "Smooth, fast page loads",
    ],
    iconKey: "web",
  },
  {
    id: "mobile",
    number: "02",
    title: "Mobile Apps",
    tagline: "iOS and Android from one codebase.",
    description:
      "Cross-platform mobile apps built with React Native. Smooth, native-feeling UI with offline support, push notifications, and store-ready builds.",
    deliverables: [
      "React Native with Expo",
      "Native modules when needed",
      "App Store and Play Store ready",
      "Stable, crash-free builds",
    ],
    iconKey: "mobile",
  },
  {
    id: "design",
    number: "03",
    title: "UI / UX Design",
    tagline: "From Figma to a finished look.",
    description:
      "Full product design, from research and wireframes to polished UI and design systems that translate cleanly into code, without losing the feel.",
    deliverables: [
      "Wireframes and user flows",
      "High-fidelity UI in Figma",
      "Reusable design system",
      "Developer-friendly handoff",
    ],
    iconKey: "design",
  },
  {
    id: "ai",
    number: "04",
    title: "AI Integration",
    tagline: "AI built into real products.",
    description:
      "Useful AI features like assistants, summaries, smart search, and small agents, added into your app with cost, speed, and user experience in mind.",
    deliverables: [
      "OpenAI and Anthropic APIs",
      "Streaming chat interfaces",
      "Tool-using agents",
      "Vector search and RAG",
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
      "We start with the problem, not the solution. A short call to understand the user, the limits, and what success actually looks like.",
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
      "I build in short, steady cycles. You get clickable previews instead of status updates, so feedback happens while it's still easy to change.",
  },
  {
    step: "04",
    title: "Ship and support",
    description:
      "Live deploy, monitoring, and a follow-up window for small fixes. Handoff includes docs so you can grow it on your own.",
  },
];
