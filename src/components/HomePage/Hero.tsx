import desktopImage from "../../assets/hero-desktop.png";
import mobileImage from "../../assets/hero-mobile.png";

const Hero = () => {
    return (
        <section className="relative min-h-screen overflow-hidden">

            <picture className="absolute inset-0">
                <source media="(min-width: 1024px)" srcSet={desktopImage} />
                <img src={mobileImage} alt="" className="h-full w-full object-cover" />
            </picture>


            <div className="relative z-10 flex min-h-screen items-center justify-center px-6 py-16 text-center md:px-12 lg:justify-start lg:px-20 lg:text-left">

                <div className="
                    relative isolate flex flex-col items-center 
                    w-fit max-w-full lg:items-start

                    before:pointer-events-none before:absolute
                    before:-inset-x-6 before:-inset-y-12 before:-z-10
                    before:bg-[radial-gradient(ellipse_at_center,rgba(18,9,4,0.72)_0%,rgba(18,9,4,0.48)_45%,transparent_75%)]

                    md:before:-inset-x-10

                    lg:before:-left-x-40
                    lg:before:-inset-y-30
                    
                    ">

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