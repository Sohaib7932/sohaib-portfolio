"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { SocialLink } from "./SocialLink";
import { BackToTop } from "./BackToTop";
import { Magnetic } from "@/components/motion/Magnetic";
import { Parallax } from "@/components/motion/Parallax";
import {
  EASE,
  fadeUp,
  stagger,
  staggerFast,
  VIEWPORT,
} from "@/components/motion/tokens";
import { Words, wordsContainer, wordVariant } from "@/components/motion/Words";

const sitemap = [
  { href: "/#about", label: "About" },
  { href: "/#work", label: "Work" },
  { href: "/#services", label: "Services" },
  { href: "/#contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="relative isolate mt-32 overflow-hidden border-t border-border-subtle bg-background">
      <motion.div
        aria-hidden
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={VIEWPORT}
        transition={{ duration: 1.2, ease: EASE }}
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent"
      />
      <motion.div
        aria-hidden
        animate={{ scale: [1, 1.12, 1], opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 16, ease: "easeInOut", repeat: Infinity }}
        className="pointer-events-none absolute -top-40 left-1/2 h-96 w-[60rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.18),transparent_60%)] blur-3xl"
      />

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={VIEWPORT}
        className="mx-auto w-full max-w-6xl px-5 sm:px-8 lg:px-16"
      >
        {/* CTA band */}
        <Parallax speed={0.06}>
          <motion.div
            variants={staggerFast}
            className="flex flex-col items-start gap-8 py-14 sm:py-20 lg:flex-row lg:items-end lg:justify-between"
          >
            <div className="max-w-2xl">
              <motion.p
                variants={fadeUp}
                className="mb-4 text-[12px] font-medium uppercase tracking-[0.32em] text-accent/85"
              >
                Have an idea?
              </motion.p>
              <motion.h2
                variants={wordsContainer}
                className="text-[32px] font-extrabold leading-[1.05] tracking-tight sm:text-[46px] md:text-[52px] lg:text-[60px]"
              >
                <Words text="Let's turn it into" />
                <motion.span
                  variants={wordVariant}
                  className="inline-block bg-gradient-to-r from-white via-white to-accent bg-clip-text text-transparent"
                >
                  a real product.
                </motion.span>
              </motion.h2>
              <motion.p
                variants={fadeUp}
                className="mt-5 max-w-lg text-[15px] leading-[1.7] text-foreground/60"
              >
                Whether it&apos;s an AI-powered web app, a polished mobile
                experience, or a full UI/UX rework, I&apos;m open to freelance
                projects, internships, and collaborations.
              </motion.p>
            </div>

            <motion.div variants={fadeUp}>
              <Magnetic strength={0.28}>
                <motion.a
                  href="mailto:muhammadsohaib7932@gmail.com"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="btn-sheen group inline-flex items-center gap-2.5 rounded-full bg-accent px-6 py-3.5 text-[12px] font-semibold uppercase tracking-[0.16em] text-[#1a0b2e] shadow-[0_15px_45px_-15px_rgba(167,139,250,0.8)] transition-shadow hover:shadow-[0_18px_55px_-12px_rgba(167,139,250,1)] sm:gap-3 sm:px-7 sm:py-4 sm:text-[12.5px] sm:tracking-[0.18em]"
                >
                  Start a conversation
                  <ArrowIcon />
                </motion.a>
              </Magnetic>
            </motion.div>
          </motion.div>
        </Parallax>

        {/* Columns */}
        <motion.div
          variants={staggerFast}
          className="grid grid-cols-2 gap-8 border-t border-border-subtle py-12 sm:gap-10 sm:py-14 lg:grid-cols-4"
        >
          <motion.div
            variants={fadeUp}
            className="col-span-2 max-w-xs lg:col-span-1"
          >
            <Link
              href="/"
              className="group text-sm font-semibold tracking-[0.18em] text-foreground"
            >
              <span className="inline-block transition-transform duration-300 ease-out group-hover:-translate-y-px">
                M. SOHAIB
              </span>
            </Link>
            <p className="mt-4 text-sm leading-7 text-foreground/60">
              Software Engineer building AI-powered web and mobile experiences.
            </p>
          </motion.div>

          <FooterColumn title="Sitemap">
            {sitemap.map((item) => (
              <FooterLink key={item.href} href={item.href}>
                {item.label}
              </FooterLink>
            ))}
          </FooterColumn>

          <FooterColumn title="Connect">
            <FooterLink href="https://github.com/Sohaib7932" external>
              GitHub
            </FooterLink>
            <FooterLink href="https://www.linkedin.com/in/-muhammadsohaib-" external>
              LinkedIn
            </FooterLink>
          </FooterColumn>

          <FooterColumn title="Get in touch">
            <a
              href="mailto:muhammadsohaib7932@gmail.com"
              className="text-sm text-foreground/70 transition-colors hover:text-foreground"
            >
              muhammadsohaib7932@gmail.com
            </a>
            <span className="text-sm text-foreground/55">
              Available worldwide,
              <br /> remote-first
            </span>
            <div className="mt-2 flex items-center gap-3">
              <SocialLink href="https://github.com/Sohaib7932" label="GitHub">
                <GithubIcon />
              </SocialLink>
              <SocialLink href="https://www.linkedin.com/in/-muhammadsohaib-" label="LinkedIn">
                <LinkedInIcon />
              </SocialLink>
            </div>
          </FooterColumn>
        </motion.div>

        {/* Bottom bar */}
        <motion.div
          variants={fadeUp}
          className="flex flex-col items-center justify-between gap-4 border-t border-border-subtle py-8 sm:flex-row"
        >
          <p className="text-center text-xs tracking-wide text-foreground/45">
            © {new Date().getFullYear()} Muhammad Sohaib. All rights reserved.
          </p>
          <BackToTop />
        </motion.div>
      </motion.div>
    </footer>
  );
}

function FooterColumn({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <motion.div variants={fadeUp}>
      <h3 className="mb-5 text-[11px] font-semibold uppercase tracking-[0.22em] text-foreground/55">
        {title}
      </h3>
      <ul className="flex flex-col gap-3">
        {Array.isArray(children)
          ? children.map((child, i) => <li key={i}>{child}</li>)
          : <li>{children}</li>}
      </ul>
    </motion.div>
  );
}

function FooterLink({
  href,
  external = false,
  children,
}: {
  href: string;
  external?: boolean;
  children: React.ReactNode;
}) {
  const className =
    "group inline-flex items-center gap-1.5 text-sm text-foreground/70 transition-colors hover:text-foreground";
  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        <span className="transition-transform duration-300 ease-out group-hover:translate-x-0.5">
          {children}
        </span>
        <span
          aria-hidden
          className="opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100"
        >
          ↗
        </span>
      </a>
    );
  }
  return (
    <Link href={href} className={className}>
      <span className="transition-transform duration-300 ease-out group-hover:translate-x-0.5">
        {children}
      </span>
      <span
        aria-hidden
        className="opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100"
      >
        →
      </span>
    </Link>
  );
}

function ArrowIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className="transition-transform duration-300 ease-out group-hover:translate-x-1"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
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
