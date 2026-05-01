"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { NavLink } from "./NavLink";
import { MobileMenu } from "./MobileMenu";

const links = [
  { href: "/#about", label: "About" },
  { href: "/#work", label: "Work" },
  { href: "/#services", label: "Services" },
  { href: "/#contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (open) {
      const previous = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = previous;
      };
    }
  }, [open]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    function onScroll() {
      setScrolled(window.scrollY > 12);
    }
    onScroll();
    window.addEventListener("keydown", onKey);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-x-0 top-0 z-50 flex justify-center px-3 pt-3 sm:px-5 sm:pt-4 lg:pt-6"
      >
        <div className="w-full max-w-6xl">
          <div
            className={`flex items-center justify-between gap-3 rounded-full border px-3 py-2 transition-colors duration-300 sm:px-5 sm:py-3 lg:px-6 ${
              scrolled
                ? "border-border-strong bg-[#100a1c]/85 backdrop-blur-xl"
                : "border-border-subtle bg-[#100a1c]/55 backdrop-blur-md"
            }`}
          >
            <Link
              href="/"
              className="shrink-0 text-[12px] font-semibold tracking-[0.16em] text-foreground sm:text-[13px] sm:tracking-[0.18em] lg:text-sm"
            >
              M. SOHAIB
            </Link>

            <nav className="hidden items-center gap-7 lg:flex">
              {links.map((link) => (
                <NavLink key={link.href} {...link} />
              ))}
            </nav>

            <motion.a
              href="/#contact"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="group relative hidden items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-[13px] font-semibold tracking-wide text-[#1a0b2e] shadow-[0_8px_30px_-10px_rgba(167,139,250,0.7)] transition-shadow hover:shadow-[0_10px_40px_-8px_rgba(167,139,250,0.9)] lg:inline-flex"
            >
              Hire Me
              <span className="h-1.5 w-1.5 rounded-full bg-[#1a0b2e]/70 transition-transform group-hover:translate-x-0.5" />
            </motion.a>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              className="relative z-50 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border-subtle bg-white/[0.04] text-foreground transition-colors hover:border-border-strong active:scale-95 sm:h-10 sm:w-10 lg:hidden"
            >
              <HamburgerIcon open={open} />
            </button>
          </div>
        </div>
      </motion.header>

      <MobileMenu open={open} links={links} onClose={() => setOpen(false)} />
    </>
  );
}

function HamburgerIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className="overflow-visible"
    >
      <motion.line
        x1="4"
        x2="20"
        y1="7"
        y2="7"
        animate={
          open
            ? { rotate: 45, x1: 5, x2: 19, y1: 12, y2: 12 }
            : { rotate: 0, x1: 4, x2: 20, y1: 7, y2: 7 }
        }
        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
        style={{ transformOrigin: "12px 12px" }}
      />
      <motion.line
        x1="4"
        x2="20"
        y1="12"
        y2="12"
        animate={open ? { opacity: 0 } : { opacity: 1 }}
        transition={{ duration: 0.15 }}
      />
      <motion.line
        x1="4"
        x2="20"
        y1="17"
        y2="17"
        animate={
          open
            ? { rotate: -45, x1: 5, x2: 19, y1: 12, y2: 12 }
            : { rotate: 0, x1: 4, x2: 20, y1: 17, y2: 17 }
        }
        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
        style={{ transformOrigin: "12px 12px" }}
      />
    </svg>
  );
}
