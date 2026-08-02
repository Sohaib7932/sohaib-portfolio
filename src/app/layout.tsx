import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MotionProvider, ScrollProgress } from "@/components/motion";
import { PersonSchema } from "@/components/seo/PersonSchema";
import { siteConfig } from "@/lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  // Makes every relative URL below (canonicals, OG images) resolve absolutely,
  // which crawlers and social scrapers both require.
  metadataBase: new URL(siteConfig.url),

  title: {
    default: siteConfig.title,
    // Child routes set only their own title; this appends the brand for them.
    template: `%s — ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],

  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,

  // Without this, the same page reachable at several URLs splits its ranking.
  alternates: { canonical: "/" },

  openGraph: {
    type: "profile",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
  },

  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      // Lets Google show full-length text snippets and large image previews
      // instead of the conservative defaults.
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },

  category: "technology",
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
        <PersonSchema />
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
