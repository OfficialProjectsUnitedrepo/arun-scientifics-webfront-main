import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const products = [
  {
    name: "Beakers",
    description: "Low form glass beakers with spout in multiple sizes",
    features: ["Borosilicate glass", "Heat resistant", "Graduated markings"],
  },
  {
    name: "Volumetric Flasks",
    description: "Class A and B precision volumetric flasks",
    features: ["Precise measurements", "Calibrated", "Various capacities"],
  },
  {
    name: "Burettes",
    description: "PTFE key stopcock and screwcock types",
    features: ["Accurate graduation", "Smooth flow control", "Durable construction"],
  },
  {
    name: "Test Tubes",
    description: "Various sizes of borosilicate test tubes",
    features: ["Heat resistant", "Uniform wall thickness", "With or without rim"],
  },
  {
    name: "Condensers",
    description: "Different types of laboratory condensers",
    features: ["Efficient cooling", "Precision ground joints", "Multiple designs"],
  },
  {
    name: "Laboratory Bottles",
    description: "Reagent bottles with ground glass stoppers",
    features: ["Amber or clear glass", "Airtight sealing", "Chemical resistant"],
  },
];

const Products = () => {
  return (
    <section id="products" className="py-16 sm:py-20 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy text-center mb-8 animate-fade-in-up">
          Our Products
        </h2>
        <p className="text-lg sm:text-xl text-center max-w-3xl mx-auto mb-12 text-gray-600 animate-fade-in-up animation-delay-200">
          We offer a comprehensive range of high-quality laboratory glassware and scientific equipment.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8">
          {products.map((product, index) => (
            <Card
              key={index}
              className="border-none rounded-xl shadow-sm hover:shadow-lg transform transition-all duration-300 hover:-translate-y-1 animate-fade-in-up"
              style={{ animationDelay: `${(index + 3) * 100}ms` }}
            >
              <CardContent className="p-6 text-center">
                <h3 className="text-xl sm:text-2xl font-bold text-navy mb-3">{product.name}</h3>
                <p className="text-gray-600 text-base sm:text-lg mb-4">{product.description}</p>
                <ul className="space-y-2">
                  {product.features.map((feature, i) => (
                    <li key={i} className="flex items-center justify-center text-gray-600 text-sm sm:text-base">
                      <div className="w-2 h-2 rounded-full bg-coral mr-2"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 animate-fade-in-up animation-delay-600">
          <p className="text-base sm:text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
            Looking for something specific? Get in touch with our team for customized solutions.
          </p>
          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-3 bg-transparent border-2 border-navy text-navy font-semibold rounded-full transition-all duration-300 hover:bg-navy hover:text-white hover:shadow-md focus:outline-none focus:ring-2 focus:ring-navy focus:ring-offset-2 w-full sm:w-auto"
            aria-label="Request Custom Quote"
          >
            Request Custom Quote
          </button>
        </div>
      </div>
    </section>
  );
};

export default Products;