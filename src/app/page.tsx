"use client";

import dynamic from "next/dynamic";
import "@radix-ui/themes/styles.css";

// Carrega cada seção sob demanda (melhora performance e TTI)
const SectionHome = dynamic(
  () => import("@/components/SectionsHome/SectionHome"),
  { ssr: false }, // ou true, se precisar renderizar no servidor
);

const SectionContent = dynamic(
  () => import("@/components/SectionsHome/SectionContent"),
  { ssr: false },
);

export default function Home() {
  return (
    <div className="z-[1] min-w-[375px] flex-1">
      <main className="min-w-[375px]">
        <SectionHome />
        <SectionContent />
      </main>
    </div>
  );
}
