import "server-only";

import Image from "next/image";
import { ComponentProps } from "react";
import { join } from "path";
import { URL } from "url";
import * as process from "process";

export default function ProductImage(
  props: ComponentProps<typeof Image> & { src?: string }
) {
  const url = new URL(process.env.PHOTOS_BUCKET as string);
  url.pathname = join(url.pathname, props.src || "");

  return (
    <Image
      {...props}
      src={url.toString()}
      data-testid="product-image"
      alt={props.alt}
    />
  );
}
