"use client";
import * as path from "path";
import Image from "next/image";
import { testimonials } from "@/app/data/testimonials";
import Carousel from "@/components/Carousel/Carousel";
import StarIcon from "@/components/Icons/Star";

export default function TestimonialSlideShow() {
  return (
    <Carousel>
      {testimonials.map((testimonial) => (
        <article
          key={testimonial.id}
          className={`flex-col 
              max-w-[90vw] p-lg m-lg
              md:max-w-[380px] md:p-lg 
              shadow-lg select-none
              gap-5 flex
              pointer-events-none select-none
          `}
        >
          <div className="flex items-center gap-md">
            <figure className="rounded-full overflow-hidden relative w-[80px] h-[80px]">
              <Image
                src={path.join("/", testimonial.photo)}
                alt="Testimonial author photo"
                className="bg-cover"
                fill
              />
            </figure>
            <div className="name">{testimonial.name}</div>
          </div>
          <div className="overflow-ellipsis overflow-y-hidden text-left">
            {testimonial.content}
          </div>
          <div className="product-review flex justify-end">
            <StarIcon fill />
            <StarIcon fill />
            <StarIcon fill />
            <StarIcon fill />
            <StarIcon />
          </div>
        </article>
      ))}
    </Carousel>
  );
}
