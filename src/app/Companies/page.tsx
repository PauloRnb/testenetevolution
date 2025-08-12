import { SectionCompanies } from "@/components/SectionCompanies/SectionCompanies";
import "@radix-ui/themes/styles.css";

export const metadata = {
  title: "Internet para Empresas | Net Evolution",
  description:
    "A Net Evolution oferece internet fibra óptica dedicada para empresas, garantindo alta velocidade, estabilidade e suporte especializado para manter seu negócio sempre conectado e produtivo.",
};

export default function Companies() {
  return (
    <div className="z-[1] min-w-[375px] flex-1">
      <main className="min-w-[375px]">
        <SectionCompanies />
      </main>
    </div>
  );
}
