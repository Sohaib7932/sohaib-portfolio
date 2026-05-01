"use client";

import { motion } from "motion/react";

export function ExperienceBadge() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        delay: 0.9,
        duration: 0.6,
        type: "spring",
        stiffness: 220,
        damping: 22,
      }}
      className="absolute -bottom-4 -left-3 z-20 flex items-center gap-2.5 rounded-2xl border border-border-strong bg-[#120a22]/85 px-4 py-3 backdrop-blur-md sm:-bottom-5 sm:-left-8 sm:gap-3 sm:px-5 sm:py-3.5"
    >
      <span className="text-[28px] font-extrabold leading-none tracking-tight text-foreground sm:text-[34px]">
        3<span className="text-accent">+</span>
      </span>
      <span className="text-[10.5px] font-semibold uppercase leading-tight tracking-[0.18em] text-foreground/65">
        Years of
        <br />
        Experience
      </span>
    </motion.div>
  );
}
