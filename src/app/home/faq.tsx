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

export default function Faq() {
  return (
    <section id="faq" className="faq">
      <div className="section-heading" data-reveal>
        <p className="eyebrow">Dúvidas Frequentes</p>
        <h2>
          Perguntas que aparecem <em>logo no começo.</em>
        </h2>
      </div>
      <div className="faq-list" data-reveal>
        {faqs.map(([question, answer]) => (
          <details key={question} name="faq" className="faq-drawer-item">
            <summary className="faq-drawer-trigger">
              <span>{question}</span>
              <span className="faq-drawer-icon" aria-hidden>
                +
              </span>
            </summary>
            <p>{answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
