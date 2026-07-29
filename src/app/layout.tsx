import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MotionProvider, ScrollProgress } from "@/components/motion";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Muhammad Sohaib, Front-End Developer & UI/UX Designer",
  description:
    "Portfolio of Muhammad Sohaib, a front-end developer and UI/UX designer building clean, modern web apps with React and Next.js.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  // Matches the dark default. ThemeToggle rewrites this on switch, so mobile
  // browser chrome tracks the theme rather than the OS setting.
  themeColor: "#191917",
};

/**
 * Resolves the theme before the first paint.
 *
 * Dark is the deliberate default for a first-time visitor; the OS setting is
 * intentionally *not* consulted, so the site always opens the way it was
 * designed to be seen. Once someone picks a theme it is stored, and that stored
 * choice wins on every later visit until they change it again.
 *
 * This has to be a blocking inline script. Applying the attribute from an
 * effect would let one frame of the wrong theme paint first.
 */
const themeScript = `
try {
  var stored = localStorage.getItem("theme");
  document.documentElement.dataset.theme =
    stored === "light" || stored === "dark" ? stored : "dark";
} catch (e) {
  document.documentElement.dataset.theme = "dark";
}`.trim();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      {/* Browser extensions commonly stamp attributes onto <body> before React
          hydrates; suppressing here keeps that noise out of the console without
          weakening hydration checks anywhere inside the tree. */}
      <body
        suppressHydrationWarning
        className="min-h-full flex flex-col bg-background text-foreground"
      >
        <MotionProvider>
          <ScrollProgress />
          <Navbar />
          <main className="flex flex-1 flex-col">{children}</main>
          <Footer />
        </MotionProvider>
      </body>
    </html>
  );
}
