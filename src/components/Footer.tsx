import React from "react";

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gradient-to-r from-navy to-[#003366] text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Arun Scientifics</h3>
            <p className="text-gray-300 mb-6">
              Delivering quality laboratory glassware and scientific requisites for research and pharmaceutical industries since 2000.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  className="text-gray-300 hover:text-gold transition-colors"
                  onClick={() => scrollToSection("about")}
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  className="text-gray-300 hover:text-gold transition-colors"
                  onClick={() => scrollToSection("products")}
                >
                  Products
                </button>
              </li>
              <li>
                <button
                  className="text-gray-300 hover:text-gold transition-colors"
                  onClick={() => scrollToSection("sisters")}
                >
                  Sister Companies
                </button>
              </li>
              <li>
                <button
                  className="text-gray-300 hover:text-gold transition-colors"
                  onClick={() => scrollToSection("contact")}
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Contact</h4>
            <address className="not-italic text-gray-300 space-y-2">
              <p>
                Hyderabad, Telangana, India
              </p>
              <p>
                <a href="mailto:arunscientifics@gmail.com" className="hover:text-gold transition-colors">
                  arunscientifics@gmail.com
                </a>
              </p>
              <p>23082421 / 23082429</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-white/20 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Arun Scientifics. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-gold transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-gold transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
