"use client";

import { motion, type Variants } from "motion/react";
import type { ReactNode } from "react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

export function ContactInfo() {
  return (
    <motion.div
      variants={stagger}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      className="flex flex-col gap-6"
    >
      <motion.div variants={fadeUp}>
        <h3 className="text-[20px] font-bold tracking-tight text-foreground sm:text-[24px]">
          Reach me directly.
        </h3>
        <p className="mt-3 text-[14.5px] leading-[1.7] text-foreground/65">
          Prefer email or socials? Pick whatever works. For project inquiries, a
          short brief — what, why, and when — gets the fastest reply.
        </p>
      </motion.div>

      <motion.a
        variants={fadeUp}
        href="mailto:muhammadsohaib7932@gmail.com"
        whileHover={{ y: -3 }}
        transition={{ type: "spring", stiffness: 280, damping: 22 }}
        className="group relative isolate overflow-hidden rounded-2xl border border-border-subtle bg-white/[0.025] p-5 backdrop-blur-sm transition-colors hover:border-accent"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(167,139,250,0.2),transparent_70%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />
        <div className="flex items-start gap-4">
          <IconBadge>
            <MailIcon />
          </IconBadge>
          <div className="min-w-0 flex-1">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-foreground/55">
              Email
            </p>
            <p className="mt-1 truncate text-[15px] font-semibold tracking-tight text-foreground">
              muhammadsohaib7932@gmail.com
            </p>
            <p className="mt-1 text-[13px] text-foreground/60">
              Best for project briefs &amp; long-form questions.
            </p>
          </div>
          <ArrowChip />
        </div>
      </motion.a>

      <motion.div variants={fadeUp} className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <SocialCard
          href="https://github.com/Sohaib7932"
          label="GitHub"
          handle="@Sohaib7932"
          icon={<GithubIcon />}
        />
        <SocialCard
          href="https://www.linkedin.com/in/-muhammadsohaib-"
          label="LinkedIn"
          handle="@muhammadsohaib"
          icon={<LinkedInIcon />}
        />
      </motion.div>

      <motion.div
        variants={fadeUp}
        className="relative overflow-hidden rounded-2xl border border-border-subtle bg-white/[0.025] p-5 backdrop-blur-sm"
      >
        <div className="flex items-start gap-4">
          <IconBadge>
            <ClockIcon />
          </IconBadge>
          <div className="flex-1">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-foreground/55">
              Availability
            </p>
            <div className="mt-2 flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              <p className="text-[14.5px] font-semibold tracking-tight text-foreground">
                Open for new projects
              </p>
            </div>
            <p className="mt-2 text-[13px] leading-6 text-foreground/60">
              Remote-first, working worldwide. You&apos;ll get a reply within
              1 day.
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function SocialCard({
  href,
  label,
  handle,
  icon,
}: {
  href: string;
  label: string;
  handle: string;
  icon: ReactNode;
}) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: -3 }}
      transition={{ type: "spring", stiffness: 280, damping: 22 }}
      className="group relative isolate flex items-center gap-3.5 overflow-hidden rounded-2xl border border-border-subtle bg-white/[0.025] p-4 backdrop-blur-sm transition-colors hover:border-accent"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(167,139,250,0.18),transparent_70%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      />
      <IconBadge>{icon}</IconBadge>
      <div className="min-w-0 flex-1">
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-foreground/55">
          {label}
        </p>
        <p className="mt-0.5 truncate text-[13.5px] font-semibold tracking-tight text-foreground">
          {handle}
        </p>
      </div>
      <ArrowChip small />
    </motion.a>
  );
}

function IconBadge({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-border-subtle bg-[linear-gradient(135deg,rgba(167,139,250,0.22),rgba(139,92,246,0.04))] text-accent">
      {children}
    </div>
  );
}

function ArrowChip({ small = false }: { small?: boolean }) {
  return (
    <span
      className={`flex items-center justify-center rounded-full border border-border-subtle bg-white/[0.03] text-foreground/65 transition-all group-hover:border-accent group-hover:bg-accent group-hover:text-[#1a0b2e] ${
        small ? "h-7 w-7" : "h-8 w-8"
      }`}
    >
      <svg
        width={small ? "12" : "13"}
        height={small ? "12" : "13"}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
        className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
      >
        <path d="M7 17 17 7" />
        <path d="M8 7h9v9" />
      </svg>
    </span>
  );
}

function MailIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 .5C5.65.5.5 5.65.5 12.02c0 5.1 3.29 9.42 7.86 10.95.58.1.79-.25.79-.56v-2c-3.2.7-3.87-1.36-3.87-1.36-.52-1.34-1.27-1.7-1.27-1.7-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.76 2.69 1.25 3.34.95.1-.74.4-1.25.72-1.54-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.21-1.49 3.18-1.18 3.18-1.18.62 1.59.23 2.76.11 3.05.74.81 1.18 1.84 1.18 3.1 0 4.43-2.7 5.4-5.27 5.69.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95v5.66H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12Zm1.78 13.02H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45C23.2 24 24 23.23 24 22.28V1.72C24 .77 23.2 0 22.22 0Z" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.5 2" />
    </svg>
  );
}
