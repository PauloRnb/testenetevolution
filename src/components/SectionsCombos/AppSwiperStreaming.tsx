"use client";

import { CardStreaming } from "./CombosPageComponents/CardStreaming";

import React, { useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import "@/app/styles.css";

// Import required modules
import { Navigation, Pagination, FreeMode } from "swiper/modules";

// Import Icons
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function AppsSwiperStreaming() {
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);
  return (
    <>
      <div>
        <div className="container h-full">
          <Swiper
            pagination={{
              clickable: true,
              el: ".dots-pagination-cards",
            }}
            freeMode={true}
            slidesPerView={1}
            breakpoints={{
              426: { slidesPerView: "auto" },
            }}
            spaceBetween={20}
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
            modules={[Navigation, Pagination, FreeMode]}
            className="mySwiper"
          >
            {/* Card 1 */}
            <SwiperSlide className="!w-full sm:!w-[375px]">
              <CardStreaming
                imageStreaming="/logohbomaxfull.webp"
                altImageStraming="Logo HBO Max"
                titleMain="HBO Max"
                descriptionTitle="Entretenimento completo para você e sua família."
                linkStreaming="/Max"
                linkText="SABER MAIS"
              />
            </SwiperSlide>
            {/* Card 2 */}
            <SwiperSlide className="!w-full sm:!w-[375px]">
              <CardStreaming
                imageStreaming="/logoparamountplusfull.webp"
                altImageStraming="Logo do Paramount+"
                titleMain="Paramount +"
                descriptionTitle="Assista séries, filmes e realities exclusivos."
                linkStreaming="/Paramount"
                linkText="SABER MAIS"
                bgImageDiv="bg-blue-700"
              />
            </SwiperSlide>
            {/* Card 3 */}
            <SwiperSlide className="!w-full sm:!w-[375px]">
              <CardStreaming
                imageStreaming="/logotelecinefull.webp"
                altImageStraming="Logo do Telecine"
                titleMain="Telecine"
                descriptionTitle="Os melhores filmes do cinema direto na sua tela."
                linkStreaming="/Telecine"
                linkText="SABER MAIS"
                bgImageDiv="bg-rose-700"
              />
            </SwiperSlide>
            {/* Card 4 */}
            <SwiperSlide className="!w-full sm:!w-[375px]">
              <CardStreaming
                imageStreaming="/logopremierefull.webp"
                altImageStraming="Logo do Premiere"
                titleMain="Premiere"
                descriptionTitle="Assine agora e acompanhe seu time do coração e todo o campeonato brasileiro."
                linkStreaming="/Premiere"
                linkText="SABER MAIS"
                bgImageDiv="bg-green-700"
              />
            </SwiperSlide>
            {/* Card 5 */}
            <SwiperSlide className="!w-full sm:!w-[375px]">
              <CardStreaming
                imageStreaming="/logoespnfull.webp"
                altImageStraming="Logo do ESPN"
                titleMain="ESPN"
                descriptionTitle="Esportes ao vivo, campeonatos internacionais e muito mais."
                linkStreaming="/Espn"
                linkText="SABER MAIS"
                bgImageDiv="bg-red-700"
              />
            </SwiperSlide>
            {/* Card 6 */}
            <SwiperSlide className="!w-full sm:!w-[375px]">
              <CardStreaming
                imageStreaming="/logosportvfull.webp"
                altImageStraming="Logo do SporTV"
                titleMain="SporTV"
                descriptionTitle="Assista aos principais campeonatos e programas esportivos."
                linkStreaming="/Esportv"
                linkText="SABER MAIS"
                bgImageDiv="bg-blue-950"
              />
            </SwiperSlide>
            <div className="mt-4 flex items-center justify-between">
              <div className="dots-pagination-cards"></div>
              <div className="flex justify-end gap-4">
                <button
                  aria-label="Slider anterior"
                  ref={prevRef}
                  className="z-10 flex h-10 w-10 items-center justify-center rounded-full bg-orange-600 text-white transition-colors duration-150 hover:bg-orange-700"
                >
                  {/* SVG seta esquerda */}
                  <ChevronLeft />
                </button>

                <button
                  aria-label="Próximo slider"
                  ref={nextRef}
                  className="z-10 flex h-10 w-10 items-center justify-center rounded-full bg-orange-600 text-white transition-colors duration-150 hover:bg-orange-700"
                >
                  {/* SVG seta direita */}
                  <ChevronRight />
                </button>
              </div>
            </div>
          </Swiper>
        </div>
      </div>
    </>
  );
}
