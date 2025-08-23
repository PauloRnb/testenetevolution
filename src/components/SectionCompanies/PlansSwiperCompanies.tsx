"use client";

import { Card } from "@/components/CardPlans";
import { Separator } from "@/components/ui/separator";

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

export default function PlansSwiperCompanies() {
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
              427: { slidesPerView: "auto" },
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
              <Card.Root key={0} className="border-blue-700">
                <Card.Top className="bg-blue-700">
                  <Card.Mtop>
                    <Card.Items text="PLANO ULTRA" className="text-blue-700" />
                    <Card.ModalTwo
                      textMbOne="400MEGA"
                      textMbTwo="Download 400Mbps"
                      textMbThree="Upload 200Mbps"
                      textPriceOne="de 94,99"
                      textPriceTwo="89"
                    >
                      <Card.ModalBox>
                        <Card.ModalCombos
                          text="ASSINE AGORA"
                          message="Olá gostaria de assinar o plano empresarial: 400Mbps | R$89,99."
                          className="bg-blue-700 hover:bg-blue-500 focus:bg-blue-500 focus:outline-none dark:focus:bg-blue-500"
                        />
                      </Card.ModalBox>
                    </Card.ModalTwo>
                  </Card.Mtop>
                  <Card.Item text="400MEGA" />
                </Card.Top>
                <Card.Content>
                  <Card.Infor>
                    <Card.List
                      className="ml-[15px] bg-blue-700"
                      text="Download 400Mbps"
                      textTwo="Upload 200Mbps"
                    />
                    <Separator className="h-[2px] rounded-full bg-zinc-300" />
                    <Card.Includes>
                      <Card.Rede className="bg-blue-700" />
                    </Card.Includes>
                    <Card.Price text="89" />
                  </Card.Infor>
                </Card.Content>
                <Card.BtnCombos
                  text="ASSINE AGORA"
                  message="Olá gostaria de assinar o plano empresarial: 400Mbps | R$89,99."
                  className="bg-blue-700 hover:bg-blue-500 focus:bg-blue-500 focus:outline-none dark:focus:bg-blue-500"
                />
              </Card.Root>
            </SwiperSlide>
            {/* Card 4 */}
            <SwiperSlide className="!w-full sm:!w-[375px]">
              <Card.Root key={1} className="border-blue-700">
                <Card.Top className="bg-blue-700">
                  <Card.Mtop>
                    <Card.Items
                      text="PLANO PREMIUM"
                      className="text-blue-700"
                    />
                    <Card.ModalTwo
                      textMbOne="600MEGA"
                      textMbTwo="Download 600Mbps"
                      textMbThree="Upload 300Mbps"
                      textPriceOne="de 104,99"
                      textPriceTwo="99"
                    >
                      <Card.ModalBox>
                        <Card.ModalCombos
                          text="ASSINE AGORA"
                          message="Olá gostaria de assinar o plano empresarial: 600Mbps | R$99,99."
                          className="bg-blue-700 hover:bg-blue-500 focus:bg-blue-500 focus:outline-none dark:focus:bg-blue-500"
                        />
                      </Card.ModalBox>
                    </Card.ModalTwo>
                  </Card.Mtop>
                  <Card.Item text="600MEGA" />
                </Card.Top>
                <Card.Content>
                  <Card.Infor>
                    <Card.List
                      className="ml-[15px] bg-blue-700"
                      text="Download 600Mbps"
                      textTwo="Upload 300Mbps"
                    />
                    <Separator className="h-[2px] rounded-full bg-zinc-300" />
                    <Card.Includes>
                      <Card.Rede className="bg-blue-700" />
                    </Card.Includes>
                    <Card.Price text="99" />
                  </Card.Infor>
                </Card.Content>
                <Card.BtnCombos
                  text="ASSINE AGORA"
                  message="Olá gostaria de assinar o plano empresarial: 600Mbps | R$99,99."
                  className="bg-blue-700 hover:bg-blue-500 focus:bg-blue-500 focus:outline-none dark:focus:bg-blue-500"
                />
              </Card.Root>
            </SwiperSlide>
            {/* Card 5 */}
            <SwiperSlide className="!w-full sm:!w-[375px]">
              <Card.Root key={2} className="border-orange-600 dark:bg-zinc-800">
                <Card.Top>
                  <Card.Mtop>
                    <Card.Items text="MAIS ASSINADO" />
                    <Card.Modal
                      textMbOne="750MEGA"
                      textMbTwo="Download 750Mbps"
                      textMbThree="Upload 375Mbps"
                      textPriceOne="de 124,99"
                      textPriceTwo="119"
                    >
                      <Card.ModalBox>
                        <Card.ModalCombos
                          text="ASSINE AGORA"
                          message="Olá gostaria de assinar o plano empresarial: 750Mbps | R$119,99."
                          className="focus:outline-none focus-visible:bg-orange-500 dark:focus-visible:bg-orange-500"
                        />
                      </Card.ModalBox>
                    </Card.Modal>
                  </Card.Mtop>
                  <Card.Item text="750MEGA" />
                </Card.Top>
                <Card.Content>
                  <Card.Infor>
                    <Card.List
                      className="ml-[15px] bg-orange-600"
                      text="Download 750Mbps"
                      textTwo="Upload 375Mbps"
                    />
                    <Separator className="h-[2px] rounded-full bg-zinc-300 dark:bg-orange-600" />
                    <Card.Includes>
                      <Card.Rede className="bg-orange-600" />
                    </Card.Includes>
                    <Card.Price text="119" />
                  </Card.Infor>
                </Card.Content>
                <Card.BtnCombos
                  message="Olá gostaria de assinar o plano empresarial: 750Mbps | R$119,99."
                  text="ASSINE AGORA"
                  className="focus:bg-orange-500 focus:outline-none dark:focus:bg-orange-500"
                />
              </Card.Root>
            </SwiperSlide>
            {/* Card 6 */}
            <SwiperSlide className="!w-full sm:!w-[375px]">
              <Card.Root key={3} className="border-blue-700">
                <Card.Top className="bg-blue-700">
                  <Card.Mtop>
                    <Card.Items text="PLANO MASTER" className="text-blue-700" />
                    <Card.ModalTwo
                      textMbOne="800"
                      textMbTwo="Download 800Mbps"
                      textMbThree="Upload 400Mbps"
                      textPriceOne="de 139,99"
                      textPriceTwo="134,99"
                    >
                      <Card.ModalBox>
                        <Card.ModalCombos
                          text="ASSINE AGORA"
                          message="Olá gostaria de assinar o plano empresarial: 800Mbps | R134,99."
                          className="bg-blue-700 hover:bg-blue-500 focus:bg-blue-500 focus:outline-none dark:focus:bg-blue-500"
                        />
                      </Card.ModalBox>
                    </Card.ModalTwo>
                  </Card.Mtop>
                  <Card.Item text="800MEGA" />
                </Card.Top>
                <Card.Content>
                  <Card.Infor>
                    <Card.List
                      className="ml-[15px] bg-blue-700"
                      text="Download 800Mbps"
                      textTwo="Upload 400Mbps"
                    />
                    <Separator className="h-[2px] rounded-full bg-zinc-300" />
                    <Card.Includes>
                      <Card.Rede className="bg-blue-700" />
                    </Card.Includes>
                    <Card.Price text="134,99" />
                  </Card.Infor>
                </Card.Content>
                <Card.BtnCombos
                  text="ASSINE AGORA"
                  message="Olá gostaria de assinar o plano empresarial: 800Mbps | R134,99."
                  className="bg-blue-700 hover:bg-blue-500 focus:bg-blue-500 focus:outline-none dark:focus:bg-blue-500"
                />
              </Card.Root>
            </SwiperSlide>
            <div className="mt-4 flex items-center justify-between">
              <div className="dots-pagination-cards"></div>
              <div className="flex justify-end gap-4">
                <button
                  aria-label="Slider anterior"
                  ref={prevRef}
                  className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border-2 border-white bg-orange-600 text-white transition-colors hover:bg-orange-500"
                >
                  <ChevronLeft />
                </button>
                <button
                  aria-label="Próximo slider"
                  ref={nextRef}
                  className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border-2 border-white bg-orange-600 text-white transition-colors hover:bg-orange-500"
                >
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
