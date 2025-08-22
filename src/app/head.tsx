// app/head.tsx
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Net Evolution - Internet Fibra Óptica | Conexão Rápida e Estável",
  description:
    "Internet 100% fibra óptica para residências e empresas. Velocidade, estabilidade e suporte regional 24h.",
  keywords: [
    "internet",
    "fibra óptica",
    "internet rápida",
    "provedor de internet",
    "internet residencial",
    "internet empresarial",
    "link dedicado",
    "IP fixo",
  ],
  authors: [{ name: "Net Evolution" }],
  alternates: { canonical: "https://www.seusite.com.br" },
  robots: { index: true, follow: true },
  icons: {
    icon: [
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon-512x512.png", sizes: "512x512", type: "image/png" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Net Evolution - Internet Fibra Óptica | Conexão Rápida e Estável",
    description:
      "Internet 100% fibra óptica para residências e empresas. Velocidade, estabilidade e suporte regional 24h.",
    url: "https://www.seusite.com.br",
    siteName: "Net Evolution",
    images: [
      {
        url: "/imagens/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Net Evolution - Provedor de Internet 100% Fibra Óptica",
      },
    ],
    locale: "pt-BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Net Evolution - Internet Fibra Óptica | Conexão Rápida e Estável",
    description:
      "Internet 100% fibra óptica para residências e empresas. Velocidade, estabilidade e suporte regional 24h.",
    images: ["/imagens/twitter-image.jpg"],
  },
};

export default function Head() {
  return null; // tudo gerenciado pelo `metadata` do Next.js 15+
}
