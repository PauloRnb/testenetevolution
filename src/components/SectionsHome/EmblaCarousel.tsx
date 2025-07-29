"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { IoIosArrowDropright, IoIosArrowDropleft } from "react-icons/io";

// Slides
const slides = [
  {
    id: 1,
    title: "Os melhores filmes e as melhores séries.",
    bg: "/bgslider001.webp",
    imageDesk: "/dexterparamountplusdesk.webp",
    imageMob: "/dexterparamountplusmob.webp",
    card: "/cardofferparamount.webp",
  },
  {
    id: 2,
    title: "Os melhores filmes e as melhores séries.",
    bg: "/bgslider001.webp",
    imageDesk: "/1923paramountplusdesk.webp",
    imageMob: "/1923paramountplusmob.webp",
    card: "/cardofferparamount.webp",
  },
  {
    id: 3,
    title: "Os melhores filmes e as melhores séries.",
    bg: "/bgslider001.webp",
    imageDesk: "/landmanparamountplusdesk.webp",
    imageMob: "/landmanparamountplusmob.webp",
    card: "/cardofferparamount.webp",
  },
];

export function EmblaCarousel() {
  const autoplayDelay = 5000;
  const autoplayRef = useRef(
    Autoplay({ delay: autoplayDelay, stopOnInteraction: false }),
  );

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    autoplayRef.current,
  ]);

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  useEffect(() => {
    if (!emblaApi) return;

    autoplayRef.current.play();

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    onSelect();

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  const onPointerDown = useCallback(() => {
    autoplayRef.current.stop();
  }, []);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi],
  );

  return (
    <div className="embla mx-auto w-full">
      <div
        className="embla__viewport overflow-hidden"
        ref={emblaRef}
        onPointerDown={onPointerDown}
      >
        <div className="embla__container flex">
          {slides.map((slide) => (
            <div
              key={slide.id}
              className="embla__slide flex h-[520px] w-full flex-shrink-0 select-none flex-col items-center justify-evenly bg-blue-700 bg-cover bg-center px-5 sm:h-[620px] md:h-[495px] md:flex-row xl:rounded-lg"
              style={{ backgroundImage: `url('${slide.bg}')` }}
            >
              <div className="order-2 flex items-center justify-center md:-order-1">
                <Image
                  src={slide.imageDesk}
                  alt="Imagem desktop"
                  width={220}
                  height={330}
                  priority
                  className="hidden rounded-lg md:block"
                />
                <Image
                  src={slide.imageMob}
                  alt="Imagem mobile"
                  width={430}
                  height={242}
                  priority
                  className="block rounded-lg md:hidden"
                />
              </div>
              <div className="flex flex-col items-center justify-center gap-5 sm:items-start sm:justify-start">
                <h2 className="text-center text-lg font-semibold leading-7 text-white sm:text-left sm:text-2xl">
                  {slide.title}
                </h2>
                <Image
                  src={slide.card}
                  alt="Card"
                  width={430}
                  height={139}
                  priority
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls mt-4 flex items-center justify-between px-5 xl:px-0">
        {/* Dots */}
        <div className="flex items-center gap-2">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              aria-label={`Ir para o slide ${index + 1}`}
              className={`h-[3px] w-[25px] rounded-full transition-colors duration-300 focus:bg-blue-500 focus:outline-none dark:focus:bg-white md:w-[50px] ${
                index === selectedIndex
                  ? "bg-blue-700 dark:bg-white"
                  : "bg-zinc-300 dark:bg-zinc-500"
              }`}
            />
          ))}
        </div>
        {/* Botões esquerda/direita */}
        <div className="embla__buttons flex gap-2">
          <button
            className="text-blue-700 transition-colors duration-200 hover:text-blue-500 focus:text-blue-500 focus:outline-none dark:text-white dark:hover:text-zinc-300 dark:focus:text-zinc-300"
            onClick={scrollPrev}
            type="button"
            aria-label="Voltar Slider"
          >
            <IoIosArrowDropleft size={32} className="md:size-9" />
          </button>
          <button
            className="text-blue-700 transition-colors duration-200 hover:text-blue-500 focus:text-blue-500 focus:outline-none dark:text-white dark:hover:text-zinc-300 dark:focus:text-zinc-300"
            onClick={scrollNext}
            type="button"
            aria-label="Proximo Slider"
          >
            <IoIosArrowDropright size={32} className="md:size-9" />
          </button>
        </div>
      </div>
    </div>
  );
}
