import { SectionContentFiber } from "@/components/SectionsFiber/SectionContentFiber";

import "@radix-ui/themes/styles.css";

export const metadata = {
  title: "Internet 100% Fibra | Net Evolution",
  description:
    "Internet 100% fibra Net Evolution: conexão confiável e rápida para streaming, jogos e home office com atendimento especializado.",
};

export default function Combos() {
  return (
    <div className="z-[1] min-w-[375px] flex-1">
      <main className="min-w-[375px]">
        <SectionContentFiber />
      </main>
    </div>
  );
}
