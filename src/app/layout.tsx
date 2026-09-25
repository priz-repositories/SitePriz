import type { Metadata } from "next";
import "./globals.css";
import SiteNav from "./site-nav";
import Footer from "./footer";
import { whatsapp } from "./contact";

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Priz: Soluções digitais claras",
  description:
    "Sites, Google, redes sociais, automações e servidores para pequenos negócios e projetos independentes.",
  openGraph: {
    title: "Priz: Soluções digitais claras",
    description:
      "Soluções digitais feitas com atenção ao seu projeto.",
    type: "website",
  },
  icons: {
    icon: [{ url: "/priz-favicon.svg", type: "image/svg+xml" }, { url: "/favicon.ico" }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="priz" suppressHydrationWarning>
        <div className="grain" aria-hidden />
        <SiteNav />
        {children}
        <Footer />
        <a className="whatsapp-float" href={whatsapp} target="_blank" rel="noreferrer" aria-label="Falar com a Priz no WhatsApp">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
          </svg>
        </a>
      </body>
    </html>
  );
}
