import "server-only";

import Image from "next/image";
import { ComponentProps } from "react";

export default function ProductImage(props: ComponentProps<typeof Image>) {
  return (
    <Image
      {...props}
      src={`${process.env.PHOTOS_BUCKET}/${props.src}`}
      data-testid="product-image"
      alt={props.alt}
    />
  );
}
