import SectionReveal from "./SectionReveal";
import type { Dictionary } from "@/i18n/messages/types";

export default function About({ dictionary }: { dictionary: Dictionary }) {
  return (
    <section id="about" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <SectionReveal>
          <p className="font-mono text-sm text-kinetic-cyan tracking-widest uppercase mb-3">
            {dictionary.about.eyebrow}
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-8">
            {dictionary.about.title}
          </h2>
        </SectionReveal>

        <SectionReveal delay={0.1}>
          <p className="font-body text-text-secondary text-lg leading-relaxed max-w-3xl mb-12">
            {dictionary.about.summary}
          </p>
        </SectionReveal>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {dictionary.about.tracks.map((track, i) => (
            <SectionReveal key={track.name} delay={0.15 + i * 0.1}>
              <div
                className={`p-6 rounded-xl ${
                  track.accent === "cyan"
                    ? "gradient-border-cyan shadow-cyan-glow"
                    : "gradient-border-violet shadow-violet-glow"
                } h-full`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`w-2 h-2 rounded-full ${
                      track.accent === "cyan"
                        ? "bg-kinetic-cyan"
                        : "bg-neon-violet"
                    }`}
                  />
                  <h3
                    className={`font-heading text-lg font-bold ${
                      track.accent === "cyan"
                        ? "text-kinetic-cyan"
                        : "text-neon-violet"
                    }`}
                  >
                    {track.name}
                  </h3>
                </div>
                <p className="text-text-secondary leading-relaxed">
                  {track.description}
                </p>
              </div>
            </SectionReveal>
          ))}
        </div>

        <SectionReveal delay={0.35}>
          <p className="text-text-secondary/70 text-sm max-w-3xl">
            {dictionary.about.sideTrack}
          </p>
        </SectionReveal>
      </div>
    </section>
  );
}
