import { ReactElement } from "react";
import { twMerge } from "tailwind-merge";

import { Hahmlet } from "@next/font/google";
import cx from "classnames";

const font = Hahmlet({ subsets: ["latin"] });

interface Props {
  title: string;
  className?: string;
  children: ReactElement;
}

export default function Section(props: Props) {
  return (
    <section
      className={twMerge("text-center px-5 py-xl lg:py-2xl", props.className)}
    >
      {props.title && (
        <h2
          className={cx(
            "text-[36px] mb-10 font-bold capitalize mb-md",
            font.className
          )}
        >
          {props.title}
        </h2>
      )}
      {props.children}
    </section>
  );
}
