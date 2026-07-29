"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";
import {
  SpotlightOverlay,
  useSpotlight,
} from "@/components/motion/useSpotlight";
import {
  fadeUp,
  SPRING,
  stagger,
  staggerFast,
  VIEWPORT,
} from "@/components/motion/tokens";

const principles = [
  {
    icon: <UserIcon />,
    title: "Users come first",
    body: "Every pixel and click should make sense for the person actually using it.",
  },
  {
    icon: <BoltIcon />,
    title: "Speed is part of design",
    body: "Fast, smooth, and accessible aren't extras. They're what makes a product feel polished.",
  },
  {
    icon: <LoopIcon />,
    title: "Always learning",
    body: "Code, design, and learning are one loop for me. Ship, watch, improve, repeat.",
  },
];

export function AboutNarrative() {
  return (
    <motion.div
      variants={stagger}
      initial="hidden"
      whileInView="show"
      viewport={VIEWPORT}
      className="mt-14 grid grid-cols-1 gap-10 sm:mt-20 sm:gap-12 lg:grid-cols-12 lg:gap-16"
    >
      <motion.div variants={staggerFast} className="lg:col-span-7">
        <motion.h3
          variants={fadeUp}
          className="text-[20px] font-bold tracking-tight text-foreground sm:text-[26px]"
        >
          My journey, in three short steps.
        </motion.h3>
        <div className="mt-5 flex flex-col gap-4 text-[14.5px] leading-[1.75] text-foreground/70 sm:mt-6 sm:gap-5 sm:text-[15.5px]">
          <motion.p variants={fadeUp}>
            I started with design, spending hours on small details like
            typography and spacing. That love for design pulled me into code,
            because a great design loses its magic when the build is slow or
            broken.
          </motion.p>
          <motion.p variants={fadeUp}>
            I picked up HTML and CSS first, then WordPress, then React, and
            now Next.js is where I spend most of my time. My focus is mostly
            on the front-end, building clean and smooth user interfaces.
          </motion.p>
          <motion.p variants={fadeUp}>
            My goal is simple: make hard things feel easy. If a user never
            thinks about how the site is built, that&apos;s the best
            compliment my work can get.
          </motion.p>
        </div>
      </motion.div>

      <motion.div
        variants={staggerFast}
        className="flex flex-col gap-4 lg:col-span-5"
      >
        {principles.map((p) => (
          <PrincipleCard key={p.title} {...p} />
        ))}
      </motion.div>
    </motion.div>
  );
}

function PrincipleCard({
  icon,
  title,
  body,
}: {
  icon: ReactNode;
  title: string;
  body: string;
}) {
  const { handlers, glow, tiltStyle } = useSpotlight({ radius: 260, tilt: 4 });

  return (
    <motion.div
      variants={fadeUp}
      {...handlers}
      style={tiltStyle}
      whileHover={{ y: -4 }}
      transition={SPRING}
      className="group relative isolate flex gap-4 overflow-hidden rounded-2xl border border-border-subtle bg-surface p-5 backdrop-blur-sm transition-colors hover:border-border-strong"
    >
      <SpotlightOverlay glow={glow} />

      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-border-subtle bg-accent-wash text-accent-ink transition-transform duration-500 ease-out group-hover:scale-110 group-hover:-rotate-6">
        {icon}
      </div>
      <div>
        <h4 className="text-[14.5px] font-semibold tracking-tight text-foreground">
          {title}
        </h4>
        <p className="mt-1 text-[13.5px] leading-6 text-foreground/60">
          {body}
        </p>
      </div>
    </motion.div>
  );
}

function UserIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21a8 8 0 0 1 16 0" />
    </svg>
  );
}

function BoltIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M13 3 4 14h7l-1 7 9-11h-7Z" />
    </svg>
  );
}

function LoopIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M3 12a9 9 0 0 1 15-6.7L21 8" />
      <path d="M21 3v5h-5" />
      <path d="M21 12a9 9 0 0 1-15 6.7L3 16" />
      <path d="M3 21v-5h5" />
    </svg>
  );
}
