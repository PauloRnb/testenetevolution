import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import { ThemeProvider } from "./ThemeProvider/ThemeProvider";
import { Figtree } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import SubHeader from "@/components/SubHeader/SubHeader";
import { Footer } from "@/components/Footer/Footer";

const figtree = Figtree({
  subsets: ["latin"],
  display: "swap",
});

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
            <SubHeader />
            <Header />
            {children}
            <Footer />
            <SpeedInsights />
            <Analytics />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
