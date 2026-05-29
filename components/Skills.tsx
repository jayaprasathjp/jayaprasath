export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  skills: readonly string[];
}

export interface SkillsProps {
  title: string;
  subtitle: string;
  categories: readonly SkillCategory[];
}

export function Skills({ title, subtitle, categories }: SkillsProps) {
  return (
    <section
      id="skills"
      aria-label="Skills inventory"
      className="relative rounded-2xl border border-slate-800/70 bg-slate-900/40 px-4 py-10 backdrop-blur-xl sm:rounded-3xl sm:px-8 sm:py-14 lg:px-14"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.12),transparent_45%),radial-gradient(circle_at_bottom_left,rgba(34,211,238,0.12),transparent_42%)]" />

      <header className="mb-8 flex max-w-3xl flex-col gap-3 sm:mb-10">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-emerald-300/90 sm:text-sm sm:tracking-[0.22em]">
          Skills Inventory
        </p>
        <h2 className="text-2xl font-semibold tracking-tight text-slate-50 sm:text-4xl">{title}</h2>
        <p className="text-sm leading-7 text-slate-300 sm:text-base sm:leading-8">{subtitle}</p>
      </header>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3 sm:gap-5 lg:gap-6">
        {categories.map((category) => (
          <article
            key={category.id}
            className="transform-gpu rounded-2xl border border-slate-700/70 bg-slate-800/50 p-5 backdrop-blur transition duration-300 [transform-style:preserve-3d] hover:[transform:translateY(-6px)_rotateX(2deg)_rotateY(1deg)] hover:border-emerald-300/60 motion-reduce:hover:transform-none sm:p-6"
          >
            <h3 className="mb-2 text-lg font-semibold text-slate-100">{category.title}</h3>
            <p className="mb-4 text-sm leading-7 text-slate-300">{category.description}</p>

            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-emerald-300/30 bg-emerald-400/10 px-2.5 py-1 text-xs font-medium text-emerald-100"
                >
                  {skill}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
