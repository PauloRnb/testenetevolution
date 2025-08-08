"use client";

import { SectionContentFiber } from "@/components/SectionsFiber/SectionContentFiber";

import "@radix-ui/themes/styles.css";

export default function Combos() {
  return (
    <div className="z-[1] min-w-[375px] flex-1">
      <main className="min-w-[375px]">
        <SectionContentFiber />
      </main>
    </div>
  );
}
