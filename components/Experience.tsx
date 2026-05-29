export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  location: string;
  summary: string;
  highlights: readonly string[];
  technologies: readonly string[];
}

export interface ExperienceProps {
  title: string;
  subtitle: string;
  items: readonly ExperienceItem[];
}

export function Experience({ title, subtitle, items }: ExperienceProps) {
  return (
    <section
      id="experience"
      aria-label="Experience timeline"
      className="relative rounded-2xl border border-slate-800/70 bg-slate-900/40 px-4 py-10 backdrop-blur-xl sm:rounded-3xl sm:px-8 sm:py-14 lg:px-14"
    >
      <header className="mb-8 flex max-w-3xl flex-col gap-3 sm:mb-10">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-emerald-300/90 sm:text-sm sm:tracking-[0.22em]">
          Professional Journey
        </p>
        <h2 className="text-2xl font-semibold tracking-tight text-slate-50 sm:text-4xl">{title}</h2>
        <p className="text-sm leading-7 text-slate-300 sm:text-base sm:leading-8">{subtitle}</p>
      </header>

      <div className="relative ml-2 border-l border-emerald-400/30 pl-6 sm:ml-3 sm:pl-8">
        {items.map((item, index) => (
          <article
            key={item.id}
            className="animate-fade-up group relative mb-8 last:mb-0"
            style={{ animationDelay: `${120 + index * 120}ms` }}
          >
            <span className="absolute -left-[1.95rem] top-6 h-3.5 w-3.5 rounded-full border border-emerald-200/70 bg-emerald-300 shadow-[0_0_0_4px_rgba(16,185,129,0.2),0_0_24px_rgba(16,185,129,0.65)] transition duration-300 group-hover:scale-110 group-hover:shadow-[0_0_0_5px_rgba(16,185,129,0.26),0_0_28px_rgba(16,185,129,0.8)] sm:-left-[2.2rem]" />

            <div className="rounded-2xl border border-slate-800/80 bg-slate-950/60 p-5 transition duration-300 group-hover:-translate-y-1 group-hover:border-emerald-300/50 group-hover:bg-slate-900/70 sm:p-6">
              <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-slate-100 sm:text-xl">{item.role}</h3>
                  <p className="text-sm text-slate-300 sm:text-base">{item.organization}</p>
                </div>
                <div className="text-left sm:text-right">
                  <p className="text-xs font-medium uppercase tracking-[0.16em] text-cyan-300/90">{item.period}</p>
                  <p className="text-xs text-slate-400">{item.location}</p>
                </div>
              </div>

              <p className="mb-4 text-sm leading-7 text-slate-300 sm:text-base sm:leading-8">{item.summary}</p>

              <ul className="mb-5 space-y-2">
                {item.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-start gap-2 text-sm leading-7 text-slate-300 sm:text-base">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-300" aria-hidden="true" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {item.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-lg border border-emerald-300/25 bg-emerald-400/10 px-2.5 py-1 text-xs font-medium text-emerald-200"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
