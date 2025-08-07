"use client";

import React from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { EmblaOptionsType } from "embla-carousel";

import { DotButton, useDotButton } from "./Plans/EmblaCarouselDotButton";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "./Plans/EmblaCarouselArrowButton";

import { Card } from "@/components/CardPlans";
import { Separator } from "@/components/ui/separator";

type PlanType = {
  id: number;
  borderClass: string;
  topBgClass?: string;
  topTextClass?: string;
  badgeText?: string;
  mainSpeed: string;
  downloadSpeed: string;
  uploadSpeed: string;
  priceOld: string;
  priceNew: string;
  logos: { src: string; alt: string }[];
  modalClassName?: string;
  btnClassName?: string;
};

const plans: PlanType[] = [
  {
    id: 0,
    borderClass: "border-orange-600",
    badgeText: "MAIS VENDIDO",
    mainSpeed: "500MEGA",
    downloadSpeed: "Download 500Mbps",
    uploadSpeed: "Upload 250Mbps",
    priceOld: "de 113,99",
    priceNew: "109",
    logos: [
      { src: "/logotelecine.webp", alt: "Logo Telecine" },
      { src: "/logoparamountplus.webp", alt: "Logo Paramount" },
    ],
    modalClassName: "",
    btnClassName:
      "focus:bg-orange-500 focus:outline-none dark:focus:bg-orange-500",
  },
  {
    id: 1,
    borderClass: "border-blue-700",
    topBgClass: "bg-blue-700",
    topTextClass: "text-blue-700",
    badgeText: "PLANO FAMÍLIA",
    mainSpeed: "600MEGA",
    downloadSpeed: "Download 600Mbps",
    uploadSpeed: "Upload 300Mbps",
    priceOld: "de 128,99",
    priceNew: "123",
    logos: [
      { src: "/logotelecine.webp", alt: "Logo Telecine" },
      { src: "/logosportv.webp", alt: "Logo SporTV" },
      { src: "/logoparamountplus.webp", alt: "Logo Paramount" },
    ],
    modalClassName:
      "bg-blue-700 hover:bg-blue-500 focus:bg-blue-500 dark:focus:bg-blue-500",
    btnClassName:
      "bg-blue-700 hover:bg-blue-500 focus:bg-blue-500 focus:outline-none dark:focus:bg-blue-500",
  },
  {
    id: 2,
    borderClass: "border-blue-700",
    topBgClass: "bg-blue-700",
    topTextClass: "text-blue-700",
    badgeText: "PLANO SPORTS",
    mainSpeed: "600MEGA",
    downloadSpeed: "Download 600Mbps",
    uploadSpeed: "Upload 300Mbps",
    priceOld: "de 189,99",
    priceNew: "169",
    logos: [
      { src: "/logosportv.webp", alt: "Logo SporTV" },
      { src: "/logopremiere.webp", alt: "Logo ESPN" },
      { src: "/logomax.webp", alt: "Logo Max" },
      { src: "/logoparamountplus.webp", alt: "Logo Paramount" },
    ],
    modalClassName: "bg-blue-700 hover:bg-blue-500",
    btnClassName:
      "bg-blue-700 hover:bg-blue-500 focus:bg-blue-500 focus:outline-none dark:focus:bg-blue-500",
  },
  {
    id: 3,
    borderClass: "border-blue-700",
    topBgClass: "bg-blue-700",
    topTextClass: "text-blue-700",
    badgeText: "PLANO MAX",
    mainSpeed: "600MEGA",
    downloadSpeed: "Download 600Mbps",
    uploadSpeed: "Upload 300Mbps",
    priceOld: "de 124,99",
    priceNew: "119",
    logos: [{ src: "/logomax.webp", alt: "Logo Max" }],
    modalClassName: "bg-blue-700 hover:bg-blue-500",
    btnClassName:
      "bg-blue-700 hover:bg-blue-500 focus:bg-blue-500 focus:outline-none dark:focus:bg-blue-500",
  },
];

function Logos({ logos }: { logos: PlanType["logos"] }) {
  return (
    <Card.Combo>
      {logos.map(({ src, alt }) => (
        <div
          key={src}
          className="flex h-[1.875rem] w-[1.875rem] items-center justify-center overflow-hidden rounded-sm"
        >
          <Image src={src} alt={alt} width={30} height={30} priority />
        </div>
      ))}
    </Card.Combo>
  );
}

function PlanCard(plan: PlanType) {
  const {
    borderClass,
    topBgClass,
    topTextClass,
    badgeText,
    mainSpeed,
    downloadSpeed,
    uploadSpeed,
    priceOld,
    priceNew,
    logos,
    modalClassName,
    btnClassName,
  } = plan;

  const ModalComponent = modalClassName ? Card.ModalTwo : Card.Modal;

  return (
    <Card.Root key={plan.id} className={`${borderClass} dark:bg-zinc-800`}>
      <Card.Top className={topBgClass}>
        <Card.Mtop>
          {badgeText && (
            <Card.Items text={badgeText} className={topTextClass} />
          )}
          <ModalComponent
            textMbOne={mainSpeed}
            textMbTwo={downloadSpeed}
            textMbThree={uploadSpeed}
            textPriceOne={priceOld}
            textPriceTwo={priceNew}
            customContent={
              <div className="flex flex-col gap-1 px-5">
                <span className="text-xs font-medium text-zinc-600 dark:text-white">
                  INCLUSO NO PLANO:
                </span>
                <Logos logos={logos} />
              </div>
            }
          >
            <Card.ModalBox>
              <Card.ModalCombos
                text="ASSINE AGORA"
                className={
                  modalClassName ||
                  "focus-visible:bg-orange-500 dark:focus-visible:bg-orange-500"
                }
              />
            </Card.ModalBox>
          </ModalComponent>
        </Card.Mtop>
        <Card.Item text={mainSpeed} />
      </Card.Top>
      <Card.Content>
        <Card.Infor>
          <Card.List
            className={`ml-[15px] ${borderClass.replace("border-", "bg-")}`}
            text={downloadSpeed}
            textTwo={uploadSpeed}
          />
          <Separator className="h-[2px] rounded-full bg-zinc-300 dark:bg-orange-600" />
          <Card.Includes>
            <Logos logos={logos} />
          </Card.Includes>
          <Card.Price text={priceNew} />
        </Card.Infor>
      </Card.Content>
      <Card.BtnCombos
        text="ASSINE AGORA"
        className={
          btnClassName ||
          "focus:bg-orange-500 focus:outline-none dark:focus:bg-orange-500"
        }
      />
    </Card.Root>
  );
}

const EmblaCarouselPlans: React.FC<{ options?: EmblaOptionsType }> = ({
  options,
}) => {
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
          {plans.map((plan) => (
            <div
              key={plan.id}
              className="embla__slide w-full shrink-0 sm:w-[335px]"
            >
              <PlanCard {...plan} />
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

export default EmblaCarouselPlans;
