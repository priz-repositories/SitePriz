import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Priz — Sites elegantes para pequenos negócios",
  description:
    "Estúdio de Web Design e Estratégia Digital. O site da sua empresa pronto, profissional e sem dor de cabeça em até 5 dias úteis.",
  openGraph: {
    title: "Priz — Sites elegantes para pequenos negócios",
    description:
      "O site da sua empresa pronto, profissional e sem dor de cabeça em até 5 dias úteis.",
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
<body
        suppressHydrationWarning
        className={`${cormorant.variable} ${inter.variable}`}
        
      >
        {children}
      </body>
    </html>
  );
}
