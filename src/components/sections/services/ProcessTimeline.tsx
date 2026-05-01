"use client";

import { motion, type Variants } from "motion/react";
import { processSteps } from "./data";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      delay: 0.15 + i * 0.12,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const badgeVariants: Variants = {
  hidden: { opacity: 0, scale: 0.4, rotate: -90 },
  show: (i: number) => ({
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 220,
      damping: 16,
      delay: 0.35 + i * 0.12,
    },
  }),
};

const lineVariants: Variants = {
  hidden: { scaleX: 0, opacity: 0 },
  show: {
    scaleX: 1,
    opacity: 1,
    transition: { duration: 1.1, delay: 0.2, ease: [0.22, 1, 0.36, 1] },
  },
};

export function ProcessTimeline() {
  return (
    <div className="mt-20 sm:mt-28">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="mx-auto max-w-2xl text-center"
      >
        <p className="mb-4 text-[12px] font-medium uppercase tracking-[0.32em] text-accent/85">
          How we work together
        </p>
        <h3 className="text-[26px] font-extrabold tracking-tight sm:text-[40px]">
          A simple,{" "}
          <span className="bg-gradient-to-r from-white via-white to-accent bg-clip-text text-transparent">
            honest process.
          </span>
        </h3>
        <p className="mt-4 text-[15px] leading-7 text-foreground/60">
          No surprises, no hand-waving — just four steps that turn an idea into
          something real.
        </p>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="relative mt-16"
      >
        <motion.div
          aria-hidden
          variants={lineVariants}
          className="pointer-events-none absolute inset-x-12 top-1/2 hidden h-px origin-left -translate-y-1/2 bg-gradient-to-r from-transparent via-accent/35 to-transparent lg:block"
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {processSteps.map((step, i) => (
            <motion.div
              key={step.step}
              custom={i}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 280, damping: 22 }}
              className="group relative isolate overflow-hidden rounded-2xl border border-border-subtle bg-white/[0.025] p-6 text-center backdrop-blur-sm transition-colors hover:border-accent/60"
            >
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 -z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background:
                    "radial-gradient(circle at 50% 0%, rgba(167,139,250,0.18), transparent 65%)",
                }}
              />
              <div
                aria-hidden
                className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              />

              <motion.div
                custom={i}
                variants={badgeVariants}
                className="relative mx-auto flex h-16 w-16 items-center justify-center"
              >
                <span
                  aria-hidden
                  className="absolute inset-0 rounded-full border border-accent/25 transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <span
                  aria-hidden
                  className="absolute inset-1.5 rounded-full border border-border-strong bg-[radial-gradient(circle_at_50%_30%,rgba(167,139,250,0.25),rgba(8,6,15,1)_70%)]"
                />
                <span
                  aria-hidden
                  className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(167,139,250,0.45),transparent_60%)] opacity-0 blur-md transition-opacity duration-500 group-hover:opacity-100"
                />
                <span className="relative font-mono text-[14px] font-bold tracking-[0.12em] text-accent">
                  {step.step}
                </span>
              </motion.div>

              <h4 className="mt-6 text-[17px] font-bold tracking-tight text-foreground">
                {step.title}
              </h4>
              <p className="mx-auto mt-2.5 max-w-[28ch] text-[13.5px] leading-6 text-foreground/60">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
