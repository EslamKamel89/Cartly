import { useEffect, useState } from "react";
import { HiShoppingCart } from "react-icons/hi2";
import getErrorMessage from "./helpers/getErrorMessage";
import { pr } from "./helpers/pr";
import { EndPoints } from "./staticData/endpoints";
import { type ApiResponse, type Product } from "./types/index.d";

function App() {
  const [products, setProducts] = useState<ApiResponse<Product[]>>({
    loading: false,
    error: null,
    data: [],
  });
  const fetchProducts = async () => {
    try {
      setProducts((prev) => ({ ...prev, loading: true }));
      const res = await fetch(EndPoints.products);
      if (!res.ok) throw new Error("cant fetch the products");
      const data = await res.json();
      pr(data, { title: "raw data" });
      setProducts({
        ...products,
        loading: false,
        error: null,
        data: data,
      });
    } catch (error) {
      setProducts((prev) => ({
        ...prev,
        error: getErrorMessage(error),
        loading: false,
      }));
    }
  };
  useEffect(() => {
    fetchProducts();
  }, []);
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
          <>
            <div className="mb-4 flex items-center justify-between">
              <div className="text-sm text-gray-600">
                Showing{" "}
                <span className="font-medium text-gray-900">
                  {products.data.length}
                </span>{" "}
                products
              </div>
              <div className="text-sm text-gray-500"></div>
            </div>

            <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {products.data.map((p) => (
                <article
                  key={p.id}
                  className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col"
                >
                  {/* image area */}
                  {p.image ? (
                    <img
                      src={p.image}
                      alt={p.name}
                      className="w-full h-48 object-cover sm:h-40 md:h-44"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-48 flex items-center justify-center bg-gray-100 text-gray-400 text-sm">
                      No image
                    </div>
                  )}

                  {/* card body */}
                  <div className="p-4 flex-1 flex flex-col">
                    <div className="flex items-start justify-between">
                      <h2 className="text-lg font-semibold text-gray-900 leading-tight">
                        {p.name}
                      </h2>
                      <div className="ml-3 text-sm font-medium text-indigo-600">
                        ${p.price.toFixed(2)}
                      </div>
                    </div>

                    <p className="mt-2 text-sm text-gray-600 line-clamp-3">
                      {p.description}
                    </p>

                    <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center gap-3">
                        <span className="px-2 py-1 bg-gray-100 rounded-full text-xs">
                          {p.category}
                        </span>
                        <span className="px-2 py-1 bg-gray-100 rounded-full text-xs">
                          ⭐ {p.rating}
                        </span>
                      </div>
                      <div className="text-xs text-gray-600">
                        Qty: {p.quantity}
                      </div>
                    </div>

                    <div className="mt-4">
                      <button
                        type="button"
                        className="w-full inline-flex items-center justify-center gap-2 rounded-lg border border-indigo-600 bg-indigo-600 text-white px-3 py-2 text-sm font-medium shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-300"
                      >
                        Add to cart
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </section>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
