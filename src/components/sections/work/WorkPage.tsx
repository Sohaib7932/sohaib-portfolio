"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence, type Variants } from "motion/react";
import { ProjectGrid } from "./ProjectGrid";
import { CategoryFilter, type FilterValue } from "./CategoryFilter";
import { projects, projectCategories } from "./data";

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

export function WorkPage() {
  const [active, setActive] = useState<FilterValue>("All");

  const visible = useMemo(
    () =>
      active === "All"
        ? projects
        : projects.filter((p) => p.category === active),
    [active],
  );

  return (
    <section className="relative isolate overflow-hidden px-5 pt-32 pb-20 sm:px-8 sm:pt-40 sm:pb-28 lg:px-16">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 right-0 h-[28rem] w-[42rem] rounded-full bg-[radial-gradient(circle_at_60%_50%,rgba(192,38,211,0.1),transparent_60%)] blur-3xl"
      />

      <div className="mx-auto w-full max-w-6xl">
        {/* LEFT-ALIGNED page header — matches the design image */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="max-w-3xl"
        >
          <motion.h1
            variants={fadeUp}
            className="text-[36px] font-extrabold leading-[1.02] tracking-tight sm:text-[52px] md:text-[58px] lg:text-[68px]"
          >
            Featured{" "}
            <span className="bg-gradient-to-r from-fuchsia-300 via-fuchsia-400 to-pink-500 bg-clip-text text-transparent">
              Projects.
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-5 max-w-xl text-[15.5px] leading-[1.7] text-foreground/65"
          >
            A curated collection of digital experiences, where engineering
            meets aesthetic precision. Explore the nexus of code and
            creativity.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-10">
            <CategoryFilter
              options={projectCategories}
              active={active}
              onChange={setActive}
            />
          </motion.div>
        </motion.div>

        <div className="mt-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <ProjectGrid items={visible} />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
