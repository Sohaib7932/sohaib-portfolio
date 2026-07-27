"use client";

import { motion, type Variants } from "motion/react";
import { EASE } from "./tokens";

/** Applied to the heading itself, which becomes the stagger group. */
export const wordsContainer: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
};

/**
 * One word arriving: up, into focus, into view. Also used directly on gradient
 * spans that need to stay a single node.
 */
export const wordVariant: Variants = {
  hidden: { opacity: 0, y: 26, filter: "blur(10px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.75, ease: EASE },
  },
};

/**
 * Splits a phrase into words that reveal one after another.
 *
 * Spacing comes from a right margin rather than a literal space character, so
 * the words stay inline-block (needed to transform them) while still wrapping
 * naturally at any width.
 */
export function Words({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) {
  return (
    <>
      {text.split(" ").map((word, i) => (
        <motion.span
          key={`${word}-${i}`}
          variants={wordVariant}
          className={`inline-block mr-[0.25em] ${className}`}
        >
          {word}
        </motion.span>
      ))}
    </>
  );
}
