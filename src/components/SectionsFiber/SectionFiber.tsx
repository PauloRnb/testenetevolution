"use client";

import Image from "next/image";
import EmblaCarousel from "../SectionsHome/Plans/EmblaCarousel";

export function SectionFiber() {
  return (
    <>
      <section className="flex w-full flex-col items-center justify-center bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="container h-full md:px-5 md:pr-0 lg:px-6 32lg:px-0">
          <div className="flex h-full flex-col items-center justify-between gap-5 md:flex-row 32md:gap-8">
            <div className="flex flex-col gap-y-4 px-5 pt-12 md:px-0 md:pt-0">
              <div className="flex flex-col gap-y-[2px]">
                <h1 className="text-center text-2xl font-semibold text-white sm:text-3xl md:text-left 32md:text-4xl lg:text-5xl">
                  Internet 100% Fibra!
                </h1>
              </div>
              <div className="flex items-center justify-center md:justify-start">
                <Image
                  src="/cardofferfiber.webp"
                  alt="Mulher com celular na mão olhando pro lado."
                  width={414}
                  height={136}
                  priority={true}
                />
              </div>
              <div className="flex flex-col items-center gap-2 md:items-start">
                <a
                  href="#"
                  className="select-none rounded border border-white bg-white px-2 py-[2px] text-lg font-medium text-blue-500 transition-colors duration-200 hover:bg-transparent hover:text-white"
                >
                  ASSINE AGORA
                </a>
                <p className="text-center text-xs font-medium text-white md:text-left">
                  *Oferta válida somente para novos clientes.
                </p>
              </div>
            </div>
            <Image
              src="/bannermodelpagefibersmall.webp"
              alt="Mulher com celular na mão olhando pro lado."
              width={299}
              height={240}
              loading="lazy"
              className="block rounded-t-2xl md:hidden"
            />
            <Image
              src="/bannermodelpagefiber.webp"
              alt="Mulher com celular na mão olhando pro lado."
              width={428}
              height={343}
              loading="lazy"
              className="hidden md:block xl:hidden"
            />

            <Image
              src="/bannermodelpagefiber.webp"
              alt="Mulher com celular na mão olhando pro lado."
              width={412}
              height={330}
              loading="lazy"
              className="hidden xl:block"
            />
          </div>
        </div>
      </section>
      <section className="py-24">
        <div className="container px-5 xl:px-0">
          <header className="flex max-w-4xl flex-col gap-y-1 text-left">
            <h2 className="text-3xl font-semibold text-blue-700 dark:text-white sm:text-4xl lg:text-5xl">
              Ofertas sem apps
            </h2>
            <p className="text-base font-medium leading-4 text-zinc-500 dark:text-zinc-300 md:text-xl lg:text-2xl">
              Nossos planos fibra óptica sem apps incluso, feito pra você voar
              com nossa conexão.
            </p>
          </header>

          <div className="pt-16">
            <EmblaCarousel />
          </div>
        </div>
      </section>
    </>
  );
}
