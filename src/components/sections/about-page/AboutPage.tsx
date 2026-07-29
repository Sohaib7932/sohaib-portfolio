"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { AboutHero } from "./AboutHero";
import { StatsBlock } from "./StatsBlock";
import { JourneyTimeline } from "./JourneyTimeline";
import { PrinciplesGrid } from "./PrinciplesGrid";
import { ToolsStack } from "./ToolsStack";
import { CurrentFocus } from "./CurrentFocus";
import { AboutCTA } from "./AboutCTA";
import { SectionDivider } from "@/components/motion/SectionDivider";
import { EASE } from "@/components/motion/tokens";

export function AboutPage() {
  return (
    <div className="relative isolate overflow-hidden">

      <section className="relative px-5 pt-32 pb-12 sm:px-8 sm:pt-40 sm:pb-20 lg:px-16">
        <div className="mx-auto w-full max-w-6xl">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: EASE }}
            className="mb-10"
          >
            <Link
              href="/"
              className="group inline-flex items-center gap-2 text-[11.5px] font-semibold uppercase tracking-[0.22em] text-foreground/55 transition-colors hover:text-foreground"
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
                className="transition-transform duration-300 ease-out group-hover:-translate-x-1"
              >
                <path d="m12 19-7-7 7-7" />
                <path d="M19 12H5" />
              </svg>
              Back home
            </Link>
          </motion.div>

          <AboutHero />
        </div>
      </section>

      <section className="relative px-5 py-12 sm:px-8 sm:py-16 lg:px-16">
        <div className="mx-auto w-full max-w-6xl">
          <StatsBlock />
        </div>
      </section>

      <section className="relative px-5 py-20 sm:px-8 sm:py-28 lg:px-16">
        <SectionDivider />
        <div className="mx-auto w-full max-w-4xl">
          <JourneyTimeline />
        </div>
      </section>

      <section className="relative px-5 py-20 sm:px-8 sm:py-28 lg:px-16">
        <SectionDivider />
        <div className="mx-auto w-full max-w-6xl">
          <PrinciplesGrid />
        </div>
      </section>

      <section className="relative px-5 py-20 sm:px-8 sm:py-28 lg:px-16">
        <SectionDivider />
        <div className="mx-auto w-full max-w-6xl">
          <ToolsStack />
        </div>
      </section>

      <section className="relative px-5 py-20 sm:px-8 sm:py-28 lg:px-16">
        <SectionDivider />
        <div className="mx-auto w-full max-w-6xl">
          <CurrentFocus />
        </div>
      </section>

      <section className="relative px-5 pt-12 pb-24 sm:px-8 sm:pt-16 sm:pb-32 lg:px-16">
        <div className="mx-auto w-full max-w-5xl">
          <AboutCTA />
        </div>
      </section>
    </div>
  );
}
