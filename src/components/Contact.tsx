import React, { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    toast({
      title: "Message Sent",
      description: "Thank you for contacting us. We'll get back to you soon!",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy text-center mb-8 animate-fade-in-up">
          Contact Us
        </h2>
        <p className="text-lg sm:text-xl text-center max-w-3xl mx-auto mb-12 text-gray-600 animate-fade-in-up animation-delay-200">
          Have questions or need more information about our products? Get in touch with our team.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {/* Contact Form */}
          <div
            className="bg-white p-6 sm:p-8 md:p-10 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 animate-fade-in-up animation-delay-400"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-navy mb-4">Send us a message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-navy transition-all duration-200"
                  aria-required="true"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-navy transition-all duration-200"
                  aria-required="true"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-navy transition-all duration-200"
                  aria-required="true"
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-navy text-white font-semibold rounded-full hover:bg-navy/80 transition-all duration-300 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-navy focus:ring-offset-2"
                aria-label="Send Message"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information with Map */}
          <div
            className="bg-navy text-white p-6 sm:p-8 md:p-10 rounded-xl animate-fade-in-up animation-delay-600"
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-6">Our Contact Information</h3>

            <div className="space-y-6">
              <div className="flex items-start">
                <Mail className="mr-4 mt-1" size={20} />
                <div>
                  <h4 className="font-semibold text-lg">Email</h4>
                  <a
                    href="mailto:arunscientifics@gmail.com"
                    className="text-gray-200 hover:text-gold transition-colors duration-200"
                    aria-label="Email Arun Scientifics"
                  >
                    arunscientifics@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <Phone className="mr-4 mt-1" size={20} />
                <div>
                  <h4 className="font-semibold text-lg">Phone</h4>
                  <p className="text-gray-200">040-23082421 / 040-23082429 / 040-29883569</p>
                </div>
              </div>

              <div className="flex items-start">
                <MapPin className="mr-4 mt-1" size={20} />
                <div>
                  <h4 className="font-semibold text-lg">Address</h4>
                  <p className="text-gray-200">
                    H.No. 47-13/2/B, Sri Sai Colony, Balanagar Township, Hyderabad-500037, Telangana
                  </p>
                </div>
              </div>

              {/* Google Map */}
              <div className="mt-6">
                <h4 className="font-semibold text-lg mb-2">Our Location</h4>
                <div className="relative w-full h-64 rounded-md overflow-hidden shadow-sm">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.177529378626!2d78.43705831488426!3d17.451318087642007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93e5a7c6e6ab%3A0x1a6e6b7c6b6a6b7c!2sSri%20Sai%20Colony%2C%20Balanagar%2C%20Hyderabad%2C%20Telangana%20500037%2C%20India!5e0!3m2!1sen!2sin!4v1698765432109!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Arun Scientifics Location"
                    className="grayscale-[10%] contrast-125"
                  ></iframe>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="font-semibold text-lg mb-2">Business Hours</h4>
              <p className="text-gray-200">Monday - Saturday: 9:00 AM - 6:00 PM</p>
              <p className="text-gray-200">Sunday: Closed</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;