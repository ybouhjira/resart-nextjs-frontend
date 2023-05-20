import Link from "next/link";
import Image from "next/image";
import {
  getCurrentPrice,
  getMainPhoto,
  getReferencePrice,
} from "@/lib/entities/Product/schema";
import { GetProductPayload } from "@/lib/entities/Product/types";

interface Props {
  product: GetProductPayload;
}

const ProductCard = ({ product }: Props) => {
  return (
    <Link
      href={`products/${product.sku}`}
      className="block w-full"
      data-testid="product-card"
    >
      <figure className="relative rounded overflow-hidden w-[274px] h-[274px]">
        <Image
          src={getMainPhoto(product)}
          alt={product.name}
          width={274}
          height={274}
          className="object-cover bg-center w-full"
        />
      </figure>
      <div className="p-2">
        <div className="text-2xl font-bold">{product.name}</div>
        <div className="flex gap-4 items-end">
          <span className="price ref-price">{getReferencePrice(product)}</span>
          <span className="price text-2xl">{getCurrentPrice(product)}</span>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
