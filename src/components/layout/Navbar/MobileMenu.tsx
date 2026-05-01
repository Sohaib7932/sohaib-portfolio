"use client";

import Link from "next/link";
import { motion, AnimatePresence, type Variants } from "motion/react";

type Link = { href: string; label: string };

const overlayVariants: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.25, ease: "easeOut" } },
  exit: { opacity: 0, transition: { duration: 0.2, ease: "easeIn" } },
};

const panelVariants: Variants = {
  hidden: { opacity: 0, y: -16, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.35,
      ease: [0.22, 1, 0.36, 1],
      when: "beforeChildren",
      staggerChildren: 0.06,
      delayChildren: 0.05,
    },
  },
  exit: {
    opacity: 0,
    y: -12,
    scale: 0.98,
    transition: { duration: 0.22, ease: [0.4, 0, 1, 1] },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  },
};

export function MobileMenu({
  open,
  links,
  onClose,
}: {
  open: boolean;
  links: Link[];
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="mobile-menu"
          variants={overlayVariants}
          initial="hidden"
          animate="show"
          exit="exit"
          onClick={onClose}
          className="fixed inset-0 z-40 bg-background/70 backdrop-blur-md lg:hidden"
        >
          <motion.div
            variants={panelVariants}
            onClick={(e) => e.stopPropagation()}
            className="absolute inset-x-3 top-[calc(env(safe-area-inset-top,0px)+4.5rem)] overflow-hidden rounded-3xl border border-border-subtle bg-[#100a1c]/95 p-5 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)] backdrop-blur-xl sm:inset-x-5 sm:top-[calc(env(safe-area-inset-top,0px)+5rem)] sm:p-6"
          >
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(167,139,250,0.18),transparent_70%)]"
            />

            <nav className="flex flex-col">
              {links.map((link) => (
                <motion.div key={link.href} variants={itemVariants}>
                  <Link
                    href={link.href}
                    onClick={onClose}
                    className="group flex items-center justify-between border-b border-border-subtle py-4 text-[14px] font-semibold uppercase tracking-[0.22em] text-foreground/85 transition-colors hover:text-foreground"
                  >
                    <span>{link.label}</span>
                    <span
                      aria-hidden
                      className="text-foreground/35 transition-all group-hover:translate-x-0.5 group-hover:text-accent"
                    >
                      →
                    </span>
                  </Link>
                </motion.div>
              ))}
            </nav>

            <motion.a
              variants={itemVariants}
              href="/#contact"
              onClick={onClose}
              whileTap={{ scale: 0.97 }}
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-5 py-3.5 text-[12.5px] font-semibold uppercase tracking-[0.18em] text-[#1a0b2e] shadow-[0_15px_45px_-15px_rgba(167,139,250,0.8)]"
            >
              Hire Me
              <span className="h-1.5 w-1.5 rounded-full bg-[#1a0b2e]/70" />
            </motion.a>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
