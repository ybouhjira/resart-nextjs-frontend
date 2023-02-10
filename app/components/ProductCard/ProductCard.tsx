import Product from "@/app/types/Product";
import Image from "next/image";
import styles from "./ProductCard.module.css";

interface Props extends Product {}

const ProductCard = (props: Props) => {
  return (
    <div className={styles.productCard}>
      <Image src={`/${props.path}`} alt={props.name} width={300} height={420} />
      <div>{props.name}</div>
      <div>{props.price.referencePrice} DH</div>
      <div>{props.price.currentPrice} DH</div>
    </div>
  );
};

export default ProductCard;
