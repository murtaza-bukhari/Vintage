import { Routes, Route } from "react-router";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import CartPage from "./pages/CartPage";

import ShopManager from './managers/ShopManager'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

      <Route path="/shop" element={<ShopManager />}>
        <Route index element={<ShopPage />} />
        <Route path="cart" element={<CartPage />} />
      </Route>
    </Routes>
  );
}

export default App;