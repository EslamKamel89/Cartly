import { useContext } from "react";
import { HiShoppingCart } from "react-icons/hi2";
import ProductList from "./components/ProductList";
import { ProductContext } from "./context/ProductContext";

function App() {
  const { products } = useContext(ProductContext);
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <header className="mb-6">
          <div className="flex items-center gap-3">
            <div className="text-3xl text-indigo-600 bg-indigo-50 rounded-xl p-2 shadow-sm">
              <HiShoppingCart />
            </div>
            <h1 className="text-3xl font-extrabold text-gray-900">
              Product Catalog
            </h1>
          </div>
          <p className="mt-2 text-sm text-gray-600">
            Browse our curated list of products.
          </p>
        </header>

        {/* Status area */}
        <div className="mb-6">
          {products.loading && (
            <div className="flex items-center gap-3 bg-white rounded-lg p-4 shadow-sm border border-gray-100">
              <div
                className="w-8 h-8 rounded-full border-4 border-gray-200 border-t-indigo-600 animate-spin"
                aria-hidden="true"
              />
              <div>
                <div className="text-sm font-medium text-gray-700">
                  Loading products…
                </div>
                <div className="text-xs text-gray-500">
                  Fetching latest items from the server
                </div>
              </div>
            </div>
          )}

          {products.error && !products.loading && (
            <div className="flex items-center gap-3 bg-red-50 border border-red-100 text-red-700 rounded-lg p-4 shadow-sm">
              <div className="px-2 py-1 rounded bg-red-100 text-red-700 font-medium text-sm">
                Error
              </div>
              <div className="text-sm">{products.error}</div>
            </div>
          )}
        </div>

        {/* Products grid */}
        {!products.loading && !products.error && products.data && (
          <ProductList></ProductList>
        )}
      </div>
    </div>
  );
}

export default App;
