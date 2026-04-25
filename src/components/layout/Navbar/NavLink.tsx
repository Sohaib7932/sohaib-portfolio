"use client";

import Link from "next/link";
import { motion } from "motion/react";

type NavLinkProps = {
  href: string;
  label: string;
  active?: boolean;
};

export function NavLink({ href, label, active = false }: NavLinkProps) {
  return (
    <Link
      href={href}
      className="relative px-1 py-2 text-[13px] tracking-[0.18em] uppercase text-foreground/70 transition-colors hover:text-foreground"
    >
      <span className={active ? "text-foreground" : undefined}>{label}</span>
      {active && (
        <motion.span
          layoutId="nav-active"
          className="absolute left-1 right-1 -bottom-0.5 h-px bg-accent"
          transition={{ type: "spring", stiffness: 380, damping: 30 }}
        />
      )}
    </Link>
  );
}
