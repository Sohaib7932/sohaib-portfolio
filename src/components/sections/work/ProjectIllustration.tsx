"use client";

import { motion } from "motion/react";
import type { ProjectIllustrationKey } from "./types";

export function ProjectIllustration({
  illustration,
}: {
  illustration: ProjectIllustrationKey;
}) {
  if (illustration === "palm") return <PalmIllustration />;
  if (illustration === "scrape") return <ScrapeIllustration />;
  if (illustration === "dashboard") return <DashboardIllustration />;
  if (illustration === "webapp") return <WebappIllustration />;
  if (illustration === "analyzer") return <AnalyzerIllustration />;
  return null;
}

function DashboardIllustration() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(56,124,232,0.22),transparent_55%),radial-gradient(circle_at_75%_70%,rgba(167,139,250,0.18),transparent_55%)]"
      />
      <div
        aria-hidden
        className="absolute inset-0 [background-image:linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:28px_28px] opacity-70"
      />

      <div className="absolute inset-x-5 top-5 bottom-5 flex gap-3 rounded-xl border border-white/12 bg-black/30 p-3 backdrop-blur-md">
        <div className="flex w-[28%] flex-col gap-1.5 rounded-lg border border-white/8 bg-white/[0.04] p-2">
          <div className="mb-1 flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
            <div className="h-1.5 w-12 rounded-full bg-white/25" />
          </div>
          <div className="h-2 w-full rounded-md bg-sky-400/25" />
          <div className="h-2 w-3/4 rounded-md bg-white/10" />
          <div className="h-2 w-4/5 rounded-md bg-white/10" />
          <div className="h-2 w-2/3 rounded-md bg-white/10" />
          <div className="mt-auto h-2 w-1/2 rounded-md bg-white/8" />
        </div>

        <div className="flex flex-1 flex-col gap-2">
          <div className="flex items-center gap-1.5">
            <div className="h-2 w-20 rounded-full bg-white/25" />
            <div className="ml-auto h-4 w-4 rounded-full border border-white/15 bg-white/10" />
            <div className="h-4 w-4 rounded-full border border-white/15 bg-white/10" />
          </div>
          <div className="grid grid-cols-3 gap-1.5">
            <StatBox accent="from-sky-400/30 to-sky-400/0" />
            <StatBox accent="from-violet-400/30 to-violet-400/0" />
            <StatBox accent="from-emerald-400/30 to-emerald-400/0" />
          </div>
          <div className="flex-1 rounded-md border border-white/8 bg-white/[0.03] p-2">
            <div className="mb-1.5 h-1.5 w-16 rounded-full bg-white/20" />
            <div className="flex flex-col gap-1">
              <div className="h-1.5 w-full rounded-full bg-white/8" />
              <div className="h-1.5 w-5/6 rounded-full bg-white/8" />
              <div className="h-1.5 w-3/4 rounded-full bg-white/8" />
              <div className="h-1.5 w-4/5 rounded-full bg-white/8" />
            </div>
          </div>
        </div>
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
          className="text-sky-300/90"
        >
          <rect x="3" y="4" width="18" height="14" rx="2" />
          <path d="M3 9h18" />
        </svg>
        <span className="font-mono text-[9.5px] font-semibold tracking-[0.18em] text-white/85">
          CLIENT PORTAL
        </span>
      </div>
    </div>
  );
}

function WebappIllustration() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(167,139,250,0.24),transparent_55%),radial-gradient(circle_at_50%_90%,rgba(232,121,249,0.16),transparent_55%)]"
      />
      <div
        aria-hidden
        className="absolute inset-0 opacity-50 [background-image:radial-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:18px_18px]"
      />

      <div className="absolute inset-x-6 top-5 overflow-hidden rounded-xl border border-white/12 bg-black/30 backdrop-blur-md">
        <div className="flex items-center gap-1.5 border-b border-white/8 px-3 py-2">
          <span className="h-1.5 w-1.5 rounded-full bg-rose-400/80" />
          <span className="h-1.5 w-1.5 rounded-full bg-amber-400/80" />
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400/80" />
          <div className="ml-2 flex h-3 flex-1 items-center rounded-md border border-white/8 bg-white/[0.04] px-2">
            <div className="h-1 w-16 rounded-full bg-white/15" />
          </div>
          <div className="ml-2 flex gap-1">
            <div className="h-1.5 w-5 rounded-full bg-white/15" />
            <div className="h-1.5 w-5 rounded-full bg-white/15" />
            <div className="h-1.5 w-5 rounded-full bg-white/15" />
          </div>
        </div>
        <div className="flex flex-col items-center px-4 py-4 text-center">
          <div className="mb-1.5 h-1.5 w-12 rounded-full bg-accent/40" />
          <div className="mb-1 h-2.5 w-3/5 rounded-md bg-white/25" />
          <div className="mb-3 h-2.5 w-2/5 rounded-md bg-white/15" />
          <div className="flex gap-1.5">
            <div className="h-4 w-12 rounded-md bg-accent/70" />
            <div className="h-4 w-10 rounded-md border border-white/15 bg-white/[0.05]" />
          </div>
        </div>
      </div>

      <div className="absolute inset-x-6 bottom-4 grid grid-cols-3 gap-1.5">
        <FeatureCard />
        <FeatureCard />
        <FeatureCard />
      </div>
    </div>
  );
}

