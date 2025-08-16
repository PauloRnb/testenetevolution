"use client";

import { TitlePages } from "../TitlePages/TitlesPages";
import { SectionAdvantages } from "./SectionAdvantages";
import { SectionPlansTelecine } from "./SectionPlansTelecine";
import Image from "next/image";
import { CardBannersStreaming } from "../SectionParamount/ParamountPageComponents/CardBannersStreaming";

export function PageTelecine() {
  return (
    <>
      {/* Section Banner */}
      <section className="flex w-full flex-col items-center justify-center bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="container h-full md:px-5 md:pr-0 lg:px-6 32lg:px-0">
          <div className="flex h-full flex-col items-center justify-between gap-5 md:flex-row 32md:gap-8">
            <div className="flex flex-col gap-y-8 px-5 pt-12 md:px-0 md:pt-0">
              <div className="flex flex-col items-center justify-center gap-y-3 md:items-start md:justify-start md:gap-2">
                <Image
                  src="/logotelecinefull.webp"
                  alt="Logo do Telecine"
                  width={208}
                  height={48}
                  priority={true}
                />
                <p className="text-center text-base font-medium text-white md:text-left md:text-lg 32lg:text-2xl">
                  Assista aos maiores sucessos do cinema com o Telecine incluso
                  no seu plano. Filmes para todos os gostos, onde e quando
                  quiser.
                </p>
              </div>
              <div className="flex items-center justify-center gap-4 md:justify-start">
                <Image
                  src="/logowhite.svg"
                  alt="Logo do Telecine"
                  width={208}
                  height={48}
                  priority={true}
                />
              </div>
            </div>
            <Image
              src="/telecinepagesmobilessmall.webp"
              alt="Banner filme Emilia Pérez | Telecine"
              width={748}
              height={321}
              priority={true}
              className="block w-full rounded-t-2xl md:hidden"
            />
            <Image
              src="/telecinepagestablet.webp"
              alt="Banner filme Emilia Pérez | Telecine"
              width={436}
              height={343}
              loading="lazy"
              className="hidden md:block xl:hidden"
            />
            <Image
              src="/telecinepagestablet.webp"
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
      <SectionPlansTelecine />
      {/* Section Cards Advantages */}
      <SectionAdvantages />
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
                imageBanner="/todotempotelecineimage.webp"
                altImage="Banner filme Todo Tempo que Temos | Telecine."
                titleMain="Drama"
                descriptionTtitle="Aqui você assiste aos dramas mais emocionantes. Assine Telecine."
              />

              <CardBannersStreaming
                imageBanner="/vitoriatelecineimage.webp"
                altImage="Banner filme Vitoria | Telecine"
                titleMain="Biografia."
                descriptionTtitle="Aqui você acompanha histórias reais e inspiradoras. Assine Telecine."
              />

              <CardBannersStreaming
                imageBanner="/apocalipstelecineimage.webp"
                altImage="Banner filme Depois do Apocalipse | Telecine."
                titleMain="Policial"
                descriptionTtitle="Aqui você acompanha os melhores filmes policiais. Assine Telecine."
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
