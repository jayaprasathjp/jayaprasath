export interface ContactLink {
  label: string;
  href: string;
}

export interface ContactProps {
  email: string;
  links: readonly ContactLink[];
  copyrightName: string;
}

export function Contact({ email, links, copyrightName }: ContactProps) {
  const year = new Date().getFullYear();

  return (
    <footer
      id="contact"
      aria-label="Contact"
      className="mx-auto w-full max-w-6xl px-4 pb-10 sm:px-8 lg:px-10"
    >
      <section className="rounded-2xl border border-slate-800/70 bg-slate-900/50 px-4 py-6 backdrop-blur-[6px] sm:rounded-3xl sm:px-8 sm:py-8">
        <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="mb-1 text-xs font-medium uppercase tracking-[0.2em] text-cyan-300/90">
              Contact
            </p>
            <a
              href={`mailto:${email}`}
              className="text-sm text-slate-200 transition duration-300 hover:text-emerald-200 sm:text-base"
            >
              {email}
            </a>
          </div>

          <nav aria-label="Social links" className="flex flex-wrap items-center gap-3">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-lg border border-slate-700 bg-slate-900/70 px-3 py-1.5 text-xs font-medium text-slate-200 transition duration-300 hover:border-cyan-300/60 hover:text-cyan-200"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <p className="mt-6 text-xs text-slate-400">
          Copyright {year} {copyrightName}. All rights reserved.
        </p>
      </section>
    </footer>
  );
}
