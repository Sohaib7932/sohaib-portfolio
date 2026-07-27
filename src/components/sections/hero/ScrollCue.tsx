"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { EASE } from "@/components/motion/tokens";

/**
 * The "there's more below" hint. Fades itself out the moment the reader takes
 * the hint, so it never lingers as clutter.
 */
export function ScrollCue() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 220], [1, 0]);

  return (
    <motion.div
      aria-hidden
      style={{ opacity }}
      className="pointer-events-none absolute inset-x-0 bottom-8 z-10 hidden justify-center lg:flex"
    >
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.4, ease: EASE }}
        className="flex flex-col items-center gap-3"
      >
        <span className="text-[10px] font-semibold uppercase tracking-[0.32em] text-foreground/40">
          Scroll
        </span>
        <span className="relative h-12 w-px overflow-hidden bg-white/10">
          <motion.span
            animate={{ y: ["-100%", "100%"] }}
            transition={{
              duration: 1.9,
              ease: "easeInOut",
              repeat: Infinity,
              repeatDelay: 0.4,
            }}
            className="absolute inset-x-0 top-0 h-6 bg-gradient-to-b from-transparent via-accent to-transparent"
          />
        </span>
      </motion.div>
    </motion.div>
  );
}
