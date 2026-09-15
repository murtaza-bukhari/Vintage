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
                className=" pointer-events-none absolute inset-0
                bg-[linear-gradient(to_bottom,rgba(27,14,7,0.2)_0%,rgba(27,14,7,0.72)_38%,rgba(27,14,7,0.72)_62%,rgba(27,14,7,0.15)_100%)]
                md:bg-[linear-gradient(to_right,rgba(27,14,7,0.85)_0%,rgba(27,14,7,0.6)_50%,transparent_100%)]
                lg:bg-[linear-gradient(to_right,rgba(27,14,7,0.85)_0%,rgba(27,14,7,0.4)_45%,transparent_85%)]"
            />

            <div className="relative z-10 flex min-h-screen items-center justify-center px-6 py-16 text-center md:px-12 lg:justify-start lg:px-20 lg:text-left">
                <div className="flex w-full max-w-xl flex-col items-center md:max-w-2xl lg:block lg:max-w-3xl">

                    <p className="mb-3 text-sm font-medium uppercase tracking-[0.22em] text-[#d8b579] md:mb-4 md:tracking-[0.35em]">
                        Since 1952
                    </p>

                    <div className="w-fit max-w-full">
                        <h1 className="font-serif text-5xl leading-[1.05] text-[#f5eee3] sm:text-6xl md:text-7xl lg:text-8xl">
                            The Vintage Cut
                        </h1>

                        <div aria-hidden="true" className="mx-auto mt-1 h-[3px] w-[60%] rounded-full bg-gradient-to-r from-[#f4d38a] via-[#d7a953] to-[#a7772f] lg:mx-0" />
                    </div>

                    <button
                        className="mt-4 w-full max-w-56 cursor-pointer rounded-lg border border-[#d7a953] bg-[#E8D3A8] 
                        px-8 py-3 font-semibold tracking-wide text-[#2a160b] shadow-lg transition-all duration-300 
                        hover:bg-[#d7a953] hover:shadow-xl 
                        focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f4d38a] sm:w-auto"
                    >
                        Book Now
                    </button>

                </div>
            </div>


        </section>
    );
};

export default Hero;