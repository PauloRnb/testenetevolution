"use client";

import EmblaCarouselPlans from "../SectionsHome/EmblaCarouselPlans";
import Image from "next/image";

import EmblaCarouselApps from "./EmblaCarouselApps";

export function SectionCombos() {
  return (
    <>
      <section className="flex w-full flex-col items-center justify-center bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="container h-full md:px-5 md:pr-0 lg:px-6 32lg:px-0">
          <div className="flex h-full flex-col items-center justify-between gap-5 md:flex-row 32md:gap-8">
            <div className="flex flex-col gap-y-8 px-5 pt-12 md:px-0 md:pt-0">
              <div className="flex flex-col gap-y-1">
                <h1 className="text-center text-2xl font-semibold text-white sm:text-3xl md:text-left 32md:text-4xl lg:text-5xl">
                  Os Melhores Combos!
                </h1>
                <p className="text-center text-base font-medium text-white md:text-left md:text-lg 32lg:text-2xl">
                  Planos completos para conectar você com alta velocidade e
                  estabilidade. Escolha o combo ideal para sua casa ou empresa.
                </p>
              </div>
              <div className="flex items-center justify-center gap-4 md:justify-start">
                <a
                  href="https://wa.me/5585997362750?text=Olá, gostaria de assinar o plano com combos. Poderia me enviar os planos?"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="select-none rounded border border-white bg-white px-2 py-[2px] text-lg font-medium text-blue-500 transition-colors duration-200 hover:bg-transparent hover:text-white"
                >
                  ASSINE AGORA
                </a>
                <a
                  href="https://wa.me/5585997362750?text=Olá, gostaria de saber sobre os planos com combos."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="select-none rounded border border-white bg-transparent px-2 py-[2px] text-lg font-medium text-white transition-colors duration-200 hover:bg-white hover:text-blue-500"
                >
                  SABER MAIS
                </a>
              </div>
            </div>
            <Image
              src="/combopagesmobilessmall.webp"
              alt="Banner filmes e séries - HBO Max: Chernobyl - Paramount: Terra da Mafia - Telecine: A Profecia do Mal."
              width={748}
              height={321}
              priority={true}
              className="block w-full rounded-t-2xl md:hidden"
            />
            <Image
              src="/combopagestablet.webp"
              alt="Banner filmes e séries - HBO Max: Chernobyl - Paramount: Terra da Mafia - Telecine: A Profecia do Mal."
              width={436}
              height={343}
              loading="lazy"
              className="hidden md:block xl:hidden"
            />
            <Image
              src="/combopagestablet.webp"
              alt="Banner filmes e séries - HBO Max: Chernobyl - Paramount: Terra da Mafia - Telecine: A Profecia do Mal."
              width={401}
              height={315}
              loading="lazy"
              className="hidden xl:block"
            />
          </div>
        </div>
      </section>
      <section className="py-24">
        <div className="container px-5 xl:px-0">
          <div className="flex max-w-4xl flex-col gap-y-1 text-left">
            <h2 className="text-3xl font-semibold text-blue-700 dark:text-white sm:text-4xl lg:text-5xl">
              Confira nossos combos
            </h2>
            <p className="text-base font-medium leading-4 text-zinc-500 dark:text-zinc-300 md:text-xl lg:text-2xl">
              Temos as melhores ofertas de combos para você e toda sua família
              maratonar filmes, séries e muito futebol ao vivo.
            </p>
          </div>

          <div className="pt-16">
            <EmblaCarouselPlans />
          </div>
        </div>
      </section>
      <section className="bg-white py-24 dark:bg-zinc-800">
        <div className="container px-5 xl:px-0">
          <header className="flex max-w-4xl flex-col gap-y-1 text-left">
            <h2 className="text-3xl font-semibold text-blue-700 dark:text-white sm:text-4xl lg:text-5xl">
              Nossos streaming
            </h2>
            <p className="text-base font-medium leading-4 text-zinc-500 dark:text-zinc-300 md:text-xl lg:text-2xl">
              Aqui você encontra os melhores streamings para você e sua família
              se divertirem à vontade.
            </p>
          </header>

          <div className="pt-16">
            <EmblaCarouselApps />
          </div>
        </div>
      </section>
    </>
  );
}
