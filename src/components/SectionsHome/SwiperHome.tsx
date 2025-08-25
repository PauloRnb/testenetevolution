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
            className="mySwiper"
          >
            <SwiperSlide className="flex flex-col items-center justify-center gap-8 py-10 md:flex-row md:!justify-around">
              <div className="flex w-fit flex-col items-center justify-center md:items-start">
                <h1 className="text-3xl font-semibold text-white md:text-left md:text-4xl">
                  Super Oferta Paramount
                </h1>
                <Image
                  src="/ofertaparamountslider-001.webp"
                  alt="Oferta Paramount | 500 MEGA Por R$99,99 Mensal."
                  width={448} // maior tamanho exibido (28rem ≈ 448px)
                  height={204} // mantém proporção (182 / 400 * 448 ≈ 204)
                  className="mt-6 w-[16rem] sm:w-[21rem] 32md:w-[28rem]"
                  priority
                  sizes="(max-width: 640px) 16rem, (max-width: 1024px) 21rem, 28rem"
                />
              </div>
              <Image
                src="/capathecrowgirlsliderparamount-001.webp"
                alt="Oferta Paramount | 500 MEGA Por R$99,99 Mensal."
                width={256} // maior largura que a imagem realmente aparece
                height={384} // mantém proporção
                className="w-[10rem] sm:w-[14rem] 32md:w-[16rem]"
                sizes="(max-width: 640px) 10rem, (max-width: 1024px) 14rem, 16rem"
                priority
              />
            </SwiperSlide>
            <SwiperSlide className="flex flex-col items-center justify-center gap-8 py-10 md:flex-row md:!justify-around">
              <div className="flex w-fit flex-col items-center justify-center md:items-start">
                <h1 className="text-3xl font-semibold text-white md:text-left md:text-4xl">
                  Super Oferta Paramount
                </h1>
                <Image
                  src="/ofertaparamountslider-001.webp"
                  alt="Oferta Paramount | 500 MEGA Por R$99,99 Mensal."
                  width={448} // maior tamanho exibido (28rem ≈ 448px)
                  height={204} // mantém proporção (182 / 400 * 448 ≈ 204)
                  className="mt-6 w-[16rem] sm:w-[21rem] 32md:w-[28rem]"
                  priority
                  sizes="(max-width: 640px) 16rem, (max-width: 1024px) 21rem, 28rem"
                />
              </div>
              <Image
                src="/capathecrowgirlsliderparamount-001.webp"
                alt="Oferta Paramount | 500 MEGA Por R$99,99 Mensal."
                width={256} // maior largura que a imagem realmente aparece
                height={384} // mantém proporção
                className="w-[10rem] sm:w-[14rem] 32md:w-[16rem]"
                sizes="(max-width: 640px) 10rem, (max-width: 1024px) 14rem, 16rem"
                priority
              />
            </SwiperSlide>
            <SwiperSlide className="flex flex-col items-center justify-center gap-8 py-10 md:flex-row md:!justify-around">
              <div className="flex w-fit flex-col items-center justify-center md:items-start">
                <h1 className="text-3xl font-semibold text-white md:text-left md:text-4xl">
                  Super Oferta Paramount
                </h1>
                <Image
                  src="/ofertaparamountslider-001.webp"
                  alt="Oferta Paramount | 500 MEGA Por R$99,99 Mensal."
                  width={448} // maior tamanho exibido (28rem ≈ 448px)
                  height={204} // mantém proporção (182 / 400 * 448 ≈ 204)
                  className="mt-6 w-[16rem] sm:w-[21rem] 32md:w-[28rem]"
                  priority
                  sizes="(max-width: 640px) 16rem, (max-width: 1024px) 21rem, 28rem"
                />
              </div>
              <Image
                src="/capathecrowgirlsliderparamount-001.webp"
                alt="Oferta Paramount | 500 MEGA Por R$99,99 Mensal."
                width={256} // maior largura que a imagem realmente aparece
                height={384} // mantém proporção
                className="w-[10rem] sm:w-[14rem] 32md:w-[16rem]"
                sizes="(max-width: 640px) 10rem, (max-width: 1024px) 14rem, 16rem"
                priority
              />
            </SwiperSlide>
            <SwiperSlide className="flex flex-col items-center justify-center gap-8 py-10 md:flex-row md:!justify-around">
              <div className="flex w-fit flex-col items-center justify-center md:items-start">
                <h1 className="text-3xl font-semibold text-white md:text-left md:text-4xl">
                  Super Oferta Paramount
                </h1>
                <Image
                  src="/ofertaparamountslider-001.webp"
                  alt="Oferta Paramount | 500 MEGA Por R$99,99 Mensal."
                  width={448} // maior tamanho exibido (28rem ≈ 448px)
                  height={204} // mantém proporção (182 / 400 * 448 ≈ 204)
                  className="mt-6 w-[16rem] sm:w-[21rem] 32md:w-[28rem]"
                  priority
                  sizes="(max-width: 640px) 16rem, (max-width: 1024px) 21rem, 28rem"
                />
              </div>
              <Image
                src="/capathecrowgirlsliderparamount-001.webp"
                alt="Oferta Paramount | 500 MEGA Por R$99,99 Mensal."
                width={256} // maior largura que a imagem realmente aparece
                height={384} // mantém proporção
                className="w-[10rem] sm:w-[14rem] 32md:w-[16rem]"
                sizes="(max-width: 640px) 10rem, (max-width: 1024px) 14rem, 16rem"
                priority
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
