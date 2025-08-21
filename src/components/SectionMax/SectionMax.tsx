"use client";

import Image from "next/image";
import { TitlePages } from "../TitlePages/TitlesPages";

import { SectionAdvantagesMax } from "./SectionAdvantagesMax";
import { SectionPlansMax } from "./SectionPlansMax";
import { CardBannersStreaming } from "./MaxPageComponents/CardBannersStreaming";

export function SectionMax() {
  return (
    <>
      <section className="flex w-full flex-col items-center justify-center bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="container h-full md:px-5 md:pr-0 lg:px-6 32lg:px-0">
          <div className="flex h-full flex-col items-center justify-between gap-5 md:flex-row 32md:gap-8">
            <div className="flex flex-col gap-y-8 px-5 pt-12 md:px-0 md:pt-0">
              <div className="flex flex-col items-center justify-center gap-y-3 md:items-start md:justify-start md:gap-2">
                <Image
                  src="/logohbomaxfull.webp"
                  alt="Logo da HBO Max"
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
              src="/hbomaxpagesmobilessmall.webp"
              alt="Banner Série Star Trek | Paramount+"
              width={748}
              height={321}
              priority
              className="block w-full rounded-t-2xl md:hidden"
            />
            <Image
              src="/hbomaxpagestablet.webp"
              alt="Banner Série Star Trek | Paramount+"
              width={436}
              height={343}
              priority
              className="hidden md:block xl:hidden"
            />
            <Image
              src="/hbomaxpagestablet.webp"
              alt="Banner Série Star Trek | Paramount+"
              width={401}
              height={315}
              priority
              className="hidden w-full xl:block"
            />
          </div>
        </div>
      </section>
      {/* Section Plans */}
      <SectionPlansMax />
      {/* Section Card Advantages */}
      <SectionAdvantagesMax />
      {/* Section Cards Banner */}
      <section className="bg-zinc-100 py-24 dark:bg-zinc-900">
        <div className="container px-5 xl:px-0">
          <TitlePages
            titleMain="Destaques da HBO Max"
            descriptionTitle="Conteúdo para todos os gostos: ação, drama, comédia, documentários, futebol e muito mais. Na Max, você sempre encontra algo novo para maratonar."
            align="left"
          />

          {/* Section Banners */}
          <div className="pt-16">
            <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
              <CardBannersStreaming
                imageBanner="/uclmax.webp"
                altImage="Banner UEFA Champions League | HBO Max"
                imageCardBanner="/logouefachampionsleague.webp"
                altImageCardBanner="Logo UEFA Champions League."
                descriptionTtitle="UEFA Champions League completa, com narração e comentários."
              />

              <CardBannersStreaming
                imageBanner="/twistedmetalmax.webp"
                altImage="Banner Série Twisted Metal | HBO Max"
                imageCardBanner="/logotwistedmetal.webp"
                altImageCardBanner="Logo Twisted Metal."
                descriptionTtitle="Acelere na ação com Twisted Metal, a série inspirada no icônico game."
              />

              <CardBannersStreaming
                imageBanner="/andjustlikethatmax.webp"
                altImage="Banner Série And Just Like That | HBO Max"
                imageCardBanner="/logoandjuslikethat.webp"
                altImageCardBanner="Logo And Just Like That."
                descriptionTtitle="Reviva o glamour e a amizade com And Just Like That."
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
