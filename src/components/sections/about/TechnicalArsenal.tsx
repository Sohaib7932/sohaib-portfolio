"use client";

import { motion, type Variants } from "motion/react";
import { SkillCategory, type SkillCategoryProps } from "./SkillCategory";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const categories: Omit<SkillCategoryProps, "index">[] = [
  {
    title: "Frontend",
    tone: "violet",
    icon: <FrontendIcon />,
    skills: [
      { name: "React / Next.js", percent: 90 },
      { name: "Tailwind CSS", percent: 95 },
    ],
  },
  {
    title: "Backend",
    tone: "violet",
    icon: <BackendIcon />,
    skills: [
      { name: "Node.js", percent: 80 },
      { name: "PostgreSQL", percent: 75 },
    ],
  },
  {
    title: "Design",
    tone: "violet",
    icon: <DesignIcon />,
    skills: [
      { name: "Figma", percent: 95 },
      { name: "UI/UX Layout", percent: 90 },
    ],
  },
  {
    title: "Tools",
    tone: "violet",
    icon: <ToolsIcon />,
    skills: [
      { name: "Git / GitHub", percent: 95 },
      { name: "Docker", percent: 75 },
    ],
  },
];

export function TechnicalArsenal() {
  return (
    <div className="mt-28">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="mx-auto max-w-2xl text-center"
      >
        <h3 className="text-[34px] font-extrabold tracking-tight sm:text-[40px]">
          Technical{" "}
          <span className="bg-gradient-to-r from-white via-white to-accent bg-clip-text text-transparent">
            Arsenal
          </span>
        </h3>
        <p className="mt-3 text-[15px] leading-7 text-foreground/60">
          Categorized expertise built through relentless iteration and a
          passion for modern tooling.
        </p>
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

function BackendIcon() {
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
      <ellipse cx="12" cy="5" rx="8" ry="2.5" />
      <path d="M4 5v6c0 1.4 3.6 2.5 8 2.5s8-1.1 8-2.5V5" />
      <path d="M4 11v6c0 1.4 3.6 2.5 8 2.5s8-1.1 8-2.5v-6" />
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
