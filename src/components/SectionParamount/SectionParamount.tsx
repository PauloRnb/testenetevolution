"use client";

import Image from "next/image";
import { SectionPlansParamount } from "./SectionPlansParamount";
import { TitlePages } from "../TitlePages/TitlesPages";
import { CardBannersStreaming } from "./ParamountPageComponents/CardBannersStreaming";
import { SectionAdvantagesParamount } from "./SectionAdvantagesParamount";

export function SectionParamount() {
  return (
    <>
      <section className="flex w-full flex-col items-center justify-center bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="container h-full md:px-5 md:pr-0 lg:px-6 32lg:px-0">
          <div className="flex h-full flex-col items-center justify-between gap-5 md:flex-row 32md:gap-8">
            <div className="flex flex-col gap-y-8 px-5 pt-12 md:px-0 md:pt-0">
              <div className="flex flex-col items-center justify-center gap-y-3 md:items-start md:justify-start md:gap-2">
                <Image
                  src="/logoparamountplusfull.webp"
                  alt="Logo do Paramount+"
                  width={208}
                  height={48}
                  priority
                />
                <p className="text-center text-base font-medium text-white md:text-left md:text-lg 32lg:text-2xl">
                  Assista ao melhor do cinema, séries e esportes com o
                  Paramount+ incluso no seu plano. Conteúdo exclusivo, onde e
                  quando quiser.
                </p>
              </div>
              <div className="flex items-center justify-center gap-4 md:justify-start">
                <Image
                  src="/logowhite.svg"
                  alt="Logo da Net Evolution"
                  width={176}
                  height={34}
                  priority
                />
              </div>
            </div>
            <Image
              src="/paramountpagesmobilessmall.webp"
              alt="Banner Série Star Trek | Paramount+"
              width={748}
              height={321}
              priority
              className="block w-full rounded-t-2xl md:hidden"
            />
            <Image
              src="/paramountpagestablet.webp"
              alt="Banner Série Star Trek | Paramount+"
              width={436}
              height={343}
              priority
              className="hidden md:block xl:hidden"
            />
            <Image
              src="/paramountpagestablet.webp"
              alt="Banner Série Star Trek | Paramount+"
              width={401}
              height={315}
              loading="lazy"
              className="hidden w-full xl:block"
            />
          </div>
        </div>
      </section>
      {/* Section Plans */}
      <SectionPlansParamount />
      {/* Section Card Advantages */}
      <SectionAdvantagesParamount />

      {/* Section Cards Banner */}
      <section className="bg-zinc-100 py-24 dark:bg-zinc-900">
        <div className="container px-5 xl:px-0">
          <TitlePages
            titleMain="Aproveite os melhores conteúdos"
            descriptionTitle="Aqui você aproveita filmes inesquecíveis, séries exclusivas e muito entretenimento."
            align="left"
          />

          {/* Section Banners */}
          <div className="pt-16">
            <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
              <CardBannersStreaming
                imageBanner="/libertadoresimage.webp"
                altImage="Banner Libertadores | Paramount+"
                titleMain="Futebol"
                descriptionTtitle="Aqui você não perde nenhum jogo da Libertadores. Paramount+."
              />

              <CardBannersStreaming
                imageBanner="/wellowstoneimage.webp"
                altImage="Banner Série Yellowstone | Paramount+"
                titleMain="Séries"
                descriptionTtitle="Aqui você maratona séries emocionantes e inéditas. Assine agora."
              />

              <CardBannersStreaming
                imageBanner="/alemdaescuridaoimage.webp"
                altImage="Banner Série Yellowstone | Paramount+"
                titleMain="Filmes"
                descriptionTtitle="Aqui você não perde nenhum grande lançamento. Assine Paramount+."
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
