"use client";

import { Card } from "@/components/CardPlans";
import { Separator } from "@/components/ui/separator";

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

export default function NormalSwiperPlans() {
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
              <Card.Root className="!w-full border-orange-600 dark:bg-zinc-800 sm:!w-[375px]">
                <Card.Top>
                  <Card.Mtop>
                    <Card.Items text="MAIS ASSINADO" />
                    <Card.Modal
                      textMbOne="300MEGA"
                      textMbTwo="Download 300Mbps"
                      textMbThree="Upload 150Mbps"
                      textPriceOne="de 74,99"
                      textPriceTwo="69"
                    >
                      <Card.ModalBox>
                        <Card.ModalCombos
                          text="ASSINE AGORA"
                          message="Olá gostaria de assinar o plano: 300Mbps | R$69,99."
                          className="focus:outline-none focus-visible:bg-orange-500 dark:focus-visible:bg-orange-500"
                        />
                      </Card.ModalBox>
                    </Card.Modal>
                  </Card.Mtop>
                  <Card.Item text="300MEGA" />
                </Card.Top>
                <Card.Content>
                  <Card.Infor>
                    <Card.List
                      className="ml-[15px] bg-orange-600"
                      text="Download 300Mbps"
                      textTwo="Upload 150Mbps"
                    />
                    <Separator className="h-[2px] rounded-full bg-zinc-300 dark:bg-orange-600" />
                    <Card.Includes>
                      <Card.Rede className="bg-orange-600" />
                    </Card.Includes>
                    <Card.Price text="69" />
                  </Card.Infor>
                </Card.Content>
                <Card.BtnCombos
                  message="Olá gostaria de assinar o plano: 300Mbps | R$69,99."
                  text="ASSINE AGORA"
                  className="focus:bg-orange-500 focus:outline-none dark:focus:bg-orange-500"
                />
              </Card.Root>
            </SwiperSlide>
            {/* Card 2 */}
            <SwiperSlide className="!w-full sm:!w-[375px]">
              <Card.Root className="!w-full border-blue-700 sm:w-[375px]">
                <Card.Top className="bg-blue-700">
                  <Card.Mtop>
                    <Card.Items text="PLANO ULTRA" className="text-blue-700" />
                    <Card.ModalTwo
                      textMbOne="400MEGA"
                      textMbTwo="Download 400Mbps"
                      textMbThree="Upload 200Mbps"
                      textPriceOne="de 84,99"
                      textPriceTwo="79"
                    >
                      <Card.ModalBox>
                        <Card.ModalCombos
                          text="ASSINE AGORA"
                          message="Olá gostaria de assinar o plano: 400Mbps | R$79,99."
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
                    <Card.Price text="79" />
                  </Card.Infor>
                </Card.Content>
                <Card.BtnCombos
                  text="ASSINE AGORA"
                  message="Olá gostaria de assinar o plano: 400Mbps | R$79,99."
                  className="bg-blue-700 hover:bg-blue-500 focus:bg-blue-500 focus:outline-none dark:focus:bg-blue-500"
                />
              </Card.Root>
            </SwiperSlide>
            {/* Card 3 */}
            <SwiperSlide className="!w-full sm:!w-[375px]">
              <Card.Root className="!w-full border-blue-700 sm:!w-[375px]">
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
                          message="Olá gostaria de assinar o plano: 600Mbps | R$99,99."
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
                  message="Olá gostaria de assinar o plano: 600Mbps | R$99,99."
                  className="bg-blue-700 hover:bg-blue-500 focus:bg-blue-500 focus:outline-none dark:focus:bg-blue-500"
                />
              </Card.Root>
            </SwiperSlide>
            {/* Card 4 */}
            <SwiperSlide className="!w-full sm:!w-[375px]">
              <Card.Root className="!w-full border-blue-700 sm:!w-[375px]">
                <Card.Top className="bg-blue-700">
                  <Card.Mtop>
                    <Card.Items text="PLANO MASTER" className="text-blue-700" />
                    <Card.ModalTwo
                      textMbOne="700MEGA"
                      textMbTwo="Download 700Mbps"
                      textMbThree="Upload 350Mbps"
                      textPriceOne="de 124,99"
                      textPriceTwo="116"
                    >
                      <Card.ModalBox>
                        <Card.ModalCombos
                          text="ASSINE AGORA"
                          message="Olá gostaria de assinar o plano: 700Mbps | R$116,99."
                          className="bg-blue-700 hover:bg-blue-500 focus:bg-blue-500 focus:outline-none dark:focus:bg-blue-500"
                        />
                      </Card.ModalBox>
                    </Card.ModalTwo>
                  </Card.Mtop>
                  <Card.Item text="700MEGA" />
                </Card.Top>
                <Card.Content>
                  <Card.Infor>
                    <Card.List
                      className="ml-[15px] bg-blue-700"
                      text="Download 700Mbps"
                      textTwo="Upload 350Mbps"
                    />
                    <Separator className="h-[2px] rounded-full bg-zinc-300" />
                    <Card.Includes>
                      <Card.Rede className="bg-blue-700" />
                    </Card.Includes>
                    <Card.Price text="116" />
                  </Card.Infor>
                </Card.Content>
                <Card.BtnCombos
                  text="ASSINE AGORA"
                  message="Olá gostaria de assinar o plano: 700Mbps | R$116,99."
                  className="bg-blue-700 hover:bg-blue-500 focus:bg-blue-500 focus:outline-none dark:focus:bg-blue-500"
                />
              </Card.Root>
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
