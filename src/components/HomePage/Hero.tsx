import heroImage from "../../assets/hero-bg-desktop.png";

const Hero = () => {
    return (
        <section
            className="relative min-h-screen bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${heroImage})` }}
        >
            <div className="absolute inset-0 bg-gradient-to-r from-[#160b05]/80 via-[#241108]/40 to-transparent" />

            <div className="relative flex min-h-screen max-w-7xl flex-col justify-center px-8 text-left md:px-16 lg:px-24">
                <p className="mb-4 text-sm font-medium uppercase tracking-[0.5em] text-[#e5bd70]">
                    Since 1952
                </p>

                <h1
                    className="
        bg-gradient-to-b from-[#fff0ad] via-[#d9a441] to-[#9c681d]
        bg-clip-text font-serif text-6xl font-bold leading-none
        tracking-wide text-transparent
        drop-shadow-[0_3px_3px_rgba(0,0,0,0.8)]
        md:text-8xl
      "
                >
                    Heritage Cut
                </h1>

                <p className="mt-7 max-w-xl border-l-2 border-[#d6a84e] pl-5 text-lg italic tracking-wide text-[#f3e6d2] md:text-xl">
                    Timeless tradition, tailored for the modern gentleman.
                </p>
            </div>
        </section>
    );
};

export default Hero;