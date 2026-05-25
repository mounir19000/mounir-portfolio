import SectionReveal from "./SectionReveal";
import type { Dictionary } from "@/i18n/messages/types";

function getRankStyle(rank: number) {
  if (rank === 1) {
    return {
      border: "gradient-border-cyan shadow-cyan-glow",
      badge: "bg-kinetic-cyan/15 text-kinetic-cyan border-kinetic-cyan/30",
      icon: "🥇",
    };
  }
  if (rank === 3) {
    return {
      border: "border border-grid-line",
      badge: "bg-text-secondary/10 text-text-secondary border-text-secondary/20",
      icon: "🥉",
    };
  }
  return {
    border: "border border-grid-line",
    badge: "bg-text-secondary/10 text-text-secondary border-text-secondary/20",
    icon: "🏅",
  };
}

export default function Hackathons({ dictionary }: { dictionary: Dictionary }) {
  return (
    <section id="hackathons" className="py-24 lg:py-32 bg-slate-mtx/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <SectionReveal>
          <p className="font-mono text-sm text-kinetic-cyan tracking-widest uppercase mb-3">
            {dictionary.hackathons.eyebrow}
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-4">
            {dictionary.hackathons.title}
          </h2>
          <p className="text-text-secondary mb-12 max-w-xl">
            {dictionary.hackathons.subtitle}
          </p>
        </SectionReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {dictionary.hackathons.items.map((h, i) => {
            const style = getRankStyle(h.rank);
            return (
              <SectionReveal key={h.event} delay={0.1 + i * 0.08}>
                <div
                  className={`p-5 rounded-xl bg-slate-mtx ${style.border} h-full flex flex-col`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-2xl">{style.icon}</span>
                    <span
                      className={`px-2.5 py-1 rounded-full text-xs font-mono font-medium border ${style.badge}`}
                    >
                      {h.result}
                    </span>
                  </div>
                  <h3 className="font-heading text-base font-bold text-white mb-1">
                    {h.event}
                  </h3>
                  <p className="font-mono text-xs text-text-secondary/50 mb-3">
                    {h.year}
                  </p>
                  {h.description && (
                    <p className="text-text-secondary text-sm leading-relaxed mt-auto">
                      {h.description}
                    </p>
                  )}
                </div>
              </SectionReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
