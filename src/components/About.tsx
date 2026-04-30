import { SectionTag } from "./SectionTag";

const TEAM = [
  {
    initial: "D",
    name: "Diego",
    role: "Design + Frontend",
    bio: "Diseño de producto, sistemas visuales y construcción del frontend. Obsesionado con los detalles que se sienten.",
    tags: ["Figma", "React", "CSS", "Branding"],
  },
  {
    initial: "E",
    name: "Emilio",
    role: "Backend + Infra",
    bio: "Arquitectura, datos y todo lo que pasa del lado del servidor. Le gusta el código que se entiende sin documentación.",
    tags: ["Python", "Node", "SQL", "Cloud"],
  },
  {
    initial: "A",
    name: "Alan",
    role: "Producto + Estrategia",
    bio: "Define el qué y el por qué antes del cómo. Traduce objetivos de negocio en decisiones de producto claras.",
    tags: ["Product", "Research", "Roadmap", "Data"],
  },
  {
    initial: "I",
    name: "Isaac",
    role: "Fullstack + DevOps",
    bio: "Conecta frontend, backend e infraestructura. Hace que todo funcione junto sin que se note el esfuerzo.",
    tags: ["React", "Go", "Docker", "CI/CD"],
  },
];

export function About() {
  return (
    <section id="nosotros" className="px-6 md:px-12 py-24 md:py-32">
      <SectionTag label="Nosotros" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        {/* Left — copy */}
        <div className="reveal max-w-lg">
            <h2 className="text-5xl md:text-6xl font-serif font-bold leading-tight mb-10">
              Cuatro devs con{" "}
              <span className="text-brote">criterio creativo.</span>
            </h2>

            <div className="space-y-5 text-[15px] leading-relaxed text-hueso/70">
              <p>
                Somos un estudio de cuatro personas en CDMX. Diseñamos,
                programamos y entregamos. Sin agencias intermedias, sin PMs
                traduciendo entre tú y quien escribe el código.
              </p>
              <p>
                Llevamos años trabajando juntos en producto. Hablamos claro,
                decimos cuando algo no tiene sentido y entregamos lo que
                prometemos en el tiempo que prometimos.
              </p>
              <p>
                Si te late cómo trabajamos, escríbenos. Si no, también está
                bien.
              </p>
            </div>
        </div>

        {/* Right — team grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {TEAM.map((member, i) => (
            <div
              key={member.name}
              className="reveal border border-white/8 rounded-lg p-5 flex flex-col gap-4 bg-white/[0.02] hover:bg-white/[0.04] transition-colors"
              style={{ "--reveal-delay": `${i * 80}ms` } as React.CSSProperties}
            >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-brote/20 border border-brote/30 flex items-center justify-center">
                    <span className="text-brote font-mono font-bold text-sm">
                      {member.initial}
                    </span>
                  </div>
                  <div>
                    <p className="font-bold text-hueso text-[15px]">
                      {member.name}
                    </p>
                    <p className="font-mono uppercase text-[10px] tracking-widest text-hueso/40">
                      {member.role}
                    </p>
                  </div>
                </div>

                <p className="text-[13px] leading-relaxed text-hueso/60">
                  {member.bio}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {member.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono uppercase text-[10px] tracking-widest border border-white/12 text-hueso/50 px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}