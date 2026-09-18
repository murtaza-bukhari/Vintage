import { Element } from "react-scroll";

const Contact = () => {
  const inputStyle =
    "mt-2 w-full border-b border-[#6B4B36]/40 bg-transparent py-2 " +
    "text-sm text-[#2B1A12] placeholder:text-[#60493B] " +
    "outline-none transition-colors focus:border-[#2B1A12]";

  const labelStyle = "text-sm font-medium text-[#38251B]";

  return (
    <Element name="contact">
      <section className="bg-[#6B4B36] px-6 py-16 md:px-12 lg:px-20 lg:py-24">
        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-10 lg:gap-20">
          {/* Left side */}
          <div className="text-center md:text-left">
            <h2 className="font-serif text-4xl text-[#2B1A12] font-medium lg:text-5xl">
              Contact Us
            </h2>

            <div className="hidden md:block">
              <p className="mt-6 max-w-md font-serif text-2xl leading-snug text-[#E4D3C1] lg:text-3xl">
                Good style starts with a conversation.
              </p>

              <p className="mt-4 max-w-sm text-sm leading-7 text-[#E4D3C1]">
                Have a question about our services or your next visit?
                Leave us a message. We would love to hear from you.
              </p>
            </div>
          </div>

          {/* Right side */}
          <div className="mx-auto w-full min-w-0 max-w-lg rounded-2xl bg-[#C5AC90] p-6 sm:p-8 lg:p-10">
            <form
              onSubmit={(event) => {
                event.preventDefault();
                event.currentTarget.reset();
              }}
            >
              <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                <div className="min-w-0">
                  <label htmlFor="contact-name" className={labelStyle}>
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
                  <label htmlFor="contact-phone" className={labelStyle}>
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

              <div className="mt-6">
                <label htmlFor="contact-email" className={labelStyle}>
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

              <div className="mt-6">
                <label htmlFor="contact-message" className={labelStyle}>
                  Your message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={4}
                  placeholder="How can we help?"
                  required
                  className={`${inputStyle} min-h-28 resize-y`}
                />
              </div>

              <button
                type="submit"
                className="mt-7 w-full cursor-pointer rounded-sm bg-[#2B1A12] px-6 py-3.5 text-sm font-medium text-[#F5EEE3] transition-colors hover:bg-[#432B1E] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2B1A12]"
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