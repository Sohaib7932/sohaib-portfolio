"use client";

import { motion } from "motion/react";
import type { ProjectCategory } from "./types";
import { SPRING_SNAPPY } from "@/components/motion/tokens";

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
          <motion.button
            key={opt}
            type="button"
            onClick={() => onChange(opt)}
            aria-pressed={isActive}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
            transition={SPRING_SNAPPY}
            className={`relative rounded-full border px-4 py-2 text-[12px] font-semibold tracking-wide transition-colors ${
              isActive
                ? "border-transparent text-on-accent"
                : "border-border-strong bg-surface text-foreground/75 hover:border-accent/40 hover:bg-surface-strong hover:text-foreground"
            }`}
          >
            {/* One shared pill slides between filters instead of four fading. */}
            {isActive && (
              <motion.span
                layoutId="filter-active"
                className="absolute inset-0 -z-10 rounded-full bg-accent shadow-[0_10px_30px_-12px_var(--shadow)]"
                transition={SPRING_SNAPPY}
              />
            )}
            <span className="relative">{opt}</span>
          </motion.button>
        );
      })}
    </div>
  );
}
