import React from "react";
import { Mail, Phone, MapPin, Instagram, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gradient-to-r from-navy to-[#003366] text-white pt-12 pb-6 relative overflow-hidden">
      {/* Subtle Background Effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.05)_0%,_transparent_70%)] z-0"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-10">
          {/* Company Info */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-2 animate-fade-in-up">
            <h3 className="text-2xl sm:text-3xl font-extrabold mb-4 tracking-tight">Arun Scientifics</h3>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-6 max-w-md">
              Delivering quality laboratory glassware and scientific requisites for research and pharmaceutical industries since 1994.
            </p>
            {/* Social Media Icons */}
            {/* <div className="flex space-x-4 mt-4">
              <a
                href="https://linkedin.com"
                className="text-gray-300 hover:text-gold transition-colors duration-200"
                aria-label="Visit our LinkedIn page"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://twitter.com"
                className="text-gray-300 hover:text-gold transition-colors duration-200"
                aria-label="Visit our Twitter page"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://instagram.com"
                className="text-gray-300 hover:text-gold transition-colors duration-200"
                aria-label="Visit our Instagram page"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram size={20} />
              </a>
            </div> */}
          </div>

          {/* Quick Links */}
          <div className="animate-fade-in-up animation-delay-200">
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {["about", "products",  "dealers",  "contact"].map((item, index) => (
                <li key={index}>
                  <button
                    className="text-gray-300 hover:text-gold transition-colors duration-200 text-base hover:underline"
                    onClick={() => scrollToSection(item)}
                    aria-label={`Go to ${item === "sisters" ? "Sister Companies" : item.charAt(0).toUpperCase() + item.slice(1)} section`}
                  >
                    {item === "sisters" ? "Sister Companies" : item.charAt(0).toUpperCase() + item.slice(1)}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="animate-fade-in-up animation-delay-400">
            <h4 className="text-xl font-semibold mb-4">Contact</h4>
            <address className="not-italic text-gray-300 space-y-3 text-base">
              <p className="flex items-center">
                <MapPin size={18} className="mr-2" />
                Hyderabad, Telangana, India
              </p>
              <p className="flex items-center">
                <Mail size={18} className="mr-2" />
                <a
                  href="mailto:arunscientifics@gmail.com"
                  className="hover:text-gold transition-colors duration-200"
                  aria-label="Email Arun Scientifics"
                >
                  arunscientifics@gmail.com
                </a>
              </p>
              <p className="flex items-center">
                <Phone size={18} className="mr-2" />
                040-23082421 /  040-23082429 / 040-29883569
              </p>
            </address>
          </div>
        </div>

        <div className="border-t border-white/20 pt-6 flex flex-col sm:flex-row justify-between items-center animate-fade-in-up animation-delay-600">
          <p className="text-gray-400 text-sm sm:text-base mb-4 sm:mb-0">
            &copy; {new Date().getFullYear()} Arun Scientifics. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm sm:text-base">
              Powered by Inficore Software Solutions Pvt Ltd
            </p>
          <div className="flex space-x-4">
            <a
              href="#"
              className="text-gray-400 hover:text-gold transition-colors duration-200 text-sm sm:text-base hover:underline"
              aria-label="Privacy Policy"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-gold transition-colors duration-200 text-sm sm:text-base hover:underline"
              aria-label="Terms of Service"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;