function AnalyzerIllustration() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(34,211,238,0.2),transparent_55%),radial-gradient(circle_at_75%_70%,rgba(244,114,182,0.16),transparent_55%)]"
      />
      <div
        aria-hidden
        className="absolute inset-0 [background-image:linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:32px_32px] opacity-60"
      />

      <div className="absolute inset-x-5 top-5 bottom-5 flex gap-2">
        <div className="flex w-[58%] flex-col gap-1.5 overflow-hidden rounded-xl border border-white/12 bg-black/35 p-3 backdrop-blur-md">
          <div className="mb-1 flex items-center gap-1.5">
            <span className="font-mono text-[8.5px] font-semibold tracking-wider text-white/40">
              app.py
            </span>
          </div>
          <CodeLine indent={0} segments={["def", " bloater_class", "():"]} colors={["text-fuchsia-300/80", "text-sky-300/80", "text-white/40"]} />
          <CodeLine indent={1} segments={["self", ".x ", "= ", "42"]} colors={["text-rose-300/80", "text-white/30", "text-white/30", "text-amber-300/80"]} />
          <CodeLine indent={1} segments={["if", " a ", "and ", "b:"]} colors={["text-fuchsia-300/80", "text-white/40", "text-fuchsia-300/80", "text-white/40"]} />
          <CodeLine indent={2} segments={["return", " do_x", "(", "a", ")"]} colors={["text-fuchsia-300/80", "text-sky-300/80", "text-white/30", "text-white/40", "text-white/30"]} />
          <CodeLine indent={1} segments={["for", " i ", "in ", "range", "(n):"]} colors={["text-fuchsia-300/80", "text-white/40", "text-fuchsia-300/80", "text-sky-300/80", "text-white/30"]} />
          <CodeLine indent={2} segments={["pass"]} colors={["text-fuchsia-300/80"]} />
        </div>

        <div className="flex w-[42%] flex-col gap-1.5 rounded-xl border border-white/12 bg-black/35 p-3 backdrop-blur-md">
          <div className="mb-1 flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-rose-400" />
            <span className="font-mono text-[8.5px] font-semibold uppercase tracking-wider text-white/55">
              Smells
            </span>
          </div>
          <SmellBadge tone="rose" label="Long method" />
          <SmellBadge tone="amber" label="Large class" />
          <SmellBadge tone="violet" label="Feature envy" />
          <SmellBadge tone="cyan" label="Data clump" />
        </div>
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
          className="text-cyan-300/90"
        >
          <path d="m8 5 12 7-12 7" />
          <path d="M4 5v14" />
        </svg>
        <span className="font-mono text-[9.5px] font-semibold tracking-[0.18em] text-white/85">
          ANALYZE
        </span>
      </div>
    </div>
  );
}

function StatBox({ accent }: { accent: string }) {
  return (
    <div className="overflow-hidden rounded-md border border-white/8 bg-black/30 p-1.5">
      <div className={`mb-1 h-3 rounded-sm bg-gradient-to-br ${accent}`} />
      <div className="h-1 w-2/3 rounded-full bg-white/15" />
    </div>
  );
}

function FeatureCard() {
  return (
    <div className="overflow-hidden rounded-md border border-white/10 bg-black/30 p-1.5 backdrop-blur-md">
      <div className="mb-1 h-4 rounded-sm bg-gradient-to-br from-white/10 to-white/0 border border-white/5" />
      <div className="space-y-0.5">
        <div className="h-1 w-4/5 rounded-full bg-white/18" />
        <div className="h-1 w-3/5 rounded-full bg-white/10" />
      </div>
    </div>
  );
}

function CodeLine({
  indent,
  segments,
  colors,
}: {
  indent: number;
  segments: string[];
  colors: string[];
}) {
  return (
    <div className="flex items-center font-mono text-[9px] leading-tight">
      <span className="mr-2 w-3 text-right text-white/20">·</span>
      <span style={{ width: `${indent * 8}px` }} />
      {segments.map((seg, i) => (
        <span key={i} className={colors[i]}>
          {seg}
        </span>
      ))}
    </div>
  );
}

function SmellBadge({ tone, label }: { tone: "rose" | "amber" | "violet" | "cyan"; label: string }) {
  const toneClasses = {
    rose: "border-rose-400/35 bg-rose-400/10 text-rose-200/90",
    amber: "border-amber-400/35 bg-amber-400/10 text-amber-200/90",
    violet: "border-violet-400/35 bg-violet-400/10 text-violet-200/90",
    cyan: "border-cyan-400/35 bg-cyan-400/10 text-cyan-200/90",
  };
  return (
    <div
      className={`flex items-center gap-1.5 rounded-md border px-1.5 py-0.5 ${toneClasses[tone]}`}
    >
      <span className="h-1 w-1 rounded-full bg-current" />
      <span className="font-mono text-[8.5px] tracking-wide">{label}</span>
    </div>
  );
}

