import { useState, useEffect, useRef } from 'react';

export default function RejouiceFooter() {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [logoVisible, setLogoVisible] = useState(false);
  const footerRef = useRef(null);
  const logoRef = useRef(null);
  const inputRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
        if (entry.isIntersecting) {
          setTimeout(() => {
            setLogoVisible(true);
          }, 1000); // 1 second delay before animation starts
        } else {
          setLogoVisible(false);
        }
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
  
  const fadeInUpClass = (delay = 0) => `transform transition-all duration-1000 delay-${delay} ${
    isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
  }`;

  return (
    <footer 
      ref={footerRef}
      className="relative w-full bg-white text-black py-10 overflow-hidden"
    >
      <div className="mx-auto px-6 md:px-12 lg:px-16">
        {/* Top row with just the logo */}
        <div className={`mb-8 ${fadeInUpClass()}`}>
          
        </div>
        
        {/* Main content layout */}
        <div className="grid grid-cols-12 gap-4 mt-4">
          {/* Left column - Tagline and newsletter */}
          <div className="col-span-12 md:col-span-6 mb-12 md:mb-0">
            <h2 className={`text-2xl md:text-3xl lg:text-4xl font-bold mb-8 ${fadeInUpClass(100)}`}>
              Do it once. Do it right.
            </h2>
            
            <div className={fadeInUpClass(300)}>
              <p className="text-xs mb-2">Sign up for our newsletter (No spam)</p>
              <div className="relative max-w-md">
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
        
        {/* Giant Edutou text with slower animation */}
        <div className="relative mt-12 mb-6 w-full overflow-hidden" ref={logoRef}>
          <div 
            className={`w-full transition-all ${
              logoVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'
            }`}
            style={{
              transition: 'transform 2s cubic-bezier(0.16, 1, 0.3, 1), opacity 2s ease-out',
              transform: logoVisible ? 'translateY(0)' : 'translateY(-100%)'
            }}
          >
            <h1 className="text-[10vw] font-bold leading-none tracking-tighter text-center w-full 
              text-orange-500 p-4 md:p-6 lg:p-8"
              style={{
                WebkitTextStroke: '3px black',
                textShadow: '4px 4px 0px rgba(0,0,0,0.2)'
              }}
            >
              EDUTOU
            </h1>
          </div>
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