import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const navItems = ["about", "products", "dealers", "contact"];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-gradient-to-r from-navy to-[#003366] shadow-lg py-3"
          : "bg-gradient-to-r from-navy/95 to-[#003366]/95 py-4"
      } border-b border-gray-200/20`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <span className="text-white text-sm sm:text-base md:text-lg font-serif italic tracking-wide animate-pulse">
                  Om Namo Venkatesaya 🙏
                </span>
                <span className="hidden sm:block text-white text-xs sm:text-sm md:text-base font-light leading-tight max-w-[200px] sm:max-w-[300px]">
                  May Lord Balaji bless your day with peace, clarity, and success.
                </span>
              </div>
            </div>

        <nav className="hidden md:flex space-x-6 lg:space-x-8">
          {navItems.map((item) => (
            <button
              key={item}
              className="text-white font-medium text-base lg:text-lg hover:text-coral transition-colors duration-200 capitalize"
              onClick={() => scrollToSection(item)}
            >
              {item === "sisters" ? "Sister Companies" : item}
            </button>
          ))}
        </nav>

        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-gradient-to-r from-navy/95 to-[#003366]/95 py-6 animate-slide-down border-b border-gray-200/20">
          <nav className="flex flex-col space-y-4 items-center">
            {navItems.map((item) => (
              <button
                key={item}
                className="text-white font-medium text-lg hover:text-coral transition-colors duration-200 capitalize"
                onClick={() => scrollToSection(item)}
              >
                {item === "sisters" ? "Sister Companies" : item}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;  