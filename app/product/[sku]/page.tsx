import { useGetProductBySku } from "@/app/product/[sku]/data/useGetProductBySku";
import { notFound, useRouter } from "next/navigation";
import Image from "next/image";

const ProductDetailsPage = ({
  params: { sku },
}: {
  params: { sku: string };
}) => {
  const product = useGetProductBySku(sku);

  if (!product) notFound();

  return (
    <div>
      <h2 className="text-3xl font-bold underline">{product.name}</h2>
      <div className="flex gap-x-10 gap-y-5">
          <figure className="block w-[260px] h-[300px] relative shrink-0">
              <Image src={`/${product.path}`} alt={product.name} fill />
          </figure>
          <main className="text-[24px]">
              {product.description}
          </main>
      </div>
      <div className="flex gap-x-2.5">
          <strong className="text-3xl text-red-500">{product.price.currentPrice}DH</strong>
          <strong className="text-3xl overline">{product.price.referencePrice}DH</strong>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
