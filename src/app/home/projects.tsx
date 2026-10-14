"use client";

import { useState } from "react";
import { onTabKeyDown } from "./tab-keys";

/* ── Projetos ─────────────────────────────────────── */
const projects = [
  {
    name: "Caco Antiguidades",
    kind: "Loja de Antiguidades",
    url: "https://cacoantiguidades.vercel.app/",
    cleanUrl: "cacoantiguidades.vercel.app",
    description: "Catálogo online de antiguidades com contato direto pelo WhatsApp.",
  },
  {
    name: "Hard Reset Systems",
    kind: "Manutenção de Computadores",
    url: "https://hardresetsystems.vercel.app/",
    cleanUrl: "hardresetsystems.vercel.app",
    description: "Site institucional para empresa de Manutenção de Computadores.",
  },
];

export default function Projects() {
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  /* a prévia ao vivo só carrega quando a pessoa pede */
  const [livePreview, setLivePreview] = useState(false);
  const activeProject = projects[activeProjectIndex] ?? projects[0];

  return (
    <section id="projetos" className="projects">
      <div className="section-heading project-head" data-reveal>
        <div>
          <p className="eyebrow">Projetos no ar</p>
          <h2>
            Dois sites que você <em>pode abrir agora.</em>
          </h2>
        </div>
        <p>
          Cada projeto nasceu de uma demanda real. Veja a prévia ao vivo aqui ou abra o site numa nova aba.
        </p>
      </div>

      <div className="project-stage" data-reveal>
        {/* Abas simples e diretas */}
        <div className="project-tabs" role="tablist" aria-label="Selecione o projeto">
          {projects.map((project, idx) => {
            const isActive = activeProjectIndex === idx;
            return (
              <button
                key={project.name}
                role="tab"
                type="button"
                aria-selected={isActive}
                aria-controls="project-panel"
                tabIndex={isActive ? 0 : -1}
                className={`project-tab-btn ${isActive ? "is-active" : ""}`}
                onClick={() => {
                  setActiveProjectIndex(idx);
                  setLivePreview(false);
                }}
                onKeyDown={onTabKeyDown}
              >
                <span className="project-tab-num">0{idx + 1}.</span>
                <strong className="project-tab-name">{project.name}</strong>
                <span className="project-tab-kind">{project.kind}</span>
              </button>
            );
          })}
        </div>

        {/* Prévia direta do site (limpa, sem safari/firulas) */}
        <div className="project-stage-view swap-in" id="project-panel" role="tabpanel" key={activeProject.url}>
          <div className="project-preview-frame">
            {livePreview ? (
              <iframe src={activeProject.url} title={`Prévia do site ${activeProject.name}`} />
            ) : (
              <div className="preview-placeholder">
                <span>{activeProject.cleanUrl}</span>
                <button type="button" className="button button-quiet" onClick={() => setLivePreview(true)}>
                  Ver prévia ao vivo <span>↓</span>
                </button>
              </div>
            )}
          </div>

          {/* Informações limpas abaixo da prévia */}
          <div className="project-stage-info">
            <div className="project-stage-meta">
              <span className="project-stage-kind">{activeProject.kind}</span>
              <h3 className="project-stage-title">{activeProject.name}</h3>
              <p className="project-stage-desc">{activeProject.description}</p>
            </div>
            <a
              className="arrow-link"
              href={activeProject.url}
              target="_blank"
              rel="noreferrer"
            >
              Abrir site <span>↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
