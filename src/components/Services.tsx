
import React from 'react';
import { Building, Home, Users, Search } from 'lucide-react';

const Services = () => {
  const servicesList = [
    {
      icon: <Home className="w-12 h-12 text-gold" />,
      title: "Residential Sales",
      description: "From charming starter homes to luxury estates, our agents provide expert guidance for all your residential property needs."
    },
    {
      icon: <Building className="w-12 h-12 text-gold" />,
      title: "Commercial Real Estate",
      description: "We help businesses find the perfect location with our extensive portfolio of office spaces, retail properties, and industrial facilities."
    },
    {
      icon: <Users className="w-12 h-12 text-gold" />,
      title: "Property Management",
      description: "Our comprehensive property management services ensure that your investment properties are well-maintained and profitable."
    },
    {
      icon: <Search className="w-12 h-12 text-gold" />,
      title: "Market Research",
      description: "Stay ahead with our detailed market analysis, providing valuable insights into property values and investment opportunities."
    }
  ];

  return (
    <section id="services" className="section">
      <div className="container">
        <div className="section-title">
          <h2>Our Services</h2>
          <p>Comprehensive real estate services tailored to meet your needs</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesList.map((service, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow flex flex-col items-center text-center"
            >
              <div className="mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-navy">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
