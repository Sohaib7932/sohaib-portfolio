"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";
import { CountUp } from "@/components/motion/CountUp";
import {
  SpotlightOverlay,
  useSpotlight,
} from "@/components/motion/useSpotlight";
import { cardRise, SPRING, VIEWPORT_NEAR } from "@/components/motion/tokens";

export function WorkStats({
  totalProjects,
  totalCategories,
  totalTech,
}: {
  totalProjects: number;
  totalCategories: number;
  totalTech: number;
}) {
  const stats = [
    {
      value: totalProjects,
      suffix: "",
      label: "Shipped projects",
      sublabel: "Live, used, in production",
      icon: <RocketIcon />,
    },
    {
      value: totalCategories,
      suffix: "",
      label: "Categories",
      sublabel: "Web · Mobile · Design",
      icon: <LayersIcon />,
    },
    {
      value: totalTech,
      suffix: "",
      label: "Technologies",
      sublabel: "React Native to Python",
      icon: <CubeIcon />,
    },
    {
      value: 100,
      suffix: "%",
      label: "End-to-end",
      sublabel: "Design, code, deploy, solo",
      icon: <SparkIcon />,
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
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
  icon,
  index,
}: {
  value: number;
  suffix: string;
  label: string;
  sublabel: string;
  icon: ReactNode;
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
      className="group relative isolate overflow-hidden rounded-2xl border border-border-subtle bg-white/[0.025] p-5 backdrop-blur-sm transition-colors hover:border-accent/50 sm:p-6"
    >
      <SpotlightOverlay glow={glow} />

      <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-xl border border-border-subtle bg-[linear-gradient(135deg,rgba(167,139,250,0.22),rgba(139,92,246,0.04))] text-accent transition-transform duration-500 ease-out group-hover:scale-110 group-hover:-rotate-6">
        {icon}
      </div>

      <div className="flex items-baseline">
        <CountUp
          to={value}
          className="text-[28px] font-extrabold leading-none tracking-tight text-foreground sm:text-[36px]"
        />
        {suffix && (
          <span className="text-[28px] font-extrabold leading-none tracking-tight text-foreground sm:text-[36px]">
            {suffix}
          </span>
        )}
      </div>
      <p className="mt-3 text-[13.5px] font-semibold tracking-tight text-foreground sm:text-[14px]">
        {label}
      </p>
      <p className="mt-1 text-[12px] leading-5 text-foreground/55">
        {sublabel}
      </p>
    </motion.div>
  );
}

function RocketIcon(): ReactNode {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M14 4c4 0 6 2 6 6 0 6-7 10-7 10s-7-4-7-10c0-4 2-6 6-6h2Z" />
      <circle cx="12" cy="10" r="2" />
    </svg>
  );
}

function LayersIcon(): ReactNode {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="m12 3 9 5-9 5-9-5Z" />
      <path d="m3 13 9 5 9-5" />
    </svg>
  );
}

function CubeIcon(): ReactNode {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M21 7.5 12 3 3 7.5v9L12 21l9-4.5Z" />
      <path d="M3 7.5 12 12l9-4.5" />
      <path d="M12 12v9" />
    </svg>
  );
}

function SparkIcon(): ReactNode {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M12 3v6" />
      <path d="M12 15v6" />
      <path d="M3 12h6" />
      <path d="M15 12h6" />
      <path d="m5.6 5.6 4.2 4.2" />
      <path d="m14.2 14.2 4.2 4.2" />
      <path d="m18.4 5.6-4.2 4.2" />
      <path d="m9.8 14.2-4.2 4.2" />
    </svg>
  );
}
