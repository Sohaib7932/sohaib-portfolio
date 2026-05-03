import type { ProjectIllustrationKey } from "./types";

export function ProjectIllustration({
  illustration,
}: {
  illustration: ProjectIllustrationKey;
}) {
  if (illustration === "palm") return <PalmIllustration />;
  if (illustration === "scrape") return <ScrapeIllustration />;
  return null;
}

function PalmIllustration() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(167,139,250,0.28),transparent_60%)]"
      />
      <div
        aria-hidden
        className="absolute inset-0 [background-image:radial-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:18px_18px] opacity-50"
      />

      <svg
        viewBox="0 0 200 200"
        className="relative h-[78%] w-auto text-accent drop-shadow-[0_8px_20px_rgba(167,139,250,0.35)]"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <path
          d="M70 170c0-20-12-30-12-50 0-12 5-18 12-18s10 6 10 14V70c0-8 4-12 10-12s10 4 10 12v40c0-10 4-14 10-14s10 4 10 14v36c0 24-12 44-30 44H85c-9 0-15-7-15-20Z"
          className="opacity-95"
        />
        <path
          d="M82 96V40c0-7 4-12 10-12s10 5 10 12v56"
          className="opacity-90"
        />
        <path
          d="M102 102V52c0-7 4-12 10-12s10 5 10 12v50"
          className="opacity-90"
        />
        <path
          d="M122 110V70c0-7 4-12 10-12s10 5 10 12v40"
          className="opacity-90"
        />

        <g
          className="opacity-80"
          stroke="rgba(255,255,255,0.55)"
          strokeWidth="1.2"
          strokeDasharray="2 4"
        >
          <path d="M86 132c8 4 16 4 24 0" />
          <path d="M84 144c10 6 22 6 32 0" />
          <path d="M88 156c8 3 16 3 24 0" />
        </g>

        <g fill="#c4b5fd" stroke="none" className="opacity-90">
          <circle cx="92" cy="120" r="2" />
          <circle cx="108" cy="120" r="2" />
          <circle cx="100" cy="138" r="2" />
          <circle cx="92" cy="156" r="2" />
          <circle cx="116" cy="156" r="2" />
        </g>
      </svg>

      <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full border border-white/15 bg-black/35 px-3 py-1.5 backdrop-blur-md">
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
        <span className="font-mono text-[10px] font-semibold tracking-[0.16em] text-white/80">
          PALM VEIN AUTH
        </span>
      </div>

      <div className="absolute bottom-4 right-4 flex items-center gap-1.5 rounded-full border border-white/15 bg-black/35 px-2.5 py-1.5 backdrop-blur-md">
        <svg
          width="11"
          height="11"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
          className="text-white/90"
        >
          <rect x="2" y="6" width="20" height="14" rx="2" />
          <path d="M2 10h20" />
        </svg>
        <span className="font-mono text-[10px] font-semibold tracking-[0.14em] text-white/85">
          PAY
        </span>
      </div>
    </div>
  );
}

function ScrapeIllustration() {
  return (
    <div className="absolute inset-0">
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(circle_at_30%_35%,rgba(56,189,248,0.22),transparent_55%),radial-gradient(circle_at_75%_65%,rgba(167,139,250,0.18),transparent_55%)]"
      />
      <div
        aria-hidden
        className="absolute inset-0 [background-image:linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:32px_32px] opacity-70"
      />

      <div className="absolute inset-x-6 top-5 rounded-xl border border-white/10 bg-black/30 p-3 backdrop-blur-md">
        <div className="mb-2 flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-rose-400/80" />
          <span className="h-2 w-2 rounded-full bg-amber-400/80" />
          <span className="h-2 w-2 rounded-full bg-emerald-400/80" />
        </div>
        <div className="flex items-center gap-2 rounded-md border border-white/10 bg-white/[0.04] px-2.5 py-1.5">
          <svg
            width="11"
            height="11"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
            className="text-cyan-300/90"
          >
            <circle cx="11" cy="11" r="7" />
            <path d="m21 21-4.3-4.3" />
          </svg>
          <span className="font-mono text-[10px] tracking-wide text-white/70">
            search facebook marketplace…
          </span>
        </div>
      </div>

      <div className="absolute inset-x-6 bottom-4 grid grid-cols-3 gap-2">
        <ResultRow accent="from-cyan-400/30 to-cyan-400/0" />
        <ResultRow accent="from-fuchsia-400/30 to-fuchsia-400/0" />
        <ResultRow accent="from-violet-400/30 to-violet-400/0" />
      </div>

      <div className="absolute bottom-3 right-4 flex items-center gap-1.5 rounded-full border border-white/15 bg-black/40 px-2.5 py-1 backdrop-blur-md">
        <svg
          width="10"
          height="10"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
          className="text-white/85"
        >
          <path d="m9 18 6-6-6-6" />
        </svg>
        <span className="font-mono text-[9.5px] font-semibold tracking-[0.18em] text-white/85">
          PY · HTML
        </span>
      </div>
    </div>
  );
}

function ResultRow({ accent }: { accent: string }) {
  return (
    <div className="overflow-hidden rounded-lg border border-white/10 bg-black/35 p-2 backdrop-blur-md">
      <div
        className={`mb-2 h-10 rounded-md bg-gradient-to-br ${accent} border border-white/5`}
      />
      <div className="space-y-1">
        <div className="h-1.5 w-3/4 rounded-full bg-white/15" />
        <div className="h-1.5 w-1/2 rounded-full bg-white/10" />
      </div>
    </div>
  );
}
