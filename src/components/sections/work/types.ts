export type ProjectCategory =
  | "Web Development"
  | "UI/UX Design"
  | "Mobile Apps";

export type ProjectLink = { label: string; href: string };

export type Project = {
  slug: string;
  title: string;
  description: string;
  category: ProjectCategory;
  tech: string[];
  /** Tailwind-friendly background for the card image area; replace later with real <Image> */
  placeholderBg: string;
  primary: ProjectLink;
  secondary: ProjectLink;
};
