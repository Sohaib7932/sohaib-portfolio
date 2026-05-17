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
        className="mb-5 text-[11px] font-medium uppercase tracking-[0.28em] text-accent/85 sm:mb-7 sm:text-[12px] sm:tracking-[0.32em]"
      >
        BUILDING AI-POWERED DIGITAL SOLUTIONS
      </motion.p>

      <motion.h1
        variants={item}
        className="text-[36px] font-extrabold leading-[1.05] tracking-tight sm:text-[52px] md:text-[58px] lg:text-[68px]"
      >
        Hi, I&apos;m{" "}
        <span className="block bg-gradient-to-r from-white via-white to-accent bg-clip-text text-transparent">
          Muhammad Sohaib
        </span>
      </motion.h1>

      <motion.p
        variants={item}
        className="mt-6 max-w-md text-[14.5px] leading-[1.7] text-foreground/70 sm:mt-7 sm:text-[15.5px]"
      >
        I&apos;m a final-year Software Engineering student who loves building
        modern web apps with React and Next.js. I focus mostly on front-end
        work, turning clean designs into smooth, fast websites people actually
        enjoy using.
      </motion.p>

      <motion.p
        variants={item}
        className="mt-4 max-w-md text-[14.5px] leading-[1.7] text-foreground/60 sm:text-[15.5px]"
      >
        I have 3+ years of experience in UI/UX design and 2.5+ years in
        development. I started with HTML and CSS, moved to WordPress, then to
        React, and now Next.js is where I spend most of my time. My goal is
        simple: build things that look good and feel good to use.
      </motion.p>

      <motion.div variants={item} className="mt-8 sm:mt-10">
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
      className="group inline-flex items-center gap-2.5 rounded-full bg-accent px-6 py-3.5 text-[12px] font-semibold uppercase tracking-[0.16em] text-[#1a0b2e] shadow-[0_15px_45px_-15px_rgba(167,139,250,0.8)] transition-shadow hover:shadow-[0_18px_55px_-12px_rgba(167,139,250,1)] sm:gap-3 sm:px-7 sm:py-4 sm:text-[12.5px] sm:tracking-[0.18em]"
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
