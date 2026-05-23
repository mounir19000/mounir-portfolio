"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects, type Track } from "@/data/portfolio";

type Filter = "all" | "ai" | "frontend" | "hpc" | "tools";

const filters: { label: string; value: Filter; accent: string }[] = [
  { label: "All", value: "all", accent: "text-white" },
  { label: "AI / ML", value: "ai", accent: "text-kinetic-cyan" },
  { label: "Front-End", value: "frontend", accent: "text-neon-violet" },
  { label: "HPC / Systems", value: "hpc", accent: "text-kinetic-cyan" },
  { label: "Tools", value: "tools", accent: "text-text-secondary" },
];

function getTrackColor(track: Track) {
  switch (track) {
    case "ai":
    case "hpc":
      return {
        border: "border-kinetic-cyan/20 hover:border-kinetic-cyan/50",
        tag: "text-kinetic-cyan bg-kinetic-cyan/10",
        dot: "bg-kinetic-cyan",
        glow: "hover:shadow-cyan-glow",
      };
    case "frontend":
      return {
        border: "border-neon-violet/20 hover:border-neon-violet/50",
        tag: "text-neon-violet bg-neon-violet/10",
        dot: "bg-neon-violet",
        glow: "hover:shadow-violet-glow",
      };
    default:
      return {
        border: "border-grid-line hover:border-text-secondary/30",
        tag: "text-text-secondary bg-text-secondary/10",
        dot: "bg-text-secondary",
        glow: "",
      };
  }
}

export default function Projects() {
  const [active, setActive] = useState<Filter>("all");

  const filtered =
    active === "all" ? projects : projects.filter((p) => p.track === active);

  return (
    <section id="projects" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <p className="font-mono text-sm text-kinetic-cyan tracking-widest uppercase mb-3">
          Projects
        </p>
        <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-8">
          What I&apos;ve Built
        </h2>

        <div className="flex flex-wrap gap-2 mb-10">
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => setActive(f.value)}
              className={`px-4 py-2 rounded-lg font-mono text-sm transition-all duration-200 ${
                active === f.value
                  ? f.value === "all"
                    ? "bg-white/10 text-white border border-white/20"
                    : f.value === "frontend"
                      ? "bg-neon-violet/15 text-neon-violet border border-neon-violet/30"
                      : f.value === "tools"
                        ? "bg-text-secondary/15 text-text-secondary border border-text-secondary/30"
                        : "bg-kinetic-cyan/15 text-kinetic-cyan border border-kinetic-cyan/30"
                  : "bg-slate-mtx text-text-secondary border border-grid-line hover:text-white"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => {
              const colors = getTrackColor(project.track);
              return (
                <motion.div
                  key={project.title}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div
                    className={`group relative p-5 rounded-xl bg-slate-mtx border ${colors.border} ${colors.glow} transition-all duration-300 hover:-translate-y-1 h-full flex flex-col`}
                  >
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h3 className="font-heading text-base font-bold text-white group-hover:text-white/90 leading-tight">
                        {project.title}
                      </h3>
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="shrink-0 text-text-secondary hover:text-white transition-colors"
                          aria-label={`View ${project.title} on GitHub`}
                        >
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                          >
                            <path d="M6 3h7v7M13 3L6 10" />
                          </svg>
                        </a>
                      )}
                    </div>

                    {project.highlight && (
                      <p
                        className={`font-mono text-xs font-medium mb-2 ${
                          project.highlight.includes("Winner") ||
                          project.highlight.includes("1st")
                            ? "text-kinetic-cyan"
                            : "text-text-secondary"
                        }`}
                      >
                        {project.highlight}
                      </p>
                    )}

                    <p className="text-text-secondary text-sm leading-relaxed mb-4 flex-1">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mt-auto">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`px-2 py-0.5 rounded text-[11px] font-mono ${colors.tag}`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <p className="font-mono text-[10px] text-text-secondary/40 mt-3">
                      {project.period}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
