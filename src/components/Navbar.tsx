
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll event to change navbar style
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Toggle the mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close the menu when a link is clicked
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="container flex justify-between items-center">
        {/* Logo */}
        <a href="#home" className="flex items-center" onClick={closeMenu}>
          <h1 className={`font-serif font-bold text-2xl ${isScrolled ? 'text-navy' : 'text-white'}`}>
            Castiglia <span className="text-gold">Associates</span>
          </h1>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#home" className={`font-medium ${isScrolled ? 'text-navy hover:text-gold' : 'text-white hover:text-gold'}`}>
            Home
          </a>
          <a href="#about" className={`font-medium ${isScrolled ? 'text-navy hover:text-gold' : 'text-white hover:text-gold'}`}>
            About Us
          </a>
          <a href="#services" className={`font-medium ${isScrolled ? 'text-navy hover:text-gold' : 'text-white hover:text-gold'}`}>
            Services
          </a>
          <a href="#testimonials" className={`font-medium ${isScrolled ? 'text-navy hover:text-gold' : 'text-white hover:text-gold'}`}>
            Testimonials
          </a>
          <a href="#contact" className={`font-medium ${isScrolled ? 'text-navy hover:text-gold' : 'text-white hover:text-gold'}`}>
            Contact Us
          </a>
          <Button className="bg-gold hover:bg-gold-light text-navy font-medium">
            Contact an Agent
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className={isScrolled ? 'text-navy' : 'text-white'} size={24} />
          ) : (
            <Menu className={isScrolled ? 'text-navy' : 'text-white'} size={24} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-md py-4 animate-fade-in">
          <div className="container flex flex-col space-y-4">
            <a href="#home" className="text-navy hover:text-gold font-medium" onClick={closeMenu}>
              Home
            </a>
            <a href="#about" className="text-navy hover:text-gold font-medium" onClick={closeMenu}>
              About Us
            </a>
            <a href="#services" className="text-navy hover:text-gold font-medium" onClick={closeMenu}>
              Services
            </a>
            <a href="#testimonials" className="text-navy hover:text-gold font-medium" onClick={closeMenu}>
              Testimonials
            </a>
            <a href="#contact" className="text-navy hover:text-gold font-medium" onClick={closeMenu}>
              Contact Us
            </a>
            <Button className="bg-gold hover:bg-gold-light text-navy font-medium w-full" onClick={closeMenu}>
              Contact an Agent
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
