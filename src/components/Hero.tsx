export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden px-6 md:px-10 pt-32 pb-20"
    >
      {/* decorative giant outline text */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
      >
        <span
          className="font-display animate-drift whitespace-nowrap"
          style={{
            fontSize: "clamp(180px, 28vw, 460px)",
            letterSpacing: "-0.05em",
            color: "transparent",
            WebkitTextStroke: "1px rgba(245,240,232,0.06)",
            lineHeight: 1,
          }}
        >
          TRANQUI
        </span>
      </div>

      <div className="relative max-w-[1280px] mx-auto w-full">
        <div
          className="label-mono reveal flex items-center gap-3"
          style={{ transitionDelay: "0ms" }}
        >
          <span className="inline-block w-8 h-px bg-brote" />
          Estudio creativo digital · CDMX
        </div>

        <h1
          className="font-display mt-8 max-w-[1100px]"
          style={{
            fontSize: "clamp(44px, 9vw, 96px)",
            letterSpacing: "-0.04em",
            lineHeight: 1.02,
          }}
        >
          <span className="block reveal text-hueso" style={{ transitionDelay: "100ms" }}>
            Diseñamos y
          </span>
          <span className="block reveal text-hueso" style={{ transitionDelay: "250ms" }}>
            construimos lo
          </span>
          <span className="block reveal text-brote" style={{ transitionDelay: "400ms" }}>
            que tienes en mente.
          </span>
        </h1>

        <p
          className="reveal mt-10 text-polvo max-w-[460px] text-[16px] leading-relaxed"
          style={{ transitionDelay: "600ms" }}
        >
          Diseño, desarrollo y estrategia digital en un solo equipo. Sin drama, sin
          intermediarios, sin sorpresas.
        </p>

        <div
          className="reveal mt-10 flex flex-col sm:flex-row sm:items-center gap-5"
          style={{ transitionDelay: "750ms" }}
        >
          <a
            href="#trabajo"
            className="bg-brote text-void font-mono uppercase text-[12px] tracking-[0.18em] px-7 py-4 rounded-sm hover:opacity-90 transition-opacity w-fit"
          >
            Ver nuestro trabajo →
          </a>
          <a
            href="#servicios"
            className="font-mono uppercase text-[12px] tracking-[0.18em] text-polvo hover:text-hueso transition-colors"
          >
            Conocer servicios ↓
          </a>
        </div>

        {/* Metrics — bottom-right on desktop, below CTA on mobile */}
        <div
          className="reveal mt-16 lg:mt-24 flex gap-10 lg:gap-14 lg:justify-end lg:border-t lg:border-hairline lg:pt-10"
          style={{ transitionDelay: "900ms" }}
        >
          {[
            { v: "12+", l: "proyectos entregados" },
            { v: "3 sem", l: "tiempo promedio" },
            { v: "100%", l: "clientes que regresan" },
          ].map((m) => (
            <div key={m.l}>
              <div
                className="font-display text-hueso"
                style={{ fontSize: "clamp(32px, 3.6vw, 44px)", letterSpacing: "-0.03em", lineHeight: 1 }}
              >
                {m.v}
              </div>
              <div className="label-mono mt-3 max-w-[120px]">{m.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
