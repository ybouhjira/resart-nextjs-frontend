import Image from "next/image";
import ProductImage from "@/components/ProductImage/ProductImage";

interface Props {
  photoURL: string;
  name: string;
}
export default function ProductRow({ photoURL, name }: Props) {
  return <tr>
    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
      <div className="flex items-center">
        <div className="flex-shrink-0 w-10 h-10">
          <ProductImage src={`/product-photos/${photoURL}`} alt="product photo" width={60} height={60}/>
        </div>
        <div className="ml-3">
          <p className="text-gray-900 whitespace-no-wrap">
            {name}
          </p>
        </div>
      </div>
    </td>
    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
      <p className="text-gray-900 whitespace-no-wrap">Admin</p>
    </td>
    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
      <p className="text-gray-900 whitespace-no-wrap">
        Jan 21, 2020
      </p>
    </td>
    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
      <p className="text-gray-900 whitespace-no-wrap">43</p>
    </td>
  </tr>
}