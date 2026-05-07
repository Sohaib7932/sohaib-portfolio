"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { motion, AnimatePresence, type Variants } from "motion/react";
import { ProjectGrid } from "./ProjectGrid";
import { CategoryFilter, type FilterValue } from "./CategoryFilter";
import { FeaturedProject } from "./FeaturedProject";
import { WorkStats } from "./WorkStats";
import { WorkApproach } from "./WorkApproach";
import { WorkCTA } from "./WorkCTA";
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
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
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

  const featured = projects[0];
  const remaining = projects.slice(1);

  const totalTech = useMemo(() => {
    const set = new Set<string>();
    for (const p of projects) for (const t of p.tech) set.add(t);
    return set.size;
  }, []);

  return (
    <div className="relative isolate overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-0 h-[34rem] w-[44rem] rounded-full bg-[radial-gradient(circle_at_60%_40%,rgba(192,38,211,0.14),transparent_60%)] blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-[35%] -left-40 h-[28rem] w-[36rem] rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.12),transparent_60%)] blur-3xl"
      />

      <section className="relative px-5 pt-32 pb-12 sm:px-8 sm:pt-40 sm:pb-16 lg:px-16">
        <div className="mx-auto w-full max-w-6xl">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
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
                className="transition-transform group-hover:-translate-x-0.5"
              >
                <path d="m12 19-7-7 7-7" />
                <path d="M19 12H5" />
              </svg>
              Back home
            </Link>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            animate="show"
            className="max-w-3xl"
          >
            <motion.div
              variants={fadeUp}
              className="mb-5 inline-flex items-center gap-2 rounded-full border border-border-subtle bg-white/[0.04] px-3 py-1.5 backdrop-blur-md"
            >
              <span className="font-mono text-[10px] font-semibold tracking-[0.18em] text-accent/85">
                ✦ {projects.length} PROJECTS
              </span>
            </motion.div>
            <motion.h1
              variants={fadeUp}
              className="text-[36px] font-extrabold leading-[1.02] tracking-tight sm:text-[52px] md:text-[58px] lg:text-[72px]"
            >
              Featured{" "}
              <span className="bg-gradient-to-r from-fuchsia-300 via-fuchsia-400 to-pink-500 bg-clip-text text-transparent">
                Projects.
              </span>
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="mt-5 max-w-xl text-[15px] leading-[1.7] text-foreground/65 sm:text-[15.5px]"
            >
              A curated collection of digital experiences — banking apps,
              AI-powered platforms, design systems, and a palm-vein scanner
              that thinks it&apos;s a credit card. Each one shipped solo from
              Figma to production.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.25,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-12 sm:mt-16"
          >
            <WorkStats
              totalProjects={projects.length}
              totalCategories={projectCategories.length - 1}
              totalTech={totalTech}
            />
          </motion.div>
        </div>
      </section>

      {featured && (
        <section className="relative px-5 py-12 sm:px-8 sm:py-16 lg:px-16">
          <div className="mx-auto w-full max-w-6xl">
            <FeaturedProject project={featured} />
          </div>
        </section>
      )}

      <section className="relative px-5 py-16 sm:px-8 sm:py-20 lg:px-16">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 mx-auto h-px max-w-3xl bg-gradient-to-r from-transparent via-accent/40 to-transparent"
        />
        <div className="mx-auto w-full max-w-6xl">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end"
          >
            <motion.div variants={fadeUp}>
              <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.28em] text-accent/85 sm:text-[12px] sm:tracking-[0.32em]">
                The full catalogue
              </p>
              <h2 className="text-[26px] font-extrabold leading-[1.1] tracking-tight sm:text-[36px] md:text-[42px]">
                Browse by{" "}
                <span className="bg-gradient-to-r from-white via-white to-accent bg-clip-text text-transparent">
                  category.
                </span>
              </h2>
            </motion.div>
            <motion.p
              variants={fadeUp}
              className="text-[12.5px] text-foreground/55"
            >
              <span className="font-mono font-semibold text-foreground">
                {visible.length}
              </span>{" "}
              {visible.length === 1 ? "project" : "projects"} in view
            </motion.p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            className="mt-8"
          >
            <CategoryFilter
              options={projectCategories}
              active={active}
              onChange={setActive}
            />
          </motion.div>

          <div className="mt-10">
            <AnimatePresence mode="wait">
              {visible.length > 0 ? (
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                >
                  <ProjectGrid items={visible} />
                </motion.div>
              ) : (
                <motion.div
                  key="empty"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="rounded-2xl border border-border-subtle bg-white/[0.025] p-10 text-center"
                >
                  <p className="text-[14px] text-foreground/60">
                    Nothing in this category yet — more shipping soon.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {active === "All" && remaining.length > 0 && (
            <p className="sr-only">
              Showing {projects.length} total projects across{" "}
              {projectCategories.length - 1} categories.
            </p>
          )}
        </div>
      </section>

      <section className="relative px-5 py-20 sm:px-8 sm:py-28 lg:px-16">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 mx-auto h-px max-w-3xl bg-gradient-to-r from-transparent via-accent/40 to-transparent"
        />
        <div className="mx-auto w-full max-w-6xl">
          <WorkApproach />
        </div>
      </section>

      <section className="relative px-5 pt-12 pb-24 sm:px-8 sm:pt-16 sm:pb-32 lg:px-16">
        <div className="mx-auto w-full max-w-5xl">
          <WorkCTA />
        </div>
      </section>
    </div>
  );
}
