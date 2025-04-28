
import React from 'react';

const AboutUs = () => {
  return (
    <section id="about" className="section bg-cream">
      <div className="container">
        <div className="section-title">
          <h2>About Castiglia Associates</h2>
          <p>A boutique real estate firm with decades of combined experience</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg">
              Founded in 2005, Castiglia Associates has established itself as a leader in the real estate market. Our team of experienced professionals is dedicated to providing exceptional service to our clients.
            </p>
            <p className="text-lg">
              With our deep knowledge of local markets and trends, we offer insights that help our clients make informed decisions. Whether you're buying, selling, or investing, we're here to guide you every step of the way.
            </p>
            <p className="text-lg">
              At Castiglia Associates, we believe in building lasting relationships with our clients. Our success is measured by their satisfaction and the trust they place in us.
            </p>

            <div className="grid grid-cols-2 gap-8 mt-8">
              <div className="text-center">
                <h3 className="text-3xl font-bold text-navy">200+</h3>
                <p className="text-gray-600">Properties Sold</p>
              </div>
              <div className="text-center">
                <h3 className="text-3xl font-bold text-navy">15+</h3>
                <p className="text-gray-600">Years of Experience</p>
              </div>
              <div className="text-center">
                <h3 className="text-3xl font-bold text-navy">98%</h3>
                <p className="text-gray-600">Client Satisfaction</p>
              </div>
              <div className="text-center">
                <h3 className="text-3xl font-bold text-navy">$500M+</h3>
                <p className="text-gray-600">In Property Value</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square overflow-hidden rounded-md shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?ixlib=rb-4.0.3&auto=format&fit=crop&q=80"
                alt="Luxury property" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-2/3 aspect-square overflow-hidden rounded-md shadow-xl border-4 border-white">
              <img 
                src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&q=80"
                alt="Modern building" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
