"use client";

import React from "react";
import { EmblaOptionsType } from "embla-carousel";
import {
  DotButton,
  useDotButton,
} from "@/components/SectionsHome/Plans/EmblaCarouselDotButton";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "@/components/SectionsHome/Plans/EmblaCarouselArrowButton";
import useEmblaCarousel from "embla-carousel-react";

type PropType = {
  options?: EmblaOptionsType;
};

const EmblaCarouselProducts: React.FC<PropType> = ({ options }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: false,
    ...options,
  });

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);
  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  const cards = [
    <div
      key={0}
      className="h-[21.25rem] w-full select-none rounded-xl bg-zinc-100 p-3 shadow-sm dark:bg-zinc-900"
    >
      <div className="relative h-full w-full overflow-hidden rounded-[0.375rem] bg-[#121418]">
        <div className="h-full w-full bg-[linear-gradient(rgba(67,70,72,0)_0%,rgba(15,15,15,1)_75%,rgba(18,20,24,1)_100%),url('/wificardbg.webp')] bg-cover bg-center duration-500"></div>
        <div className="absolute top-[12.5rem] -translate-y-1/2 p-6 px-3 pt-0 duration-500">
          <h2 className="mb-3 text-xl font-semibold text-white">Internet</h2>
          <p className="text-sm font-medium text-white">
            Internet 100% fibra óptica e wi-fi premium.
          </p>
        </div>
        <a
          href="https://wa.me/5585997362750?text=Olá, gostaria de assinar internet fibra empresarial."
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-[16.5rem] ml-3 flex items-center justify-center rounded-full bg-blue-700 px-2 py-1 text-sm font-medium text-white transition-colors duration-200 hover:bg-blue-500 dark:bg-cyan-400 dark:text-zinc-800 dark:hover:bg-cyan-500"
        >
          ASSINE AGORA
        </a>
        {/* Gradiente com blur */}
        <div className="absolute inset-0 z-[-1] bg-[linear-gradient(rgba(67,70,72,0.4)_0%,rgba(15,15,15,0.9)_70%,rgba(18,20,24,1)_100%)] blur-sm"></div>
      </div>
    </div>,

    <div
      key={1}
      className="h-[21.25rem] w-full select-none rounded-xl bg-zinc-100 p-3 shadow-sm dark:bg-zinc-900"
    >
      <div className="relative h-full w-full overflow-hidden rounded-[0.375rem] bg-[#121418]">
        <div className="h-full w-full bg-[linear-gradient(rgba(67,70,72,0)_0%,rgba(15,15,15,1)_75%,rgba(18,20,24,1)_100%),url('/linkdedicadocardbg.webp')] bg-cover bg-center duration-500"></div>
        <div className="absolute top-[12.5rem] -translate-y-1/2 p-6 px-3 pt-0 duration-500">
          <h2 className="mb-3 text-xl font-semibold text-white">
            Link Dedicado
          </h2>
          <p className="text-sm font-medium text-white">
            Conexão exclusiva para sua empresa.
          </p>
        </div>
        <a
          href="https://wa.me/5585997362750?text=Olá, gostaria de contratar um link dedicado."
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-[16.5rem] ml-3 flex items-center justify-center rounded-full bg-blue-700 px-2 py-1 text-sm font-medium text-white transition-colors duration-200 hover:bg-blue-500 dark:bg-cyan-400 dark:text-zinc-800 dark:hover:bg-cyan-500"
        >
          ASSINE AGORA
        </a>
        {/* Gradiente com blur */}
        <div className="absolute inset-0 z-[-1] bg-[linear-gradient(rgba(67,70,72,0.4)_0%,rgba(15,15,15,0.9)_70%,rgba(18,20,24,1)_100%)] blur-sm"></div>
      </div>
    </div>,

    <div
      key={2}
      className="h-[21.25rem] w-full select-none rounded-xl bg-zinc-100 p-3 shadow-sm dark:bg-zinc-900"
    >
      <div className="relative h-full w-full overflow-hidden rounded-[0.375rem]">
        <div className="h-full w-full bg-[linear-gradient(rgba(67,70,72,0)_0%,rgba(15,15,15,1)_75%,rgba(18,20,24,1)_100%),url('/ipfixocardbg.webp')] bg-cover bg-center duration-500"></div>
        <div className="absolute top-[12.5rem] -translate-y-1/2 p-6 px-3 pt-0 duration-500">
          <h2 className="mb-3 text-xl font-semibold text-white">IP Fixo</h2>
          <p className="text-sm font-medium text-white">
            IP fixo que garante estabilidade e segurança.
          </p>
        </div>
        <a
          href="https://wa.me/5585997362750?text=Olá, gostaria de contratar IP Fixo empresarial."
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-[16.5rem] ml-3 flex items-center justify-center rounded-full bg-blue-700 px-2 py-1 text-sm font-medium text-white transition-colors duration-200 hover:bg-blue-500 dark:bg-cyan-400 dark:text-zinc-800 dark:hover:bg-cyan-500"
        >
          ASSINE AGORA
        </a>
        {/* Gradiente com blur */}
        <div className="absolute inset-0 z-[-1] bg-[linear-gradient(rgba(67,70,72,0.4)_0%,rgba(15,15,15,0.9)_70%,rgba(18,20,24,1)_100%)] blur-sm"></div>
      </div>
    </div>,

    <div
      key={3}
      className="h-[21.25rem] w-full select-none rounded-xl bg-zinc-100 p-3 shadow-sm dark:bg-zinc-900"
    >
      <div className="relative h-full w-full overflow-hidden rounded-[0.375rem] bg-[#121418]">
        <div className="h-full w-full bg-[linear-gradient(rgba(67,70,72,0)_0%,rgba(15,15,15,1)_75%,rgba(18,20,24,1)_100%),url('/lantolancardbg.webp')] bg-cover bg-center duration-500"></div>
        <div className="absolute top-[12.5rem] -translate-y-1/2 p-6 px-3 pt-0 duration-500">
          <h2 className="mb-3 text-xl font-semibold text-white">Lan-To-Lan</h2>
          <p className="text-sm font-medium text-white">
            Conexão direta e rápida.
          </p>
        </div>
        <a
          href="https://wa.me/5585997362750?text=Olá, gostaria de saber mais sobre o Lan-To-Lan empresarial."
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-[16.5rem] ml-3 flex items-center justify-center rounded-full bg-blue-700 px-2 py-1 text-sm font-medium text-white transition-colors duration-200 hover:bg-blue-500 dark:bg-cyan-400 dark:text-zinc-800 dark:hover:bg-cyan-500"
        >
          ASSINE AGORA
        </a>
        {/* Gradiente com blur */}
        <div className="absolute inset-0 z-[-1] bg-[linear-gradient(rgba(67,70,72,0.4)_0%,rgba(15,15,15,0.9)_70%,rgba(18,20,24,1)_100%)] blur-sm"></div>
      </div>
    </div>,
  ];

  return (
    <section className="embla">
      <div className="embla__viewport overflow-hidden" ref={emblaRef}>
        <div className="embla__container flex gap-5">
          {cards.map((card, index) => (
            <div
              className="embla__slide w-full shrink-0 sm:w-[335px]"
              key={index}
            >
              {card}
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls mt-4 flex items-center justify-between">
        <div className="embla__dots flex items-center gap-2 md:gap-3">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={`embla__dot h-[3px] w-[25px] cursor-pointer rounded-sm border-none transition-colors duration-300 focus:outline-none focus-visible:bg-blue-500 dark:focus-visible:bg-white md:w-[50px] ${
                index === selectedIndex
                  ? "embla__dot--selected bg-blue-700 dark:bg-white"
                  : "bg-zinc-300 dark:bg-zinc-500"
              }`}
            />
          ))}
        </div>
        <div className="embla__buttons relative flex gap-2">
          <PrevButton
            className="text-blue-700 transition-colors duration-200 hover:text-blue-500 focus:outline-none focus-visible:text-blue-500 dark:text-white dark:hover:text-zinc-300 dark:focus-visible:text-zinc-300"
            onClick={onPrevButtonClick}
            disabled={prevBtnDisabled}
          />
          <NextButton
            className="text-blue-700 transition-colors duration-200 hover:text-blue-500 focus:outline-none focus-visible:text-blue-500 dark:text-white dark:hover:text-zinc-300 dark:focus-visible:text-zinc-300"
            onClick={onNextButtonClick}
            disabled={nextBtnDisabled}
          />
        </div>
      </div>
    </section>
  );
};

export default EmblaCarouselProducts;
