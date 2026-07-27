"use client";

import {
  motion,
  useMotionTemplate,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import { useReducedMotionSafe } from "./useReducedMotionSafe";
import { useRef, type ReactNode } from "react";
import { SPRING_SCROLL } from "./tokens";

type ParallaxProps = {
  children: ReactNode;
  /**
   * How far the element drifts across a full scroll pass, as a fraction of its
   * own height. 0.12 means it travels from +12% to -12%.
   */
  speed?: number;
  /** Flip the direction so the element leads the scroll instead of trailing it. */
  invert?: boolean;
  className?: string;
};

/**
 * Moves its children slightly slower (or faster) than the page as the section
 * they live in passes through the viewport. The distance is a percentage of the
 * element's own height, so it stays proportional at every breakpoint, and it's
 * spring-smoothed so fast scrolling never looks stepped.
 */
export function Parallax({
  children,
  speed = 0.12,
  invert = false,
  className,
}: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotionSafe();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const distance = (invert ? -speed : speed) * 100;
  const raw = useTransform(scrollYProgress, [0, 1], [distance, -distance]);
  const smooth = useSpring(raw, SPRING_SCROLL);
  const y = useMotionTemplate`${smooth}%`;

  return (
    // `relative` is required, not cosmetic: motion measures the scroll offset
    // against the nearest positioned ancestor and warns on a static target.
    <div ref={ref} className={`relative ${className ?? ""}`}>
      <motion.div style={reduce ? undefined : { y }}>{children}</motion.div>
    </div>
  );
}
