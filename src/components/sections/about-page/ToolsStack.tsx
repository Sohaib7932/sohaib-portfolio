"use client";

import { motion, type Variants } from "motion/react";
import {
  SpotlightOverlay,
  useSpotlight,
} from "@/components/motion/useSpotlight";
import {
  EASE,
  fadeUpBlur,
  stagger,
  VIEWPORT,
  VIEWPORT_NEAR,
} from "@/components/motion/tokens";
import { Words, wordsContainer, wordVariant } from "@/components/motion/Words";

const groupVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay: i * 0.1, ease: EASE },
  }),
};

const chipVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8, y: 8 },
  show: (i: number) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.45,
      delay: 0.2 + i * 0.045,
      ease: EASE,
    },
  }),
};

const groups = [
  {
    title: "Front-End (Main)",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Redux",
    ],
  },
  {
    title: "Languages",
    items: ["HTML", "CSS", "JavaScript", "TypeScript", "Dart", "Python", "SQL"],
  },
  {
    title: "Web (Past)",
    items: ["WordPress", "Elementor", "PHP basics"],
  },
  {
    title: "Design",
    items: [
      "Figma",
      "Prototyping",
      "Design systems",
      "User research",
      "Wireframing",
    ],
  },
  {
    title: "Mobile",
    items: [
      "Flutter",
      "Dart",
      "React Native",
      "Expo",
      "App Store / Play Store",
    ],
  },
  {
    title: "Backend (Light)",
    items: ["Node.js", "Express", "REST APIs", "MongoDB"],
  },
  {
    title: "AI & Automation",
    items: [
      "OpenAI API",
      "Anthropic API",
      "n8n workflows",
      "Streaming chat",
      "Tool-using agents",
    ],
  },
  {
    title: "Tooling",
    items: ["Git", "GitHub", "Vercel", "VS Code"],
  },
];

export function ToolsStack() {
  return (
    <div>
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={VIEWPORT}
        className="mx-auto max-w-2xl text-center"
      >
        <motion.p
          variants={fadeUpBlur}
          className="mb-4 text-[11px] font-medium uppercase tracking-[0.28em] text-accent-ink/85 sm:text-[12px] sm:tracking-[0.32em]"
        >
          The full stack
        </motion.p>
        <motion.h2
          variants={wordsContainer}
          className="text-[28px] font-extrabold leading-[1.05] tracking-tight sm:text-[40px] md:text-[46px]"
        >
          <Words text="The tools I" />
          <motion.span
            variants={wordVariant}
            className="inline-block text-accent-ink"
          >
            actually use.
          </motion.span>
        </motion.h2>
        <motion.p
          variants={fadeUpBlur}
          className="mt-4 text-[14.5px] leading-7 text-foreground/60 sm:text-[15px]"
        >
          Not a buzzword list. Just the things I&apos;ve really used on real
          projects, with front-end as my main focus.
        </motion.p>
      </motion.div>

      <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2">
        {groups.map((group, i) => (
          <ToolGroup key={group.title} index={i} {...group} />
        ))}
      </div>
    </div>
  );
}

function ToolGroup({
  title,
  items,
  index,
}: {
  title: string;
  items: string[];
  index: number;
}) {
  const { handlers, glow } = useSpotlight({ radius: 380, tilt: 0 });

  return (
    <motion.div
      custom={index}
      variants={groupVariants}
      initial="hidden"
      whileInView="show"
      viewport={VIEWPORT_NEAR}
      {...handlers}
      className="group relative isolate overflow-hidden rounded-2xl border border-border-subtle bg-surface p-6 backdrop-blur-sm transition-colors hover:border-border-strong"
    >
      <SpotlightOverlay glow={glow} />

      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent"
      />
      <h3 className="mb-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-foreground/55">
        {title}
      </h3>
      <div className="flex flex-wrap gap-2">
        {items.map((item, j) => (
          <motion.span
            key={item}
            custom={j}
            variants={chipVariants}
            whileHover={{ y: -3, scale: 1.06 }}
            transition={{ type: "spring", stiffness: 320, damping: 20 }}
            className="cursor-default rounded-full border border-border-subtle bg-surface-strong px-3 py-1.5 text-[12px] font-medium tracking-wide text-foreground/85 transition-colors hover:border-accent/50 hover:bg-accent/10 hover:text-foreground"
          >
            {item}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}
