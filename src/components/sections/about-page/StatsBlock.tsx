"use client";

import { motion } from "motion/react";
import { CountUp } from "@/components/motion/CountUp";
import {
  SpotlightOverlay,
  useSpotlight,
} from "@/components/motion/useSpotlight";
import { cardRise, SPRING, VIEWPORT_NEAR } from "@/components/motion/tokens";

const stats = [
  {
    value: 2,
    suffix: "+",
    label: "Years in UI/UX",
    sublabel: "From sketch to ship",
  },
  {
    value: 2.5,
    suffix: "+",
    label: "Years in dev",
    sublabel: "HTML/CSS to Next.js",
  },
  {
    value: 15,
    suffix: "+",
    label: "Projects shipped",
    sublabel: "Real users, real feedback",
  },
  {
    value: 10,
    suffix: "+",
    label: "Tools used daily",
    sublabel: "Right tool for the job",
  },
];

export function StatsBlock() {
  return (
    <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
      {stats.map((stat, i) => (
        <StatCard key={stat.label} index={i} {...stat} />
      ))}
    </div>
  );
}

function StatCard({
  value,
  suffix,
  label,
  sublabel,
  index,
}: {
  value: number;
  suffix: string;
  label: string;
  sublabel: string;
  index: number;
}) {
  const { handlers, glow, tiltStyle } = useSpotlight({ radius: 260, tilt: 6 });

  return (
    <motion.div
      custom={index}
      variants={cardRise}
      initial="hidden"
      whileInView="show"
      viewport={VIEWPORT_NEAR}
      whileHover={{ y: -6 }}
      transition={SPRING}
      {...handlers}
      style={tiltStyle}
      className="group relative isolate overflow-hidden rounded-2xl border border-border-subtle bg-surface p-5 backdrop-blur-sm transition-colors hover:border-accent/50 sm:p-6"
    >
      <SpotlightOverlay glow={glow} />

      <div className="flex items-baseline gap-1">
        <CountUp
          to={value}
          className="text-[28px] font-extrabold leading-none tracking-tight text-foreground sm:text-[36px]"
        />
        <span className="text-[28px] font-extrabold leading-none tracking-tight text-accent-ink sm:text-[36px]">
          {suffix}
        </span>
      </div>
      <p className="mt-2 text-[13px] font-semibold tracking-tight text-foreground sm:text-[14px]">
        {label}
      </p>
      <p className="mt-1 text-[11.5px] leading-5 text-foreground/55 sm:text-[12px]">
        {sublabel}
      </p>
    </motion.div>
  );
}
