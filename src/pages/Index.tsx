
import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Products from "../components/Products";
import SisterCompanies from "../components/SisterCompanies";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Products />
        <SisterCompanies />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
