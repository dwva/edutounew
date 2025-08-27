import React from 'react';

// Define the tech logos with their source URLs and alt text.
const techLogos = [
  { src: 'https://cdn.worldvectorlogo.com/logos/react-2.svg', alt: 'React' },
  { src: 'https://cdn.worldvectorlogo.com/logos/javascript-1.svg', alt: 'JavaScript' },
  { src: 'https://cdn.worldvectorlogo.com/logos/typescript.svg', alt: 'TypeScript' },
  { src: 'https://cdn.worldvectorlogo.com/logos/html-1.svg', alt: 'HTML' },
  { src: 'https://cdn.worldvectorlogo.com/logos/css-3.svg', alt: 'CSS' },
  { src: 'https://cdn.worldvectorlogo.com/logos/tailwind-css-2.svg', alt: 'Tailwind CSS' },
  { src: 'https://cdn.worldvectorlogo.com/logos/node-js-1.svg', alt: 'Node.js' },
  { src: 'https://cdn.worldvectorlogo.com/logos/python-5.svg', alt: 'Python' },
  { src: 'https://cdn.worldvectorlogo.com/logos/go-6.svg', alt: 'Go' },
  { src: 'https://cdn.worldvectorlogo.com/logos/docker-4.svg', alt: 'Docker' },
  { src: 'https://cdn.worldvectorlogo.com/logos/git-icon.svg', alt: 'Git' },
  { src: 'https://cdn.worldvectorlogo.com/logos/github-icon-1.svg', alt: 'GitHub' },
  { src: 'https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg', alt: 'MongoDB' },
  { src: 'https://cdn.worldvectorlogo.com/logos/postgresql.svg', alt: 'PostgreSQL' },
  { src: 'https://cdn.worldvectorlogo.com/logos/aws-2.svg', alt: 'AWS' },
];

const App = () => {
  // To create a seamless loop, we'll duplicate the logos.
  // This prevents a visible "jump" when the animation resets.
  const duplicatedLogos = [...techLogos, ...techLogos];

  return (
    <div className="bg-white flex flex-col justify-center items-center font-sans p-4 overflow-hidden">
      
      {/* Container for the scrolling section */}
      <div className="max-w-7xl w-full">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-8">
          Our Technology Stack
        </h2>
        
        {/*
          This div creates the fade effect at the start and end of the scrolling strip.
          The 'mask-image' property uses a linear gradient to make the content transparent
          at the left and right edges.
        */}
        <div 
          className="w-full relative overflow-hidden"
          style={{
            maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
          }}
        >
          {/*
            The main container for the logos. We use a keyframe animation to make it
            continuously move from right to left. The duration has been decreased
            to increase speed.
          */}
          <div className="flex animate-scroll-logos">
            {duplicatedLogos.map((logo, index) => (
              <div 
                key={index}
                className="flex-shrink-0 mx-8 my-4 w-20 h-20 transition-all duration-300 transform hover:scale-110"
              >
                {/* Logo image. We use grayscale by default and remove it on hover.
                  We also add a fallback for the image source just in case.
                */}
                <img 
                  src={logo.src} 
                  alt={logo.alt} 
                  className="w-full h-full object-contain grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all"
                  onError={(e) => {
                    // Fallback to a placeholder if the image fails to load.
                    const target = e.target as HTMLImageElement;
                    target.onerror = null; 
                    target.src = `https://placehold.co/80x80/e5e7eb/6b7280?text=${logo.alt.substring(0, 3)}`;
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
        {/*
          Here we define the keyframe animation for the scrolling effect.
          The animation duration has been reduced from 40s to 20s to increase the speed.
        */}
        <style>{`
          @keyframes scroll-logos {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
          .animate-scroll-logos {
            animation: scroll-logos 20s linear infinite;
          }
        `}</style>
          </div>
        );
    };
    
    export default App;