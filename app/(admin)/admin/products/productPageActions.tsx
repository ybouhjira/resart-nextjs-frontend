"use client";

import { PlusIcon } from "@/components/Icons/PlusIcon";
import { useRouter } from "next/navigation";
import { useState } from "react";
import CreateProductModalContent from "@/app/(admin)/admin/products/CreateProductModal/CreateProductModalContent";
import Modal from "@/app/(admin)/components/Modal";

interface Props {
  onAddClicked: () => void;
}
export function ProductPageActions() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Modal title="Create product" open={open} onClose={() => setOpen(false)}>
        <CreateProductModalContent />;
      </Modal>
      <div className="block justify-between items-center p-4 mx-4 mt-4 mb-6 bg-white rounded-2xl shadow-xl shadow-gray-200 lg:p-5 sm:flex">
        <div className="mb-1 w-full">
          <div className="block items-center sm:flex md:divide-x md:divide-gray-100">
            <form className="mb-4 sm:pr-3 sm:mb-0" action="#" method="GET">
              <label htmlFor="products-search" className="sr-only">
                Search
              </label>
              <div className="relative mt-1 sm:w-64 xl:w-96">
                <input
                  type="text"
                  name="email"
                  id="products-search"
                  className="border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-2 focus:ring-fuchsia-50 focus:border-fuchsia-300 block w-full p-2.5"
                  placeholder="Search for products"
                  disabled={true}
                />
              </div>
            </form>
            <div className="flex items-center w-full sm:justify-end">
              <button
                onClick={() => setOpen(true)}
                type="button"
                data-modal-toggle="add-product-modal"
                className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white rounded-lg bg-gradient-to-br from-green-900 to-green-500 sm:ml-auto shadow-md shadow-gray-300 hover:scale-[1.02] transition-transform"
              >
                <PlusIcon />
                Add product
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
