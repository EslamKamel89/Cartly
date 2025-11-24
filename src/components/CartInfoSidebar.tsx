import { FaTrash } from "react-icons/fa";
import { useCart } from "../context/CartContext";

const CartInfoSidebar: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const { cart, removeFromCart, clearCart } = useCart();

  const count = cart!.reduce((sum, c) => sum + c.quantity, 0);
  const total = cart!.reduce(
    (sum, c) => sum + c.quantity * (c.product.price || 0),
    0
  );

  return (
    <div className="flex-1 flex flex-col h-full max-h-screen py-5 overflow-hidden">
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-sm text-gray-500">Items</div>
            <div className="text-lg font-semibold">{count}</div>
          </div>
          <div className="text-right">
            <div className="text-sm text-gray-500">Subtotal</div>
            <div className="text-lg font-semibold">${total.toFixed(2)}</div>
          </div>
        </div>

        <ul className="space-y-3">
          {cart!.length === 0 && (
            <li className="text-center text-gray-500 py-8">
              Your cart is empty
            </li>
          )}

          {cart!.map((item) => {
            const key = item.product?.id;
            return (
              <li
                key={key}
                className="bg-white border rounded-lg p-3 flex gap-3"
              >
                <div className="w-20 h-20 rounded overflow-hidden bg-gray-50 flex-shrink-0 flex items-center justify-center">
                  {item.product?.image ? (
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  ) : (
                    <div className="text-xs text-gray-400">No image</div>
                  )}
                </div>

                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between w-full">
                      <h4 className="text-sm font-semibold text-gray-900">
                        {item.product?.name}
                        <span className="text-xs text-gray-500">
                          ×{item.quantity}
                        </span>
                      </h4>
                      <div
                        onClick={() => removeFromCart!(item.product.id)}
                        className="cursor-pointer"
                      >
                        <FaTrash className="text-red-500" />
                      </div>
                    </div>
                    <p className="mt-1 text-xs text-gray-600 line-clamp-2">
                      {item.product?.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between text-sm text-gray-700 mt-2">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 bg-gray-100 rounded-full text-xs">
                        {item.product?.category}
                      </span>
                      <span className="px-2 py-0.5 bg-gray-100 rounded-full text-xs">
                        ⭐ {item.product?.rating}
                      </span>
                      <span className="text-xs text-gray-500">
                        Qty: {item.quantity}
                      </span>
                    </div>

                    <div className="font-semibold">
                      ${(item.product?.price || 0).toFixed(2)}
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="border-t p-4 bg-white mb-0">
        <div className="flex items-center justify-between mb-3">
          <div className="text-sm text-gray-500">Total</div>
          <div className="text-lg font-semibold">${total.toFixed(2)}</div>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => {
              alert("Go to checkout");
              if (onClose) onClose();
            }}
            className="flex-1 px-4 py-2 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition"
          >
            Checkout
          </button>
          <button
            onClick={() => clearCart!()}
            className="px-4 py-2 rounded-lg border border-gray-200 text-sm text-gray-100 bg-red-600 hover:bg-red-500 transition"
          >
            Clear
          </button>
          <button
            onClick={() => {
              if (onClose) onClose();
            }}
            className="px-4 py-2 rounded-lg border border-gray-200 text-sm text-gray-700 hover:bg-gray-50 transition"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartInfoSidebar;
