import { products } from "../../backend/products";

import type { Product } from '../../backend/products'
import type { CartItem } from '../../managers/ShopManager'

type ItemsProps = {
    setCart: React.Dispatch<React.SetStateAction<CartItem[]>>;
};

const Items = ({ setCart }: ItemsProps) => {

    const handleAddToCart = (product: Product) => {

        setCart((currentCart: CartItem[]) => {
            const itemAlreadyExists = currentCart.some(
                (item) => item.product.id === product.id,
            );

            if (itemAlreadyExists) {
                return currentCart.map((item) =>
                    item.product.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item,
                );
            }

            return [...currentCart, { product, quantity: 1 }];
        });
    };

    return (
        <section className="min-h-screen w-full bg-[#B39B72] px-3 pb-6 pt-24 sm:px-6 md:px-10 md:pb-8">
            <div className="mx-auto max-w-7xl">
                <div className="grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-3 md:gap-6 lg:grid-cols-4 lg:gap-8">
                    {products.map((product) => (
                        <article
                            key={product.id}
                            className="group rounded-lg border border-[#8A6842]/30 bg-[#CDB48C] p-2 shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:rounded-xl sm:p-3 md:p-4"
                        >
                            <div className="aspect-square overflow-hidden rounded-md bg-[#B39B72] sm:rounded-lg">
                                <img
                                    src={product.photo}
                                    alt={product.title}
                                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>

                            <div className="px-1 pb-1 pt-3 sm:px-2 sm:pb-2 sm:pt-4 md:pt-5">
                                <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-3">
                                    <h2 className="font-serif text-sm leading-tight text-[#3B2A1E] sm:text-base lg:text-xl">
                                        {product.title}
                                    </h2>

                                    <span className="shrink-0 text-xs font-semibold text-[#7A4E20] sm:text-sm lg:text-base">
                                        ${product.price.toFixed(2)}
                                    </span>
                                </div>

                                <p className="mt-2 hidden text-sm leading-6 text-[#5C4630] md:block">
                                    {product.description}
                                </p>

                                <button
                                    type="button"
                                    onClick={() => handleAddToCart(product)}
                                    className="mt-4 w-full rounded-md border border-[#7A4E20]/40 px-2 py-2 text-[10px] font-semibold uppercase tracking-[0.1em] text-[#3B2A1E] transition-colors hover:cursor-pointer hover:bg-[#3B2A1E] hover:text-[#CDB48C] sm:px-3 sm:py-2.5 sm:text-xs sm:tracking-[0.14em] md:mt-6 md:px-4 md:py-3 md:tracking-[0.18em]"
                                >
                                    Add to cart
                                </button>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Items;