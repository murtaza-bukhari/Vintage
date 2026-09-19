import { useState } from "react";
import { Outlet } from "react-router";
import type { Dispatch, SetStateAction } from "react";
import type { Product } from "../backend/products";

export type ShopContext = {
  cart: Product[];
  setCart: Dispatch<SetStateAction<Product[]>>;
};

const ShopManager = () => {
  const [cart, setCart] = useState<Product[]>([]);

  return <Outlet context={{ cart, setCart }} />;
};

export default ShopManager;