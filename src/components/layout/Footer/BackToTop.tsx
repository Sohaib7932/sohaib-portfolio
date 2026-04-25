"use client";

import { motion } from "motion/react";

export function BackToTop() {
  return (
    <motion.button
      type="button"
      whileHover={{ y: -3 }}
      whileTap={{ scale: 0.96 }}
      onClick={() => {
        if (typeof window !== "undefined") {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      }}
      className="group inline-flex items-center gap-2 rounded-full border border-border-subtle bg-white/[0.025] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-foreground/75 transition-colors hover:border-border-strong hover:text-foreground"
    >
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
        className="transition-transform group-hover:-translate-y-0.5"
      >
        <path d="m18 15-6-6-6 6" />
      </svg>
      Back to top
    </motion.button>
  );
}
