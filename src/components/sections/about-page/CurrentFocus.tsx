"use client";

import { motion } from "motion/react";
import {
  SpotlightOverlay,
  useSpotlight,
} from "@/components/motion/useSpotlight";
import {
  EASE,
  fadeUpBlur,
  SPRING,
  stagger,
  VIEWPORT,
} from "@/components/motion/tokens";
import { Words, wordsContainer, wordVariant } from "@/components/motion/Words";

const focuses = [
  {
    label: "Now",
    title: "Graduated, building full-time",
    body: "Degree finished and shipping every week. Most of my time goes into production React and Next.js front-ends, with Flutter for the mobile side.",
    accent: "emerald",
  },
  {
    label: "Learning",
    title: "Advanced React, Flutter and automation",
    body: "Going deeper on React Server Components, animation and performance budgets, plus n8n workflows that remove the repetitive work from a project.",
    accent: "violet",
  },
  {
    label: "Open to",
    title: "Front-end roles and freelance",
    body: "Remote-first front-end and design work, worldwide. I'm at my best on early products where design and code aren't split across two teams.",
    accent: "fuchsia",
  },
];

/*
  Only the "Now" card keeps a distinct hue, because green there is carrying
  real meaning: currently available. The other two use the site accent rather
  than inventing a colour per card.
*/
const accentMap = {
  emerald: {
    dot: "bg-ok",
    ping: "bg-ok/70",
    glow: "from-ok/20 to-transparent",
    spotlight: "color-mix(in srgb, var(--ok) 16%, transparent)",
  },
  violet: {
    dot: "bg-accent",
    ping: "bg-accent/70",
    glow: "from-accent/20 to-transparent",
    spotlight: "var(--accent-wash)",
  },
  fuchsia: {
    dot: "bg-accent",
    ping: "bg-accent/70",
    glow: "from-accent/20 to-transparent",
    spotlight: "var(--accent-wash)",
  },
} as const;

type AccentKey = keyof typeof accentMap;

export function CurrentFocus() {
  return (
    <motion.div
      variants={stagger}
      initial="hidden"
      whileInView="show"
      viewport={VIEWPORT}
    >
      <div className="mx-auto max-w-2xl text-center">
        <motion.p
          variants={fadeUpBlur}
          className="mb-4 text-[11px] font-medium uppercase tracking-[0.28em] text-accent-ink/85 sm:text-[12px] sm:tracking-[0.32em]"
        >
          Right now
        </motion.p>
        <motion.h2
          variants={wordsContainer}
          className="text-[28px] font-extrabold leading-[1.05] tracking-tight sm:text-[40px] md:text-[46px]"
        >
          <Words text="Where my" />
          <motion.span
            variants={wordVariant}
            className="inline-block text-accent-ink"
          >
            attention lives.
          </motion.span>
        </motion.h2>
        <motion.p
          variants={fadeUpBlur}
          className="mt-4 text-[14.5px] leading-7 text-foreground/60 sm:text-[15px]"
        >
          A quick snapshot of what I&apos;m building, what I&apos;m learning,
          and what I&apos;m open to.
        </motion.p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-5">
        {focuses.map((f) => (
          <FocusCard key={f.label} {...f} accent={f.accent as AccentKey} />
        ))}
      </div>
    </motion.div>
  );
}

function FocusCard({
  label,
  title,
  body,
  accent,
}: {
  label: string;
  title: string;
  body: string;
  accent: AccentKey;
}) {
  const a = accentMap[accent];
  const { handlers, glow, tiltStyle } = useSpotlight({
    radius: 320,
    tilt: 5,
    color: a.spotlight,
  });

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30, scale: 0.97 },
        show: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: { duration: 0.65, ease: EASE },
        },
      }}
      whileHover={{ y: -7 }}
      transition={SPRING}
      {...handlers}
      style={tiltStyle}
      className="group relative isolate overflow-hidden rounded-2xl border border-border-subtle bg-surface p-6 backdrop-blur-sm transition-colors hover:border-border-strong"
    >
      <SpotlightOverlay glow={glow} />

      <div
        aria-hidden
        className={`pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-gradient-to-br ${a.glow} opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100`}
      />
      <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border-subtle bg-surface-strong px-3 py-1">
        <span className="relative flex h-2 w-2">
          <span
            className={`absolute inline-flex h-full w-full animate-ping rounded-full ${a.ping}`}
          />
          <span
            className={`relative inline-flex h-2 w-2 rounded-full ${a.dot}`}
          />
        </span>
        <span className="text-[10.5px] font-semibold uppercase tracking-[0.18em] text-foreground/70">
          {label}
        </span>
      </div>
      <h3 className="text-[18px] font-bold tracking-tight text-foreground">
        {title}
      </h3>
      <p className="mt-2 text-[13.5px] leading-[1.7] text-foreground/65">
        {body}
      </p>
    </motion.div>
  );
}
