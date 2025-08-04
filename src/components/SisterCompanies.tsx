import React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Mail } from "lucide-react";

const sisterCompanies = [
  {
    name: "Bharat Lab Glass Works",
    description: "Specialists in lab glassware manufacturing with expertise in custom scientific glassware fabrication and repairs.",
    email: "bharathlabglassworks@gmail.com",
  },
  {
    name: "Abhay Scientifics",
    description: "Serving quality scientific equipment needs with a focus on precision instruments and calibration services.",
    email: "abhayscientifics@gmail.com",
  },
];

const SisterCompanies = () => {
  return (
    <section id="sisters" className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy text-center mb-8 animate-fade-in-up">
          Sister Companies
        </h2>
        <p className="text-lg sm:text-xl text-center max-w-3xl mx-auto mb-12 text-gray-600 animate-fade-in-up animation-delay-200">
          Our family of companies works together to provide comprehensive solutions for all laboratory and scientific needs.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
          {sisterCompanies.map((company, index) => (
            <Card
              key={index}
              className="border-none rounded-xl shadow-sm hover:shadow-lg transform transition-all duration-300 hover:-translate-y-1 animate-fade-in-up"
              style={{ animationDelay: `${(index + 3) * 100}ms` }}
            >
              <CardContent className="p-6">
                <h3 className="text-xl sm:text-2xl font-bold text-navy mb-3">{company.name}</h3>
                <p className="text-gray-600 text-base sm:text-lg">{company.description}</p>
              </CardContent>
              <CardFooter className="px-6 pb-6 pt-0">
                <a
                  href={`mailto:${company.email}`}
                  className="flex items-center text-navy hover:text-coral transition-colors duration-200 text-sm sm:text-base"
                  aria-label={`Email ${company.name}`}
                >
                  <Mail size={18} className="mr-2" />
                  <span>{company.email}</span>
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SisterCompanies;