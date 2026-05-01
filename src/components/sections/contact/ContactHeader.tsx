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

export function ContactHeader() {
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
        className="mb-4 text-[11px] font-medium uppercase tracking-[0.28em] text-accent/85 sm:mb-5 sm:text-[12px] sm:tracking-[0.32em]"
      >
        Get In Touch
      </motion.p>

      <motion.h2
        variants={fadeUp}
        className="text-[32px] font-extrabold leading-[1.05] tracking-tight sm:text-[46px] md:text-[52px] lg:text-[58px]"
      >
        Let&apos;s build{" "}
        <span className="bg-gradient-to-r from-fuchsia-300 via-fuchsia-400 to-pink-500 bg-clip-text text-transparent">
          something real.
        </span>
      </motion.h2>

      <motion.p
        variants={fadeUp}
        className="mx-auto mt-5 max-w-xl text-[14.5px] leading-[1.7] text-foreground/65 sm:mt-6 sm:text-[15.5px]"
      >
        Whether it&apos;s a freelance project, a full-time role, or just a
        question about how I work — drop a note. I read every message and
        you&apos;ll get a reply within 1 day.
      </motion.p>
    </motion.div>
  );
}
