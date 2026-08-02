"use client";

import {
  motion,
  useScroll,
  useSpring,
  type Variants,
} from "motion/react";
import { useReducedMotionSafe } from "@/components/motion/useReducedMotionSafe";
import { useRef } from "react";
import {
  SpotlightOverlay,
  useSpotlight,
} from "@/components/motion/useSpotlight";
import {
  EASE,
  fadeUpBlur,
  SPRING_SCROLL,
  stagger,
  VIEWPORT,
  VIEWPORT_NEAR,
} from "@/components/motion/tokens";
import { Words, wordsContainer, wordVariant } from "@/components/motion/Words";

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -32 },
  show: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: EASE },
  }),
};

const chapters = [
  {
    year: "2022",
    title: "Falling for design",
    body: "Started in UI/UX before writing any real code. Spent late nights in Figma working on typography, spacing, and the small moments between clicks. That love for detail still shapes everything I build today.",
    tag: "DESIGN",
  },
  {
    year: "2023",
    title: "HTML, CSS, and WordPress",
    body: "Got into web development by learning HTML and CSS first, then moved to WordPress. Built a few client sites and quickly realised I wanted more control over how things actually work under the hood.",
    tag: "WEB BASICS",
  },
  {
    year: "2024",
    title: "Moved to React",
    body: "Jumped from WordPress to React and never looked back. Picked up modern front-end habits, component thinking, state, animation, and started turning Figma files into smooth, real interfaces.",
    tag: "REACT",
  },
  {
    year: "2025",
    title: "Next.js, Flutter, and AI",
    body: "Next.js became home for the web work: fast, SEO-friendly apps in React, TypeScript, and Tailwind. Flutter covered the mobile side, and I started adding AI features that quietly make a product feel smarter.",
    tag: "NEXT.JS · FLUTTER",
  },
  {
    year: "2026",
    title: "Now: graduated and building full-time",
    body: "Software Engineering degree finished. All of that time now goes into production front-ends, plus n8n automations that take the repetitive work out of a project. Same obsession with detail, more hours in the day for it.",
    tag: "GRADUATED · NOW",
  },
];

export function JourneyTimeline() {
  const trackRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotionSafe();

  // The spine fills as the reader travels down the chapters.
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start 75%", "end 65%"],
  });
  const scaleY = useSpring(scrollYProgress, SPRING_SCROLL);

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
          The journey
        </motion.p>
        <motion.h2
          variants={wordsContainer}
          className="text-[28px] font-extrabold leading-[1.05] tracking-tight sm:text-[40px] md:text-[46px]"
        >
          <Words text="From" />
          <motion.span
            variants={wordVariant}
            className="mr-[0.25em] inline-block text-accent-ink"
          >
            sketches
          </motion.span>
          <Words text="to" />
          <motion.span
            variants={wordVariant}
            className="inline-block text-accent-ink"
          >
            shipped systems.
          </motion.span>
        </motion.h2>
        <motion.p
          variants={fadeUpBlur}
          className="mt-4 text-[14.5px] leading-7 text-foreground/60 sm:text-[15px]"
        >
          A few years told in four short chapters, each one teaching me
          something the last one couldn&apos;t.
        </motion.p>
      </motion.div>

      <div ref={trackRef} className="relative mt-14">
        <div
          aria-hidden
          className="absolute left-[19px] top-2 bottom-2 w-px bg-surface-strong sm:left-[23px]"
        />
        <motion.div
          aria-hidden
          style={reduce ? undefined : { scaleY }}
          className="absolute left-[19px] top-2 bottom-2 w-px origin-top bg-gradient-to-b from-accent/70 via-accent/40 to-accent/10 sm:left-[23px]"
        />

        <div className="flex flex-col gap-7">
          {chapters.map((chapter, i) => (
            <Chapter key={chapter.year} index={i} {...chapter} />
          ))}
        </div>
      </div>
    </div>
  );
}

function Chapter({
  year,
  title,
  body,
  tag,
  index,
}: {
  year: string;
  title: string;
  body: string;
  tag: string;
  index: number;
}) {
  const { handlers, glow } = useSpotlight({ radius: 380, tilt: 0 });

  return (
    <motion.div
      custom={index}
      variants={itemVariants}
      initial="hidden"
      whileInView="show"
      viewport={VIEWPORT_NEAR}
      className="group relative flex gap-5 sm:gap-7"
    >
      <div className="relative z-10 flex shrink-0 flex-col items-center">
        <motion.div
          whileHover={{ scale: 1.15 }}
          transition={{ type: "spring", stiffness: 320, damping: 20 }}
          className="relative flex h-10 w-10 items-center justify-center rounded-full border border-accent/40 bg-background sm:h-12 sm:w-12"
        >
          <span
            aria-hidden
            className="absolute inset-1 rounded-full bg-[radial-gradient(circle_at_50%_30%,var(--accent-wash),transparent_70%)]"
          />
          <motion.span
            aria-hidden
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: [0.8, 1.35, 1], opacity: [0, 0.6, 0] }}
            viewport={VIEWPORT_NEAR}
            transition={{ duration: 1.1, ease: EASE, delay: index * 0.12 }}
            className="absolute inset-0 rounded-full border border-accent/60"
          />
          <span className="relative font-mono text-[10px] font-bold tracking-[0.05em] text-accent-ink sm:text-[11px]">
            {year}
          </span>
        </motion.div>
      </div>

      <div
        {...handlers}
        className="group/card relative isolate flex-1 overflow-hidden rounded-2xl border border-border-subtle bg-surface p-5 backdrop-blur-sm transition-colors hover:border-accent/50 sm:p-6"
      >
        <SpotlightOverlay glow={glow} />
        <div className="mb-3 inline-flex items-center rounded-full border border-border-subtle bg-surface-strong px-2.5 py-0.5 font-mono text-[9.5px] font-semibold tracking-[0.18em] text-accent-ink/85">
          {tag}
        </div>
        <h3 className="text-[18px] font-bold tracking-tight text-foreground sm:text-[20px]">
          {title}
        </h3>
        <p className="mt-2 text-[14px] leading-[1.7] text-foreground/65 sm:text-[14.5px]">
          {body}
        </p>
      </div>
    </motion.div>
  );
}
