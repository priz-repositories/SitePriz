import Image from "next/image";
import RevealObserver from "./reveal-observer";

{
  /*
const mocks = [
  { t: "Clínica Mier", sub: "Odontologia", c1: "#e7e2d5", c2: "#bca878" },
  { t: "Studio Aura", sub: "Estética", c1: "#f3d9d2", c2: "#c98276" },
  { t: "Hoffmann Adv.", sub: "Advocacia", c1: "#0e1a2e", c2: "#3a5d8f" },
  { t: "Café Mosaico", sub: "Bistrô", c1: "#1c1410", c2: "#c97b3a" },
  { t: "Barbearia Norte", sub: "Beleza", c1: "#10110f", c2: "#d8c9a3" },
  { t: "Imóveis Vale", sub: "Imobiliária", c1: "#0d1f1a", c2: "#6fb39a" },
  { t: "Studio Aura", sub: "Estética", c1: "#f3d9d2", c2: "#c98276" },
  { t: "Café Mosaico", sub: "Bistrô", c1: "#1c1410", c2: "#c97b3a" },
];
*/
}

const businesses = [
  ["Clínicas", "Odonto, estética, saúde"],
  ["Advocacia", "Escritórios e consultores"],
  ["Beleza", "Salões, barbearias, spa"],
  ["Restaurantes", "Cafés, bistrôs, delivery"],
  ["Imobiliárias", "Corretores autônomos"],
  ["Serviços", "Autônomos e prestadores"],
];

const faqs = [
  [
    "Eu preciso pagar mensalidade?",
    "Não há mensalidade obrigatória. Você paga uma vez pelo desenvolvimento e mantém apenas a hospedagem e o domínio — valores baixos e transparentes.",
  ],
  [
    "Quanto tempo demora?",
    "Em até 5 dias úteis o site está no ar. Projetos com escopo maior podem variar, mas combinamos tudo antes.",
  ],
  [
    "Funciona no celular?",
    "Sim. Desenvolvemos com tecnologia Mobile First — a maioria dos seus clientes vai abrir pelo celular, e o site é desenhado pensando neles.",
  ],
  [
    "E se eu quiser mudar algo depois?",
    "Você pode solicitar ajustes. Para evoluções maiores, oferecemos planos de manutenção opcionais.",
  ],
];

