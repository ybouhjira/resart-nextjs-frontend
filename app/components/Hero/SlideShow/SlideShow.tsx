"use client"

import products from "@/app/data/products";
import Image from "next/image";
import 'swiper/swiper-bundle.min.css';
import {Swiper, SwiperSlide} from 'swiper/react';

export default function SlideShow() {
  return (
      <Swiper
          spaceBetween={50}
          slidesPerView="auto"
      >
        {products.map((product) => (
            <SwiperSlide key={product.sku} >
              <div className="w-full h-[500px] relative" >
                <Image src={`/${product.path}`} alt={product.name} fill className="h-[1080px]" style={{objectFit: 'cover'}}/>
                <h2 className="bg-[#000c] text-white p-10 absolute text-3xl bottom-[10px] left-[10px]">{product.name}</h2>
              </div>
            </SwiperSlide>
        ))}
      </Swiper>
  );
}
