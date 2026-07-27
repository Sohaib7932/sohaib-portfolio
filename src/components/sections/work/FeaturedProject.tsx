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
import { ProjectIllustration } from "./ProjectIllustration";
import { IconForLabel } from "./ProjectIcons";
import {
  SpotlightOverlay,
  useSpotlight,
} from "@/components/motion/useSpotlight";
import { EASE, VIEWPORT } from "@/components/motion/tokens";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 26 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE },
  },
};

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const chip: Variants = {
  hidden: { opacity: 0, scale: 0.85 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: EASE } },
};

export function FeaturedProject({ project }: { project: Project }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotionSafe();
  const { handlers, glow } = useSpotlight({
    radius: 520,
    tilt: 0,
    color: "rgba(167,139,250,0.12)",
  });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

  return (
    <motion.article
      variants={stagger}
      initial="hidden"
      whileInView="show"
      viewport={VIEWPORT}
      {...handlers}
      className="group relative isolate overflow-hidden rounded-3xl border border-border-strong bg-white/[0.025] backdrop-blur-md"
    >
      <SpotlightOverlay glow={glow} />

      <motion.div
        aria-hidden
        animate={
          reduce ? undefined : { scale: [1, 1.15, 1], opacity: [0.7, 1, 0.7] }
        }
        transition={{ duration: 12, ease: "easeInOut", repeat: Infinity }}
        className="pointer-events-none absolute -right-32 -top-32 h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(167,139,250,0.18),transparent_60%)] blur-2xl"
      />
      <motion.div
        aria-hidden
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={VIEWPORT}
        transition={{ duration: 1.2, ease: EASE }}
        className="pointer-events-none absolute inset-x-12 top-0 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent"
      />

      <div className="grid grid-cols-1 gap-0 lg:grid-cols-[1.05fr_1fr]">
        <div
          ref={ref}
          className={`relative aspect-[16/10] w-full overflow-hidden ${project.image ? "" : project.placeholderBg} lg:aspect-auto lg:min-h-[460px]`}
        >
          {project.image ? (
            <>
              <div className="absolute inset-0 transition-transform duration-[900ms] ease-out group-hover:scale-[1.05]">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  style={reduce ? undefined : { y: imageY, scale: 1.12 }}
                  className="h-full w-full object-cover"
                />
              </div>
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
          <motion.div
            variants={fadeUp}
            className="mb-4 inline-flex items-center gap-2"
          >
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

          <motion.div
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.05 } },
            }}
            className="mt-5 flex flex-wrap gap-2"
          >
            {project.tech.map((t) => (
              <motion.span
                key={t}
                variants={chip}
                whileHover={{ y: -2, scale: 1.05 }}
                className="inline-flex cursor-default items-center rounded-full border border-border-subtle bg-white/[0.035] px-3 py-1 text-[11px] font-medium tracking-wide text-foreground/80 transition-colors hover:border-accent/50 hover:text-foreground"
              >
                {t}
              </motion.span>
            ))}
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="mt-7 flex flex-wrap items-center gap-2.5"
          >
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
    <motion.a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
      className="btn-sheen group inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-[12px] font-semibold uppercase tracking-[0.16em] text-[#1a0b2e] shadow-[0_15px_45px_-15px_rgba(167,139,250,0.7)] transition-shadow hover:shadow-[0_18px_55px_-12px_rgba(167,139,250,1)] sm:text-[12.5px]"
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
      whileTap={{ scale: 0.97 }}
      className="inline-flex items-center gap-2 rounded-full border border-border-strong bg-white/[0.025] px-5 py-3 text-[12px] font-semibold uppercase tracking-[0.16em] text-foreground transition-colors hover:bg-white/[0.05] sm:text-[12.5px]"
    >
      <IconForLabel label={label} />
      {label}
    </motion.a>
  );
}
