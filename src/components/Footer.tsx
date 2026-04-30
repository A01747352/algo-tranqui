export function Footer() {
  return (
    <footer className="px-6 md:px-10 py-10">
      <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div
          className="font-display text-hueso text-[18px]"
          style={{ letterSpacing: "-0.02em" }}
        >
          algo tranqui<span className="text-brote">.</span>
        </div>

        <div className="flex gap-8">
          {/* TODO: replace with real social links */}
          {[
            { label: "LinkedIn", href: "#linkedin" },
            { label: "Behance", href: "#behance" },
            { label: "GitHub", href: "#github" },
          ].map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="font-mono uppercase text-[11px] tracking-[0.22em] text-polvo hover:text-hueso transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="font-mono uppercase text-[11px] tracking-[0.22em] text-polvo">
          CDMX · 2025
        </div>
      </div>
    </footer>
  );
}
