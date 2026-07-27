"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";
import { SkillProgress } from "./SkillProgress";
import {
  SpotlightOverlay,
  useSpotlight,
} from "@/components/motion/useSpotlight";
import { cardRise, SPRING, VIEWPORT } from "@/components/motion/tokens";

type Tone = "violet" | "amber";

export type Skill = { name: string; percent: number };

export type SkillCategoryProps = {
  title: string;
  icon: ReactNode;
  tone?: Tone;
  skills: Skill[];
  index: number;
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

const spotlightColor: Record<Tone, string> = {
  violet: "rgba(167,139,250,0.18)",
  amber: "rgba(251,191,36,0.16)",
};

export function SkillCategory({
  title,
  icon,
  tone = "violet",
  skills,
  index,
}: SkillCategoryProps) {
  const { handlers, glow, tiltStyle } = useSpotlight({
    radius: 280,
    tilt: 6,
    color: spotlightColor[tone],
  });

  return (
    <motion.div
      custom={index}
      variants={cardRise}
      initial="hidden"
      whileInView="show"
      viewport={VIEWPORT}
      whileHover={{ y: -6 }}
      transition={SPRING}
      {...handlers}
      style={tiltStyle}
      className={`group relative isolate overflow-hidden rounded-2xl border border-border-subtle bg-white/[0.025] p-6 backdrop-blur-sm transition-colors hover:border-accent/40 before:pointer-events-none before:absolute before:inset-0 before:-z-10 before:opacity-70 ${toneGlow[tone]}`}
    >
      <SpotlightOverlay glow={glow} />

      <div
        className={`mb-6 flex h-11 w-11 items-center justify-center rounded-xl border border-border-subtle transition-transform duration-500 ease-out group-hover:scale-110 group-hover:-rotate-6 ${toneIconBg[tone]}`}
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
            className="flex items-center justify-between gap-3 rounded-xl border border-border-subtle/60 bg-white/[0.015] px-3.5 py-2.5 transition-colors group-hover:border-border-subtle"
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
