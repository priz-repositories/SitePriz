import Link from "next/link";

export default function Hero() {
  return (
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
  );
}
