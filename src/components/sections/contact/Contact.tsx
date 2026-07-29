"use client";

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
