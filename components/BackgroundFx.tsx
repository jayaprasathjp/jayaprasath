export function BackgroundFx() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-zinc-950" />

      <div className="aurora-layer absolute -inset-[15%] opacity-70" />

      <div className="animate-float-slow absolute left-[8%] top-[18%] h-44 w-44 rounded-full bg-emerald-300/10 blur-3xl" />
      <div className="animate-float-slow absolute bottom-[12%] right-[10%] h-52 w-52 rounded-full bg-cyan-300/10 blur-3xl [animation-delay:1200ms]" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_20%,rgba(16,185,129,0.18),transparent_40%),radial-gradient(circle_at_82%_12%,rgba(34,211,238,0.16),transparent_38%),radial-gradient(circle_at_50%_88%,rgba(59,130,246,0.12),transparent_42%)]" />

      <div className="absolute inset-0 opacity-[0.14] [background-size:36px_36px] [background-image:linear-gradient(rgba(148,163,184,0.24)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.24)_1px,transparent_1px)]" />

      <div className="absolute inset-0 bg-[radial-gradient(circle,transparent_25%,rgba(9,9,11,0.82)_100%)]" />
    </div>
  );
}
