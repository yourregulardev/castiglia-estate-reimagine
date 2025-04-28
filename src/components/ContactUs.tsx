
import React, { useState } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/hooks/use-toast';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the form data to your backend or a service
    
    // Show success message
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you shortly.",
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="section-title">
          <h2>Contact Us</h2>
          <p>Get in touch with our expert team today</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <h3 className="text-2xl font-serif">How Can We Help You?</h3>
            <p className="text-lg text-gray-600">
              Whether you're looking to buy, sell, or simply have questions about the real estate market, our team is here to help. Contact us today to schedule a consultation.
            </p>
            
            <div className="space-y-4 mt-8">
              <div className="flex items-center gap-4">
                <div className="bg-gold p-3 rounded-full">
                  <Phone className="text-navy w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold">Phone</h4>
                  <p>(555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="bg-gold p-3 rounded-full">
                  <Mail className="text-navy w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold">Email</h4>
                  <p>info@castigliaassociates.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="bg-gold p-3 rounded-full">
                  <MapPin className="text-navy w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold">Office</h4>
                  <p>123 Real Estate Blvd, Suite 100<br />New York, NY 10001</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h4 className="font-bold mb-2">Office Hours</h4>
              <p>Monday - Friday: 9:00 AM - 6:00 PM<br />Saturday: 10:00 AM - 4:00 PM<br />Sunday: By Appointment Only</p>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-serif mb-6">Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-navy"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-navy"
                  placeholder="john@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-navy"
                  placeholder="(555) 123-4567"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-navy"
                  placeholder="How can we help you?"
                />
              </div>
              
              <Button type="submit" className="w-full bg-navy hover:bg-navy-light text-white font-medium">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
