import { useState, useEffect, useRef } from 'react';
import {
  Instagram,
  Github,
  MessageSquareText,
  Linkedin,
} from 'lucide-react';
import downloadLogo from './download.png'; 
import { Link } from 'react-router-dom';

export default function RejouiceFooter() {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const footerRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, []);

  const fadeInUpClass = (delay = 0) =>
    `transform transition-all duration-1000 delay-${delay} ${
      isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
    }`;

  return (
    <footer
      ref={footerRef}
      className="relative w-full bg-white text-black py-10 overflow-hidden"
    >
      <div className="mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-12 gap-4 mt-4">
          <div className="col-span-12 md:col-span-6 mb-12 md:mb-0">
            <h2 className={`text-2xl md:text-3xl lg:text-4xl font-bold mb-6 ${fadeInUpClass(100)}`}>
              Do it once. Do it right.
            </h2>

            <div className={fadeInUpClass(150)}>
              <p className="text-xs mb-2">Sign up for our newsletter (No spam)</p>
              <div className="relative max-w-md mb-6">
                <input
                  ref={inputRef}
                  type="email"
                  placeholder="Email"
                  className="w-full bg-transparent border-b border-gray-400 py-1 focus:outline-none focus:border-black transition-colors text-sm"
                />
                <button
                  className="absolute right-0 top-1/2 transform -translate-y-1/2"
                  aria-label="Subscribe"
                  title="Subscribe"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>

            {/* ✅ Updated with your logo */}
            <div className={`flex items-center gap-3 mb-4 ${fadeInUpClass(200)}`}>
              <img src={downloadLogo} alt="Edutou Logo" className="w-10 h-10" />
              <span className="text-lg font-semibold">Edutou</span>
            </div>

            <p className={`text-xs text-gray-600 mb-8 ${fadeInUpClass(250)}`}>
              © 2025 EDUTOU Skill Academy. All rights reserved.
            </p>
          </div>

          <div className={`col-span-12 md:col-span-6 ${fadeInUpClass(200)}`}>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <div className="text-right">
                  <Link to="/" className="block hover:text-gray-600 transition-colors text-sm mb-2">Home</Link>
        
                  <Link to="/about" className="block hover:text-gray-600 transition-colors text-sm mb-2">About</Link>
                  <Link to="/PROJECTS" className="block hover:text-gray-600 transition-colors text-sm mb-2">Services</Link>
                  <Link to="/contact" className="block hover:text-gray-600 transition-colors text-sm">Contact</Link>
                </div>
              </div>

              <div className="text-right">
                <Link to="/terms" className="block hover:text-gray-600 transition-colors text-sm mb-2">Terms & Conditions</Link>
                <Link to="/Privacy" className="block hover:text-gray-600 transition-colors text-sm mb-2">Privacy Policy</Link>
                <Link to="/Refund" className="block hover:text-gray-600 transition-colors text-sm mb-2">Refund Policy</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-end mt-12 gap-6 pr-2">
          <a href="https://www.instagram.com/edutou.in/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition">
            <Instagram className="w-5 h-5" />
          </a>
          <a href="https://wa.me/9080469741" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition">
            <MessageSquareText className="w-5 h-5" />
          </a>
           <a href= "https://www.linkedin.com/company/edutou-skill-academy/ " target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition">
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}