import { CrudActions } from "@/app/(admin)/admin/products/CrudActions";
import ProductRow from "@/app/(admin)/admin/products/ProductRow/ProductRow";
import { getAllProductsInDB } from "@/lib/entities/Product/db/getAllProductsInDB";

const AdminProductsPage = async () => {
  const products = await getAllProductsInDB();

  return (
    <>
      <section className="antialiased h-full">
        <div className="mx-auto max-w-screen-2xl px-4 lg:px-12">
          <div className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
            <CrudActions />
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="p-4">
                      SKU
                    </th>
                    <th scope="col" className="p-4">
                      Photo
                    </th>
                    <th scope="col" className="p-4">
                      Name
                    </th>
                    <th
                      scope="col"
                      className="p-4 text-right whitespace-nowrap"
                    >
                      Ref Price
                    </th>
                    <th scope="col" className="p-4 text-right">
                      Price
                    </th>
                    <th scope="col" className="p-4 text-right">
                      Stock
                    </th>
                    <th scope="col" className="p-4" />
                  </tr>
                </thead>
                <tbody>
                  {products.length === 0 && (
                    <tr>
                      <th colSpan={10} className="p-4 text-center">
                        There are no products
                      </th>
                    </tr>
                  )}
                  {products.map((product) => (
                    <ProductRow product={product} key={product.sku} />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AdminProductsPage;
