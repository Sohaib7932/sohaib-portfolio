"use client";

import { motion, type Variants } from "motion/react";

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
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const focuses = [
  {
    label: "Now",
    title: "Final-year project and front-end roles",
    body: "Wrapping up PayEase, my palm-vein payment app, and looking for front-end roles where I can build clean, real-world products.",
    accent: "emerald",
  },
  {
    label: "Learning",
    title: "Deeper front-end and AI",
    body: "Getting better at advanced React patterns, Next.js, and adding small AI features that actually help users, not just for show.",
    accent: "violet",
  },
  {
    label: "Open to",
    title: "Freelance and full-time",
    body: "Remote-first front-end and design work. I love early products where design and code aren't split between two teams.",
    accent: "fuchsia",
  },
];

const accentMap = {
  emerald: {
    dot: "bg-emerald-400",
    ping: "bg-emerald-400/70",
    glow: "from-emerald-400/20 to-transparent",
  },
  violet: {
    dot: "bg-violet-400",
    ping: "bg-violet-400/70",
    glow: "from-violet-400/20 to-transparent",
  },
  fuchsia: {
    dot: "bg-fuchsia-400",
    ping: "bg-fuchsia-400/70",
    glow: "from-fuchsia-400/20 to-transparent",
  },
} as const;

type AccentKey = keyof typeof accentMap;

export function CurrentFocus() {
  return (
    <motion.div
      variants={stagger}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
    >
      <motion.div variants={fadeUp} className="mx-auto max-w-2xl text-center">
        <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.28em] text-accent/85 sm:text-[12px] sm:tracking-[0.32em]">
          Right now
        </p>
        <h2 className="text-[28px] font-extrabold leading-[1.05] tracking-tight sm:text-[40px] md:text-[46px]">
          Where my{" "}
          <span className="bg-gradient-to-r from-fuchsia-300 via-fuchsia-400 to-pink-500 bg-clip-text text-transparent">
            attention lives.
          </span>
        </h2>
        <p className="mt-4 text-[14.5px] leading-7 text-foreground/60 sm:text-[15px]">
          A quick snapshot of what I&apos;m building, what I&apos;m learning,
          and what I&apos;m open to.
        </p>
      </motion.div>

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
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 26 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
        },
      }}
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 280, damping: 22 }}
      className="group relative isolate overflow-hidden rounded-2xl border border-border-subtle bg-white/[0.025] p-6 backdrop-blur-sm transition-colors hover:border-border-strong"
    >
      <div
        aria-hidden
        className={`pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-gradient-to-br ${a.glow} opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100`}
      />
      <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border-subtle bg-white/[0.04] px-3 py-1">
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
