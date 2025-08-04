"use client";

import EmblaCarouselPlans from "../SectionsHome/EmblaCarouselPlans";
import Image from "next/image";

export function SectionCombos() {
  return (
    <>
      <section className="flex w-full flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-blue-700 md:h-[505px]">
        <div className="container h-full">
          <div className="flex h-full flex-col items-center justify-between gap-6 md:flex-row xl:max-w-[90rem]">
            <div className="flex flex-col gap-y-8 px-5 pt-12 md:pr-0 md:pt-0 xl:px-0">
              <div className="flex flex-col gap-y-1">
                <h1 className="text-center text-2xl font-semibold text-white md:text-left md:text-3xl 32lg:text-5xl">
                  Temos Os Melhores Combos!
                </h1>
                <p className="text-center text-base font-medium text-white md:text-left md:text-lg 32lg:text-2xl">
                  Planos completos para conectar você com alta velocidade e
                  estabilidade. Escolha o combo ideal para sua casa ou empresa.
                </p>
              </div>
              <div className="flex items-center justify-center gap-4 md:justify-start">
                <a
                  href="#"
                  className="rounded border border-white bg-white px-3 py-[2px] text-lg font-medium text-blue-500 transition-colors duration-200 hover:bg-transparent hover:text-white"
                >
                  ASSINE AGORA
                </a>
                <a
                  href="#"
                  className="rounded border border-white bg-transparent px-3 py-[2px] text-lg font-medium text-white transition-colors duration-200 hover:bg-white hover:text-blue-500"
                >
                  SABER MAIS
                </a>
              </div>
            </div>
            <Image
              src="/bannercombospage.webp"
              alt="Banner filmes e séries - The Last Of Us, Tulsan King e John Wick"
              decoding="async"
              className="w-full md:hidden"
              width={412}
              height={248}
              fetchPriority="high"
            />
          </div>
        </div>
      </section>
      <section className="py-24">
        <div className="container px-5 xl:px-0">
          <header className="flex max-w-4xl flex-col gap-y-1 text-left">
            <h2 className="text-3xl font-semibold text-blue-700 dark:text-white sm:text-4xl lg:text-5xl">
              Confira nossos combos
            </h2>
            <p className="text-base font-medium leading-4 text-zinc-500 dark:text-zinc-300 md:text-xl lg:text-2xl">
              Temos as melhores ofertas de combos para você e toda sua família
              maratonar filmes, séries e muito futebol ao vivo.
            </p>
          </header>

          <div className="pt-16">
            <EmblaCarouselPlans />
          </div>
        </div>
      </section>
    </>
  );
}
