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
    <main className="flex w-full flex-wrap gap-[24px] py-20 px-10">
      <div className="flex gap-x-10 gap-y-5">
        <figure className="block w-[260px] h-[300px] relative shrink-0">
          <Image src={`/${product.path}`} alt={product.name} fill />
        </figure>
        <section>
          <h2 className="text-3xl font-bold mb-5">{product.name}</h2>

          <main className="text-[24px] mb-10">{product.description}</main>

          <div className="flex justify-between items-center ">
            <div className="flex gap-x-2.5">
              <strong className="text-3xl text-red-500">
                {product.price.currentPrice}DH
              </strong>
              <strong className="text-3xl line-through">
                {product.price.referencePrice}DH
              </strong>
            </div>
            <button className="p-4 text-xl font-bold bg-green-600 rounded-md text-white">
              Order via whatsapp!
            </button>
          </div>
        </section>
      </div>
    </main>
  );
};

export default ProductDetailsPage;
