"use client";

import { TitlePages } from "../TitlePages/TitlesPages";

import { Radio, Video, SkipBack } from "lucide-react";
import { CardAdvantagesPremiere } from "./PremierePageComponets/CardAdvantagesPremiere";

export function SectionAdvantagesPremiere() {
  return (
    <section className="bg-white py-24 dark:bg-zinc-800">
      <div className="container px-5 xl:px-0">
        <TitlePages
          titleMain="Vantagens do Premiere"
          descriptionTitle="Assista aos jogos mais emocionantes com o Premiere incluso no seu plano. Partidas ao vivo, reprises e canais exclusivos."
          align="left"
        />

        <div className="pt-16">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {/* Card 1 */}
            <CardAdvantagesPremiere
              title="AO VIVO"
              icon={
                <Radio
                  size={44}
                  strokeWidth={1.4}
                  className="text-zinc-600 dark:text-white"
                />
              }
              description="Assista aos campeonatos nacionais e internacionais."
            />
            {/* Card 2 */}
            <CardAdvantagesPremiere
              title="COBERTURA"
              icon={
                <Video
                  size={44}
                  strokeWidth={1.4}
                  className="text-zinc-600 dark:text-white"
                />
              }
              description="Comentários, análises e programas esportivos."
            />
            {/* Card 3 */}
            <CardAdvantagesPremiere
              title="REPLAYS"
              icon={
                <SkipBack
                  size={44}
                  strokeWidth={1.4}
                  className="text-zinc-600 dark:text-white"
                />
              }
              description="Não perdeu um lance? É possível assistir novamente."
            />
          </div>
        </div>
      </div>
    </section>
  );
}
