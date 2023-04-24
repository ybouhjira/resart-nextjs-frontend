import ProductImage from "@/components/ProductImage/ProductImage";
import Text from "@/components/Text/Text";
import { TrashIcon } from "@/components/Icons/TrashIcon";

interface Props {
  photoURL: string;
  name: string;
  currentPrice: number;
  referencePrice: number;
}

export default function ProductRow({
  photoURL,
  name,
  currentPrice,
  referencePrice,
}: Props) {
  return (
    <tr className="hover:bg-gray-100">
      <td className="w-[100px]">
        <ProductImage
          src={`product-photos/${photoURL}`}
          alt="product photo"
          width={100}
          height={100}
        />
      </td>
      <td>{name}</td>
      <td className="p-4 text-base font-medium text-gray-900 whitespace-nowrap lg:p-5 w-0">
        <Text.Price>{currentPrice}</Text.Price>
      </td>
      <td className="p-4 text-base font-medium text-gray-900 whitespace-nowrap lg:p-5 line-through w-0">
        <Text.Price variant="ref">{referencePrice}</Text.Price>
      </td>
      <td className="p-4 space-x-2 whitespace-nowrap lg:p-5 w-0">
        <button
          type="button"
          data-modal-toggle="delete-product-modal"
          className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-gradient-to-br from-red-400 to-red-600 rounded-lg shadow-md shadow-gray-300 hover:scale-[1.02] transition-transform"
        >
          <TrashIcon />
          <span className="hidden md:block">Delete</span>
        </button>
      </td>
    </tr>
  );
}
