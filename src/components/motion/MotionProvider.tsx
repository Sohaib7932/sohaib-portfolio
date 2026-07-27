"use client";

import { MotionConfig } from "motion/react";
import type { ReactNode } from "react";

/**
 * Applies the site-wide motion policy.
 *
 * `reducedMotion="user"` makes every transform and layout animation on the page
 * respect the OS "reduce motion" setting automatically, while still allowing
 * opacity changes through, so nothing ever appears or disappears without
 * warning for people who need the calmer version.
 */
export function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
