"use client";

import { useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "motion/react";
import { EASE, fadeUp, stagger, VIEWPORT } from "@/components/motion/tokens";

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
  const fieldClass =
    "w-full rounded-xl border border-border-subtle bg-surface px-4 py-3 text-[14px] text-foreground placeholder:text-foreground/30 outline-none transition-[border-color,background-color,box-shadow] duration-300 focus:border-accent focus:bg-surface-strong focus:shadow-[0_10px_30px_-12px_var(--shadow)] disabled:opacity-60";

  return (
    <motion.form
      variants={stagger}
      initial="hidden"
      whileInView="show"
      viewport={VIEWPORT}
      onSubmit={handleSubmit}
      className="relative isolate overflow-hidden rounded-3xl border border-border-subtle bg-surface p-5 backdrop-blur-sm sm:p-7 md:p-8"
    >
      <motion.div
        aria-hidden
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={VIEWPORT}
        transition={{ duration: 1.1, ease: EASE }}
        className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent"
      />

      <motion.div variants={fadeUp} className="mb-6 flex items-center gap-3">
        <motion.div
          animate={{ y: [0, -3, 0] }}
          transition={{ duration: 4, ease: "easeInOut", repeat: Infinity }}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-border-subtle bg-accent-wash text-accent-ink"
        >
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
        </motion.div>
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
            className={fieldClass}
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
            className={fieldClass}
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
            className={`${fieldClass} resize-none leading-[1.6]`}
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
          className="btn-sheen group inline-flex items-center justify-center gap-2.5 rounded-full bg-accent px-6 py-3.5 text-[12.5px] font-semibold uppercase tracking-[0.18em] text-on-accent shadow-[0_10px_30px_-12px_var(--shadow)] transition-shadow hover:shadow-[0_14px_36px_-10px_var(--shadow)] disabled:cursor-not-allowed disabled:opacity-70"
        >
          <AnimatePresence mode="wait" initial={false}>
            {submitting ? (
              <motion.span
                key="sending"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.2 }}
                className="inline-flex items-center gap-2.5"
              >
                <Spinner />
                Sending…
              </motion.span>
            ) : (
              <motion.span
                key="send"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.2 }}
                className="inline-flex items-center gap-2.5"
              >
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
                  className="transition-transform duration-300 ease-out group-hover:translate-x-1"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </motion.span>
            )}
          </AnimatePresence>
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
  return (
    <div className="min-h-[1.25rem]" aria-live="polite">
      <AnimatePresence mode="wait" initial={false}>
        {status === "success" ? (
          <motion.p
            key="success"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3, ease: EASE }}
            className="flex items-center gap-2 text-[12.5px] font-medium text-ok"
          >
            <SuccessTick />
            Message sent, I&apos;ll be in touch shortly.
          </motion.p>
        ) : status === "error" ? (
          <motion.p
            key="error"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0, x: [0, -5, 5, -3, 3, 0] }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.4, ease: EASE }}
            className="flex items-center gap-2 text-[12.5px] font-medium text-danger"
          >
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-danger" />
            {errorMessage}
          </motion.p>
        ) : (
          <motion.p
            key="idle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3, ease: EASE }}
            className="text-[12px] text-foreground/50"
          >
            Sent securely, you&apos;ll get a reply within 1 day.
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}

/** Draws itself once, as confirmation the message actually went out. */
function SuccessTick() {
  return (
    <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-ok/15 text-ok">
      <svg
        width="10"
        height="10"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <motion.path
          d="M5 12.5 10 17 19 7"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.45, ease: EASE, delay: 0.1 }}
        />
      </svg>
    </span>
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
    <label htmlFor={htmlFor} className="group block">
      <span className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.22em] text-foreground/55 transition-colors duration-300 group-focus-within:text-accent-ink">
        {label}
      </span>
      {children}
    </label>
  );
}
