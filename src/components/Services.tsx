import { SectionTag } from "./SectionTag";

const SERVICES = [
  {
    n: "01",
    name: "Identidad + presencia digital",
    desc: "Branding, sitio web y setup digital. Todo lo que necesitas para empezar con criterio.",
    tags: ["Branding", "Web", "Setup"],
    price: "$18,000 MXN",
    time: "3–4 semanas",
  },
  {
    n: "02",
    name: "MVP digital",
    desc: "Diseño UX/UI + desarrollo completo. De idea a producto funcional en el aire.",
    tags: ["UX/UI", "Frontend", "Backend"],
    price: "$45,000 MXN",
    time: "6–12 semanas",
  },
  {
    n: "03",
    name: "Retainer mensual",
    desc: "Horas mensuales para crecimiento continuo. Iteramos juntos sin contratos rígidos.",
    tags: ["Soporte", "Iteración", "Growth"],
    price: "$8,000 MXN/mes",
    time: "Mensual",
  },
];

export function Services() {
  return (
    <section
      id="servicios"
      className="bg-carbon border-y border-hairline px-6 md:px-10 py-28 md:py-40"
    >
      <div className="max-w-[1280px] mx-auto">
        <div className="reveal">
          <SectionTag label="Servicios" />
          <h2
            className="font-display text-hueso max-w-[820px] mb-20"
            style={{ fontSize: "clamp(34px, 5vw, 60px)", letterSpacing: "-0.03em", lineHeight: 1.05 }}
          >
            Tres servicios. <span className="text-brote">Un solo equipo.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-[rgba(255,255,255,0.06)] border border-hairline">
          {SERVICES.map((s, i) => (
            <div
              key={s.n}
              className="reveal bg-carbon p-8 md:p-10 flex flex-col hover:bg-[#22221F] transition-colors"
              style={{ ["--reveal-delay" as string]: `${i * 80}ms` }}
            >
              <span className="font-mono text-brote text-[14px] tracking-[0.2em]">{s.n}</span>
              <h3
                className="font-display text-hueso mt-6"
                style={{ fontSize: "22px", letterSpacing: "-0.02em", lineHeight: 1.15 }}
              >
                {s.name}
              </h3>
              <p className="text-polvo mt-4 text-[14.5px] leading-relaxed flex-1">{s.desc}</p>

              <div className="mt-6 flex flex-wrap gap-2">
                {s.tags.map((t) => (
                  <span
                    key={t}
                    className="font-mono uppercase text-[10px] tracking-[0.18em] text-polvo border border-hairline px-2.5 py-1 rounded-sm"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-hairline flex items-baseline justify-between font-mono text-[12px] tracking-[0.1em]">
                <span className="text-polvo uppercase">Desde</span>
                <span className="text-brote">{s.price}</span>
              </div>
              <div className="mt-2 font-mono text-[11px] tracking-[0.15em] uppercase text-polvo text-right">
                {s.time}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
