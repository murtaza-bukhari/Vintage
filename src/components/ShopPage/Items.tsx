import { products } from "../../backend/products";

const Items = () => {
    const handleAddToCart = () =>{

    }

    return (
        <section className="min-h-screen w-full bg-[#B39B72] px-8 pb-8 pt-24 md:px-10 lg:px-10">
            <div className="mx-auto max-w-7xl">

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4">
                    {products.map((product) => (
                        <article
                            key={product.id}
                            className="group rounded-xl border border-[#8A6842]/30 bg-[#CDB48C] p-4 shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                        >
                            {/* Image inside the card */}
                            <div className="aspect-square overflow-hidden rounded-lg bg-[#B39B72]">
                                <img
                                    src={product.photo}
                                    alt={product.title}
                                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>

                            <div className="px-2 pb-2 pt-5">
                                <div className="flex items-start justify-between gap-4">
                                    <h2 className="font-serif text-xl text-[#3B2A1E]">
                                        {product.title}
                                    </h2>

                                    <span className="shrink-0 font-semibold text-[#7A4E20]">
                                        ${product.price.toFixed(2)}
                                    </span>
                                </div>

                                <p className="hidden mt-3 text-sm md:inline leading-6 text-[#5C4630]">
                                    {product.description}
                                </p>

                                <button
                                    type="button"
                                    onClick={handleAddToCart}
                                    className="mt-6 w-full rounded-md border border-[#7A4E20]/40 px-4 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#3B2A1E] transition-colors hover:bg-[#3B2A1E] hover:text-[#CDB48C] hover:cursor-pointer"
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