"use client";

import { motion, type Variants } from "motion/react";

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
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export function HeroContent() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="relative z-10 max-w-xl"
    >
      <motion.p
        variants={item}
        className="mb-7 text-[12px] font-medium uppercase tracking-[0.32em] text-accent/85"
      >
        The Architect of Digital Experiences
      </motion.p>

      <motion.h1
        variants={item}
        className="text-[44px] font-extrabold leading-[1.05] tracking-tight sm:text-[58px] lg:text-[68px]"
      >
        Hi, I&apos;m{" "}
        <span className="block bg-gradient-to-r from-white via-white to-accent bg-clip-text text-transparent">
          Muhammad Sohaib
        </span>
      </motion.h1>

      <motion.p
        variants={item}
        className="mt-7 max-w-md text-[15.5px] leading-[1.7] text-foreground/70"
      >
        I bridge the gap between complex engineering and elegant human-centric
        design. With a deep mastery of the full digital stack, I create
        platforms that don&apos;t just function — they resonate.
      </motion.p>

      <motion.p
        variants={item}
        className="mt-4 max-w-md text-[15.5px] leading-[1.7] text-foreground/60"
      >
        My approach is rooted in the belief that code should be as clean as the
        interfaces it powers. Whether it&apos;s high-performance backends or
        fluid, glassmorphic frontends, precision is the goal.
      </motion.p>

      <motion.div variants={item} className="mt-10">
        <DownloadCvButton />
      </motion.div>
    </motion.div>
  );
}

function DownloadCvButton() {
  return (
    <motion.a
      href="/cv.pdf"
      download
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className="group inline-flex items-center gap-3 rounded-full bg-accent px-7 py-4 text-[12.5px] font-semibold uppercase tracking-[0.18em] text-[#1a0b2e] shadow-[0_15px_45px_-15px_rgba(167,139,250,0.8)] transition-shadow hover:shadow-[0_18px_55px_-12px_rgba(167,139,250,1)]"
    >
      <DownloadIcon />
      Download CV
      <span className="ml-1 h-1.5 w-1.5 rounded-full bg-[#1a0b2e]/70 transition-transform group-hover:translate-x-0.5" />
    </motion.a>
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
    >
      <path d="M12 3v12" />
      <path d="m6 9 6 6 6-6" />
      <path d="M5 21h14" />
    </svg>
  );
}
