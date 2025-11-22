import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import ProductItem from "./ProductItem";

const ProductList = () => {
  const { products } = useContext(ProductContext);
  return (
    <>
      <div className="mb-4 flex items-center justify-between">
        <div className="text-sm text-gray-600">
          Showing
          <span className="font-medium text-gray-900">
            {products.data.length}
          </span>
          products
        </div>
        <div className="text-sm text-gray-500"></div>
      </div>
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.data.map((p) => (
          <ProductItem product={p} key={p.id} />
        ))}
      </section>
    </>
  );
};

export default ProductList;
