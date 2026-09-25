"use client";

import { useEffect, useRef, useState } from "react";
import { CelestialViewer } from "./solutions";

/* ── Ciclo de Desenvolvimento (Processo) ───────────── */
const processStages = [
  {
    step: "01",
    stageName: "Diagnóstico",
    category: "Entendimento & Escopo",
    title: "Você explica sua necessidade",
    text: "Seja para criar ou ajustar um site, organizar seu Google Meu Negócio, cuidar do seu Instagram, automatizar rotinas ou subir um servidor. Mande áudios, referências ou conte sua dor: a gente traduz tudo em uma solução prática.",
    highlights: [
      "Atendimento direto e sem intermediários",
      "Você fala em português simples, a gente cuida da técnica",
      "Alinhamento rápido e sem compromisso",
    ],
  },
  {
    step: "02",
    stageName: "Proposta",
    category: "Planejamento & Prazos",
    title: "A gente monta o plano claro",
    text: "Enviamos uma proposta transparente com o escopo exato do serviço, cronograma e valores — seja para um projeto pontual ou para uma mensalidade de acompanhamento contínuo. Sem letras miúdas nem taxas surpresa.",
    highlights: [
      "Escopo detalhado sem surpresas futuras",
      "Cronograma e prazos realistas combinados antes",
      "Condições justas para serviços pontuais ou mensais",
    ],
  },
  {
    step: "03",
    stageName: "Homologação",
    category: "Validação & Ajustes",
    title: "Você acompanha e valida",
    text: "Apresentamos o trabalho antes de oficializar: a prévia navegável do site, a identidade visual do Instagram, os dados cadastrados no Google, o teste do fluxo de automação ou o ambiente do servidor. Você avalia e refinamos juntos.",
    highlights: [
      "Ambiente de testes e prévias para sua revisão",
      "Ajustes e refinamentos inclusos no escopo combinado",
      "Nada vai ao ar ou entra em produção sem o seu aval",
    ],
  },
  {
    step: "04",
    stageName: "Entrega",
    category: "Lançamento & Operação",
    title: "Publicamos, Ativamos & Entregamos",
    text: "Publicamos o site, ativamos a ficha no Google, iniciamos o cronograma do Instagram, ligamos as automações ou realizamos o deploy do servidor. Entregamos todos os acessos em suas mãos com suporte contínuo.",
    highlights: [
      "Entrega completa de acessos documentados em seu nome",
      "Solução no ar, testada e pronta para seus clientes",
      "Opção de acompanhamento mensal para manter tudo rodando liso",
    ],
  },
];

function CosmicEvolutionArena({ stepIndex }: { stepIndex: number }) {
  return (
    <div className={`process-cosmic-arena stage--${stepIndex}`} aria-hidden>
      {/* Retículo e eixos astronômicos */}
      <div className="arena-reticle">
        <div className="reticle-ring" />
        <div className="reticle-axis-h" />
        <div className="reticle-axis-v" />
      </div>

      {/* 01: Nebulosa Caótica e Instável */}
      <div className={`arena-entity entity--nebula ${stepIndex === 0 ? "is-active" : ""}`}>
        <div className="arena-nebula-glow" />
        <div className="arena-nebula-cloud cloud--1" />
        <div className="arena-nebula-cloud cloud--2" />
        <div className="arena-nebula-cloud cloud--3" />
        <div className="arena-nebula-particles">
          <span className="dust-particle p1" />
          <span className="dust-particle p2" />
          <span className="dust-particle p3" />
          <span className="dust-particle p4" />
        </div>
        <div className="arena-nebula-spark" />
      </div>

      {/* 02: Sistema Solar (Idêntico ao do Escolha o que precisa resolver) */}
      <div className={`arena-entity entity--viewer-solar ${stepIndex === 1 ? "is-active" : ""}`}>
        <CelestialViewer activeType="solar" />
      </div>

      {/* 03: Gigante Luminosa com a estrela pulsando */}
      <div className={`arena-entity entity--giant ${stepIndex === 2 ? "is-active" : ""}`}>
        <div className="arena-giant-shockwave wave--1" />
        <div className="arena-giant-shockwave wave--2" />
        <div className="arena-giant-envelope" />
        <div className="arena-giant-core" />
      </div>

      {/* 04: Buraco Negro Supermassivo (Idêntico ao do Escolha o que precisa resolver) */}
      <div className={`arena-entity entity--viewer-bh ${stepIndex === 3 ? "is-active" : ""}`}>
        <CelestialViewer activeType="blackhole" />
      </div>
    </div>
  );
}

