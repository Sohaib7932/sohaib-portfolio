"use client";

import { motion } from "motion/react";
import { Parallax } from "@/components/motion/Parallax";
import { fadeUpBlur, stagger, VIEWPORT } from "@/components/motion/tokens";
import { Words, wordsContainer, wordVariant } from "@/components/motion/Words";

const tones = {
  fuchsia:
    "bg-gradient-to-r from-fuchsia-300 via-fuchsia-400 to-pink-500 bg-clip-text text-transparent",
  accent:
    "bg-gradient-to-r from-white via-white to-accent bg-clip-text text-transparent",
} as const;

type SectionHeaderProps = {
  eyebrow: string;
  /** The plain part of the heading. Reveals one word at a time. */
  title: string;
  /** The highlighted phrase. Stays one node so its gradient runs unbroken. */
  highlight: string;
  body: string;
  tone?: keyof typeof tones;
  /** Heading size, for the smaller sub-section headers. */
  size?: "lg" | "md";
};

const sizes = {
  lg: "text-[32px] sm:text-[46px] md:text-[52px] lg:text-[58px]",
  md: "text-[28px] sm:text-[40px] md:text-[46px]",
} as const;

/**
 * The heading block every section opens with.
 *
 * One implementation means the eyebrow, the word-by-word title and the body
 * copy arrive on exactly the same rhythm in all five sections, and the whole
 * block drifts a touch as it crosses the viewport.
 */
export function SectionHeader({
  eyebrow,
  title,
  highlight,
  body,
  tone = "fuchsia",
  size = "lg",
}: SectionHeaderProps) {
  return (
    <Parallax speed={0.05} className="mx-auto max-w-3xl text-center">
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={VIEWPORT}
      >
        <motion.p
          variants={fadeUpBlur}
          className="mb-4 flex items-center justify-center gap-3 text-[11px] font-medium uppercase tracking-[0.28em] text-accent/85 sm:mb-5 sm:text-[12px] sm:tracking-[0.32em]"
        >
          <motion.span
            aria-hidden
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={VIEWPORT}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="h-px w-6 origin-right bg-accent/50 sm:w-8"
          />
          {eyebrow}
          <motion.span
            aria-hidden
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={VIEWPORT}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="h-px w-6 origin-left bg-accent/50 sm:w-8"
          />
        </motion.p>

        <motion.h2
          variants={wordsContainer}
          className={`font-extrabold leading-[1.05] tracking-tight ${sizes[size]}`}
        >
          <Words text={title} />
          <motion.span
            variants={wordVariant}
            className={`inline-block ${tones[tone]}`}
          >
            {highlight}
          </motion.span>
        </motion.h2>

        <motion.p
          variants={fadeUpBlur}
          className="mx-auto mt-5 max-w-xl text-[14.5px] leading-[1.7] text-foreground/65 sm:mt-6 sm:text-[15.5px]"
        >
          {body}
        </motion.p>
      </motion.div>
    </Parallax>
  );
}
