import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const Dealers = () => {
  return (
    <section id="dealers" className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy text-center mb-8 animate-fade-in-up">
          Manufacturers & Dealers in Laboratory Glassware
        </h2>
        <Card
          className="border-none rounded-xl shadow-sm hover:shadow-lg max-w-4xl mx-auto transition-all duration-300 animate-fade-in-up animation-delay-200"
        >
          <CardContent className="p-6 sm:p-8 md:p-10 text-center">
            <p className="text-lg sm:text-xl text-gray-600 mb-4">
              We are authorized dealers of{" "}
              <span className="font-semibold">
                Duran, Riviera Glass, Rivotek, Ventech Glass, Ransil Glass, Infusil Silica Lab Ware, and N.S. Dimple Thermometers
              </span>
              , offering premium-quality laboratory glassware and scientific products.
            </p>
           
            <p className="text-lg sm:text-xl text-gray-600">
              Trusted by research labs and industries, we ensure reliable supply, competitive pricing, and prompt service.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Dealers;