import Link from "next/link";
import Image from "next/image";
import Text from "@/components/Text/Text";
import { getMainPhoto } from "@/utils/data/product";

interface Props {
  product: any;
}

const ProductCard = ({ product }: Props) => {
  const mainVariation = product.variations[0];
  return (
    <Link
      href={`products/${product.sku}`}
      className="block w-full"
      data-testid="ProductCard"
    >
      <figure className="relative w-full rounded overflow-hidden">
        <Image
          src={getMainPhoto(product) as string}
          alt={product.name}
          width={274}
          height={274}
          className="object-cover w-full"
        />
      </figure>
      <div className="p-2">
        <div className="text-2xl font-[500] font-bold">{product.name}</div>
        <Text.Price variant="ref">{mainVariation.referencePrice}</Text.Price>
        <Text.Price>{mainVariation.currentPrice}</Text.Price>
      </div>
    </Link>
  );
};

export default ProductCard;
