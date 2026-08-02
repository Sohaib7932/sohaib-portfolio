import type { Metadata } from "next";
import { WorkPage } from "@/components/sections/work";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected front-end projects by Muhammad Sohaib: React and Next.js web apps, Flutter mobile apps, design systems and AI-powered tools, each built solo from Figma to production.",
  alternates: { canonical: "/work" },
  openGraph: {
    title: "Work — Muhammad Sohaib",
    description:
      "React and Next.js web apps, Flutter mobile apps and AI-powered tools, built end to end.",
    url: "/work",
  },
};

export default function Work() {
  return <WorkPage />;
}
