"use client";

import {
  motion,
  useScroll,
  useTransform,
  type Variants,
} from "motion/react";
import { useReducedMotionSafe } from "@/components/motion/useReducedMotionSafe";
import { useRef } from "react";
import type { Project } from "./types";
import { IconForLabel } from "./ProjectIcons";
import { ProjectIllustration } from "./ProjectIllustration";
import {
  SpotlightOverlay,
  useSpotlight,
} from "@/components/motion/useSpotlight";
import { cardRise, EASE, SPRING, VIEWPORT } from "@/components/motion/tokens";

const badges: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.05, delayChildren: 0.15 } },
};

const badge: Variants = {
  hidden: { opacity: 0, y: 8, scale: 0.9 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.4, ease: EASE },
  },
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
  const { handlers, glow, tiltStyle } = useSpotlight({ radius: 380, tilt: 4 });

  return (
    <motion.article
      custom={index}
      variants={cardRise}
      initial="hidden"
      whileInView="show"
      viewport={VIEWPORT}
      whileHover={{ y: -7 }}
      transition={SPRING}
      {...handlers}
      style={tiltStyle}
      className={`group relative isolate flex flex-col overflow-hidden rounded-3xl border border-border-subtle bg-surface backdrop-blur-sm transition-colors hover:border-border-strong ${className}`}
    >
      <SpotlightOverlay glow={glow} />

      <ImageArea project={project} />

      <div className="flex flex-1 flex-col p-5">
        <motion.div
          variants={badges}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT}
          className="mb-4 flex flex-wrap gap-2"
        >
          {project.tech.map((t) => (
            <TechBadge key={t} label={t} />
          ))}
        </motion.div>

        <h3 className="text-[20px] font-bold tracking-tight text-foreground">
          {project.title}
        </h3>
        <p className="mt-2 flex-1 text-[13.5px] leading-6 text-foreground/60">
          {project.description}
        </p>

        <div className="mt-5 flex items-center gap-2.5">
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
        </div>
      </div>
    </motion.article>
  );
}

function ImageArea({ project }: { project: Project }) {
  const { image, illustration, placeholderBg, title } = project;
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotionSafe();

  // The artwork drifts inside its own frame as the card crosses the viewport,
  // which reads as depth rather than as a moving image.
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  // Kept deliberately small: these are UI screenshots, so every extra percent
  // of zoom needed to hide the parallax gap crops real content out of frame.
  const y = useTransform(scrollYProgress, [0, 1], ["-4%", "4%"]);

  return (
    <div
      ref={ref}
      className={`relative aspect-[16/10] w-full overflow-hidden ${
        image ? "" : placeholderBg
      }`}
    >
      {image ? (
        <>
          {/* Hover zoom lives on the wrapper so it never fights the parallax. */}
          <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-[1.05]">
            <motion.img
              src={image}
              alt={title}
              style={reduce ? undefined : { y, scale: 1.1 }}
              className="h-full w-full object-cover"
            />
          </div>
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent"
          />
        </>
      ) : illustration ? (
        <ProjectIllustration illustration={illustration} />
      ) : (
        <span className="absolute inset-0 flex items-end p-4 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/30">
          {title}
        </span>
      )}

      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_120%,rgba(0,0,0,0.45),transparent_60%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 [background:radial-gradient(circle_at_50%_50%,var(--accent-wash),transparent_60%)]"
      />
    </div>
  );
}

function TechBadge({ label }: { label: string }) {
  return (
    <motion.span
      variants={badge}
      className="inline-flex items-center rounded-full border border-border-subtle bg-surface px-2.5 py-0.5 text-[10.5px] font-medium tracking-wide text-foreground/75 transition-colors group-hover:border-accent/30"
    >
      {label}
    </motion.span>
  );
}

function PrimaryAction({ label, href }: { label: string; href: string }) {
  const external = href.startsWith("http");
  return (
    <motion.a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.96 }}
      className="btn-sheen group inline-flex items-center gap-1.5 rounded-lg bg-accent px-3.5 py-2 text-[12px] font-semibold tracking-wide text-on-accent transition-shadow hover:shadow-[0_14px_36px_-10px_var(--shadow)]"
    >
      <IconForLabel label={label} />
      {label}
    </motion.a>
  );
}

function SecondaryAction({ label, href }: { label: string; href: string }) {
  const external = href.startsWith("http");
  return (
    <motion.a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.96 }}
      className="group inline-flex items-center gap-1.5 rounded-lg border border-border-strong bg-surface px-3.5 py-2 text-[12px] font-semibold tracking-wide text-foreground/85 transition-colors hover:bg-surface-strong hover:text-foreground"
    >
      <IconForLabel label={label} />
      {label}
    </motion.a>
  );
}
