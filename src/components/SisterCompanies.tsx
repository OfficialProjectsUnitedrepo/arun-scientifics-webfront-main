
import React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Mail } from "lucide-react";

const sisterCompanies = [
  {
    name: "Bharat Lab Glass Works",
    description: "Specialists in lab glassware manufacturing with expertise in custom scientific glassware fabrication and repairs.",
    email: "bharathlabglassworks@gmail.com"
  },
  {
    name: "Abhay Scientifics",
    description: "Serving quality scientific equipment needs with a focus on precision instruments and calibration services.",
    email: "abhayscientifics@gmail.com"
  }
];

const SisterCompanies = () => {
  return (
    <section id="sisters" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-navy text-center mb-8">
          Sister Companies
        </h2>
        <p className="text-lg text-center max-w-3xl mx-auto mb-12">
          Our family of companies works together to provide comprehensive solutions for all laboratory and scientific needs.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {sisterCompanies.map((company, index) => (
            <Card key={index} className="card-hover border-none">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-navy mb-3">{company.name}</h3>
                <p className="text-gray-600">{company.description}</p>
              </CardContent>
              <CardFooter className="px-6 pb-6 pt-0">
                <a 
                  href={`mailto:${company.email}`}
                  className="flex items-center text-navy hover:text-coral transition-colors"
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
