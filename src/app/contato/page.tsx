import type { Metadata } from "next";
import { email, instagram, whatsapp } from "../contact";

export const metadata: Metadata = {
  title: "Falar com a Priz | Contato",
  description:
    "Escolha o melhor canal para conversar sobre o seu projeto: WhatsApp, Instagram ou E-mail.",
};

const contactChannels = [
  {
    id: "whatsapp",
    title: "WhatsApp",
    handle: "(48) 9635-6844",
    href: whatsapp,
    external: true,
    action: "Chamar no WhatsApp",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
      </svg>
    ),
  },
  {
    id: "instagram",
    title: "Instagram",
    handle: "@priz.oficial",
    href: instagram,
    external: true,
    action: "Mandar Direct",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    id: "email",
    title: "E-mail",
    handle: "PrizContato@proton.me",
    href: `mailto:${email}`,
    external: false,
    action: "Enviar E-mail",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
  },
];

export default function ContatoPage() {
  return (
    <main className="subpage-container linktree-container">
      <div className="subpage-header linktree-header">
        <p className="eyebrow">Falar com a Priz</p>
        <h1 className="subpage-title">Escolha por onde prefere falar.</h1>
        <p className="subpage-lead">
          Pode chamar no WhatsApp, mandar DM no Instagram ou enviar um e-mail. Respondemos direto por onde for melhor pra você.
        </p>
      </div>

      <div className="linktree-cards">
        {contactChannels.map((c) => (
          <a
            key={c.id}
            href={c.href}
            target={c.external ? "_blank" : undefined}
            rel={c.external ? "noreferrer" : undefined}
            className={`linktree-card linktree-card--${c.id}`}
          >
            <div className="linktree-card-icon">{c.icon}</div>
            <div className="linktree-card-content">
              <strong className="linktree-card-title">{c.title}</strong>
              <span className="linktree-card-handle">{c.handle}</span>
            </div>
            <div className="linktree-card-action">
              <span>{c.action}</span>
              <span className="linktree-arrow">↗</span>
            </div>
          </a>
        ))}
      </div>
    </main>
  );
}
