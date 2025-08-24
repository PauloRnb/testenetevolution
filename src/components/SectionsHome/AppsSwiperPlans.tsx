"use client";

import Image from "next/image";
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

export default function AppsSwiperPlans() {
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
              <Card.Root className="!w-full border-orange-600 dark:bg-zinc-800 sm:!w-[375px]">
                <Card.Top>
                  <Card.Mtop>
                    <Card.Items text="MAIS VENDIDO" />
                    <Card.Modal
                      textMbOne="500MEGA"
                      textMbTwo="Download 500Mbps"
                      textMbThree="Upload 250Mbps"
                      textPriceOne="de 113,99"
                      textPriceTwo="109"
                      customContent={
                        <div className="flex flex-col gap-1 px-5">
                          <span className="text-xs font-medium text-zinc-600 dark:text-white">
                            INCLUSO NO PLANO:
                          </span>
                          <Card.Combo>
                            <div className="flex h-[1.875rem] w-[1.875rem] items-center justify-center overflow-hidden rounded-sm">
                              <Image
                                src="/logotelecine.webp"
                                alt="Logo Telecine"
                                width={30}
                                height={30}
                                loading="lazy"
                              />
                            </div>
                            <div className="flex h-[1.875rem] w-[1.875rem] items-center justify-center overflow-hidden rounded-sm">
                              <Image
                                src="/logoapp-paramountplus.webp"
                                alt="Logo Paramount"
                                width={30}
                                height={30}
                                loading="lazy"
                              />
                            </div>
                          </Card.Combo>
                        </div>
                      }
                    >
                      <Card.ModalBox>
                        <Card.ModalCombos
                          text="ASSINE AGORA"
                          message="Olá gostaria de assinar o plano: 600Mbps + Telecine, SporTV e Paramount."
                          className="focus-visible:bg-orange-500 dark:focus-visible:bg-orange-500"
                        />
                      </Card.ModalBox>
                    </Card.Modal>
                  </Card.Mtop>
                  <Card.Item text="500MEGA" />
                </Card.Top>
                <Card.Content>
                  <Card.Infor>
                    <Card.List
                      className="ml-[15px] bg-orange-600"
                      text="Download 500Mbps"
                      textTwo="Upload 250Mbps"
                    />
                    <Separator className="h-[2px] rounded-full bg-zinc-300 dark:bg-orange-600" />
                    <Card.Includes>
                      <Card.Combo>
                        <div className="flex h-[1.875rem] w-[1.875rem] items-center justify-center overflow-hidden rounded-sm">
                          <Image
                            src="/logotelecine.webp"
                            alt="Logo Telecine"
                            width={30}
                            height={30}
                            loading="lazy"
                          />
                        </div>
                        <div className="flex h-[1.875rem] w-[1.875rem] items-center justify-center overflow-hidden rounded-sm">
                          <Image
                            src="/logoapp-paramountplus.webp"
                            alt="Logo Paramount"
                            width={30}
                            height={30}
                            loading="lazy"
                          />
                        </div>
                      </Card.Combo>
                    </Card.Includes>
                    <Card.Price text="109" />
                  </Card.Infor>
                </Card.Content>
                <Card.BtnCombos
                  text="ASSINE AGORA"
                  message="Olá gostaria de assinar o plano: 600Mbps + Telecine, SporTV e Paramount."
                  className="focus:bg-orange-500 focus:outline-none dark:focus:bg-orange-500"
                />
              </Card.Root>
            </SwiperSlide>
            {/* Card 2 */}
            <SwiperSlide className="!w-full sm:!w-[375px]">
              <Card.Root className="!w-full border-blue-700 sm:!w-[375px]">
                <Card.Top className="bg-blue-700">
                  <Card.Mtop>
                    <Card.Items
                      text="PLANO FAMÍLIA"
                      className="text-blue-700"
                    />
                    <Card.ModalTwo
                      textMbOne="600MEGA"
                      textMbTwo="Download 600Mbps"
                      textMbThree="Upload 300Mbps"
                      textPriceOne="de 128,99"
                      textPriceTwo="123"
                      customContent={
                        <div className="flex flex-col gap-1 px-5">
                          <span className="text-xs font-medium text-zinc-600 dark:text-white">
                            INCLUSO NO PLANO:
                          </span>
                          <Card.Combo>
                            <div className="flex h-[1.875rem] w-[1.875rem] items-center justify-center overflow-hidden rounded-sm">
                              <Image
                                src="/logotelecine.webp"
                                alt="Logo Telecine"
                                width={30}
                                height={30}
                                loading="lazy"
                              />
                            </div>
                            <div className="flex h-[1.875rem] w-[1.875rem] items-center justify-center overflow-hidden rounded-sm">
                              <Image
                                src="/logosportv.webp"
                                alt="Logo SporTV"
                                width={30}
                                height={30}
                                loading="lazy"
                              />
                            </div>
                            <div className="flex h-[1.875rem] w-[1.875rem] items-center justify-center overflow-hidden rounded-sm">
                              <Image
                                src="/logoapp-paramountplus.webp"
                                alt="Logo Paramount"
                                width={30}
                                height={30}
                                loading="lazy"
                              />
                            </div>
                          </Card.Combo>
                        </div>
                      }
                    >
                      <Card.ModalBox>
                        <Card.ModalCombos
                          text="ASSINE AGORA"
                          message="Olá gostaria de assinar o plano: 600Mbps + Telecine, SporTV e Paramount."
                          className="bg-blue-700 hover:bg-blue-500 focus:bg-blue-500 dark:focus:bg-blue-500"
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
                      <Card.Combo>
                        <div className="flex h-[1.875rem] w-[1.875rem] items-center justify-center overflow-hidden rounded-sm">
                          <Image
                            src="/logotelecine.webp"
                            alt="Logo Telecine"
                            width={30}
                            height={30}
                            loading="lazy"
                          />
                        </div>
                        <div className="flex h-[1.875rem] w-[1.875rem] items-center justify-center overflow-hidden rounded-sm">
                          <Image
                            src="/logosportv.webp"
                            alt="Logo SporTV"
                            width={30}
                            height={30}
                            loading="lazy"
                          />
                        </div>
                        <div className="flex h-[1.875rem] w-[1.875rem] items-center justify-center overflow-hidden rounded-sm">
                          <Image
                            src="/logoapp-paramountplus.webp"
                            alt="Logo Paramount"
                            width={30}
                            height={30}
                            loading="lazy"
                          />
                        </div>
                      </Card.Combo>
                    </Card.Includes>
                    <Card.Price text="123" />
                  </Card.Infor>
                </Card.Content>
                <Card.BtnCombos
                  text="ASSINE AGORA"
                  message="Olá gostaria de assinar o plano: 600Mbps + Telecine, SporTV e Paramount."
                  className="bg-blue-700 hover:bg-blue-500 focus:bg-blue-500 focus:outline-none dark:focus:bg-blue-500"
                />
              </Card.Root>
            </SwiperSlide>
            {/* Card 3 */}
            <SwiperSlide className="!w-full sm:!w-[375px]">
              <Card.Root className="!w-full border-blue-700 sm:!w-[375px]">
                <Card.Top className="bg-blue-700">
                  <Card.Mtop>
                    <Card.Items text="PLANO SPORTS" className="text-blue-700" />
                    <Card.ModalTwo
                      textMbOne="600MEGA"
                      textMbTwo="Download 600Mbps"
                      textMbThree="Upload 300Mbps"
                      textPriceOne="de 189,99"
                      textPriceTwo="169"
                      customContent={
                        <div className="flex flex-col gap-1 px-5">
                          <span className="text-xs font-medium text-zinc-600 dark:text-white">
                            INCLUSO NO PLANO:
                          </span>
                          <Card.Combo>
                            <div className="flex h-[1.875rem] w-[1.875rem] items-center justify-center overflow-hidden rounded-sm">
                              <Image
                                src="/logosportv.webp"
                                alt="Logo SporTV"
                                width={30}
                                height={30}
                                loading="lazy"
                              />
                            </div>
                            <div className="flex h-[1.875rem] w-[1.875rem] items-center justify-center overflow-hidden rounded-sm">
                              <Image
                                src="/logoapp-premiere.webp"
                                alt="Logo Premiere"
                                width={30}
                                height={30}
                                loading="lazy"
                              />
                            </div>
                            <div className="flex h-[1.875rem] w-[1.875rem] items-center justify-center overflow-hidden rounded-sm">
                              <Image
                                src="/logoapp-max.webp"
                                alt="Logo HBO Max"
                                width={30}
                                height={30}
                                loading="lazy"
                              />
                            </div>
                            <div className="flex h-[1.875rem] w-[1.875rem] items-center justify-center overflow-hidden rounded-sm">
                              <Image
                                src="/logoapp-paramountplus.webp"
                                alt="Logo Paramount"
                                width={30}
                                height={30}
                                loading="lazy"
                              />
                            </div>
                          </Card.Combo>
                        </div>
                      }
                    >
                      <Card.ModalBox>
                        <Card.ModalCombos
                          text="ASSINE AGORA"
                          message="Olá gostaria de assinar o plano: 600Mbps + SporTV, Premiere, HBO Max e Paramount."
                          className="bg-blue-700 hover:bg-blue-500"
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
                      <Card.Combo>
                        <div className="flex h-[1.875rem] w-[1.875rem] items-center justify-center overflow-hidden rounded-sm">
                          <Image
                            src="/logosportv.webp"
                            alt="Logo SporTV"
                            width={30}
                            height={30}
                            loading="lazy"
                          />
                        </div>
                        <div className="flex h-[1.875rem] w-[1.875rem] items-center justify-center overflow-hidden rounded-sm">
                          <Image
                            src="/logoapp-premiere.webp"
                            alt="Logo SporTV"
                            width={30}
                            height={30}
                            loading="lazy"
                          />
                        </div>
                        <div className="flex h-[1.875rem] w-[1.875rem] items-center justify-center overflow-hidden rounded-sm">
                          <Image
                            src="/logoapp-max.webp"
                            alt="Logo HBO Max"
                            width={30}
                            height={30}
                            loading="lazy"
                          />
                        </div>
                        <div className="flex h-[1.875rem] w-[1.875rem] items-center justify-center overflow-hidden rounded-sm">
                          <Image
                            src="/logoapp-paramountplus.webp"
                            alt="Logo Paramount"
                            width={30}
                            height={30}
                            loading="lazy"
                          />
                        </div>
                      </Card.Combo>
                    </Card.Includes>
                    <Card.Price text="169" />
                  </Card.Infor>
                </Card.Content>
                <Card.BtnCombos
                  text="ASSINE AGORA"
                  message="Olá gostaria de assinar o plano: 600Mbps + SporTV, Premiere, HBO Max e Paramount."
                  className="bg-blue-700 hover:bg-blue-500 focus:bg-blue-500 focus:outline-none dark:focus:bg-blue-500"
                />
              </Card.Root>
            </SwiperSlide>
            {/* Card 4 */}
            <SwiperSlide className="!w-full sm:!w-[375px]">
              <Card.Root className="!w-full border-blue-700 sm:!w-[375px]">
                <Card.Top className="bg-blue-700">
                  <Card.Mtop>
                    <Card.Items text="PLANO MAX" className="text-blue-700" />
                    <Card.ModalTwo
                      textMbOne="600MEGA"
                      textMbTwo="Download 600Mbps"
                      textMbThree="Upload 300Mbps"
                      textPriceOne="de 124,99"
                      textPriceTwo="119"
                      customContent={
                        <div className="flex flex-col gap-1 px-5">
                          <span className="text-xs font-medium text-zinc-600 dark:text-white">
                            INCLUSO NO PLANO:
                          </span>
                          <Card.Combo>
                            <div className="flex h-[1.875rem] w-[1.875rem] items-center justify-center overflow-hidden rounded-sm">
                              <Image
                                src="/logoapp-max.webp"
                                alt="Logo Max"
                                width={30}
                                height={30}
                                loading="lazy"
                              />
                            </div>
                          </Card.Combo>
                        </div>
                      }
                    >
                      <Card.ModalBox>
                        <Card.ModalCombos
                          text="ASSINE AGORA"
                          message="Olá gostaria de assinar o plano: 600Mbps + HBO Max."
                          className="bg-blue-700 hover:bg-blue-500"
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
                      <Card.Combo>
                        <div className="flex h-[1.875rem] w-[1.875rem] items-center justify-center overflow-hidden rounded-sm">
                          <Image
                            src="/logoapp-max.webp"
                            alt="Logo Max"
                            width={30}
                            height={30}
                            loading="lazy"
                          />
                        </div>
                      </Card.Combo>
                    </Card.Includes>
                    <Card.Price text="119" />
                  </Card.Infor>
                </Card.Content>
                <Card.BtnCombos
                  text="ASSINE AGORA"
                  message="Olá gostaria de assinar o plano: 600Mbps + HBO Max."
                  className="bg-blue-700 hover:bg-blue-500 focus:bg-blue-500 focus:outline-none dark:focus:bg-blue-500"
                />
              </Card.Root>
            </SwiperSlide>
            <div className="mt-4 flex items-center justify-between">
              <div className="dots-pagination-cards"></div>
              <div className="flex justify-end gap-4">
                <button
                  type="button"
                  aria-label="Slider anterior"
                  ref={prevRef}
                  className="pointer-events-auto z-10 flex h-10 w-10 items-center justify-center rounded-full bg-orange-600 text-white transition-colors duration-150 hover:bg-orange-700"
                >
                  {/* SVG seta esquerda */}
                  <ChevronLeft />
                </button>

                <button
                  type="button"
                  aria-label="Próximo slider"
                  ref={nextRef}
                  className="pointer-events-auto z-10 flex h-10 w-10 items-center justify-center rounded-full bg-orange-600 text-white transition-colors duration-150 hover:bg-orange-700"
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
