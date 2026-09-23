"use client";

import { useState } from "react";
import Link from "next/link";

const instagram = "https://www.instagram.com/priz.oficial/";

interface SiteNavProps {
  activeItem?: "sobre" | "solucoes" | "projetos" | "precos" | "processo" | "contato" | "";
}

export default function SiteNav({ activeItem = "" }: SiteNavProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { href: "/#solucoes", id: "solucoes", label: "Serviços" },
    { href: "/#projetos", id: "projetos", label: "Projetos" },
    { href: "/#precos",   id: "precos",   label: "Preços" },
    { href: "/#processo", id: "processo", label: "Processo" },
    { href: "/sobre",     id: "sobre",    label: "Sobre" },
  ];

  return (
    <>
      {/* ── Mobile Backdrop & Drawer ── */}
      <div
        className={`mobile-backdrop ${mobileOpen ? "is-open" : ""}`}
        onClick={() => setMobileOpen(false)}
        aria-hidden
      />
      <nav className={`mobile-drawer ${mobileOpen ? "is-open" : ""}`} aria-label="Menu mobile">
        <button
          className="mobile-close"
          onClick={() => setMobileOpen(false)}
          aria-label="Fechar menu"
        >
          ×
        </button>
        <div className="mobile-drawer-links">
          <Link href="/#solucoes" onClick={() => setMobileOpen(false)}>
            Serviços
          </Link>
          <Link href="/#projetos" onClick={() => setMobileOpen(false)}>
            Projetos
          </Link>
          <Link href="/#precos" onClick={() => setMobileOpen(false)}>
            Preços
          </Link>
          <Link href="/#processo" onClick={() => setMobileOpen(false)}>
            Processo
          </Link>
          <Link
            href="/sobre"
            className={activeItem === "sobre" ? "is-active" : ""}
            onClick={() => setMobileOpen(false)}
          >
            Sobre a Priz
          </Link>
          <Link
            href="/contato"
            className={activeItem === "contato" ? "is-active" : ""}
            onClick={() => setMobileOpen(false)}
          >
            Falar com a Priz
          </Link>
          <Link href="/#faq" onClick={() => setMobileOpen(false)}>
            Dúvidas
          </Link>
        </div>
        <div style={{ marginTop: 24, display: "flex", flexDirection: "column", gap: 10 }}>
          <Link
            className="mobile-drawer-cta button button-light"
            href="/contato"
            onClick={() => setMobileOpen(false)}
            style={{ marginTop: 0 }}
          >
            Falar com a Priz <span>↗</span>
          </Link>
          <a
            className="mobile-drawer-cta button button-quiet"
            href={instagram}
            target="_blank"
            rel="noreferrer"
            onClick={() => setMobileOpen(false)}
            style={{ marginTop: 0 }}
          >
            Instagram <span>↗</span>
          </a>
        </div>
      </nav>

      {/* ── Header idêntico à página principal ── */}
      <header className="nav">
        <Link href="/" className="brand" aria-label="Priz Solutions">
          <img src="/logo.png" alt="Priz" className="nav-logo" />
        </Link>
        <nav aria-label="Navegação Principal">
          {navItems.map(({ href, id, label }) => {
            const isActive = activeItem === id;
            return (
              <Link
                key={href}
                href={href}
                className={isActive ? "nav-link is-active" : "nav-link"}
              >
                {label}
              </Link>
            );
          })}
        </nav>
        <div className="nav-right">
          <Link className="nav-cta" href="/contato">
            Falar <span>↗</span>
          </Link>
          <button
            className="mobile-toggle"
            onClick={() => setMobileOpen(true)}
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
