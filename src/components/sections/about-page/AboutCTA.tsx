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
      className="relative isolate overflow-hidden rounded-3xl border border-border-strong bg-surface p-8 text-center sm:p-12 lg:p-16"
    >
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
        className="mb-4 text-[11px] font-medium uppercase tracking-[0.28em] text-accent-ink/85 sm:text-[12px] sm:tracking-[0.32em]"
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
          className="mr-[0.25em] inline-block text-accent-ink"
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
            className="btn-sheen group inline-flex items-center gap-2.5 rounded-full bg-accent px-7 py-4 text-[12px] font-semibold uppercase tracking-[0.16em] text-on-accent shadow-[0_10px_30px_-12px_var(--shadow)] transition-shadow hover:shadow-[0_14px_36px_-10px_var(--shadow)] sm:text-[12.5px] sm:tracking-[0.18em]"
          >
            Get in touch
            <ArrowIcon />
          </Link>
        </Magnetic>
        <Magnetic strength={0.18}>
          <Link
            href="/work"
            className="inline-flex items-center gap-2 rounded-full border border-border-strong bg-surface px-6 py-3.5 text-[12px] font-semibold uppercase tracking-[0.16em] text-foreground transition-colors hover:border-accent hover:bg-surface-strong sm:text-[12.5px] sm:tracking-[0.18em]"
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
