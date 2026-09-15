import { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 h-20 border-b border-[#8b693d] bg-[#2a1b14] shadow-lg">
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-5">
        <a href="/" className="font-serif text-2xl text-[#f5eee3]">
          The Vintage Cut
        </a>

        <button
          type="button"
          className="flex h-11 w-11 cursor-pointer flex-col items-center justify-center gap-1.5 rounded border border-[#d7a953] lg:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-controls="main-navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="h-0.5 w-5 bg-[#d7a953]" />
          <span className="h-0.5 w-5 bg-[#d7a953]" />
          <span className="h-0.5 w-5 bg-[#d7a953]" />
        </button>

        <nav
          id="main-navigation"
          aria-label="Main navigation"
          className={`absolute left-0 top-20 w-full flex-col gap-4 border-b border-[#8b693d] bg-[#2a1b14] px-5 py-6 lg:static lg:flex lg:w-auto lg:flex-row lg:items-center lg:gap-8 lg:border-0 lg:bg-transparent lg:p-0 ${
            menuOpen ? "flex" : "hidden"
          }`}
        >
          <a
            href="/"
            onClick={() => setMenuOpen(false)}
            className="w-fit border-b-2 border-transparent py-1 text-[#f5eee3] hover:border-[#d7a953] focus-visible:border-[#d7a953]"
          >
            Home
          </a>
          <a
            href="/services"
            onClick={() => setMenuOpen(false)}
            className="w-fit border-b-2 border-transparent py-1 text-[#f5eee3] hover:border-[#d7a953] focus-visible:border-[#d7a953]"
          >
            Services
          </a>
          <a
            href="/about"
            onClick={() => setMenuOpen(false)}
            className="w-fit border-b-2 border-transparent py-1 text-[#f5eee3] hover:border-[#d7a953] focus-visible:border-[#d7a953]"
          >
            About
          </a>
          <a
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="w-fit border-b-2 border-transparent py-1 text-[#f5eee3] hover:border-[#d7a953] focus-visible:border-[#d7a953]"
          >
            Contact
          </a>

          <span className="text-sm text-[#d7a953]">TBA · Coming soon</span>
        </nav>
      </div>
    </header>
  );
};

export default Header;