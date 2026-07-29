"use client";

import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  type MotionStyle,
  type MotionValue,
} from "motion/react";
import { useReducedMotionSafe } from "./useReducedMotionSafe";
import type { PointerEvent as ReactPointerEvent } from "react";

type SpotlightOptions = {
  /** Radius of the light pool, in px. */
  radius?: number;
  /** Maximum tilt away from flat, in degrees. 0 keeps the card flat. */
  tilt?: number;
  /** Colour of the light pool. */
  color?: string;
};

type Spotlight = {
  /** Spread onto the card element. */
  handlers: {
    onPointerMove: (e: ReactPointerEvent<HTMLElement>) => void;
    onPointerLeave: () => void;
  };
  /** Pass to <SpotlightOverlay />. */
  glow: { background: MotionValue<string>; opacity: MotionValue<number> };
  /** Spread into the card's `style` prop. Empty when motion is reduced. */
  tiltStyle: MotionStyle;
};

const TILT_SPRING = { stiffness: 200, damping: 20, mass: 0.5 } as const;
const GLOW_SPRING = { stiffness: 160, damping: 26 } as const;

/**
 * Gives a card a light pool that follows the cursor, plus an optional slight
 * 3D lean toward it.
 *
 * Everything runs on motion values, so tracking the pointer never re-renders
 * React, and the whole effect is measured off `currentTarget` rather than a
 * ref, which keeps it usable on any element type.
 */
export function useSpotlight({
  radius = 320,
  tilt = 5,
  color = "var(--accent)",
}: SpotlightOptions = {}): Spotlight {
  const reduce = useReducedMotionSafe();

  const x = useMotionValue(-9999);
  const y = useMotionValue(-9999);
  const opacity = useSpring(0, GLOW_SPRING);
  const rotateX = useSpring(0, TILT_SPRING);
  const rotateY = useSpring(0, TILT_SPRING);

  const background = useMotionTemplate`radial-gradient(${radius}px circle at ${x}px ${y}px, ${color}, transparent 72%)`;

  function onPointerMove(e: ReactPointerEvent<HTMLElement>) {
    // Touch taps would leave the glow stranded mid-card.
    if (e.pointerType === "touch") return;

    const rect = e.currentTarget.getBoundingClientRect();
    const px = e.clientX - rect.left;
    const py = e.clientY - rect.top;

    x.set(px);
    y.set(py);
    opacity.set(1);

    if (reduce || !tilt) return;
    rotateY.set((px / rect.width - 0.5) * tilt * 2);
    rotateX.set((0.5 - py / rect.height) * tilt * 2);
  }

  function onPointerLeave() {
    opacity.set(0);
    rotateX.set(0);
    rotateY.set(0);
  }

  const tiltStyle: MotionStyle =
    reduce || !tilt
      ? {}
      : { rotateX, rotateY, transformPerspective: 1200 };

  return {
    handlers: { onPointerMove, onPointerLeave },
    glow: { background, opacity },
    tiltStyle,
  };
}

/** The light pool itself. Sits behind the card's content. */
export function SpotlightOverlay({
  glow,
  className = "",
}: {
  glow: Spotlight["glow"];
  className?: string;
}) {
  return (
    <motion.div
      aria-hidden
      style={glow}
      className={`pointer-events-none absolute inset-0 -z-10 ${className}`}
    />
  );
}
