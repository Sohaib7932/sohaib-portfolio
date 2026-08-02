import type { Metadata } from "next";
import { AboutPage } from "@/components/sections/about-page";

export const metadata: Metadata = {
  // The root layout's title template appends "— Muhammad Sohaib" here.
  title: "About",
  description:
    "Muhammad Sohaib is a Software Engineering graduate and front-end developer based in Pakistan. Two-plus years turning Figma designs into fast React, Next.js and Flutter interfaces.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About — Muhammad Sohaib",
    description:
      "The route from UI/UX design to shipping production front-ends in React, Next.js and Flutter.",
    url: "/about",
    type: "profile",
  },
};

export default function About() {
  return <AboutPage />;
}
