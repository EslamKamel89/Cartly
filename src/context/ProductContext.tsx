/* eslint-disable react-refresh/only-export-components */
import { createContext, useEffect, useState, type ReactNode } from "react";
import getErrorMessage from "../helpers/getErrorMessage";
import { pr } from "../helpers/pr";
import { EndPoints } from "../staticData/endpoints";
import type { ApiResponse, Product } from "../types";

export const ProductContext = createContext<{
  products: ApiResponse<Product[]>;
}>({
  products: {
    loading: false,
    error: null,
    data: [],
  },
});

export const ProductProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
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
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};
