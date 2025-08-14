"use client";

import { Router, ChevronRight, Combine, Building2 } from "lucide-react";
import { TitlePages } from "../TitlePages/TitlesPages";
import { CardServices } from "./HomePageComponents/CardServices";

export function CardsServices() {
  return (
    <section className="bg-white py-24 dark:bg-zinc-800">
      <div className="container px-5 xl:px-0">
        <TitlePages
          titleMain="Confira nossos serviços"
          descriptionTitle="Oferecemos serviços de internet fibra, apps de streaming e uma
            variedade de serviços, levando qualidade para sua residência."
          align="left"
        />

        <div className="container pt-16">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {/* Card 1 */}
            <CardServices
              icon={<Router size={20} />}
              titleMain="Internet"
              descriptionTitle="Internet 100% fibra óptica, com ultra velocidade."
              linkCard="/Fiber"
              iconLink={<ChevronRight size={20} />}
            />
            {/* Card 2 */}
            <CardServices
              icon={<Combine size={20} />}
              titleMain="Combos"
              descriptionTitle="Monte seu combo rápido simples e fácil."
              linkCard="/Combos"
              iconLink={<ChevronRight size={20} />}
            />
            {/* Card 3 */}
            <CardServices
              icon={<Building2 size={20} />}
              titleMain="Empresas"
              descriptionTitle="Temos a solução para a sua empresa."
              linkCard="/Companies"
              iconLink={<ChevronRight size={20} />}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
