"use client";

import { useEffect, useRef, useState } from "react";
import type { MouseEvent, PointerEvent } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { instagram } from "./contact";

const navItems = [
  { href: "/#solucoes", id: "solucoes", label: "Serviços" },
  { href: "/#projetos", id: "projetos", label: "Projetos" },
  { href: "/#precos",   id: "precos",   label: "Preços" },
  { href: "/#processo", id: "processo", label: "Processo" },
  { href: "/sobre",     id: "sobre",    label: "Sobre" },
];

/* Projeção de momento (Apple, Designing Fluid Interfaces): onde o gesto pararia sozinho */
const project = (velocity: number, decelerationRate = 0.998) =>
  ((velocity / 1000) * decelerationRate) / (1 - decelerationRate);

/* Resistência progressiva além do limite, em vez de parada seca */
const rubberband = (overshoot: number, dimension: number, constant = 0.55) =>
  (overshoot * dimension * constant) / (dimension + constant * Math.abs(overshoot));

/* Arrastar o drawer para a direita fecha; acompanha o dedo 1:1 */
function useDrawerSwipe() {
  const drag = useRef<{ x: number; y: number; axis?: "x" | "y"; samples: { x: number; t: number }[] } | null>(null);

  const onPointerDown = (e: PointerEvent<HTMLElement>) => {
    if (e.pointerType === "mouse") return;
    drag.current = { x: e.clientX, y: e.clientY, samples: [{ x: e.clientX, t: e.timeStamp }] };
  };

  const onPointerMove = (e: PointerEvent<HTMLElement>) => {
    const d = drag.current;
    if (!d) return;
    const dx = e.clientX - d.x;
    const dy = e.clientY - d.y;
    if (!d.axis) {
      if (Math.hypot(dx, dy) < 10) return; // histerese: só decide a direção depois de 10px
      d.axis = Math.abs(dx) > Math.abs(dy) ? "x" : "y";
      if (d.axis === "y") return void (drag.current = null); // é rolagem da lista
      e.currentTarget.setPointerCapture(e.pointerId);
      e.currentTarget.style.transition = "none";
    }
    d.samples = [...d.samples.slice(-4), { x: e.clientX, t: e.timeStamp }];
    const offset = dx >= 0 ? dx : rubberband(dx, e.currentTarget.offsetWidth);
    e.currentTarget.style.transform = `translateX(${offset}px)`;
  };

  const onPointerEnd = (e: PointerEvent<HTMLElement>) => {
    const d = drag.current;
    drag.current = null;
    if (!d?.axis) return;
    const el = e.currentTarget;
    const first = d.samples[0];
    const last = d.samples.at(-1)!;
    const velocity = ((last.x - first.x) / Math.max(1, last.t - first.t)) * 1000; // px/s
    const dx = e.clientX - d.x;
    const shouldClose = dx + project(velocity) > el.offsetWidth / 2;
    // a transição CSS parte do valor atual na tela, sem salto
    el.style.transition = "";
    el.style.transform = "";
    if (shouldClose) el.hidePopover();
  };

  return { onPointerDown, onPointerMove, onPointerUp: onPointerEnd, onPointerCancel: onPointerEnd };
}

export default function SiteNav() {
  const drawerSwipe = useDrawerSwipe();
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState("");

  /* Na home, o link ativo segue a seção visível */
  useEffect(() => {
    setActiveSection("");
    if (pathname !== "/") return;
    const ids = ["solucoes", "projetos", "precos", "processo", "faq", "contato"];
    const sections = ids.map((id) => document.getElementById(id)).filter((s): s is HTMLElement => Boolean(s));
    const onScroll = () => {
      const current = sections.findLast((s) => s.offsetTop - window.innerHeight * 0.4 <= window.scrollY);
      setActiveSection(current?.id ?? "");
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  const activeItem = pathname === "/sobre" ? "sobre" : activeSection;
  /* Clicar num link do menu fecha o popover */
  const closeOnLink = (e: MouseEvent<HTMLElement>) => {
    if ((e.target as HTMLElement).closest("a")) e.currentTarget.hidePopover();
  };

  return (
    <>
      {/* ── Mobile Drawer (popover: top layer, Esc e clique fora fecham) ── */}
      <nav id="mobile-menu" popover="auto" className="mobile-drawer" aria-label="Menu mobile" onClick={closeOnLink} {...drawerSwipe}>
        <button className="mobile-close" popoverTarget="mobile-menu" popoverTargetAction="hide" aria-label="Fechar menu">
          ×
        </button>
        <div className="mobile-drawer-links">
          <Link href="/#solucoes">Serviços</Link>
          <Link href="/#projetos">Projetos</Link>
          <Link href="/#precos">Preços</Link>
          <Link href="/#processo">Processo</Link>
          <Link href="/sobre" className={pathname === "/sobre" ? "is-active" : ""}>
            Sobre a Priz
          </Link>
          <Link href="/contato">Falar com a Priz</Link>
          <Link href="/#faq">Dúvidas</Link>
        </div>
        <div style={{ marginTop: 24, display: "flex", flexDirection: "column", gap: 10 }}>
          <Link
            className="mobile-drawer-cta button button-light"
            href="/contato"
            style={{ marginTop: 0 }}
          >
            Falar com a Priz <span>↗</span>
          </Link>
          <a
            className="mobile-drawer-cta button button-quiet"
            href={instagram}
            target="_blank"
            rel="noreferrer"
            style={{ marginTop: 0 }}
          >
            Instagram <span>↗</span>
          </a>
        </div>
      </nav>

      <header className="nav">
        <Link href="/" className="brand" aria-label="Priz Solutions">
          <img src="/priz-logo.svg" alt="Priz" className="nav-logo" width={579} height={299} />
        </Link>
        <nav aria-label="Navegação Principal">
          {navItems.map(({ href, id, label }) => (
            <Link
              key={href}
              href={href}
              className={activeItem === id ? "nav-link is-active" : "nav-link"}
            >
              {label}
            </Link>
          ))}
        </nav>
        <div className="nav-right">
          <Link className="nav-cta" href="/contato">
            Falar <span>↗</span>
          </Link>
          <button
            className="mobile-toggle"
            popoverTarget="mobile-menu"
            aria-label="Abrir menu mobile"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>
    </>
  );
}
