import Section from "@/app/components/Section/Section";
import TestimonialSlideShow from "@/app/components/TestimonialsSection/TestimonialSlideShow";
import { testimonials } from "@/app/data/testimonials";

export default function TestimonialsSection() {
  return (
    <Section
      title="what people are saying about us? "
      className="bg-white px-0 md:px-0"
    >
      <TestimonialSlideShow />
    </Section>
  );
}
