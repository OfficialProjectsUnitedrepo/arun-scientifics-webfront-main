import React from "react";
import { Linkedin, Twitter, Instagram } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20  bg-gray-50 relative overflow-hidden" aria-labelledby="about-title">
      {/* Subtle Background Effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,51,102,0.05)_0%,_transparent_70%)] z-0"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 id="about-title" className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy text-center mb-10 animate-fade-in-up tracking-tight">
            About Us
          </h2>

          <div className="bg-gray-50 p-6 sm:p-8 md:p-10 rounded-xl shadow-sm mb-8 transform transition-all duration-300 hover:shadow-md animate-fade-in-up animation-delay-200">
            <p className="text-lg sm:text-xl leading-relaxed mb-6 text-gray-600">
              <span className="font-bold text-pink-600">Since 1994,</span> Arun Scientifics has been a leading supplier of laboratory glassware and scientific requisites.
              With decades of experience, we are trusted by pharma and research labs for our commitment to quality and reliability.
            </p>
            <p className="text-lg sm:text-xl leading-relaxed mb-6 text-gray-600">
              We specialize in large-scale supply of high-quality glass sample vials (5ml), as well as amber and clear glass bottles ranging from 1ml to 200ml. We also offer mobile phase bottles suitable for various laboratory and analytical applications.
            </p>
             <p className="text-lg sm:text-xl text-gray-600 mb-4">
              Specializing in{" "}
              <span className="font-semibold">
                colour-coded volumetric flasks and Class A laboratory glassware
              </span>
              .
            </p>
          </div>


          <div className="bg-gray-50 p-6 sm:p-8 md:p-10 rounded-xl shadow-sm transform transition-all duration-300 hover:shadow-md animate-fade-in-up animation-delay-400">
            <p className="text-lg sm:text-xl leading-relaxed mb-8 text-gray-600">
              Our vision is to support scientific innovation through precision-crafted lab solutions that meet the highest standards of quality and performance.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-10 bg-white/80 p-6 rounded-lg shadow-inner">
              <div className="text-center p-4 animate-fade-in-up animation-delay-600">
                <div className="w-16 h-16 bg-navy/10 rounded-full flex items-center justify-center mx-auto mb-4 transform transition-transform duration-300 hover:scale-110" aria-label="Years of experience">
                  <span className="text-navy text-2xl font-bold">25+</span>
                </div>
                <h3 className="font-semibold text-navy text-lg">Years Experience</h3>
              </div>
              <div className="text-center p-4 animate-fade-in-up animation-delay-800">
                <div className="w-16 h-16 bg-navy/10 rounded-full flex items-center justify-center mx-auto mb-4 transform transition-transform duration-300 hover:scale-110" aria-label="Number of products">
                  <span className="text-navy text-2xl font-bold">500+</span>
                </div>
                <h3 className="font-semibold text-navy text-lg">Products</h3>
              </div>
              <div className="text-center p-4 animate-fade-in-up animation-delay-1000">
                <div className="w-16 h-16 bg-navy/10 rounded-full flex items-center justify-center mx-auto mb-4 transform transition-transform duration-300 hover:scale-110" aria-label="Happy clients">
                  <span className="text-navy text-2xl font-bold">1000+</span>
                </div>
                <h3 className="font-semibold text-navy text-lg">Happy Clients</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;