import type { Product } from "../types/index.d";

const ProductList: React.FC<{ products: Product[] }> = ({ products }) => {
  return (
    <>
      <div className="mb-4 flex items-center justify-between">
        <div className="text-sm text-gray-600">
          Showing
          <span className="font-medium text-gray-900">{products.length}</span>
          products
        </div>
        <div className="text-sm text-gray-500"></div>
      </div>
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((p) => (
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
                <div className="text-xs text-gray-600">Qty: {p.quantity}</div>
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
  );
};

export default ProductList;
