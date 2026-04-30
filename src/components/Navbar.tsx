import { useEffect, useState } from "react";
import { Logo } from "./Logo";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#trabajo", label: "Trabajo" },
    { href: "#servicios", label: "Servicios" },
    { href: "#nosotros", label: "Nosotros" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors ${scrolled ? "nav-scrolled" : ""}`}
    >
      <nav className="max-w-[1280px] mx-auto px-6 md:px-10 py-5 flex items-center justify-between">
        <a href="#top" aria-label="Inicio">
          <Logo compact />
        </a>

        <div className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-mono uppercase text-[11px] tracking-[0.2em] text-polvo hover:text-hueso transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contacto"
            className="bg-brote text-void font-mono uppercase text-[11px] tracking-[0.18em] px-5 py-3 rounded-sm hover:opacity-90 transition-opacity"
          >
            Hablemos →
          </a>
        </div>

        <button
          className="md:hidden flex flex-col gap-[5px] p-2"
          aria-label="Menu"
          onClick={() => setOpen((o) => !o)}
        >
          <span className={`w-6 h-px bg-hueso transition-transform ${open ? "translate-y-[6px] rotate-45" : ""}`} />
          <span className={`w-6 h-px bg-hueso transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`w-6 h-px bg-hueso transition-transform ${open ? "-translate-y-[6px] -rotate-45" : ""}`} />
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-void border-t border-hairline px-6 py-6 flex flex-col gap-5">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="font-mono uppercase text-[12px] tracking-[0.2em] text-polvo"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contacto"
            onClick={() => setOpen(false)}
            className="bg-brote text-void font-mono uppercase text-[11px] tracking-[0.18em] px-5 py-3 rounded-sm w-fit"
          >
            Hablemos →
          </a>
        </div>
      )}
    </header>
  );
}
