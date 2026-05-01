"use client";

import { motion, type Variants } from "motion/react";
import type { Service } from "./data";
import { ServiceIcon } from "./ServiceIcons";

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

export function ServiceCard({
  service,
  index,
}: {
  service: Service;
  index: number;
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
      className="group relative isolate flex flex-col overflow-hidden rounded-3xl border border-border-subtle bg-white/[0.025] p-6 backdrop-blur-sm transition-colors hover:border-border-strong sm:p-7 md:p-8"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(167,139,250,0.18),transparent_70%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      />

      <div className="flex items-start justify-between gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-border-subtle bg-[linear-gradient(135deg,rgba(167,139,250,0.22),rgba(139,92,246,0.04))] text-accent">
          <ServiceIcon iconKey={service.iconKey} />
        </div>
        <span className="font-mono text-[11px] font-semibold tracking-[0.18em] text-foreground/35">
          {service.number}
        </span>
      </div>

      <h3 className="mt-6 text-[20px] font-bold tracking-tight text-foreground sm:mt-7 sm:text-[24px]">
        {service.title}
      </h3>
      <p className="mt-1.5 text-[13px] font-medium tracking-wide text-accent/85">
        {service.tagline}
      </p>

      <p className="mt-4 text-[14.5px] leading-[1.7] text-foreground/65">
        {service.description}
      </p>

      <ul className="mt-7 flex flex-col gap-2.5 border-t border-border-subtle/70 pt-6">
        {service.deliverables.map((item) => (
          <li
            key={item}
            className="flex items-start gap-2.5 text-[13.5px] text-foreground/75"
          >
            <CheckIcon />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </motion.article>
  );
}

function CheckIcon() {
  return (
    <span className="mt-[5px] flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-full border border-accent/40 bg-accent/10 text-accent">
      <svg
        width="9"
        height="9"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <path d="M5 12.5 10 17 19 7" />
      </svg>
    </span>
  );
}
