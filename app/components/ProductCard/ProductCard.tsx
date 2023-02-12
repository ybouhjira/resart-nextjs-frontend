import Product from "@/app/types/Product";
import Image from "next/image";
import styles from "./ProductCard.module.css";

interface Props extends Product {}

const ProductCard = (props: Props) => {
  return (
    <a href="#" className={styles.productCard}>
      <div style={{position: 'relative', height: '300px'}}>
          <Image src={`/${props.path}`} alt={props.name} fill />
      </div>
        <div className={styles.info}>
            <div className={styles.name}>{props.name}</div>
            <div className={styles.referencePrice}>{props.price.referencePrice} DH</div>
            <div className={styles.currentPrice}>{props.price.currentPrice} DH</div>
        </div>
    </a>
  );
};

export default ProductCard;
