import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import SiteNav from "./site-nav";
import Footer from "./footer";
import { site, whatsapp } from "./contact";

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

const gaId = "G-4NY9EBWC3J";

const title = "Priz · Presença digital e infraestrutura para pequenos negócios · Florianópolis";
const description =
  "Sites, Google, redes sociais, automações e servidores para pequenos negócios e projetos independentes.";

export const metadata: Metadata = {
  metadataBase: new URL(site),
  title: { default: title, template: "%s | Priz" },
  description,
  openGraph: {
    title,
    description,
    siteName: "Priz",
    locale: "pt_BR",
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
        {/* Google Analytics: lazyOnload carrega quando o navegador fica ocioso, sem pesar no carregamento */}
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="lazyOnload" />
        <Script id="ga" strategy="lazyOnload">
          {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','${gaId}');
document.addEventListener('click',function(e){
  var a=e.target.closest&&e.target.closest('a[href]');if(!a)return;
  var h=a.href,ev=h.indexOf('wa.me/')>-1?'contato_whatsapp':h.indexOf('mailto:')===0?'contato_email':h.indexOf('instagram.com')>-1?'contato_instagram':null;
  if(ev)gtag('event',ev,{link_url:h,page_path:location.pathname});
});`}
        </Script>
      </body>
    </html>
  );
}
