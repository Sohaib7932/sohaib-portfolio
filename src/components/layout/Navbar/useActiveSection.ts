"use client";

import { useEffect, useState } from "react";

/**
 * Reports which section is currently under the reader, so the navbar marker can
 * follow along as the page scrolls.
 *
 * The observer's root margin collapses the viewport down to a thin band across
 * the middle. A section counts as "active" only while it crosses that band,
 * which avoids the flicker you get from tracking whichever section happens to
 * be the tallest on screen.
 */
export function useActiveSection(ids: readonly string[], enabled: boolean) {
  const [active, setActive] = useState("");

  useEffect(() => {
    if (!enabled) return;

    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    const visible = new Set<string>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) visible.add(entry.target.id);
          else visible.delete(entry.target.id);
        }
        // Ties resolve in document order, so the upper section wins.
        setActive(ids.find((id) => visible.has(id)) ?? "");
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );

    for (const el of elements) observer.observe(el);
    return () => observer.disconnect();
  }, [ids, enabled]);

  // Derived rather than cleared in the effect, so leaving the page that owns
  // these sections drops the marker on the same render as the navigation.
  return enabled ? active : "";
}
