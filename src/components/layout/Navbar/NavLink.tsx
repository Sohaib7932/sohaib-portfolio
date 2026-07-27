"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { SPRING_SNAPPY } from "@/components/motion/tokens";

type NavLinkProps = {
  href: string;
  label: string;
  active?: boolean;
};

export function NavLink({ href, label, active = false }: NavLinkProps) {
  return (
    <Link
      href={href}
      aria-current={active ? "true" : undefined}
      className="group relative px-1 py-2 text-[13px] tracking-[0.18em] uppercase text-foreground/70 transition-colors hover:text-foreground"
    >
      <span
        className={`inline-block transition-transform duration-300 ease-out group-hover:-translate-y-px ${
          active ? "text-foreground" : ""
        }`}
      >
        {label}
      </span>

      {/* Hover hint. Stands down while this section is the active one. */}
      <span
        aria-hidden
        className={`absolute left-1 right-1 -bottom-0.5 h-px origin-center scale-x-0 bg-foreground/35 transition-transform duration-300 ease-out group-hover:scale-x-100 ${
          active ? "opacity-0" : ""
        }`}
      />

      {/* Shared layout id: the marker glides between links as you scroll. */}
      {active && (
        <motion.span
          layoutId="nav-active"
          className="absolute left-1 right-1 -bottom-0.5 h-px bg-accent shadow-[0_0_10px_rgba(167,139,250,0.9)]"
          transition={SPRING_SNAPPY}
        />
      )}
    </Link>
  );
}
