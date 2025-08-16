"use client";

import { TitlePages } from "../TitlePages/TitlesPages";

import { Flag, TvMinimalPlay, MonitorSmartphone } from "lucide-react";
import { CardAdvantagesEspn } from "./EspnPageComponets/CardAdvantagesPremiere";

export function SectionAdvantagesEspn() {
  return (
    <section className="bg-white py-24 dark:bg-zinc-800">
      <div className="container px-5 xl:px-0">
        <TitlePages
          titleMain="Vantagens da ESPN"
          descriptionTitle="Assista aos principais esportes do mundo com a ESPN inclusa no seu plano. Jogos ao vivo, reprises e análises completas de cada partida."
          align="left"
        />

        <div className="pt-16">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {/* Card 1 */}
            <CardAdvantagesEspn
              title="ESPORTES"
              icon={
                <Flag
                  size={44}
                  strokeWidth={1.4}
                  className="text-zinc-600 dark:text-white"
                />
              }
              description="Futebol, basquete, tênis, vôlei, automobilismo e muito mais."
            />
            {/* Card 2 */}
            <CardAdvantagesEspn
              title="AO VIVO"
              icon={
                <TvMinimalPlay
                  size={44}
                  strokeWidth={1.4}
                  className="text-zinc-600 dark:text-white"
                />
              }
              description="Acompanhe os jogos em tempo real, sem perder nenhum lance importante."
            />
            {/* Card 3 */}
            <CardAdvantagesEspn
              title="ACESSO"
              icon={
                <MonitorSmartphone
                  size={44}
                  strokeWidth={1.4}
                  className="text-zinc-600 dark:text-white"
                />
              }
              description="Assista pelo celular, tablet, computador ou smart TV, onde e quando quiser."
            />
          </div>
        </div>
      </div>
    </section>
  );
}
