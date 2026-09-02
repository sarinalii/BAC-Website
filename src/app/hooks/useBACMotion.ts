import { useEffect, useRef } from "react";

export function useBACMotion() {
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  const setSectionRef =
    (index: number) =>
    (el: HTMLElement | null): void => {
      sectionRefs.current[index] = el;
    };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle("is-visible", entry.isIntersecting);
        });
      },
      { threshold: 0.14, rootMargin: "0px 0px -10% 0px" }
    );
    sectionRefs.current.forEach((s) => s && observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    let frame = 0;
    const clamp = (v: number, lo: number, hi: number) => Math.min(Math.max(v, lo), hi);
    const reduceMotion = () =>
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const update = () => {
      document.querySelectorAll<HTMLElement>("[data-motion-group]").forEach((group) => {
        const rect = group.getBoundingClientRect();
        const vh = window.innerHeight || 1;
        const progress = clamp((vh * 0.86 - rect.top) / (vh + rect.height), 0, 1);
        const focus = clamp(1 - Math.abs(rect.top + rect.height / 2 - vh / 2) / (vh / 2), 0, 1);
        group.style.setProperty("--group-progress", progress.toFixed(4));
        group.style.setProperty("--group-focus", focus.toFixed(4));
      });

      document.querySelectorAll<HTMLElement>("[data-motion-card]").forEach((card) => {
        const rect = card.getBoundingClientRect();
        const vh = window.innerHeight || 1;
        const focus = clamp(1 - Math.abs(rect.top + rect.height / 2 - vh / 2) / (vh / 2), 0, 1);
        const reveal = clamp((vh * 0.92 - rect.top) / (vh * 0.72), 0, 1);
        const dirValue = card.dataset.dir || "center";
        const direction = dirValue === "right" ? 1 : dirValue === "left" ? -1 : 0;
        const depth = Number(card.dataset.depth || "1");
        const rm = reduceMotion();
        card.style.setProperty("--card-x", `${rm ? 0 : (direction * (1 - reveal) * 18 * depth).toFixed(2)}px`);
        card.style.setProperty("--card-y", `${rm ? 0 : ((1 - reveal) * 16 * depth).toFixed(2)}px`);
        card.style.setProperty("--card-scale", (rm ? 1 : 0.99 + focus * 0.01).toFixed(4));
        card.style.setProperty("--card-opacity", (rm ? 1 : 0.82 + reveal * 0.18).toFixed(3));
        card.style.setProperty("--card-focus", focus.toFixed(4));
        card.style.setProperty("--card-reveal", reveal.toFixed(4));
      });
    };

    const requestUpdate = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        update();
        frame = 0;
      });
    };

    update();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);
    return () => {
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return { setSectionRef };
}
