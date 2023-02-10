import Product from "@/app/types/Product";
import Image from "next/image";
import styles from "./ProductCard.module.css";

interface Props extends Product {}

const ProductCard = (props: Props) => {
  return (
    <a href="#" className={styles.productCard}>
      <Image src={`/${props.path}`} alt={props.name} width={400} height={420} />
        <div className={styles.info}>
            <div>{props.name}</div>
            <div>{props.price.referencePrice} DH</div>
            <div>{props.price.currentPrice} DH</div>
        </div>
    </a>
  );
};

export default ProductCard;
