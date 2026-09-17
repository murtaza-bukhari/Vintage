const testimonials = [
    {
        name: "Ahmed Khan",
        rating: 5,
        review:
            "Excellent service and a very welcoming atmosphere. The haircut was exactly what I wanted.",
    },
    {
        name: "Hamza Ali",
        rating: 5,
        review:
            "The attention to detail was impressive. Easily one of the best barber experiences I've had.",
    },
    {
        name: "Usman Malik",
        rating: 4,
        review:
            "A clean, comfortable place with skilled barbers. I will definitely be visiting again.",
    },
    {
        name: "Bilal Ahmed",
        rating: 5,
        review:
            "Professional service from start to finish. My beard trim turned out perfect.",
    },
    {
        name: "Saad Hassan",
        rating: 5,
        review:
            "The shop has a great atmosphere, and the staff made the whole experience feel effortless.",
    },
    {
        name: "Zain Raza",
        rating: 4,
        review:
            "Great haircut, friendly service, and a relaxing environment. Highly recommended.",
    },
];

const Testimonials = () => {
    return (
        <section id="testimonials" className="bg-[#D8C2A8] px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
            <div className="mx-auto w-full max-w-7xl">
                <div className="mx-auto mb-12 max-w-2xl text-center">
                    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#6B4B36]">
                        Testimonials
                    </p>

                    <h2 className="text-3xl font-semibold text-[#2A1710] sm:text-4xl lg:text-5xl">
                        What Our Customers Say
                    </h2>

                    <p className="mt-4 text-sm leading-7 text-[#6B4B36] sm:text-base">
                        Real experiences from customers who trust us with their
                        style.
                    </p>
                </div>

                <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3 lg:gap-7">
                    {testimonials.map((testimonial) => (
                        <article
                            key={testimonial.name}
                            className="
                                flex min-h-full flex-col rounded-2xl
                                border border-white/10 bg-[#2A1710]
                                p-4 text-[#F3E8DC] shadow-lg
                                transition duration-300
                                hover:-translate-y-1 hover:shadow-xl
                                sm:p-6 lg:p-8
                            "
                        >
                            <div
                                className="mb-4 flex gap-0.5 text-sm text-[#C89B5D] sm:text-base"
                                aria-label={`${testimonial.rating} out of 5 stars`}
                            >
                                {Array.from({ length: 5 }).map((_, index) => (
                                    <span
                                        key={index}
                                        className={
                                            index < testimonial.rating
                                                ? "text-[#C89B5D]"
                                                : "text-white/20"
                                        }
                                    >
                                        ★
                                    </span>
                                ))}
                            </div>

                            <p className="flex-1 text-xs leading-5 text-[#D8C2A8] sm:text-sm sm:leading-7">
                                “{testimonial.review}”
                            </p>

                            <div className="mt-5 border-t border-white/10 pt-4">
                                <h3 className="text-sm font-semibold text-white sm:text-base">
                                    {testimonial.name}
                                </h3>

                                <p className="mt-1 text-xs text-[#C89B5D]">
                                    Verified Customer
                                </p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;