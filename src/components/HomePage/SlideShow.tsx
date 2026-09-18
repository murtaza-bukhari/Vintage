import { useEffect, useState } from "react"

import images from "../../backend/gallery"

const Slideshow = () => {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((current) => (current + 1) % images.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden md:aspect-video">
      {images.map((image, index) => (
        <img
          key={image}
          src={image}
          alt={`Barbershop gallery ${index + 1}`}
          className={`
            absolute inset-0 h-full w-full object-cover
            transition-opacity duration-700
            ${current === index ? "opacity-100" : "opacity-0"}
          `}
        />
      ))}

      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setCurrent(index)}
            aria-label={`Show image ${index + 1}`}
            className={`
              h-2 rounded-full transition-all
              ${
                current === index
                  ? "w-2 bg-[#C59A55]"
                  : "w-2 bg-white/70"
              }
            `}
          />
        ))}
      </div>
    </div>
  )
}

export default Slideshow