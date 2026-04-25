"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";

type SocialLinkProps = {
  href: string;
  label: string;
  children: ReactNode;
};

export function SocialLink({ href, label, children }: SocialLinkProps) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      whileHover={{ y: -2, scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="group relative flex h-11 w-11 items-center justify-center rounded-full border border-border-subtle bg-white/[0.025] text-foreground/70 transition-colors hover:border-border-strong hover:text-foreground"
    >
      <span
        aria-hidden
        className="absolute inset-0 -z-10 rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(167,139,250,0.35),transparent_70%)] opacity-0 blur-md transition-opacity group-hover:opacity-100"
      />
      {children}
    </motion.a>
  );
}
