import React, { useState } from 'react';

const TechStackAnimation = () => {
  // Define the tech logos with their source URLs, alt text, and colors
  const techLogos = [
    { src: 'https://cdn.worldvectorlogo.com/logos/react-2.svg', alt: 'React', color: '#61DAFB' },
    { src: 'https://cdn.worldvectorlogo.com/logos/javascript-1.svg', alt: 'JavaScript', color: '#F7DF1E' },
    { src: 'https://cdn.worldvectorlogo.com/logos/typescript.svg', alt: 'TypeScript', color: '#3178C6' },
    { src: 'https://cdn.worldvectorlogo.com/logos/html-1.svg', alt: 'HTML', color: '#E34F26' },
    { src: 'https://cdn.worldvectorlogo.com/logos/css-3.svg', alt: 'CSS', color: '#1572B6' },
    { src: 'https://cdn.worldvectorlogo.com/logos/tailwind-css-2.svg', alt: 'Tailwind CSS', color: '#06B6D4' },
    { src: 'https://cdn.worldvectorlogo.com/logos/node-js-1.svg', alt: 'Node.js', color: '#339933' },
    { src: 'https://cdn.worldvectorlogo.com/logos/python-5.svg', alt: 'Python', color: '#3776AB' },
    { src: 'https://cdn.worldvectorlogo.com/logos/go-6.svg', alt: 'Go', color: '#00ADD8' },
    { src: 'https://cdn.worldvectorlogo.com/logos/docker-4.svg', alt: 'Docker', color: '#2496ED' },
    { src: 'https://cdn.worldvectorlogo.com/logos/git-icon.svg', alt: 'Git', color: '#F05032' },
    { src: 'https://cdn.worldvectorlogo.com/logos/github-icon-1.svg', alt: 'GitHub', color: '#181717' },
    { src: 'https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg', alt: 'MongoDB', color: '#47A248' },
    { src: 'https://cdn.worldvectorlogo.com/logos/postgresql.svg', alt: 'PostgreSQL', color: '#4169E1' },
    { src: 'https://cdn.worldvectorlogo.com/logos/aws-2.svg', alt: 'AWS', color: '#FF9900' }
  ];

  // Shuffle function to create variation between rows
  const shuffleArray = (array) => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };

  // Create different variations for each row
  const row1Logos = shuffleArray(techLogos);
  const row2Logos = shuffleArray(techLogos);
  const row3Logos = shuffleArray(techLogos);
  const row4Logos = shuffleArray(techLogos);

  // Logo component with error handling
  const Logo = ({ logo, index }) => {
    const [imgError, setImgError] = useState(false);

    const handleError = () => {
      setImgError(true);
    };

    return (
      <div className="flex-shrink-0 mx-3 sm:mx-4 md:mx-5 my-3 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 transition-all duration-300 flex items-center justify-center">
        {imgError ? (
          <div 
            className="w-full h-full flex items-center justify-center rounded-lg text-gray-800 font-bold text-xs"
            style={{ backgroundColor: logo.color }}
          >
            {logo.alt.substring(0, 3)}
          </div>
        ) : (
          <img
            src={logo.src}
            alt={logo.alt}
            className="w-full h-full object-contain transition-all duration-300 transform hover:scale-110"
            onError={handleError}
            style={{
              filter: 'grayscale(40%)',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.filter = 'grayscale(0%)';
              target.style.transform = 'scale(1.15)';
            }}
            onMouseLeave={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.filter = 'grayscale(40%)';
              target.style.transform = 'scale(1)';
            }}
          />
        )}
      </div>
    );
  };

  // Row component
  const LogoRow = ({ logos, direction }) => {
    // Duplicate logos for seamless animation
    const duplicatedLogos = [...logos, ...logos];
    
    return (
      <div 
        className="relative overflow-hidden mb-1 sm:mb-2 md:mb-3"
        style={{
          maskImage: 'linear-gradient(to right, transparent, black 5%, black 95%, transparent)',
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 5%, black 95%, transparent)',
        }}
      >
        <div 
          className={`flex ${direction === 'left' ? 'animate-scroll-left' : 'animate-scroll-right'}`}
        >
          {duplicatedLogos.map((logo, index) => (
            <Logo key={index} logo={logo} index={index} />
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen flex flex-col p-4 bg-transparent">
      {/* Header positioned at the top with responsive spacing */}
      <div className="text-center mb-2 sm:mb-3 md:mb-4 mt-4 sm:mt-6 md:mt-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-1 sm:mb-2">
          Technologies to <span className="text-orange-500">build</span> powerful
        </h1>
      </div>
      
      {/* Animation container centered in remaining space */}
      <div className="flex-1 flex items-center justify-center py-2 sm:py-4">
        <div className="w-full max-w-5xl lg:max-w-7xl px-2 sm:px-4">
          {/* Four-row container with responsive spacing */}
          <div className="space-y-2 sm:space-y-3 md:space-y-4 lg:space-y-6">
            <LogoRow logos={row1Logos} direction="right" />
            <LogoRow logos={row2Logos} direction="left" />
            <LogoRow logos={row3Logos} direction="right" />
            <LogoRow logos={row4Logos} direction="left" />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        
        @keyframes scroll-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        
        .animate-scroll-left {
          animation: scroll-left 25s linear infinite;
        }
        
        .animate-scroll-right {
          animation: scroll-right 25s linear infinite;
        }
        
        /* Adjust animation speed for mobile */
        @media (max-width: 640px) {
          .animate-scroll-left {
            animation: scroll-left 20s linear infinite;
          }
          
          .animate-scroll-right {
            animation: scroll-right 20s linear infinite;
          }
        }
      `}</style>
    </div>
  );
};

export default TechStackAnimation;