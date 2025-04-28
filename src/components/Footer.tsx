
import React from 'react';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-navy text-white pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-serif mb-4">Castiglia <span className="text-gold">Associates</span></h3>
            <p className="mb-4 text-gray-300">
              A premier real estate firm offering exceptional service and expertise in residential and commercial properties.
            </p>
            <p className="text-sm text-gray-400">
              Real Estate License #AB12345
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-300 hover:text-gold transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-gold transition-colors">About Us</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-gold transition-colors">Services</a></li>
              <li><a href="#testimonials" className="text-gray-300 hover:text-gold transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-gold transition-colors">Contact Us</a></li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-lg font-medium mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="text-gray-300 hover:text-gold transition-colors">Residential Sales</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-gold transition-colors">Commercial Real Estate</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-gold transition-colors">Property Management</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-gold transition-colors">Market Research</a></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-medium mb-4">Contact Info</h4>
            <ul className="space-y-2 text-gray-300">
              <li>123 Real Estate Blvd, Suite 100</li>
              <li>New York, NY 10001</li>
              <li>(555) 123-4567</li>
              <li>info@castigliaassociates.com</li>
            </ul>
            
            {/* Social Media Links */}
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-300 hover:text-gold" aria-label="Facebook">
                <Facebook />
              </a>
              <a href="#" className="text-gray-300 hover:text-gold" aria-label="Twitter">
                <Twitter />
              </a>
              <a href="#" className="text-gray-300 hover:text-gold" aria-label="Instagram">
                <Instagram />
              </a>
              <a href="#" className="text-gray-300 hover:text-gold" aria-label="LinkedIn">
                <Linkedin />
              </a>
            </div>
          </div>
        </div>
        
        {/* Divider */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Castiglia Associates. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0 text-sm text-gray-400">
              <a href="#" className="hover:text-gold">Privacy Policy</a>
              <a href="#" className="hover:text-gold">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
