"use client";

import { useState } from "react";
import Link from "next/link";

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

export default function Pricing() {
  const [selectedPriceCat, setSelectedPriceCat] = useState("sites");
  const [selectedPlanId, setSelectedPlanId] = useState("s1");
  const currentCategory = pricingCategories.find((c) => c.id === selectedPriceCat) ?? pricingCategories[0];

  return (
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
            onClick={() => {
              setSelectedPriceCat(cat.id);
              setSelectedPlanId(cat.plans[0].id);
            }}
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
  );
}
