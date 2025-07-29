"use client";

import React from "react";
import Image from "next/image";
import { EmblaOptionsType } from "embla-carousel";
import { DotButton, useDotButton } from "./Plans/EmblaCarouselDotButton";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "./Plans/EmblaCarouselArrowButton";
import useEmblaCarousel from "embla-carousel-react";
import { Card } from "@/components/CardPlans"; // Ajuste o caminho conforme seu projeto
import { Separator } from "@/components/ui/separator";

type PropType = {
  options?: EmblaOptionsType;
};

const EmblaCarouselPlans: React.FC<PropType> = ({ options }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: false,
    ...options,
  });

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);
  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  const cards = [
    <Card.Root key={0} className="dark:bg-zinc-800 border-orange-600">
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
              <div className="flex flex-col px-5 gap-1">
                <span className="text-xs text-zinc-600 font-medium dark:text-white">
                  INCLUSO NO PLANO:
                </span>
                <Card.Combo>
                  <div className="w-[1.875rem] h-[1.875rem] flex items-center justify-center rounded-sm overflow-hidden">
                    <Image
                      src="/logotelecine.webp"
                      alt="Logo Telecine"
                      width={30}
                      height={30}
                      priority
                    />
                  </div>
                  <div className="w-[1.875rem] h-[1.875rem] flex items-center justify-center rounded-sm overflow-hidden">
                    <Image
                      src="/logoparamountplus.webp"
                      alt="Logo Paramount"
                      width={30}
                      height={30}
                      priority
                    />
                  </div>
                </Card.Combo>
              </div>
            }
          >
            <Card.ModalBox>
              <Card.ModalCombos
                text="ASSINE AGORA"
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
            className="bg-orange-600 ml-[15px]"
            text="Download 500Mbps"
            textTwo="Upload 250Mbps"
          />
          <Separator className="h-[2px] bg-zinc-300 rounded-full dark:bg-orange-600" />
          <Card.Includes>
            <Card.Combo>
              <div className="w-[1.875rem] h-[1.875rem] flex items-center justify-center rounded-sm overflow-hidden">
                <Image
                  src="/logotelecine.webp"
                  alt="Logo Telecine"
                  width={30}
                  height={30}
                  priority
                />
              </div>
              <div className="w-[1.875rem] h-[1.875rem] flex items-center justify-center rounded-sm overflow-hidden">
                <Image
                  src="/logoparamountplus.webp"
                  alt="Logo Paramount"
                  width={30}
                  height={30}
                  priority
                />
              </div>
            </Card.Combo>
          </Card.Includes>
          <Card.Price text="109" />
        </Card.Infor>
      </Card.Content>
      <Card.BtnCombos
        text="ASSINE AGORA"
        className="focus:outline-none focus:bg-orange-500 dark:focus:bg-orange-500"
      />
    </Card.Root>,

    <Card.Root key={1} className="border-blue-700">
      <Card.Top className="bg-blue-700">
        <Card.Mtop>
          <Card.Items text="PLANO FAMÍLIA" className="text-blue-700" />
          <Card.ModalTwo
            textMbOne="600MEGA"
            textMbTwo="Download 600Mbps"
            textMbThree="Upload 300Mbps"
            textPriceOne="de 128,99"
            textPriceTwo="123"
            customContent={
              <div className="flex flex-col px-5 gap-1">
                <span className="text-xs text-zinc-600 font-medium dark:text-white">
                  INCLUSO NO PLANO:
                </span>
                <Card.Combo>
                  <div className="w-[1.875rem] h-[1.875rem] flex items-center justify-center rounded-sm overflow-hidden">
                    <Image
                      src="/logotelecine.webp"
                      alt="Logo Telecine"
                      width={30}
                      height={30}
                      priority
                    />
                  </div>
                  <div className="w-[1.875rem] h-[1.875rem] flex items-center justify-center rounded-sm overflow-hidden">
                    <Image
                      src="/logosportv.webp"
                      alt="Logo SporTV"
                      width={30}
                      height={30}
                      priority
                    />
                  </div>
                  <div className="w-[1.875rem] h-[1.875rem] flex items-center justify-center rounded-sm overflow-hidden">
                    <Image
                      src="/logoparamountplus.webp"
                      alt="Logo Paramount"
                      width={30}
                      height={30}
                      priority
                    />
                  </div>
                </Card.Combo>
              </div>
            }
          >
            <Card.ModalBox>
              <Card.ModalCombos
                text="ASSINE AGORA"
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
            className="bg-blue-700 ml-[15px]"
            text="Download 600Mbps"
            textTwo="Upload 300Mbps"
          />
          <Separator className="h-[2px] bg-zinc-300 rounded-full" />
          <Card.Includes>
            <Card.Combo>
              <div className="w-[1.875rem] h-[1.875rem] flex items-center justify-center rounded-sm overflow-hidden">
                <Image
                  src="/logotelecine.webp"
                  alt="Logo Telecine"
                  width={30}
                  height={30}
                  priority
                />
              </div>
              <div className="w-[1.875rem] h-[1.875rem] flex items-center justify-center rounded-sm overflow-hidden">
                <Image
                  src="/logosportv.webp"
                  alt="Logo SporTV"
                  width={30}
                  height={30}
                  priority
                />
              </div>
              <div className="w-[1.875rem] h-[1.875rem] flex items-center justify-center rounded-sm overflow-hidden">
                <Image
                  src="/logoparamountplus.webp"
                  alt="Logo Paramount"
                  width={30}
                  height={30}
                  priority
                />
              </div>
            </Card.Combo>
          </Card.Includes>
          <Card.Price text="123" />
        </Card.Infor>
      </Card.Content>
      <Card.BtnCombos
        text="ASSINE AGORA"
        className="bg-blue-700 hover:bg-blue-500 focus:outline-none focus:bg-blue-500 dark:focus:bg-blue-500"
      />
    </Card.Root>,

    <Card.Root key={2} className="border-blue-700">
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
              <div className="flex flex-col px-5 gap-1">
                <span className="text-xs text-zinc-600 font-medium dark:text-white">
                  INCLUSO NO PLANO:
                </span>
                <Card.Combo>
                  <div className="w-[1.875rem] h-[1.875rem] flex items-center justify-center rounded-sm overflow-hidden">
                    <Image
                      src="/logosportv.webp"
                      alt="Logo SporTV"
                      width={30}
                      height={30}
                      priority
                    />
                  </div>
                  <div className="w-[1.875rem] h-[1.875rem] flex items-center justify-center rounded-sm overflow-hidden">
                    <Image
                      src="/logopremiere.webp"
                      alt="Logo ESPN"
                      width={30}
                      height={30}
                      priority
                    />
                  </div>
                  <div className="w-[1.875rem] h-[1.875rem] flex items-center justify-center rounded-sm overflow-hidden">
                    <Image
                      src="/logomax.webp"
                      alt="Logo Max"
                      width={30}
                      height={30}
                      priority
                    />
                  </div>
                  <div className="w-[1.875rem] h-[1.875rem] flex items-center justify-center rounded-sm overflow-hidden">
                    <Image
                      src="/logoparamountplus.webp"
                      alt="Logo Paramount"
                      width={30}
                      height={30}
                      priority
                    />
                  </div>
                </Card.Combo>
              </div>
            }
          >
            <Card.ModalBox>
              <Card.ModalCombos
                text="ASSINE AGORA"
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
            className="bg-blue-700 ml-[15px]"
            text="Download 600Mbps"
            textTwo="Upload 300Mbps"
          />
          <Separator className="h-[2px] bg-zinc-300 rounded-full" />
          <Card.Includes>
            <Card.Combo>
              <div className="w-[1.875rem] h-[1.875rem] flex items-center justify-center rounded-sm overflow-hidden">
                <Image
                  src="/logosportv.webp"
                  alt="Logo SporTV"
                  width={30}
                  height={30}
                  priority
                />
              </div>
              <div className="w-[1.875rem] h-[1.875rem] flex items-center justify-center rounded-sm overflow-hidden">
                <Image
                  src="/logopremiere.webp"
                  alt="Logo ESPN"
                  width={30}
                  height={30}
                  priority
                />
              </div>
              <div className="w-[1.875rem] h-[1.875rem] flex items-center justify-center rounded-sm overflow-hidden">
                <Image
                  src="/logomax.webp"
                  alt="Logo Max"
                  width={30}
                  height={30}
                  priority
                />
              </div>
              <div className="w-[1.875rem] h-[1.875rem] flex items-center justify-center rounded-sm overflow-hidden">
                <Image
                  src="/logoparamountplus.webp"
                  alt="Logo Paramount"
                  width={30}
                  height={30}
                  priority
                />
              </div>
            </Card.Combo>
          </Card.Includes>
          <Card.Price text="169" />
        </Card.Infor>
      </Card.Content>
      <Card.BtnCombos
        text="ASSINE AGORA"
        className="bg-blue-700 hover:bg-blue-500 focus:outline-none focus:bg-blue-500 dark:focus:bg-blue-500"
      />
    </Card.Root>,

    <Card.Root key={3} className="border-blue-700">
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
              <div className="flex flex-col px-5 gap-1">
                <span className="text-xs text-zinc-600 font-medium dark:text-white">
                  INCLUSO NO PLANO:
                </span>
                <Card.Combo>
                  <div className="w-[1.875rem] h-[1.875rem] flex items-center justify-center rounded-sm overflow-hidden">
                    <Image
                      src="/logomax.webp"
                      alt="Logo Max"
                      width={30}
                      height={30}
                      priority
                    />
                  </div>
                </Card.Combo>
              </div>
            }
          >
            <Card.ModalBox>
              <Card.ModalCombos
                text="ASSINE AGORA"
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
            className="bg-blue-700 ml-[15px]"
            text="Download 600Mbps"
            textTwo="Upload 300Mbps"
          />
          <Separator className="h-[2px] bg-zinc-300 rounded-full" />
          <Card.Includes>
            <Card.Combo>
              <div className="w-[1.875rem] h-[1.875rem] flex items-center justify-center rounded-sm overflow-hidden">
                <Image
                  src="/logomax.webp"
                  alt="Logo Max"
                  width={30}
                  height={30}
                  priority
                />
              </div>
            </Card.Combo>
          </Card.Includes>
          <Card.Price text="119" />
        </Card.Infor>
      </Card.Content>
      <Card.BtnCombos
        text="ASSINE AGORA"
        className="bg-blue-700 hover:bg-blue-500 focus:outline-none focus:bg-blue-500 dark:focus:bg-blue-500"
      />
    </Card.Root>,
  ];

  return (
    <section className="embla">
      <div className="embla__viewport overflow-hidden" ref={emblaRef}>
        <div className="embla__container flex gap-5">
          {cards.map((card, index) => (
            <div
              className="embla__slide shrink-0 w-full sm:w-[335px]"
              key={index}
            >
              {card}
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls flex items-center justify-between mt-4">
        <div className="embla__dots flex items-center gap-2 md:gap-3">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={`embla__dot w-[25px] md:w-[50px] h-[3px] rounded-sm border-none cursor-pointer transition-colors duration-300 focus:outline-none focus-visible:bg-blue-500 dark:focus-visible:bg-white ${
                index === selectedIndex
                  ? "embla__dot--selected bg-blue-700 dark:bg-white"
                  : "bg-zinc-300 dark:bg-zinc-500"
              }`}
            />
          ))}
        </div>
        <div className="embla__buttons relative flex gap-2">
          <PrevButton
            className="text-blue-700 dark:text-white hover:text-blue-500 transition-colors duration-200 dark:hover:text-zinc-300 focus:outline-none focus-visible:text-blue-500 dark:focus-visible:text-zinc-300"
            onClick={onPrevButtonClick}
            disabled={prevBtnDisabled}
          />
          <NextButton
            className="text-blue-700 dark:text-white hover:text-blue-500 transition-colors duration-200 dark:hover:text-zinc-300 focus:outline-none focus-visible:text-blue-500 dark:focus-visible:text-zinc-300"
            onClick={onNextButtonClick}
            disabled={nextBtnDisabled}
          />
        </div>
      </div>
    </section>
  );
};

export default EmblaCarouselPlans;