function PalmIllustration() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(167,139,250,0.34),transparent_60%)]"
      />
      <div
        aria-hidden
        className="absolute inset-0 opacity-55 [background-image:radial-gradient(rgba(255,255,255,0.07)_1px,transparent_1px)] [background-size:14px_14px]"
      />

      <motion.div
        aria-hidden
        animate={{ scale: [1, 1.08, 1], opacity: [0.32, 0.55, 0.32] }}
        transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent/30 sm:h-52 sm:w-52"
      />
      <motion.div
        aria-hidden
        animate={{ scale: [1.06, 1, 1.06], opacity: [0.12, 0.28, 0.12] }}
        transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent/20 sm:h-72 sm:w-72"
      />

      <svg
        viewBox="0 0 200 240"
        className="absolute left-1/2 top-1/2 h-[86%] w-auto -translate-x-1/2 -translate-y-1/2 text-accent drop-shadow-[0_8px_22px_rgba(167,139,250,0.45)]"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <g strokeWidth="2.4" className="opacity-95">
          <path d="M 56 110 Q 56 100 66 100 L 154 100 Q 164 100 164 110 L 164 195 Q 164 220 144 226 Q 110 232 76 226 Q 56 220 56 195 Z" />

          <path d="M 62 100 L 62 42 Q 62 32 71 32 Q 80 32 80 42 L 80 100" />
          <path d="M 86 100 L 86 26 Q 86 16 95 16 Q 104 16 104 26 L 104 100" />
          <path d="M 110 100 L 110 34 Q 110 24 119 24 Q 128 24 128 34 L 128 100" />
          <path d="M 134 100 L 134 54 Q 134 46 142 46 Q 150 46 150 54 L 150 100" />

          <path d="M 56 144 Q 36 138 28 122 Q 22 106 34 100 Q 50 96 60 116" />
        </g>

        <g
          stroke="#c4b5fd"
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
          className="opacity-80"
        >
          <path d="M 100 218 C 100 200 96 184 96 168 C 96 154 96 138 96 122" />
          <path d="M 96 144 C 86 142 76 138 68 132" />
          <path d="M 100 152 C 110 148 120 144 128 140" />
          <path d="M 102 162 C 115 160 128 156 138 152" />
          <path d="M 90 168 C 78 168 64 158 56 148" />
          <path d="M 86 182 L 102 178" />
          <path d="M 92 196 L 108 192" />
          <path d="M 98 130 C 92 128 86 126 82 122" />
        </g>

        <g fill="#c4b5fd" className="opacity-90">
          <motion.circle
            cx="96"
            cy="122"
            r="2.6"
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.circle
            cx="96"
            cy="144"
            r="1.8"
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.3,
            }}
          />
          <motion.circle
            cx="100"
            cy="152"
            r="1.8"
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.6,
            }}
          />
          <motion.circle
            cx="102"
            cy="162"
            r="1.8"
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.9,
            }}
          />
          <motion.circle
            cx="90"
            cy="168"
            r="1.8"
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.45,
            }}
          />
        </g>
      </svg>

      <motion.div
        aria-hidden
        initial={{ top: "22%", opacity: 0 }}
        animate={{ top: ["22%", "78%", "22%"], opacity: [0, 0.85, 0] }}
        transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute inset-x-8 h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent shadow-[0_0_22px_rgba(167,139,250,0.85)]"
      />

      <CornerBracket position="top-3 left-3" rotation={0} />
      <CornerBracket position="top-3 right-3" rotation={90} />
      <CornerBracket position="bottom-3 right-3" rotation={180} />
      <CornerBracket position="bottom-3 left-3" rotation={270} />

      <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full border border-white/15 bg-black/40 px-3 py-1.5 backdrop-blur-md">
        <span className="relative flex h-1.5 w-1.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/80" />
          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.85)]" />
        </span>
        <span className="font-mono text-[10px] font-semibold tracking-[0.16em] text-white/85">
          PALM VEIN AUTH
        </span>
      </div>

      <div className="absolute bottom-4 right-4 flex items-center gap-1.5 rounded-full border border-white/15 bg-black/40 px-2.5 py-1.5 backdrop-blur-md">
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

      <div className="absolute top-4 right-4 flex items-center gap-1.5 rounded-full border border-white/12 bg-black/40 px-2.5 py-1 backdrop-blur-md">
        <span className="font-mono text-[9.5px] font-semibold tracking-[0.18em] text-accent/85">
          ID · 0x7B4F
        </span>
      </div>
    </div>
  );
}

function CornerBracket({
  position,
  rotation,
}: {
  position: string;
  rotation: number;
}) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      className={`pointer-events-none absolute ${position} text-accent/60`}
      style={{ transform: `rotate(${rotation}deg)` }}
      aria-hidden
    >
      <path
        d="M 1 7 L 1 1 L 7 1"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
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
