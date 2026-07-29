"use client";

import { motion } from "motion/react";
import { CountUp } from "@/components/motion/CountUp";

export function ExperienceBadge() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      whileHover={{ y: -4, scale: 1.04 }}
      transition={{
        delay: 0.9,
        duration: 0.6,
        type: "spring",
        stiffness: 220,
        damping: 22,
      }}
      className="absolute -bottom-4 -left-3 z-20 flex items-center gap-2.5 rounded-2xl border border-border-strong bg-elevated px-4 py-3 backdrop-blur-md sm:-bottom-5 sm:-left-8 sm:gap-3 sm:px-5 sm:py-3.5"
    >
      <span className="text-[28px] font-extrabold leading-none tracking-tight text-foreground sm:text-[34px]">
        <CountUp to={2} duration={1.2} />
        <span className="text-accent-ink">+</span>
      </span>
      <span className="text-[10.5px] font-semibold uppercase leading-tight tracking-[0.18em] text-foreground/65">
        Years of
        <br />
        Experience
      </span>
    </motion.div>
  );
}
