import products from "@/app/data/products";
import ProductCard from "@/app/components/ProductCard/ProductCard";


export default function Home() {
  return (
    <div style={{ display: "flex", width: "100%", flexWrap: "wrap", gap: '24px' }}>
      {products.map((product) => (
        <ProductCard key={product.sku} {...product} />
      ))}
    </div>
  );
}
