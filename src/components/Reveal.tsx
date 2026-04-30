import { useEffect } from "react";

export function useReveal() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const prefersReduced =
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Reduced motion: reveal everything immediately, no observers, no stagger delays
    if (prefersReduced) {
      document.querySelectorAll<HTMLElement>(".reveal").forEach((el) => {
        el.style.setProperty("--reveal-delay", "0ms");
        el.classList.add("is-visible");
      });
      return;
    }

    // Fallback: no IntersectionObserver -> reveal everything
    if (typeof IntersectionObserver === "undefined") {
      document
        .querySelectorAll<HTMLElement>(".reveal")
        .forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          } else {
            // Re-trigger when element leaves the viewport so it animates back in
            const rect = entry.boundingClientRect;
            if (rect.top >= window.innerHeight || rect.bottom <= 0) {
              entry.target.classList.remove("is-visible");
            }
          }
        });
      },
      { threshold: 0.05, rootMargin: "0px 0px -5% 0px" }
    );

    const observeAll = () => {
      document.querySelectorAll<HTMLElement>(".reveal").forEach((el) => {
        io.observe(el);
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          el.classList.add("is-visible");
        }
      });
    };

    observeAll();
    const t = window.setTimeout(observeAll, 100);

    return () => {
      window.clearTimeout(t);
      io.disconnect();
    };
  }, []);
}
