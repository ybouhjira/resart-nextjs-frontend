import { Product } from "@prisma/client";
import { get } from "lodash/fp";
import * as process from "process";

export function getMainPhoto(product: Product): string {
  const photoKey = get("variations[0].images[0].path", product);
  return `${process.env.PHOTOS_BUCKET}/product-photos/${photoKey}`;
}
