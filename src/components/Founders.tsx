import React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Phone, Linkedin, Twitter } from "lucide-react";

const founders = [
  {
    name: "K Suresh Reddy",
    title: "Founder",
    contact: "9949966322",
    image: "https://via.placeholder.com/150",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
  },
  {
    name: "Arun Reddy",
    title: "Managing Director",
    contact: "9999892199",
    image: "https://via.placeholder.com/150",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
  },
];

const Founders = () => {
  return (
    <section id="founders" className="py-16 sm:py-20 lg:py-24 bg-white relative overflow-hidden">
      {/* Subtle Background Effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,51,102,0.05)_0%,_transparent_70%)] z-0"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy text-center mb-8 animate-fade-in-up tracking-tight">
          Our Founders
        </h2>
        <p className="text-lg sm:text-xl text-center max-w-3xl mx-auto mb-12 text-gray-600 animate-fade-in-up animation-delay-200">
          Meet the visionary leaders driving our mission to deliver excellence in laboratory glassware and scientific solutions.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
          {founders.map((founder, index) => (
            <Card
              key={index}
              className="border-none rounded-xl shadow-sm hover:shadow-lg transform transition-all duration-300 hover:-translate-y-2 animate-fade-in-up bg-white/95"
              style={{ animationDelay: `${(index + 3) * 100}ms` }}
            >
              <CardContent className="p-6 text-center">
                <div className="relative inline-block">
                  <img
                    src={founder.image}
                    alt={founder.name}
                    className="w-32 h-32 sm:w-36 sm:h-36 rounded-full mx-auto mb-4 object-cover border-2 border-coral transition-transform duration-300 hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-coral/20 to-navy/20 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-navy mb-1">{founder.name}</h3>
                <p className="text-gray-600 text-base sm:text-lg mb-3">{founder.title}</p>
              </CardContent>
              <CardFooter className="px-6 pb-6 pt-0 flex justify-center space-x-4">
                <a
                  href={`tel:${founder.contact}`}
                  className="flex items-center text-navy hover:text-coral transition-colors duration-200 text-sm sm:text-base"
                  aria-label={`Call ${founder.name} at ${founder.contact}`}
                >
                  <Phone size={18} className="mr-2" />
                  <span>{founder.contact}</span>
                </a>
                <div className="flex space-x-3">
                 
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Founders;