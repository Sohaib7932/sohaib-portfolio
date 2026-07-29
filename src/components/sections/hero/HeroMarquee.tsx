"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import { useRef } from "react";
import { SPRING_SCROLL } from "@/components/motion/tokens";

const NAME = "Muhammad — Sohaib";

/**
 * The oversized name running behind the hero.
 *
 * Two layers of motion stack here, and they're deliberately kept on separate
 * elements: the inner track owns the endless CSS slide, the outer wrapper owns
 * the scroll-linked drift. Putting both on one node would mean the two
 * transforms overwrite each other.
 *
 * Sits at z-0 with the portrait at z-20, so the letters pass behind the frame
 * and give the composition its depth.
 */
export function HeroMarquee() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Drifts against the scroll direction, so it reads as a further-away plane.
  const rawX = useTransform(scrollYProgress, [0, 1], [-40, 40]);
  const rawY = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const x = useSpring(rawX, SPRING_SCROLL);
  const y = useSpring(rawY, SPRING_SCROLL);

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none absolute inset-x-0 top-1/2 z-0 -translate-y-1/2 select-none overflow-hidden"
    >
      <motion.div style={reduce ? undefined : { x, y }}>
        <div className="marquee-track flex w-max whitespace-nowrap">
          {/* Two identical halves: the -50% loop point falls on the seam. */}
          <MarqueeHalf />
          <MarqueeHalf />
        </div>
      </motion.div>
    </div>
  );
}

function MarqueeHalf() {
  return (
    <span className="pr-[6vw] text-[16vh] font-extrabold leading-none tracking-tight text-foreground/[0.06] sm:text-[22vh] lg:text-[26vh]">
      {NAME}&nbsp;
    </span>
  );
}
