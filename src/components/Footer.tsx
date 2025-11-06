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
    `transform transition-all duration-1000 delay-${delay} ${isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
    }`;

  return (
    <footer
      ref={footerRef}
      className="relative w-full bg-white text-black py-8 overflow-hidden"
    >
      <div className="mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-12 gap-4 mt-4">
          <div className="col-span-12 md:col-span-6 mb-8 md:mb-0">
            <h2 className={`text-3xl md:text-5xl font-bold section-heading mb-4 ${fadeInUpClass(100)}`} style={{ lineHeight: '1.2' }}>
              Do <span className="text-black">it</span> <span className="text-orange-500">once</span>. Do <span className="text-black">it</span> <span className="text-orange-500">right</span>.
            </h2>

            <div className={fadeInUpClass(150)}>
              <p className="text-sm caption-text mb-2">Sign up for our newsletter (No spam)</p>
              <div className="relative max-w-md mb-4">
                <input
                  ref={inputRef}
                  type="email"
                  placeholder="Email"
                  className="w-full bg-transparent border-b border-gray-400 py-1 focus:outline-none focus:border-black transition-colors text-base"
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

            {/*  Updated with your logo */}
            <div className={`flex items-center gap-2 mb-3 ${fadeInUpClass(200)}`}>
              <img src={downloadLogo} alt="Edutou Logo" className="w-8 h-8" />
              <span className="text-lg subheading">Edutou</span>
            </div>

            <p className={`text-sm text-gray-600 mb-6 caption-text ${fadeInUpClass(250)}`}>
              © 2025 EDUTOU Skill Academy. All rights reserved.
            </p>
          </div>

          <div className={`col-span-12 md:col-span-6 ${fadeInUpClass(200)}`}>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <div className="text-right">
                  <Link to="/" className="block hover:text-gray-600 transition-colors text-sm mb-2 body-text">Home</Link>

                  <Link to="/about" className="block hover:text-gray-600 transition-colors text-sm mb-2 body-text">About</Link>
                  <Link to="/PROJECTS" className="block hover:text-gray-600 transition-colors text-sm mb-2 body-text">Services</Link>
                  <Link to="/contact" className="block hover:text-gray-600 transition-colors text-sm body-text">Contact</Link>
                </div>
              </div>

              <div className="text-right">
                <Link to="/terms" className="block hover:text-gray-600 transition-colors text-sm mb-2 body-text">Terms & Conditions</Link>
                <Link to="/Privacy" className="block hover:text-gray-600 transition-colors text-sm mb-2 body-text">Privacy Policy</Link>
                <Link to="/Refund" className="block hover:text-gray-600 transition-colors text-sm mb-2 body-text">Refund Policy</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-end mt-8 gap-4 pr-1">
          <a href="https://www.instagram.com/edutou.in/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition">
            <Instagram className="w-5 h-5" />
          </a>
          <a href="https://wa.me/9080469741" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition">
            <MessageSquareText className="w-5 h-5" />
          </a>
          <a href="https://www.linkedin.com/company/edutou-skill-academy/ " target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition">
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}