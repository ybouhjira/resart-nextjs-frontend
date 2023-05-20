import React from "react";
import Image from "next/image";
import styles from "./image.module.scss";
import cx from "classnames";
interface Props {
  urls: string[];
}

export default function ProductCarousel({ urls }: Props) {
  console.log({ urls });
  return (
    <div className={cx(styles.perspective, "flex m-auto justify-center")}>
      {urls.map((item, index) => (
        <div key={index} className={cx(styles.image, "max-w-[fit-content] ")}>
          <div className="rounded overflow-hidden mx-md" key={item}>
            <Image
              key={item}
              src={item}
              alt="Resart necklace photo"
              width={489}
              height={381}
              className="object-cover w-full"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
