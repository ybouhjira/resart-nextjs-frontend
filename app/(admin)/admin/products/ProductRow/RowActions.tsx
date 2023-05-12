"use client";

import { TrashIcon } from "@/components/Icons/TrashIcon";
import { EditIcon } from "@/components/Icons/EditIcon";
import { useMutation } from "react-query";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface Props {
  sku: string;
}

export default function RowActions({ sku }: Props) {
  const router = useRouter();

  const { mutate, isLoading: deleteLoading } = useMutation(() => {
    return fetch(`/api/products/${sku}`, {
      method: "DELETE",
    });
  });

  const onDeleteClick = () => {
    const confirmed = confirm(`Are you sure you want to delete ${sku}?`);
    if (confirmed) {
      mutate(undefined, {
        onSuccess: () => {
          router.refresh();
        },
      });
    }
  };

  return (
    <div className="flex items-center space-x-2 p-2">
      <Link
        href={`/admin/products/edit/${sku}`}
        type="button"
        className="bg-dark py-2 px-3 flex items-center text-sm font-medium text-center text-white rounded-lg focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
      >
        <EditIcon />
        Edit
      </Link>
      <button
        disabled={deleteLoading}
        onClick={onDeleteClick}
        type="button"
        className="flex items-center text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-3 py-2 text-center dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
      >
        {deleteLoading ? (
          "Deleting..."
        ) : (
          <>
            <TrashIcon />
            Delete
          </>
        )}
      </button>
    </div>
  );
}
