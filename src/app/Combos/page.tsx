import { SectionContentCombos } from "@/components/SectionsCombos/SectionContentCombos";

import "@radix-ui/themes/styles.css";

export const metadata = {
  title: "Combos Internet + Streaming | Net Evolution",
  description:
    "Conheça os combos exclusivos da Net Evolution: internet fibra óptica de alta velocidade com os melhores serviços de streaming inclusos para você e sua família aproveitarem ao máximo.",
};

export default function Combos() {
  return (
    <div className="z-[1] min-w-[375px] flex-1">
      <main className="min-w-[375px]">
        <SectionContentCombos />
      </main>
    </div>
  );
}
