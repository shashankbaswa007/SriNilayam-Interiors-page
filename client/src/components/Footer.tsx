import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <img 
                src="/logo.png" 
                alt="SriNilayam Interiors Logo" 
                className="h-40 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed">
              Creating beautiful, functional spaces that reflect your personality and lifestyle. 
              Your dream interior is our passion.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/" className="block text-gray-300 hover:text-orange-500 transition-colors text-sm">
                Home
              </Link>
              <Link to="/about" className="block text-gray-300 hover:text-orange-500 transition-colors text-sm">
                About Us
              </Link>
              <Link to="/services" className="block text-gray-300 hover:text-orange-500 transition-colors text-sm">
                Services
              </Link>
              <Link to="/portfolio" className="block text-gray-300 hover:text-orange-500 transition-colors text-sm">
                Portfolio
              </Link>
              <Link to="/testimonials" className="block text-gray-300 hover:text-orange-500 transition-colors text-sm">
                Testimonials
              </Link>
              <Link to="/contact" className="block text-gray-300 hover:text-orange-500 transition-colors text-sm">
                Contact
              </Link>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Our Services</h3>
            <div className="space-y-2">
              <p className="text-gray-300 text-sm">Residential Interiors</p>
              <p className="text-gray-300 text-sm">Commercial Interiors</p>
              <p className="text-gray-300 text-sm">Modular Kitchens</p>
              <p className="text-gray-300 text-sm">Home Renovations</p>
              <p className="text-gray-300 text-sm">Custom Furniture</p>
              <p className="text-gray-300 text-sm">Furnishings</p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Get In Touch</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin size={16} className="text-orange-500 mt-1 flex-shrink-0" />
                <p className="text-gray-300 text-sm">
                  ZPRoad, Hastinapuram,<br />
                  Hyderabad, Telangana
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-orange-500 flex-shrink-0" />
                <p className="text-gray-300 text-sm">+91 7981841442</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-orange-500 flex-shrink-0" />
                <p className="text-gray-300 text-sm">SriNilayam.Interiors@gmail.com</p>
              </div>
            </div>
            <div className="mt-6">
              <Link
                to="/book-consultation"
                className="inline-block bg-orange-500 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-orange-600 transition-colors"
              >
                Free Consultation
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 SriNilayam Interiors. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-orange-500 text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 text-sm transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;