"use client";

import { motion } from "motion/react";
import { useCallback } from "react";

/**
 * Light/dark switch.
 *
 * Which icon shows is decided in CSS from the `data-theme` attribute that the
 * blocking script in the layout has already set, rather than from React state.
 * That means no hydration mismatch and no wrong-icon flash on first paint,
 * while the crossfade between sun and moon still animates.
 */
/** Kept in step with --background in globals.css. */
const CHROME_COLOR = { dark: "#191917", light: "#e6e5e0" } as const;

export function ThemeToggle({ className = "" }: { className?: string }) {
  const toggle = useCallback(() => {
    const root = document.documentElement;
    const next = root.dataset.theme === "dark" ? "light" : "dark";
    root.dataset.theme = next;

    // Persisted, so this choice is what the blocking script in the layout reads
    // on every future visit. It beats the dark default until changed again.
    try {
      localStorage.setItem("theme", next);
    } catch {
      // Private mode: the choice just won't survive a reload.
    }

    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", CHROME_COLOR[next]);
  }, []);

  return (
    <motion.button
      type="button"
      onClick={toggle}
      whileTap={{ scale: 0.9 }}
      aria-label="Toggle light and dark theme"
      className={`relative flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border-subtle bg-surface text-foreground/75 transition-colors hover:border-border-strong hover:text-foreground sm:h-10 sm:w-10 ${className}`}
    >
      <span className="theme-icon theme-icon-sun">
        <SunIcon />
      </span>
      <span className="theme-icon theme-icon-moon">
        <MoonIcon />
      </span>
    </motion.button>
  );
}

function SunIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <circle cx="12" cy="12" r="4.5" />
      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
      <path d="m4.9 4.9 1.4 1.4" />
      <path d="m17.7 17.7 1.4 1.4" />
      <path d="m19.1 4.9-1.4 1.4" />
      <path d="m6.3 17.7-1.4 1.4" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M20 14.5A8.5 8.5 0 0 1 9.5 4a8.5 8.5 0 1 0 10.5 10.5Z" />
    </svg>
  );
}
