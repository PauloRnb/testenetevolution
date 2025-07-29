"use client";

import React from "react";
import { EmblaOptionsType } from "embla-carousel";
import { DotButton, useDotButton } from "./EmblaCarouselDotButton";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButton";
import useEmblaCarousel from "embla-carousel-react";
import { Card } from "@/components/CardPlans";
import { Separator } from "@/components/ui/separator";

type PropType = {
  options?: EmblaOptionsType;
};

const cards = [
  <Card.Root key={0} className="border-orange-600 dark:bg-zinc-800">
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
      text="ASSINE AGORA"
      className="focus:bg-orange-500 focus:outline-none dark:focus:bg-orange-500"
    />
  </Card.Root>,

  <Card.Root key={1} className="border-blue-700">
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
      className="bg-blue-700 hover:bg-blue-500 focus:bg-blue-500 focus:outline-none dark:focus:bg-blue-500"
    />
  </Card.Root>,

  <Card.Root key={2} className="border-blue-700">
    <Card.Top className="bg-blue-700">
      <Card.Mtop>
        <Card.Items text="PLANO PREMIUM" className="text-blue-700" />
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
      className="bg-blue-700 hover:bg-blue-500 focus:bg-blue-500 focus:outline-none dark:focus:bg-blue-500"
    />
  </Card.Root>,

  <Card.Root key={3} className="border-blue-700">
    <Card.Top className="bg-blue-700">
      <Card.Mtop>
        <Card.Items text="PLANO MASTER" className="text-blue-700" />
        <Card.ModalTwo
          textMbOne="700MEGA"
          textMbTwo="Download 700Mbps"
          textMbThree="Upload 350Mbps"
          textPriceOne="de 124,99"
          textPriceTwo="117"
        >
          <Card.ModalBox>
            <Card.ModalCombos
              text="ASSINE AGORA"
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
        <Card.Price text="117" />
      </Card.Infor>
    </Card.Content>
    <Card.BtnCombos
      text="ASSINE AGORA"
      className="bg-blue-700 hover:bg-blue-500 focus:bg-blue-500 focus:outline-none dark:focus:bg-blue-500"
    />
  </Card.Root>,
];

const EmblaCarousel: React.FC<PropType> = ({ options }) => {
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

  return (
    <section className="embla">
      <div className="embla__viewport overflow-hidden" ref={emblaRef}>
        <div className="embla__container flex gap-5">
          {cards.map((card, index) => (
            <div
              className="embla__slide w-full shrink-0 sm:w-[335px]"
              key={index}
            >
              {card}
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls mt-4 flex items-center justify-between">
        <div className="embla__dots flex items-center gap-2 md:gap-3">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={`embla__dot h-[3px] w-[25px] cursor-pointer rounded-sm border-none transition-colors duration-300 focus:outline-none focus-visible:bg-blue-500 dark:focus-visible:bg-white md:w-[50px] ${
                index === selectedIndex
                  ? "embla__dot--selected bg-blue-700 dark:bg-white"
                  : "bg-zinc-300 dark:bg-zinc-500"
              }`}
            />
          ))}
        </div>
        <div className="embla__buttons relative flex gap-2">
          <PrevButton
            className="text-blue-700 transition-colors duration-200 hover:text-blue-500 focus:outline-none focus-visible:text-blue-500 dark:text-white dark:hover:text-zinc-300 dark:focus-visible:text-zinc-300"
            onClick={onPrevButtonClick}
            disabled={prevBtnDisabled}
          />
          <NextButton
            className="text-blue-700 transition-colors duration-200 hover:text-blue-500 focus:outline-none focus-visible:text-blue-500 dark:text-white dark:hover:text-zinc-300 dark:focus-visible:text-zinc-300"
            onClick={onNextButtonClick}
            disabled={nextBtnDisabled}
          />
        </div>
      </div>
    </section>
  );
};

export default EmblaCarousel;
