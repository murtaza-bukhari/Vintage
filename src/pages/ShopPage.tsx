import Items from "../components/ShopPage/Items";
import ShopHeader from "../components/ShopPage/ShopHeader";

import { useOutletContext } from "react-router";
import type { ShopContext } from "../managers/ShopManager";

const ShopPage = () => {
  const { setCart } = useOutletContext<ShopContext>();
  return (
    <>
      <ShopHeader />
      <Items setCart={setCart}/>
    </>
  );
};

export default ShopPage;