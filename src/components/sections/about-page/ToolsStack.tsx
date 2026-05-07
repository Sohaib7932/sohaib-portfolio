"use client";

import { motion, type Variants } from "motion/react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const groupVariants: Variants = {
  hidden: { opacity: 0, y: 26 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

const chipVariants: Variants = {
  hidden: { opacity: 0, scale: 0.85 },
  show: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      delay: 0.15 + i * 0.04,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const groups = [
  {
    title: "Languages",
    items: [
      "TypeScript",
      "JavaScript",
      "Python",
      "SQL",
      "HTML",
      "CSS",
      "Java",
    ],
  },
  {
    title: "Frontend",
    items: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "Framer Motion",
      "Redux",
      "React Query",
    ],
  },
  {
    title: "Mobile",
    items: ["React Native", "Expo", "Native modules", "App Store / Play Store"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express", "PostgreSQL", "MongoDB", "REST", "WebSocket"],
  },
  {
    title: "AI & ML",
    items: [
      "OpenAI API",
      "Anthropic API",
      "Vector search",
      "RAG",
      "Streaming chat",
      "Tool use",
    ],
  },
  {
    title: "Design",
    items: ["Figma", "Prototyping", "Design systems", "User research"],
  },
  {
    title: "Tooling",
    items: ["Git", "Docker", "Vercel", "GitHub Actions", "Linear"],
  },
];

export function ToolsStack() {
  return (
    <div>
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="mx-auto max-w-2xl text-center"
      >
        <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.28em] text-accent/85 sm:text-[12px] sm:tracking-[0.32em]">
          The full stack
        </p>
        <h2 className="text-[28px] font-extrabold leading-[1.05] tracking-tight sm:text-[40px] md:text-[46px]">
          Every tool I&apos;ve{" "}
          <span className="bg-gradient-to-r from-white via-white to-accent bg-clip-text text-transparent">
            actually shipped with.
          </span>
        </h2>
        <p className="mt-4 text-[14.5px] leading-7 text-foreground/60 sm:text-[15px]">
          Not a list of buzzwords — only the things I&apos;ve used in
          production or on real projects.
        </p>
      </motion.div>

      <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2">
        {groups.map((group, i) => (
          <motion.div
            key={group.title}
            custom={i}
            variants={groupVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            className="relative isolate overflow-hidden rounded-2xl border border-border-subtle bg-white/[0.025] p-6 backdrop-blur-sm"
          >
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent"
            />
            <h3 className="mb-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-foreground/55">
              {group.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item, j) => (
                <motion.span
                  key={item}
                  custom={j}
                  variants={chipVariants}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  whileHover={{ y: -2, scale: 1.04 }}
                  transition={{
                    type: "spring",
                    stiffness: 320,
                    damping: 20,
                  }}
                  className="cursor-default rounded-full border border-border-subtle bg-white/[0.04] px-3 py-1.5 text-[12px] font-medium tracking-wide text-foreground/85 transition-colors hover:border-accent/50 hover:bg-accent/10 hover:text-foreground"
                >
                  {item}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
