import { notFound } from "next/navigation";
import Image from "next/image";
import {
  getCurrentPrice,
  getMainPhoto,
  getReferencePrice,
} from "@/lib/entities/Product/schema";
import getProductFromDBBySKU from "@/lib/entities/Product/db/getProductFromDB";
import * as process from "process";
import cx from "classnames";
import Button from "@/app/shared/Button/Button";

interface Props {
  params: { sku: string };
}

const ProductDetailsPage = async ({ params: { sku } }: Props) => {
  const product = await getProductFromDBBySKU(sku);

  if (!product) notFound();

  return (
    <main className="max-w-screen-max m-auto flex">
      <div className="flex flex-col md:flex-row gap-5">
        <figure className="lg:w-full rounded overflow-hidden md:basis-1/2">
          <Image
            data-testid="product-image"
            src={getMainPhoto(product) as string}
            alt={product.name}
            width={675}
            height={675}
            className="h-full w-auto block object-cover"
          />
        </figure>
        <section className="flex flex-col gap-5 md:basis-1/2">
          <h2 className="heading" data-testid="product-name">
            {product.name}
          </h2>
          <article data-testid="product-description">
            {product.description}
          </article>

          <div className="flex flex-col gap-5 lg:flex-row justify-between items-center">
            <div className="flex gap-5 items-center">
              <span
                className="text-3xl text-dark font-bold"
                data-testid="product-current-price"
              >
                {getCurrentPrice(product)} DH
              </span>

              <span className="text-2xl" data-testid="product-reference-price">
                {getReferencePrice(product)} DH
              </span>
            </div>
            <div className="self-stretch">
              <Button
                className={cx(
                  "block bg-transparent text-whatsapp border-whatsapp border-2"
                )}
                href={`https://wa.me/${
                  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER as string
                }?text=Hello, I want to order product: ${product.sku}`}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="whatsapp-button"
              >
                Order On Whatsapp
              </Button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default ProductDetailsPage;
