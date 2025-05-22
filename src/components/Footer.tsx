import { useState, useEffect, useRef } from 'react';
import {
  Instagram,
  Github,
  MessageSquareText, // Used as WhatsApp icon placeholder
} from 'lucide-react';

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
        {/* Main content layout */}
        <div className="grid grid-cols-12 gap-4 mt-4">
          {/* Left column - Tagline and newsletter */}
          <div className="col-span-12 md:col-span-6 mb-12 md:mb-0">
            <h2 className={`text-2xl md:text-3xl lg:text-4xl font-bold mb-6 ${fadeInUpClass(100)}`}>
              Do it once. Do it right.
            </h2>

            {/* Newsletter section directly below tagline */}
            <div className={fadeInUpClass(150)}>
              <p className="text-xs mb-2">Sign up for our newsletter (No spam)</p>
              <div className="relative max-w-md mb-6">
                <input
                  ref={inputRef}
                  type="email"
                  placeholder="Email"
                  className="w-full bg-transparent border-b border-gray-400 py-1 focus:outline-none focus:border-black transition-colors text-sm"
                />
                <button className="absolute right-0 top-1/2 transform -translate-y-1/2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Edutou logo and label */}
            <div className={`flex items-center gap-3 mb-4 ${fadeInUpClass(200)}`}>
              <img src="download.png" alt="Edutou Logo" className="w-10 h-10" />
              <span className="text-lg font-semibold">Edutou</span>
            </div>

            {/* Copyright */}
            <p className={`text-xs text-gray-600 mb-8 ${fadeInUpClass(250)}`}>
              © 2025 EDUTOU Skill Academy. All rights reserved.
            </p>
          </div>

          {/* Right column - Navigation and policies */}
          <div className={`col-span-12 md:col-span-6 ${fadeInUpClass(200)}`}>
            <div className="grid grid-cols-2 gap-8">
              {/* Navigation links */}
              <div>
                <div className="text-right">
                  <a href="#" className="block hover:text-gray-600 transition-colors text-sm mb-2">Home</a>
                  <a href="#" className="block hover:text-gray-600 transition-colors text-sm mb-2">Work</a>
                  <a href="#" className="block hover:text-gray-600 transition-colors text-sm mb-2">About</a>
                  <a href="#" className="block hover:text-gray-600 transition-colors text-sm mb-2">Services</a>
                  <a href="#" className="block hover:text-gray-600 transition-colors text-sm">Contact</a>
                </div>
              </div>

              {/* Policies */}
              <div className="text-right">
                <a href="#" className="block hover:text-gray-600 transition-colors text-sm mb-2">Terms of use</a>
                <a href="#" className="block hover:text-gray-600 transition-colors text-sm mb-2">Terms & Conditions</a>
                <a href="#" className="block hover:text-gray-600 transition-colors text-sm mb-2">Privacy Policy</a>
                <a href="#" className="block hover:text-gray-600 transition-colors text-sm mb-2">Refund Policy</a>
              </div>
            </div>
          </div>
        </div>

        {/* Social Icons Row */}
        <div className="flex justify-end mt-12 gap-6 pr-2">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition">
            <Instagram className="w-5 h-5" />
          </a>
          <a href="https://wa.me/your-number" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition">
            <MessageSquareText className="w-5 h-5" />
          </a>
          <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition">
            <Github className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Fixed "Let's talk" button */}
      <a href="#" className="fixed top-10 right-10 flex items-center space-x-1 text-black hover:opacity-80 transition-opacity z-50 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full border border-gray-200 text-sm">
        <span>Let's talk</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="transform rotate-45">
          <path d="M7 17l10-10M7 7h10v10" />
        </svg>
      </a>
    </footer>
  );
}
