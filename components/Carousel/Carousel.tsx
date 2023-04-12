"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.css";
import "./Carousel.css";

import { Children, ComponentProps, ReactElement } from "react";
import { Swiper as SwiperClass } from "swiper/types";

interface CarouselProps {
  children: ReactElement[];
}

export default function Carousel({ children }: CarouselProps) {
  let disableSwiperIfTooFewSlides = (swiper: SwiperClass) => {
    if (swiper?.slides?.length > 0) {
      const lastSlide = swiper.slides[swiper.slides.length - 1];
      const firstSlide = swiper.slides[0];

      const slidesWidth =
        lastSlide.offsetLeft + lastSlide.clientWidth - firstSlide.offsetLeft;

      const swiperWrapper = swiper.slides[0].parentElement!;
      const windowWidth = window.innerWidth;

      console.log({ slidesWidth, windowWidth });
      if (slidesWidth < windowWidth) {
        swiper.disable();
        swiperWrapper.classList.add("disabled-swiper");
      } else {
        swiperWrapper.classList.remove("disabled-swiper");
        console.log(swiper.params.slidesPerView);
        swiper.enable();
      }
    }
  };

  const settings: ComponentProps<typeof Swiper> = {
    slidesPerView: 1,
    breakpoints: {
      640: {
        slidesPerView: "auto",
      },
    },
  };

  return (
    <>
      <style>
        {`
        .disabled-swiper {
          margin: auto !important;
          transform: none !important;
        }
      `}
      </style>
      <Swiper
        {...settings}
        onSwiper={(swiper) => {
          disableSwiperIfTooFewSlides(swiper);
          swiper.on("resize", disableSwiperIfTooFewSlides);
        }}
      >
        {Children.map(children, (child) => (
          <SwiperSlide key={child.key} className="md:max-w-[fit-content]">
            {child}
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
