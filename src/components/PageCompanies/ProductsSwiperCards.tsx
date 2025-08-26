"use client";

import { CardProducts } from "./CompaniesPageComponents/CardProducts";

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

export default function ProductsSwiperCards() {
  return (
    <>
      <div>
        <div className="container h-full">
          <Swiper
            pagination={{
              clickable: true,
              el: ".dots-pagination-cards",
            }}
            navigation={{
              prevEl: ".btn-cards-plans-prev",
              nextEl: ".btn-cards-plans-next",
            }}
            freeMode={true}
            slidesPerView={1}
            breakpoints={{
              426: { slidesPerView: "auto" },
            }}
            spaceBetween={20}
            modules={[Navigation, Pagination, FreeMode]}
            className="mySwiper"
          >
            {/* Card 1 */}
            <SwiperSlide className="!w-full sm:!w-[375px]">
              <CardProducts
                bgImageUrl="/wificardbg.webp"
                titleMain="Internet"
                descriptionTitle="Internet 100% fibra óptica e wi-fi premium."
                linkText="ASSINE AGORA"
                linkHref="https://wa.me/5585997362750?text=Olá, gostaria de assinar internet fibra empresarial."
              />
            </SwiperSlide>
            {/* Card 4 */}
            <SwiperSlide className="!w-full sm:!w-[375px]">
              <CardProducts
                bgImageUrl="/linkdedicadocardbg.webp"
                titleMain="Link Dedicado"
                descriptionTitle="Conexão exclusiva para sua empresa."
                linkText="ASSINE AGORA"
                linkHref="https://wa.me/5585997362750?text=Olá, gostaria de um link dedicado para minha empresa."
              />
            </SwiperSlide>
            {/* Card 5 */}
            <SwiperSlide className="!w-full sm:!w-[375px]">
              <CardProducts
                bgImageUrl="/ipfixocardbg.webp"
                titleMain="IP Fixo"
                descriptionTitle="IP fixo que garante estabilidade e segurança."
                linkText="ASSINE AGORA"
                linkHref="https://wa.me/5585997362750?text=Olá, gostaria de um IP Fixo."
              />
            </SwiperSlide>
            {/* Card 6 */}
            <SwiperSlide className="!w-full sm:!w-[375px]">
              <CardProducts
                bgImageUrl="/lantolancardbg.webp"
                titleMain="Lan-To-Lan"
                descriptionTitle="Conexão direta e rápida."
                linkText="ASSINE AGORA"
                linkHref="https://wa.me/5585997362750?text=Olá, gostaria de contratar o cabeamento Lan-To-Lan."
              />
            </SwiperSlide>
            <div className="mt-4 flex items-center justify-between">
              <div className="dots-pagination-cards"></div>
              <div className="flex justify-end gap-4">
                <button
                  aria-label="Slider anterior"
                  className="btn-cards-plans-prev z-10 flex h-10 w-10 items-center justify-center rounded-full bg-orange-600 text-white transition-colors duration-150 hover:bg-orange-700"
                >
                  {/* SVG seta esquerda */}
                  <ChevronLeft />
                </button>

                <button
                  aria-label="Próximo slider"
                  className="btn-cards-plans-next z-10 flex h-10 w-10 items-center justify-center rounded-full bg-orange-600 text-white transition-colors duration-150 hover:bg-orange-700"
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
