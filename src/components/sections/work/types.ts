export type ProjectCategory =
  | "Web Development"
  | "UI/UX Design"
  | "Mobile Apps";

export type ProjectLink = { label: string; href: string };

export type ProjectIllustrationKey =
  | "palm"
  | "scrape"
  | "dashboard"
  | "webapp"
  | "analyzer";

export type Project = {
  slug: string;
  title: string;
  description: string;
  category: ProjectCategory;
  tech: string[];
  /** Optional path to a real image (in /public). Wins over illustration / placeholderBg. */
  image?: string;
  /** Custom SVG illustration key, used when image is not provided. */
  illustration?: ProjectIllustrationKey;
  /** Tailwind-friendly background gradient, used as the base for illustrations or as a fallback. */
  placeholderBg: string;
  primary: ProjectLink;
  secondary?: ProjectLink;
};
