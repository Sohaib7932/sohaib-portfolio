"use client";

import { motion } from "motion/react";
import { EASE, VIEWPORT } from "./tokens";

/**
 * The hairline that opens every section. Draws outward from the centre the
 * first time it enters view, so each new section announces itself.
 */
export function SectionDivider({ className = "" }: { className?: string }) {
  return (
    <motion.div
      aria-hidden
      initial={{ scaleX: 0, opacity: 0 }}
      whileInView={{ scaleX: 1, opacity: 1 }}
      viewport={VIEWPORT}
      transition={{ duration: 1.1, ease: EASE }}
      className={`pointer-events-none absolute inset-x-0 top-0 mx-auto h-px max-w-3xl bg-gradient-to-r from-transparent via-accent/40 to-transparent ${className}`}
    />
  );
}
