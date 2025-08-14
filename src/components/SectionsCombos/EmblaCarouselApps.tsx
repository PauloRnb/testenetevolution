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
import { CardStreaming } from "./CombosPageComponents/CardStreaming";

type PropType = {
  options?: EmblaOptionsType;
};

const EmblaCarouselApps: React.FC<PropType> = ({ options }) => {
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
    <CardStreaming
      key={0}
      imageStreaming="/logohbomaxfull.webp"
      altImageStraming="Logo HBO Max"
      titleMain="HBO Max"
      descriptionTitle="Entretenimento completo para você e sua família."
      linkStreaming="/Max"
      linkText="SABER MAIS"
    />,

    <CardStreaming
      key={1}
      imageStreaming="/logoparamountplusfull.webp"
      altImageStraming="Logo do Paramount+"
      titleMain="Paramount +"
      descriptionTitle="Assista séries, filmes e realities exclusivos."
      linkStreaming="/Paramount"
      linkText="SABER MAIS"
      bgImageDiv="bg-blue-700"
    />,

    <CardStreaming
      key={2}
      imageStreaming="/logotelecinefull.webp"
      altImageStraming="Logo do Telecine"
      titleMain="Telecine"
      descriptionTitle="Os melhores filmes do cinema direto na sua tela."
      linkStreaming="/Telecine"
      linkText="SABER MAIS"
      bgImageDiv="bg-rose-700"
    />,

    <CardStreaming
      key={3}
      imageStreaming="/logopremierefull.webp"
      altImageStraming="Logo do Premiere"
      titleMain="Premiere"
      descriptionTitle="Assine agora e acompanhe seu time do coração e todo o campeonato brasileiro."
      linkStreaming="/Premiere"
      linkText="SABER MAIS"
      bgImageDiv="bg-green-700"
    />,

    <CardStreaming
      key={4}
      imageStreaming="/logoespnfull.webp"
      altImageStraming="Logo do ESPN"
      titleMain="ESPN"
      descriptionTitle="Esportes ao vivo, campeonatos internacionais e muito mais."
      linkStreaming="/Espn"
      linkText="SABER MAIS"
      bgImageDiv="bg-red-700"
    />,

    <CardStreaming
      key={5}
      imageStreaming="/logosportvfull.webp"
      altImageStraming="Logo do SporTV"
      titleMain="SporTV"
      descriptionTitle="Assista aos principais campeonatos e programas esportivos."
      linkStreaming="/Esportv"
      linkText="SABER MAIS"
      bgImageDiv="bg-blue-950"
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

export default EmblaCarouselApps;
