import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ThemeProvider } from "./ThemeProvider/ThemeProvider";
import { Figtree } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import SubHeader from "@/components/SubHeader/SubHeader";
//import { CookiesTerms } from "@/components/CookiesTerms/CookiesTerms";
import { Footer } from "@/components/Footer/Footer";

const figtree = Figtree({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "Net Evolution - Provedor de Internet 100% Fibra Óptica | Sua Internet com Velocidade e Estabilidade",
  description:
    "Na Net Evolution, oferecemos internet 100% fibra óptica com conexão rápida, estável e excelente custo-benefício para sua casa ou empresa. Atendimento regional com suporte 24h.",
  keywords: [
    "internet",
    "internet fibra óptica",
    "internet 100% fibra",
    "provedor de internet",
    "internet rápida",
    "internet estável",
    "internet residencial",
    "internet empresarial",
    "conexão fibra óptica",
    "internet banda larga",
    "link",
    "link dedicado",
    "ip",
    "ip fixo",
    "lan",
    "lan-to-lan",
    "ftth",
  ],
  authors: [{ name: "Net Evolution" }],
  alternates: {
    canonical: "https://www.seusite.com.br",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
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
    title:
      "Net Evolution - Provedor de Internet Fibra Óptica | Conexão Rápida e Estável",
    description:
      "Internet fibra óptica com alta velocidade e estabilidade para residências e empresas. Suporte 24h e planos personalizados.",
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
    title:
      "Net Evolution - Provedor de Internet 100% Fibra Óptica | Conexão Rápida e Estável",
    description:
      "Internet fibra óptica com alta velocidade e estabilidade para residências e empresas. Suporte 24h e planos personalizados.",
    images: ["/imagens/twitter-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className={`${figtree.className} bg-zinc-100 antialiased dark:bg-zinc-900`}
        suppressHydrationWarning
      >
        <ThemeProvider>
          <div className="relative flex min-h-screen flex-col">
            <SpeedInsights />
            <SubHeader />
            <Header />
            {children}
            <Footer />
            {/* <CookiesTerms />  */}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
