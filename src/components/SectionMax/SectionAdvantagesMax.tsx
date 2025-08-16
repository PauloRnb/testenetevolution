"use client";

import { CardAdvantages } from "../SectionTelecine/TelecinePageComponets/CardAdvantages";
import { TitlePages } from "../TitlePages/TitlesPages";
import {
  GalleryVerticalEnd,
  UserRoundCog,
  TabletSmartphone,
} from "lucide-react";

export function SectionAdvantagesMax() {
  return (
    <section className="bg-white py-24 dark:bg-zinc-800">
      <div className="container px-5 xl:px-0">
        <TitlePages
          titleMain="Vantagens da HBO Max"
          descriptionTitle="Desfrute do melhor do entretenimento com a HBO Max. Filmes, séries e conteúdos exclusivos em alta qualidade, disponíveis quando e onde você quiser."
          align="left"
        />

        <div className="pt-16">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {/* Card 1 */}
            <CardAdvantages
              title="VARIEDADES"
              icon={
                <GalleryVerticalEnd
                  size={44}
                  strokeWidth={1.4}
                  className="text-zinc-600 dark:text-white"
                />
              }
              description="Filmes, séries, animações e documentários só na HBO Max."
            />
            {/* Card 2 */}
            <CardAdvantages
              title="CONTROLE"
              icon={
                <UserRoundCog
                  size={44}
                  strokeWidth={1.4}
                  className="text-zinc-600 dark:text-white"
                />
              }
              description="Crie perfis individuais para cada usuário."
            />
            {/* Card 3 */}
            <CardAdvantages
              title="MOBILIDADE"
              icon={
                <TabletSmartphone
                  size={44}
                  strokeWidth={1.4}
                  className="text-zinc-600 dark:text-white"
                />
              }
              description="Continue assistindo de onde parou, em qualquer dispositivo."
            />
          </div>
        </div>
      </div>
    </section>
  );
}
