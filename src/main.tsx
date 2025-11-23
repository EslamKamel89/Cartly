import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { CartProvider } from "./context/CartContext.tsx";
import { ProductProvider } from "./context/ProductContext.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <ProductProvider>
    <CartProvider>
      <App />
    </CartProvider>
  </ProductProvider>
);
