import { HiShoppingCart } from "react-icons/hi2";
import { useCart } from "../context/CartContext";

const ShoppingCartIcon = () => {
  const { cart } = useCart();
  const count = cart?.length ?? 0;

  return (
    <div className="fixed top-10 right-10 inline-flex items-center justify-center p-3 bg-indigo-50 text-indigo-600 rounded-2xl shadow-md hover:shadow-lg transition-shadow cursor-pointer">
      <HiShoppingCart className="text-3xl" />

      <span className="absolute -top-1 -right-1 flex items-center justify-center w-5 h-5 text-xs font-semibold text-white bg-indigo-600 rounded-full shadow">
        {count}
      </span>
    </div>
  );
};

export default ShoppingCartIcon;
