"use client";

import { motion } from "motion/react";
import { ContactHeader } from "./ContactHeader";
import { ContactInfo } from "./ContactInfo";
import { ContactForm } from "./ContactForm";
import { SectionDivider } from "@/components/motion/SectionDivider";

export function Contact() {
  return (
    <section
      id="contact"
      className="relative isolate overflow-hidden px-5 py-20 sm:px-8 sm:py-28 md:py-32 lg:px-16"
    >
      <SectionDivider />

      <motion.div
        aria-hidden
        animate={{ scale: [1, 1.14, 1], opacity: [0.65, 1, 0.65] }}
        transition={{ duration: 22, ease: "easeInOut", repeat: Infinity }}
        className="pointer-events-none absolute -top-32 right-0 h-[28rem] w-[40rem] rounded-full bg-[radial-gradient(circle_at_60%_50%,rgba(139,92,246,0.12),transparent_60%)] blur-3xl"
      />
      <motion.div
        aria-hidden
        animate={{ scale: [1, 1.1, 1], opacity: [0.7, 1, 0.7] }}
        transition={{
          duration: 26,
          ease: "easeInOut",
          repeat: Infinity,
          delay: 4,
        }}
        className="pointer-events-none absolute bottom-0 left-0 h-80 w-[36rem] rounded-full bg-[radial-gradient(circle_at_40%_50%,rgba(192,38,211,0.08),transparent_60%)] blur-3xl"
      />

      <div className="mx-auto w-full max-w-6xl">
        <ContactHeader />

        <div className="mt-12 grid grid-cols-1 gap-8 sm:mt-16 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <ContactInfo />
          </div>
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
