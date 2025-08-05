import React from "react";

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="bg-gradient-to-r from-navy to-[#003366] text-white py-24 md:py-22 lg:py-38 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-black/30 z-0"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.15)_0%,_transparent_70%)] z-0"></div>
      <div className="absolute inset-0 animate-pulse opacity-20 bg-[url('/ subtle-grid-pattern.png')] bg-repeat bg-[length:50px_50px] z-0"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Logo with enhanced effects */}
        <div className="flex justify-center mb-10 animate-fade-in-up relative">
          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-coral to-purple-600 rounded-full blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
            <img
              src="/arunwithoutbg.png"
              alt="Arun Scientifics Logo"
             className="h-[300px] md:h-[350px] lg:h-[400px] w-auto relative z-10 transform group-hover:scale-110 transition-transform duration-300 ease-out"
            />
          </div>
        </div>


 
  <h1 className="text-xl md:text-xl lg:text-2xl font-extrabold mb-10 animate-fade-in-up tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-200">
         Manufactures & Dealers in laboratory glassware
        </h1>
        {/* Main heading with improved typography */}
        <h1 className="text-xl md:text-xl lg:text-2xl  font-extrabold mb-10 animate-fade-in-up tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-200">
          Delivering Quality Since 1994
        </h1>

        {/* Buttons with enhanced hover effects */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-fade-in-up animation-delay-400">
          <button
            onClick={() => scrollToSection("products")}
            className="px-12 py-4 bg-coral hover:bg-coralHover text-white font-semibold rounded-full transition-all duration-300 w-full sm:w-auto transform hover:scale-105 hover:shadow-lg hover:shadow-coral/50 text-lg md:text-xl relative overflow-hidden group"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-transparent to-white/20 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            <span className="relative z-10">Explore Products</span>
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="px-12 py-4 bg-transparent hover:bg-white/10 text-white font-semibold border-2 border-white/80 rounded-full transition-all duration-300 w-full sm:w-auto transform hover:scale-105 hover:shadow-lg hover:shadow-white/30 text-lg md:text-xl relative overflow-hidden group"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-transparent to-white/20 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            <span className="relative z-10">Get in Touch</span>
          </button>
        </div>

        {/* Subtitle with refined styling */}
        <p className="text-lg md:text-2xl lg:text-3xl font-medium max-w-4xl mx-auto mt-12 text-gray-100 animate-fade-in-up animation-delay-200 leading-relaxed">
          <span className="block font-semibold tracking-wide">CRAFTED WITH CARE, TRUSTED FOR QUALITY.</span>
          <span className="block text-gray-300">DELIVERING QUALITY ON TIME, EVERY TIME.</span>
        </p>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white/15 to-transparent z-0"></div>
    </section>
  );
};

export default Hero;