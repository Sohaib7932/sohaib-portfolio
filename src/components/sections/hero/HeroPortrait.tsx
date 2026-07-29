"use client";

import {
  motion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import { useReducedMotionSafe } from "@/components/motion/useReducedMotionSafe";
import { useRef, type PointerEvent as ReactPointerEvent } from "react";
import { ExperienceBadge } from "./ExperienceBadge";
import { EASE } from "@/components/motion/tokens";

const TILT_SPRING = { stiffness: 180, damping: 18, mass: 0.5 } as const;
const MAX_TILT = 8;

export function HeroPortrait() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotionSafe();

  // The portrait trails the copy on the way out, which gives the hero depth.
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  const rotateX = useSpring(0, TILT_SPRING);
  const rotateY = useSpring(0, TILT_SPRING);

  function onPointerMove(e: ReactPointerEvent<HTMLDivElement>) {
    if (reduce || e.pointerType === "touch") return;
    const rect = e.currentTarget.getBoundingClientRect();
    rotateY.set(((e.clientX - rect.left) / rect.width - 0.5) * MAX_TILT * 2);
    rotateX.set((0.5 - (e.clientY - rect.top) / rect.height) * MAX_TILT * 2);
  }

  function onPointerLeave() {
    rotateX.set(0);
    rotateY.set(0);
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.94, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.9, ease: EASE, delay: 0.2 }}
      className="relative z-20 mx-auto w-full max-w-[320px] sm:max-w-[400px] lg:max-w-[440px]"
    >
      <motion.div
        style={reduce ? undefined : { y, opacity }}
        className="relative"
      >
        {/* Tilt lives on its own layer so it never fights the float loop. */}
        <motion.div
          onPointerMove={onPointerMove}
          onPointerLeave={onPointerLeave}
          style={
            reduce ? undefined : { rotateX, rotateY, transformPerspective: 1200 }
          }
        >
          <motion.div
            animate={reduce ? undefined : { y: [0, -10, 0] }}
            transition={{ duration: 6, ease: "easeInOut", repeat: Infinity }}
            className="relative"
          >
            {/* A slow band of light circling the frame. The sweep is clipped to
                the frame's own rounded rect, so the spinning square's corners
                never poke out past the portrait. */}
            <div
              aria-hidden
              className="pointer-events-none absolute -inset-[1.5px] overflow-hidden rounded-[30px]"
            >
              <motion.div
                animate={reduce ? undefined : { rotate: 360 }}
                transition={{ duration: 26, ease: "linear", repeat: Infinity }}
                className="absolute -inset-[50%] bg-[conic-gradient(from_0deg,transparent_0deg,var(--accent)_45deg,transparent_110deg,transparent_230deg,var(--accent)_280deg,transparent_340deg)]"
              />
            </div>

            <div className="relative aspect-[4/5] overflow-hidden rounded-[28px] border border-border-strong bg-gradient-to-br from-surface-strong via-surface to-transparent shadow-[0_10px_30px_-12px_var(--shadow)]">
              <motion.img
                src="/sohaib.JPG"
                alt="Muhammad Sohaib"
                initial={{ scale: 1.18 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.6, ease: EASE, delay: 0.2 }}
                className="h-full w-full object-cover object-center"
              />

              {/* Glass sweep, every few seconds. */}
              {!reduce && (
                <motion.div
                  aria-hidden
                  initial={{ x: "-130%" }}
                  animate={{ x: "150%" }}
                  transition={{
                    duration: 1.7,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatDelay: 5.5,
                  }}
                  className="pointer-events-none absolute inset-y-0 left-0 w-1/2 skew-x-[-18deg] bg-gradient-to-r from-transparent via-white/12 to-transparent"
                />
              )}

              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 rounded-[28px] bg-gradient-to-t from-black/50 via-transparent to-transparent"
              />
            </div>
          </motion.div>
        </motion.div>

        <ExperienceBadge />
      </motion.div>
    </motion.div>
  );
}
