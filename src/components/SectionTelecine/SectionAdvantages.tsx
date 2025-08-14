"use client";

import { TitlePages } from "../TitlePages/TitlesPages";
import { CardAdvantages } from "./TelecinePageComponets/CardAdvantages";
import { Popcorn, FastForward, Film } from "lucide-react";

export function SectionAdvantages() {
  return (
    <section className="bg-white py-24 dark:bg-zinc-800">
      <div className="container px-5 xl:px-0">
        <TitlePages
          titleMain="Vantagens do Telecine"
          descriptionTitle="Curta os maiores sucessos do cinema com o Telecine incluso no seu
              plano. Estreias, clássicos e canais ao vivo para toda a família,
              onde e quando quiser."
          align="left"
        />

        <div className="pt-16">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {/* Card 1 */}
            <CardAdvantages
              title="CATÁLOGO TELECINE"
              icon={
                <Popcorn
                  size={44}
                  strokeWidth={1.4}
                  className="text-zinc-600 dark:text-white"
                />
              }
              description="Catálogo 100% focado em cinema com mais de 2.000 filmes."
            />
            {/* Card 2 */}
            <CardAdvantages
              title="ESTREIAS RÁPIDAS"
              icon={
                <FastForward
                  size={44}
                  strokeWidth={1.4}
                  className="text-zinc-600 dark:text-white"
                />
              }
              description="Muitos títulos chegam primeiro no Telecine antes de outras plataformas."
            />
            {/* Card 3 */}
            <CardAdvantages
              title="LISTAS E COLEÇÕES"
              icon={
                <Film
                  size={44}
                  strokeWidth={1.4}
                  className="text-zinc-600 dark:text-white"
                />
              }
              description="Curadoria feita por especialistas para todos os gostos."
            />
          </div>
        </div>
      </div>
    </section>
  );
}
