"use client";

import { TitlePages } from "../TitlePages/TitlesPages";
import Image from "next/image";
import { CardBannersStreaming } from "../SectionParamount/ParamountPageComponents/CardBannersStreaming";
import { SectionAdvantagesEspn } from "./SectionAdvantagesEspn";
import { SectionPlansEspn } from "./SectionPlansEspn";

export function PageEspn() {
  return (
    <>
      {/* Section Banner */}
      <section className="flex w-full flex-col items-center justify-center bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="container h-full md:px-5 md:pr-0 lg:px-6 32lg:px-0">
          <div className="flex h-full flex-col items-center justify-between gap-5 md:flex-row 32md:gap-8">
            <div className="flex flex-col gap-y-8 px-5 pt-12 md:px-0 md:pt-0">
              <div className="flex flex-col items-center justify-center gap-y-3 md:items-start md:justify-start md:gap-2">
                <Image
                  src="/logoespnfull.webp"
                  alt="Logo do Telecine"
                  width={142}
                  height={35}
                  priority
                />
                <p className="text-center text-base font-medium text-white md:text-left md:text-lg 32lg:text-2xl">
                  Acompanhe os principais esportes do mundo na ESPN. Jogos de
                  futebol, basquete e muito mais, com comentários especializados
                  para você ficar por dentro de cada detalhe.
                </p>
              </div>
              <div className="flex items-center justify-center gap-4 md:justify-start">
                <Image
                  src="/logowhite.svg"
                  alt="Logo do Telecine"
                  width={208}
                  height={48}
                  priority
                />
              </div>
            </div>
            <Image
              src="/espnpagesmobilessmall.webp"
              alt="Banner filme Emilia Pérez | Telecine"
              width={748}
              height={321}
              priority
              className="block w-full rounded-t-2xl md:hidden"
            />
            <Image
              src="/espnpagestablet.webp"
              alt="Banner filme Emilia Pérez | Telecine"
              width={436}
              height={343}
              loading="lazy"
              className="hidden md:block xl:hidden"
            />
            <Image
              src="/espnpagestablet.webp"
              alt="Banner filme Emilia Pérez | Telecine"
              width={401}
              height={315}
              loading="lazy"
              className="hidden w-full xl:block"
            />
          </div>
        </div>
      </section>
      {/* Section Cards Plans Telecine */}
      <SectionPlansEspn />
      {/* Section Cards Advantages */}
      <SectionAdvantagesEspn />
      {/* Section Cards Banner */}
      <section className="bg-zinc-100 py-24 dark:bg-zinc-900">
        <div className="container px-5 xl:px-0">
          <TitlePages
            titleMain="Aproveite os melhores conteúdos"
            descriptionTitle="Aqui você acompanha os maiores eventos esportivos, partidas emocionantes e análises completas, onde e quando quiser."
            align="left"
          />

          <div className="pt-16">
            <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
              <CardBannersStreaming
                imageBanner="/sportsespn.webp"
                altImage="Banner Sports Futebol, NBA e Futebol Americano | ESPN"
                titleMain="Esportes"
                descriptionTtitle="Toda a emoção do esporte com jogos, notícias e destaques exclusivos."
              />

              <CardBannersStreaming
                imageBanner="/sportcenterespn.webp"
                altImage="Banner Programa SportCenter | ESPN."
                titleMain="SportCenter"
                descriptionTtitle="Notícias, gols e destaques do esporte mundial no SportsCenter."
              />

              <CardBannersStreaming
                imageBanner="/nbaespn.webp"
                altImage="Banner NBA | ESPN."
                titleMain="NBA"
                descriptionTtitle="NBA ao vivo com os maiores craques em quadra para você vibrar a cada jogada."
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
