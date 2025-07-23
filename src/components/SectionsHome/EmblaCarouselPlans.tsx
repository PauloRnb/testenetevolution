"use client";

import Image from "next/image";
import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Card } from "../CardPlans";
import { Separator } from "../ui/separator";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";

export default function EmblaCarouselPlans() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    containScroll: "trimSnaps",
  });
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  return (
    <div className="embla">
      <div className="embla__viewport overflow-hidden" ref={emblaRef}>
        <div className="embla__container flex gap-5">
          <div className="embla__slide shrink-0 min-w-[335px]">
            {/* CARD 1 */}
            <Card.Root className="dark:bg-zinc-800 border-orange-600">
              <Card.Top>
                <Card.Mtop>
                  <Card.Items text="MAIS VENDIDO" />
                  <Card.Modal />
                </Card.Mtop>
                <Card.Item text="500MEGA" />
              </Card.Top>
              <Card.Content>
                <Card.Infor>
                  <Card.List
                    className="bg-orange-600"
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
              <Card.Trigger text="ASSINE AGORA" />
            </Card.Root>
          </div>
          <div className="embla__slide shrink-0 min-w-[335px]">
            {/* CARD 2 */}
            <Card.Root className="border-blue-700">
              <Card.Top className="bg-blue-700">
                <Card.Mtop>
                  <Card.Items text="MAIS VENDIDO" className="text-blue-700" />
                  <Card.Modal />
                </Card.Mtop>
                <Card.Item text="600MEGA" />
              </Card.Top>
              <Card.Content>
                <Card.Infor>
                  <Card.List
                    className="bg-blue-700"
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
              <Card.Trigger
                text="ASSINE AGORA"
                className="bg-blue-700 hover:bg-blue-500"
              />
            </Card.Root>
          </div>
          <div className="embla__slide shrink-0 min-w-[335px]">
            {/* CARD 3 */}
            <Card.Root className="border-blue-700">
              <Card.Top className="bg-blue-700">
                <Card.Mtop>
                  <Card.Items text="MAIS VENDIDO" className="text-blue-700" />
                  <Card.Modal />
                </Card.Mtop>
                <Card.Item text="600MEGA" />
              </Card.Top>
              <Card.Content>
                <Card.Infor>
                  <Card.List
                    className="bg-blue-700"
                    text="Download 600Mbps"
                    textTwo="Upload 300Mbps"
                  />
                  <Separator className="h-[2px] bg-zinc-300 rounded-full" />
                  <Card.Includes>
                    <Card.Combo>
                      <div className="w-[1.875rem] h-[1.875rem] flex items-center justify-center rounded-sm overflow-hidden">
                        <Image
                          src="/logoespn.webp"
                          alt="Logo ESPN"
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
                  <Card.Price text="124" />
                </Card.Infor>
              </Card.Content>
              <Card.Trigger
                text="ASSINE AGORA"
                className="bg-blue-700 hover:bg-blue-500"
              />
            </Card.Root>
          </div>
          <div className="embla__slide shrink-0 min-w-[335px]">
            {/* CARD 4 */}
            <Card.Root className="border-blue-700">
              <Card.Top className="bg-blue-700">
                <Card.Mtop>
                  <Card.Items text="MAIS VENDIDO" className="text-blue-700" />
                  <Card.Modal />
                </Card.Mtop>
                <Card.Item text="600MEGA" />
              </Card.Top>
              <Card.Content>
                <Card.Infor>
                  <Card.List
                    className="bg-blue-700"
                    text="Download 600Mbps"
                    textTwo="300Mbps"
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
                    </Card.Combo>
                  </Card.Includes>
                  <Card.Price text="125" />
                </Card.Infor>
              </Card.Content>
              <Card.Trigger
                text="ASSINE AGORA"
                className="bg-blue-700 hover:bg-blue-500"
              />
            </Card.Root>
          </div>
          <div className="embla__slide shrink-0 min-w-[335px]">
            {/* CARD 5 */}
            <Card.Root className="border-blue-700">
              <Card.Top className="bg-blue-700">
                <Card.Mtop>
                  <Card.Items text="MAIS VENDIDO" className="text-blue-700" />
                  <Card.Modal />
                </Card.Mtop>
                <Card.Item text="600MEGA" />
              </Card.Top>
              <Card.Content>
                <Card.Infor>
                  <Card.List
                    className="bg-blue-700"
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
              <Card.Trigger
                text="ASSINE AGORA"
                className="bg-blue-700 hover:bg-blue-500"
              />
            </Card.Root>
          </div>
          <div className="embla__slide shrink-0 min-w-[335px]">
            {/* CARD 6 */}
            <Card.Root className="border-blue-700">
              <Card.Top className="bg-blue-700">
                <Card.Mtop>
                  <Card.Items text="MAIS VENDIDO" className="text-blue-700" />
                  <Card.Modal />
                </Card.Mtop>
                <Card.Item text="600MEGA" />
              </Card.Top>
              <Card.Content>
                <Card.Infor>
                  <Card.List
                    className="bg-blue-700"
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
              <Card.Trigger
                text="ASSINE AGORA"
                className="bg-blue-700 hover:bg-blue-500"
              />
            </Card.Root>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between mt-4">
        {/* Dots abaixo do carrossel */}
        <div className="flex justify-center gap-2">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              onClick={() => emblaApi?.scrollTo(index)}
              className={`w-[30px] md:w-[50px] h-[3px] rounded-full transition-colors duration-300 ${
                index === selectedIndex
                  ? "bg-blue-700 dark:bg-white"
                  : "bg-gray-300 dark:bg-zinc-600"
              }`}
            />
          ))}
        </div>
        <div className="flex items-center gap-5">
          <button
            className="text-blue-700 dark:text-white hover:text-blue-500 dark:hover:text-zinc-300 transition-colors duration-200"
            onClick={scrollPrev}
            type="button"
            aria-label="Voltar Slider"
          >
            <IoIosArrowDropleft size={32} className="md:size-9" />
          </button>
          <button
            className="text-blue-700 dark:text-white hover:text-blue-500 dark:hover:text-zinc-300 transition-colors duration-200"
            onClick={scrollNext}
            type="button"
            aria-label="Proximo Slider"
          >
            <IoIosArrowDropright size={32} className="md:size-9" />
          </button>
        </div>
      </div>
    </div>
  );
}
