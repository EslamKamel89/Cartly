import type { Product } from "../types/index.d";
import ProductItem from "./ProductItem";

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
          <ProductItem product={p} key={p.id} />
        ))}
      </section>
    </>
  );
};

export default ProductList;
