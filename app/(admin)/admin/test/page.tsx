export default function Test() {
  return (
    <div className="flex flex-col my-6 mx-4 rounded-2xl shadow-xl shadow-gray-200">
      <div className="overflow-x-auto rounded-2xl">
        <div className="inline-block min-w-full align-middle">
          <div className="overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200 table-fixed">
              <thead className="bg-white">
                <tr>
                  <th scope="col" className="p-4 lg:p-5">
                    <div className="flex items-center">
                      <input
                        id="checkbox-all"
                        aria-describedby="checkbox-1"
                        type="checkbox"
                        className="w-5 h-5 rounded border-gray-300 focus:ring-0 checked:bg-dark-900"
                      />
                      <label htmlFor="checkbox-all" className="sr-only">
                        checkbox
                      </label>
                    </div>
                  </th>
                  <th
                    scope="col"
                    className="p-4 text-xs font-medium text-left text-gray-500 uppercase lg:p-5"
                  >
                    Product Name
                  </th>
                  <th
                    scope="col"
                    className="p-4 text-xs font-medium text-left text-gray-500 uppercase lg:p-5"
                  >
                    Technology
                  </th>
                  <th
                    scope="col"
                    className="p-4 text-xs font-medium text-left text-gray-500 uppercase lg:p-5"
                  >
                    ID
                  </th>
                  <th
                    scope="col"
                    className="p-4 text-xs font-medium text-left text-gray-500 uppercase lg:p-5"
                  >
                    Price
                  </th>
                  <th scope="col" className="p-4 lg:p-5"></th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr className="hover:bg-gray-100">
                  <td className="p-4 w-4 lg:p-5">
                    <div className="flex items-center">
                      <input
                        id="checkbox-194556"
                        aria-describedby="checkbox-1"
                        type="checkbox"
                        className="w-5 h-5 rounded border-gray-300 focus:ring-0 checked:bg-dark-900"
                      />
                      <label htmlFor="checkbox-194556" className="sr-only">
                        checkbox
                      </label>
                    </div>
                  </td>
                  <td className="p-4 text-sm font-normal text-gray-500 whitespace-nowrap lg:p-5">
                    <div className="text-base font-semibold text-gray-900">
                      Education Dashboard
                    </div>
                    <div className="text-sm font-normal text-gray-500">
                      Html templates
                    </div>
                  </td>
                  <td className="p-4 text-base font-medium text-gray-900 whitespace-nowrap lg:p-5">
                    Angular
                  </td>
                  <td className="p-4 text-base font-medium text-gray-900 whitespace-nowrap lg:p-5">
                    #194556
                  </td>
                  <td className="p-4 text-base font-medium text-gray-900 whitespace-nowrap lg:p-5">
                    $149
                  </td>
                  <td className="p-4 space-x-2 whitespace-nowrap lg:p-5">
                    <button
                      type="button"
                      data-modal-toggle="product-modal"
                      className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300 hover:text-gray-900 hover:scale-[1.02] transition-all"
                    >
                      <svg
                        className="mr-2 w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                        <path
                          fillRule="evenodd"
                          d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Edit item
                    </button>
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
                      Delete item
                    </button>
                  </td>
                </tr>
                <tr className="hover:bg-gray-100">
                  <td className="p-4 w-4 lg:p-5">
                    <div className="flex items-center">
                      <input
                        id="checkbox-623232"
                        aria-describedby="checkbox-1"
                        type="checkbox"
                        className="w-5 h-5 rounded border-gray-300 focus:ring-0 checked:bg-dark-900"
                      />
                      <label htmlFor="checkbox-623232" className="sr-only">
                        checkbox
                      </label>
                    </div>
                  </td>
                  <td className="p-4 text-sm font-normal text-gray-500 whitespace-nowrap lg:p-5">
                    <div className="text-base font-semibold text-gray-900">
                      Flowbite UI Kit
                    </div>
                    <div className="text-sm font-normal text-gray-500">
                      Html templates
                    </div>
                  </td>
                  <td className="p-4 text-base font-medium text-gray-900 whitespace-nowrap lg:p-5">
                    FlowbiteJS
                  </td>
                  <td className="p-4 text-base font-medium text-gray-900 whitespace-nowrap lg:p-5">
                    #623232
                  </td>
                  <td className="p-4 text-base font-medium text-gray-900 whitespace-nowrap lg:p-5">
                    $129
                  </td>
                  <td className="p-4 space-x-2 whitespace-nowrap lg:p-5">
                    <button
                      type="button"
                      data-modal-toggle="product-modal"
                      className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300 hover:text-gray-900 hover:scale-[1.02] transition-all"
                    >
                      <svg
                        className="mr-2 w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                        <path
                          fillRule="evenodd"
                          d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Edit item
                    </button>
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
                      Delete item
                    </button>
                  </td>
                </tr>
                <tr className="hover:bg-gray-100">
                  <td className="p-4 w-4 lg:p-5">
                    <div className="flex items-center">
                      <input
                        id="checkbox-194356"
                        aria-describedby="checkbox-1"
                        type="checkbox"
                        className="w-5 h-5 rounded border-gray-300 focus:ring-0 checked:bg-dark-900"
                      />
                      <label htmlFor="checkbox-194356" className="sr-only">
                        checkbox
                      </label>
                    </div>
                  </td>
                  <td className="p-4 text-sm font-normal text-gray-500 whitespace-nowrap lg:p-5">
                    <div className="text-base font-semibold text-gray-900">
                      Education Dashboard
                    </div>
                    <div className="text-sm font-normal text-gray-500">
                      Html templates
                    </div>
                  </td>
                  <td className="p-4 text-base font-medium text-gray-900 whitespace-nowrap lg:p-5">
                    Angular
                  </td>
                  <td className="p-4 text-base font-medium text-gray-900 whitespace-nowrap lg:p-5">
                    #194356
                  </td>
                  <td className="p-4 text-base font-medium text-gray-900 whitespace-nowrap lg:p-5">
                    $149
                  </td>
                  <td className="p-4 space-x-2 whitespace-nowrap lg:p-5">
                    <button
                      type="button"
                      data-modal-toggle="product-modal"
                      className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300 hover:text-gray-900 hover:scale-[1.02] transition-all"
                    >
                      <svg
                        className="mr-2 w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                        <path
                          fillRule="evenodd"
                          d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Edit item
                    </button>
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
                      Delete item
                    </button>
                  </td>
                </tr>
                <tr className="hover:bg-gray-100">
                  <td className="p-4 w-4 lg:p-5">
                    <div className="flex items-center">
                      <input
                        id="checkbox-323323"
                        aria-describedby="checkbox-1"
                        type="checkbox"
                        className="w-5 h-5 rounded border-gray-300 focus:ring-0 checked:bg-dark-900"
                      />
                      <label htmlFor="checkbox-323323" className="sr-only">
                        checkbox
                      </label>
                    </div>
                  </td>
                  <td className="p-4 text-sm font-normal text-gray-500 whitespace-nowrap lg:p-5">
                    <div className="text-base font-semibold text-gray-900">
                      Flowbite UI Kit
                    </div>
                    <div className="text-sm font-normal text-gray-500">
                      Html templates
                    </div>
                  </td>
                  <td className="p-4 text-base font-medium text-gray-900 whitespace-nowrap lg:p-5">
                    FlowbiteJS
                  </td>
                  <td className="p-4 text-base font-medium text-gray-900 whitespace-nowrap lg:p-5">
                    #323323
                  </td>
                  <td className="p-4 text-base font-medium text-gray-900 whitespace-nowrap lg:p-5">
                    $129
                  </td>
                  <td className="p-4 space-x-2 whitespace-nowrap lg:p-5">
                    <button
                      type="button"
                      data-modal-toggle="product-modal"
                      className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300 hover:text-gray-900 hover:scale-[1.02] transition-all"
                    >
                      <svg
                        className="mr-2 w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                        <path
                          fillRule="evenodd"
                          d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Edit item
                    </button>
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
                      Delete item
                    </button>
                  </td>
                </tr>
                <tr className="hover:bg-gray-100">
                  <td className="p-4 w-4 lg:p-5">
                    <div className="flex items-center">
                      <input
                        id="checkbox-994856"
                        aria-describedby="checkbox-1"
                        type="checkbox"
                        className="w-5 h-5 rounded border-gray-300 focus:ring-0 checked:bg-dark-900"
                      />
                      <label htmlFor="checkbox-994856" className="sr-only">
                        checkbox
                      </label>
                    </div>
                  </td>
                  <td className="p-4 text-sm font-normal text-gray-500 whitespace-nowrap lg:p-5">
                    <div className="text-base font-semibold text-gray-900">
                      Education Dashboard
                    </div>
                    <div className="text-sm font-normal text-gray-500">
                      Html templates
                    </div>
                  </td>
                  <td className="p-4 text-base font-medium text-gray-900 whitespace-nowrap lg:p-5">
                    Angular
                  </td>
                  <td className="p-4 text-base font-medium text-gray-900 whitespace-nowrap lg:p-5">
                    #994856
                  </td>
                  <td className="p-4 text-base font-medium text-gray-900 whitespace-nowrap lg:p-5">
                    $149
                  </td>
                  <td className="p-4 space-x-2 whitespace-nowrap lg:p-5">
                    <button
                      type="button"
                      data-modal-toggle="product-modal"
                      className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300 hover:text-gray-900 hover:scale-[1.02] transition-all"
                    >
                      <svg
                        className="mr-2 w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                        <path
                          fillRule="evenodd"
                          d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Edit item
                    </button>
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
                      Delete item
                    </button>
                  </td>
                </tr>
                <tr className="hover:bg-gray-100">
                  <td className="p-4 w-4 lg:p-5">
                    <div className="flex items-center">
                      <input
                        id="checkbox-194256"
                        aria-describedby="checkbox-1"
                        type="checkbox"
                        className="w-5 h-5 rounded border-gray-300 focus:ring-0 checked:bg-dark-900"
                      />
                      <label htmlFor="checkbox-194256" className="sr-only">
                        checkbox
                      </label>
                    </div>
                  </td>
                  <td className="p-4 text-sm font-normal text-gray-500 whitespace-nowrap lg:p-5">
                    <div className="text-base font-semibold text-gray-900">
                      Education Dashboard
                    </div>
                    <div className="text-sm font-normal text-gray-500">
                      Html templates
                    </div>
                  </td>
                  <td className="p-4 text-base font-medium text-gray-900 whitespace-nowrap lg:p-5">
                    Angular
                  </td>
                  <td className="p-4 text-base font-medium text-gray-900 whitespace-nowrap lg:p-5">
                    #194256
                  </td>
                  <td className="p-4 text-base font-medium text-gray-900 whitespace-nowrap lg:p-5">
                    $149
                  </td>
                  <td className="p-4 space-x-2 whitespace-nowrap lg:p-5">
                    <button
                      type="button"
                      data-modal-toggle="product-modal"
                      className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300 hover:text-gray-900 hover:scale-[1.02] transition-all"
                    >
                      <svg
                        className="mr-2 w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                        <path
                          fillRule="evenodd"
                          d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Edit item
                    </button>
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
                      Delete item
                    </button>
                  </td>
                </tr>
                <tr className="hover:bg-gray-100">
                  <td className="p-4 w-4 lg:p-5">
                    <div className="flex items-center">
                      <input
                        id="checkbox-623378"
                        aria-describedby="checkbox-1"
                        type="checkbox"
                        className="w-5 h-5 rounded border-gray-300 focus:ring-0 checked:bg-dark-900"
                      />
                      <label htmlFor="checkbox-623378" className="sr-only">
                        checkbox
                      </label>
                    </div>
                  </td>
                  <td className="p-4 text-sm font-normal text-gray-500 whitespace-nowrap lg:p-5">
                    <div className="text-base font-semibold text-gray-900">
                      Flowbite UI Kit
                    </div>
                    <div className="text-sm font-normal text-gray-500">
                      Html templates
                    </div>
                  </td>
                  <td className="p-4 text-base font-medium text-gray-900 whitespace-nowrap lg:p-5">
                    FlowbiteJS
                  </td>
                  <td className="p-4 text-base font-medium text-gray-900 whitespace-nowrap lg:p-5">
                    #623378
                  </td>
                  <td className="p-4 text-base font-medium text-gray-900 whitespace-nowrap lg:p-5">
                    $129
                  </td>
                  <td className="p-4 space-x-2 whitespace-nowrap lg:p-5">
                    <button
                      type="button"
                      data-modal-toggle="product-modal"
                      className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300 hover:text-gray-900 hover:scale-[1.02] transition-all"
                    >
                      <svg
                        className="mr-2 w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                        <path
                          fillRule="evenodd"
                          d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Edit item
                    </button>
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
                      Delete item
                    </button>
                  </td>
                </tr>
                <tr className="hover:bg-gray-100">
                  <td className="p-4 w-4 lg:p-5">
                    <div className="flex items-center">
                      <input
                        id="checkbox-192856"
                        aria-describedby="checkbox-1"
                        type="checkbox"
                        className="w-5 h-5 rounded border-gray-300 focus:ring-0 checked:bg-dark-900"
                      />
                      <label htmlFor="checkbox-192856" className="sr-only">
                        checkbox
                      </label>
                    </div>
                  </td>
                  <td className="p-4 text-sm font-normal text-gray-500 whitespace-nowrap lg:p-5">
                    <div className="text-base font-semibold text-gray-900">
                      Education Dashboard
                    </div>
                    <div className="text-sm font-normal text-gray-500">
                      Html templates
                    </div>
                  </td>
                  <td className="p-4 text-base font-medium text-gray-900 whitespace-nowrap lg:p-5">
                    Angular
                  </td>
                  <td className="p-4 text-base font-medium text-gray-900 whitespace-nowrap lg:p-5">
                    #192856
                  </td>
                  <td className="p-4 text-base font-medium text-gray-900 whitespace-nowrap lg:p-5">
                    $149
                  </td>
                  <td className="p-4 space-x-2 whitespace-nowrap lg:p-5">
                    <button
                      type="button"
                      data-modal-toggle="product-modal"
                      className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300 hover:text-gray-900 hover:scale-[1.02] transition-all"
                    >
                      <svg
                        className="mr-2 w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                        <path
                          fillRule="evenodd"
                          d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Edit item
                    </button>
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
                      Delete item
                    </button>
                  </td>
                </tr>
                <tr className="hover:bg-gray-100">
                  <td className="p-4 w-4 lg:p-5">
                    <div className="flex items-center">
                      <input
                        id="checkbox-523323"
                        aria-describedby="checkbox-1"
                        type="checkbox"
                        className="w-5 h-5 rounded border-gray-300 focus:ring-0 checked:bg-dark-900"
                      />
                      <label htmlFor="checkbox-523323" className="sr-only">
                        checkbox
                      </label>
                    </div>
                  </td>
                  <td className="p-4 text-sm font-normal text-gray-500 whitespace-nowrap lg:p-5">
                    <div className="text-base font-semibold text-gray-900">
                      Flowbite UI Kit
                    </div>
                    <div className="text-sm font-normal text-gray-500">
                      Html templates
                    </div>
                  </td>
                  <td className="p-4 text-base font-medium text-gray-900 whitespace-nowrap lg:p-5">
                    FlowbiteJS
                  </td>
                  <td className="p-4 text-base font-medium text-gray-900 whitespace-nowrap lg:p-5">
                    #523323
                  </td>
                  <td className="p-4 text-base font-medium text-gray-900 whitespace-nowrap lg:p-5">
                    $129
                  </td>
                  <td className="p-4 space-x-2 whitespace-nowrap lg:p-5">
                    <button
                      type="button"
                      data-modal-toggle="product-modal"
                      className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300 hover:text-gray-900 hover:scale-[1.02] transition-all"
                    >
                      <svg
                        className="mr-2 w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                        <path
                          fillRule="evenodd"
                          d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Edit item
                    </button>
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
                      Delete item
                    </button>
                  </td>
                </tr>
                <tr className="hover:bg-gray-100">
                  <td className="p-4 w-4 lg:p-5">
                    <div className="flex items-center">
                      <input
                        id="checkbox-191857"
                        aria-describedby="checkbox-1"
                        type="checkbox"
                        className="w-5 h-5 rounded border-gray-300 focus:ring-0 checked:bg-dark-900"
                      />
                      <label htmlFor="checkbox-191857" className="sr-only">
                        checkbox
                      </label>
                    </div>
                  </td>
                  <td className="p-4 text-sm font-normal text-gray-500 whitespace-nowrap lg:p-5">
                    <div className="text-base font-semibold text-gray-900">
                      Education Dashboard
                    </div>
                    <div className="text-sm font-normal text-gray-500">
                      Html templates
                    </div>
                  </td>
                  <td className="p-4 text-base font-medium text-gray-900 whitespace-nowrap lg:p-5">
                    Angular
                  </td>
                  <td className="p-4 text-base font-medium text-gray-900 whitespace-nowrap lg:p-5">
                    #191857
                  </td>
                  <td className="p-4 text-base font-medium text-gray-900 whitespace-nowrap lg:p-5">
                    $149
                  </td>
                  <td className="p-4 space-x-2 whitespace-nowrap lg:p-5">
                    <button
                      type="button"
                      data-modal-toggle="product-modal"
                      className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300 hover:text-gray-900 hover:scale-[1.02] transition-all"
                    >
                      <svg
                        className="mr-2 w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                        <path
                          fillRule="evenodd"
                          d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Edit item
                    </button>
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
                      Delete item
                    </button>
                  </td>
                </tr>
                <tr className="hover:bg-gray-100">
                  <td className="p-4 w-4 lg:p-5">
                    <div className="flex items-center">
                      <input
                        id="checkbox-914856"
                        aria-describedby="checkbox-1"
                        type="checkbox"
                        className="w-5 h-5 rounded border-gray-300 focus:ring-0 checked:bg-dark-900"
                      />
                      <label htmlFor="checkbox-914856" className="sr-only">
                        checkbox
                      </label>
                    </div>
                  </td>
                  <td className="p-4 text-sm font-normal text-gray-500 whitespace-nowrap lg:p-5">
                    <div className="text-base font-semibold text-gray-900">
                      Education Dashboard
                    </div>
                    <div className="text-sm font-normal text-gray-500">
                      Html templates
                    </div>
                  </td>
                  <td className="p-4 text-base font-medium text-gray-900 whitespace-nowrap lg:p-5">
                    Angular
                  </td>
                  <td className="p-4 text-base font-medium text-gray-900 whitespace-nowrap lg:p-5">
                    #914856
                  </td>
                  <td className="p-4 text-base font-medium text-gray-900 whitespace-nowrap lg:p-5">
                    $149
                  </td>
                  <td className="p-4 space-x-2 whitespace-nowrap lg:p-5">
                    <button
                      type="button"
                      data-modal-toggle="product-modal"
                      className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300 hover:text-gray-900 hover:scale-[1.02] transition-all"
                    >
                      <svg
                        className="mr-2 w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                        <path
                          fillRule="evenodd"
                          d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Edit item
                    </button>
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
                      Delete item
                    </button>
                  </td>
                </tr>
                <tr className="hover:bg-gray-100">
                  <td className="p-4 w-4 lg:p-5">
                    <div className="flex items-center">
                      <input
                        id="checkbox-633293"
                        aria-describedby="checkbox-1"
                        type="checkbox"
                        className="w-5 h-5 rounded border-gray-300 focus:ring-0 checked:bg-dark-900"
                      />
                      <label htmlFor="checkbox-633293" className="sr-only">
                        checkbox
                      </label>
                    </div>
                  </td>
                  <td className="p-4 text-sm font-normal text-gray-500 whitespace-nowrap lg:p-5">
                    <div className="text-base font-semibold text-gray-900">
                      Flowbite UI Kit
                    </div>
                    <div className="text-sm font-normal text-gray-500">
                      Html templates
                    </div>
                  </td>
                  <td className="p-4 text-base font-medium text-gray-900 whitespace-nowrap lg:p-5">
                    FlowbiteJS
                  </td>
                  <td className="p-4 text-base font-medium text-gray-900 whitespace-nowrap lg:p-5">
                    #633293
                  </td>
                  <td className="p-4 text-base font-medium text-gray-900 whitespace-nowrap lg:p-5">
                    $129
                  </td>
                  <td className="p-4 space-x-2 whitespace-nowrap lg:p-5">
                    <button
                      type="button"
                      data-modal-toggle="product-modal"
                      className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300 hover:text-gray-900 hover:scale-[1.02] transition-all"
                    >
                      <svg
                        className="mr-2 w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                        <path
                          fillRule="evenodd"
                          d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Edit item
                    </button>
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
                      Delete item
                    </button>
                  </td>
                </tr>
                <tr className="hover:bg-gray-100">
                  <td className="p-4 w-4 lg:p-5">
                    <div className="flex items-center">
                      <input
                        id="checkbox-924856"
                        aria-describedby="checkbox-1"
                        type="checkbox"
                        className="w-5 h-5 rounded border-gray-300 focus:ring-0 checked:bg-dark-900"
                      />
                      <label htmlFor="checkbox-924856" className="sr-only">
                        checkbox
                      </label>
                    </div>
                  </td>
                  <td className="p-4 text-sm font-normal text-gray-500 whitespace-nowrap lg:p-5">
                    <div className="text-base font-semibold text-gray-900">
                      Education Dashboard
                    </div>
                    <div className="text-sm font-normal text-gray-500">
                      Html templates
                    </div>
                  </td>
                  <td className="p-4 text-base font-medium text-gray-900 whitespace-nowrap lg:p-5">
                    Angular
                  </td>
                  <td className="p-4 text-base font-medium text-gray-900 whitespace-nowrap lg:p-5">
                    #924856
                  </td>
                  <td className="p-4 text-base font-medium text-gray-900 whitespace-nowrap lg:p-5">
                    $149
                  </td>
                  <td className="p-4 space-x-2 whitespace-nowrap lg:p-5">
                    <button
                      type="button"
                      data-modal-toggle="product-modal"
                      className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300 hover:text-gray-900 hover:scale-[1.02] transition-all"
                    >
                      <svg
                        className="mr-2 w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                        <path
                          fillRule="evenodd"
                          d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Edit item
                    </button>
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
                      Delete item
                    </button>
                  </td>
                </tr>
                <tr className="hover:bg-gray-100">
                  <td className="p-4 w-4 lg:p-5">
                    <div className="flex items-center">
                      <input
                        id="checkbox-123323"
                        aria-describedby="checkbox-1"
                        type="checkbox"
                        className="w-5 h-5 rounded border-gray-300 focus:ring-0 checked:bg-dark-900"
                      />
                      <label htmlFor="checkbox-123323" className="sr-only">
                        checkbox
                      </label>
                    </div>
                  </td>
                  <td className="p-4 text-sm font-normal text-gray-500 whitespace-nowrap lg:p-5">
                    <div className="text-base font-semibold text-gray-900">
                      Flowbite UI Kit
                    </div>
                    <div className="text-sm font-normal text-gray-500">
                      Html templates
                    </div>
                  </td>
                  <td className="p-4 text-base font-medium text-gray-900 whitespace-nowrap lg:p-5">
                    FlowbiteJS
                  </td>
                  <td className="p-4 text-base font-medium text-gray-900 whitespace-nowrap lg:p-5">
                    #123323
                  </td>
                  <td className="p-4 text-base font-medium text-gray-900 whitespace-nowrap lg:p-5">
                    $129
                  </td>
                  <td className="p-4 space-x-2 whitespace-nowrap lg:p-5">
                    <button
                      type="button"
                      data-modal-toggle="product-modal"
                      className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300 hover:text-gray-900 hover:scale-[1.02] transition-all"
                    >
                      <svg
                        className="mr-2 w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                        <path
                          fillRule="evenodd"
                          d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Edit item
                    </button>
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
                      Delete item
                    </button>
                  </td>
                </tr>
                <tr className="hover:bg-gray-100">
                  <td className="p-4 w-4 lg:p-5">
                    <div className="flex items-center">
                      <input
                        id="checkbox-198856"
                        aria-describedby="checkbox-1"
                        type="checkbox"
                        className="w-5 h-5 rounded border-gray-300 focus:ring-0 checked:bg-dark-900"
                      />
                      <label htmlFor="checkbox-198856" className="sr-only">
                        checkbox
                      </label>
                    </div>
                  </td>
                  <td className="p-4 text-sm font-normal text-gray-500 whitespace-nowrap lg:p-5">
                    <div className="text-base font-semibold text-gray-900">
                      Education Dashboard
                    </div>
                    <div className="text-sm font-normal text-gray-500">
                      Html templates
                    </div>
                  </td>
                  <td className="p-4 text-base font-medium text-gray-900 whitespace-nowrap lg:p-5">
                    Angular
                  </td>
                  <td className="p-4 text-base font-medium text-gray-900 whitespace-nowrap lg:p-5">
                    #198856
                  </td>
                  <td className="p-4 text-base font-medium text-gray-900 whitespace-nowrap lg:p-5">
                    $149
                  </td>
                  <td className="p-4 space-x-2 whitespace-nowrap lg:p-5">
                    <button
                      type="button"
                      data-modal-toggle="product-modal"
                      className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300 hover:text-gray-900 hover:scale-[1.02] transition-all"
                    >
                      <svg
                        className="mr-2 w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                        <path
                          fillRule="evenodd"
                          d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Edit item
                    </button>
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
                      Delete item
                    </button>
                  </td>
                </tr>
                <tr className="hover:bg-gray-100">
                  <td className="p-4 w-4 lg:p-5">
                    <div className="flex items-center">
                      <input
                        id="checkbox-132856"
                        aria-describedby="checkbox-1"
                        type="checkbox"
                        className="w-5 h-5 rounded border-gray-300 focus:ring-0 checked:bg-dark-900"
                      />
                      <label htmlFor="checkbox-132856" className="sr-only">
                        checkbox
                      </label>
                    </div>
                  </td>
                  <td className="p-4 text-sm font-normal text-gray-500 whitespace-nowrap lg:p-5">
                    <div className="text-base font-semibold text-gray-900">
                      Education Dashboard
                    </div>
                    <div className="text-sm font-normal text-gray-500">
                      Html templates
                    </div>
                  </td>
                  <td className="p-4 text-base font-medium text-gray-900 whitespace-nowrap lg:p-5">
                    Angular
                  </td>
                  <td className="p-4 text-base font-medium text-gray-900 whitespace-nowrap lg:p-5">
                    #132856
                  </td>
                  <td className="p-4 text-base font-medium text-gray-900 whitespace-nowrap lg:p-5">
                    $149
                  </td>
                  <td className="p-4 space-x-2 whitespace-nowrap lg:p-5">
                    <button
                      type="button"
                      data-modal-toggle="product-modal"
                      className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300 hover:text-gray-900 hover:scale-[1.02] transition-all"
                    >
                      <svg
                        className="mr-2 w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                        <path
                          fillRule="evenodd"
                          d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Edit item
                    </button>
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
                      Delete item
                    </button>
                  </td>
                </tr>
                <tr className="hover:bg-gray-100">
                  <td className="p-4 w-4 lg:p-5">
                    <div className="flex items-center">
                      <input
                        id="checkbox-613223"
                        aria-describedby="checkbox-1"
                        type="checkbox"
                        className="w-5 h-5 rounded border-gray-300 focus:ring-0 checked:bg-dark-900"
                      />
                      <label htmlFor="checkbox-613223" className="sr-only">
                        checkbox
                      </label>
                    </div>
                  </td>
                  <td className="p-4 text-sm font-normal text-gray-500 whitespace-nowrap lg:p-5">
                    <div className="text-base font-semibold text-gray-900">
                      Flowbite UI Kit
                    </div>
                    <div className="text-sm font-normal text-gray-500">
                      Html templates
                    </div>
                  </td>
                  <td className="p-4 text-base font-medium text-gray-900 whitespace-nowrap lg:p-5">
                    FlowbiteJS
                  </td>
                  <td className="p-4 text-base font-medium text-gray-900 whitespace-nowrap lg:p-5">
                    #613223
                  </td>
                  <td className="p-4 text-base font-medium text-gray-900 whitespace-nowrap lg:p-5">
                    $129
                  </td>
                  <td className="p-4 space-x-2 whitespace-nowrap lg:p-5">
                    <button
                      type="button"
                      data-modal-toggle="product-modal"
                      className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300 hover:text-gray-900 hover:scale-[1.02] transition-all"
                    >
                      <svg
                        className="mr-2 w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                        <path
                          fillRule="evenodd"
                          d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Edit item
                    </button>
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
                      Delete item
                    </button>
                  </td>
                </tr>
                <tr className="hover:bg-gray-100">
                  <td className="p-4 w-4 lg:p-5">
                    <div className="flex items-center">
                      <input
                        id="checkbox-484856"
                        aria-describedby="checkbox-1"
                        type="checkbox"
                        className="w-5 h-5 rounded border-gray-300 focus:ring-0 checked:bg-dark-900"
                      />
                      <label htmlFor="checkbox-484856" className="sr-only">
                        checkbox
                      </label>
                    </div>
                  </td>
                  <td className="p-4 text-sm font-normal text-gray-500 whitespace-nowrap lg:p-5">
                    <div className="text-base font-semibold text-gray-900">
                      Education Dashboard
                    </div>
                    <div className="text-sm font-normal text-gray-500">
                      Html templates
                    </div>
                  </td>
                  <td className="p-4 text-base font-medium text-gray-900 whitespace-nowrap lg:p-5">
                    Angular
                  </td>
                  <td className="p-4 text-base font-medium text-gray-900 whitespace-nowrap lg:p-5">
                    #484856
                  </td>
                  <td className="p-4 text-base font-medium text-gray-900 whitespace-nowrap lg:p-5">
                    $149
                  </td>
                  <td className="p-4 space-x-2 whitespace-nowrap lg:p-5">
                    <button
                      type="button"
                      data-modal-toggle="product-modal"
                      className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300 hover:text-gray-900 hover:scale-[1.02] transition-all"
                    >
                      <svg
                        className="mr-2 w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                        <path
                          fillRule="evenodd"
                          d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Edit item
                    </button>
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
                      Delete item
                    </button>
                  </td>
                </tr>
                <tr className="hover:bg-gray-100">
                  <td className="p-4 w-4 lg:p-5">
                    <div className="flex items-center">
                      <input
                        id="checkbox-103324"
                        aria-describedby="checkbox-1"
                        type="checkbox"
                        className="w-5 h-5 rounded border-gray-300 focus:ring-0 checked:bg-dark-900"
                      />
                      <label htmlFor="checkbox-103324" className="sr-only">
                        checkbox
                      </label>
                    </div>
                  </td>
                  <td className="p-4 text-sm font-normal text-gray-500 whitespace-nowrap lg:p-5">
                    <div className="text-base font-semibold text-gray-900">
                      Flowbite UI Kit
                    </div>
                    <div className="text-sm font-normal text-gray-500">
                      Html templates
                    </div>
                  </td>
                  <td className="p-4 text-base font-medium text-gray-900 whitespace-nowrap lg:p-5">
                    FlowbiteJS
                  </td>
                  <td className="p-4 text-base font-medium text-gray-900 whitespace-nowrap lg:p-5">
                    #103324
                  </td>
                  <td className="p-4 text-base font-medium text-gray-900 whitespace-nowrap lg:p-5">
                    $129
                  </td>
                  <td className="p-4 space-x-2 whitespace-nowrap lg:p-5">
                    <button
                      type="button"
                      data-modal-toggle="product-modal"
                      className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300 hover:text-gray-900 hover:scale-[1.02] transition-all"
                    >
                      <svg
                        className="mr-2 w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                        <path
                          fillRule="evenodd"
                          d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Edit item
                    </button>
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
                      Delete item
                    </button>
                  </td>
                </tr>
                <tr className="hover:bg-gray-100">
                  <td className="p-4 w-4 lg:p-5">
                    <div className="flex items-center">
                      <input
                        id="checkbox-124859"
                        aria-describedby="checkbox-1"
                        type="checkbox"
                        className="w-5 h-5 rounded border-gray-300 focus:ring-0 checked:bg-dark-900"
                      />
                      <label htmlFor="checkbox-124859" className="sr-only">
                        checkbox
                      </label>
                    </div>
                  </td>
                  <td className="p-4 text-sm font-normal text-gray-500 whitespace-nowrap lg:p-5">
                    <div className="text-base font-semibold text-gray-900">
                      Education Dashboard
                    </div>
                    <div className="text-sm font-normal text-gray-500">
                      Html templates
                    </div>
                  </td>
                  <td className="p-4 text-base font-medium text-gray-900 whitespace-nowrap lg:p-5">
                    Angular
                  </td>
                  <td className="p-4 text-base font-medium text-gray-900 whitespace-nowrap lg:p-5">
                    #124859
                  </td>
                  <td className="p-4 text-base font-medium text-gray-900 whitespace-nowrap lg:p-5">
                    $149
                  </td>
                  <td className="p-4 space-x-2 whitespace-nowrap lg:p-5">
                    <button
                      type="button"
                      data-modal-toggle="product-modal"
                      className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300 hover:text-gray-900 hover:scale-[1.02] transition-all"
                    >
                      <svg
                        className="mr-2 w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                        <path
                          fillRule="evenodd"
                          d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Edit item
                    </button>
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
                      Delete item
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
