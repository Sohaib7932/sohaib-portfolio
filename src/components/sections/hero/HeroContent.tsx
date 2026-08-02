"use client";

import {
  motion,
  useScroll,
  useTransform,
  type Variants,
} from "motion/react";
import { useReducedMotionSafe } from "@/components/motion/useReducedMotionSafe";
import { useRef } from "react";
import { Magnetic } from "@/components/motion/Magnetic";
import { EASE } from "@/components/motion/tokens";

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE },
  },
};

/** The headline is its own stagger group, so it lands one phrase at a time. */
const headline: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09 } },
};

const word: Variants = {
  hidden: { opacity: 0, y: 34, filter: "blur(12px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.85, ease: EASE },
  },
};

export function HeroContent() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotionSafe();

  // On the way out, the copy drifts up slightly faster than the page and
  // dissolves, which hands the eye off to the next section.
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, -70]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <motion.div
      ref={ref}
      variants={container}
      initial="hidden"
      animate="show"
      style={reduce ? undefined : { y, opacity }}
      className="relative z-10 max-w-xl"
    >
      <motion.p
        variants={item}
        className="mb-5 text-[11px] font-medium uppercase tracking-[0.28em] text-accent-ink/85 sm:mb-7 sm:text-[12px] sm:tracking-[0.32em]"
      >
        BUILDING AI-POWERED DIGITAL SOLUTIONS
      </motion.p>

      <motion.h1
        variants={headline}
        className="text-[36px] font-extrabold leading-[1.05] tracking-tight sm:text-[52px] md:text-[58px] lg:text-[68px]"
      >
        <motion.span variants={word} className="inline-block">
          Hi,
        </motion.span>{" "}
        <motion.span variants={word} className="inline-block">
          I&apos;m
        </motion.span>{" "}
        {/* One node, so the gradient stays continuous across the whole name. */}
        <motion.span
          variants={word}
          className="block text-accent-ink"
        >
          Muhammad Sohaib
        </motion.span>
      </motion.h1>

      <motion.p
        variants={item}
        className="mt-6 max-w-md text-[14.5px] leading-[1.7] text-foreground/70 sm:mt-7 sm:text-[15.5px]"
      >
        I&apos;m a Software Engineering graduate and front-end developer
        working in React, Next.js and TypeScript. I turn clean designs into
        fast, accessible interfaces, and I care as much about how a build feels
        as how it looks.
      </motion.p>

      <motion.p
        variants={item}
        className="mt-4 max-w-md text-[14.5px] leading-[1.7] text-foreground/60 sm:text-[15.5px]"
      >
        Two-plus years across UI/UX design and development. HTML and CSS
        first, then WordPress, then React, and now Next.js is where I spend
        most of my time. I also build cross-platform mobile apps with Flutter
        and automate the repetitive parts with n8n. Based in Pakistan, working
        with teams remotely worldwide.
      </motion.p>

      <motion.div variants={item} className="mt-8 sm:mt-10">
        <DownloadCvButton />
      </motion.div>
    </motion.div>
  );
}

function DownloadCvButton() {
  return (
    <Magnetic strength={0.28}>
      <motion.a
        href="/cv.pdf"
        download
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        className="btn-sheen group inline-flex items-center gap-2.5 rounded-full bg-accent px-6 py-3.5 text-[12px] font-semibold uppercase tracking-[0.16em] text-on-accent shadow-[0_10px_30px_-12px_var(--shadow)] transition-shadow hover:shadow-[0_14px_36px_-10px_var(--shadow)] sm:gap-3 sm:px-7 sm:py-4 sm:text-[12.5px] sm:tracking-[0.18em]"
      >
        <DownloadIcon />
        Download CV
        <span className="ml-1 h-1.5 w-1.5 rounded-full bg-on-accent/70 transition-transform group-hover:translate-x-0.5" />
      </motion.a>
    </Magnetic>
  );
}

function DownloadIcon() {
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
      className="transition-transform duration-300 group-hover:translate-y-0.5"
    >
      <path d="M12 3v12" />
      <path d="m6 9 6 6 6-6" />
      <path d="M5 21h14" />
    </svg>
  );
}
