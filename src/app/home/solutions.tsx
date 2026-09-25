"use client";

import { useState } from "react";
import Link from "next/link";

/* ── Soluções & Cosmologias ───────────────────────── */
const solutions = [
  {
    id: "sites",
    title: "Sites",
    tag: "3 Modalidades & Ajustes",
    cosmicType: "jupiter",
    text: "Criamos páginas diretas, sites institucionais completos ou projetos personalizados. Também fazemos manutenção e alterações mensais para quem precisa manter o site sempre atualizado.",
  },
  {
    id: "google",
    title: "Google Meu Negócio",
    tag: "Ajuste, Criação & Atualização",
    cosmicType: "network",
    text: "Criamos sua ficha do zero, arrumamos informações desatualizadas e mantemos fotos, horários e catálogo em dia para clientes encontrarem você no Google e no Maps.",
  },
  {
    id: "instagram",
    title: "Instagram",
    tag: "Identidade Visual & Gestão",
    cosmicType: "saturn",
    text: "Organizamos bio, destaques e paleta de cores do perfil. Também cuidamos da rotina da conta: criamos posts e reels, passamos ideias de stories e respondemos comentários e mensagens no direct.",
  },
  {
    id: "automacao",
    title: "Automações",
    tag: "Scripts, n8n & IA",
    cosmicType: "pulsar",
    text: "Automatizamos tarefas repetitivas usando scripts em código, fluxos no n8n e inteligência artificial. Conectamos formulários, planilhas, e-mails e WhatsApp para poupar trabalho manual.",
  },
  {
    id: "servidores",
    title: "Servidores",
    tag: "Web, Jogos, Self-Hosting & Hardening",
    cosmicType: "blackhole",
    text: "Subimos servidores web para hospedar aplicações, servidores dedicados de jogos (Minecraft, FiveM e outros), ambientes privados de self-hosting e fazemos hardening de segurança no Linux.",
  },
];

