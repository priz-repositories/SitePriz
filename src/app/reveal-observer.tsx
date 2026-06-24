"use client";

import { useEffect } from "react";

export default function RevealObserver() {
  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            io.unobserve(e.target);
          }
        }
      },
      { threshold: 0.15 }
    );

    document
      .querySelectorAll<HTMLElement>("[data-reveal]")
      .forEach((el) => io.observe(el));

    if (reduceMotion) {
      document
        .querySelectorAll<HTMLElement>("[data-reveal]")
        .forEach((el) => el.classList.add("is-in"));
      return () => io.disconnect();
    }

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const y = window.scrollY;
        const rail = document.getElementById("rail");
        if (rail) rail.style.transform = `translate3d(${-y * 0.35}px, 0, 0)`;
        ticking = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return null;
}
