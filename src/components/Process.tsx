import { SectionTag } from "./SectionTag";

const STEPS = [
  { n: "01", name: "Discovery", desc: "Entendemos el problema antes de hablar de soluciones." },
  { n: "02", name: "Diseño", desc: "Wireframes y diseño en Figma. Aprobado antes de escribir código." },
  { n: "03", name: "Desarrollo", desc: "Código limpio. Updates cada viernes. Sin desaparecer." },
  { n: "04", name: "Launch", desc: "Deploy y entrega con soporte incluido el primer mes." },
];

export function Process() {
  return (
    <section className="px-6 md:px-10 py-28 md:py-40">
      <div className="max-w-[1280px] mx-auto">
        <div className="reveal">
          <SectionTag label="Cómo trabajamos" />
          <h2
            className="font-display text-hueso max-w-[820px] mb-20"
            style={{ fontSize: "clamp(34px, 5vw, 60px)", letterSpacing: "-0.03em", lineHeight: 1.05 }}
          >
            Sin rodeos. <span className="text-brote">Sin sorpresas.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-[rgba(255,255,255,0.06)] border border-hairline">
          {STEPS.map((s, i) => (
            <div
              key={s.n}
              className="reveal relative bg-carbon p-8 md:p-10 overflow-hidden min-h-[220px]"
              style={{ ["--reveal-delay" as string]: `${i * 80}ms` }}
            >
              <span
                aria-hidden
                className="absolute -top-4 -right-2 font-display text-hueso pointer-events-none"
                style={{ fontSize: "120px", opacity: 0.04, letterSpacing: "-0.04em" }}
              >
                {s.n}
              </span>
              <div className="relative">
                <span className="font-mono text-brote text-[12px] tracking-[0.2em]">{s.n}</span>
                <h3
                  className="font-display text-hueso mt-5"
                  style={{ fontSize: "22px", letterSpacing: "-0.02em" }}
                >
                  {s.name}
                </h3>
                <p className="text-polvo mt-3 text-[14px] leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
