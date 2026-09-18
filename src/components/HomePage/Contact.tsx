import { Element } from "react-scroll";

const Contact = () => {
  const inputStyle =
    "w-full border-b border-[#6B4B36]/30 bg-transparent py-2 " +
    "text-[#2B1A12] placeholder:text-[#75604E] " +
    "outline-none transition-colors focus:border-[#2B1A12]";

  return (
    <Element name="contact">
      <section className="bg-[#6B4B36] px-6 py-20 md:px-12 lg:px-20 lg:py-28">
        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left side */}
          <div className="flex flex-col justify-between">
            <div>
              <p className="mb-6 text-xs font-semibold uppercase tracking-[0.3em] text-[#E2C59A]">
                Get in Touch
              </p>

              <h2 className="max-w-lg font-serif text-4xl leading-tight text-[#F5EEE3] sm:text-5xl lg:text-6xl">
                Good style starts
                with a conversation.
              </h2>

              <p className="mt-6 max-w-md text-sm leading-7 text-[#E4D3C1] sm:text-base">
                A question about our services or planning your next visit?
                Leave us a message. We would love to hear from you.
              </p>
            </div>
          </div>

          {/* Right side */}
          <div className="min-w-0 rounded-sm bg-[#D8C2A8] p-6 sm:p-10 lg:p-12">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#60493B]">
              Drop Us a Note
            </p>

            <h3 className="font-serif text-3xl text-[#2B1A12] sm:text-4xl">
              How can we help?
            </h3>

            <form
              className="mt-6"
              onSubmit={(event) => {
                event.preventDefault();
              }}
            >
              <div className="grid grid-cols-1 gap-7 sm:grid-cols-2">
                <div className="min-w-0">
                  <label
                    htmlFor="contact-name"
                    className="text-sm font-medium text-[#38251B]"
                  >
                    Your name
                  </label>

                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    placeholder="Full name"
                    required
                    className={inputStyle}
                  />
                </div>

                <div className="min-w-0">
                  <label
                    htmlFor="contact-phone"
                    className="text-sm font-medium text-[#38251B]"
                  >
                    Phone <span className="font-normal">(optional)</span>
                  </label>

                  <input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    placeholder="Phone number"
                    className={inputStyle}
                  />
                </div>
              </div>

              <div className="mt-7">
                <label
                  htmlFor="contact-email"
                  className="text-sm font-medium text-[#38251B]"
                >
                  Email address
                </label>

                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                  required
                  className={inputStyle}
                />
              </div>

              <div className="mt-7">
                <label
                  htmlFor="contact-message"
                  className="text-sm font-medium text-[#38251B]"
                >
                  Your message
                </label>

                <textarea
                  id="contact-message"
                  name="message"
                  rows={2}
                  placeholder="Tell us what you have in mind..."
                  required
                  className={`${inputStyle} min-h-28 resize-y`}
                />
              </div>

              <button
                type="submit"
                className="mt-8 flex w-full cursor-pointer items-center justify-between gap-4 rounded-sm bg-[#2B1A12] px-6 py-4 text-sm font-semibold text-[#F5EEE3] transition-colors hover:bg-[#432B1E] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2B1A12]"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </Element>
  );
};

export default Contact;