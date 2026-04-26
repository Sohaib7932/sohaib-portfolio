"use client";

import { motion } from "motion/react";
import type { ProjectCategory } from "./types";

export type FilterValue = "All" | ProjectCategory;

export function CategoryFilter({
  options,
  active,
  onChange,
}: {
  options: FilterValue[];
  active: FilterValue;
  onChange: (next: FilterValue) => void;
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((opt) => {
        const isActive = opt === active;
        return (
          <button
            key={opt}
            type="button"
            onClick={() => onChange(opt)}
            className={`relative rounded-full border px-4 py-2 text-[12px] font-semibold tracking-wide transition-colors ${
              isActive
                ? "border-transparent text-[#1a0b2e]"
                : "border-border-strong bg-white/[0.025] text-foreground/75 hover:bg-white/[0.05] hover:text-foreground"
            }`}
          >
            {isActive && (
              <motion.span
                layoutId="filter-active"
                className="absolute inset-0 -z-10 rounded-full bg-accent shadow-[0_8px_28px_-12px_rgba(167,139,250,0.9)]"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
            <span className="relative">{opt}</span>
          </button>
        );
      })}
    </div>
  );
}
