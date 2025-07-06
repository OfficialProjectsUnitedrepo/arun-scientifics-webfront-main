
import React from "react";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="bg-gradient-to-r from-navy to-[#003366] text-white py-32 md:py-40 relative">
      <div className="absolute inset-0 bg-black/30"></div>
      
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fadeIn">
          Delivering Quality Since 1994
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-200">
          Precision Glassware & Scientific Excellence
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button 
            onClick={() => scrollToSection("products")}
            className="px-8 py-3 bg-coral hover:bg-coralHover text-white font-semibold rounded-full transition-colors w-full sm:w-auto"
          >
            Explore Products
          </button>
          <button 
            onClick={() => scrollToSection("contact")}
            className="px-8 py-3 bg-transparent hover:bg-white/10 text-white font-semibold border-2 border-white rounded-full transition-colors w-full sm:w-auto"
          >
            Get in Touch
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
