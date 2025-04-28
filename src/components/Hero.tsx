
import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative h-screen flex items-center"
      style={{
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("https://images.unsplash.com/photo-1524230572899-a752b3835840?ixlib=rb-4.0.3&auto=format&fit=crop&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="container">
        <div className="max-w-3xl text-white">
          <h1 className="font-serif font-bold mb-4 animate-fade-in">
            Exceptional Properties, <br />
            Exceptional Service
          </h1>
          <p className="text-xl mb-8 opacity-90 max-w-xl animate-fade-in">
            Castiglia Associates is a premier real estate firm specializing in luxury properties. With our deep market knowledge and personalized service, we help clients make informed decisions.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#contact" className="btn-secondary flex items-center gap-2 animate-fade-in">
              Contact an Agent <ArrowRight size={16} />
            </a>
            <a href="#services" className="btn-primary animate-fade-in">
              Explore Our Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
