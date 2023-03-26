import Section from "@/app/components/Section/Section";
import Image from "next/image";
import Button from "@/app/shared/Button/Button";
import cx from "classnames";
import { Hahmlet } from "@next/font/google";

const font = Hahmlet({ subsets: ["latin"] });
export default function AboutSection() {
  return (
    <Section title="" className="bg-lightBackground">
      <div
        className={`justify-center
        flex flex-col md:flex-row
      gap-lg items-center`}
      >
        <div className="flex flex-col gap-lg : string, justify-center items-center">
          <h2
            className={cx(
              "text-[36px] mb-10 font-bold capitalize mb-md",
              font.className
            )}
          >
            how we bring our product to life?
          </h2>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>

          <div>
            <Button
              href="/about"
              className="bg-transparent border-main border-4 text-main"
            >
              Learn More
            </Button>
          </div>
          <div className="max-w-[734px] : string,">
            <video controls>
              <source src="/videos/home.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-1 items-center : string, w-fit">
          <Image
            src="/photos/image5.png"
            alt="Natural wood"
            width={471}
            height={473}
          />
          <Image
            src="/photos/image6.png"
            alt="Natural wood"
            width={471}
            height={269}
          />
        </div>
      </div>
    </Section>
  );
}
