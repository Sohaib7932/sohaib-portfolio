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

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -28 },
  show: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.65, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
};

const lineVariants: Variants = {
  hidden: { scaleY: 0 },
  show: {
    scaleY: 1,
    transition: { duration: 1.4, delay: 0.2, ease: [0.22, 1, 0.36, 1] },
  },
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
    title: "Now: Next.js and beyond",
    body: "Next.js is where I spend most of my time now. Building fast, SEO-friendly web apps with React, TypeScript, and Tailwind, plus exploring AI features that quietly make products feel smarter.",
    tag: "NEXT.JS · NOW",
  },
];

export function JourneyTimeline() {
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
          The journey
        </p>
        <h2 className="text-[28px] font-extrabold leading-[1.05] tracking-tight sm:text-[40px] md:text-[46px]">
          From{" "}
          <span className="bg-gradient-to-r from-white via-white to-accent bg-clip-text text-transparent">
            sketches
          </span>{" "}
          to{" "}
          <span className="bg-gradient-to-r from-fuchsia-300 via-fuchsia-400 to-pink-500 bg-clip-text text-transparent">
            shipped systems.
          </span>
        </h2>
        <p className="mt-4 text-[14.5px] leading-7 text-foreground/60 sm:text-[15px]">
          A few years told in four short chapters, each one teaching me
          something the last one couldn&apos;t.
        </p>
      </motion.div>

      <div className="relative mt-14">
        <motion.div
          aria-hidden
          variants={lineVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="absolute left-[19px] top-2 bottom-2 w-px origin-top bg-gradient-to-b from-accent/60 via-accent/20 to-transparent sm:left-[23px]"
        />

        <div className="flex flex-col gap-7">
          {chapters.map((chapter, i) => (
            <motion.div
              key={chapter.year}
              custom={i}
              variants={itemVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
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
                    className="absolute inset-1 rounded-full bg-[radial-gradient(circle_at_50%_30%,rgba(167,139,250,0.4),transparent_70%)]"
                  />
                  <span className="relative font-mono text-[10px] font-bold tracking-[0.05em] text-accent sm:text-[11px]">
                    {chapter.year}
                  </span>
                </motion.div>
              </div>

              <div className="group/card relative isolate flex-1 overflow-hidden rounded-2xl border border-border-subtle bg-white/[0.025] p-5 backdrop-blur-sm transition-colors hover:border-accent/50 sm:p-6">
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(167,139,250,0.2),transparent_70%)] opacity-0 transition-opacity duration-500 group-hover/card:opacity-100"
                />
                <div className="mb-3 inline-flex items-center rounded-full border border-border-subtle bg-white/[0.04] px-2.5 py-0.5 font-mono text-[9.5px] font-semibold tracking-[0.18em] text-accent/85">
                  {chapter.tag}
                </div>
                <h3 className="text-[18px] font-bold tracking-tight text-foreground sm:text-[20px]">
                  {chapter.title}
                </h3>
                <p className="mt-2 text-[14px] leading-[1.7] text-foreground/65 sm:text-[14.5px]">
                  {chapter.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
