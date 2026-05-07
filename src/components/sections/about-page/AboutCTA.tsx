"use client";

import Link from "next/link";
import { motion, type Variants } from "motion/react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

export function AboutCTA() {
  return (
    <motion.div
      variants={stagger}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      className="relative isolate overflow-hidden rounded-3xl border border-border-strong bg-gradient-to-br from-white/[0.05] via-white/[0.025] to-transparent p-8 text-center backdrop-blur-md sm:p-12 lg:p-16"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 -top-32 h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(167,139,250,0.22),transparent_60%)] blur-2xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 -left-32 h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(232,121,249,0.16),transparent_60%)] blur-2xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-12 top-0 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent"
      />

      <motion.p
        variants={fadeUp}
        className="mb-4 text-[11px] font-medium uppercase tracking-[0.28em] text-accent/85 sm:text-[12px] sm:tracking-[0.32em]"
      >
        That&apos;s the whole story.
      </motion.p>

      <motion.h2
        variants={fadeUp}
        className="mx-auto max-w-2xl text-[30px] font-extrabold leading-[1.05] tracking-tight sm:text-[42px] md:text-[52px]"
      >
        If any of it{" "}
        <span className="bg-gradient-to-r from-fuchsia-300 via-fuchsia-400 to-pink-500 bg-clip-text text-transparent">
          resonates,
        </span>{" "}
        let&apos;s build something.
      </motion.h2>

      <motion.p
        variants={fadeUp}
        className="mx-auto mt-5 max-w-md text-[14.5px] leading-7 text-foreground/65 sm:text-[15px]"
      >
        I read every message and reply within a day. Pitch a project, a role,
        or just a conversation.
      </motion.p>

      <motion.div
        variants={fadeUp}
        className="mt-8 flex flex-wrap items-center justify-center gap-3"
      >
        <Link
          href="/#contact"
          className="group inline-flex items-center gap-2.5 rounded-full bg-accent px-7 py-4 text-[12px] font-semibold uppercase tracking-[0.16em] text-[#1a0b2e] shadow-[0_15px_45px_-15px_rgba(167,139,250,0.8)] transition-shadow hover:shadow-[0_18px_55px_-12px_rgba(167,139,250,1)] sm:text-[12.5px] sm:tracking-[0.18em]"
        >
          Get in touch
          <ArrowIcon />
        </Link>
        <Link
          href="/work"
          className="inline-flex items-center gap-2 rounded-full border border-border-strong bg-white/[0.025] px-6 py-3.5 text-[12px] font-semibold uppercase tracking-[0.16em] text-foreground transition-colors hover:bg-white/[0.05] sm:text-[12.5px] sm:tracking-[0.18em]"
        >
          See the work
        </Link>
      </motion.div>
    </motion.div>
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
      className="transition-transform group-hover:translate-x-0.5"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}
