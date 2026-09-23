"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import RevealObserver from "./reveal-observer";

const whatsapp =
  "https://wa.me/554896356844?text=Ol%C3%A1%2C%20quero%20falar%20sobre%20uma%20solu%C3%A7%C3%A3o%20digital%20para%20meu%20projeto.";
const instagram = "https://www.instagram.com/priz.oficial/";
const email = "PrizContato@proton.me";

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

/* ── Preços por categoria ─────────────────────────── */
const pricingCategories = [
  {
    id: "sites",
    label: "Sites",
    plans: [
      {
        id: "s1",
        eyebrow: "Página Única",
        name: "Landing Page Direta",
        price: "R$ 380",
        note: "+ domínio e hospedagem",
        deadline: "3 a 5 dias úteis",
        items: [
          "Página única direta ao ponto",
          "Adaptada para celular e computador",
          "Botão de contato direto no WhatsApp",
          "Publicação e domínio configurados",
        ],
        cta: "Quero uma landing page",
      },
      {
        id: "s2",
        eyebrow: "Institucional",
        name: "Site Institucional Completo",
        price: "R$ 750",
        note: "+ domínio e hospedagem",
        deadline: "7 a 12 dias úteis",
        items: [
          "Múltiplas páginas estruturadas (Início, Sobre, Serviços, Contato)",
          "Espaço para catálogo, fotos e diferenciais",
          "Integração de contato e rotas no mapa",
          "Configuração básica para aparecer no Google",
        ],
        cta: "Quero um site completo",
      },
      {
        id: "s3",
        eyebrow: "Personalizado",
        name: "Projeto Sob Medida",
        price: "A combinar",
        note: "conforme escopo",
        deadline: "A combinar",
        items: [
          "Recursos e regras específicas para o seu caso",
          "Integrações com APIs e plataformas externas",
          "Layout desenhado para o seu negócio",
          "Escopo e orçamento alinhados antes de começar",
        ],
        cta: "Pedir orçamento sob medida",
      },
      {
        id: "s4",
        eyebrow: "Mensalidade de suporte",
        name: "Serviço de Ajustes & Manutenção",
        price: "R$ 140/mês",
        note: "mensalidade flexível",
        deadline: "Sob demanda (atendimento ágil)",
        items: [
          "Alterações de textos, fotos e novos banners",
          "Inclusão de novos produtos, serviços ou avisos",
          "Monitoramento contínuo de estabilidade e segurança",
          "Suporte técnico direto no WhatsApp",
        ],
        cta: "Contratar manutenção de site",
      },
    ],
  },
  {
    id: "google",
    label: "Google",
    plans: [
      {
        id: "g1",
        eyebrow: "Criação & Ajuste",
        name: "Google Meu Negócio Completo",
        price: "R$ 150",
        note: "pagamento único",
        deadline: "2 a 3 dias úteis",
        items: [
          "Criação ou recuperação da ficha no Google Meu Negócio",
          "Fotos, logotipo, capa e endereço organizados",
          "Catálogo de serviços e horários cadastrados",
          "Configuração de rota no Maps e botão de WhatsApp ou ligação",
        ],
        cta: "Ajustar meu Google",
      },
      {
        id: "g2",
        eyebrow: "Acompanhamento",
        name: "Atualização Contínua do Perfil",
        price: "R$ 70/mês",
        note: "mensalidade flexível",
        deadline: "Acompanhamento contínuo",
        items: [
          "Atualização periódica de fotos, posts e novidades",
          "Ajuste de horários em feriados e datas comemorativas",
          "Orientação e suporte para avaliações de clientes",
          "Ajustes rápidos sob demanda pelo WhatsApp",
        ],
        cta: "Manter Google atualizado",
      },
    ],
  },
  {
    id: "instagram",
    label: "Instagram",
    plans: [
      {
        id: "i1",
        eyebrow: "Identidade & Organização",
        name: "Ajuste no Perfil & Destaques",
        price: "R$ 150",
        note: "pagamento único",
        deadline: "2 a 4 dias úteis",
        items: [
          "Bio profissional estruturada e link de contato",
          "Capas padronizadas para os destaques",
          "Paleta de cores e padrão visual do feed",
          "Organização dos posts existentes",
        ],
        cta: "Ajustar meu Instagram",
      },
      {
        id: "i2",
        eyebrow: "Gestão Mensal",
        name: "Cuidar do Instagram Completo",
        price: "R$ 300/mês",
        note: "mensalidade",
        deadline: "Planejamento e publicação contínua",
        items: [
          "Criação de posts e reels para o feed",
          "Ideias e roteiros práticos para stories",
          "Respostas a mensagens no direct e comentários",
          "Alinhamento contínuo e suporte direto",
        ],
        cta: "Cuidar do meu Instagram",
      },
    ],
  },
  {
    id: "automacao",
    label: "Automação",
    plans: [
      {
        id: "a1",
        eyebrow: "Ações Repetitivas",
        name: "Automação com Scripts & n8n",
        price: "R$ 150",
        note: "por fluxo / pagamento único",
        deadline: "3 a 5 dias úteis",
        items: [
          "Automação de rotinas manuais e tarefas repetitivas",
          "Conexão entre formulários, planilhas e e-mails",
          "Fluxos criados no n8n ou scripts dedicados",
          "Notificações automáticas no WhatsApp ou Telegram",
        ],
        cta: "Automatizar processos",
      },
      {
        id: "a2",
        eyebrow: "Inteligência Artificial",
        name: "Fluxo Inteligente com IA",
        price: "R$ 300 a R$ 800",
        note: "conforme complexidade",
        deadline: "5 a 10 dias úteis",
        items: [
          "Respostas automáticas e triagem com IA",
          "Integração entre múltiplos sistemas via APIs",
          "Automação de atendimento inicial ou relatórios",
          "Testes práticos e documentação simples de uso",
        ],
        cta: "Criar automação com IA",
      },
    ],
  },
  {
    id: "servidores",
    label: "Servidores",
    plans: [
      {
        id: "sv1",
        eyebrow: "Hospedagem Web",
        name: "Criação de Servidor Web",
        price: "R$ 150/mês",
        note: "mensal",
        deadline: "1 a 2 dias úteis",
        items: [
          "Instalação de VPS Linux (Nginx ou Docker)",
          "Certificado SSL com renovação automática e HTTPS",
          "Rotinas de backup semanais com retenção",
          "Deploy da sua aplicação e suporte técnico direto",
        ],
        cta: "Configurar servidor web",
      },
      {
        id: "sv2",
        eyebrow: "Jogos & Comunidades",
        name: "Servidor de Jogos",
        price: "R$ 200/mês",
        note: "mensal",
        deadline: "1 a 2 dias úteis",
        items: [
          "Configuração de servidor dedicado (Minecraft, FiveM, Rust, etc.)",
          "Painel web para gerenciar mods e reinicializações",
          "Otimização de memória RAM para menor latência",
          "Proteção contra ataques e backups automáticos",
        ],
        cta: "Criar servidor de jogos",
      },
      {
        id: "sv3",
        eyebrow: "Segurança & Privacidade",
        name: "Self-Hosting & Hardening",
        price: "R$ 250/mês",
        note: "infraestrutura dedicada ou hardening",
        deadline: "3 a 5 dias úteis",
        items: [
          "Instalação para Self-Hosting (Nextcloud, Vaultwarden, etc.)",
          "Hardening de segurança: firewall UFW, fail2ban e portas protegidas",
          "Acesso restrito por chaves SSH e isolamento de containers",
          "Backups diários automatizados e monitoramento contínuo",
        ],
        cta: "Montar self-hosting seguro",
      },
    ],
  },
];

