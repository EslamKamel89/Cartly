import { useEffect, useState } from "react";
import { FaWindowClose } from "react-icons/fa";
import { HiShoppingCart } from "react-icons/hi2";
import { useCart } from "../context/CartContext";
import CartInfoSidebar from "./CartInfoSidebar";

const ShoppingCartIcon = () => {
  const { cart } = useCart();
  const count =
    cart?.reduce((sum, cartItem) => sum + cartItem.quantity, 0) || 0;
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = previousOverflow || "";
    }
    return () => {
      document.body.style.overflow = previousOverflow || "";
    };
  }, [open]);

  return (
    <>
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-300 ${
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      />

      <aside
        className={`fixed top-0 right-0 h-full w-96 max-w-full z-50 transform transition-transform duration-300 shadow-2xl bg-white border-l border-gray-200 flex flex-col
          ${open ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <h3 className="text-lg font-semibold">Your Cart</h3>
          <button
            aria-label="Close cart"
            onClick={() => setOpen(false)}
            className="p-2 rounded hover:bg-gray-100 active:scale-95 transition"
          >
            <FaWindowClose className="w-6 h-6 text-red-600" />
          </button>
        </div>

        <CartInfoSidebar onClose={() => setOpen(false)} />
      </aside>

      <div
        role="button"
        aria-label="Open cart"
        onClick={() => setOpen(true)}
        className="fixed top-10 right-10 inline-flex items-center justify-center p-3 bg-indigo-50 text-indigo-600 rounded-2xl shadow-md hover:shadow-lg transition-shadow cursor-pointer z-30"
      >
        <HiShoppingCart className="text-3xl" />
        <span className="absolute -top-1 -right-1 flex items-center justify-center w-5 h-5 text-xs font-semibold text-white bg-indigo-600 rounded-full shadow">
          {count}
        </span>
      </div>
    </>
  );
};

export default ShoppingCartIcon;
