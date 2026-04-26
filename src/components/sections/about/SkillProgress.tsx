"use client";

import { motion } from "motion/react";

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
      <svg
        viewBox="0 0 36 36"
        className="h-full w-full -rotate-90"
        aria-hidden
      >
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
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        />
      </svg>
      <span className="absolute inset-0 flex items-center justify-center text-[8.5px] font-bold tracking-tight text-foreground/85">
        {percent}%
      </span>
    </div>
  );
}
