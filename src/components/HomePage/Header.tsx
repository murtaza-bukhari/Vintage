import { useState } from "react";
import logo from '../../assets/logo.png'

import { Link as ScrollLink } from "react-scroll";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 h-20
             border-b border-[#d7a953]/20
             bg-[#1b0e07]/70 backdrop-blur-md
             shadow-[0_8px_30px_rgba(0,0,0,0.3)]"
    >

      <div className="flex h-full items-center justify-between px-5 sm:px-8 lg:px-18">

        <img
          src={logo}
          alt=""
          aria-hidden="true"
          className="h-12 w-12 object-contain"
        />

        <button
          type="button"
          className="relative flex h-10 w-10 cursor-pointer items-center justify-center
             rounded-full border border-[#d7a953]/40 bg-black/10
             transition-all duration-600 hover:border-[#d7a953]/80
             hover:bg-[#d7a953]/10
             focus-visible:outline-2 focus-visible:outline-offset-4
             focus-visible:outline-[#f4d38a] lg:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-controls="main-navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span
            aria-hidden="true"
            className={`absolute h-px w-5 bg-[#d7a953] transition-transform duration-600 ${menuOpen ? "rotate-45" : "-translate-y-1.5"
              }`}
          />

          <span
            aria-hidden="true"
            className={`absolute h-px w-5 bg-[#d7a953] transition-transform duration-600 ${menuOpen ? "-rotate-45" : "translate-y-1.5"
              }`}
          />
        </button>

        <nav
          id="main-navigation"
          aria-label="Main navigation"
          className={`absolute left-0 top-20 w-full flex-col gap-4
          border-b border-[#8b693d] bg-[#2a1b14] px-5 py-6
          lg:static lg:flex lg:w-auto lg:flex-row lg:items-center lg:gap-8
          lg:border-0 lg:bg-transparent lg:p-0
          ${menuOpen ? "flex" : "hidden"}`}
        >
          <ScrollLink
            to="home"
            smooth="easeOutCubic"
            duration={600}
            offset={-80}
            spy={true}
            onClick={() => setMenuOpen(false)}
            className="w-fit cursor-pointer border-b-2 border-transparent py-1 text-[#f5eee3] hover:border-[#d7a953] focus-visible:border-[#d7a953]"
          >
            Home
          </ScrollLink>

          <ScrollLink
            to="about"
            smooth="easeOutCubic"
            duration={600}
            spy={true}
            onClick={() => setMenuOpen(false)}
            className="w-fit cursor-pointer border-b-2 border-transparent py-1 text-[#f5eee3] hover:border-[#d7a953] focus-visible:border-[#d7a953]"
          >
            About
          </ScrollLink>

          <ScrollLink
            to="services"
            smooth="easeOutCubic"
            duration={600}
            spy={true}
            onClick={() => setMenuOpen(false)}
            className="w-fit cursor-pointer border-b-2 border-transparent py-1 text-[#f5eee3] hover:border-[#d7a953] focus-visible:border-[#d7a953]"
          >
            Services
          </ScrollLink>

          <ScrollLink
            to="testimonials"
            smooth="easeOutCubic"
            duration={600}
            spy={true}
            onClick={() => setMenuOpen(false)}
            className="w-fit cursor-pointer border-b-2 border-transparent py-1 text-[#f5eee3] hover:border-[#d7a953] focus-visible:border-[#d7a953]"
          >
            Testimonials
          </ScrollLink>

          <ScrollLink
            to="contact"
            smooth="easeOutCubic"
            duration={600}
            onClick={() => setMenuOpen(false)}
            className="inline-flex h-8 max-w-24 cursor-pointer items-center justify-center rounded-lg
            border border-[#d7a953] px-4 text-sm font-semibold leading-none
            tracking-wide text-[#f4d38a] transition-all duration-600
            hover:bg-[#d7a953] hover:text-[#2a160b]
            focus-visible:outline-2 focus-visible:outline-offset-4
            focus-visible:outline-[#f4d38a]"
          >
            Contact
          </ScrollLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;