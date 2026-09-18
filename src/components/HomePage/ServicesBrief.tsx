import hairCard from "../../assets/card-hair.png"
import beardCard from "../../assets/card-beard.png"
import bodyCard from "../../assets/card-body.png"

import { Element } from 'react-scroll';

const services = [
  {
    title: "Hair",
    image: hairCard,
    description:
      "Precision cutting and thoughtful styling, shaped around your individual look.",
  },
  {
    title: "Beard",
    image: beardCard,
    description:
      "Careful trimming and sculpting for a clean, balanced and refined finish.",
  },
  {
    title: "Body",
    image: bodyCard,
    description:
      "Relaxing grooming treatments designed to leave you refreshed and restored.",
  },
]

const ServicesBrief = () => {
  return (
    <Element name='services'>
      <section className="flex min-h-screen w-full items-center bg-[#6B4B36] px-6 py-24 md:px-12 lg:px-20">
        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 justify-items-center gap-8 md:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="flex w-full max-w-sm flex-col rounded-2xl bg-[#C7AD90] p-4 shadow-xl md:max-w-none"
            >
              <img
                src={service.image}
                alt={`${service.title} service`}
                className="aspect-square w-full rounded-xl object-cover"
              />

              <div className="flex flex-1 flex-col items-center px-3 py-7 text-center">
                <h3 className="mb-3 font-serif text-3xl text-[#2B1A12]">
                  {service.title}
                </h3>

                <p className="mb-7 leading-7 text-[#60493B]">
                  {service.description}
                </p>

                <button
                  type="button"
                  className="mt-auto rounded-full bg-[#38251B] px-7 py-3 text-sm tracking-wider text-[#E8D8C5] transition hover:bg-[#4B3325]"
                >
                  BOOK NOW
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Element>

  )
}

export default ServicesBrief