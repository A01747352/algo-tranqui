const ITEMS = [
  "Diseño UX/UI",
  "Desarrollo web",
  "MVPs digitales",
  "Identidad de marca",
  "Estrategia digital",
  "React",
  "Python",
  "SQL",
  "Figma",
  "Código",
  "Deploy",
];

export function Marquee() {
  const row = (
    <div className="flex shrink-0 items-center gap-10 pr-10">
      {ITEMS.map((it, i) => (
        <span key={i} className="flex items-center gap-10 whitespace-nowrap">
          <span className="font-mono uppercase text-[13px] tracking-[0.22em] text-hueso">
            {it}
          </span>
          <span className="text-brote text-lg leading-none">/.</span>
        </span>
      ))}
    </div>
  );

  return (
    <section className="bg-carbon border-y border-hairline overflow-hidden py-6">
      <div className="flex w-max animate-marquee">
        {row}
        {row}
      </div>
    </section>
  );
}
