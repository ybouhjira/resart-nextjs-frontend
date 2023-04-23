import Image from "next/image";
import ProductImage from "@/components/ProductImage/ProductImage";
import Text from "@/components/Text/Text";

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
          <svg
            className="mr-2 w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
              clipRule="evenodd"
            />
          </svg>
          Delete
        </button>
      </td>
    </tr>
  );
}
