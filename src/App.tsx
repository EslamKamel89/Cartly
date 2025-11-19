import { useEffect, useState } from "react";
import getErrorMessage from "./helpers/getErrorMessage";
import { pr } from "./helpers/pr";
import { EndPoints } from "./staticData/endpoints";
import {
  initialResponse,
  type ApiResponse,
  type Product,
} from "./types/index.d";

function App() {
  const [products, setProducts] =
    useState<ApiResponse<Product[]>>(initialResponse);
  const fetchProducts = async () => {
    try {
      setProducts({ ...products, loading: true });
      const res = await fetch(EndPoints.products);
      if (!res.ok) throw new Error("cant fetch the products");
      const data = await res.json();
      pr(data, { title: "raw data" });
      setProducts({ ...products, loading: false, error: null, data: data });
    } catch (error) {
      setProducts({ ...products, error: getErrorMessage(error) });
      pr(error, {
        title: "cant fetch the products",
        error: true,
      });
    } finally {
      setProducts({ ...products, loading: false });
    }
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <>
      <div className="text-red-500">{products.data?.length ?? "null"}</div>
    </>
  );
}

export default App;
