import React, { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    toast({
      title: "Message Sent",
      description: "Thank you for contacting us. We'll get back to you soon!",
    });
    setFormData({ name: "", email: "", message: "" });
  };
  
  return (
    <section id="contact" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-navy text-center mb-8">
          Contact Us
        </h2>
        <p className="text-lg text-center max-w-3xl mx-auto mb-12">
          Have questions or need more information about our products? Get in touch with our team.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-xl font-bold text-navy mb-4">Send us a message</h3>
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
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-navy"
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
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-navy"
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
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-navy"
                />
              </div>
              
              <button
                type="submit"
                className="btn btn-primary w-full"
              >
                Send Message
              </button>
            </form>
          </div>
          
          <div className="bg-navy text-white p-6 rounded-xl">
            <h3 className="text-xl font-bold mb-6">Our Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <Mail className="mr-4 mt-1" />
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <a href="mailto:arunscientifics@gmail.com" className="text-gray-200 hover:text-gold transition-colors">
                    arunscientifics@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="mr-4 mt-1" />
                <div>
                  <h4 className="font-semibold">Phone</h4>
                  <p className="text-gray-200">23082421 / 23082429 / 29883569</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <MapPin className="mr-4 mt-1" />
                <div>
                  <h4 className="font-semibold">Address</h4>
                  <p className="text-gray-200">
                    H.No. 47-13/2/B, Sri Sai Colony, Balanagar Township, Hyderabad-500037, Telangana
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h4 className="font-semibold mb-2">Business Hours</h4>
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
