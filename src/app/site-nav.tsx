"use client";

import { useEffect, useState } from "react";
import type { MouseEvent } from "react";
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

export default function SiteNav() {
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
      <nav id="mobile-menu" popover="auto" className="mobile-drawer" aria-label="Menu mobile" onClick={closeOnLink}>
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
          <img src="/priz-logo.svg" alt="Priz" className="nav-logo" />
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
