
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
            <div className="space-y-6 text-gray-300">
              {/* Shelton Office */}
              <div>
                <h5 className="font-medium mb-2">Shelton Office</h5>
                <ul className="space-y-1">
                  <li>95 Center Street</li>
                  <li>Shelton, CT 06484</li>
                  <li>Tel: (203) 924-9700</li>
                  <li>Fax: (203) 924-9710</li>
                </ul>
              </div>
              
              {/* Stamford Office */}
              <div>
                <h5 className="font-medium mb-2">Stamford Office</h5>
                <ul className="space-y-1">
                  <li>1200 Summer Street, Suite 103</li>
                  <li>Stamford, CT 06905</li>
                  <li>Tel: (475) 328-0748</li>
                  <li>Fax: (203) 323-3329</li>
                </ul>
              </div>
            </div>
            
            {/* Social Media Links */}
            <div className="flex space-x-4 mt-6">
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

