"use client";

import { CardAdvantages } from "../SectionTelecine/TelecinePageComponets/CardAdvantages";
import { TitlePages } from "../TitlePages/TitlesPages";
import { Tv, Volleyball, MonitorCog } from "lucide-react";

export function SectionAdvantagesParamount() {
  return (
    <section className="bg-white py-24 dark:bg-zinc-800">
      <div className="container px-5 xl:px-0">
        <TitlePages
          titleMain="Vantagens do Paramount+"
          descriptionTitle="Curta os maiores sucessos do cinema com Tenha acesso a filmes, séries e esportes ao vivo com o Paramount+."
          align="left"
        />

        <div className="pt-16">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {/* Card 1 */}
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
            {/* Card 2 */}
            <CardAdvantages
              title="ESPORTES"
              icon={
                <Volleyball
                  size={44}
                  strokeWidth={1.4}
                  className="text-zinc-600 dark:text-white"
                />
              }
              description="jogos ao vivo e eventos esportivos, como a Libertadores."
            />
            {/* Card 3 */}
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
      </div>
    </section>
  );
}
