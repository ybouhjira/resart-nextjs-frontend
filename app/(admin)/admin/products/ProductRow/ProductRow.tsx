import RowActions from "@/app/(admin)/admin/products/ProductRow/RowActions";
import Image from "next/image";
import { ProductWithPhotoURLs } from "@/lib/entities/Product/types";

interface Props {
  product: ProductWithPhotoURLs;
}

export default function ProductRow({
  product: { sku, photoURLs, name, currentPrice, referencePrice, stock },
}: Props) {
  return (
    <tr className="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700">
      <td className="p-4 w-4">{sku}</td>
      <th
        scope="row"
        className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white ps-4"
      >
        <div className="flex items-center">
          <Image
            width={64}
            height={64}
            className="bg-cover"
            src={photoURLs[0]}
            alt="Necklace image"
          />
        </div>
      </th>

      <td className="px-4 py-3">
        <span className="bg-primary-100 text-primary-800 text-xs font-medium px-2 py-0.5 rounded dark:bg-primary-900 dark:text-primary-300">
          {name}
        </span>
      </td>
      <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white text-right w-0">
        {referencePrice}
      </td>
      <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white text-right  w-0">
        {currentPrice}
      </td>
      <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white text-right  w-0">
        {stock}
      </td>
      <td className="w-0">
        <RowActions sku={sku} />
      </td>
    </tr>
  );
}
