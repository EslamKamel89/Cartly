import { useCart } from "../context/CartContext";
import type { Product } from "../types/index.d";

const ProductItem: React.FC<{ product: Product }> = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <article className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col">
      {product.image ? (
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover sm:h-40 md:h-44"
          loading="lazy"
        />
      ) : (
        <div className="w-full h-48 flex items-center justify-center bg-gray-100 text-gray-400 text-sm">
          No image
        </div>
      )}

      <div className="p-4 flex-1 flex flex-col">
        <div className="flex items-start justify-between">
          <h2 className="text-lg font-semibold text-gray-900 leading-tight">
            {product.name}
          </h2>
          <div className="ml-3 text-sm font-medium text-indigo-600">
            ${product.price.toFixed(2)}
          </div>
        </div>

        <p className="mt-2 text-sm text-gray-600 line-clamp-3">
          {product.description}
        </p>

        <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center gap-3">
            <span className="px-2 py-1 bg-gray-100 rounded-full text-xs">
              {product.category}
            </span>
            <span className="px-2 py-1 bg-gray-100 rounded-full text-xs">
              ⭐ {product.rating}
            </span>
          </div>
          <div className="text-xs text-gray-600">Qty: {product.quantity}</div>
        </div>

        <div className="mt-4">
          <button
            type="button"
            className="w-full inline-flex items-center justify-center gap-2 rounded-lg border border-indigo-600 bg-indigo-600 text-white px-3 py-2 text-sm font-medium shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-300"
            onClick={() => addToCart!(product)}
          >
            Add to cart
          </button>
        </div>
      </div>
    </article>
  );
};

export default ProductItem;
