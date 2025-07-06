import React from "react";

const About = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-navy text-center mb-8">
            About Us
          </h2>
          
          <div className="bg-gray-50 p-6 md:p-10 rounded-xl shadow-sm mb-8">
            <p className="text-lg leading-relaxed mb-6">
              <span className="font-bold text-pink-600">Since 1994,</span> Arun Scientifics has been a leading supplier of laboratory glassware and scientific requisites. 
              With decades of experience, we are trusted by pharma and research labs for our commitment to quality and reliability.
            </p>
          </div>

          <div className="bg-gray-50 p-6 md:p-10 rounded-xl shadow-sm">
            <p className="text-lg leading-relaxed mb-6">
              Arun Scientifics is a leading supplier of laboratory glassware and scientific requisites. With decades of experience, we are trusted by pharma and research labs for quality and reliability.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              Our vision is to support scientific innovation through precision-crafted lab solutions that meet the highest standards of quality and performance.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
              <div className="text-center p-4">
                <div className="w-16 h-16 bg-navy/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-navy text-2xl font-bold">25+</span>
                </div>
                <h3 className="font-semibold text-navy">Years Experience</h3>
              </div>
              <div className="text-center p-4">
                <div className="w-16 h-16 bg-navy/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-navy text-2xl font-bold">500+</span>
                </div>
                <h3 className="font-semibold text-navy">Products</h3>
              </div>
              <div className="text-center p-4">
                <div className="w-16 h-16 bg-navy/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-navy text-2xl font-bold">1000+</span>
                </div>
                <h3 className="font-semibold text-navy">Happy Clients</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
