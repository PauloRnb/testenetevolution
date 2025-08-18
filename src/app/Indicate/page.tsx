import { SectionContentIndicate } from "@/components/SectionIndicate/SectionContentIndicate";
import "@radix-ui/themes/styles.css";

export const metadata = {
  title: "Indique e Ganhe | Net Evolution",
  description:
    "Internet 100% fibra Net Evolution: conexão confiável e rápida para streaming, jogos e home office com atendimento especializado.",
};

export default function Indicate() {
  return (
    <div className="z-[1] min-w-[375px] flex-1">
      <main className="min-w-[375px]">
        <SectionContentIndicate />
      </main>
    </div>
  );
}