export default function Home() {
  return (
    <>
      <RevealObserver />

      <div className="priz">
        <div className="grain" aria-hidden />

        {/* NAV */}
        <header className="nav">
          <a href="#top" className="brand" aria-label="Priz">
            <Image
              src="/logo.png"
              alt="Priz"
              width={90}
              height={32}
              priority
              style={{ height: 32, width: "auto" }}
            />
          </a>
          <nav>
            <a href="#funciona">Como funciona</a>
            <a href="#padrao">O padrão</a>
            <a href="#negocios">Negócios</a>
            <a href="#faq">FAQ</a>
          </nav>
          <a
            className="cta-pill"
            href="https://wa.me/554896356844"
            target="_blank"
            rel="noopener noreferrer"
          >
            Orçamento
          </a>
        </header>

        <main id="top">
          {/* HERO */}
          <section className="hero">
            <div className="hero-inner" data-reveal>
              <div className="badge">✦ Estúdio de Web Design · Est. 2026</div>
              <h1>
                Sites elegantes,
                <br />
                entregues em 5 dias{" "}
                <span className="hl">para pequenos negócios.</span>
              </h1>
              <p>
                Atraia mais clientes da sua região e passe credibilidade — sem
                reuniões intermináveis, sem jargão técnico, sem mensalidade
                obrigatória.
              </p>
              <div className="hero-actions">
                <a
                  className="btn-primary"
                  href="https://wa.me/554896356844"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Quero um orçamento grátis
                </a>
                <a className="btn-ghost" href="#funciona">
                  Ver como funciona
                </a>
              </div>
            </div>

            {/* tilted showcase rail 
            <div className="rail-wrap" aria-hidden>
              <div className="rail" id="rail">
                {mocks.map((m, i) => (
                  <div
                    className="mock"
                    key={i}
                    style={{
                      background: `linear-gradient(160deg, ${m.c1}, ${m.c2})`,
                    }}
                  >
                    <div className="mock-bar">
                      <span />
                      <span />
                      <span />
                    </div>
                    <div className="mock-title">{m.t}</div>
                    <div className="mock-sub">{m.sub}</div>
                    <div className="mock-card" />
                    <div className="mock-row">
                      <i />
                      <i />
                    </div>
                  </div>
                ))}
              </div>
            </div> */}

            <div className="hero-meta" data-reveal>
              <div>
                <strong>5 dias</strong>
                <span>entrega média</span>
              </div>
              <div>
                <strong>97%</strong>
                <span>pesquisam no Google</span>
              </div>
              <div>
                <strong>0</strong>
                <span>mensalidade obrigatória</span>
              </div>
            </div>
          </section>

          {/* PITCH */}
          <section className="pitch" data-reveal>
            <h2>
              <span className="hl">Seus clientes</span> estão procurando no
              Google agora. Eles te acham?
            </h2>
            <p>
              Hoje em dia, antes de ir à loja, o cliente pesquisa no celular.
              <br />
              Se você não tem um site profissional, esse cliente vai direto para
              o seu concorrente.
            </p>
          </section>

          {/* PADRÃO PRIZ */}
          <section id="padrao" className="standard" data-reveal>
            <div className="section-head">
              <span className="kicker">— O padrão Priz</span>
              <h2>
                Três pilares. <em>Uma obsessão:</em> qualidade.
              </h2>
            </div>
            <div className="pillars">
              <article className="pillar" data-reveal>
                <div className="pillar-num">01</div>
                <h3>Visibilidade</h3>
                <p className="pillar-sub">Apareça no Google</p>
                <p>
                  Não basta ser bonito — tem que ser encontrado. Estruturamos
                  cada site com as melhores práticas de SEO para você ser a
                  primeira opção na sua região.
                </p>
              </article>
              <article className="pillar" data-reveal>
                <div className="pillar-num">02</div>
                <h3>Sofisticação</h3>
                <p className="pillar-sub">Visual profissional</p>
                <p>
                  Design elegante, minimalista e focado em credibilidade. Seu
                  site transmite que a empresa é séria, organizada e confiável.
                </p>
              </article>
              <article className="pillar" data-reveal>
                <div className="pillar-num">03</div>
                <h3>Conversão</h3>
                <p className="pillar-sub">Contato imediato</p>
                <p>
                  Tecnologia Mobile First com botões diretos para o WhatsApp.
                  Visitante vira cliente em um toque.
                </p>
              </article>
            </div>
          </section>

          {/* NEGÓCIOS */}
          <section id="negocios" className="businesses" data-reveal>
            <div className="section-head center">
              <span className="kicker">— Ideal para</span>
              <h2>
                Negócios locais que merecem <em>ser encontrados.</em>
              </h2>
            </div>
            <div className="biz-grid">
              {businesses.map(([t, s]) => (
                <div className="biz" key={t} data-reveal>
                  <span className="biz-dot" />
                  <h4>{t}</h4>
                  <p>{s}</p>
                </div>
              ))}
            </div>
          </section>

          {/* COMO FUNCIONA */}
          <section id="funciona" className="process" data-reveal>
            <div className="section-head">
              <span className="kicker">— Como funciona</span>
              <h2>
                Sem reuniões intermináveis.
                <br />
                <em>Sem jargão técnico.</em>
              </h2>
            </div>
            <ol className="steps">
              <li data-reveal>
                <span className="step-n">01</span>
                <h3>Contato fácil</h3>
                <p>
                  Você conta sobre o negócio pelo WhatsApp. Sem formulários
                  longos.
                </p>
              </li>
              <li data-reveal>
                <span className="step-n">02</span>
                <h3>Mão na massa</h3>
                <p>
                  Nossa equipe desenha, escreve e coloca o site no ar — você só
                  aprova.
                </p>
              </li>
              <li data-reveal>
                <span className="step-n">03</span>
                <h3>Resultado</h3>
                <p>
                  Em até 5 dias úteis o link está pronto para atrair clientes.
                </p>
              </li>
            </ol>
            <div className="process-cta">
              <a
                className="btn-primary"
                href="https://wa.me/554896356844"
                target="_blank"
                rel="noopener noreferrer"
              >
                Começar agora
              </a>
            </div>
          </section>

          {/* FAQ */}
          <section id="faq" className="faq" data-reveal>
            <div className="section-head">
              <span className="kicker">— Dúvidas frequentes</span>
              <h2>
                Perguntas que <em>todo mundo</em> faz.
              </h2>
            </div>
            <div className="faq-list">
              {faqs.map(([q, a], i) => (
                <details key={i} data-reveal>
                  <summary>
                    <span>{q}</span>
                    <i>+</i>
                  </summary>
                  <p>{a}</p>
                </details>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section id="orcamento" className="closer" data-reveal>
            <h2>
              Pronto para sair do <em>amadorismo?</em>
            </h2>
            <p>Fale com a Priz no WhatsApp e receba seu orçamento gratuito.</p>
            <a
              className="btn-primary lg"
              href="https://wa.me/554896356844"
              target="_blank"
              rel="noopener noreferrer"
            >
              Quero meu site agora
            </a>
          </section>
        </main>

        {/* FOOTER */}
        <footer className="foot">
          <div className="brand-lg">
            <Image
              src="/logo.png"
              alt="Priz"
              width={140}
              height={48}
              style={{ height: 48, width: "auto" }}
            />
          </div>
          <p>
            Ajudando pequenos negócios a crescerem na internet{" "}
            <em>com elegância.</em>
          </p>
          <small>© 2026 Priz. Todos os direitos reservados.</small>
        </footer>
      </div>
    </>
  );
}
