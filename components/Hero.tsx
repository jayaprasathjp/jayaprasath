import { InteractiveCard } from "./InteractiveCard";

export interface HeroProps {
  name: string;
  role: string;
  tagline: string;
}

export function Hero({ name, role, tagline }: HeroProps) {
  return (
    <InteractiveCard
      id="hero"
      aria-label="Introduction"
      tiltMax={8}
      glowColor="rgba(34, 211, 238, 0.12)" // Beautiful soft cyan spotlight glow
      glowSize={450}
      className="relative isolate overflow-hidden rounded-2xl border border-slate-800/70 bg-slate-900/50 px-4 py-10 backdrop-blur-xl sm:rounded-3xl sm:px-8 sm:py-14 lg:px-14 lg:py-16"
    >
      <article className="relative z-10 mx-auto flex w-full max-w-4xl flex-col gap-7 sm:gap-8">
        <div className="animate-fade-up flex flex-col gap-4 [animation-delay:180ms] sm:gap-5">
          <p
            className="text-xs font-medium uppercase tracking-[0.2em] text-emerald-300/90 sm:text-sm sm:tracking-[0.22em]"
            style={{ transform: "translateZ(10px)" }}
          >
            {role}
          </p>

          <h1
            className="max-w-3xl text-[2rem] font-semibold leading-tight tracking-tight text-slate-50 sm:text-5xl lg:text-6xl"
            style={{ transform: "translateZ(25px)" }}
          >
            {name}
          </h1>

          <p
            className="max-w-3xl text-sm leading-7 text-slate-300 sm:text-lg sm:leading-8"
            style={{ transform: "translateZ(15px)" }}
          >
            {tagline}
          </p>
        </div>
      </article>
    </InteractiveCard>
  );
}
