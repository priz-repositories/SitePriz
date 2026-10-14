"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Script from "next/script";

const gaId = "G-4NY9EBWC3J";
const storageKey = "priz-cookies";
const reopenEvent = "priz:cookies";

type Choice = "granted" | "denied";

const readChoice = (): Choice | null => {
  try {
    const v = localStorage.getItem(storageKey);
    return v === "granted" || v === "denied" ? v : null;
  } catch {
    return null;
  }
};

/* Apaga os cookies do Analytics (_ga, _ga_XXXX) no domínio atual e no domínio pai */
const clearGaCookies = () => {
  const host = location.hostname.replace(/^www\./, "");
  document.cookie.split(";").forEach((c) => {
    const name = c.split("=")[0].trim();
    if (!name.startsWith("_ga")) return;
    for (const domain of ["", `; domain=${host}`, `; domain=.${host}`]) {
      document.cookie = `${name}=; Max-Age=0; path=/${domain}`;
    }
  });
};

/* O Google Analytics só carrega depois do "Aceitar" (LGPD: consentimento para cookies de análise) */
export default function CookieConsent() {
  const [choice, setChoice] = useState<Choice | null>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const saved = readChoice();
    setChoice(saved);
    setOpen(saved === null);
    const reopen = () => setOpen(true);
    window.addEventListener(reopenEvent, reopen);
    return () => window.removeEventListener(reopenEvent, reopen);
  }, []);

  const decide = (next: Choice) => {
    try {
      localStorage.setItem(storageKey, next);
    } catch {}
    setOpen(false);
    if (next === "denied" && choice === "granted") {
      // o script do GA já está na página: apaga os cookies e recarrega sem ele
      clearGaCookies();
      location.reload();
      return;
    }
    setChoice(next);
  };

  return (
    <>
      {choice === "granted" && (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="lazyOnload" />
          <Script id="ga" strategy="lazyOnload">
            {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','${gaId}');
document.addEventListener('click',function(e){
  var a=e.target.closest&&e.target.closest('a[href]');if(!a)return;
  var h=a.href,ev=h.indexOf('wa.me/')>-1?'contato_whatsapp':h.indexOf('mailto:')===0?'contato_email':h.indexOf('instagram.com')>-1?'contato_instagram':null;
  if(ev)gtag('event',ev,{link_url:h,page_path:location.pathname});
});`}
          </Script>
        </>
      )}

      {open && (
        <div className="cookie-banner" role="dialog" aria-live="polite" aria-label="Preferências de cookies">
          <p>
            Usamos cookies do Google Analytics só para contar visitas e entender quais páginas são
            mais acessadas. Nada de anúncios. Você escolhe.{" "}
            <Link href="/privacidade">Política de privacidade</Link>
          </p>
          <div className="cookie-actions">
            <button type="button" className="button button-quiet" onClick={() => decide("denied")}>
              Recusar
            </button>
            <button type="button" className="button button-light" onClick={() => decide("granted")}>
              Aceitar
            </button>
          </div>
        </div>
      )}
    </>
  );
}

/* Botão do rodapé / da política para reabrir o banner e mudar a escolha */
export function CookiePrefsButton({ className }: { className?: string }) {
  return (
    <button type="button" className={className} onClick={() => window.dispatchEvent(new Event(reopenEvent))}>
      Preferências de cookies
    </button>
  );
}
