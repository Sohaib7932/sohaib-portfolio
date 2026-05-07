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

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

const pillars = [
  {
    number: "01",
    title: "Design before code",
    body: "Every project starts in Figma — even when I'm the only one who'll see it. Layout, type, color, micro-interactions. The fastest way to write less code is to know exactly what to build.",
  },
  {
    number: "02",
    title: "Ship the smallest real thing",
    body: "I'd rather ship one polished feature than five half-done ones. The first version goes live as soon as it's honest about what works — feedback then writes the roadmap.",
  },
  {
    number: "03",
    title: "Performance is a feature",
    body: "Animations at 60fps. Pages under 1s. Bundles measured, not guessed. If it lags, it's not done — no matter how clever the architecture is underneath.",
  },
];

export function WorkApproach() {
  return (
    <div>
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="mx-auto max-w-2xl text-center"
      >
        <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.28em] text-accent/85 sm:text-[12px] sm:tracking-[0.32em]">
          The approach
        </p>
        <h2 className="text-[28px] font-extrabold leading-[1.05] tracking-tight sm:text-[40px] md:text-[46px]">
          How these{" "}
          <span className="bg-gradient-to-r from-fuchsia-300 via-fuchsia-400 to-pink-500 bg-clip-text text-transparent">
            actually got built.
          </span>
        </h2>
        <p className="mt-4 text-[14.5px] leading-7 text-foreground/60 sm:text-[15px]">
          Three rules I keep coming back to — across web, mobile, and AI.
        </p>
      </motion.div>

      <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5">
        {pillars.map((p, i) => (
          <motion.div
            key={p.number}
            custom={i}
            variants={cardVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 280, damping: 22 }}
            className="group relative isolate overflow-hidden rounded-2xl border border-border-subtle bg-white/[0.025] p-6 backdrop-blur-sm transition-colors hover:border-accent/40 sm:p-7"
          >
            <div
              aria-hidden
              className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(167,139,250,0.2),transparent_70%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            />

            <span className="font-mono text-[11px] font-semibold tracking-[0.18em] text-foreground/35">
              {p.number}
            </span>
            <h3 className="mt-4 text-[18px] font-bold tracking-tight text-foreground sm:text-[20px]">
              {p.title}
            </h3>
            <p className="mt-3 text-[13.5px] leading-[1.7] text-foreground/65">
              {p.body}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
