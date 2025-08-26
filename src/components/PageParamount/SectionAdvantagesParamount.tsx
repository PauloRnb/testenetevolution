"use client";

import { CardAdvantages } from "../PageTelecine/TelecinePageComponets/CardAdvantages";
import { TitlePages } from "../TitlePages/TitlesPages";
import { Tv, Volleyball, MonitorCog } from "lucide-react";

export function SectionAdvantagesParamount() {
  return (
    <section className="bg-white py-24 dark:bg-zinc-800">
      <div className="container max-w-[1200px] px-5 xl:px-0">
        {/* Título e descrição */}
        <TitlePages
          titleMain="Vantagens do Paramount+"
          descriptionTitle="Curta os maiores sucessos do cinema. Tenha acesso a filmes, séries e esportes ao vivo com o Paramount+."
          align="left"
        />

        <div className="grid grid-cols-1 gap-4 pt-16 md:grid-cols-3">
          {/* Cards com SVGs inline (ótimo para LCP) */}
          <CardAdvantages
            title="CLÁSSICOS"
            icon={
              <Tv
                size={44}
                strokeWidth={1.4}
                className="text-zinc-600 dark:text-white"
              />
            }
            description="Acesso a grandes sucessos do cinema e produções premiadas."
          />
          <CardAdvantages
            title="ESPORTES"
            icon={
              <Volleyball
                size={44}
                strokeWidth={1.4}
                className="text-zinc-600 dark:text-white"
              />
            }
            description="Jogos ao vivo e eventos esportivos, como a Libertadores."
          />
          <CardAdvantages
            title="ALTA QUALIDADE"
            icon={
              <MonitorCog
                size={44}
                strokeWidth={1.4}
                className="text-zinc-600 dark:text-white"
              />
            }
            description="HD e 4K Ultra HD em dispositivos compatíveis."
          />
        </div>
      </div>
    </section>
  );
}
