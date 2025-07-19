"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { CirclePause, CirclePlay } from "lucide-react";
import { IoIosArrowDropright, IoIosArrowDropleft } from "react-icons/io";

// Slides (pode extrair para outro arquivo futuramente)
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
  const autoplayDelay = 3000;
  const autoplayRef = useRef(
    Autoplay({ delay: autoplayDelay, stopOnInteraction: true })
  );

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    autoplayRef.current,
  ]);

  const [progressKey, setProgressKey] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInitialized, setHasInitialized] = useState(false);

  useEffect(() => {
    if (!emblaApi) return;

    autoplayRef.current.play();
    setIsPlaying(true);
    setHasInitialized(true);

    const onSlideChange = () => {
      setProgressKey((prev) => prev + 1);
    };
    emblaApi.on("select", onSlideChange);

    return () => {
      emblaApi.off("select", onSlideChange);
    };
  }, [emblaApi]);

  const onPointerDown = useCallback(() => {
    if (!emblaApi || !isPlaying) return;
    autoplayRef.current.stop();
    setIsPlaying(false);
    setProgressKey(0);
  }, [emblaApi, isPlaying]);

  const toggleAutoplay = useCallback(() => {
    if (!emblaApi) return;
    if (isPlaying) {
      autoplayRef.current.stop();
      setIsPlaying(false);
      setProgressKey(0);
    } else {
      autoplayRef.current.play();
      setIsPlaying(true);
      setProgressKey((prev) => prev + 1);
    }
  }, [emblaApi, isPlaying]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="embla w-full mx-auto">
      <div
        className="embla__viewport overflow-hidden"
        ref={emblaRef}
        onPointerDown={onPointerDown}
      >
        <div className="embla__container flex">
          {slides.map((slide) => (
            <div
              key={slide.id}
              className="embla__slide flex-shrink-0 bg-blue-700 w-full h-[520px] sm:h-[620px] flex flex-col items-center justify-evenly bg-cover bg-center xl:rounded-lg px-5 md:flex-row md:h-[495px] select-none"
              style={{ backgroundImage: `url('${slide.bg}')` }}
            >
              <div className="flex items-center justify-center order-2 md:-order-1">
                <Image
                  src={slide.imageDesk}
                  alt="Imagem desktop"
                  width={220}
                  height={330}
                  priority
                  className="hidden md:block rounded-lg"
                />
                <Image
                  src={slide.imageMob}
                  alt="Imagem mobile"
                  width={430}
                  height={242}
                  priority
                  className="block md:hidden rounded-lg"
                />
              </div>
              <div className="flex flex-col items-center justify-center gap-5 sm:items-start sm:justify-start">
                <h2 className="text-white text-center sm:text-left sm:text-2xl text-lg leading-7 font-semibold">
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

      <div className="embla__controls flex items-center justify-between mt-4 px-5 xl:px-0">
        <div className="embla__buttons flex gap-2">
          <button
            className="text-blue-700 dark:text-white hover:text-blue-500 dark:hover:text-zinc-300 transition-colors duration-200"
            onClick={scrollPrev}
            type="button"
            aria-label="Previous slide"
          >
            <IoIosArrowDropleft size={32} className="md:size-9" />
          </button>
          <button
            className="text-blue-700 dark:text-white hover:text-blue-500 dark:hover:text-zinc-300 transition-colors duration-200"
            onClick={scrollNext}
            type="button"
            aria-label="Next slide"
          >
            <IoIosArrowDropright size={32} className="md:size-9" />
          </button>
        </div>

        {hasInitialized && isPlaying && (
          <div className="relative w-36 h-2 bg-transparent border dark:border-zinc-600 border-zinc-400 rounded overflow-hidden">
            <div
              key={progressKey}
              className="absolute top-0 left-0 h-full dark:bg-white bg-blue-700 animate-progress"
              style={{ animationDuration: `${autoplayDelay}ms` }}
            />
          </div>
        )}

        <button
          type="button"
          onClick={toggleAutoplay}
          aria-label={isPlaying ? "Pause autoplay" : "Play autoplay"}
          className="text-blue-700 dark:text-white hover:text-blue-500 dark:hover:text-zinc-300 transition-colors duration-200"
        >
          {isPlaying ? (
            <CirclePause size={32} strokeWidth={1.4} className="md:size-9" />
          ) : (
            <CirclePlay size={32} strokeWidth={1.4} className="md:size-9" />
          )}
        </button>
      </div>
    </div>
  );
}
