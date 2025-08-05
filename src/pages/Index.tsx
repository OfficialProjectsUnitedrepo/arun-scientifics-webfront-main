import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Products from "../components/Products";
import SisterCompanies from "../components/SisterCompanies";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Dealers from "@/components/Dealers";
import Founders from "@/components/Founders";
import Gallery from "@/components/Gallery";

const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-[#1a2a44] to-[#003366] z-50">
      <div className="text-center">
        <div className="relative w-32 h-32 mx-auto mb-8">
          {/* Glassware-inspired animation with orbiting vials */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-24 h-24 border-4 border-[#ff6b6b]/50 border-t-[#ff6b6b] rounded-full animate-spin-slow"></div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 border-4 border-white/50 border-t-white rounded-full animate-spin-reverse"></div>
          </div>
          <div className="absolute top-2 left-2 w-6 h-6 bg-[#ff6b6b] rounded-full animate-bounce animation-delay-100"></div>
          <div className="absolute bottom-2 right-2 w-6 h-6 bg-white rounded-full animate-bounce animation-delay-300"></div>
        </div>
        <h2 className="text-3xl font-bold text-white font-serif tracking-wide animate-fade-in">
          Arun Scientifics
        </h2>
        <p className="text-sm sm:text-base text-gray-200 mt-3 animate-fade-in animation-delay-200">
          Precision Solutions for Scientific Excellence
        </p>
      </div>
      <style >{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        @keyframes spin-reverse {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0deg);
          }
        }
        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }
        .animate-spin-reverse {
          animation: spin-reverse 2.5s linear infinite;
        }
        .animate-bounce {
          animation: bounce 1.5s ease-in-out infinite;
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }
        .animation-delay-100 {
          animation-delay: 100ms;
        }
        .animation-delay-200 {
          animation-delay: 200ms;
        }
        .animation-delay-300 {
          animation-delay: 300ms;
        }
      `}</style>
    </div>
  );
};

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadComponents = async () => {
      try {
        // Simulate async loading of components
        await new Promise((resolve) => setTimeout(resolve, 2500));
        setIsLoading(false);
      } catch (error) {
        console.error("Error loading components:", error);
        setIsLoading(false);
      }
    };

    loadComponents();
  }, []);

  return (
    <div className="min-h-screen">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Navbar />
          <main>
            <Hero />
            <About />
            <Dealers />
            <Gallery />
            <Products />
            <SisterCompanies />

            <Founders />
            <Contact />
          </main>
          <Footer />
        </>
      )}
    </div>
  );
};

export default Index;