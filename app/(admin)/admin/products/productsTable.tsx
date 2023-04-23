import Product from "@/types/Product";
import ProductRow from "@/app/(admin)/admin/products/ProductRow";

interface ProductsTableProps {
  products: Product[];
}

const thClassName = `px-5 py-3 border-b-2 border-gray-200 
  bg-gray-100 text-left text-xs 
  font-semibold text-gray-600 uppercase tracking-wider`;

export function ProductsTable({ products }: ProductsTableProps) {
  return (
    <div className="flex flex-col my-6 mx-4 rounded-2xl shadow-xl shadow-gray-200">
      <div className="overflow-x-auto rounded-2xl">
        <div className="inline-block min-w-full align-middle">
          <div className="overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200 table-fixed">
              <tbody className="bg-white divide-y divide-gray-200">
                {products.map((product) => (
                  <ProductRow
                    key={product.sku}
                    photoURL={product.variations[0].images[0]}
                    name={product.name}
                    currentPrice={product.variations[0].currentPrice}
                    referencePrice={product.variations[0].referencePrice}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
