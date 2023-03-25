import Slider from "react-slick";
import { Children, ReactElement, ReactNode } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface CarouselProps {
  children: ReactElement[];
}

export default function Carousel({ children }: CarouselProps) {
  const settings = {
    className: "slider variable-width",
    dots: true,
    //infinite: true,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
  };

  return (
    <Slider {...settings} className="overflow-y-visible">
      {children}
    </Slider>
  );
}
