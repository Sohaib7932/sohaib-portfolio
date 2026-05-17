"use client";

import { useState, type FormEvent } from "react";
import { motion, type Variants } from "motion/react";

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
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

const FORMSUBMIT_ENDPOINT =
  "https://formsubmit.co/ajax/muhammadsohaib7932@gmail.com";

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const res = await fetch(FORMSUBMIT_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message,
          _subject: `New portfolio inquiry from ${name || "(no name)"}`,
          _template: "table",
          _captcha: "false",
        }),
      });

      const data = (await res.json().catch(() => ({}))) as {
        success?: string | boolean;
        message?: string;
      };

      if (!res.ok || data.success === "false" || data.success === false) {
        throw new Error(data.message || "Something went wrong. Please try again.");
      }

      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Something went wrong. Please try again."
      );
    }
  }

  const submitting = status === "submitting";

  return (
    <motion.form
      variants={stagger}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      onSubmit={handleSubmit}
      className="relative isolate overflow-hidden rounded-3xl border border-border-subtle bg-white/[0.025] p-5 backdrop-blur-sm sm:p-7 md:p-8"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(192,38,211,0.12),transparent_70%)] blur-2xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent"
      />

      <motion.div variants={fadeUp} className="mb-6 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-border-subtle bg-[linear-gradient(135deg,rgba(167,139,250,0.22),rgba(139,92,246,0.04))] text-accent">
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
          >
            <path d="M22 2 11 13" />
            <path d="m22 2-7 20-4-9-9-4Z" />
          </svg>
        </div>
        <div>
          <h3 className="text-[18px] font-bold tracking-tight text-foreground">
            Send a message
          </h3>
          <p className="text-[12.5px] text-foreground/55">
            A short note is all I need, and I&apos;ll reply with next steps.
          </p>
        </div>
      </motion.div>

      <motion.div variants={fadeUp} className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Field label="Your name" htmlFor="contact-name">
          <input
            id="contact-name"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Jane Doe"
            disabled={submitting}
            className="w-full rounded-xl border border-border-subtle bg-white/[0.02] px-4 py-3 text-[14px] text-foreground placeholder:text-foreground/30 outline-none transition-colors focus:border-accent focus:bg-white/[0.04] disabled:opacity-60"
          />
        </Field>
        <Field label="Email" htmlFor="contact-email">
          <input
            id="contact-email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="jane@company.com"
            disabled={submitting}
            className="w-full rounded-xl border border-border-subtle bg-white/[0.02] px-4 py-3 text-[14px] text-foreground placeholder:text-foreground/30 outline-none transition-colors focus:border-accent focus:bg-white/[0.04] disabled:opacity-60"
          />
        </Field>
      </motion.div>

      <motion.div variants={fadeUp} className="mt-4">
        <Field label="Tell me about your project" htmlFor="contact-message">
          <textarea
            id="contact-message"
            required
            rows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="What are you building, who is it for, and when does it need to ship?"
            disabled={submitting}
            className="w-full resize-none rounded-xl border border-border-subtle bg-white/[0.02] px-4 py-3 text-[14px] leading-[1.6] text-foreground placeholder:text-foreground/30 outline-none transition-colors focus:border-accent focus:bg-white/[0.04] disabled:opacity-60"
          />
        </Field>
      </motion.div>

      <motion.div
        variants={fadeUp}
        className="mt-6 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-between"
      >
        <StatusLabel status={status} errorMessage={errorMessage} />
        <motion.button
          type="submit"
          disabled={submitting}
          whileHover={!submitting ? { scale: 1.03 } : undefined}
          whileTap={!submitting ? { scale: 0.97 } : undefined}
          className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-accent px-6 py-3.5 text-[12.5px] font-semibold uppercase tracking-[0.18em] text-[#1a0b2e] shadow-[0_15px_45px_-15px_rgba(167,139,250,0.8)] transition-shadow hover:shadow-[0_18px_55px_-12px_rgba(167,139,250,1)] disabled:cursor-not-allowed disabled:opacity-70"
        >
          {submitting ? (
            <>
              <Spinner />
              Sending…
            </>
          ) : (
            <>
              Send message
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
                className="transition-transform group-hover:translate-x-0.5"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </>
          )}
        </motion.button>
      </motion.div>
    </motion.form>
  );
}

function StatusLabel({
  status,
  errorMessage,
}: {
  status: Status;
  errorMessage: string;
}) {
  if (status === "success") {
    return (
      <p className="flex items-center gap-2 text-[12.5px] font-medium text-emerald-300">
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
        Message sent, I&apos;ll be in touch shortly.
      </p>
    );
  }
  if (status === "error") {
    return (
      <p className="flex items-center gap-2 text-[12.5px] font-medium text-rose-300">
        <span className="h-1.5 w-1.5 rounded-full bg-rose-400" />
        {errorMessage}
      </p>
    );
  }
  return (
    <p className="text-[12px] text-foreground/50">
      Sent securely, you&apos;ll get a reply within 1 day.
    </p>
  );
}

function Spinner() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className="animate-spin"
    >
      <path d="M12 3a9 9 0 1 0 9 9" />
    </svg>
  );
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <label htmlFor={htmlFor} className="block">
      <span className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.22em] text-foreground/55">
        {label}
      </span>
      {children}
    </label>
  );
}
