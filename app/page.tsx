import MainBanner from "@/app/components/MainBanner/MainBanner";
import AboutSection from "@/app/components/AboutSection/AboutSection";
import TestimonialsSection from "@/app/components/TestimonialsSection/TestimonialsSection";

export default function HomePage() {
  return (
    <div>
      <MainBanner />
      <AboutSection />
      <TestimonialsSection />
    </div>
  );
}
