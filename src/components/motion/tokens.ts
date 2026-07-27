import type { Variants } from "motion/react";

/**
 * Shared motion language for the whole site.
 *
 * Everything animates on the same curves and at the same trigger points so the
 * page reads as one coordinated system instead of a pile of separate effects.
 */

/** The signature ease: fast out of the gate, long soft settle. */
export const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];
/** For things leaving the screen. */
export const EASE_IN: [number, number, number, number] = [0.4, 0, 1, 1];

export const SPRING = { type: "spring", stiffness: 280, damping: 24 } as const;
export const SPRING_SNAPPY = {
  type: "spring",
  stiffness: 380,
  damping: 30,
} as const;
export const SPRING_SOFT = {
  type: "spring",
  stiffness: 140,
  damping: 22,
  mass: 0.6,
} as const;
/** Used to smooth raw scroll progress before it drives anything visual. */
export const SPRING_SCROLL = {
  stiffness: 120,
  damping: 30,
  restDelta: 0.001,
} as const;

/** Every section starts animating at the same distance from the fold. */
export const VIEWPORT = { once: true, margin: "-80px" } as const;
export const VIEWPORT_NEAR = { once: true, margin: "-60px" } as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE },
  },
};

/** fadeUp with a focus-pull, used for headings and hero copy. */
export const fadeUpBlur: Variants = {
  hidden: { opacity: 0, y: 28, filter: "blur(10px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: EASE },
  },
};

export const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};

export const staggerFast: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.05 } },
};

/** Cards rise and settle, with a touch of scale so they feel physical. */
export const cardRise: Variants = {
  hidden: { opacity: 0, y: 32, scale: 0.97 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, delay: i * 0.08, ease: EASE },
  }),
};
