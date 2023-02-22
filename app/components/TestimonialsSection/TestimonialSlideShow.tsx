"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import * as path from "path";
import Image from "next/image";
import { testimonials } from "@/app/data/testimonials";
import { Navigation } from "swiper";

export default function TestimonialSlideShow() {
  return (
    <Swiper
      slidesPerView={1}
      navigation={true}
      modules={[Navigation]}
      className="max-md:mx-[-20px]"
    >
      {testimonials.map((testimonial) => (
        <SwiperSlide key={testimonial.id}>
          <article className="m-auto flex flex-col md:flex-row gap-5 w-[fit-content] max-md:px-5 md:items-start">
            <figure className="rounded-full block overflow-hidden relative w-[120px] h-[120px] max-md:m-auto">
              <Image
                src={path.join("/", testimonial.photo)}
                alt="Testimonial author photo"
                className="bg-cover"
                fill
              />
            </figure>
            <article className="max-w-[500px]">
              {testimonial.content}
              <figcaption>&#8212; {testimonial.name}</figcaption>
            </article>
          </article>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
