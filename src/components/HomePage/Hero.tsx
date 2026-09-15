import desktopImage from "../../assets/hero-bg-desktop.png";
import mobileImage from "../../assets/hero-bg-mobile.png";

const Hero = () => {
    return (
        <section className="relative min-h-screen overflow-hidden">

            <picture className="absolute inset-0">
                <source media="(min-width: 768px)" srcSet={desktopImage} />
                <img src={mobileImage} alt="" className="h-full w-full object-cover" />
            </picture>

            <div
                className=" pointer-events-none absolute inset-0
                bg-[linear-gradient(to_bottom,rgba(27,14,7,0.2)_0%,rgba(27,14,7,0.72)_38%,rgba(27,14,7,0.72)_62%,rgba(27,14,7,0.15)_100%)]
                md:bg-[linear-gradient(to_right,rgba(27,14,7,0.85)_0%,rgba(27,14,7,0.6)_50%,transparent_100%)]
                lg:bg-[linear-gradient(to_right,rgba(27,14,7,0.85)_0%,rgba(27,14,7,0.4)_45%,transparent_85%)]"
            />

            <div className="relative z-10 flex min-h-screen items-center justify-center px-8 md:px-16 lg:px-20 lg:justify-start">
                <div className="max-w-xl flex flex-col items-center lg:block lg:max-w-3xl">

                    <p className="mb-2 text-sm uppercase tracking-[0.35em] text-[#d8b579]">
                        Since 1952
                    </p>

                    <h1 className="font-serif text-5xl leading-tight text-[#f5eee3] md:text-8xl">
                        The Vintage Cut
                    </h1>

                    <div aria-hidden="true" className="h-[3px] w-42 rounded-full bg-gradient-to-r from-[#f4d38a] via-[#d7a953] to-[#a7772f]" />

                </div>
            </div>


        </section>
    );
};

export default Hero;