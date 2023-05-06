import { Product } from "@prisma/client";
import { get } from "lodash/fp";

export function getMainPhoto(product: Product) {
  return get("variations[0].images[0]", product);
}
