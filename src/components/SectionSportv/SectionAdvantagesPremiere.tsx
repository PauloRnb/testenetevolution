"use client";

import { TitlePages } from "../TitlePages/TitlesPages";

import { Medal, Mic, Clapperboard } from "lucide-react";
import { CardAdvantagesSportv } from "./PremierePageComponets/CardAdvantagesSportv";

export function SectionAdvantagesPremiere() {
  return (
    <section className="bg-white py-24 dark:bg-zinc-800">
      <div className="container px-5 xl:px-0">
        <TitlePages
          titleMain="Vantagens do SporTV"
          descriptionTitle="Curta os principais campeonatos, programas exclusivos e transmissões em alta definição, tudo em um só canal para você não perder nenhum lance."
          align="left"
        />

        <div className="pt-16">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {/* Card 1 */}
            <CardAdvantagesSportv
              title="VARIEDADES"
              icon={
                <Medal
                  size={44}
                  strokeWidth={1.4}
                  className="text-zinc-600 dark:text-white"
                />
              }
              description="Muito além do futebol: vôlei, basquete e automobilismo."
            />
            {/* Card 2 */}
            <CardAdvantagesSportv
              title="DEBATES"
              icon={
                <Mic
                  size={44}
                  strokeWidth={1.4}
                  className="text-zinc-600 dark:text-white"
                />
              }
              description="Programas com comentaristas renomados, entrevistas e análises."
            />
            {/* Card 3 */}
            <CardAdvantagesSportv
              title="PRODUÇÃO"
              icon={
                <Clapperboard
                  size={44}
                  strokeWidth={1.4}
                  className="text-zinc-600 dark:text-white"
                />
              }
              description="Imagens em alta definição, múltiplas câmeras e recursos de replay."
            />
          </div>
        </div>
      </div>
    </section>
  );
}
