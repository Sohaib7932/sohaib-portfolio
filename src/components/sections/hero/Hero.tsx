import { HeroContent } from "./HeroContent";
import { HeroPortrait } from "./HeroPortrait";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative isolate overflow-hidden px-5 pt-32 pb-20 sm:px-8 sm:pt-40 sm:pb-24 lg:px-16 lg:pt-44"
    >
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 sm:gap-16 lg:grid-cols-[1.15fr_1fr] lg:gap-20">
        <HeroContent />
        <HeroPortrait />
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -bottom-24 h-48 bg-gradient-to-b from-transparent to-background"
      />
    </section>
  );
}
