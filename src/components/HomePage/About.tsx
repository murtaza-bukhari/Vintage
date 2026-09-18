import Slideshow from './SlideShow'
import { Element } from 'react-scroll'

const About = () => {
  return (
    <Element name='about'>
      <section className="flex min-h-screen items-center bg-[#D8C2A8] px-6 py-30 md:px-12 md:py-32 lg:px-20 lg:py-34">

        <div className="mx-auto w-full max-w-7xl">

          <p className="mb-3 text-sm tracking-[0.35em] text-center text-[#74542E] font-semibold lg:text-left">
            OUR SPACE
          </p>

          <h2 className="mb-12 font-serif text-4xl text-center text-[#2B1A12] md:text-5xl  lg:text-left">
            Tradition in Every Detail
          </h2>

          <div className="flex flex-col items-center gap-10 lg:flex-row lg:gap-16">
            <div className="w-full overflow-hidden rounded-sm shadow-xl lg:w-3/5">
              <Slideshow />
            </div>

            <div className="flex w-full flex-col justify-center items-center text-center text-[#38251B] lg:w-2/5 lg:items-start lg:text-left">

              <div className="mb-7 h-px w-16 bg-[#9A743E]" />

              <h3 className="mb-5 font-serif text-3xl leading-tight">
                More Than Just a Haircut
              </h3>

              <p className="mb-5 leading-7 text-[#60493B]">
                Since opening our doors, we have set out to create more than a
                place for grooming. We wanted to bring back the character,
                craftsmanship, and personal attention of the traditional
                barbershop.
              </p>

              <p className="leading-7 text-[#60493B]">
                From precision haircuts and carefully shaped beards to classic
                hot-towel shaves, every service is delivered with patience and
                attention to detail. Our space combines timeless techniques with
                modern comfort, giving every guest a moment to slow down, reset,
                and leave feeling their best.
              </p>

            </div>
          </div>
        </div>
      </section>
    </Element>
  )
}

export default About