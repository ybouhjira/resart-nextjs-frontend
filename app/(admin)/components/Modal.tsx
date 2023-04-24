interface Props {
  children: React.ReactNode;
  title: string;
  onClose: () => void;
  open: boolean;
}

export default function Modal({ children, title, open, onClose }: Props) {
  if (!open) {
    return null;
  }
  return (
    <div
      className="bg-[#000a] overflow-y-auto overflow-x-hidden fixed flex-center right-0 left-0 top-0 bottom-0 z-50 justify-center items-center md:inset-0 h-modal sm:h-full flex"
      id="add-product-modal"
      aria-modal="true"
      role="dialog"
    >
      <div className="relative px-4 w-full max-w-2xl md:h-auto flex justify-center gap-[10px] grow flex-col py-2">
        <div className="relative bg-white rounded-2xl shadow-lg">
          <div className="flex justify-between items-start p-5 rounded-t border-b">
            <h3 className="text-xl font-semibold">{title}</h3>
            <button
              onClick={onClose}
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-2xl text-sm p-1.5 ml-auto inline-flex items-center"
              data-modal-toggle="add-product-modal"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
          <div className="p-6 space-y-6">
            <form action="#">
              <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6">
                  <label
                    htmlFor="product-name"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Product Name
                  </label>
                  <input
                    type="text"
                    name="product-name"
                    id="product-name"
                    className="shadow-lg-sm border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-2 focus:ring-fuchsia-50 focus:border-fuchsia-300 block w-full p-2.5"
                    placeholder="Blue neckalce something"
                    required
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="category"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Reference price
                  </label>
                  <input
                    type="text"
                    name="category"
                    id="category"
                    className="shadow-lg-sm border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-2 focus:ring-fuchsia-50 focus:border-fuchsia-300 block w-full p-2.5"
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="brand"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Current price
                  </label>
                  <input
                    type="text"
                    name="brand"
                    id="brand"
                    className="shadow-lg-sm border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-2 focus:ring-fuchsia-50 focus:border-fuchsia-300 block w-full p-2.5"
                  />
                </div>
                <div className="col-span-full">
                  <label
                    htmlFor="product-details"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Description
                  </label>
                  <textarea
                    id="product-details"
                    rows={6}
                    className="block p-4 w-full text-gray-900 border border-gray-300 sm:text-sm rounded-lg focus:ring-2 focus:ring-fuchsia-50 focus:border-fuchsia-300"
                    spellCheck="false"
                    defaultValue={""}
                  />
                </div>
              </div>
              <div className="flex justify-center items-center mt-4 w-full">
                <label className="flex flex-col w-full h-32 rounded border-2 border-gray-300 border-dashed cursor-pointer hover:bg-gray-50">
                  <div className="flex flex-col justify-center items-center pt-5 pb-6">
                    <svg
                      className="w-10 h-10 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                      />
                    </svg>
                    <p className="py-1 text-sm text-gray-600">
                      Drop or upload photo here
                    </p>
                    <p className="text-xs text-gray-500">
                      PNG, JPG, GIF up to 10MB
                    </p>
                  </div>
                  <input type="file" className="hidden" />
                </label>
              </div>
            </form>
          </div>
          <div className="p-6 rounded-b border-t border-gray-200">
            <button
              className="text-white font-medium text-sm px-5 py-2.5 text-center rounded-lg bg-gradient-to-br from-green-500 to-green-700 shadow-md shadow-gray-300 hover:scale-[1.02] transition-transform"
              type="submit"
            >
              Add product
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
