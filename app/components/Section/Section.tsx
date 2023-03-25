import { ReactElement } from "react";
import { twMerge } from "tailwind-merge";

import { Hahmlet } from "@next/font/google";

const font = Hahmlet({ subsets: ["latin"] });

interface Props {
  title: string;
  className?: string;
  children: ReactElement;
}

export default function Section(props: Props) {
  return (
    <section
      className={twMerge(
        "text-center px-5 py-2xl",
        props.className,
        font.className
      )}
    >
      <h2 className="text-[36px] mb-10 font-bold capitalize">{props.title}</h2>
      {props.children}
    </section>
  );
}
