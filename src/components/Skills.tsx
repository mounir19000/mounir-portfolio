import SectionReveal from "./SectionReveal";
import { skills } from "@/data/portfolio";
import type { Dictionary } from "@/i18n/messages/types";

const categoryAccents: Record<string, string> = {
  "Programming Languages": "border-kinetic-cyan/20 text-kinetic-cyan",
  "Front-End / Web": "border-neon-violet/20 text-neon-violet",
  "ML / AI": "border-kinetic-cyan/20 text-kinetic-cyan",
  "CV / DL Stack": "border-kinetic-cyan/20 text-kinetic-cyan",
  "HPC / Systems": "border-kinetic-cyan/20 text-kinetic-cyan",
  "DevOps & Tools": "border-text-secondary/20 text-text-secondary",
  "Design / UI-UX": "border-neon-violet/20 text-neon-violet",
};

export default function Skills({ dictionary }: { dictionary: Dictionary }) {
  return (
    <section id="skills" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <SectionReveal>
          <p className="font-mono text-sm text-kinetic-cyan tracking-widest uppercase mb-3">
            {dictionary.skills.eyebrow}
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-12">
            {dictionary.skills.title}
          </h2>
        </SectionReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, items], i) => {
            const accent =
              categoryAccents[category] ||
              "border-grid-line text-text-secondary";
            return (
              <SectionReveal key={category} delay={0.05 + i * 0.06}>
                <div>
                  <h3 className="font-heading text-sm font-bold text-white mb-3">
                    {category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <span
                        key={skill}
                        className={`px-2.5 py-1 rounded border text-xs font-mono bg-slate-mtx ${accent}`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </SectionReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
