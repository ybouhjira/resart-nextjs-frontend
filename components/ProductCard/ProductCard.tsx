import Product from "@/types/Product";
import Image from "next/image";
import styles from "./ProductCard.module.css";
import cx from 'classnames';
import Link from "next/link";

interface Props extends Product {}

const ProductCard = (props: Props) => {
  return (
    <Link href={`product/${props.sku}`} className={cx("block", styles.productCard)}>
      <div className={cx("relative", styles.image)}>
          <Image src={`/${props.path}`} alt={props.name} fill />
      </div>
        <div className={styles.info}>
            <div className={styles.name}>{props.name}</div>
            <div className={styles.referencePrice}>{props.price.referencePrice} DH</div>
            <div className={styles.currentPrice}>{props.price.currentPrice} DH</div>
        </div>
    </Link>
  );
};

export default ProductCard;
