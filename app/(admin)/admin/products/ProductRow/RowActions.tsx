import { TrashIcon } from "@/components/Icons/TrashIcon";
import { EditIcon } from "@/components/Icons/EditIcon";

interface Props {
  onDeleteClick?: () => void;
  onEditClick?: () => void;
}

export default function RowActions({ onDeleteClick, onEditClick }: Props) {
  return (
    <div className="flex items-center space-x-2 p-2">
      <button
        onClick={onEditClick}
        type="button"
        data-drawer-target="drawer-update-product"
        data-drawer-show="drawer-update-product"
        aria-controls="drawer-update-product"
        className="bg-dark py-2 px-3 flex items-center text-sm font-medium text-center text-white rounded-lg focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
      >
        <EditIcon />
        Edit
      </button>
      <button
        onClick={onDeleteClick}
        type="button"
        data-modal-target="delete-modal"
        data-modal-toggle="delete-modal"
        className="flex items-center text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-3 py-2 text-center dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
      >
        <TrashIcon />
        Delete
      </button>
    </div>
  );
}
