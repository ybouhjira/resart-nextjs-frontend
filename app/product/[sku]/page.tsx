import {useGetProductBySku} from "@/app/product/[sku]/data/useGetProductBySku";
import {notFound, useRouter } from "next/navigation";
import Image from "next/image";

const ProductDetailsPage = ({params: {sku}}: {params: {sku: string}}) => {
    const product = useGetProductBySku(sku)

    if (!product)
        notFound()

    return <div>
        <h2 className="text-3xl font-bold underline">
            {product.name}
        </h2>
        <figure className="block w-[260px] h-[300px] relative">
            <Image src={`/${product.path}`} alt={product.name} fill/>
        </figure>
        <strong>{product.price.currentPrice}DH</strong>
        <br/>
        <strong>{product.price.referencePrice}DH</strong>
    </div>
}

export default ProductDetailsPage
