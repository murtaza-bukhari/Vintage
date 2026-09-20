import type { Dispatch, SetStateAction } from "react";
import type { CartItem } from "../../managers/ShopManager";

type CartItemsProps = {
  cart: CartItem[];
  setCart: Dispatch<SetStateAction<CartItem[]>>;
};

const CartGrid = ({ cart, setCart }: CartItemsProps) => {
  
    const increaseQuantity = (productId: number) => {
    setCart((currentCart) =>
      currentCart.map((item) =>
        item.product.id === productId
          ? { ...item, quantity: item.quantity + 1 }
          : item,
      ),
    );
  };

  const decreaseQuantity = (productId: number) => {
    setCart((currentCart) =>
      currentCart
        .map((item) =>
          item.product.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item,
        )
        .filter((item) => item.quantity > 0),
    );
  };

  return (
    <section className="min-h-screen bg-[#B39B72] px-4 pb-10 pt-24 sm:px-6 md:px-10">
      <div className="mx-auto max-w-5xl">
        <h1 className="mb-6 font-serif text-3xl text-[#3B2A1E] sm:text-4xl">
          Your Cart
        </h1>

        {cart.length === 0 ? (
          <div className="rounded-xl border border-[#8A6842]/30 bg-[#CDB48C] p-8 text-center shadow-md">
            <p className="text-[#5C4630]">Your cart is empty.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-4">
            {cart.map((item) => (
              <article
                key={item.product.id}
                className="grid grid-cols-[5.5rem_minmax(0,1fr)] gap-3 rounded-xl border border-[#8A6842]/30 bg-[#CDB48C] p-3 shadow-md sm:grid-cols-[9rem_minmax(0,1fr)_auto] sm:items-center sm:gap-6 sm:p-4"
              >
                <div className="aspect-square overflow-hidden rounded-lg bg-[#B39B72]">
                  <img
                    src={item.product.photo}
                    alt={item.product.title}
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="min-w-0">
                  <h2 className="font-serif text-base leading-tight text-[#3B2A1E] sm:text-xl">
                    {item.product.title}
                  </h2>

                  <p className="mt-2 hidden text-sm leading-6 text-[#5C4630] md:block">
                    {item.product.description}
                  </p>

                  <p className="mt-2 text-sm font-semibold text-[#7A4E20] sm:text-base">
                    ${item.product.price.toFixed(2)}
                  </p>

                  <div className="mt-3 flex items-center gap-2 sm:hidden">
                    <QuantityControls
                      quantity={item.quantity}
                      onDecrease={() => decreaseQuantity(item.product.id)}
                      onIncrease={() => increaseQuantity(item.product.id)}
                    />
                  </div>
                </div>

                <div className="hidden sm:flex sm:flex-col sm:items-center sm:gap-2">
                  <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[#5C4630]">
                    Quantity
                  </span>

                  <QuantityControls
                    quantity={item.quantity}
                    onDecrease={() => decreaseQuantity(item.product.id)}
                    onIncrease={() => increaseQuantity(item.product.id)}
                  />

                  <p className="mt-2 font-semibold text-[#3B2A1E]">
                    ${(item.product.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

type QuantityControlsProps = {
  quantity: number;
  onDecrease: () => void;
  onIncrease: () => void;
};

const QuantityControls = ({
  quantity,
  onDecrease,
  onIncrease,
}: QuantityControlsProps) => {
  return (
    <div className="flex items-center overflow-hidden rounded-md border border-[#7A4E20]/40">
      <button
        type="button"
        onClick={onDecrease}
        aria-label="Decrease quantity"
        className="h-8 w-8 text-lg text-[#3B2A1E] transition-colors hover:bg-[#3B2A1E] hover:text-[#CDB48C] sm:h-9 sm:w-9"
      >
        -
      </button>

      <span className="min-w-8 text-center text-sm font-semibold text-[#3B2A1E]">
        {quantity}
      </span>

      <button
        type="button"
        onClick={onIncrease}
        aria-label="Increase quantity"
        className="h-8 w-8 text-lg text-[#3B2A1E] transition-colors hover:bg-[#3B2A1E] hover:text-[#CDB48C] sm:h-9 sm:w-9"
      >
        +
      </button>
    </div>
  );
};

export default CartGrid;