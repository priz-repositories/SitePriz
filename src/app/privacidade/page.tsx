import type { Metadata } from "next";
import Link from "next/link";
import { email } from "../contact";
import { CookiePrefsButton } from "../cookie-consent";

export const metadata: Metadata = {
  title: "Política de Privacidade e Cookies",
  alternates: { canonical: "/privacidade" },
  description:
    "Quais dados a Priz coleta, por que, por quanto tempo e como você controla os cookies do site, de acordo com a LGPD.",
};

const cookies: [string, string, string][] = [
  ["_ga", "Distingue visitantes de forma anônima para contar acessos.", "2 anos"],
  ["_ga_4NY9EBWC3J", "Mantém o estado da sessão para medir páginas vistas e tempo de visita.", "2 anos"],
];

export default function PrivacidadePage() {
  return (
    <main className="subpage-container">
      <div className="subpage-header">
        <p className="eyebrow">LGPD · Lei 13.709/2018</p>
        <h1 className="subpage-title">Privacidade & Cookies</h1>
        <p className="subpage-lead">
          O que coletamos, por que coletamos e como você controla tudo isso. Atualizada em 14 de
          outubro de 2026.
        </p>
      </div>

      <div className="subpage-body">
        <section className="subpage-section">
          <h2>1. Quem cuida dos seus dados</h2>
          <p>
            A Priz, estúdio de presença digital e infraestrutura de Florianópolis (SC), é a
            controladora dos dados tratados neste site. Para qualquer assunto sobre privacidade,
            fale com a gente pelo e-mail{" "}
            <a href={`mailto:${email}`} style={{ color: "var(--hi)" }}>
              {email}
            </a>
            , que funciona como canal de atendimento ao titular.
          </p>
        </section>

        <section className="subpage-section">
          <h2>2. Quais dados coletamos</h2>
          <div className="subpage-card">
            <h3>Quando você navega no site (só se aceitar os cookies)</h3>
            <p>
              Com o seu consentimento, o Google Analytics registra informações de uso: páginas
              visitadas, tempo de visita, tipo de dispositivo e navegador, cidade ou região
              aproximada e de onde você chegou (busca, Instagram, link direto). Também contamos
              cliques nos botões de WhatsApp, e-mail e Instagram. Não usamos esses dados para
              anúncios nem para identificar você pessoalmente.
            </p>
          </div>
          <div className="subpage-card">
            <h3>Quando você fala com a gente</h3>
            <p>
              O site não tem formulário. Se você nos chama por WhatsApp, e-mail ou Instagram,
              recebemos o que você enviar: nome, telefone ou e-mail e o conteúdo da conversa.
              Usamos isso apenas para responder, fazer orçamentos e prestar o serviço.
            </p>
          </div>
        </section>

        <section className="subpage-section">
          <h2>3. Por que podemos tratar esses dados</h2>
          <ul className="subpage-list">
            <li>
              <span className="check">✓</span>
              <span>
                <strong>Estatísticas do site:</strong> seu consentimento (art. 7º, I da LGPD), que
                você pode retirar a qualquer momento.
              </span>
            </li>
            <li>
              <span className="check">✓</span>
              <span>
                <strong>Conversas e orçamentos:</strong> procedimentos preliminares e execução de
                contrato a seu pedido (art. 7º, V).
              </span>
            </li>
            <li>
              <span className="check">✓</span>
              <span>
                <strong>Notas e registros fiscais:</strong> cumprimento de obrigação legal (art.
                7º, II).
              </span>
            </li>
          </ul>
        </section>

        <section className="subpage-section">
          <h2>4. Cookies</h2>
          <p>
            Cookies são pequenos arquivos que o site guarda no seu navegador. Usamos apenas os
            cookies de análise do Google Analytics, e eles só são criados depois que você clica em
            &quot;Aceitar&quot;. Se você recusar, o Analytics nem é carregado. Sua escolha fica
            salva no próprio navegador, sem cookie.
          </p>
          <div className="cookie-table" role="table" aria-label="Cookies usados no site">
            <div role="row" className="cookie-row cookie-row-head">
              <span role="columnheader">Cookie</span>
              <span role="columnheader">Para que serve</span>
              <span role="columnheader">Duração</span>
            </div>
            {cookies.map(([name, purpose, duration]) => (
              <div role="row" className="cookie-row" key={name}>
                <span role="cell">
                  <code>{name}</code>
                </span>
                <span role="cell">{purpose}</span>
                <span role="cell">{duration}</span>
              </div>
            ))}
          </div>
          <p>
            Você pode mudar de ideia quando quiser: <CookiePrefsButton className="footer-link-button" />.
            Se retirar o consentimento, apagamos os cookies do Analytics do seu navegador.
          </p>
        </section>

        <section className="subpage-section">
          <h2>5. Com quem compartilhamos</h2>
          <p>
            As estatísticas são processadas pelo Google (Google LLC), que pode armazenar dados em
            servidores fora do Brasil, com as garantias previstas na LGPD para transferência
            internacional. Mais detalhes na{" "}
            <a href="https://policies.google.com/privacy?hl=pt-BR" target="_blank" rel="noreferrer" style={{ color: "var(--hi)" }}>
              política de privacidade do Google
            </a>
            . As conversas passam pelas plataformas que você escolheu (WhatsApp, Instagram ou
            e-mail). Não vendemos nem repassamos seus dados a mais ninguém.
          </p>
        </section>

        <section className="subpage-section">
          <h2>6. Por quanto tempo guardamos</h2>
          <ul className="subpage-list">
            <li>
              <span className="check">✓</span>
              <span>
                <strong>Estatísticas:</strong> pelo prazo de retenção configurado no Google
                Analytics, no máximo 14 meses.
              </span>
            </li>
            <li>
              <span className="check">✓</span>
              <span>
                <strong>Conversas e dados de clientes:</strong> enquanto durar o atendimento ou o
                contrato, e depois pelo prazo que a lei exigir (como registros fiscais).
              </span>
            </li>
          </ul>
        </section>

        <section className="subpage-section">
          <h2>7. Seus direitos</h2>
          <p>
            Pela LGPD (art. 18), você pode pedir a qualquer momento: confirmação de que tratamos
            seus dados, acesso a eles, correção, anonimização, bloqueio ou exclusão, portabilidade,
            informação sobre com quem compartilhamos e a retirada do consentimento. Basta escrever
            para{" "}
            <a href={`mailto:${email}`} style={{ color: "var(--hi)" }}>
              {email}
            </a>
            . Se achar que não resolvemos, você também pode reclamar na{" "}
            <a href="https://www.gov.br/anpd" target="_blank" rel="noreferrer" style={{ color: "var(--hi)" }}>
              ANPD
            </a>
            .
          </p>
        </section>

        <section className="subpage-section">
          <h2>8. Mudanças nesta política</h2>
          <p>
            Se mudarmos o que coletamos, atualizamos esta página e a data no topo. Se a mudança
            envolver novos cookies, pedimos o seu consentimento de novo.
          </p>
        </section>

        <div className="subpage-cta-box">
          <h3>Ficou alguma dúvida sobre seus dados?</h3>
          <p>Mande uma mensagem e a gente explica sem juridiquês.</p>
          <Link className="button button-light" href="/contato">
            Falar com a Priz <span>↗</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
