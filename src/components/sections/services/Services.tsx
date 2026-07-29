"use client";

import { motion } from "motion/react";
import { ServicesHeader } from "./ServicesHeader";
import { ServiceCard } from "./ServiceCard";
import { ProcessTimeline } from "./ProcessTimeline";
import { services } from "./data";
import { Magnetic } from "@/components/motion/Magnetic";
import { SectionDivider } from "@/components/motion/SectionDivider";
import { EASE, VIEWPORT_NEAR } from "@/components/motion/tokens";

export function Services() {
  return (
    <section
      id="services"
      className="relative isolate overflow-hidden px-5 py-20 sm:px-8 sm:py-28 md:py-32 lg:px-16"
    >
      <SectionDivider />

      <div className="mx-auto w-full max-w-6xl">
        <ServicesHeader />

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:gap-6">
          {services.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>

        <ProcessTimeline />

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT_NEAR}
          transition={{ duration: 0.6, ease: EASE }}
          className="mt-20 flex flex-col items-center gap-4 text-center"
        >
          <p className="text-[13px] font-medium uppercase tracking-[0.28em] text-foreground/55">
            Have something in mind?
          </p>
          <Magnetic strength={0.25}>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="btn-sheen group inline-flex items-center gap-3 rounded-full bg-accent px-7 py-4 text-[12.5px] font-semibold uppercase tracking-[0.18em] text-on-accent shadow-[0_10px_30px_-12px_var(--shadow)] transition-shadow hover:shadow-[0_14px_36px_-10px_var(--shadow)]"
            >
              Start a project
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
            </motion.a>
          </Magnetic>
        </motion.div>
      </div>
    </section>
  );
}
