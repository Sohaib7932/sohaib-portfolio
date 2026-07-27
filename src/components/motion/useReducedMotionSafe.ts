"use client";

import { useSyncExternalStore } from "react";

const QUERY = "(prefers-reduced-motion: reduce)";

function subscribe(onChange: () => void) {
  const query = window.matchMedia(QUERY);
  query.addEventListener("change", onChange);
  return () => query.removeEventListener("change", onChange);
}

/**
 * Hydration-safe replacement for motion's own `useReducedMotion`.
 *
 * Anything that changes what gets *rendered* (a branch, a `style` prop) has to
 * agree between the server and the first client render. The server can't know
 * the user's motion preference, so this reports `false` for SSR and hydration
 * and only then re-renders with the real value. Motion's hook reads the media
 * query immediately, which makes the two passes disagree and tears the tree.
 *
 * Preferences that only affect motion's own animations don't need this, they're
 * handled globally by `reducedMotion="user"` in MotionProvider.
 */
export function useReducedMotionSafe() {
  return useSyncExternalStore(
    subscribe,
    () => window.matchMedia(QUERY).matches,
    () => false,
  );
}
