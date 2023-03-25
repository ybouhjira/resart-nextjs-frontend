"use client";
import * as path from "path";
import Image from "next/image";
import { testimonials } from "@/app/data/testimonials";
import Carousel from "@/components/Carousel/Carousel";

export default function TestimonialSlideShow() {
  return (
    <Carousel>
      {
        testimonials.map((testimonial) => (
          <div key={testimonial.id} className="overflow-y-visible">
            <div className="p-md pb-xl w-[380px] w-[371px]">
              <article
                className={`w-full flex flex-col 
          justify-center gap-md items-center 
           p-md text-left block
          shadow-xl
          `}
              >
                <div className="flex items-center gap-md">
                  <figure className="rounded-full overflow-hidden relative w-2xl h-2xl">
                    <Image
                      src={path.join("/", testimonial.photo)}
                      alt="Testimonial author photo"
                      className="bg-cover"
                      fill
                    />
                  </figure>
                  <div className="name">{testimonial.name}</div>
                </div>
                <div className="max-w-[75vw] md:max-w-[500px] lg:max-w-[960px]">
                  {testimonial.content}
                </div>
              </article>
            </div>
          </div>
        )).length
      }
    </Carousel>
  );
}
