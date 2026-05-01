"use client";

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
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};

export function ServicesHeader() {
  return (
    <motion.div
      variants={stagger}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      className="mx-auto max-w-3xl text-center"
    >
      <motion.p
        variants={fadeUp}
        className="mb-5 text-[12px] font-medium uppercase tracking-[0.32em] text-accent/85"
      >
        What I Do
      </motion.p>

      <motion.h2
        variants={fadeUp}
        className="text-[40px] font-extrabold leading-[1.05] tracking-tight sm:text-[52px] lg:text-[58px]"
      >
        Services I{" "}
        <span className="bg-gradient-to-r from-fuchsia-300 via-fuchsia-400 to-pink-500 bg-clip-text text-transparent">
          deliver.
        </span>
      </motion.h2>

      <motion.p
        variants={fadeUp}
        className="mx-auto mt-6 max-w-xl text-[15.5px] leading-[1.7] text-foreground/65"
      >
        From the first sketch to the production deploy — a focused set of
        services for teams and founders who want craft, speed, and a real
        creative partner on the other side of the table.
      </motion.p>
    </motion.div>
  );
}
