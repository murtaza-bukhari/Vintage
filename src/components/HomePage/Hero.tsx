import desktopImage from "../../assets/hero-bg-desktop.png";
import mobileImage from "../../assets/hero-bg-mobile.png";

const Hero = () => {
    return (
        <section className="relative min-h-screen overflow-hidden">

            <picture className="absolute inset-0">
                <source media="(min-width: 1024px)" srcSet={desktopImage} />
                <img src={mobileImage} alt="" className="h-full w-full object-cover" />
            </picture>

            <div
                className="pointer-events-none absolute inset-0
                bg-[linear-gradient(to_bottom,rgba(27,14,7,0.16)_0%,rgba(27,14,7,0.66)_38%,rgba(27,14,7,0.66)_62%,rgba(27,14,7,0.12)_100%)]
                lg:bg-[linear-gradient(to_right,rgba(27,14,7,0.85)_0%,rgba(27,14,7,0.6)_60%,transparent_100%)]"
            />

            <div className="relative z-10 flex min-h-screen items-center justify-center px-6 py-16 text-center md:px-12 lg:justify-start lg:px-20 lg:text-left">
                <div className="flex w-full max-w-xl flex-col items-center md:max-w-2xl lg:block lg:max-w-3xl">

                    <p className="mb-4 text-sm font-medium uppercase tracking-[0.22em] text-[#d8b579] md:mb-4 md:tracking-[0.35em]">
                        Since 1952
                    </p>

                    <div className="w-fit max-w-full">
                        <h1 className="font-serif text-4xl leading-[1.05] text-[#f5eee3] sm:text-5xl md:text-6xl lg:text-7xl">
                            The Vintage Cut
                        </h1>

                        <div aria-hidden="true" className="mx-auto mt-2 h-[3px] w-[80%] rounded-full bg-gradient-to-r from-[#f4d38a] via-[#d7a953] to-[#a7772f] lg:mx-0" />
                    </div>

                    <div className="mt-6 flex w-full max-w-70 items-center justify-center gap-3 lg:max-w-90 lg:justify-start">

                        <button className="min-w-0 flex-1 cursor-pointer rounded-lg border border-[#d7a953] bg-transparent 
                        px-4 py-2 font-semibold tracking-wide text-[#fff] transition-all duration-300 
                        hover:bg-[#d7a953] hover:text-[#2a160b]
                        focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f4d38a]">
                            Book Now
                        </button>

                        <button className="min-w-0 flex-1 cursor-pointer rounded-lg border border-[#d7a953] bg-transparent 
                        px-4 py-2 font-semibold tracking-wide text-[#fff] transition-all duration-300 
                        hover:bg-[#d7a953] hover:text-[#2a160b]
                        focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f4d38a]">
                            Shop
                        </button>

                    </div>

                </div>
            </div>


        </section>
    );
};

export default Hero;