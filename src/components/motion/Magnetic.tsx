"use client";

import { motion, useSpring } from "motion/react";
import { useReducedMotionSafe } from "./useReducedMotionSafe";
import type { PointerEvent as ReactPointerEvent, ReactNode } from "react";

const MAGNET_SPRING = { stiffness: 260, damping: 18, mass: 0.4 } as const;

/**
 * Makes a button lean toward the cursor while it's hovered, then spring back.
 *
 * Wraps rather than replaces the child, so the button keeps its own markup,
 * classes and focus behaviour. Mouse only, and inert when motion is reduced.
 */
export function Magnetic({
  children,
  /** Fraction of the cursor's offset from centre that the button follows. */
  strength = 0.22,
  /** Cap on the travel distance, in px. */
  max = 14,
  /**
   * Classes for the wrapper, including its display. Replaces the default rather
   * than merging with it, so a caller can pass `hidden lg:inline-block` without
   * fighting a hardcoded `inline-block` for the same cascade slot.
   */
  className = "inline-block",
}: {
  children: ReactNode;
  strength?: number;
  max?: number;
  className?: string;
}) {
  const reduce = useReducedMotionSafe();
  const x = useSpring(0, MAGNET_SPRING);
  const y = useSpring(0, MAGNET_SPRING);

  if (reduce) {
    return <span className={className}>{children}</span>;
  }

  function onPointerMove(e: ReactPointerEvent<HTMLSpanElement>) {
    if (e.pointerType !== "mouse") return;
    const rect = e.currentTarget.getBoundingClientRect();
    const dx = e.clientX - (rect.left + rect.width / 2);
    const dy = e.clientY - (rect.top + rect.height / 2);
    x.set(clamp(dx * strength, max));
    y.set(clamp(dy * strength, max));
  }

  function onPointerLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.span
      style={{ x, y }}
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
      className={className}
    >
      {children}
    </motion.span>
  );
}

function clamp(value: number, max: number) {
  return Math.max(-max, Math.min(max, value));
}
