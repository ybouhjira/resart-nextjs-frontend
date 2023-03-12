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
        <Link href={`product/${product.sku}`} className={cx("block", styles.productCard)} data-testid="ProductCard">
            <div className={cx("relative", styles.image)}>
               <ProductImage
                    src={`${product.variations[0].images[0]}`}
                    alt={product.name}
                    fill/>
            </div>
            <div className={styles.info}>
                <div className={styles.name}>{product.name}</div>
                <div className={styles.referencePrice}>{product.variations[0].referencePrice} DH</div>
                <div className={styles.currentPrice}>{product.variations[0].currentPrice} DH</div>
            </div>
        </Link>
    );
};

export default ProductCard;