/* ── Visualizador Cósmico Dinâmico Refinado ─────────── */
export function CelestialViewer({ activeType }: { activeType: string }) {
  return (
    <div className={`celestial-viewport is-${activeType}`} aria-label="Visualizador cósmico">
      {/* Luz ambiente / Brilho estelar */}
      <div className="celestial-glow" />

      {/* Jatos polares relativísticos (Púlsar) */}
      <div className="celestial-jets">
        <div className="jet-beam jet-beam--up" />
        <div className="jet-beam jet-beam--down" />
      </div>

      {/* Disco denso de Saturno (anel largo com divisões) */}
      <div className="saturn-ring-disc" />

      {/* Disco de Acreção do Buraco Negro (estabilizado sem bug de escala) */}
      <div className="celestial-accretion">
        <div className="accretion-inner-ring" />
      </div>

      {/* Núcleo Central Dinâmico */}
      <div className="celestial-core">
        <div className="core-corona" />
        <div className="core-inner" />
        <div className="core-shadow" />
      </div>

      {/* Anéis orbitais móveis com transição contínua */}
      <div className="celestial-ring ring--1">
        <span className="orbit-body orbit-body--1" />
      </div>
      <div className="celestial-ring ring--2">
        <span className="orbit-body orbit-body--2" />
      </div>
      <div className="celestial-ring ring--3">
        <span className="orbit-body orbit-body--3" />
      </div>
      <div className="celestial-ring ring--4">
        <span className="orbit-body orbit-body--4" />
      </div>

      {/* Galáxia Espiral Autêntica (Andrômeda / Via Láctea) */}
      <div className="celestial-galaxy-arms">
        <div className="galaxy-disc-gradient" />
        <div className="galaxy-arm galaxy-arm--1">
          <span className="galaxy-star star--1" />
          <span className="galaxy-star star--2" />
          <span className="galaxy-star star--3" />
        </div>
        <div className="galaxy-arm galaxy-arm--2">
          <span className="galaxy-star star--4" />
          <span className="galaxy-star star--5" />
          <span className="galaxy-star star--6" />
        </div>
        <div className="galaxy-core-mist" />
      </div>

      {/* Sistema Binário de Pulsares: 2 pulsares no estilo do Hero, se circulando de frente em 3D sem círculos */}
      <div className="celestial-binary-pulsar">
        {/* Pulsar Alpha (Lighthouse 3D e estrobo idênticos ao do Hero) */}
        <div className="binary-pulsar-node node--alpha">
          <div className="binary-lighthouse lighthouse--alpha">
            <div className="pulsar-beam pulsar-beam--up" />
            <div className="pulsar-beam pulsar-beam--down" />
            <div className="pulsar-light-cone cone--up" />
            <div className="pulsar-light-cone cone--down" />
          </div>
          <div className="pulsar-core-sphere">
            <div className="pulsar-core-strobe" />
          </div>
        </div>

        {/* Pulsar Beta (Lighthouse 3D e estrobo idênticos ao do Hero) */}
        <div className="binary-pulsar-node node--beta">
          <div className="binary-lighthouse lighthouse--beta">
            <div className="pulsar-beam pulsar-beam--up" />
            <div className="pulsar-beam pulsar-beam--down" />
            <div className="pulsar-light-cone cone--up" />
            <div className="pulsar-light-cone cone--down" />
          </div>
          <div className="pulsar-core-sphere">
            <div className="pulsar-core-strobe" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Solutions() {
  const [selectedSolutionId, setSelectedSolutionId] = useState(solutions[0].id);
  const activeSolution = solutions.find((s) => s.id === selectedSolutionId) ?? solutions[0];

  return (
    <section id="solucoes" className="solutions">
      <div className="section-heading" data-reveal>
        <p className="eyebrow">Serviços</p>
        <h2>
          Escolha o que precisa <em>resolver agora.</em>
        </h2>
      </div>
      <div className="solution-explorer" data-reveal>
        {/* Lista tipográfica limpa */}
        <div className="solution-list" role="tablist" aria-label="Soluções da Priz">
          {solutions.map((item) => (
            <button
              key={item.id}
              role="tab"
              aria-selected={item.id === selectedSolutionId}
              className={item.id === selectedSolutionId ? "is-active" : ""}
              onMouseEnter={() => setSelectedSolutionId(item.id)}
              onFocus={() => setSelectedSolutionId(item.id)}
              onClick={() => setSelectedSolutionId(item.id)}
            >
              <span className="solution-dot" aria-hidden />
              <span className="solution-name">{item.title}</span>
            </button>
          ))}
        </div>

        {/* Estágio com visualizador cósmico que se transforma organicamente */}
        <article className="solution-stage">
          <div className="stage-content">
            <span className="stage-tag">{activeSolution.tag}</span>
            <h3>{activeSolution.title}</h3>
            <p>{activeSolution.text}</p>
            <Link className="arrow-link" href="/contato">
              Pedir uma proposta <span>↗</span>
            </Link>
          </div>

          {/* O sistema cósmico fluido */}
          <CelestialViewer activeType={activeSolution.cosmicType} />
        </article>
      </div>

      {/* Opção 4 Mobile: Acordeão Integrado (sem botões em grade) */}
      <div className="solutions-mobile-accordion" data-reveal>
        {solutions.map((item, idx) => {
          const isOpen = selectedSolutionId === item.id;
          return (
            <div
              key={item.id}
              className={`sol-drawer-item ${isOpen ? "is-open" : ""}`}
            >
              <button
                type="button"
                className="sol-drawer-header"
                onClick={() => setSelectedSolutionId(isOpen ? "" : item.id)}
                aria-expanded={isOpen}
              >
                <div className="sol-drawer-meta">
                  <span className="sol-drawer-num">0{idx + 1}.</span>
                  <strong className="sol-drawer-title">{item.title}</strong>
                </div>
                <span className="sol-drawer-icon" aria-hidden>
                  +
                </span>
              </button>

              <div className="sol-drawer-body">
                <div className="sol-drawer-inner">
                  <div className="sol-drawer-content">
                    <span className="stage-tag">{item.tag}</span>
                    <p>{item.text}</p>
                    <Link className="arrow-link" href="/contato">
                      Pedir uma proposta <span>↗</span>
                    </Link>
                  </div>
                  {isOpen && (
                    <div className="sol-drawer-celestial">
                      <CelestialViewer activeType={item.cosmicType} />
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
