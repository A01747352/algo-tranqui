import { useState } from "react";
import { SectionTag } from "./SectionTag";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";

type TeamMember = {
  initials: string;
  name: string;
  role: string;
  desc: string;
  skills: string[];
  bio: string;
  experience: string[];
  links: { label: string; href: string }[];
};

const team: TeamMember[] = [
  {
    initials: "D",
    name: "Diego",
    role: "Design + Frontend",
    desc: "Diseño de producto, sistemas visuales y construcción del frontend. Obsesionado con los detalles que se sienten.",
    skills: ["Figma", "React", "CSS", "Branding"],
    bio: "Diseñador y desarrollador frontend. Trabaja en la intersección entre identidad visual y producto, construyendo interfaces que se sienten cuidadas hasta el último píxel.",
    experience: [
      "8+ años diseñando producto digital",
      "Sistemas de diseño en startups y estudios",
      "Frontend en React, TypeScript y Tailwind",
    ],
    links: [
      { label: "LinkedIn", href: "https://www.linkedin.com/" },
      { label: "GitHub", href: "https://github.com/" },
    ],
  },
  {
    initials: "E",
    name: "Emilio",
    role: "Backend + Infra",
    desc: "Arquitectura, datos y todo lo que pasa del lado del servidor. Le gusta el código que se entiende sin documentación.",
    skills: ["Python", "Node", "SQL", "Cloud"],
    bio: "Ingeniero backend con foco en arquitecturas simples, observables y mantenibles. Cree que la mejor infraestructura es la que no necesita atención.",
    experience: [
      "10+ años en backend y datos",
      "APIs en Python, Node y Go",
      "Infra en AWS, GCP y bases SQL",
    ],
    links: [
      { label: "LinkedIn", href: "https://www.linkedin.com/" },
      { label: "GitHub", href: "https://github.com/" },
    ],
  },
  {
    initials: "A",
    name: "Alan",
    role: "Producto + Estrategia",
    desc: "Define el qué y el por qué antes del cómo. Traduce objetivos de negocio en decisiones de producto claras.",
    skills: ["Product", "Research", "Roadmap", "Data"],
    bio: "Product manager con background en research. Ayuda a los clientes a enfocar el alcance, priorizar lo que importa y medir lo que se entrega.",
    experience: [
      "7+ años en producto y estrategia digital",
      "Discovery, research y roadmaps",
      "Trabajo cercano con fundadores y equipos chicos",
    ],
    links: [{ label: "LinkedIn", href: "https://www.linkedin.com/" }],
  },
  {
    initials: "I",
    name: "Isaac",
    role: "Fullstack + DevOps",
    desc: "Conecta frontend, backend e infraestructura. Automatiza lo que se repite y mantiene todo corriendo en producción.",
    skills: ["TypeScript", "Docker", "CI/CD", "AWS"],
    bio: "Fullstack con sensibilidad de operaciones. Construye pipelines, ambientes reproducibles y entrega continua para que el equipo no pelee con la infra.",
    experience: [
      "9+ años entre fullstack y DevOps",
      "CI/CD, Docker y Kubernetes",
      "Plataformas en AWS y Cloudflare",
    ],
    links: [
      { label: "LinkedIn", href: "https://www.linkedin.com/" },
      { label: "GitHub", href: "https://github.com/" },
    ],
  },
];

