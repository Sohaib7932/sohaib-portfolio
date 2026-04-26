"use client";

import { motion, type Variants } from "motion/react";
import type { Project } from "./types";
import { IconForLabel } from "./ProjectIcons";

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 26 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

export function ProjectCard({
  project,
  index,
  className = "",
}: {
  project: Project;
  index: number;
  className?: string;
}) {
  return (
    <motion.article
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 280, damping: 24 }}
      className={`group flex flex-col overflow-hidden rounded-3xl border border-border-subtle bg-white/[0.02] backdrop-blur-sm transition-colors hover:border-border-strong ${className}`}
    >
      <ImageArea bgClass={project.placeholderBg} title={project.title} />

      <div className="flex flex-1 flex-col p-5">
        <div className="mb-4 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <TechBadge key={t} label={t} />
          ))}
        </div>

        <h3 className="text-[20px] font-bold tracking-tight text-foreground">
          {project.title}
        </h3>
        <p className="mt-2 flex-1 text-[13.5px] leading-6 text-foreground/60">
          {project.description}
        </p>

        <div className="mt-5 flex items-center gap-2.5">
          <PrimaryAction label={project.primary.label} href={project.primary.href} />
          <SecondaryAction label={project.secondary.label} href={project.secondary.href} />
        </div>
      </div>
    </motion.article>
  );
}

function ImageArea({ bgClass, title }: { bgClass: string; title: string }) {
  return (
    <div
      className={`relative aspect-[16/10] w-full overflow-hidden ${bgClass}`}
    >
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_120%,rgba(0,0,0,0.5),transparent_60%)]"
      />
      {/* Replace with <Image src=... /> later. Title sits as a soft watermark for now. */}
      <span className="absolute inset-0 flex items-end p-4 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/30">
        {title}
      </span>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 [background:radial-gradient(circle_at_50%_50%,rgba(167,139,250,0.18),transparent_60%)]"
      />
    </div>
  );
}

function TechBadge({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center rounded-full border border-border-subtle bg-white/[0.03] px-2.5 py-0.5 text-[10.5px] font-medium tracking-wide text-foreground/75">
      {label}
    </span>
  );
}

function PrimaryAction({ label, href }: { label: string; href: string }) {
  return (
    <a
      href={href}
      className="group inline-flex items-center gap-1.5 rounded-lg bg-accent px-3.5 py-2 text-[12px] font-semibold tracking-wide text-[#1a0b2e] transition-shadow hover:shadow-[0_8px_24px_-10px_rgba(167,139,250,0.9)]"
    >
      <IconForLabel label={label} />
      {label}
    </a>
  );
}

function SecondaryAction({ label, href }: { label: string; href: string }) {
  return (
    <a
      href={href}
      className="inline-flex items-center gap-1.5 rounded-lg border border-border-strong bg-white/[0.03] px-3.5 py-2 text-[12px] font-semibold tracking-wide text-foreground/85 transition-colors hover:bg-white/[0.06] hover:text-foreground"
    >
      <IconForLabel label={label} />
      {label}
    </a>
  );
}
