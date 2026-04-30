import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { Work } from "@/components/Work";
import { Services } from "@/components/Services";
import { Process } from "@/components/Process";
import { About } from "@/components/About";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { Cursor } from "@/components/Cursor";
import { useReveal } from "@/components/Reveal";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Algo Tranqui Studio — Diseño y desarrollo digital · CDMX" },
      {
        name: "description",
        content:
          "Estudio creativo digital en CDMX. Diseño, desarrollo y estrategia en un solo equipo. Construimos bien, sin complicar.",
      },
      { name: "keywords", content: "diseño web, desarrollo, estudio digital, CDMX, branding, producto" },
      { property: "og:title", content: "Algo Tranqui Studio — Diseño y desarrollo digital" },
      {
        property: "og:description",
        content:
          "Cuatro devs con criterio creativo. Diseño, desarrollo y estrategia desde CDMX. Construimos bien, sin complicar.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://tranqui.studio" },
      { property: "og:site_name", content: "Algo Tranqui Studio" },
      { property: "og:locale", content: "es_MX" },
      { property: "og:image", content: "https://tranqui.studio/og-image.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "Algo Tranqui Studio — Construimos bien, sin complicar" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Algo Tranqui Studio — Diseño y desarrollo digital" },
      {
        name: "twitter:description",
        content:
          "Cuatro devs con criterio creativo. Diseño, desarrollo y estrategia desde CDMX.",
      },
      { name: "twitter:image", content: "https://tranqui.studio/og-image.jpg" },
      { name: "twitter:image:alt", content: "Algo Tranqui Studio — Construimos bien, sin complicar" },
    ],
  }),
});

function Index() {
  useReveal();
  return (
    <div className="noise-bg bg-void text-hueso min-h-screen overflow-x-hidden">
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Work />
        <Services />
        <Process />
        <About />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
