"use client";

import { motion, type Variants } from "motion/react";
import type { ReactNode } from "react";
import { SkillProgress } from "./SkillProgress";

type Tone = "violet" | "amber";

export type Skill = { name: string; percent: number };

export type SkillCategoryProps = {
  title: string;
  icon: ReactNode;
  tone?: Tone;
  skills: Skill[];
  index: number;
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

const toneIconBg: Record<Tone, string> = {
  violet:
    "bg-[linear-gradient(135deg,rgba(167,139,250,0.25),rgba(139,92,246,0.05))] text-accent",
  amber:
    "bg-[linear-gradient(135deg,rgba(251,191,36,0.25),rgba(217,119,6,0.05))] text-amber-300",
};

const toneGlow: Record<Tone, string> = {
  violet:
    "before:bg-[radial-gradient(circle_at_20%_0%,rgba(167,139,250,0.18),transparent_55%)]",
  amber:
    "before:bg-[radial-gradient(circle_at_20%_0%,rgba(251,191,36,0.16),transparent_55%)]",
};

export function SkillCategory({
  title,
  icon,
  tone = "violet",
  skills,
  index,
}: SkillCategoryProps) {
  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 280, damping: 22 }}
      className={`group relative isolate overflow-hidden rounded-2xl border border-border-subtle bg-white/[0.025] p-6 backdrop-blur-sm before:pointer-events-none before:absolute before:inset-0 before:-z-10 before:opacity-70 ${toneGlow[tone]}`}
    >
      <div
        className={`mb-6 flex h-11 w-11 items-center justify-center rounded-xl border border-border-subtle ${toneIconBg[tone]}`}
      >
        {icon}
      </div>

      <h3 className="mb-5 text-[17px] font-bold tracking-tight text-foreground">
        {title}
      </h3>

      <ul className="flex flex-col gap-3.5">
        {skills.map((skill) => (
          <li
            key={skill.name}
            className="flex items-center justify-between gap-3 rounded-xl border border-border-subtle/60 bg-white/[0.015] px-3.5 py-2.5"
          >
            <span className="text-[13.5px] font-medium text-foreground/85">
              {skill.name}
            </span>
            <SkillProgress percent={skill.percent} tone={tone} />
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
