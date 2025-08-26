"use client";

import Image from "next/image";

import React, { useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import "@/app/styles.css";

// Import required modules
import { Navigation, Pagination, EffectFade, Autoplay } from "swiper/modules";

// Import Icons
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function SwiperHome() {
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);
  return (
    <>
      <div className="bg-blue-700 md:h-[495px]">
        <div className="container h-full px-5">
          <Swiper
            pagination={{
              clickable: true,
            }}
            effect={"fade"}
            loop={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            onBeforeInit={(swiper) => {
              if (typeof swiper.params.navigation === "boolean") {
                swiper.params.navigation = {
                  prevEl: prevRef.current,
                  nextEl: nextRef.current,
                };
              } else if (swiper.params.navigation) {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
              }
            }}
            modules={[Navigation, Pagination, EffectFade, Autoplay]}
            className="mySwiperHome"
          >
            <SwiperSlide className="!flex w-full !flex-col items-center justify-center gap-8 py-14 md:!flex-row md:!justify-around">
              <div className="flex w-fit flex-col items-center justify-center md:items-start">
                <h1 className="text-3xl font-semibold text-white md:text-left md:text-4xl">
                  Super Oferta Paramount
                </h1>
                <Image
                  src="/ofertaparamountslider-001.webp"
                  alt="Oferta Paramount | 500 MEGA Por R$99,99 Mensal."
                  className="mt-6 w-[16rem] sm:w-[21rem] 32md:w-[28rem]"
                  width={440}
                  height={293}
                  fetchPriority="high"
                  sizes="(max-width: 440px) 100vw, 21rem"
                />
              </div>
              <Image
                src="/capathecrowgirlsliderparamount-001.webp"
                alt="Capa da Série Paramount Plus | The Crow Girl."
                className="w-[10rem] sm:w-[14rem] 32md:w-[16rem]"
                width={200}
                height={300}
                fetchPriority="high"
                sizes="(max-width: 293px) 100vw, 21rem"
              />
            </SwiperSlide>
            <SwiperSlide className="!flex w-full !flex-col items-center justify-center gap-8 py-14 md:!flex-row md:!justify-around">
              <div className="flex w-fit flex-col items-center justify-center md:items-start">
                <h1 className="text-3xl font-semibold text-white md:text-left md:text-4xl">
                  Super Oferta HBO Max
                </h1>
                <Image
                  src="/ofertaparamountslider-001.webp"
                  alt="Oferta Paramount | 500 MEGA Por R$99,99 Mensal."
                  className="mt-6 w-[16rem] sm:w-[21rem] 32md:w-[28rem]"
                  width={440}
                  height={293}
                  loading="lazy"
                  sizes="(max-width: 440px) 100vw, 21rem"
                />
              </div>
              <Image
                src="/capapacificadorhbomaxslider-003.webp"
                alt="Capa Série HBO Max | Pacificador"
                className="w-[10rem] sm:w-[14rem] 32md:w-[16rem]"
                width={200}
                height={300}
                loading="lazy"
                sizes="(max-width: 293px) 100vw, 21rem"
              />
            </SwiperSlide>
            <SwiperSlide className="!flex w-full !flex-col items-center justify-center gap-8 py-14 md:!flex-row md:!justify-around">
              <div className="flex w-fit flex-col items-center justify-center md:items-start">
                <h1 className="text-3xl font-semibold text-white md:text-left md:text-4xl">
                  Super Oferta Telecine
                </h1>
                <Image
                  src="/ofertaparamountslider-001.webp"
                  alt="Oferta Telecine | 500 MEGA Por R$99,99 Mensal."
                  className="mt-6 w-[16rem] sm:w-[21rem] 32md:w-[28rem]"
                  width={440}
                  height={293}
                  loading="lazy"
                  sizes="(max-width: 440px) 100vw, 21rem"
                />
              </div>
              <Image
                src="/capapetsemacaotelecineslider-002.webp"
                alt="Capa Filme Telecine | Pets Em Ação"
                className="w-[10rem] sm:w-[14rem] 32md:w-[16rem]"
                width={200}
                height={300}
                loading="lazy"
                sizes="(max-width: 293px) 100vw, 21rem"
              />
            </SwiperSlide>
            <SwiperSlide className="!flex w-full !flex-col items-center justify-center gap-8 py-14 md:!flex-row md:!justify-around">
              <div className="flex w-fit flex-col items-center justify-center md:items-start">
                <h1 className="text-3xl font-semibold text-white md:text-left md:text-4xl">
                  Super Oferta Premiere
                </h1>
                <Image
                  src="/ofertaparamountslider-001.webp"
                  alt="Oferta Premiere | 500 MEGA Por R$99,99 Mensal."
                  className="mt-6 w-[16rem] sm:w-[21rem] 32md:w-[28rem]"
                  width={440}
                  height={293}
                  loading="lazy"
                  sizes="(max-width: 440px) 100vw, 21rem"
                />
              </div>
              <Image
                src="/capabrasileiraopremiereslider-004.webp"
                alt="Capa do Brasileirão 2025 | Premiere "
                className="w-[10rem] sm:w-[14rem] 32md:w-[16rem]"
                width={200}
                height={300}
                loading="lazy"
                sizes="(max-width: 293px) 100vw, 21rem"
              />
            </SwiperSlide>
            {/* Botões customizados */}
            <button
              aria-label="Slider anterior"
              ref={prevRef}
              className="absolute left-0 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white text-white transition-colors duration-150 hover:bg-white hover:text-blue-700 32md:flex"
            >
              {/* SVG seta esquerda */}
              <ChevronLeft />
            </button>

            <button
              aria-label="Próximo slider"
              ref={nextRef}
              className="absolute right-0 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white text-white transition-colors duration-150 hover:bg-white hover:text-blue-700 32md:flex"
            >
              {/* SVG seta direita */}
              <ChevronRight />
            </button>
          </Swiper>
        </div>
      </div>
    </>
  );
}
