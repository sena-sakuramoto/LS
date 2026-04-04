import { useEffect, type DependencyList } from "react";

export function useTouchScrollGlow(deps: DependencyList = []) {
  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const prefersTouchInteraction = window.matchMedia(
      "(hover: none), (pointer: coarse)",
    ).matches;

    if (!prefersTouchInteraction) {
      return;
    }

    const glowTargets = Array.from(
      document.querySelectorAll<HTMLElement>("[data-scroll-glow]"),
    );

    if (!glowTargets.length) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle(
            "scroll-glow-active",
            entry.isIntersecting && entry.intersectionRatio >= 0.32,
          );
        });
      },
      {
        threshold: [0.15, 0.32, 0.55],
        rootMargin: "0px 0px -10% 0px",
      },
    );

    glowTargets.forEach((target) => observer.observe(target));

    return () => {
      observer.disconnect();
    };
  }, deps);
}
