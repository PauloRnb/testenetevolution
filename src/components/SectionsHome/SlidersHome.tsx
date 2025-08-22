"use client";

import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/navigation";

import "@/app/styles.css";

import {
  IoIosArrowDroprightCircle,
  IoIosArrowDropleftCircle,
} from "react-icons/io";

function CustomNextButton() {
  const swiper = useSwiper();
  return (
    <button
      onClick={() => swiper.slideNext()}
      className="custom-next absolute bottom-[224px] left-[calc((100vw+1170px)/2)] z-10 cursor-pointer"
      aria-label="Next Slide"
    >
      <IoIosArrowDroprightCircle
        size={44}
        className="text-white transition-colors duration-200 hover:text-zinc-300"
      />
    </button>
  );
}

function CustomPrevButton() {
  const swiper = useSwiper();
  return (
    <button
      onClick={() => swiper.slidePrev()}
      className="custom-prev absolute bottom-[224px] right-[calc((100vw+1170px)/2)] z-10 flex cursor-pointer items-center justify-center"
      aria-label="Previous Slide"
    >
      <IoIosArrowDropleftCircle
        size={44}
        className="text-white transition-colors duration-200 hover:text-zinc-300"
      />
    </button>
  );
}

export default function SlidersHome() {
  return (
    <div className="relative h-[503px] bg-gradient-to-r from-blue-600 to-blue-700">
      <Swiper
        effect={"fade"}
        centeredSlides={true}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{
          clickable: true,
          type: "bullets",
        }}
        modules={[Autoplay, Pagination, EffectFade]}
        className="h-full"
      >
        <SwiperSlide>
          <div className="container flex h-full w-full flex-col bg-blue-600"></div>
        </SwiperSlide>

        <CustomPrevButton />
        <CustomNextButton />
      </Swiper>
    </div>
  );
}
