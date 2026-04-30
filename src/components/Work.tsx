import { SectionTag } from "./SectionTag";

function Placeholder({ label }: { label: string }) {
  return (
    <div className="relative w-full aspect-[16/10] bg-[#0F0F0E] border border-hairline overflow-hidden flex items-center justify-center">
      <svg
        className="absolute inset-0 w-full h-full opacity-30"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        viewBox="0 0 100 100"
      >
        <line x1="0" y1="0" x2="100" y2="100" stroke="#888880" strokeWidth="0.2" />
        <line x1="100" y1="0" x2="0" y2="100" stroke="#888880" strokeWidth="0.2" />
      </svg>
      <span className="label-mono relative z-10">{label}</span>
    </div>
  );
}

function Card({
  type,
  name,
  desc,
  tags,
  featured = false,
}: {
  type: string;
  name: string;
  desc: string;
  tags: string[];
  featured?: boolean;
}) {
  return (
    <a
      href="#"
      className={`group relative block bg-carbon border border-hairline p-8 md:p-10 transition-colors hover:bg-[#22221F] reveal ${featured ? "lg:grid lg:grid-cols-2 lg:gap-10" : ""}`}
    >
      <span className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 group-hover:translate-x-[3px] group-hover:-translate-y-[3px] transition-all text-brote text-xl">
        ↗
      </span>

      <div className="flex flex-col">
        <span className="label-mono">{type}</span>
        <h3
          className="font-display text-hueso mt-5"
          style={{
            fontSize: featured ? "clamp(28px, 3.5vw, 44px)" : "clamp(22px, 2.4vw, 30px)",
            letterSpacing: "-0.025em",
            lineHeight: 1.05,
          }}
        >
          {name}
        </h3>
        <p className="text-polvo mt-5 max-w-[440px] text-[15px] leading-relaxed">{desc}</p>
        <div className="mt-7 flex flex-wrap gap-2">
          {tags.map((t) => (
            <span
              key={t}
              className="font-mono uppercase text-[10px] tracking-[0.18em] text-polvo border border-hairline px-3 py-1.5 rounded-sm"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {featured && (
        <div className="mt-8 lg:mt-0">
          <Placeholder label="Screenshot próximamente" />
        </div>
      )}

      {!featured && (
        <div className="mt-8">
          <Placeholder label="Screenshot próximamente" />
        </div>
      )}
    </a>
  );
}

export function Work() {
  return (
    <section id="trabajo" className="px-6 md:px-10 py-28 md:py-40">
      <div className="max-w-[1280px] mx-auto">
        <div className="reveal">
          <SectionTag label="Trabajo" />
          <h2
            className="font-display text-hueso max-w-[820px] mb-16"
            style={{ fontSize: "clamp(34px, 5vw, 60px)", letterSpacing: "-0.03em", lineHeight: 1.05 }}
          >
            Algunos proyectos que <span className="text-brote">construimos.</span>
          </h2>
        </div>

        <div className="space-y-6">
          {/* TODO: replace with real project */}
          <Card
            featured
            type="MVP · Plataforma SaaS"
            name="Nombre del proyecto 1"
            desc="Diseño UX, sistema de componentes y desarrollo full-stack para un producto B2B lanzado en 8 semanas."
            tags={["React", "Node", "Postgres", "Figma"]}
          />

          <div className="grid md:grid-cols-2 gap-6">
            {/* TODO: replace with real project */}
            <Card
              type="Identidad + Web"
              name="Nombre del proyecto 2"
              desc="Branding y sitio institucional con CMS para una agencia consultora en CDMX."
              tags={["Branding", "Astro", "CMS"]}
            />
            {/* TODO: replace with real project */}
            <Card
              type="App móvil web"
              name="Nombre del proyecto 3"
              desc="PWA con auth, pagos y dashboard de operación para un negocio de delivery."
              tags={["React", "Stripe", "Supabase"]}
            />
          </div>

          <div className="flex justify-end">
            <a
              href="#"
              className="reveal bg-brote text-void font-mono uppercase text-[12px] tracking-[0.2em] px-7 py-4 rounded-sm hover:opacity-90 transition-opacity"
            >
              Ver todos →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
