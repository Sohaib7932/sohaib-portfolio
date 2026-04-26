type IconProps = { className?: string };

const base = "transition-transform duration-200 group-hover:translate-x-0.5";

export function RocketIcon({ className }: IconProps) {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className ?? base}
      aria-hidden
    >
      <path d="M14 4c4 0 6 2 6 6 0 6-7 10-7 10s-7-4-7-10c0-4 2-6 6-6h2Z" />
      <circle cx="12" cy="10" r="2" />
      <path d="M9 17.5 6 21l-1-3" />
      <path d="m15 17.5 3 3.5 1-3" />
    </svg>
  );
}

export function GithubIcon({ className }: IconProps) {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className ?? ""}
      aria-hidden
    >
      <path d="M12 .5C5.65.5.5 5.65.5 12.02c0 5.1 3.29 9.42 7.86 10.95.58.1.79-.25.79-.56v-2c-3.2.7-3.87-1.36-3.87-1.36-.52-1.34-1.27-1.7-1.27-1.7-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.76 2.69 1.25 3.34.95.1-.74.4-1.25.72-1.54-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.21-1.49 3.18-1.18 3.18-1.18.62 1.59.23 2.76.11 3.05.74.81 1.18 1.84 1.18 3.1 0 4.43-2.7 5.4-5.27 5.69.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  );
}

export function LinkIcon({ className }: IconProps) {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className ?? ""}
      aria-hidden
    >
      <path d="M9.5 13.5a4 4 0 0 0 5.7 0l3-3a4 4 0 1 0-5.7-5.7l-1.3 1.3" />
      <path d="M14.5 10.5a4 4 0 0 0-5.7 0l-3 3a4 4 0 1 0 5.7 5.7l1.3-1.3" />
    </svg>
  );
}

export function ArrowOutIcon({ className }: IconProps) {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className ?? base}
      aria-hidden
    >
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
    </svg>
  );
}

const iconMap = {
  "Live Demo": RocketIcon,
  GitHub: GithubIcon,
  Link: LinkIcon,
  Open: ArrowOutIcon,
} as const;

export function IconForLabel({ label }: { label: string }) {
  const Cmp = iconMap[label as keyof typeof iconMap];
  return Cmp ? <Cmp /> : null;
}
