"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { NavLink } from "./NavLink";
import { MobileMenu } from "./MobileMenu";
import { useActiveSection } from "./useActiveSection";
import { ThemeToggle } from "./ThemeToggle";
import { Magnetic } from "@/components/motion/Magnetic";
import { EASE } from "@/components/motion/tokens";

const links = [
  { href: "/#about", label: "About" },
  { href: "/#work", label: "Work" },
  { href: "/#services", label: "Services" },
  { href: "/#contact", label: "Contact" },
];

const sectionIds = ["about", "work", "services", "contact"] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);

  const pathname = usePathname();
  const activeSection = useActiveSection(sectionIds, pathname === "/");

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    setScrolled(latest > 12);
    // Give the page back to the reader on the way down, return it the moment
    // they scroll back up. Never disappear while the mobile menu is open.
    setHidden(!open && latest > previous && latest > 260);
  });

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
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: hidden ? -130 : 0, opacity: 1 }}
        transition={{ duration: 0.55, ease: EASE }}
        className="fixed inset-x-0 top-0 z-50 flex justify-center px-3 pt-3 sm:px-5 sm:pt-4 lg:pt-6"
      >
        <div className="w-full max-w-6xl">
          <motion.div
            animate={{
              scale: scrolled ? 0.985 : 1,
              boxShadow: scrolled
                ? "0 18px 50px -24px rgba(0,0,0,0.9)"
                : "0 0px 0px 0px rgba(0,0,0,0)",
            }}
            transition={{ duration: 0.4, ease: EASE }}
            className={`flex items-center justify-between gap-3 rounded-full border px-3 py-2 transition-colors duration-300 sm:px-5 sm:py-3 lg:px-6 ${
              scrolled
                ? "border-border-strong bg-chrome backdrop-blur-xl"
                : "border-border-subtle bg-chrome backdrop-blur-md"
            }`}
          >
            <Link
              href="/"
              className="group shrink-0 text-[12px] font-semibold tracking-[0.16em] text-foreground sm:text-[13px] sm:tracking-[0.18em] lg:text-sm"
            >
              <span className="inline-block transition-transform duration-300 ease-out group-hover:-translate-y-px">
                M. SOHAIB
              </span>
              <span className="ml-0.5 inline-block text-accent-ink transition-transform duration-300 ease-out group-hover:rotate-90">
                .
              </span>
            </Link>

            <nav className="hidden items-center gap-7 lg:flex">
              {links.map((link) => (
                <NavLink
                  key={link.href}
                  {...link}
                  active={link.href === `/#${activeSection}`}
                />
              ))}
            </nav>

            <div className="flex shrink-0 items-center gap-2 sm:gap-2.5">
              <ThemeToggle />

              <Magnetic className="hidden lg:inline-block">
                <motion.a
                  href="/#contact"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  className="btn-sheen group relative inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-[13px] font-semibold tracking-wide text-on-accent shadow-[0_10px_30px_-12px_var(--shadow)] transition-shadow hover:shadow-[0_14px_36px_-10px_var(--shadow)]"
                >
                  Hire Me
                  <span className="h-1.5 w-1.5 rounded-full bg-on-accent/70 transition-transform group-hover:translate-x-0.5" />
                </motion.a>
              </Magnetic>

              <button
                type="button"
                onClick={() => setOpen((v) => !v)}
                aria-expanded={open}
                aria-controls="mobile-menu"
                aria-label={open ? "Close menu" : "Open menu"}
                className="relative z-50 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border-subtle bg-surface-strong text-foreground transition-colors hover:border-border-strong active:scale-95 sm:h-10 sm:w-10 lg:hidden"
              >
                <HamburgerIcon open={open} />
              </button>
            </div>
          </motion.div>
        </div>
      </motion.header>

      <MobileMenu open={open} links={links} onClose={() => setOpen(false)} />
    </>
  );
}

/**
 * Bars that fold into a cross.
 *
 * Driven by CSS transforms on static geometry rather than by animating the
 * `x1`/`y1` attributes: the coordinates stay valid at every frame, and the
 * reduced-motion rule in globals.css collapses the transition to an instant
 * swap instead of leaving the icon stuck mid-shape.
 */
function HamburgerIcon({ open }: { open: boolean }) {
  const barClass = "transition-transform duration-300 ease-out";
  const origin = { transformOrigin: "12px 12px" } as const;

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
      <line
        x1="4"
        x2="20"
        y1="7"
        y2="7"
        className={barClass}
        style={{
          ...origin,
          transform: open ? "translateY(5px) rotate(45deg)" : "none",
        }}
      />
      <line
        x1="4"
        x2="20"
        y1="12"
        y2="12"
        className="transition-opacity duration-200"
        style={{ opacity: open ? 0 : 1 }}
      />
      <line
        x1="4"
        x2="20"
        y1="17"
        y2="17"
        className={barClass}
        style={{
          ...origin,
          transform: open ? "translateY(-5px) rotate(-45deg)" : "none",
        }}
      />
    </svg>
  );
}
