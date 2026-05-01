import type { ServiceIconKey } from "./data";

export function ServiceIcon({ iconKey }: { iconKey: ServiceIconKey }) {
  switch (iconKey) {
    case "web":
      return <WebIcon />;
    case "mobile":
      return <MobileIcon />;
    case "design":
      return <DesignIcon />;
    case "ai":
      return <AIIcon />;
  }
}

function WebIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <rect x="3" y="4" width="18" height="14" rx="2" />
      <path d="M3 9h18" />
      <path d="M7 6.5h.01" />
      <path d="M10 6.5h.01" />
      <path d="m9 13 -1.5 1.5L9 16" />
      <path d="m13 13 1.5 1.5L13 16" />
    </svg>
  );
}

function MobileIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <rect x="6" y="2.5" width="12" height="19" rx="2.5" />
      <path d="M11 18.5h2" />
      <path d="M9 5.5h6" />
    </svg>
  );
}

function DesignIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M3 12a9 9 0 1 0 9-9" />
      <path d="M3 12a9 9 0 1 1 9 9" />
      <path d="M12 3v18" />
      <circle cx="12" cy="12" r="2.5" />
    </svg>
  );
}

function AIIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M12 3v2" />
      <path d="M12 19v2" />
      <path d="M3 12h2" />
      <path d="M19 12h2" />
      <path d="m5.6 5.6 1.4 1.4" />
      <path d="m17 17 1.4 1.4" />
      <path d="m5.6 18.4 1.4-1.4" />
      <path d="m17 7 1.4-1.4" />
      <circle cx="12" cy="12" r="4" />
    </svg>
  );
}
