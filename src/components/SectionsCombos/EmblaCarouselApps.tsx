"use client";

import React from "react";
import Image from "next/image";
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
import { ChevronRight } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

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
    <div
      key={0}
      className="relative flex h-[22.5rem] w-full select-none flex-col gap-4 rounded-2xl border border-zinc-100 bg-zinc-100 p-4 shadow-sm dark:border-white dark:bg-zinc-900"
    >
      <div className="flex h-[10rem] w-full items-center justify-center overflow-hidden rounded-[0.5rem] bg-zinc-900 dark:bg-zinc-800">
        <Image
          src="/logohbomaxfull.webp"
          alt="Logo HBO Max"
          width={245}
          height={42}
          loading="lazy"
        />
      </div>
      <div className="flex flex-col gap-[2px]">
        <h3 className="text-xl font-semibold text-zinc-900 dark:text-white">
          HBO Max
        </h3>
        <Separator className="!h-[2px] !w-10 rounded-full bg-blue-700 dark:bg-white" />
        <p className="mt-4 text-base font-medium text-zinc-600 dark:text-zinc-300">
          Entretenimento completo para você e sua família.
        </p>
      </div>
      <Link
        href="/Max"
        className="absolute bottom-0 left-0 flex h-14 w-full items-center justify-center gap-2 rounded-b-xl bg-blue-700 text-base font-medium text-white transition-colors duration-200 hover:bg-blue-500 focus:outline-none focus-visible:bg-blue-500 dark:bg-cyan-400 dark:hover:bg-cyan-500 dark:focus-visible:bg-cyan-500"
      >
        SABER MAIS
        <ChevronRight size={20} />
      </Link>
    </div>,

    <div
      key={1}
      className="relative flex h-[22.5rem] w-full select-none flex-col gap-4 rounded-2xl border border-zinc-100 bg-zinc-100 p-4 shadow-sm dark:border-white dark:bg-zinc-900"
    >
      <div className="flex h-[10rem] w-full items-center justify-center overflow-hidden rounded-[0.5rem] bg-blue-700">
        <Image
          src="/logoparamountplusfull.webp"
          alt="Logo Paramount Plus"
          width={245}
          height={42}
          loading="lazy"
        />
      </div>
      <div className="flex flex-col gap-[2px]">
        <h3 className="text-xl font-semibold text-zinc-900 dark:text-white">
          Paramount +
        </h3>
        <Separator className="!h-[2px] !w-10 rounded-full bg-blue-700 dark:bg-white" />
        <p className="mt-4 text-base font-medium text-zinc-600 dark:text-zinc-300">
          Assista séries, filmes e realities exclusivos.
        </p>
      </div>
      <Link
        href="/Max"
        className="absolute bottom-0 left-0 flex h-14 w-full items-center justify-center gap-2 rounded-b-xl bg-blue-700 text-base font-medium text-white transition-colors duration-200 hover:bg-blue-500 focus:outline-none focus-visible:bg-blue-500 dark:bg-cyan-400 dark:hover:bg-cyan-500 dark:focus-visible:bg-cyan-500"
      >
        SABER MAIS
        <ChevronRight size={20} />
      </Link>
    </div>,

    <div
      key={2}
      className="relative flex h-[22.5rem] w-full select-none flex-col gap-4 rounded-2xl border border-zinc-100 bg-zinc-100 p-4 shadow-sm dark:border-white dark:bg-zinc-900"
    >
      <div className="flex h-[10rem] w-full items-center justify-center overflow-hidden rounded-[0.5rem] bg-rose-600">
        <Image
          src="/logotelecinefull.webp"
          alt="Logo Telecine"
          width={245}
          height={42}
          loading="lazy"
        />
      </div>
      <div className="flex flex-col gap-[2px]">
        <h3 className="text-xl font-semibold text-zinc-900 dark:text-white">
          Telecine
        </h3>
        <Separator className="!h-[2px] !w-10 rounded-full bg-blue-700 dark:bg-white" />
        <p className="mt-4 text-base font-medium text-zinc-600 dark:text-zinc-300">
          Os melhores filmes do cinema direto na sua tela.
        </p>
      </div>
      <Link
        href="/Max"
        className="absolute bottom-0 left-0 flex h-14 w-full items-center justify-center gap-2 rounded-b-xl bg-blue-700 text-base font-medium text-white transition-colors duration-200 hover:bg-blue-500 focus:outline-none focus-visible:bg-blue-500 dark:bg-cyan-400 dark:hover:bg-cyan-500 dark:focus-visible:bg-cyan-500"
      >
        SABER MAIS
        <ChevronRight size={20} />
      </Link>
    </div>,

    <div
      key={3}
      className="relative flex h-[22.5rem] w-full select-none flex-col gap-4 rounded-2xl border border-zinc-100 bg-zinc-100 p-4 shadow-sm dark:border-white dark:bg-zinc-900"
    >
      <div className="flex h-[10rem] w-full items-center justify-center overflow-hidden rounded-[0.5rem] bg-green-700">
        <Image
          src="/logopremierefull.webp"
          alt="Logo Premiere"
          width={245}
          height={42}
          loading="lazy"
        />
      </div>
      <div className="flex flex-col gap-[2px]">
        <h3 className="text-xl font-semibold text-zinc-900 dark:text-white">
          Premiere
        </h3>
        <Separator className="!h-[2px] !w-10 rounded-full bg-blue-700 dark:bg-white" />
        <p className="mt-4 text-base font-medium text-zinc-600 dark:text-zinc-300">
          Assine agora e acompanhe seu time do coração e todo o campeonato
          brasileiro.
        </p>
      </div>
      <Link
        href="/Max"
        className="absolute bottom-0 left-0 flex h-14 w-full items-center justify-center gap-2 rounded-b-xl bg-blue-700 text-base font-medium text-white transition-colors duration-200 hover:bg-blue-500 focus:outline-none focus-visible:bg-blue-500 dark:bg-cyan-400 dark:hover:bg-cyan-500 dark:focus-visible:bg-cyan-500"
      >
        SABER MAIS
        <ChevronRight size={20} />
      </Link>
    </div>,

    <div
      key={4}
      className="relative flex h-[22.5rem] w-full select-none flex-col gap-4 rounded-2xl border border-zinc-100 bg-zinc-100 p-4 shadow-sm dark:border-white dark:bg-zinc-900"
    >
      <div className="flex h-[10rem] w-full items-center justify-center overflow-hidden rounded-[0.5rem] bg-red-600">
        <Image
          src="/logoespnfull.webp"
          alt="Logo ESPN"
          width={173}
          height={43}
          loading="lazy"
        />
      </div>
      <div className="flex flex-col gap-[2px]">
        <h3 className="text-xl font-semibold text-zinc-900 dark:text-white">
          ESPN
        </h3>
        <Separator className="!h-[2px] !w-10 rounded-full bg-blue-700 dark:bg-white" />
        <p className="mt-4 text-base font-medium text-zinc-600 dark:text-zinc-300">
          Esportes ao vivo, campeonatos internacionais e muito mais.
        </p>
      </div>
      <Link
        href="/Max"
        className="absolute bottom-0 left-0 flex h-14 w-full items-center justify-center gap-2 rounded-b-xl bg-blue-700 text-base font-medium text-white transition-colors duration-200 hover:bg-blue-500 focus:outline-none focus-visible:bg-blue-500 dark:bg-cyan-400 dark:hover:bg-cyan-500 dark:focus-visible:bg-cyan-500"
      >
        SABER MAIS
        <ChevronRight size={20} />
      </Link>
    </div>,

    <div
      key={5}
      className="relative flex h-[22.5rem] w-full select-none flex-col gap-4 rounded-2xl border border-zinc-100 bg-zinc-100 p-4 shadow-sm dark:border-white dark:bg-zinc-900"
    >
      <div className="flex h-[10rem] w-full items-center justify-center overflow-hidden rounded-[0.5rem] bg-blue-950">
        <Image
          src="/logosportvfull.webp"
          alt="Logo SporTV"
          width={218}
          height={58}
          loading="lazy"
        />
      </div>
      <div className="flex flex-col gap-[2px]">
        <h3 className="text-xl font-semibold text-zinc-900 dark:text-white">
          SporTV
        </h3>
        <Separator className="!h-[2px] !w-10 rounded-full bg-blue-700 dark:bg-white" />
        <p className="mt-4 text-base font-medium text-zinc-600 dark:text-zinc-300">
          Assista aos principais campeonatos e programas esportivos.
        </p>
      </div>
      <Link
        href="/Sportv"
        className="absolute bottom-0 left-0 flex h-14 w-full items-center justify-center gap-2 rounded-b-xl bg-blue-700 text-base font-medium text-white transition-colors duration-200 hover:bg-blue-500 focus:outline-none focus-visible:bg-blue-500 dark:bg-cyan-400 dark:hover:bg-cyan-500 dark:focus-visible:bg-cyan-500"
      >
        SABER MAIS
        <ChevronRight size={20} />
      </Link>
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

export default EmblaCarouselApps;
