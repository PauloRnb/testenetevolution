"use client";

import React, { useMemo } from "react";
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

type CardData = {
  mb: string;
  download: string;
  upload: string;
  oldPrice: string;
  newPrice: string;
  color: string;
};

const cardsData: CardData[] = [
  {
    mb: "300MEGA",
    download: "Download 300Mbps",
    upload: "Upload 150Mbps",
    oldPrice: "de 74,99",
    newPrice: "69",
    color: "orange-600",
  },
  {
    mb: "400MEGA",
    download: "Download 400Mbps",
    upload: "Upload 200Mbps",
    oldPrice: "de 84,99",
    newPrice: "79",
    color: "blue-700",
  },
  {
    mb: "600MEGA",
    download: "Download 600Mbps",
    upload: "Upload 300Mbps",
    oldPrice: "de 104,99",
    newPrice: "99",
    color: "blue-700",
  },
  {
    mb: "700MEGA",
    download: "Download 700Mbps",
    upload: "Upload 350Mbps",
    oldPrice: "de 124,99",
    newPrice: "117",
    color: "blue-700",
  },
];

const CardItem = ({ data, index }: { data: CardData; index: number }) => {
  const isFirst = index === 0;
  const borderColor = isFirst ? "border-orange-600" : `border-${data.color}`;
  const bgColor = isFirst ? "" : `bg-${data.color}`;
  const textColor = isFirst ? "" : `text-${data.color}`;
  const buttonClass = isFirst
    ? ""
    : `bg-${data.color} hover:bg-${data.color.replace("700", "500")}`;

  return (
    <Card.Root className={`${borderColor}`}>
      <Card.Top className={bgColor}>
        <Card.Mtop>
          <Card.Items text="MAIS VENDIDO" className={textColor} />
          <Card.ModalTwo
            textMbOne={data.mb}
            textMbTwo={data.download}
            textMbThree={data.upload}
            textPriceOne={data.oldPrice}
            textPriceTwo={data.newPrice}
          >
            <Card.ModalBox>
              <Card.ModalCombos text="ASSINE AGORA" className={buttonClass} />
            </Card.ModalBox>
          </Card.ModalTwo>
        </Card.Mtop>
        <Card.Item text={data.mb} />
      </Card.Top>
      <Card.Content>
        <Card.Infor>
          <Card.List
            className={`ml-[15px] bg-${data.color}`}
            text={data.download}
            textTwo={data.upload}
          />
          <Separator className={`h-[2px] bg-zinc-300 rounded-full`} />
          <Card.Includes>
            <Card.Rede className={`bg-${data.color}`} />
          </Card.Includes>
          <Card.Price text={data.newPrice} />
        </Card.Infor>
      </Card.Content>
      <Card.Trigger text="ASSINE AGORA" className={buttonClass} />
    </Card.Root>
  );
};

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

  const cardList = useMemo(
    () =>
      cardsData.map((data, index) => (
        <div key={index} className="embla__slide shrink-0 w-full sm:w-[335px]">
          <CardItem data={data} index={index} />
        </div>
      )),
    []
  );

  return (
    <section className="embla">
      <div className="embla__viewport overflow-hidden" ref={emblaRef}>
        <div className="embla__container flex gap-5">{cardList}</div>
      </div>

      <div className="embla__controls flex items-center justify-between mt-4">
        <div className="embla__dots flex items-center gap-2 md:gap-3">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={`embla__dot w-[25px] md:w-[50px] h-[3px] rounded-sm border-none cursor-pointer transition-colors duration-300 ${
                index === selectedIndex
                  ? "embla__dot--selected bg-blue-700 dark:bg-white"
                  : "bg-zinc-300 dark:bg-zinc-500"
              }`}
            />
          ))}
        </div>
        <div className="embla__buttons relative flex gap-2">
          <PrevButton
            className="text-blue-700 dark:text-white hover:text-blue-500 transition-colors duration-200 dark:hover:text-zinc-300"
            onClick={onPrevButtonClick}
            disabled={prevBtnDisabled}
          />
          <NextButton
            className="text-blue-700 dark:text-white hover:text-blue-500 transition-colors duration-200 dark:hover:text-zinc-300"
            onClick={onNextButtonClick}
            disabled={nextBtnDisabled}
          />
        </div>
      </div>
    </section>
  );
};

export default EmblaCarousel;
