"use client";

import { motion, useScroll, useSpring } from "motion/react";
import { SPRING_SCROLL } from "./tokens";

/**
 * Hairline reading-progress bar pinned above the navbar.
 *
 * Driven by a spring so it eases into position instead of snapping frame to
 * frame, which is what makes it read as polish rather than as a widget.
 */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, SPRING_SCROLL);

  return (
    <motion.div
      aria-hidden
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[60] h-[2px] origin-left bg-gradient-to-r from-accent-strong via-fuchsia-400 to-accent shadow-[0_0_12px_rgba(167,139,250,0.7)]"
    />
  );
}
