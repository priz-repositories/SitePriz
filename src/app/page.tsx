import Link from "next/link";
import RevealObserver from "./reveal-observer";
import Hero from "./home/hero";
import Solutions from "./home/solutions";
import Projects from "./home/projects";
import Pricing from "./home/pricing";
import Process from "./home/process";
import Faq from "./home/faq";

export default function Home() {
  return (
    <>
      <RevealObserver />
      <main id="top">
        <Hero />
        <Solutions />
        <Projects />
        <Pricing />
        <Process />

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

        <Faq />

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
    </>
  );
}
