"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import "@/app/styles.css";

import {
  MessageSquareWarning,
  LockKeyhole,
  MonitorX,
  KeyRound,
  WifiCog,
  TriangleAlert,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

// Import required modules
import { Navigation, Pagination, FreeMode } from "swiper/modules";

import { CardContentSecurity } from "./SecurityPageComponents/CardContentSecurity";

export default function SwiperSecurityCards() {
  return (
    <>
      <div>
        <div className="container h-full px-5 pt-16 xl:px-0">
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
              <CardContentSecurity
                title="Phishing"
                icon={
                  <MessageSquareWarning
                    size={44}
                    strokeWidth={1.4}
                    className="text-zinc-600 dark:text-white"
                  />
                }
                description="Cuidado com e-mails ou mensagens falsas que pedem dados pessoais. Verifique sempre a origem antes de clicar em links ou fornecer informações."
              />
            </SwiperSlide>

            {/* Card 2 */}
            <SwiperSlide className="!w-full sm:!w-[375px]">
              <CardContentSecurity
                title="Malware"
                icon={
                  <MonitorX
                    size={44}
                    strokeWidth={1.4}
                    className="text-zinc-600 dark:text-white"
                  />
                }
                description="Evite baixar arquivos ou programas de fontes desconhecidas. Mantenha antivírus atualizado para proteger seus dispositivos."
              />
            </SwiperSlide>

            {/* Card 3 */}
            <SwiperSlide className="!w-full sm:!w-[375px]">
              <CardContentSecurity
                title="Ransomware"
                icon={
                  <LockKeyhole
                    size={44}
                    strokeWidth={1.4}
                    className="text-zinc-600 dark:text-white"
                  />
                }
                description="Faça backups regulares e nunca abra anexos suspeitos. Esse tipo de vírus sequestra seus arquivos e pede resgate."
              />
            </SwiperSlide>

            {/* Card 4 */}
            <SwiperSlide className="!w-full sm:!w-[375px]">
              <CardContentSecurity
                title="Senhas"
                icon={
                  <KeyRound
                    size={44}
                    strokeWidth={1.4}
                    className="text-zinc-600 dark:text-white"
                  />
                }
                description="Use senhas fortes e únicas para cada conta, e ative autenticação em dois fatores sempre que possível."
              />
            </SwiperSlide>

            {/* Card 5 */}
            <SwiperSlide className="!w-full sm:!w-[375px]">
              <CardContentSecurity
                title="Wi-Fi"
                icon={
                  <WifiCog
                    size={44}
                    strokeWidth={1.4}
                    className="text-zinc-600 dark:text-white"
                  />
                }
                description="Evite redes públicas sem senha para acessar serviços sensíveis. Prefira conexões protegidas e considere usar VPN."
              />
            </SwiperSlide>

            {/* Card 6 */}
            <SwiperSlide className="!w-full sm:!w-[375px]">
              <CardContentSecurity
                title="Golpes"
                icon={
                  <TriangleAlert
                    size={44}
                    strokeWidth={1.4}
                    className="text-zinc-600 dark:text-white"
                  />
                }
                description="Não clique em links suspeitos ou promoções falsas. Sempre confirme informações em canais oficiais."
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
