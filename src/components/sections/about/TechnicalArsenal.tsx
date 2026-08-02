"use client";

import { motion } from "motion/react";
import { SkillCategory, type SkillCategoryProps } from "./SkillCategory";
import { fadeUpBlur, stagger, VIEWPORT } from "@/components/motion/tokens";
import { Words, wordsContainer, wordVariant } from "@/components/motion/Words";

const categories: Omit<SkillCategoryProps, "index">[] = [
  {
    title: "Front-End",
    tone: "violet",
    icon: <FrontendIcon />,
    skills: [
      { name: "React / Next.js", percent: 92 },
      { name: "TypeScript", percent: 88 },
      { name: "Tailwind CSS", percent: 95 },
    ],
  },
  {
    title: "Mobile",
    tone: "violet",
    icon: <MobileIcon />,
    skills: [
      { name: "Flutter / Dart", percent: 78 },
      { name: "React Native", percent: 75 },
      { name: "HTML / CSS / JS", percent: 95 },
    ],
  },
  {
    title: "Design",
    tone: "violet",
    icon: <DesignIcon />,
    skills: [
      { name: "Figma", percent: 95 },
      { name: "UI/UX Layout", percent: 92 },
      { name: "Design systems", percent: 88 },
    ],
  },
  {
    title: "Tools",
    tone: "violet",
    icon: <ToolsIcon />,
    skills: [
      { name: "Git / GitHub", percent: 95 },
      { name: "n8n automation", percent: 70 },
      { name: "WordPress", percent: 80 },
    ],
  },
];

export function TechnicalArsenal() {
  return (
    <div className="mt-20 sm:mt-28">
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={VIEWPORT}
        className="mx-auto max-w-2xl text-center"
      >
        <motion.h3
          variants={wordsContainer}
          className="text-[28px] font-extrabold tracking-tight sm:text-[40px]"
        >
          <Words text="Technical" />
          <motion.span
            variants={wordVariant}
            className="inline-block text-accent-ink"
          >
            Arsenal
          </motion.span>
        </motion.h3>
        <motion.p
          variants={fadeUpBlur}
          className="mt-3 text-[15px] leading-7 text-foreground/60"
        >
          The tools I use most, grouped by where they fit in my workflow.
        </motion.p>
      </motion.div>

      <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {categories.map((cat, i) => (
          <SkillCategory key={cat.title} index={i} {...cat} />
        ))}
      </div>
    </div>
  );
}

function FrontendIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <rect x="3" y="4" width="18" height="14" rx="2" />
      <path d="M3 9h18" />
      <path d="m8 13 2 2-2 2" />
      <path d="M13 17h3" />
    </svg>
  );
}

function MobileIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <rect x="6" y="2.5" width="12" height="19" rx="2.5" />
      <path d="M10.5 18.5h3" />
    </svg>
  );
}

function DesignIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M12 3 13.6 8.4 19 10l-5.4 1.6L12 17l-1.6-5.4L5 10l5.4-1.6Z" />
      <path d="M19 4v3" />
      <path d="M17.5 5.5h3" />
      <path d="M5 18v2" />
      <path d="M4 19h2" />
    </svg>
  );
}

function ToolsIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="m14.5 5.5 4 4-9 9-4-4Z" />
      <path d="m13 7 4 4" />
      <path d="m17.5 2.5 4 4-2 2-4-4Z" />
      <path d="m4 20 1.5-1.5" />
    </svg>
  );
}
