import desktopImage from "../../assets/hero-bg-desktop.png";
import mobileImage from "../../assets/hero-bg-mobile.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      
      <picture className="absolute inset-0">
        <source media="(min-width: 768px)" srcSet={desktopImage} />
        <img src={mobileImage} alt="" className="h-full w-full object-cover"/>
      </picture>

      

      
    </section>
  );
};

export default Hero;