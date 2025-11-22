import { HiShoppingCart } from "react-icons/hi2";
import ProductList from "./components/ProductList";

function App() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <header className="mb-6">
          <div className="flex items-center gap-3">
            <div className="text-3xl text-indigo-600 bg-indigo-50 rounded-xl p-2 shadow-sm">
              <HiShoppingCart />
            </div>
            <h1 className="text-3xl font-extrabold text-gray-900">
              Product Catalog
            </h1>
          </div>
          <p className="mt-2 text-sm text-gray-600">
            Browse our curated list of products.
          </p>
        </header>
        <ProductList />
      </div>
    </div>
  );
}

export default App;
