import CartHeader from '../components/CartPage/CartHeader'
import CartGrid from '../components/CartPage/CartGrid';

import { useOutletContext } from "react-router";
import type { ShopContext } from "../managers/ShopManager";

const CartPage = () => {
  const { cart, setCart } = useOutletContext<ShopContext>();
  return (
    <>
      <CartHeader/>
      <CartGrid cart={cart} setCart={setCart} />
    </>
  );
};

export default CartPage;