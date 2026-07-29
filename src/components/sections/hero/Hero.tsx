import { HeroContent } from "./HeroContent";
import { HeroMarquee } from "./HeroMarquee";
import { HeroPortrait } from "./HeroPortrait";
import { ScrollCue } from "./ScrollCue";

/**
 * Three depth planes, back to front:
 *
 *   z-0   the oversized name, drifting slowest
 *   z-10  the copy, drifting fastest on the way out
 *   z-20  the portrait, trailing behind the copy
 *
 * Each plane moves at its own rate as the hero scrolls away, which is what
 * sells the parallax rather than any single effect on its own.
 */
export function Hero() {
  return (
    <section
      id="hero"
      className="relative isolate overflow-hidden px-5 pt-32 pb-20 sm:px-8 sm:pt-40 sm:pb-24 lg:px-16 lg:pt-44"
    >
      <HeroMarquee />

      <div className="relative mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 sm:gap-16 lg:grid-cols-[1.15fr_1fr] lg:gap-20">
        <HeroContent />
        <HeroPortrait />
      </div>

      <ScrollCue />

      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -bottom-24 h-48 bg-gradient-to-b from-transparent to-background"
      />
    </section>
  );
}
