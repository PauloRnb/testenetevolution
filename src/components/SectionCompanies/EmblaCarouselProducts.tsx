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
import { CardProducts } from "./CompaniesPageComponents/CardProducts";

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
    <CardProducts
      key={0}
      bgImageUrl="/wificardbg.webp"
      titleMain="Internet"
      descriptionTitle="Internet 100% fibra óptica e wi-fi premium."
      linkText="ASSINE AGORA"
      linkHref="https://wa.me/5585997362750?text=Olá, gostaria de assinar internet fibra empresarial."
    />,

    <CardProducts
      key={1}
      bgImageUrl="/linkdedicadocardbg.webp"
      titleMain="Link Dedicado"
      descriptionTitle="Conexão exclusiva para sua empresa."
      linkText="ASSINE AGORA"
      linkHref="https://wa.me/5585997362750?text=Olá, gostaria de um link dedicado para minha empresa."
    />,

    <CardProducts
      key={2}
      bgImageUrl="/ipfixocardbg.webp"
      titleMain="IP Fixo"
      descriptionTitle="IP fixo que garante estabilidade e segurança."
      linkText="ASSINE AGORA"
      linkHref="https://wa.me/5585997362750?text=Olá, gostaria de um IP Fixo."
    />,

    <CardProducts
      key={3}
      bgImageUrl="/lantolancardbg.webp"
      titleMain="Lan-To-Lan"
      descriptionTitle="Conexão direta e rápida."
      linkText="ASSINE AGORA"
      linkHref="https://wa.me/5585997362750?text=Olá, gostaria de contratar o cabeamento Lan-To-Lan."
    />,
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
