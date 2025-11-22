import { useProducts } from "../context/ProductContext";
import ProductErrorLoadingStates from "./ProductErrorLoadingStates";
import ProductItem from "./ProductItem";

const ProductList = () => {
  const { products } = useProducts();
  return (
    <>
      <ProductErrorLoadingStates />
      {!products.loading && !products.error && products.data && (
        <>
          <div className="mb-4 flex items-center justify-between">
            <div className="text-sm text-gray-600">
              Showing
              <span className="font-medium text-gray-900">
                {` ${products.data.length} `}
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
      )}
    </>
  );
};

export default ProductList;
