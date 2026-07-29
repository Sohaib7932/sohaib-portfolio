"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";
import {
  SpotlightOverlay,
  useSpotlight,
} from "@/components/motion/useSpotlight";
import {
  cardRise,
  fadeUpBlur,
  SPRING,
  stagger,
  VIEWPORT,
  VIEWPORT_NEAR,
} from "@/components/motion/tokens";
import { Words, wordsContainer, wordVariant } from "@/components/motion/Words";

const principles = [
  {
    icon: <UserIcon />,
    title: "Users come first",
    body: "Every pixel and click should make sense for the person actually using it. If it doesn't feel right to them, it doesn't matter how clever the code is.",
  },
  {
    icon: <BoltIcon />,
    title: "Speed is part of design",
    body: "Fast, smooth, and accessible aren't extras. They're what makes a product feel polished. A 60fps animation tells a very different story than a janky one.",
  },
  {
    icon: <LoopIcon />,
    title: "Always improving",
    body: "Code, design, and learning are one loop for me. Ship, watch how it goes, improve, repeat. Nothing is final, everything can be better.",
  },
  {
    icon: <CompassIcon />,
    title: "Make hard things feel easy",
    body: "If a user never notices the work behind the screen, that's the best compliment. Hide the complexity, show only the simple part.",
  },
  {
    icon: <BalanceIcon />,
    title: "Looks and feel, both matter",
    body: "Pretty code that ships nothing is just a hobby. A working product that's painful to use won't last. I aim for both, every time.",
  },
  {
    icon: <BrainIcon />,
    title: "AI as a helper",
    body: "I treat AI tools like any other library. Pick the right one, know its limits, and build around them. Never the main feature, always a quiet helper.",
  },
];

export function PrinciplesGrid() {
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
          What I believe
        </motion.p>
        <motion.h2
          variants={wordsContainer}
          className="text-[28px] font-extrabold leading-[1.05] tracking-tight sm:text-[40px] md:text-[46px]"
        >
          <Words text="Six principles I" />
          <motion.span
            variants={wordVariant}
            className="inline-block text-accent-ink"
          >
            won&apos;t bend.
          </motion.span>
        </motion.h2>
        <motion.p
          variants={fadeUpBlur}
          className="mt-4 text-[14.5px] leading-7 text-foreground/60 sm:text-[15px]"
        >
          The decisions I&apos;ve already made before any project starts.
        </motion.p>
      </motion.div>

      <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
        {principles.map((p, i) => (
          <PrincipleCard key={p.title} index={i} {...p} />
        ))}
      </div>
    </div>
  );
}

function PrincipleCard({
  icon,
  title,
  body,
  index,
}: {
  icon: ReactNode;
  title: string;
  body: string;
  index: number;
}) {
  const { handlers, glow, tiltStyle } = useSpotlight({ radius: 320, tilt: 5 });

  return (
    <motion.div
      custom={index}
      variants={cardRise}
      initial="hidden"
      whileInView="show"
      viewport={VIEWPORT_NEAR}
      whileHover={{ y: -7 }}
      transition={SPRING}
      {...handlers}
      style={tiltStyle}
      className="group relative isolate overflow-hidden rounded-2xl border border-border-subtle bg-surface p-6 backdrop-blur-sm transition-colors hover:border-accent/40"
    >
      <SpotlightOverlay glow={glow} />

      <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-border-subtle bg-accent-wash text-accent-ink transition-transform duration-500 ease-out group-hover:scale-110 group-hover:-rotate-6">
        {icon}
      </div>
      <h3 className="text-[16px] font-bold tracking-tight text-foreground sm:text-[17px]">
        {title}
      </h3>
      <p className="mt-2 text-[13.5px] leading-6 text-foreground/60">{body}</p>
    </motion.div>
  );
}

function UserIcon() {
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
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21a8 8 0 0 1 16 0" />
    </svg>
  );
}

function BoltIcon() {
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
      <path d="M13 3 4 14h7l-1 7 9-11h-7Z" />
    </svg>
  );
}

function LoopIcon() {
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
      <path d="M3 12a9 9 0 0 1 15-6.7L21 8" />
      <path d="M21 3v5h-5" />
      <path d="M21 12a9 9 0 0 1-15 6.7L3 16" />
      <path d="M3 21v-5h5" />
    </svg>
  );
}

function CompassIcon() {
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
      <circle cx="12" cy="12" r="9" />
      <path d="m15 9-2 6-6 2 2-6Z" />
    </svg>
  );
}

function BalanceIcon() {
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
      <path d="M12 3v18" />
      <path d="M3 7h18" />
      <path d="M6 7 3 14a3 3 0 0 0 6 0Z" />
      <path d="m18 7-3 7a3 3 0 0 0 6 0Z" />
    </svg>
  );
}

function BrainIcon() {
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
      <path d="M9 4a3 3 0 0 0-3 3v1a3 3 0 0 0-2 5 3 3 0 0 0 2 5v1a3 3 0 0 0 3 3" />
      <path d="M15 4a3 3 0 0 1 3 3v1a3 3 0 0 1 2 5 3 3 0 0 1-2 5v1a3 3 0 0 1-3 3" />
      <path d="M9 4a3 3 0 0 1 3 3" />
      <path d="M12 22a3 3 0 0 1-3-3" />
      <path d="M15 4a3 3 0 0 0-3 3" />
      <path d="M12 22a3 3 0 0 0 3-3" />
    </svg>
  );
}