function TeamCard({
  member,
  delay,
  onOpen,
}: {
  member: TeamMember;
  delay: number;
  onOpen: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onOpen}
      aria-label={`Ver bio de ${member.name}`}
      className="reveal text-left bg-carbon border border-hairline p-7 flex gap-5 transition-colors hover:border-brote/40 focus:outline-none focus-visible:border-brote/60"
      style={{ ["--reveal-delay" as string]: `${delay}ms` }}
    >
      <div
        className="shrink-0 w-14 h-14 rounded-full flex items-center justify-center font-display text-brote text-[18px]"
        style={{
          background: "rgba(200,240,96,0.1)",
          border: "1px solid rgba(200,240,96,0.25)",
        }}
        aria-hidden="true"
      >
        {member.initials}
      </div>
      <div className="flex-1 min-w-0">
        <div className="font-display text-hueso text-[20px]" style={{ letterSpacing: "-0.02em" }}>
          {member.name}
        </div>
        <div className="label-mono mt-1">{member.role}</div>
        <p className="text-polvo mt-3 text-[14px] leading-relaxed">{member.desc}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {member.skills.map((s) => (
            <span
              key={s}
              className="font-mono uppercase text-[10px] tracking-[0.18em] text-polvo border border-hairline px-2.5 py-1 rounded-sm"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </button>
  );
}

export function About() {
  const [active, setActive] = useState<TeamMember | null>(null);

  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Algo Tranqui Studio",
    url: "https://tranqui.studio",
    email: "hola@tranqui.studio",
    description:
      "Estudio creativo digital en CDMX. Diseño, desarrollo y estrategia en un solo equipo.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Ciudad de México",
      addressCountry: "MX",
    },
    member: team.map((m) => ({
      "@type": "Person",
      name: m.name,
      jobTitle: m.role,
      description: m.bio,
    })),
  };

  return (
    <section
      id="nosotros"
      className="px-6 md:px-10 py-28 md:py-40"
      aria-labelledby="nosotros-title"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
      />
      <div className="max-w-[1280px] mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24">
        <div>
          <SectionTag label="Nosotros" />
          <h2
            id="nosotros-title"
            className="reveal font-display text-hueso"
            style={{ fontSize: "clamp(34px, 4.5vw, 56px)", letterSpacing: "-0.03em", lineHeight: 1.05 }}
          >
            Cuatro devs con <span className="text-brote">criterio creativo.</span>
          </h2>
          <div className="reveal mt-8 space-y-5 text-polvo text-[15.5px] leading-relaxed max-w-[480px]">
            <p>
              Somos un estudio de cuatro personas en CDMX. Diseñamos, programamos y entregamos.
              Sin agencias intermedias, sin PMs traduciendo entre tú y quien escribe el código.
            </p>
            <p>
              Llevamos años trabajando juntos en producto. Hablamos claro, decimos cuando algo
              no tiene sentido y entregamos lo que prometimos en el tiempo que prometimos.
            </p>
            <p>Si te late cómo trabajamos, escríbenos. Si no, también está bien.</p>
          </div>
        </div>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 lg:pt-24"
          role="list"
          aria-label="Equipo de Algo Tranqui Studio"
        >
          {team.map((m, i) => (
            <div role="listitem" key={m.name} className="contents">
              <TeamCard member={m} delay={i * 80} onOpen={() => setActive(m)} />
            </div>
          ))}
        </div>
      </div>

      <Dialog open={!!active} onOpenChange={(o) => !o && setActive(null)}>
        <DialogContent className="bg-carbon border-hairline text-hueso max-w-lg">
          {active && (
            <>
              <DialogHeader>
                <div className="flex items-center gap-4">
                  <div
                    className="shrink-0 w-14 h-14 rounded-full flex items-center justify-center font-display text-brote text-[18px]"
                    style={{
                      background: "rgba(200,240,96,0.1)",
                      border: "1px solid rgba(200,240,96,0.25)",
                    }}
                    aria-hidden="true"
                  >
                    {active.initials}
                  </div>
                  <div>
                    <DialogTitle
                      className="font-display text-hueso text-[24px]"
                      style={{ letterSpacing: "-0.02em" }}
                    >
                      {active.name}
                    </DialogTitle>
                    <DialogDescription className="label-mono mt-1 text-polvo">
                      {active.role}
                    </DialogDescription>
                  </div>
                </div>
              </DialogHeader>

              <p className="text-polvo text-[14.5px] leading-relaxed">{active.bio}</p>

              <div>
                <div className="label-mono mb-3">Experiencia</div>
                <ul className="space-y-2 text-polvo text-[14px] leading-relaxed">
                  {active.experience.map((e) => (
                    <li key={e} className="flex gap-3">
                      <span className="text-brote">/</span>
                      <span>{e}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2">
                {active.skills.map((s) => (
                  <span
                    key={s}
                    className="font-mono uppercase text-[10px] tracking-[0.18em] text-polvo border border-hairline px-2.5 py-1 rounded-sm"
                  >
                    {s}
                  </span>
                ))}
              </div>

              {active.links.length > 0 && (
                <div className="flex flex-wrap gap-3 pt-2">
                  {active.links.map((l) => (
                    <a
                      key={l.label}
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono uppercase text-[11px] tracking-[0.2em] text-hueso border border-hairline hover:border-brote/60 hover:text-brote px-3 py-2 transition-colors"
                    >
                      {l.label} →
                    </a>
                  ))}
                </div>
              )}
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
