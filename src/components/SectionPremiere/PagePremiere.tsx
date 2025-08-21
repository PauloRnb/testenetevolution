"use client";

import { TitlePages } from "../TitlePages/TitlesPages";
import Image from "next/image";
import { CardBannersStreaming } from "../SectionParamount/ParamountPageComponents/CardBannersStreaming";
import { SectionAdvantagesPremiere } from "./SectionAdvantagesPremiere";
import { SectionPlansPremiere } from "./SectionPlansPremiere";

export function PagePremiere() {
  return (
    <>
      {/* Section Banner */}
      <section className="flex w-full flex-col items-center justify-center bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="container h-full md:px-5 md:pr-0 lg:px-6 32lg:px-0">
          <div className="flex h-full flex-col items-center justify-between gap-5 md:flex-row 32md:gap-8">
            <div className="flex flex-col gap-y-8 px-5 pt-12 md:px-0 md:pt-0">
              <div className="flex flex-col items-center justify-center gap-y-3 md:items-start md:justify-start md:gap-2">
                <Image
                  src="/logopremierefull.webp"
                  alt="Logo do Telecine"
                  width={208}
                  height={48}
                  priority
                />
                <p className="text-center text-base font-medium text-white md:text-left md:text-lg 32lg:text-2xl">
                  Acompanhe todos os jogos do Brasileirão e outros campeonatos
                  no Premiere. Transmissão em alta definição para você não
                  perder nenhum lance, onde e quando quiser.
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
              src="/premierepagesmobilessmall.webp"
              alt="Banner filme Emilia Pérez | Telecine"
              width={748}
              height={321}
              priority
              className="block w-full rounded-t-2xl md:hidden"
            />
            <Image
              src="/premierepagestablet.webp"
              alt="Banner filme Emilia Pérez | Telecine"
              width={436}
              height={343}
              priority
              className="hidden md:block xl:hidden"
            />
            <Image
              src="/premierepagestablet.webp"
              alt="Banner filme Emilia Pérez | Telecine"
              width={401}
              height={315}
              priority
              className="hidden w-full xl:block"
            />
          </div>
        </div>
      </section>
      {/* Section Cards Plans Telecine */}
      <SectionPlansPremiere />
      {/* Section Cards Advantages */}
      <SectionAdvantagesPremiere />
      {/* Section Cards Banner */}
      <section className="bg-zinc-100 py-24 dark:bg-zinc-900">
        <div className="container px-5 xl:px-0">
          <TitlePages
            titleMain="Aproveite os melhores conteúdos"
            descriptionTitle="Aqui você aproveita histórias emocionantes, aventuras épicas e muito entretenimento para maratonar quando quiser."
            align="left"
          />

          <div className="pt-16">
            <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
              <CardBannersStreaming
                imageBanner="/brasileiraopremiere.webp"
                altImage="Banner Brasileirão | Premiere"
                titleMain="Brasileirão A e B"
                descriptionTtitle="Acompanhe todos os jogos do Brasileirão Série A e B ao vivo."
              />

              <CardBannersStreaming
                imageBanner="/copadobrimage.webp"
                altImage="Banner Copa Betano do Brasil."
                titleMain="Copa do Brasil"
                descriptionTtitle="A Copa do Brasil é ainda mais emocionante no Premiere."
              />

              <CardBannersStreaming
                imageBanner="/copinhasicredipremiere.webp"
                altImage="Banner Copinha Sicredi."
                titleMain="Copinha Sicredi"
                descriptionTtitle="Futebol de base com cobertura completa para os verdadeiros apaixonados."
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
