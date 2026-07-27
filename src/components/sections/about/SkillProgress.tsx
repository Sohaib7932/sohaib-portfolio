"use client";

import { motion } from "motion/react";
import { CountUp } from "@/components/motion/CountUp";
import { EASE, VIEWPORT_NEAR } from "@/components/motion/tokens";

type Tone = "violet" | "amber";

const toneStroke: Record<Tone, string> = {
  violet: "#a78bfa",
  amber: "#fbbf24",
};

export function SkillProgress({
  percent,
  tone = "violet",
}: {
  percent: number;
  tone?: Tone;
}) {
  const radius = 14;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference * (1 - percent / 100);

  return (
    <div className="relative h-9 w-9 shrink-0">
      <svg viewBox="0 0 36 36" className="h-full w-full -rotate-90" aria-hidden>
        <circle
          cx="18"
          cy="18"
          r={radius}
          fill="none"
          stroke="rgba(255,255,255,0.08)"
          strokeWidth="2.5"
        />
        <motion.circle
          cx="18"
          cy="18"
          r={radius}
          fill="none"
          stroke={toneStroke[tone]}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          whileInView={{ strokeDashoffset: offset }}
          viewport={VIEWPORT_NEAR}
          transition={{ duration: 1.3, ease: EASE }}
        />
      </svg>
      {/* The number climbs alongside the ring rather than sitting at its total. */}
      <span className="absolute inset-0 flex items-center justify-center text-[8.5px] font-bold tracking-tight text-foreground/85">
        <CountUp to={percent} duration={1.3} />%
      </span>
    </div>
  );
}
