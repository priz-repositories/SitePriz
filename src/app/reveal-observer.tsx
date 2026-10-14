"use client";
import { useEffect } from "react";

export default function RevealObserver() {
  useEffect(() => {
    // reduced-motion: o CSS troca o slide por um fade curto, sem deslocamento
    const reveal = (selector: string, threshold: number) => {
      const observer = new IntersectionObserver(
        (entries) =>
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-in");
              observer.unobserve(entry.target);
            }
          }),
        { threshold }
      );
      document.querySelectorAll<HTMLElement>(selector).forEach((el) => observer.observe(el));
      return observer;
    };

    const simple = reveal("[data-reveal]", 0.12);
    const stagger = reveal("[data-reveal-stagger]", 0.08);

    // animações decorativas ([data-anim]) pausam quando saem da tela
    const pauser = new IntersectionObserver((entries) =>
      entries.forEach((entry) => entry.target.classList.toggle("is-paused", !entry.isIntersecting))
    );
    document.querySelectorAll("[data-anim]").forEach((el) => pauser.observe(el));

    return () => {
      simple.disconnect();
      stagger.disconnect();
      pauser.disconnect();
    };
  }, []);
  return null;
}
