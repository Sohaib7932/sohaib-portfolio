"use client";

import { motion, useSpring } from "motion/react";
import { useReducedMotionSafe } from "./useReducedMotionSafe";
import { useEffect, useSyncExternalStore } from "react";

const GLOW_SPRING = { stiffness: 90, damping: 26, mass: 0.9 } as const;

/**
 * The atmosphere layer: two slow-drifting aurora blobs plus a soft light that
 * trails the cursor.
 *
 * Sits at a negative z-index so it paints above the page background but under
 * every section, which lets it glow through the translucent cards without ever
 * touching pointer events.
 */
export function AmbientBackground() {
  return (
    <>
      <Aurora />
      <CursorGlow />
    </>
  );
}

function Aurora() {
  const reduce = useReducedMotionSafe();
  if (reduce) return null;

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <motion.div
        animate={{ x: [0, 70, -30, 0], y: [0, -50, 30, 0], scale: [1, 1.12, 0.96, 1] }}
        transition={{ duration: 34, ease: "easeInOut", repeat: Infinity }}
        className="absolute -top-40 right-[-10%] h-[38rem] w-[38rem] rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.16),transparent_65%)] blur-3xl"
      />
      <motion.div
        animate={{ x: [0, -60, 40, 0], y: [0, 60, -20, 0], scale: [1, 0.94, 1.1, 1] }}
        transition={{ duration: 42, ease: "easeInOut", repeat: Infinity }}
        className="absolute top-[45%] left-[-15%] h-[32rem] w-[32rem] rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(192,38,211,0.12),transparent_65%)] blur-3xl"
      />
    </div>
  );
}

/**
 * Whether this device has a real cursor to follow. Read through
 * `useSyncExternalStore` so it is correct on the very first client render and
 * still updates if, say, a tablet gets a mouse plugged in.
 */
function usePointerFine() {
  return useSyncExternalStore(
    (onChange) => {
      const query = window.matchMedia("(pointer: fine)");
      query.addEventListener("change", onChange);
      return () => query.removeEventListener("change", onChange);
    },
    () => window.matchMedia("(pointer: fine)").matches,
    () => false,
  );
}

function CursorGlow() {
  const reduce = useReducedMotionSafe();
  const pointerFine = usePointerFine();
  const enabled = pointerFine && !reduce;

  const x = useSpring(-1000, GLOW_SPRING);
  const y = useSpring(-1000, GLOW_SPRING);

  useEffect(() => {
    if (!enabled) return;

    const onMove = (e: PointerEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [enabled, x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden
      style={{ x, y }}
      className="pointer-events-none fixed left-0 top-0 -z-10 -ml-[19rem] -mt-[19rem] h-[38rem] w-[38rem] rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(167,139,250,0.09),transparent_62%)]"
    />
  );
}
