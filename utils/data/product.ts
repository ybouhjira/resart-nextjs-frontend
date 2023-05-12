import { Product } from "@prisma/client";
import { get } from "lodash/fp";
import * as process from "process";

export function getMainPhoto(product: Product): string {
  const photoKey = get("variations[0].images[0].path", product);
  return getPhotoURL(`${photoKey}`);
}

export function getPhotoURL(url: string): string {
  return `${process.env.NEXT_PUBLIC_PHOTOS_BUCKET}/product-photos/${url}`;
}

export function getReferencePrice(product: Product): number {
  return get("variations[0].referencePrice", product);
}

export function getCurrentPrice(product: Product): number {
  return get("variations[0].currentPrice", product);
}

export function getStock(product: Product): number {
  return get("variations[0].stock", product);
}
