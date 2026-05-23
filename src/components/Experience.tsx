import SectionReveal from "./SectionReveal";
import { experience, education, certifications, volunteering } from "@/data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="py-24 lg:py-32 bg-slate-mtx/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <SectionReveal>
          <p className="font-mono text-sm text-kinetic-cyan tracking-widest uppercase mb-3">
            Experience
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-12">
            Where I&apos;ve Worked
          </h2>
        </SectionReveal>

        <div className="space-y-8 mb-20">
          {experience.map((exp, i) => (
            <SectionReveal key={exp.company} delay={0.1 + i * 0.08}>
              <div className="relative pl-8 border-l-2 border-grid-line hover:border-kinetic-cyan/50 transition-colors duration-300">
                <div className="absolute left-[-5px] top-2 w-2 h-2 rounded-full bg-kinetic-cyan" />
                <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 mb-2">
                  <h3 className="font-heading text-lg font-bold text-white">
                    {exp.role}
                  </h3>
                  <span className="font-mono text-sm text-kinetic-cyan">
                    {exp.company}
                  </span>
                </div>
                <p className="font-mono text-xs text-text-secondary/60 mb-3">
                  {exp.period}
                </p>
                <ul className="space-y-1.5 mb-3">
                  {exp.bullets.map((bullet, j) => (
                    <li
                      key={j}
                      className="text-text-secondary text-sm leading-relaxed flex gap-2"
                    >
                      <span className="text-grid-line mt-1.5 shrink-0">▹</span>
                      {bullet}
                    </li>
                  ))}
                </ul>
                {exp.stack && (
                  <p className="font-mono text-xs text-text-secondary/50">
                    {exp.stack}
                  </p>
                )}
              </div>
            </SectionReveal>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <SectionReveal delay={0.1}>
            <div>
              <p className="font-mono text-sm text-neon-violet tracking-widest uppercase mb-3">
                Education
              </p>
              <h3 className="font-heading text-xl font-bold mb-1">
                {education.school}
              </h3>
              <p className="text-text-secondary text-sm mb-1">
                {education.degree}
              </p>
              <p className="font-mono text-xs text-text-secondary/60 mb-4">
                {education.period}
              </p>
              <div className="flex flex-wrap gap-2">
                {education.coursework.map((course) => (
                  <span
                    key={course}
                    className="px-2.5 py-1 text-xs font-mono text-text-secondary bg-obsidian border border-grid-line rounded"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </SectionReveal>

          <div className="space-y-8">
            <SectionReveal delay={0.15}>
              <div>
                <p className="font-mono text-sm text-neon-violet tracking-widest uppercase mb-3">
                  Certifications
                </p>
                <div className="space-y-3">
                  {certifications.map((cert) => (
                    <div
                      key={cert.name}
                      className="flex items-center justify-between p-3 bg-obsidian border border-grid-line rounded-lg"
                    >
                      <span className="text-sm text-white font-medium">
                        {cert.name}
                      </span>
                      <span className="font-mono text-xs text-text-secondary/60">
                        {cert.date}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.2}>
              <div>
                <p className="font-mono text-sm text-neon-violet tracking-widest uppercase mb-3">
                  Community
                </p>
                <div className="p-4 bg-obsidian border border-grid-line rounded-lg">
                  <div className="flex items-baseline gap-2 mb-1">
                    <h4 className="text-sm font-bold text-white">
                      {volunteering.role}
                    </h4>
                    <span className="text-sm text-neon-violet">
                      — {volunteering.org}
                    </span>
                  </div>
                  <p className="font-mono text-xs text-text-secondary/60 mb-2">
                    {volunteering.period}
                  </p>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {volunteering.description}
                  </p>
                </div>
              </div>
            </SectionReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
