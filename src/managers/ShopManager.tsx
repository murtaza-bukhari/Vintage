import { useState } from "react";
import { Outlet } from "react-router";
import type { Dispatch, SetStateAction } from "react";
import type { Product } from "../backend/products";


export type CartItem = {
  product: Product;
  quantity: number;
};

export type ShopContext = {
  cart: CartItem[];
  setCart: Dispatch<SetStateAction<CartItem[]>>;
};

const ShopManager = () => {
  const [cart, setCart] = useState<CartItem[]>([]);

  return <Outlet context={{ cart, setCart }} />;
};

export default ShopManager;