/* ── FAQ ──────────────────────────────────────────── */
const faqs: [string, string][] = [
  [
    "Como funciona o pagamento?",
    "Para projetos fechados (criação de sites, arrumação de perfil, fichas do Google ou fluxos de automação), trabalhamos com 50% de entrada no início e 50% apenas na aprovação final. Para serviços recorrentes (cuidar do Instagram, manutenção de sites, atualizações do Google ou servidores), trabalhamos com mensalidades simples e transparentes.",
  ],
  [
    "O que garante a segurança e tranquilidade do meu projeto?",
    "Transparência total e risco compartilhado: em projetos fechados você só paga a segunda metade (50%) após aprovar tudo pronto. Além disso, você tem período de ajustes finos após a entrega, todo domínio ou conta fica 100% no seu nome, e nossos serviços mensais não têm fidelidade forçada ou multas rescisórias.",
  ],
  [
    "Posso pedir ajustes durante o processo?",
    "Sim, com certeza. Seja no design do site, nas artes e legendas do Instagram, nas informações do Google ou na lógica de uma automação, você acompanha as prévias e refinamos cada detalhe até a sua aprovação final.",
  ],
  [
    "Vocês cuidam do domínio, contas e hospedagem?",
    "Sim. Ajudamos a registrar domínios, configurar VPS Linux, conectar contas do Google/Meta e ferramentas de automação. Sempre deixamos tudo no seu próprio nome e CPF/CNPJ, garantindo que você tenha controle total dos seus acessos.",
  ],
  [
    "O que está incluso nos serviços mensais e suporte?",
    "Depende da sua necessidade: no Instagram, cuidamos de posts, reels, stories e direct; no site e Google, mantemos informações e novidades em dia; em servidores, garantimos estabilidade, backups e segurança. Tudo com suporte ágil direto no WhatsApp, direct ou e-mail.",
  ],
];

