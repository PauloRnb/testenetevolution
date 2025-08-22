"use client";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import "@/app/styles.css";

// import required modules
import { Navigation, Pagination, EffectFade, Autoplay } from "swiper/modules";

export default function SwiperHome() {
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);
  return (
    <>
      <div className="h-[503px] bg-blue-700">
        <div className="container h-full">
          <Swiper
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            pagination={{
              clickable: true,
            }}
            effect={"fade"}
            loop={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            onSwiper={(swiper) => {
              // depois que o swiper monta, liga de novo os botões
              setTimeout(() => {
                if (
                  swiper.params.navigation &&
                  typeof swiper.params.navigation !== "boolean"
                ) {
                  swiper.params.navigation.prevEl = prevRef.current;
                  swiper.params.navigation.nextEl = nextRef.current;
                  swiper.navigation.destroy();
                  swiper.navigation.init();
                  swiper.navigation.update();
                }
              });
            }}
            modules={[Navigation, Pagination, EffectFade, Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide className="bg-blue-900">Slide 1</SwiperSlide>
            <SwiperSlide className="bg-emerald-900">Slide 2</SwiperSlide>
            <SwiperSlide className="bg-slate-900">Slide 3</SwiperSlide>
            <SwiperSlide className="bg-amber-900">Slide 4</SwiperSlide>
            {/* Botões customizados */}
            <button
              ref={prevRef}
              className="absolute left-0 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-blue-700 shadow-lg hover:bg-white 32md:flex"
            >
              {/* SVG seta esquerda */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <button
              ref={nextRef}
              className="absolute right-0 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-blue-700 shadow-lg hover:bg-white 32md:flex"
            >
              {/* SVG seta direita */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </Swiper>
        </div>
      </div>
    </>
  );
}
