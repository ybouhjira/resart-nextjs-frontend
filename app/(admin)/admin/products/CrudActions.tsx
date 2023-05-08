import AddIcon from "@/components/Icons/AddIcon";
import Link from "next/link";

export function CrudActions() {
  return (
    <div className="justify-end flex">
      <Link
        href="/admin/products/create"
        type="button"
        className="flex-nowrap flex whitespace-nowrap text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      >
        <AddIcon className="w-4 h-4 mr-2 -ml-1" />
        New Product
      </Link>
    </div>
  );
}
