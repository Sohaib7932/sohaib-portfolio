"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { NavLink } from "./NavLink";

const links = [
  { href: "/#about", label: "About" },
  { href: "/#work", label: "Work" },
  { href: "/#services", label: "Services" },
  { href: "/#contact", label: "Contact" },
];

export function Navbar() {
  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4 sm:pt-6"
    >
      <div className="w-full max-w-6xl">
        <div className="flex items-center justify-between rounded-full border border-border-subtle bg-white/[0.025] px-5 py-3 backdrop-blur-md sm:px-6">
          <Link
            href="/"
            className="text-sm font-semibold tracking-[0.18em] text-foreground"
          >
            M. SOHAIB
          </Link>

          <nav className="hidden items-center gap-7 md:flex">
            {links.map((link) => (
              <NavLink key={link.href} {...link} />
            ))}
          </nav>

          <motion.a
            href="/#contact"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="group relative inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-[13px] font-semibold tracking-wide text-[#1a0b2e] shadow-[0_8px_30px_-10px_rgba(167,139,250,0.7)] transition-shadow hover:shadow-[0_10px_40px_-8px_rgba(167,139,250,0.9)]"
          >
            Hire Me
            <span className="h-1.5 w-1.5 rounded-full bg-[#1a0b2e]/70 transition-transform group-hover:translate-x-0.5" />
          </motion.a>
        </div>
      </div>
    </motion.header>
  );
}
