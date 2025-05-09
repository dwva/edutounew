import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {/* Brand Section */}
          <div>
            <div className="flex items-center mb-2">
              <Brain className="h-6 w-6 text-indigo-300 mr-2" />
              <span className="font-bold text-lg text-white">EDUTOU</span>
            </div>
            <p className="text-white text-sm mb-2">
              Redefining Education with AI-driven learning.
            </p>
            
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="font-semibold text-base mb-2">Quick Links</h3>
            <ul className="space-y-1 text-sm">
              <li><Link to="/" className="text-white hover:text-indigo-300">Home</Link></li>
              <li><Link to="/about" className="text-white hover:text-indigo-300">About Us</Link></li>
              <li><Link to="/courses" className="text-white hover:text-indigo-300">Courses</Link></li>
              <li><Link to="/contact" className="text-white hover:text-indigo-300">Contact</Link></li>
            </ul>
          </div>

          {/* Our Courses Section */}
          <div>
            <h3 className="font-semibold text-base mb-2">Our Workshop</h3>
            <ul className="space-y-1 text-sm">
              <li><Link to="/courses/full-stack-foundation" className="text-white hover:text-indigo-300">Full Stack Foundation</Link></li>
            </ul>
          </div>

          {/* Policy Section */}
          <div>
            <h3 className="font-semibold text-base mb-2">Policies</h3>
            <ul className="space-y-1 text-sm">
              <li><Link to="/terms" className="text-white hover:text-indigo-300">Terms & Conditions</Link></li>
              <li><Link to="/privacy" className="text-white hover:text-indigo-300">Privacy Policy</Link></li>
              <li><Link to="/refund" className="text-white hover:text-indigo-300">Refund Policy</Link></li>
            </ul>
          </div>

          {/* Contact Us Section */}
          <div>
            <h3 className="font-semibold text-base mb-2">Contact Us</h3>
            <ul className="space-y-1 text-sm">
              <li className="flex items-center">
                <Mail className="h-4 w-4 mr-1" />
                <span>edutouskillacademy@gmail.com</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-4 w-4 mr-1" />
                <span>+91 90804 69741</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-4 w-4 mr-1 mt-1" />
                <span className="text-xs">Mr. RISHI S, Thirunageswaram, Kumbakonam-612204</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="border-t border-white mt-4 pt-4 text-center text-xs">
          <p>&copy; {new Date().getFullYear()} EDUTOU Skill Academy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
