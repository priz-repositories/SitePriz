import type { Metadata } from "next";
import Link from "next/link";
import { email, instagram } from "../contact";

export const metadata: Metadata = {
  title: "Termos de Serviço & Privacidade",
  alternates: { canonical: "/termos" },
  description:
    "Transparência, modelo de pagamento seguro e respeito total aos seus dados e acessos.",
};

const whatsapp =
  "https://wa.me/554896356844?text=Ol%C3%A1%2C%20estou%20vendo%20os%20termos%20da%20Priz%20e%20gostaria%20de%20tirar%20uma%20d%C3%BAvida.";

export default function TermosPage() {
  return (
    <main className="subpage-container">
      <div className="subpage-header">
        <p className="eyebrow">Transparência & Segurança</p>
        <h1 className="subpage-title">Termos de Serviço & Privacidade</h1>
        <p className="subpage-lead">
          Escopo combinado por escrito, pagamento seguro e tudo que for criado 100% no seu nome.
        </p>
      </div>

      <div className="subpage-body">
        {/* Seção 1 */}
        <section className="subpage-section">
          <h2>1. Como atuamos</h2>
          <p>
            A Priz é um estúdio independente de desenvolvimento e presença digital em
            Florianópolis (SC). Atendemos negócios, autônomos e criadores de forma remota em
            qualquer lugar do Brasil.
          </p>
          <p>
            Criamos e ajustamos sites, fichas no Google Meu Negócio, perfis no Instagram,
            automações e servidores Linux. Sem intermediários: você fala direto com quem
            executa o trabalho.
          </p>
        </section>

        {/* Seção 2 */}
        <section className="subpage-section">
          <h2>2. Pagamentos e prazos</h2>
          <div className="subpage-card">
            <h3>Serviços pontuais (Sites, perfis, Google e automações)</h3>
            <p>
              Modelo <strong>50/50</strong>: 50% de entrada para iniciar o trabalho e os 50%
              restantes só depois que você testar e aprovar tudo pronto.
            </p>
          </div>
          <div className="subpage-card">
            <h3>Serviços mensais (Instagram, manutenção e servidores)</h3>
            <p>
              Mensalidade fixa a cada 30 dias. <strong>Sem fidelidade e sem multa:</strong> você
              pode cancelar ou pausar no fim de qualquer ciclo avisando no WhatsApp.
            </p>
          </div>
        </section>

        {/* Seção 3 */}
        <section className="subpage-section">
          <h2>3. Contas e acessos (Zero Lock-in)</h2>
          <p>
            Você nunca fica dependente da gente para manter o seu negócio funcionando:
          </p>
          <ul className="subpage-list">
            <li>
              <span className="check">✓</span>
              <span>
                <strong>Titularidade sua:</strong> Domínios, servidores, Google e redes sociais
                são registrados no seu nome e CPF/CNPJ.
              </span>
            </li>
            <li>
              <span className="check">✓</span>
              <span>
                <strong>Acessos entregues:</strong> Finalizado o projeto, passamos todas as senhas,
                arquivos e acessos administrativos.
              </span>
            </li>
            <li>
              <span className="check">✓</span>
              <span>
                <strong>Sem taxa de saída:</strong> Não cobramos nada para liberar arquivos ou
                migrar serviços se você preferir cuidar por conta própria depois.
              </span>
            </li>
          </ul>
        </section>

        {/* Seção 4 */}
        <section className="subpage-section">
          <h2>4. Aprovação e ajustes</h2>
          <p>
            Nada vai ao ar sem o seu aval. Mostramos prévias navegáveis de sites, artes de posts
            ou fluxos de teste de automações antes de publicar.
          </p>
          <p>
            Os ajustes combinados no início estão inclusos até o alinhamento final. Novas funções
            que fujam do combinado original são orçadas à parte com você antes de fazer.
          </p>
        </section>

        {/* Seção 5 */}
        <section className="subpage-section">
          <h2>5. Privacidade e sigilo</h2>
          <ul className="subpage-list">
            <li>
              <span className="check">✓</span>
              <span>
                <strong>Sigilo:</strong> Dados do seu negócio, rotinas internas e acessos não são
                compartilhados com terceiros.
              </span>
            </li>
            <li>
              <span className="check">✓</span>
              <span>
                <strong>Uso exclusivo:</strong> Informações recebidas servem unicamente para
                executar o serviço contratado.
              </span>
            </li>
            <li>
              <span className="check">✓</span>
              <span>
                <strong>Senhas temporárias:</strong> Se precisar passar acesso de hospedagem ou
                ferramentas para configuração, orientamos a troca da senha logo após a entrega.
              </span>
            </li>
          </ul>
        </section>

        {/* Seção 6 */}
        <section className="subpage-section">
          <h2>6. Canais oficiais</h2>
          <p>
            Nosso contato direto para dúvidas, orçamentos e suporte:
          </p>
          <ul className="subpage-list">
            <li>
              <span className="check">→</span>
              <span>
                <strong>WhatsApp:</strong>{" "}
                <a href={whatsapp} target="_blank" rel="noreferrer" style={{ color: "var(--hi)" }}>
                  (48) 9635-6844
                </a>
              </span>
            </li>
            <li>
              <span className="check">→</span>
              <span>
                <strong>E-mail:</strong>{" "}
                <a href={`mailto:${email}`} style={{ color: "var(--hi)" }}>
                  {email}
                </a>
              </span>
            </li>
            <li>
              <span className="check">→</span>
              <span>
                <strong>Instagram:</strong>{" "}
                <a href={instagram} target="_blank" rel="noreferrer" style={{ color: "var(--hi)" }}>
                  @priz.oficial
                </a>
              </span>
            </li>
          </ul>
        </section>

        <div className="subpage-cta-box">
          <h3>Quer iniciar um projeto com segurança?</h3>
          <p>
            Chame pelo WhatsApp, Instagram ou e-mail. A gente tira suas dúvidas e alinha o escopo antes de fechar.
          </p>
          <Link className="button button-light" href="/contato">
            Falar com a Priz <span>↗</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
