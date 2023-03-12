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
              className="block w-[274px] border border-gray-300 text-gray-800 shadow-gray-500 shadow-sm bg-white"
              data-testid="ProductCard">
            <div className="relative w-full">
                <ProductImage
                    src={`${product.variations[0].images[0]}`}
                    alt={product.name}
                    width={274}
                    height={274}
                    className="border-4 border-white"
                />
            </div>
            <div className="p-2">
                <div className="text-[24px] font-bold">{product.name}</div>
                <span className="line-through">{product.variations[0].referencePrice} DH</span>
                <strong className="ml-2 text-[#d32f2f] text-[18px] font-bold">{product.variations[0].currentPrice} DH</strong>
            </div>
        </Link>
    );
};

export default ProductCard;
