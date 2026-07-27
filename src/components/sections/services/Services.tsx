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

      <motion.div
        aria-hidden
        animate={{ scale: [1, 1.15, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 20, ease: "easeInOut", repeat: Infinity }}
        className="pointer-events-none absolute -top-24 left-0 h-96 w-[40rem] rounded-full bg-[radial-gradient(circle_at_40%_50%,rgba(139,92,246,0.1),transparent_60%)] blur-3xl"
      />
      <motion.div
        aria-hidden
        animate={{ scale: [1, 1.12, 1], opacity: [0.7, 1, 0.7] }}
        transition={{
          duration: 24,
          ease: "easeInOut",
          repeat: Infinity,
          delay: 3,
        }}
        className="pointer-events-none absolute bottom-0 right-0 h-80 w-[36rem] rounded-full bg-[radial-gradient(circle_at_60%_50%,rgba(192,38,211,0.07),transparent_60%)] blur-3xl"
      />

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
              className="btn-sheen group inline-flex items-center gap-3 rounded-full bg-accent px-7 py-4 text-[12.5px] font-semibold uppercase tracking-[0.18em] text-[#1a0b2e] shadow-[0_15px_45px_-15px_rgba(167,139,250,0.8)] transition-shadow hover:shadow-[0_18px_55px_-12px_rgba(167,139,250,1)]"
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
