/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, type ReactNode } from "react";
import type { Product } from "../types";
const initial = {
  products: [],
};
const CartContext = createContext<{ products: Product[] }>(initial);

export const CartProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  return (
    <CartContext.Provider value={initial}>{children}</CartContext.Provider>
  );
};

export function useCart() {
  return useContext(CartContext);
}
