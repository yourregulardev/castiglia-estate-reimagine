
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Homeowner",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=150&h=150",
    quote: "Working with Castiglia Associates made selling our home stress-free. Their market knowledge and personalized approach exceeded our expectations. We received multiple offers above asking price!"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Property Investor",
    image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=150&h=150",
    quote: "As an investor, I rely on accurate market insights. Castiglia Associates consistently delivers valuable information that has helped me make profitable investment decisions in competitive markets."
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "First-time Homebuyer",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=150&h=150",
    quote: "Buying our first home seemed overwhelming until we found Castiglia Associates. They guided us through every step with patience and expertise, finding us the perfect home within our budget."
  }
];

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="section bg-navy text-white">
      <div className="container">
        <div className="section-title">
          <h2 className="text-white">What Our Clients Say</h2>
          <p className="text-gray-300">Hear from our satisfied clients about their experience</p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Testimonial Carousel */}
          <div className="relative p-8">
            <div key={testimonials[currentTestimonial].id} className="flex flex-col items-center text-center animate-fade-in">
              <div className="mb-6 w-20 h-20 rounded-full overflow-hidden border-2 border-gold">
                <img 
                  src={testimonials[currentTestimonial].image} 
                  alt={testimonials[currentTestimonial].name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                ))}
              </div>
              
              <blockquote className="text-xl mb-6 italic">
                "{testimonials[currentTestimonial].quote}"
              </blockquote>
              
              <div>
                <h4 className="font-serif text-lg font-medium">{testimonials[currentTestimonial].name}</h4>
                <p className="text-gold">{testimonials[currentTestimonial].role}</p>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-4">
              <button 
                onClick={prevTestimonial}
                className="bg-navy-light hover:bg-gold text-white hover:text-navy w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={24} />
              </button>
              <button 
                onClick={nextTestimonial}
                className="bg-navy-light hover:bg-gold text-white hover:text-navy w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>

          {/* Indicator Dots */}
          <div className="flex justify-center space-x-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full ${
                  index === currentTestimonial ? 'bg-gold' : 'bg-gray-500'
                } transition-colors`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
