"use client";

import { TitlePages } from "../TitlePages/TitlesPages";
import Image from "next/image";
import { CardBannersStreaming } from "../PageParamount/ParamountPageComponents/CardBannersStreaming";
import { SectionAdvantagesPremiere } from "./SectionAdvantagesPremiere";
import { SectionPlansSportv } from "./SectionPlansSportv";

const bannersStreaming = [
  {
    imageBanner: "/sportssportv.webp",
    altImage:
      "Banner SuperLiga Feminina de Volei e Stock Car Automobilismo. | SporTV",
    titleMain: "Competições",
    descriptionTitle:
      "Acompanhe todos os jogos do Brasileirão Série A e B ao vivo.",
  },
  {
    imageBanner: "/trocadepassessportv.webp",
    altImage: "Banner Programa Troca de Passes. | SporTV",
    titleMain: "Troca de Passes",
    descriptionTitle: "A Copa do Brasil é ainda mais emocionante no Premiere.",
  },
  {
    imageBanner: "/sportvnewssportv.webp",
    altImage: "Banner Programa SporTV News. | SporTV",
    titleMain: "SporTV News",
    descriptionTitle:
      "Futebol de base com cobertura completa para os verdadeiros apaixonados.",
  },
];

export function PageSportv() {
  return (
    <>
      {/* Section Banner */}
      <section className="flex w-full flex-col items-center justify-center bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="container h-full md:px-5 md:pr-0 lg:px-6 32lg:px-0">
          <div className="flex h-full flex-col items-center justify-between gap-5 md:flex-row 32md:gap-8">
            <div className="flex flex-col gap-y-8 px-5 pt-12 md:px-0 md:pt-0">
              <div className="flex flex-col items-center justify-center gap-y-3 md:items-start md:justify-start md:gap-2">
                <Image
                  src="/logosportvfull.webp"
                  alt="Logo do SporTV"
                  width={208}
                  height={48}
                  priority
                />
                <p className="text-center text-base font-medium text-white md:text-left md:text-lg 32lg:text-2xl">
                  Muito além do futebol, o SporTV traz vôlei, basquete, lutas e
                  diversas modalidades com transmissões exclusivas e
                  comentaristas especializados.
                </p>
              </div>
              <div className="flex items-center justify-center gap-4 md:justify-start">
                <Image
                  src="/logowhite.svg"
                  alt="Logo White"
                  width={208}
                  height={48}
                  priority
                />
              </div>
            </div>

            {/* Imagens responsivas */}
            <Image
              src="/sportvpagesmobilessmall.webp"
              alt="Banner mobile SporTV"
              width={748}
              height={321}
              priority
              className="block w-full rounded-t-2xl md:hidden"
            />
            <Image
              src="/sportvpagestablet.webp"
              alt="Banner tablet SporTV"
              width={436}
              height={343}
              priority
              className="hidden md:block xl:hidden"
            />
            <Image
              src="/sportvpagestablet.webp"
              alt="Banner desktop SporTV"
              width={401}
              height={315}
              priority
              className="hidden w-full xl:block"
            />
          </div>
        </div>
      </section>

      {/* Section Cards Plans SporTV */}
      <SectionPlansSportv />

      {/* Section Cards Advantages */}
      <SectionAdvantagesPremiere />

      {/* Section Cards Banner */}
      <section className="bg-zinc-100 py-24 dark:bg-zinc-900">
        <div className="container px-5 xl:px-0">
          <TitlePages
            titleMain="Aproveite os melhores conteúdos"
            descriptionTitle="Desfrute de transmissões ao vivo, programas especiais e os destaques do esporte nacional e internacional tudo com qualidade."
            align="left"
          />

          <div className="pt-16">
            <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
              {bannersStreaming.map((banner, idx) => (
                <CardBannersStreaming
                  key={idx}
                  imageBanner={banner.imageBanner}
                  altImage={banner.altImage}
                  titleMain={banner.titleMain}
                  descriptionTtitle={banner.descriptionTitle}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
