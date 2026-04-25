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
      className="absolute -bottom-5 -left-5 z-20 flex items-center gap-3 rounded-2xl border border-border-strong bg-[#120a22]/85 px-5 py-3.5 backdrop-blur-md sm:-left-8"
    >
      <span className="text-[34px] font-extrabold leading-none tracking-tight text-foreground">
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
