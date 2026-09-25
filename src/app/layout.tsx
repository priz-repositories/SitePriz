import type { Metadata } from "next";
import "./globals.css";
import SiteNav from "./site-nav";
import Footer from "./footer";

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
    icon: "/favicon.ico",
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
      </body>
    </html>
  );
}
