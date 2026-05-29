export interface HeroCta {
  label: string;
  href: string;
}

export interface HeroProps {
  name: string;
  role: string;
  tagline: string;
  primaryCta: HeroCta;
  secondaryCta: HeroCta;
}

export function Hero({
  name,
  role,
  tagline,
  primaryCta,
  secondaryCta,
}: HeroProps) {
  return (
    <section
      id="hero"
      aria-label="Introduction"
      className="relative isolate overflow-hidden rounded-2xl border border-slate-800/70 bg-slate-900/50 px-4 py-10 backdrop-blur-xl sm:rounded-3xl sm:px-8 sm:py-14 lg:px-14 lg:py-16"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-20 right-0 h-48 w-48 rounded-full bg-emerald-500/20 blur-3xl animate-pulse sm:h-64 sm:w-64" />
        <div className="absolute -bottom-24 left-0 h-56 w-56 rounded-full bg-indigo-500/20 blur-3xl animate-pulse [animation-delay:700ms] sm:h-72 sm:w-72" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.16),transparent_45%),radial-gradient(circle_at_bottom_right,rgba(99,102,241,0.14),transparent_42%)]" />
      </div>

      <article className="relative z-10 mx-auto flex w-full max-w-4xl flex-col gap-7 sm:gap-8">
        <div className="flex flex-col gap-4 sm:gap-5">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-emerald-300/90 sm:text-sm sm:tracking-[0.22em]">
            {role}
          </p>

          <h1 className="max-w-3xl text-[2rem] font-semibold leading-tight tracking-tight text-slate-50 sm:text-5xl lg:text-6xl">
            {name}
          </h1>

          <p className="max-w-3xl text-sm leading-7 text-slate-300 sm:text-lg sm:leading-8">
            {tagline}
          </p>
        </div>

        <nav aria-label="Primary actions" className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
          <a
            href={primaryCta.href}
            className="inline-flex w-full items-center justify-center rounded-xl border border-emerald-300/70 bg-emerald-400/90 px-6 py-3 text-sm font-semibold text-slate-950 transition duration-300 hover:scale-[1.01] hover:bg-emerald-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 sm:w-auto sm:hover:scale-[1.03]"
          >
            {primaryCta.label}
          </a>

          <a
            href={secondaryCta.href}
            className="inline-flex w-full items-center justify-center rounded-xl border border-slate-700 bg-slate-900/70 px-6 py-3 text-sm font-semibold text-slate-200 transition duration-300 hover:scale-[1.01] hover:border-cyan-300/70 hover:text-cyan-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 sm:w-auto sm:hover:scale-[1.03]"
          >
            {secondaryCta.label}
          </a>
        </nav>
      </article>
    </section>
  );
}
