"use client";

import { SectionContentCombos } from "@/components/SectionsCombos/SectionContentCombos";

import "@radix-ui/themes/styles.css";

export default function Combos() {
  return (
    <div className="z-[1] min-w-[375px] flex-1">
      <main className="min-w-[375px]">
        <SectionContentCombos />
      </main>
    </div>
  );
}
