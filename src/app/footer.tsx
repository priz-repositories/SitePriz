import Link from "next/link";
import { email, instagram, whatsapp } from "./contact";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <Link href="/">
          <img src="/logo.png" alt="Priz" className="footer-logo" />
        </Link>
      </div>
      <div className="footer-links">
        <div>
          <b>Explorar</b>
          <Link href="/sobre">Sobre a Priz</Link>
          <Link href="/contato">Falar com a Priz</Link>
          <Link href="/#solucoes">Serviços</Link>
          <Link href="/#projetos">Projetos</Link>
          <Link href="/#precos">Valores</Link>
          <Link href="/#processo">Como funciona</Link>
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
          <Link href="/#faq">Dúvidas frequentes</Link>
          <Link href="/">Voltar ao início ↑</Link>
          <span>Florianópolis · SC</span>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 Priz Solutions. Todos os direitos reservados.</span>
        <span>Presença digital & infraestrutura para projetos independentes.</span>
      </div>
    </footer>
  );
}
