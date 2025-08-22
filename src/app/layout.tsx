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
    "internet 100% fibra óptica",
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
    "lan to lan",
    "ftth",
  ],
  authors: [{ name: "Net Evolution" }],
  openGraph: {
    title:
      "Net Evolution - Provedor de Internet Fibra Óptica | Conexão Rápida e Estável",
    description:
      "Internet fibra óptica com alta velocidade e estabilidade para residências e empresas. Suporte 24h e planos personalizados.",
    url: "https://www.seusite.com.br", // coloque aqui o seu domínio real
    siteName: "Net Evolution",
    images: [
      {
        url: "https://www.seusite.com.br/imagens/og-image.jpg", // substitua pela imagem real
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
    images: ["https://www.seusite.com.br/imagens/twitter-image.jpg"], // substitua pela imagem real
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
