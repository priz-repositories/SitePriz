import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sobre a Priz | Quem Somos",
  description:
    "Estúdio independente de desenvolvimento e presença digital em Florianópolis. Soluções diretas, contato sem intermediários e transparência total.",
};

export default function SobrePage() {
  return (
    <main className="subpage-container">
      <div className="subpage-header">
        <p className="eyebrow">Quem está por trás</p>
        <h1 className="subpage-title">A parte técnica do seu negócio, sem agência no meio.</h1>
        <p className="subpage-lead">
          Estúdio independente em Florianópolis. Sites, Google, Instagram, automações e
          servidores feitos por quem você fala direto no WhatsApp, Instagram ou e-mail.
        </p>
      </div>

      <div className="subpage-body">
        <section className="subpage-section">
          <h2>Por que a Priz existe?</h2>
          <p>
            Agências cobram caro pra pagar estrutura pesada. Plataformas genéricas te largam
            sozinho na hora de apontar um domínio ou resolver um erro técnico.
            A Priz trabalha de forma independente, com preço justo e sem enrolar.
          </p>
        </section>

        <section className="subpage-section">
          <h2>Como trabalhamos</h2>
          <ul className="subpage-list">
            <li>
              <span className="check">01.</span>
              <span>
                <strong>Sem enrolação:</strong> Explicamos tudo em português claro. Zero jargão
                pra parecer inteligente.
              </span>
            </li>
            <li>
              <span className="check">02.</span>
              <span>
                <strong>Só o que resolve:</strong> Não empurramos ferramentas caras. Começamos
                pelo que traz resultado agora.
              </span>
            </li>
            <li>
              <span className="check">03.</span>
              <span>
                <strong>Tudo no seu nome:</strong> Domínios, servidores e contas são seus. Você
                fica conosco pela qualidade, não por obrigação.
              </span>
            </li>
            <li>
              <span className="check">04.</span>
              <span>
                <strong>Preços públicos:</strong> Os valores de partida estão no site. Sem
                surpresas.
              </span>
            </li>
          </ul>
        </section>

        <section className="subpage-section">
          <h2>Onde estamos</h2>
          <p>
            Florianópolis, SC. Atendimento remoto pra todo o Brasil, tudo alinhado por
            WhatsApp, direct ou e-mail.
          </p>
        </section>

        <div className="subpage-cta-box">
          <h3>Tem um projeto pra tirar do papel?</h3>
          <p>
            Escolha seu canal preferido (WhatsApp, Instagram ou e-mail) e mande uma mensagem.
          </p>
          <Link className="button button-light" href="/contato">
            Conversar com a Priz <span>↗</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
