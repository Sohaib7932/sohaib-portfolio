"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Magnetic } from "@/components/motion/Magnetic";
import {
  EASE,
  fadeUpBlur,
  stagger,
  VIEWPORT,
} from "@/components/motion/tokens";
import { Words, wordsContainer, wordVariant } from "@/components/motion/Words";

export function AboutCTA() {
  return (
    <motion.div
      variants={stagger}
      initial="hidden"
      whileInView="show"
      viewport={VIEWPORT}
      className="relative isolate overflow-hidden rounded-3xl border border-border-strong bg-gradient-to-br from-white/[0.05] via-white/[0.025] to-transparent p-8 text-center backdrop-blur-md sm:p-12 lg:p-16"
    >
      <motion.div
        aria-hidden
        animate={{ scale: [1, 1.18, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 15, ease: "easeInOut", repeat: Infinity }}
        className="pointer-events-none absolute -right-32 -top-32 h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(167,139,250,0.22),transparent_60%)] blur-2xl"
      />
      <motion.div
        aria-hidden
        animate={{ scale: [1, 1.14, 1], opacity: [0.7, 1, 0.7] }}
        transition={{
          duration: 19,
          ease: "easeInOut",
          repeat: Infinity,
          delay: 3,
        }}
        className="pointer-events-none absolute -bottom-32 -left-32 h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(232,121,249,0.16),transparent_60%)] blur-2xl"
      />
      <motion.div
        aria-hidden
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={VIEWPORT}
        transition={{ duration: 1.2, ease: EASE }}
        className="pointer-events-none absolute inset-x-12 top-0 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent"
      />

      <motion.p
        variants={fadeUpBlur}
        className="mb-4 text-[11px] font-medium uppercase tracking-[0.28em] text-accent/85 sm:text-[12px] sm:tracking-[0.32em]"
      >
        That&apos;s the whole story.
      </motion.p>

      <motion.h2
        variants={wordsContainer}
        className="mx-auto max-w-2xl text-[30px] font-extrabold leading-[1.05] tracking-tight sm:text-[42px] md:text-[52px]"
      >
        <Words text="If any of it" />
        <motion.span
          variants={wordVariant}
          className="mr-[0.25em] inline-block bg-gradient-to-r from-fuchsia-300 via-fuchsia-400 to-pink-500 bg-clip-text text-transparent"
        >
          resonates,
        </motion.span>
        <Words text="let's build something." />
      </motion.h2>

      <motion.p
        variants={fadeUpBlur}
        className="mx-auto mt-5 max-w-md text-[14.5px] leading-7 text-foreground/65 sm:text-[15px]"
      >
        I read every message and reply within a day. Pitch a project, a role,
        or just a conversation.
      </motion.p>

      <motion.div
        variants={fadeUpBlur}
        className="mt-8 flex flex-wrap items-center justify-center gap-3"
      >
        <Magnetic strength={0.26}>
          <Link
            href="/#contact"
            className="btn-sheen group inline-flex items-center gap-2.5 rounded-full bg-accent px-7 py-4 text-[12px] font-semibold uppercase tracking-[0.16em] text-[#1a0b2e] shadow-[0_15px_45px_-15px_rgba(167,139,250,0.8)] transition-shadow hover:shadow-[0_18px_55px_-12px_rgba(167,139,250,1)] sm:text-[12.5px] sm:tracking-[0.18em]"
          >
            Get in touch
            <ArrowIcon />
          </Link>
        </Magnetic>
        <Magnetic strength={0.18}>
          <Link
            href="/work"
            className="inline-flex items-center gap-2 rounded-full border border-border-strong bg-white/[0.025] px-6 py-3.5 text-[12px] font-semibold uppercase tracking-[0.16em] text-foreground transition-colors hover:border-accent hover:bg-white/[0.05] sm:text-[12.5px] sm:tracking-[0.18em]"
          >
            See the work
          </Link>
        </Magnetic>
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
      className="transition-transform duration-300 ease-out group-hover:translate-x-1"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}
