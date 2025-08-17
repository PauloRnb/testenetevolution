import { SectionContentSportv } from "@/components/SectionSportv/SectionContentSportv";
import "@radix-ui/themes/styles.css";

export const metadata = {
  title: "SporTV + Internet Fibra | Net Evolution",
  description:
    "Internet 100% fibra Net Evolution: conexão confiável e rápida para streaming, jogos e home office com atendimento especializado.",
};

export default function Sportv() {
  return (
    <div className="z-[1] min-w-[375px] flex-1">
      <main className="min-w-[375px]">
        <SectionContentSportv />
      </main>
    </div>
  );
}
