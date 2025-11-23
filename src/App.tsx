import ProductList from "./components/ProductList";
import ShoppingCartIcon from "./components/ShoppingCartIcon";

function App() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <header className="mb-6">
          <div className="flex justify-between gap-3">
            <h1 className="text-3xl font-extrabold text-gray-900">
              Product Catalog
            </h1>
            <ShoppingCartIcon />
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
