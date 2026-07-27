"use client";

import Link from "next/link";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  type Variants,
} from "motion/react";
import { useReducedMotionSafe } from "@/components/motion/useReducedMotionSafe";
import { useRef, type PointerEvent as ReactPointerEvent } from "react";
import { Magnetic } from "@/components/motion/Magnetic";
import { EASE, stagger } from "@/components/motion/tokens";

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE },
  },
};

const headline: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const word: Variants = {
  hidden: { opacity: 0, y: 32, filter: "blur(12px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.85, ease: EASE },
  },
};

const portraitVariants: Variants = {
  hidden: { opacity: 0, scale: 0.92, y: 20 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.9, ease: EASE, delay: 0.2 },
  },
};

const TILT_SPRING = { stiffness: 180, damping: 18, mass: 0.5 } as const;
const MAX_TILT = 8;

export function AboutHero() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotionSafe();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const copyY = useTransform(scrollYProgress, [0, 1], [0, -70]);
  const copyOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const portraitY = useTransform(scrollYProgress, [0, 1], [0, 80]);

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
    <div
      ref={ref}
      className="relative grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-20"
    >
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="show"
        style={reduce ? undefined : { y: copyY, opacity: copyOpacity }}
        className="relative z-10"
      >
        <motion.div
          variants={item}
          className="mb-5 inline-flex items-center gap-2 rounded-full border border-border-subtle bg-white/[0.04] px-3 py-1.5 backdrop-blur-md"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/70" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-foreground/75">
            About Me
          </span>
        </motion.div>

        <motion.h1
          variants={headline}
          className="text-[36px] font-extrabold leading-[1.02] tracking-tight sm:text-[52px] md:text-[58px] lg:text-[68px]"
        >
          <motion.span variants={word} className="inline-block">
            The
          </motion.span>{" "}
          <motion.span variants={word} className="inline-block">
            story
          </motion.span>{" "}
          <motion.span variants={word} className="inline-block">
            behind
          </motion.span>{" "}
          <motion.span
            variants={word}
            className="block bg-gradient-to-r from-fuchsia-300 via-fuchsia-400 to-pink-500 bg-clip-text text-transparent"
          >
            the craft.
          </motion.span>
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-6 max-w-lg text-[15px] leading-[1.75] text-foreground/70 sm:text-[15.5px]"
        >
          I&apos;m Muhammad Sohaib, a final-year Software Engineering student,
          part-time designer, and front-end developer. I care about the small
          stuff most people scroll past, a smooth animation, a border that
          lines up, a loading state that feels right. That&apos;s usually
          where good products quietly become great.
        </motion.p>

        <motion.div
          variants={item}
          className="mt-8 flex flex-wrap items-center gap-3"
        >
          <Magnetic strength={0.26}>
            <Link
              href="/#contact"
              className="btn-sheen group inline-flex items-center gap-2.5 rounded-full bg-accent px-6 py-3.5 text-[12px] font-semibold uppercase tracking-[0.16em] text-[#1a0b2e] shadow-[0_15px_45px_-15px_rgba(167,139,250,0.8)] transition-shadow hover:shadow-[0_18px_55px_-12px_rgba(167,139,250,1)] sm:px-7 sm:py-4 sm:text-[12.5px] sm:tracking-[0.18em]"
            >
              Let&apos;s talk
              <ArrowIcon />
            </Link>
          </Magnetic>
          <Magnetic strength={0.18}>
            <a
              href="/cv.pdf"
              download
              className="group inline-flex items-center gap-2 rounded-full border border-border-strong bg-white/[0.025] px-5 py-3 text-[12px] font-semibold uppercase tracking-[0.16em] text-foreground transition-colors hover:border-accent hover:bg-white/[0.05] sm:px-6 sm:py-3.5 sm:text-[12.5px] sm:tracking-[0.18em]"
            >
              <DownloadIcon />
              Download CV
            </a>
          </Magnetic>
        </motion.div>
      </motion.div>

      <motion.div
        variants={portraitVariants}
        initial="hidden"
        animate="show"
        className="relative mx-auto w-full max-w-[360px] lg:max-w-[440px]"
      >
        <motion.div
          style={reduce ? undefined : { y: portraitY }}
          className="relative"
        >
          <motion.div
            aria-hidden
            animate={
              reduce
                ? undefined
                : { scale: [1, 1.08, 1], opacity: [0.75, 1, 0.75] }
            }
            transition={{ duration: 7, ease: "easeInOut", repeat: Infinity }}
            className="absolute -inset-8 -z-10 rounded-[40px] bg-[radial-gradient(circle_at_50%_30%,rgba(167,139,250,0.32),transparent_60%)] blur-2xl"
          />

          <motion.div
            onPointerMove={onPointerMove}
            onPointerLeave={onPointerLeave}
            style={
              reduce
                ? undefined
                : { rotateX, rotateY, transformPerspective: 1200 }
            }
          >
            <motion.div
              animate={reduce ? undefined : { y: [0, -10, 0] }}
              transition={{ duration: 6, ease: "easeInOut", repeat: Infinity }}
              className="relative"
            >
              {/* Clipped to the frame so the spinning square stays a rim. */}
              <div
                aria-hidden
                className="pointer-events-none absolute -inset-[1.5px] overflow-hidden rounded-[30px]"
              >
                <motion.div
                  animate={reduce ? undefined : { rotate: 360 }}
                  transition={{ duration: 26, ease: "linear", repeat: Infinity }}
                  className="absolute -inset-[50%] bg-[conic-gradient(from_0deg,transparent_0deg,rgba(232,121,249,0.7)_45deg,transparent_110deg,transparent_230deg,rgba(167,139,250,0.6)_280deg,transparent_340deg)]"
                />
              </div>

              <div className="relative aspect-[4/5] overflow-hidden rounded-[28px] border border-border-strong bg-gradient-to-br from-white/[0.06] via-white/[0.025] to-transparent shadow-[0_30px_80px_-30px_rgba(139,92,246,0.45)]">
                <motion.img
                  src="/sohaib.JPG"
                  alt="Muhammad Sohaib"
                  initial={{ scale: 1.18 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 1.6, ease: EASE, delay: 0.2 }}
                  className="h-full w-full object-cover object-center"
                />
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
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent"
                />
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20, scale: 0.85 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            whileHover={{ y: -4, scale: 1.04 }}
            transition={{
              delay: 0.85,
              duration: 0.6,
              type: "spring",
              stiffness: 220,
              damping: 22,
            }}
            className="absolute -bottom-4 -left-3 z-20 flex items-center gap-3 rounded-2xl border border-border-strong bg-[#120a22]/90 px-4 py-3 backdrop-blur-md sm:-bottom-5 sm:-left-6 sm:px-5 sm:py-3.5"
          >
            <span className="text-[28px] font-extrabold leading-none tracking-tight text-foreground sm:text-[34px]">
              3<span className="text-accent">+</span>
            </span>
            <span className="text-[10px] font-semibold uppercase leading-tight tracking-[0.18em] text-foreground/65 sm:text-[10.5px]">
              Years in
              <br /> UI/UX design
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20, scale: 0.85 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            whileHover={{ y: -4, scale: 1.04 }}
            transition={{
              delay: 1.05,
              duration: 0.6,
              type: "spring",
              stiffness: 220,
              damping: 22,
            }}
            className="absolute -right-3 top-8 z-20 hidden items-center gap-2 rounded-2xl border border-border-strong bg-[#120a22]/90 px-4 py-2.5 backdrop-blur-md sm:flex"
          >
            <motion.div
              animate={reduce ? undefined : { rotate: [0, 8, -8, 0] }}
              transition={{ duration: 5, ease: "easeInOut", repeat: Infinity }}
              className="flex h-8 w-8 items-center justify-center rounded-xl bg-accent/15 text-accent"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
              >
                <path d="M12 2v6" />
                <path d="m4.93 10.93 4.24 4.24" />
                <path d="M2 18h6" />
                <path d="M16 18h6" />
                <path d="m14.83 15.17 4.24-4.24" />
                <circle cx="12" cy="14" r="4" />
              </svg>
            </motion.div>
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-foreground/55">
                Currently
              </p>
              <p className="text-[12px] font-semibold tracking-tight text-foreground">
                Front-end with Next.js
              </p>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}

function ArrowIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className="transition-transform duration-300 ease-out group-hover:translate-x-1"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className="transition-transform duration-300 ease-out group-hover:translate-y-0.5"
    >
      <path d="M12 3v12" />
      <path d="m6 9 6 6 6-6" />
      <path d="M5 21h14" />
    </svg>
  );
}
