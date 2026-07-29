"use client";

import {
  motion,
  useScroll,
  useSpring,
  type Variants,
} from "motion/react";
import { useReducedMotionSafe } from "@/components/motion/useReducedMotionSafe";
import { useRef } from "react";
import { processSteps } from "./data";
import {
  SpotlightOverlay,
  useSpotlight,
} from "@/components/motion/useSpotlight";
import {
  EASE,
  fadeUpBlur,
  SPRING,
  SPRING_SCROLL,
  stagger,
  VIEWPORT,
} from "@/components/motion/tokens";
import { Words, wordsContainer, wordVariant } from "@/components/motion/Words";

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 34 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      delay: 0.15 + i * 0.12,
      ease: EASE,
    },
  }),
};

const badgeVariants: Variants = {
  hidden: { opacity: 0, scale: 0.4, rotate: -90 },
  show: (i: number) => ({
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 220,
      damping: 16,
      delay: 0.35 + i * 0.12,
    },
  }),
};

export function ProcessTimeline() {
  const gridRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotionSafe();

  // The connector fills in step with the scroll rather than all at once, so it
  // feels like the reader is drawing the line themselves.
  const { scrollYProgress } = useScroll({
    target: gridRef,
    offset: ["start 80%", "end 70%"],
  });
  const scaleX = useSpring(scrollYProgress, SPRING_SCROLL);

  return (
    <div className="mt-20 sm:mt-28">
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={VIEWPORT}
        className="mx-auto max-w-2xl text-center"
      >
        <motion.p
          variants={fadeUpBlur}
          className="mb-4 text-[12px] font-medium uppercase tracking-[0.32em] text-accent-ink/85"
        >
          How we work together
        </motion.p>
        <motion.h3
          variants={wordsContainer}
          className="text-[26px] font-extrabold tracking-tight sm:text-[40px]"
        >
          <Words text="A simple," />
          <motion.span
            variants={wordVariant}
            className="inline-block text-accent-ink"
          >
            honest process.
          </motion.span>
        </motion.h3>
        <motion.p
          variants={fadeUpBlur}
          className="mt-4 text-[15px] leading-7 text-foreground/60"
        >
          No surprises, no buzzwords. Just four simple steps that turn an idea
          into something real.
        </motion.p>
      </motion.div>

      <div ref={gridRef} className="relative mt-16">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-12 top-1/2 hidden h-px -translate-y-1/2 bg-surface-strong lg:block"
        />
        <motion.div
          aria-hidden
          style={reduce ? undefined : { scaleX }}
          className="pointer-events-none absolute inset-x-12 top-1/2 hidden h-px origin-left -translate-y-1/2 bg-gradient-to-r from-accent/60 via-accent/45 to-accent/10 lg:block"
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {processSteps.map((step, i) => (
            <ProcessStepCard key={step.step} index={i} {...step} />
          ))}
        </div>
      </div>
    </div>
  );
}

function ProcessStepCard({
  step,
  title,
  description,
  index,
}: {
  step: string;
  title: string;
  description: string;
  index: number;
}) {
  const { handlers, glow, tiltStyle } = useSpotlight({ radius: 280, tilt: 5 });

  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="show"
      viewport={VIEWPORT}
      whileHover={{ y: -8 }}
      transition={SPRING}
      {...handlers}
      style={tiltStyle}
      className="group relative isolate overflow-hidden rounded-2xl border border-border-subtle bg-surface p-6 text-center backdrop-blur-sm transition-colors hover:border-accent/60"
    >
      <SpotlightOverlay glow={glow} />

      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      />

      <motion.div
        custom={index}
        variants={badgeVariants}
        className="relative mx-auto flex h-16 w-16 items-center justify-center"
      >
        <span
          aria-hidden
          className="absolute inset-0 rounded-full border border-accent/25 transition-transform duration-700 ease-out group-hover:scale-110"
        />
        <span
          aria-hidden
          className="absolute inset-1.5 rounded-full border border-border-strong bg-[radial-gradient(circle_at_50%_30%,var(--accent-wash),var(--background)_70%)]"
        />
        <span
          aria-hidden
          className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_50%_50%,var(--accent-wash),transparent_60%)] opacity-0 blur-md transition-opacity duration-500 group-hover:opacity-100"
        />
        <span className="relative font-mono text-[14px] font-bold tracking-[0.12em] text-accent-ink">
          {step}
        </span>
      </motion.div>

      <h4 className="mt-6 text-[17px] font-bold tracking-tight text-foreground">
        {title}
      </h4>
      <p className="mx-auto mt-2.5 max-w-[28ch] text-[13.5px] leading-6 text-foreground/60">
        {description}
      </p>
    </motion.div>
  );
}
