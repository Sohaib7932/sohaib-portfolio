"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { AboutHeader } from "./AboutHeader";
import { AboutNarrative } from "./AboutNarrative";
import { TechnicalArsenal } from "./TechnicalArsenal";

export function About() {
  return (
    <section
      id="about"
      className="relative isolate px-6 py-28 sm:px-10 sm:py-32 lg:px-16"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 mx-auto h-px max-w-3xl bg-gradient-to-r from-transparent via-accent/40 to-transparent"
      />

      <div className="mx-auto w-full max-w-6xl">
        <AboutHeader />
        <AboutNarrative />
        <TechnicalArsenal />

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mt-16 flex justify-center"
        >
          <Link
            href="/about"
            className="group inline-flex items-center gap-3 rounded-full border border-border-strong bg-white/[0.025] px-7 py-4 text-[12.5px] font-semibold uppercase tracking-[0.18em] text-foreground transition-colors hover:border-accent hover:bg-white/[0.05]"
          >
            View Full About
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden
              className="transition-transform group-hover:translate-x-0.5"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
