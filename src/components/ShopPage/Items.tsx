import products from "../../backend/products";

const Items = () => {
    return (
        <section className="min-h-screen w-full bg-[#72513D] px-5 py-16 md:px-10 lg:py-24">
            <div className="mx-auto max-w-7xl">

                {/* Product grid */}
                <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4">
                    {products.map((product) => (
                        <article
                            key={product.id}
                            className="group rounded-xl border border-[#2A1710]/15 bg-[#35251D] p-4 shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                        >
                            {/* Image inside the card */}
                            <div className="aspect-square overflow-hidden rounded-lg bg-[#EFE6DA]">
                                <img
                                    src={product.photo}
                                    alt={product.title}
                                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>

                            {/* Product information */}
                            <div className="px-2 pb-2 pt-5">
                                <div className="flex items-start justify-between gap-4">
                                    <h2 className="font-serif text-xl text-[#E8D8C4]">
                                        {product.title}
                                    </h2>

                                    <span className="shrink-0 font-semibold text-[#D8B48A]">
                                        ${product.price.toFixed(2)}
                                    </span>
                                </div>

                                <p className="mt-3 text-sm leading-6 text-[#C9AF92]">
                                    {product.description}
                                </p>

                                <button
                                    type="button"
                                    className="mt-6 w-full rounded-md border border-[#C9AF92]/40 px-4 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#E8D8C4] transition-colors hover:bg-[#E8D8C4] hover:text-[#2A1710]"
                                >
                                    View Item
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