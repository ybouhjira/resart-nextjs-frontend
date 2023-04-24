export default function CreateProductModalContent() {
  return (
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
            <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
          </div>
          <input type="file" className="hidden" />
        </label>
      </div>
    </form>
  );
}
