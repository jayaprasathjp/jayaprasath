import { InteractiveCard } from "./InteractiveCard";

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  techStack: readonly string[];
}

export interface ProjectsProps {
  title: string;
  subtitle: string;
  projects: readonly ProjectItem[];
}

export function Projects({ title, subtitle, projects }: ProjectsProps) {
  return (
    <section
      id="projects"
      aria-label="Featured projects"
      className="relative rounded-2xl border border-slate-800/70 bg-slate-900/40 px-4 py-10 backdrop-blur-xl sm:rounded-3xl sm:px-8 sm:py-14 lg:px-14"
    >
      <header className="mb-8 flex max-w-3xl flex-col gap-3 sm:mb-10">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-cyan-300/90 sm:text-sm sm:tracking-[0.22em]">
          Featured Builds
        </p>
        <h2 className="text-2xl font-semibold tracking-tight text-slate-50 sm:text-4xl">{title}</h2>
        <p className="text-sm leading-7 text-slate-300 sm:text-base sm:leading-8">{subtitle}</p>
      </header>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 sm:gap-5 lg:gap-6">
        {projects.map((project, index) => (
          <InteractiveCard
            key={project.id}
            tiltMax={12}
            glowColor="rgba(16, 185, 129, 0.15)" // Beautiful emerald glow
            glowSize={300}
            className="animate-fade-up transform-gpu rounded-2xl border border-slate-700/70 bg-slate-800/50 p-5 backdrop-blur transition duration-300 hover:border-emerald-300/70 sm:p-6"
            style={{ animationDelay: `${160 + index * 120}ms` }}
          >
            <article>
              <div className="mb-4" style={{ transform: "translateZ(25px)" }}>
                <h3 className="text-lg font-semibold text-slate-100 sm:text-xl">{project.title}</h3>
              </div>

              <p className="mb-5 text-sm leading-7 text-slate-300 sm:text-base sm:leading-8" style={{ transform: "translateZ(15px)" }}>
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2" style={{ transform: "translateZ(10px)" }}>
                {project.techStack.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-cyan-300/35 bg-cyan-400/10 px-2.5 py-1 text-xs font-medium text-cyan-100"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </article>
          </InteractiveCard>
        ))}
      </div>
    </section>
  );
}

