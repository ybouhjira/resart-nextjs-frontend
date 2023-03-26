"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

interface Props {
  urls: string[];
}

export default function ProductCarousel({ urls }: Props) {
  return (
    <Swiper slidesPerView="auto" loop>
      {[...urls, ...urls].map((item, index) => (
        <SwiperSlide key={index} className="max-w-[fit-content]">
          <div className="rounded overflow-hidden mx-md" key={item}>
            <Image
              key={item}
              src={item}
              alt="Resart necklace photo"
              width={489}
              height={381}
              className="object-cover w-full"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