export default function Process() {
  const processContainerRef = useRef<HTMLDivElement>(null);
  const [processProgress, setProcessProgress] = useState(0);
  const [activeProcessStep, setActiveProcessStep] = useState(0);

  /* Scroll lock / Scrollytelling para o ciclo de desenvolvimento */
  useEffect(() => {
    let frameId: number;

    const handleProcessScroll = () => {
      frameId = window.requestAnimationFrame(() => {
        const el = processContainerRef.current;
        if (!el) return;

        const rect = el.getBoundingClientRect();
        const total = el.offsetHeight - window.innerHeight;

        if (total > 0) {
          const scrolled = -rect.top;
          const progress = Math.max(0, Math.min(1, scrolled / total));
          setProcessProgress(progress);

          let step = 0;
          if (progress >= 0.75) {
            step = 3;
          } else if (progress >= 0.5) {
            step = 2;
          } else if (progress >= 0.25) {
            step = 1;
          } else {
            step = 0;
          }
          setActiveProcessStep(step);
        }
      });
    };

    window.addEventListener("scroll", handleProcessScroll, { passive: true });
    window.addEventListener("resize", handleProcessScroll, { passive: true });
    handleProcessScroll();

    return () => {
      window.removeEventListener("scroll", handleProcessScroll);
      window.removeEventListener("resize", handleProcessScroll);
      if (frameId) window.cancelAnimationFrame(frameId);
    };
  }, []);

  const scrollToProcessStep = (stepIdx: number) => {
    const el = processContainerRef.current;
    if (!el) return;
    const containerTop = el.getBoundingClientRect().top + window.scrollY;
    const total = el.offsetHeight - window.innerHeight;
    const targetProgress = (stepIdx + 0.5) / 4;
    const targetY = containerTop + targetProgress * total;
    window.scrollTo({ top: targetY, behavior: "smooth" });
  };

  return (
    <section id="processo" className="process-pinned-container" ref={processContainerRef}>
      <div className="process-sticky-track">
        {/* Top: Header e Barra de Navegação de Etapas */}
        <div className="process-track-header">
          <div className="section-heading process-heading">
            <p className="eyebrow">Ciclo de desenvolvimento</p>
            <h2>
              Você sabe o que acontece <em>em cada etapa.</em>
            </h2>
          </div>

          {/* Barra de Progresso Interativa com 4 Estágios */}
          <div className="process-progress-bar" role="tablist" aria-label="Etapas do ciclo estelar">
            <div
              className="process-progress-fill"
              style={{ width: `${Math.round(processProgress * 100)}%` }}
            />
            {processStages.map((stage, idx) => (
              <button
                key={stage.step}
                type="button"
                role="tab"
                aria-selected={activeProcessStep === idx}
                className={`process-step-tab ${activeProcessStep === idx ? "is-active" : ""} ${
                  activeProcessStep > idx ? "is-passed" : ""
                }`}
                onClick={() => scrollToProcessStep(idx)}
              >
                <span className="step-tab-num">{stage.step}</span>
                <span className="step-tab-name">{stage.stageName}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Centro: Arena Cósmica + Card da Etapa Ativa */}
        <div className="process-stage-theater">
          {/* Coluna Visual: Arena Cósmica */}
          <div className="process-arena-col">
            <CosmicEvolutionArena stepIndex={activeProcessStep} />
          </div>

          {/* Coluna Conteúdo: Informações Detalhadas com Transição Fluida */}
          <div className="process-details-col">
            <h3 className="process-card-title">{processStages[activeProcessStep].title}</h3>

            <p className="process-card-text">{processStages[activeProcessStep].text}</p>

            <ul className="process-highlights-list">
              {processStages[activeProcessStep].highlights.map((item, i) => (
                <li key={i}>
                  <span className="highlight-check">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