/* ── Visualizador Cósmico Dinâmico Refinado ─────────── */
function CelestialViewer({ activeType }: { activeType: string }) {
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

/* ── Mobile Drawer ─────────────────────────────────── */
function MobileDrawer({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <>
      <div className={`mobile-backdrop ${open ? "is-open" : ""}`} onClick={onClose} aria-hidden />
      <nav className={`mobile-drawer ${open ? "is-open" : ""}`} aria-label="Menu mobile">
        <button className="mobile-close" onClick={onClose} aria-label="Fechar menu">×</button>
        <div className="mobile-drawer-links">
          <a href="#solucoes" onClick={onClose}>Serviços</a>
          <a href="#projetos" onClick={onClose}>Projetos</a>
          <a href="#precos" onClick={onClose}>Preços</a>
          <a href="#processo" onClick={onClose}>Processo</a>
          <Link href="/sobre" onClick={onClose}>Sobre a Priz</Link>
          <Link href="/contato" onClick={onClose}>Falar com a Priz</Link>
          <a href="#faq" onClick={onClose}>Dúvidas</a>
        </div>
        <div style={{ marginTop: 24, display: "flex", flexDirection: "column", gap: 10 }}>
          <Link className="mobile-drawer-cta button button-light" href="/contato" onClick={onClose} style={{ marginTop: 0 }}>
            Falar com a Priz <span>↗</span>
          </Link>
          <a className="mobile-drawer-cta button button-quiet" href={instagram} target="_blank" rel="noreferrer" onClick={onClose} style={{ marginTop: 0 }}>
            Instagram <span>↗</span>
          </a>
        </div>
      </nav>
    </>
  );
}

/* ── Página Principal ──────────────────────────────── */
export default function Home() {
  const [selectedSolutionId, setSelectedSolutionId] = useState(solutions[0].id);
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const [selectedPriceCat, setSelectedPriceCat] = useState("sites");
  const [selectedPlanId, setSelectedPlanId] = useState("s1");
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const processContainerRef = useRef<HTMLDivElement>(null);
  const [processProgress, setProcessProgress] = useState(0);
  const [activeProcessStep, setActiveProcessStep] = useState(0);

  const activeSolution = solutions.find((s) => s.id === selectedSolutionId) ?? solutions[0];
  const activeProject = projects[activeProjectIndex] ?? projects[0];
  const currentCategory = pricingCategories.find((c) => c.id === selectedPriceCat) ?? pricingCategories[0];

  /* Trocar categoria de preço resetando o plano ativo para o primeiro da categoria */
  const handleSwitchPriceCategory = (id: string) => {
    setSelectedPriceCat(id);
    const cat = pricingCategories.find((c) => c.id === id);
    if (cat && cat.plans.length > 0) {
      setSelectedPlanId(cat.plans[0].id);
    }
  };

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

  /* Monitorar seção ativa na rolagem */
  useEffect(() => {
    const ids = ["solucoes", "projetos", "precos", "processo", "faq", "contato"];
    const sections = ids.map((id) => document.getElementById(id)).filter((s): s is HTMLElement => Boolean(s));
    const onScroll = () => {
      const current = sections.findLast((s) => s.offsetTop - window.innerHeight * 0.4 <= window.scrollY);
      setActiveSection(current?.id ?? "");
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="priz">
      <RevealObserver />
      <div className="grain" aria-hidden />
      <MobileDrawer open={mobileOpen} onClose={() => setMobileOpen(false)} />

      {/* ── NAV ── */}
      <header className="nav">
        <a className="brand" href="#top" aria-label="Priz Solutions">
          <img src="/logo.png" alt="Priz" className="nav-logo" />
        </a>
        <nav aria-label="Navegação Principal">
          {[
            { href: "#solucoes", label: "Serviços" },
            { href: "#projetos", label: "Projetos" },
            { href: "#precos",   label: "Preços" },
            { href: "#processo", label: "Processo" },
            { href: "/sobre",    label: "Sobre" },
          ].map(({ href, label }) =>
            href.startsWith("#") ? (
              <a
                key={href}
                href={href}
                className={activeSection === href.slice(1) ? "nav-link is-active" : "nav-link"}
              >
                {label}
              </a>
            ) : (
              <Link key={href} href={href} className="nav-link">
                {label}
              </Link>
            )
          )}
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

      <main id="top">
        {/* ── HERO COM PÚLSAR GIRANDO E FEIXES RELATIVÍSTICOS ── */}
        <section className="hero">
          {/* Cenário Cósmico de Fundo com Púlsar Relativístico em 3D */}
          <div className="hero-cosmos" aria-hidden>
            <div className="hero-nebula-glow" />

            {/* O Púlsar de Fundo com Feixes de Radiação em Rotação Contínua */}
            <div className="hero-pulsar-system">
              <div className="hero-pulsar-lighthouse">
                <div className="pulsar-beam pulsar-beam--up" />
                <div className="pulsar-beam pulsar-beam--down" />
                <div className="pulsar-light-cone cone--up" />
                <div className="pulsar-light-cone cone--down" />
              </div>
              <div className="pulsar-magnetic-loops">
                <div className="magnetic-loop loop--1" />
                <div className="magnetic-loop loop--2" />
              </div>
              <div className="pulsar-core-sphere">
                <div className="pulsar-core-strobe" />
              </div>
            </div>

            <div className="hero-orbit-arcs">
              <div className="hero-arc arc--1" />
              <div className="hero-arc arc--2" />
            </div>
            <div className="hero-stars">
              <span className="star-dot dot--1" />
              <span className="star-dot dot--2" />
              <span className="star-dot dot--3" />
              <span className="star-dot dot--4" />
            </div>
          </div>

          <div className="hero-copy" data-reveal>
            <h1>
              Seu projeto precisa de um{" "}
              <span className="light-word">lugar na internet.</span>
            </h1>
            <p className="hero-text">
              A Priz resolve a presença digital e a parte técnica: criação e ajustes de sites, Google
              Meu Negócio, gestão de Instagram, automações e servidores, para você focar no que faz o
              seu negócio acontecer.
            </p>

            <div className="hero-actions">
              <Link
                className="button button-light is-highlighted"
                href="/contato"
              >
                Falar sobre meu projeto <span>↗</span>
              </Link>
              <a className="button button-quiet" href="#solucoes">
                Conhecer serviços <span>↓</span>
              </a>
            </div>
          </div>

          <div className="hero-foot" data-reveal>
            <span>Para pequenos negócios, comunidades e projetos independentes.</span>
            <a href="#processo">
              Entenda o processo <b>↓</b>
            </a>
          </div>
        </section>

        {/* ── SERVIÇOS & SISTEMAS CÓSMICOS REFINADOS ── */}
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

        {/* ── PROJETOS NO AR ── */}
        <section id="projetos" className="projects">
          <div className="section-heading project-head" data-reveal>
            <div>
              <p className="eyebrow">Projetos no ar</p>
              <h2>
                Dois sites que você <em>pode abrir agora.</em>
              </h2>
            </div>
            <p>
              Cada projeto nasceu de uma demanda real. Clique na prévia para interagir com o site direto na internet.
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
                    className={`project-tab-btn ${isActive ? "is-active" : ""}`}
                    onClick={() => setActiveProjectIndex(idx)}
                  >
                    <span className="project-tab-num">0{idx + 1}.</span>
                    <strong className="project-tab-name">{project.name}</strong>
                    <span className="project-tab-kind">{project.kind}</span>
                  </button>
                );
              })}
            </div>

            {/* Prévia direta do site (limpa, sem safari/firulas) */}
            <div className="project-stage-view">
              <a
                className="project-preview-frame"
                href={activeProject.url}
                target="_blank"
                rel="noreferrer"
                aria-label={`Abrir ${activeProject.name}`}
              >
                <iframe
                  key={activeProject.url}
                  src={activeProject.url}
                  title={`Prévia do site ${activeProject.name}`}
                  loading="lazy"
                />
                <div className="preview-cover">
                  <span>Abrir site oficial ↗</span>
                </div>
              </a>

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

        {/* ── PREÇOS COM ANIMAÇÃO ESTILO GAVETA (COMO O FAQ) ── */}
        <section id="precos" className="pricing">
          <div className="section-heading" data-reveal>
            <p className="eyebrow">Valores transparentes</p>
            <h2>
              Quanto custa <em>o que você precisa.</em>
            </h2>
          </div>

          {/* Abas de categoria de serviços */}
          <div className="pricing-cats" data-reveal>
            {pricingCategories.map((cat) => (
              <button
                key={cat.id}
                className={`pricing-cat-btn ${selectedPriceCat === cat.id ? "is-active" : ""}`}
                onClick={() => handleSwitchPriceCategory(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Lista de planos expansíveis com efeito gaveta */}
          <div className="pricing-drawers" data-reveal>
            {currentCategory.plans.map((item) => {
              const isOpen = selectedPlanId === item.id;
              return (
                <div
                  key={item.id}
                  className={`plan-drawer-item ${isOpen ? "is-open" : ""}`}
                >
                  <button
                    type="button"
                    className="plan-drawer-header"
                    onClick={() => setSelectedPlanId(isOpen ? "" : item.id)}
                    aria-expanded={isOpen}
                  >
                    <div className="plan-drawer-meta">
                      <span className="plan-drawer-eyebrow">{item.eyebrow}</span>
                      <strong className="plan-drawer-name">{item.name}</strong>
                    </div>
                    <div className="plan-drawer-price-col">
                      <span className="plan-drawer-price">{item.price}</span>
                      <span className="plan-drawer-icon" aria-hidden>
                        +
                      </span>
                    </div>
                  </button>

                  <div className="plan-drawer-body">
                    <div className="plan-drawer-inner">
                      <div className="plan-drawer-content">
                        <div className="plan-drawer-details">
                          <p className="plan-drawer-note">{item.note}</p>
                          <p className="plan-drawer-deadline">
                            Prazo estimado: {item.deadline}
                          </p>
                          <ul className="plan-drawer-items">
                            {item.items.map((it) => (
                              <li key={it}>
                                <span>✓</span> {it}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <Link
                          className="button button-light plan-drawer-cta"
                          href="/contato"
                        >
                          {item.cta} <span>↗</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <p className="pricing-disclaimer" data-reveal>
            Os valores acima são referências para início de conversa. O orçamento final depende do
            escopo e do prazo combinados antes de iniciar o trabalho.
          </p>
        </section>

        {/* ── PROCESSO COM CICLO DE VIDA ESTELAR (SCROLL LOCK / PINNED) ── */}
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

        {/* ── SUPORTE / MENSALIDADE ── */}
        <section className="support" data-reveal>
          <div>
            <p className="eyebrow">Acompanhamento contínuo</p>
            <h2>
              Quer manter alguém <em>cuidando disso?</em>
            </h2>
          </div>
          <p>
            Se não quiser cuidar dessas tarefas no dia a dia, a Priz assume essa rotina:
            publicações e stories no Instagram, atualizações no site e no Google, monitoramento de
            servidores e suporte direto por WhatsApp, direct ou e-mail.
          </p>
          <Link className="arrow-link" href="/contato">
            Conversar sobre acompanhamento mensal <span>↗</span>
          </Link>
        </section>

        {/* ── NÃO TENHO CERTEZA ── */}
        <section className="not-sure" data-reveal>
          <div className="not-sure-inner">
            <p className="eyebrow">Dúvidas sobre por onde começar</p>
            <h2>
              Ainda não sabe o que precisa? <em>Tudo bem.</em>
            </h2>
            <p>
              Mande uma mensagem explicando o que você faz e o que gostaria de organizar ou
              melhorar. Seja por WhatsApp, direct no Instagram ou e-mail, respondemos com uma
              opinião prática sobre o que vale a pena fazer primeiro.
            </p>
            <Link className="button button-quiet" href="/contato">
              Tirar uma dúvida <span>↗</span>
            </Link>
          </div>
        </section>

        {/* ── FAQ COM GAVETA SUAVE ── */}
        <section id="faq" className="faq">
          <div className="section-heading" data-reveal>
            <p className="eyebrow">Dúvidas Frequentes</p>
            <h2>
              Perguntas que aparecem <em>logo no começo.</em>
            </h2>
          </div>
          <div className="faq-list" data-reveal>
            {faqs.map(([question, answer], index) => {
              const isOpen = openFaq === index;
              return (
                <div key={question} className={`faq-drawer-item ${isOpen ? "is-open" : ""}`}>
                  <button
                    type="button"
                    className="faq-drawer-trigger"
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    aria-expanded={isOpen}
                  >
                    <span>{question}</span>
                    <span className="faq-drawer-icon" aria-hidden>
                      +
                    </span>
                  </button>
                  <div className="faq-drawer-body">
                    <div className="faq-drawer-inner">
                      <p>{answer}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ── CONTATO FINAL ── */}
        <section id="contato" className="closing" data-reveal>
          <p className="eyebrow">Próximo Passo</p>
          <h2>
            Vamos colocar o seu projeto <em>no ar?</em>
          </h2>
          <p>
            Escolha o canal que preferir: WhatsApp, direct no Instagram ou e-mail. A gente responde
            rápido com as orientações certas, sem formulários longos nem enrolação.
          </p>
          <Link className="button button-light" href="/contato">
            Falar com a Priz <span>↗</span>
          </Link>
        </section>
      </main>

      {/* ── FOOTER ── */}
      <footer className="footer">
        <div className="footer-top">
          <img src="/logo.png" alt="Priz" className="footer-logo" />
        </div>
        <div className="footer-links">
          <div>
            <b>Explorar</b>
            <a href="#solucoes">Serviços</a>
            <a href="#projetos">Projetos</a>
            <a href="#precos">Valores</a>
            <a href="#processo">Como funciona</a>
            <Link href="/sobre">Sobre a Priz</Link>
            <Link href="/contato">Falar com a Priz</Link>
            <Link href="/termos">Termos & Privacidade</Link>
          </div>
          <div>
            <b>Falar com a Priz</b>
            <Link href="/contato">Página de Contatos ↗</Link>
            <a href={whatsapp} target="_blank" rel="noreferrer">
              WhatsApp ↗
            </a>
            <a href={instagram} target="_blank" rel="noreferrer">
              Instagram ↗
            </a>
            <a href={`mailto:${email}`}>{email}</a>
            <span>Atendimento remoto para todo o Brasil</span>
          </div>
          <div>
            <b>Por aqui</b>
            <a href="#faq">Perguntas frequentes</a>
            <a href="#top">Voltar ao topo ↑</a>
            <span>Florianópolis · SC</span>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Priz Solutions. Todos os direitos reservados.</span>
          <span>Presença digital & infraestrutura para projetos independentes.</span>
        </div>
      </footer>
    </div>
  );
}
