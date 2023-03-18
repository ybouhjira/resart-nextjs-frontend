import styles from "./ProductCard.module.css";
import cx from 'classnames';
import Link from "next/link";
import Product from "@resart/types/Product";
import ProductImage from "@/components/ProductImage/ProductImage";

interface Props {
    product: Product
}

const ProductCard = ({product}: Props) => {
    return (
        <Link href={`products/${product.sku}`}
              className="block w-[274px] text-gray-800"
              data-testid="ProductCard">
            <figure className="relative w-full rounded overflow-hidden">
                <ProductImage
                    src={`${product.variations[0].images[0]}`}
                    alt={product.name}
                    width={274}
                    height={274}
                />
            </figure>
            <div className="p-2">
                <div className="text-[24px] font-bold">{product.name}</div>
                <span className="line-through">{product.variations[0].referencePrice} DH</span>
                <strong className="ml-2 text-[#d32f2f] text-[18px] font-bold">{product.variations[0].currentPrice} DH</strong>
            </div>
        </Link>
    );
};

export default ProductCard;
