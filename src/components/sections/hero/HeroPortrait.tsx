"use client";

import { motion } from "motion/react";
import { ExperienceBadge } from "./ExperienceBadge";

export function HeroPortrait() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.94, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
      className="relative mx-auto w-full max-w-[440px]"
    >
      <div
        aria-hidden
        className="absolute -inset-8 -z-10 rounded-[40px] bg-[radial-gradient(circle_at_50%_30%,rgba(167,139,250,0.35),transparent_60%)] blur-2xl"
      />

      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 6, ease: "easeInOut", repeat: Infinity }}
        className="relative aspect-[4/5] overflow-hidden rounded-[28px] border border-border-strong bg-gradient-to-br from-white/[0.06] via-white/[0.025] to-transparent shadow-[0_30px_80px_-30px_rgba(139,92,246,0.45)]"
      >
        <PortraitImage />

        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-[28px] bg-gradient-to-t from-black/50 via-transparent to-transparent"
        />
      </motion.div>

      <ExperienceBadge />
    </motion.div>
  );
}

function PortraitImage() {
  return (
    <img
      src="/sohaib.JPG"
      alt="Muhammad Sohaib"
      className="h-full w-full object-cover object-center"
    />
  );
}
