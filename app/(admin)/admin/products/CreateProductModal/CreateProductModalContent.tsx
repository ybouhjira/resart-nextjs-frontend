export default function CreateProductModalContent() {
  return (
    <div className="col-span-6 sm:col-span-3 border border-red-700">
      <div className="grid grid-cols-6 gap-6">
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
          placeholder="Apple Imac 27”"
          required
        />
      </div>
    </div>
  );
}
