import Link from "next/link";
import RevealObserver from "./reveal-observer";
import Hero from "./home/hero";
import Solutions from "./home/solutions";
import Projects from "./home/projects";
import Pricing from "./home/pricing";
import Process from "./home/process";
import Faq from "./home/faq";
import type { Metadata } from "next";
import { email, instagram, site, team } from "./contact";

export const metadata: Metadata = { alternates: { canonical: "/" } };

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Priz",
  url: site,
  logo: `${site}/priz-logo.svg`,
  email,
  telephone: "+55 48 9635-6844",
  sameAs: [instagram],
  address: { "@type": "PostalAddress", addressLocality: "Florianópolis", addressRegion: "SC", addressCountry: "BR" },
  areaServed: { "@type": "Country", name: "Brasil" },
  employee: team.map((p) => ({ "@type": "Person", name: p.name, jobTitle: p.role, sameAs: p.linkedin })),
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <RevealObserver />
      <main id="top">
        <Hero />
        <Solutions />
        <Projects />
        <Pricing />
        <Process />

        <Faq />

        {/* ── CONTATO FINAL ── */}
        <section id="contato" className="closing" data-reveal>
          <p className="eyebrow">Próximo Passo</p>
          <h2>
            Vamos colocar o seu projeto <em>no ar?</em>
          </h2>
          <p>
            Um projeto pontual ou alguém cuidando do Instagram, do site, do Google e dos servidores
            todo mês. Ainda não sabe o que precisa? Conte o que você faz e a gente diz o que vale
            fazer primeiro, por WhatsApp, direct ou e-mail.
          </p>
          <div className="closing-actions">
            <Link className="button button-light" href="/contato">
              Falar sobre meu projeto <span>↗</span>
            </Link>
            <Link className="button button-quiet" href="/contato">
              Quero acompanhamento mensal <span>↗</span>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
