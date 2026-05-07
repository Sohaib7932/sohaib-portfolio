"use client";

import { motion, type Variants } from "motion/react";
import type { Project } from "./types";
import { ProjectIllustration } from "./ProjectIllustration";
import { IconForLabel } from "./ProjectIcons";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 26 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

export function FeaturedProject({ project }: { project: Project }) {
  return (
    <motion.article
      variants={stagger}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      className="group relative isolate overflow-hidden rounded-3xl border border-border-strong bg-white/[0.025] backdrop-blur-md"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 -top-32 h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(167,139,250,0.18),transparent_60%)] blur-2xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-12 top-0 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent"
      />

      <div className="grid grid-cols-1 gap-0 lg:grid-cols-[1.05fr_1fr]">
        <div className={`relative aspect-[16/10] w-full overflow-hidden ${project.image ? "" : project.placeholderBg} lg:aspect-auto lg:min-h-[460px]`}>
          {project.image ? (
            <>
              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.04]"
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent"
              />
            </>
          ) : project.illustration ? (
            <ProjectIllustration illustration={project.illustration} />
          ) : null}
          <div
            aria-hidden
            className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_120%,rgba(0,0,0,0.45),transparent_60%)]"
          />
        </div>

        <div className="relative flex flex-col justify-center p-7 sm:p-10 lg:p-12">
          <motion.div variants={fadeUp} className="mb-4 inline-flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-fuchsia-400/70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-fuchsia-400" />
            </span>
            <span className="text-[10.5px] font-semibold uppercase tracking-[0.22em] text-fuchsia-300/90">
              Featured · Latest
            </span>
          </motion.div>

          <motion.h3
            variants={fadeUp}
            className="text-[26px] font-extrabold leading-[1.1] tracking-tight text-foreground sm:text-[32px] lg:text-[36px]"
          >
            {project.title}
          </motion.h3>

          <motion.p
            variants={fadeUp}
            className="mt-4 text-[14px] leading-[1.7] text-foreground/65 sm:text-[14.5px]"
          >
            {project.description}
          </motion.p>

          <motion.div variants={fadeUp} className="mt-5 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="inline-flex items-center rounded-full border border-border-subtle bg-white/[0.035] px-3 py-1 text-[11px] font-medium tracking-wide text-foreground/80"
              >
                {t}
              </span>
            ))}
          </motion.div>

          <motion.div variants={fadeUp} className="mt-7 flex flex-wrap items-center gap-2.5">
            <PrimaryAction
              label={project.primary.label}
              href={project.primary.href}
            />
            {project.secondary && (
              <SecondaryAction
                label={project.secondary.label}
                href={project.secondary.href}
              />
            )}
          </motion.div>
        </div>
      </div>
    </motion.article>
  );
}

function PrimaryAction({ label, href }: { label: string; href: string }) {
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="group inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-[12px] font-semibold uppercase tracking-[0.16em] text-[#1a0b2e] shadow-[0_15px_45px_-15px_rgba(167,139,250,0.7)] transition-shadow hover:shadow-[0_18px_55px_-12px_rgba(167,139,250,1)] sm:text-[12.5px]"
    >
      <IconForLabel label={label} />
      {label}
    </a>
  );
}

function SecondaryAction({ label, href }: { label: string; href: string }) {
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="inline-flex items-center gap-2 rounded-full border border-border-strong bg-white/[0.025] px-5 py-3 text-[12px] font-semibold uppercase tracking-[0.16em] text-foreground transition-colors hover:bg-white/[0.05] sm:text-[12.5px]"
    >
      <IconForLabel label={label} />
      {label}
    </a>
  );
}
