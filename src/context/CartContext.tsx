/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState, type ReactNode } from "react";
import type { Product } from "../types";
type CartItem = { product: Product; quantity: number };
type CartState = {
  cart?: CartItem[];
  addToCart?: (v: Product) => void;
};

const CartContext = createContext<CartState>({});

export const CartProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const addToCart = (product: Product) => {
    setCart!((prev) => {
      const existing = prev.find((c) => c.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { product: item.product, quantity: ++item.quantity }
            : item
        );
      } else {
        return [...prev, { product, quantity: 1 }];
      }
    });
  };
  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export function useCart() {
  return useContext(CartContext);
}
