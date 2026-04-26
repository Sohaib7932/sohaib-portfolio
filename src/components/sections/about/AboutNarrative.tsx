"use client";

import { motion, type Variants } from "motion/react";
import type { ReactNode } from "react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};

const principles = [
  {
    icon: <UserIcon />,
    title: "User-first thinking",
    body: "Every pixel and interaction is judged by the person on the other side of the screen.",
  },
  {
    icon: <BoltIcon />,
    title: "Performance is design",
    body: "Speed, smoothness, and accessibility aren't extras — they're how a product feels professional.",
  },
  {
    icon: <LoopIcon />,
    title: "Always iterating",
    body: "I treat code, design, and learning as a single loop — ship, observe, refine, repeat.",
  },
];

export function AboutNarrative() {
  return (
    <motion.div
      variants={stagger}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      className="mt-20 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16"
    >
      <motion.div variants={fadeUp} className="lg:col-span-7">
        <h3 className="text-[22px] font-bold tracking-tight text-foreground sm:text-[26px]">
          My journey, in three honest sentences.
        </h3>
        <div className="mt-6 flex flex-col gap-5 text-[15.5px] leading-[1.75] text-foreground/70">
          <p>
            I started with design — obsessing over typography, spacing, and the
            quiet moments between clicks. That obsession pulled me into code,
            because nothing kills a great design faster than a slow, broken
            implementation.
          </p>
          <p>
            Today I build full-stack web and mobile apps with React, Next.js,
            and React Native, with a growing focus on AI-powered experiences —
            assistants, summaries, smart workflows. I&apos;m comfortable across
            the stack from Figma file to production deploy.
          </p>
          <p>
            My north star is simple: make the complex feel obvious. If a user
            doesn&apos;t notice the engineering, that&apos;s the highest
            compliment the work can earn.
          </p>
        </div>
      </motion.div>

      <motion.div
        variants={fadeUp}
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
  return (
    <motion.div
      whileHover={{ y: -3 }}
      transition={{ type: "spring", stiffness: 280, damping: 22 }}
      className="group relative flex gap-4 overflow-hidden rounded-2xl border border-border-subtle bg-white/[0.025] p-5 backdrop-blur-sm"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(167,139,250,0.18),transparent_70%)] opacity-0 transition-opacity group-hover:opacity-100"
      />
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-border-subtle bg-[linear-gradient(135deg,rgba(167,139,250,0.22),rgba(139,92,246,0.04))] text-accent">
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
