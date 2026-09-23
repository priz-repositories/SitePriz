"use client";
import { useEffect } from "react";

export default function RevealObserver() {
  useEffect(() => {
    // respect reduced-motion
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // --- simple reveals ---
    const reveals = document.querySelectorAll<HTMLElement>("[data-reveal]");
    if (reduced) {
      reveals.forEach((el) => el.classList.add("is-in"));
    } else {
      const observer = new IntersectionObserver(
        (entries) =>
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-in");
              observer.unobserve(entry.target);
            }
          }),
        { threshold: 0.12 }
      );
      reveals.forEach((el) => observer.observe(el));

      // --- stagger reveals ---
      const staggerObserver = new IntersectionObserver(
        (entries) =>
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-in");
              staggerObserver.unobserve(entry.target);
            }
          }),
        { threshold: 0.08 }
      );
      document
        .querySelectorAll<HTMLElement>("[data-reveal-stagger]")
        .forEach((el) => staggerObserver.observe(el));

      // --- process step highlights (scroll-driven) ---
      const stepObserver = new IntersectionObserver(
        (entries) =>
          entries.forEach((entry) => {
            if (entry.isIntersecting) entry.target.classList.add("is-in");
            else entry.target.classList.remove("is-in");
          }),
        { threshold: 0.5 }
      );
      document
        .querySelectorAll<HTMLElement>("[data-step]")
        .forEach((el) => stepObserver.observe(el));

      return () => {
        observer.disconnect();
        staggerObserver.disconnect();
        stepObserver.disconnect();
      };
    }
  }, []);
  return null;
}
