"use client";

import type { Project } from "./types";
import { ProjectCard } from "./ProjectCard";

export function ProjectGrid({ items }: { items: Project[] }) {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:gap-6">
      {items.map((p, i) => (
        <ProjectCard key={p.slug} project={p} index={i} />
      ))}
    </div>
  );
}
