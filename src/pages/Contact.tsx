import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    course: 'none'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this data to your backend
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      course: 'none'
    });
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-white text-black py-20 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Have questions about our courses or want to enroll? We're here to help!
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Get in Touch</h2>
              <p className="text-gray-700 mb-8">
                Fill out the form below and our team will get back to you as soon as possible. We're excited to hear from you and help you start your learning journey!
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-[var(--color-brand-dark)] mt-1 mr-4" />
                  <div>
                    <h3 className="font-bold text-gray-900">Email Us</h3>
                    <p className="text-gray-700">edutouskillacademy@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-[var(--color-brand-dark)] mt-1 mr-4" />
                  <div>
                    <h3 className="font-bold text-gray-900">Call Us</h3>
                    <p className="text-gray-700">+91 90804 69741</p>
                  </div>
                </div>
                
            
          
              </div>
              
              <div className="bg-white border border-gray-200 p-6 rounded-xl">
                <div className="flex items-center mb-4">
                  <MessageSquare className="h-6 w-6 text-[var(--color-brand-dark)] mr-3" />
                  <h3 className="text-xl font-bold text-gray-900">Live Chat Support</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Need immediate assistance? Our support team is available for live chat during business hours.
                </p>
                <button className="px-4 py-2 bg-[var(--color-brand)] hover:bg-[var(--color-brand-dark)] text-white rounded-lg font-medium transition-colors border border-black">
                  Start Chat
                </button>
              </div>
            </div>
            
            <div>
              <form onSubmit={handleSubmit} className="bg-white border border-gray-200 p-8 rounded-xl">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
                
                <div className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="course" className="block text-sm font-medium text-gray-700 mb-1">
                      Interested Course
                    </label>
                    <select
                      id="course"
                      name="course"
                      value={formData.course}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                    >
                      <option value="none">Select a course (optional)</option>
                      <option value="full-stack-foundation">Full Stack Foundation</option>
          
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-[var(--color-brand)] hover:bg-[var(--color-brand-dark)] text-white rounded-lg font-medium transition-colors flex items-center justify-center border border-black"
                  >
                    <Send className="h-5 w-5 mr-2" />
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>



     
    </div>
  );
};

export default Contact;