"use client";

import {
  animate,
  useInView,
  useMotionValue,
  useTransform,
} from "motion/react";
import { useReducedMotionSafe } from "./useReducedMotionSafe";
import { useEffect, useRef } from "react";
import { EASE } from "./tokens";

/**
 * Counts from zero to `to` the first time it scrolls into view.
 *
 * The running number is written straight to the DOM node from a motion value,
 * so a 1.6s count costs zero React renders.
 */
export function CountUp({
  to,
  duration = 1.6,
  className,
}: {
  to: number;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const reduce = useReducedMotionSafe();

  const decimals = Number.isInteger(to) ? 0 : 1;
  const value = useMotionValue(0);
  const display = useTransform(value, (v) => v.toFixed(decimals));

  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      value.set(to);
      return;
    }
    const controls = animate(value, to, { duration, ease: EASE });
    return () => controls.stop();
  }, [inView, reduce, to, duration, value]);

  useEffect(
    () =>
      display.on("change", (latest) => {
        if (ref.current) ref.current.textContent = latest;
      }),
    [display],
  );

  return (
    <span ref={ref} className={className}>
      {(0).toFixed(decimals)}
    </span>
  );
}
