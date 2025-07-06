import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const products = [
  {
    name: "Beakers",
    description: "Low form glass beakers with spout in multiple sizes",
    features: ["Borosilicate glass", "Heat resistant", "Graduated markings"]
  },
  {
    name: "Volumetric Flasks",
    description: "Class A and B precision volumetric flasks",
    features: ["Precise measurements", "Calibrated", "Various capacities"]
  },
  {
    name: "Burettes",
    description: "PTFE key stopcock and screwcock types",
    features: ["Accurate graduation", "Smooth flow control", "Durable construction"]
  },
  {
    name: "Test Tubes",
    description: "Various sizes of borosilicate test tubes",
    features: ["Heat resistant", "Uniform wall thickness", "With or without rim"]
  },
  {
    name: "Condensers",
    description: "Different types of laboratory condensers",
    features: ["Efficient cooling", "Precision ground joints", "Multiple designs"]
  },
  {
    name: "Laboratory Bottles",
    description: "Reagent bottles with ground glass stoppers",
    features: ["Amber or clear glass", "Airtight sealing", "Chemical resistant"]
  }
];

const Products = () => {
  return (
    <section id="products" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-navy text-center mb-8">
          Our Products
        </h2>
        <p className="text-lg text-center max-w-3xl mx-auto mb-12">
          We offer a comprehensive range of high-quality laboratory glassware and scientific equipment.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <Card key={index} className="transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border-none rounded-xl">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold text-navy mb-3">{product.name}</h3>
                <p className="text-gray-600">{product.description}</p>
                <ul className="space-y-2 mt-4">
                  {product.features.map((feature, i) => (
                    <li key={i} className="flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-coral mr-2"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Looking for something specific? Get in touch with our team for customized solutions.
          </p>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn btn-outline"
          >
            Request Custom Quote
          </button>
        </div>
      </div>
    </section>
  );
};

export default Products;
