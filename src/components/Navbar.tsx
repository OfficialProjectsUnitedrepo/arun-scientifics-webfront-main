import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-gradient-to-r from-navy to-[#003366] shadow-md py-3" 
          : "bg-gradient-to-r from-navy/90 to-[#003366]/90 py-5"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <h1 className="text-2xl md:text-3xl font-bold text-white">
          Arun Scientifics
        </h1>

        <nav className="hidden md:flex space-x-8">
          {["about", "products", "sisters", "contact"].map((item) => (
            <button
              key={item}
              className="text-white font-semibold hover:text-gold transition-colors"
              onClick={() => scrollToSection(item)}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </button>
          ))}
        </nav>

        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-gradient-to-r from-navy/95 to-[#003366]/95 py-4 animate-fadeIn">
          <nav className="flex flex-col space-y-4 items-center">
            {["about", "products", "sisters", "contact"].map((item) => (
              <button
                key={item}
                className="text-white font-semibold hover:text-gold transition-colors"
                onClick={() => scrollToSection(item)}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
