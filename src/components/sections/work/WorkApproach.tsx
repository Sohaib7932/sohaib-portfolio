"use client";

import { motion } from "motion/react";
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

const pillars = [
  {
    number: "01",
    title: "Design before code",
    body: "Every project starts in Figma, even when I'm the only one who'll see it. Layout, type, color, small interactions. The fastest way to write less code is to know exactly what to build.",
  },
  {
    number: "02",
    title: "Ship the smallest real thing",
    body: "I'd rather ship one polished feature than five half-done ones. The first version goes live as soon as it actually works, then real feedback decides what comes next.",
  },
  {
    number: "03",
    title: "Performance is a feature",
    body: "Animations at 60fps. Pages under 1 second. Bundles measured, not guessed. If it lags, it's not done, no matter how clever the code is underneath.",
  },
];

export function WorkApproach() {
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
          className="mb-4 text-[11px] font-medium uppercase tracking-[0.28em] text-accent/85 sm:text-[12px] sm:tracking-[0.32em]"
        >
          The approach
        </motion.p>
        <motion.h2
          variants={wordsContainer}
          className="text-[28px] font-extrabold leading-[1.05] tracking-tight sm:text-[40px] md:text-[46px]"
        >
          <Words text="How these" />
          <motion.span
            variants={wordVariant}
            className="inline-block bg-gradient-to-r from-fuchsia-300 via-fuchsia-400 to-pink-500 bg-clip-text text-transparent"
          >
            actually got built.
          </motion.span>
        </motion.h2>
        <motion.p
          variants={fadeUpBlur}
          className="mt-4 text-[14.5px] leading-7 text-foreground/60 sm:text-[15px]"
        >
          Three rules I always come back to, across web, mobile, and AI.
        </motion.p>
      </motion.div>

      <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5">
        {pillars.map((p, i) => (
          <PillarCard key={p.number} index={i} {...p} />
        ))}
      </div>
    </div>
  );
}

function PillarCard({
  number,
  title,
  body,
  index,
}: {
  number: string;
  title: string;
  body: string;
  index: number;
}) {
  const { handlers, glow, tiltStyle } = useSpotlight({ radius: 340, tilt: 5 });

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
      className="group relative isolate overflow-hidden rounded-2xl border border-border-subtle bg-white/[0.025] p-6 backdrop-blur-sm transition-colors hover:border-accent/40 sm:p-7"
    >
      <SpotlightOverlay glow={glow} />

      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      />

      <span className="font-mono text-[11px] font-semibold tracking-[0.18em] text-foreground/35 transition-colors duration-500 group-hover:text-accent/70">
        {number}
      </span>
      <h3 className="mt-4 text-[18px] font-bold tracking-tight text-foreground sm:text-[20px]">
        {title}
      </h3>
      <p className="mt-3 text-[13.5px] leading-[1.7] text-foreground/65">
        {body}
      </p>
    </motion.div>
  );
}
