"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { WorkHeader } from "./WorkHeader";
import { ProjectGrid } from "./ProjectGrid";
import { projects } from "./data";
import { Magnetic } from "@/components/motion/Magnetic";
import { SectionDivider } from "@/components/motion/SectionDivider";
import { EASE, VIEWPORT_NEAR } from "@/components/motion/tokens";

export function Work() {
  return (
    <section
      id="work"
      className="relative isolate overflow-hidden px-5 py-20 sm:px-8 sm:py-28 md:py-32 lg:px-16"
    >
      <SectionDivider />

      <div className="mx-auto w-full max-w-6xl">
        <WorkHeader />

        <div className="mt-14">
          <ProjectGrid items={projects.slice(0, 4)} />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT_NEAR}
          transition={{ duration: 0.6, ease: EASE }}
          className="mt-16 flex justify-center"
        >
          <Magnetic strength={0.2}>
            <Link
              href="/work"
              className="group inline-flex items-center gap-3 rounded-full border border-border-strong bg-surface px-7 py-4 text-[12.5px] font-semibold uppercase tracking-[0.18em] text-foreground transition-colors hover:border-accent hover:bg-surface-strong"
            >
              View All Projects
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
                className="transition-transform duration-300 ease-out group-hover:translate-x-1"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </Link>
          </Magnetic>
        </motion.div>
      </div>
    </section>
  );
}
