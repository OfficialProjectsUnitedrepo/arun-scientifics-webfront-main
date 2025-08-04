import React from "react";

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="bg-gradient-to-r from-navy to-[#003366] text-white py-24 md:py-32 lg:py-48 relative overflow-hidden">
      <div className="absolute inset-0 bg-black/30 z-0"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.1)_0%,_transparent_70%)] z-0"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="flex justify-center mb-8 animate-fade-in-up">
          <img 
            src="/ArunScientifics.png" 
            alt="Arun Scientifics Logo" 
            className="h-20 md:h-24 lg:h-32 w-auto"
          />
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 animate-fade-in-up">
          Delivering Quality Since 1994
        </h1>
       
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-fade-in-up animation-delay-400">
          <button
            onClick={() => scrollToSection("products")}
            className="px-10 py-4 bg-coral hover:bg-coralHover text-white font-semibold rounded-full transition-colors duration-300 w-full sm:w-auto transform hover:scale-105 text-lg md:text-xl"
          >
            Explore Products
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="px-10 py-4 bg-transparent hover:bg-white/20 text-white font-semibold border-2 border-white rounded-full transition-colors duration-300 w-full sm:w-auto transform hover:scale-105 text-lg md:text-xl"
          >
            Get in Touch
          </button>
        </div>
        <p className="text-lg md:text-2xl lg:text-3xl font-medium max-w-4xl mx-auto mt-10 text-gray-100 animate-fade-in-up animation-delay-200">
          <span className="block font-semibold">CRAFTED WITH CARE, TRUSTED FOR QUALITY.</span>
          <span className="block">DELIVERING QUALITY ON TIME, EVERYTIME.</span>
        </p>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white/10 to-transparent z-0"></div>
    </section>
  );
};

export default Hero;