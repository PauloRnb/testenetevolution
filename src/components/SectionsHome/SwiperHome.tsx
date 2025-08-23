"use client";

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
      <div className="h-[503px] bg-blue-700">
        <div className="container h-full">
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
            <SwiperSlide className="bg-white">Slide 1</SwiperSlide>
            <SwiperSlide className="bg-emerald-500">Slide 2</SwiperSlide>
            <SwiperSlide className="bg-slate-600">Slide 3</SwiperSlide>
            <SwiperSlide className="bg-amber-500">Slide 4</SwiperSlide>
            {/* Botões customizados */}
            <button
              aria-label="Slider anterior"
              ref={prevRef}
              className="absolute left-0 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white text-white transition-colors duration-150 hover:bg-white hover:text-blue-700"
            >
              {/* SVG seta esquerda */}
              <ChevronLeft />
            </button>

            <button
              aria-label="Próximo slider"
              ref={nextRef}
              className="absolute right-0 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white text-white transition-colors duration-150 hover:bg-white hover:text-blue-700"
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
