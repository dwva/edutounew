"use client";

import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Layers, RefreshCw } from 'lucide-react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import Projects from '../components/services';
import TestnomialCard from './testnomialcard';




// Dummy InfiniteMovingSponsors component for demonstration
// Replace this with your actual implementation or import if it exists elsewhere
const InfiniteMovingSponsors = ({
  items,
  direction = "right",
  speed = "normal",
}: {
  items: { name: string }[];
  direction?: "left" | "right";
  speed?: "slow" | "normal" | "fast";
}) => {
  return (
    <div className="w-full overflow-hidden flex items-center h-full">
      <div
        className={`flex gap-8 whitespace-nowrap animate-marquee${direction === "left" ? "" : "-reverse"}`}
        style={{
          animationDuration:
            speed === "slow"
              ? "60s"
              : speed === "fast"
              ? "20s"
              : "40s",
        }}
      >
        {items.concat(items).map((item, idx) => (
          <span
            key={idx}
            className="text-lg md:text-xl font-semibold text-gray-700 px-6 py-2 bg-white rounded shadow"
          >
            {item.name}
          </span>
        ))}
      </div>
    </div>
  );
};

// -----------------------------
// Marquee Component for Moving Text
// -----------------------------
const MovingTextMarquee = () => {
  return (
    <div className="w-full overflow-hidden bg-orange-100 py-2">
      <div className="animate-marquee whitespace-nowrap">
        <span className="text-orange-600 font-medium mx-4">
          Featured <span className="text-orange-700 font-bold">Courses</span> and <span className="text-orange-700 font-bold">Workshops</span> - Limited Time Offer!
        </span>
        <span className="text-orange-600 font-medium mx-4">
          Featured <span className="text-orange-700 font-bold">Courses</span> and <span className="text-orange-700 font-bold">Workshops</span> - Limited Time Offer!
        </span>
        <span className="text-orange-600 font-medium mx-4">
          Featured <span className="text-orange-700 font-bold">Courses</span> and <span className="text-orange-700 font-bold">Workshops</span> - Limited Time Offer!
        </span>
        <span className="text-orange-600 font-medium mx-4">
          Featured <span className="text-orange-700 font-bold">Courses</span> and <span className="text-orange-700 font-bold">Workshops</span> - Limited Time Offer!
        </span>
      </div>
    </div>
  );
};

// -----------------------------
// Styled Components
// -----------------------------
const StyledCard = styled(motion.div)`
  .columns {
    width: 100%;
    height: 100%;
    position: relative;
    border-radius: 20px;
    padding: 25px;
    border: 2px solid black;
    transition: all 0.4s;
    background: white;
    
    @media (max-width: 768px) {
      padding: 20px;
      border-radius: 16px;
    }
    
    @media (max-width: 480px) {
      padding: 16px;
      border-radius: 12px;
    }
  }

  .columns:hover {
    box-shadow: 4px 4px 0 1px rgba(0, 0, 0);
    transform: translateY(-5px);
  }

  .button-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    margin-bottom: 16px;
    
    @media (max-width: 768px) {
      gap: 15px;
      margin-bottom: 12px;
    }
  }

  .offer {
    font-size: 20px;
    font-weight: 900;
    border-bottom: 2px solid black;
    cursor: pointer;
    transition: all 0.4s;
    margin: 0;
    
    @media (max-width: 768px) {
      font-size: 18px;
    }
    
    @media (max-width: 480px) {
      font-size: 16px;
    }
  }

  .btn {
    padding: 6px 12px;
    border: 1px solid black;
    background-color: orange;
    border-radius: 8px;
    letter-spacing: 0.5px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.4s;
    font-size: 12px;
    
    @media (max-width: 768px) {
      padding: 5px 10px;
      font-size: 11px;
    }
  }

  .columns:hover .btn {
    box-shadow: 2px 2px 0 1px rgba(0, 0, 0);
  }

  .columns:hover .offer {
    color: green;
    border-color: green;
  }

  .btn:focus {
    background: transparent;
  }

  .secondary-heading {
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 16px;
    font-family: 'Poppins', sans-serif;
    
    @media (max-width: 768px) {
      font-size: 16px;
      margin-bottom: 12px;
    }
    
    @media (max-width: 480px) {
      font-size: 14px;
    }
  }

  .card-description {
    font-size: 16px;
    font-weight: 500;
    line-height: 1.5;
    font-family: 'Poppins', sans-serif;
    
    @media (max-width: 768px) {
      font-size: 14px;
    }
    
    @media (max-width: 480px) {
      font-size: 13px;
    }
  }
`;

const StyledEnrollButton = styled(motion.button)`
  padding: 10px 20px;
  border: 2px solid black;
  background-color: orange;
  border-radius: 10px;
  font-weight: 600;
  font-family: 'Poppins', sans-serif;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
  
  @media (max-width: 768px) {
    padding: 8px 16px;
    font-size: 0.8rem;
  }

  a {
    color: inherit;
    text-decoration: none;
    display: flex;
    align-items: center;
  }

  &:hover {
    background-color: #ff8c00;
    color: white;
    transform: translateY(-2px);
    box-shadow: 4px 4px 0 1px rgba(0, 0, 0);
  }

  &:active {
    transform: translateY(0);
  }
`;

// -----------------------------
// Utility function for classNames
// -----------------------------
function cn(...classes: (string | undefined | null | boolean | Record<string, boolean>)[]): string {
  return classes
    .flatMap(cls => {
      if (!cls) return [];
      if (typeof cls === "string") return [cls];
      if (typeof cls === "object") {
        return Object.entries(cls)
          .filter(([_, value]) => Boolean(value))
          .map(([key]) => key);
      }
      return [];
    })
    .join(" ");
}

// -----------------------------
// EdutouAboutUs Component (Mobile Responsive)
// -----------------------------
function EdutouAboutUs() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % 3);
    }, 4000);
    
    return () => clearInterval(interval);
  }, []);
  
  const features = [
    {
      id: 0,
      icon: <Zap className="w-6 h-6 md:w-8 md:h-8 text-orange-500" />,
      title: "Adaptive Learning Paths",
      description: "Our AI analyzes your strengths and growth areas in real-time, creating a personalized learning journey tailored specifically to you."
    },
    {
      id: 1,
      icon: <Layers className="w-6 h-6 md:w-8 md:h-8 text-orange-500" />,
      title: "Project-Based Curriculum",
      description: "Apply what you learn immediately to solve actual problems, building a portfolio of real work as you advance through your courses."
    },
    {
      id: 2,
      icon: <RefreshCw className="w-6 h-6 md:w-8 md:h-8 text-orange-500" />,
      title: "Continuous Evolution",
      description: "Our courses update automatically as industry standards shift, ensuring you're always learning the most current and relevant skills."
    }
  ];

  return (
    <div className="min-h-screen bg-white text-black relative overflow-hidden">
      {/* Hero Section */}
      <section className={`py-8 md:py-12 px-4 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-6 md:gap-8">
            {/* Left Content - Vertically centered */}
            <div className="lg:w-1/2 flex flex-col justify-center w-full">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 leading-snug relative inline-block">
                Education{' '}
                <span className="text-orange-500 relative z-10">
                  Reimagined
                  {/* Animated gradient underline */}
                  <span className="absolute left-0 bottom-0 w-full h-1 bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 rounded transition-all duration-500 animate-underline"></span>
                </span>
              </h1>
              
              <p className="text-sm md:text-base mb-4 md:mb-6 text-gray-700 leading-relaxed max-w-xl">
                EDUTOU stands at the intersection of cutting-edge artificial intelligence and modern education. 
                We've built a learning ecosystem that adapts to you—not the other way around.
              </p>
              
              <div className="bg-gray-50 p-3 md:p-4 rounded-lg shadow-sm border-l-4 border-orange-500 mb-4 md:mb-6 max-w-xl">
                <h3 className="font-semibold text-base md:text-lg mb-1">Our Mission</h3>
                <p className="text-gray-700 text-xs md:text-sm">
                  To create agile, skilled professionals who can thrive in an ever-changing technological landscape. 
                  Through our AI-driven platform, we deliver personalized learning experiences that focus on practical 
                  skills and real-world applications.
                </p>
              </div>
            </div>
            
            {/* Right Content */}
            <div className="lg:w-1/2 w-full relative">
              {/* Background subtle particle animation */}
              <div className="absolute inset-0 -z-10 pointer-events-none">
                <svg
                  className="w-full h-full"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                >
                  <circle cx="20%" cy="30%" r="10" fill="rgba(255, 165, 0, 0.1)">
                    <animate attributeName="r" values="8;12;8" dur="4s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="80%" cy="70%" r="15" fill="rgba(255, 140, 0, 0.1)">
                    <animate attributeName="r" values="12;18;12" dur="5s" repeatCount="indefinite" />
                  </circle>
                </svg>
              </div>

              <div className="bg-white rounded-xl md:rounded-2xl shadow-lg md:shadow-xl p-4 md:p-6 relative z-10 transition-all duration-500 transform hover:shadow-xl md:hover:shadow-2xl border border-gray-100">                   
                <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 border-b pb-2 md:pb-3 border-gray-100">What sets us apart</h2>
                
                {features.map((feature) => (
                  <div 
                    key={feature.id} 
                    className={`mb-4 md:mb-6 p-3 md:p-4 rounded-lg md:rounded-xl cursor-pointer transition-all duration-300 transform ${
                      activeFeature === feature.id 
                        ? 'bg-gray-50 shadow-md md:shadow-lg scale-105 opacity-100' 
                        : 'bg-white opacity-70 hover:opacity-100 hover:shadow-sm md:hover:shadow-md hover:scale-105'
                    }`}
                    onMouseEnter={() => setActiveFeature(feature.id)}
                  >
                    <div className="flex items-start gap-3 md:gap-4">
                      <div className="transition-transform duration-500 transform">
                        {feature.icon}
                      </div>
                      <div>
                        <h3 className="font-bold text-base md:text-xl mb-1 group-hover:underline underline-animation">{feature.title}</h3>
                        <p className="text-gray-700 text-xs md:text-sm">{feature.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-4 w-20 h-20 md:w-32 md:h-32 bg-orange-100 rounded-full opacity-70"></div>
              <div className="absolute top-4 -right-4 w-12 h-12 md:w-20 md:h-20 bg-gray-100 rounded-full opacity-70"></div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        /* Gradient underline animation */
        .animate-underline {
          animation: underlineGrow 1.5s ease forwards;
        }
        @keyframes underlineGrow {
          0% {
            width: 0%;
            opacity: 0;
          }
          100% {
            width: 100%;
            opacity: 1;
          }
        }

        /* Underline on feature title hover */
        h3:hover {
          text-decoration: underline;
          text-decoration-thickness: 2px;
          text-underline-offset: 4px;
          transition: all 0.3s ease;
        }
      `}</style>
    </div>
  );
}

// -----------------------------
// Main Home Component (Mobile Responsive)
// -----------------------------
const Home = () => {
  const sponsors = [
    { name: 'TechCorp' },
    { name: 'CloudNine' },
    { name: 'AI Nexus' },
    { name: 'DigitalWay' },
    { name: 'WebScale' },
    { name: 'DataFlow' },
  ];

  return (
    <div className="bg-white text-gray-900">
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
          
          .education-text {
            color: white;
            -webkit-text-stroke: 2px orange;
            text-shadow: none;
          }

          @keyframes scroll {
            from {
              transform: translateX(0);
            }
            to {
              transform: translateX(calc(-50% - 1rem));
            }
          }

          .animate-scroll {
            animation: scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite;
          }
          
          @keyframes marquee {
            from {
              transform: translateX(0);
            }
            to {
              transform: translateX(calc(-100% - var(--gap)));
            }
          }
          
          .animate-marquee {
            animation: marquee 20s linear infinite;
          }
        `}
      </style>

      {/* New courses banner - positioned below navbar */}
      

      {/* Moving text marquee */}
      <MovingTextMarquee />

      {/* Hero Section - Made Mobile Responsive */}
      <section className="min-h-screen bg-white relative flex items-center justify-center px-4 sm:px-6 pt-8 md:pt-0">
        <div className="relative z-10 text-center max-w-5xl mt-8 md:mt-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-6 md:mb-10 leading-tight text-black pt-4 md:pt-8 font-['Poppins']">
            The Future of Learning <br className="hidden md:block" />
            <span className="education-text">Powered</span> by AI.
          </h1>
          <div className="my-8 md:my-12 flex flex-col items-center">
            <StyledEnrollButton
              whileHover={{
                scale: 1.05,
                boxShadow: '4px 4px 0 1px rgba(0,0,0)',
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              className="mb-6 md:mb-8"
            >
              <Link to="/currentcourse" className="flex items-center">
                Enroll Today
                <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
              </Link>
            </StyledEnrollButton>
            <p className="text-black text-sm md:text-base lg:text-lg max-w-3xl mx-auto mb-6 md:mb-10 leading-relaxed font-['Poppins'] px-2">
              At EDUTOU, we've reimagined education for the digital age. Our AI-powered platform adapts to your learning style, focusing on the skills that matter in today's rapidly evolving job market.
            </p>
          </div>
          <blockquote className="text-black font-semibold text-base md:text-lg italic mt-8 md:mt-12 font-['Poppins']">
            "The ones who learn, adapt, and innovate... change the world." 🚀
          </blockquote>
        </div>
      </section>

      {/* Sponsors Section */}
      <section className="bg-white">
        <div className="h-[6rem] flex flex-col items-center justify-center relative overflow-hidden">
          <InfiniteMovingSponsors items={sponsors} direction="right" speed="normal" />
        </div>
      </section>

      {/* Why EDUTOU Section - Made Mobile Responsive */}
      <section className="py-12 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="flex flex-col lg:flex-row gap-8 md:gap-12 mb-12 md:mb-16 items-start">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight font-['Poppins']">
                Why <span className="text-orange-500">EDUTOU</span> is Different
              </h2>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6 font-['Poppins']">
                Discover the core features that make our learning platform stand out.
              </p>
            </div>
            <div className="lg:w-1/2"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
            {[
              {
                title: 'AI-Powered Personalization',
                desc: 'Adaptive learning algorithms tailor content to your unique needs and pace.',
                icon: '🤖',
                flag: 'FEATURE',
              },
              {
                title: 'Project-Based Curriculum',
                desc: 'Build portfolio-worthy projects from day one with expert guidance.',
                icon: '🛠️',
                flag: 'FEATURE',
              },
              {
                title: 'Industry Mentor Network',
                desc: 'Learn directly from professionals at top tech companies.',
                icon: '👨‍💼',
                flag: 'FEATURE',
              },
            ].map((item, index) => (
              <StyledCard
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true }}
              >
                <div className="columns">
                  <div className="button-container">
                    <button className="btn red-flag">{item.flag}</button>
                    <p className="offer">{item.icon}</p>
                  </div>
                  <p className="secondary-heading">{item.title}</p>
                  <p className="card-description">{item.desc}</p>
                </div>
              </StyledCard>
            ))}
          </div>
        </div>
      </section>

      {/* Explore header + Projects carousel */}
      <Projects />

      {/* Edutou About Us Section */}
      <EdutouAboutUs />

      {/* Testimonials Section with imported component */}
      <TestnomialCard />

      {/* Sign Language CTA Section */}
      <section className="py-12 md:py-24 bg-white">
        <div className="flex flex-col items-center justify-center p-4">
          <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-4 md:mb-6 max-w-3xl">
            <div className="bg-orange-300 text-black text-xl md:text-2xl lg:text-3xl font-bold px-4 md:px-6 py-2 md:py-3 rounded-full shadow-md">
Build
            </div>
            <div className="bg-orange-100 text-black text-xl md:text-2xl lg:text-3xl font-bold px-4 md:px-6 py-2 md:py-3 rounded-lg md:rounded-xl border-2 border-black shadow-[2px_2px_0px_#000] md:shadow-[4px_4px_0px_#000]">
              projects
            </div>
            <div className="bg-orange-200 text-black text-xl md:text-2xl lg:text-3xl font-bold px-4 md:px-6 py-2 md:py-3 rounded-2xl md:rounded-3xl shadow-md">
              real-world

            </div>
            <div className="flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full border-2 border-black shadow-md">
              <div className="text-xl md:text-2xl lg:text-3xl">🙂</div>
            </div>
            <div className="bg-orange-100 text-black text-xl md:text-2xl lg:text-3xl font-bold px-4 md:px-6 py-2 md:py-3 rounded-full shadow-md">
              and

            </div>
            <div className="bg-orange-200 text-black text-xl md:text-2xl lg:text-3xl font-bold px-5 md:px-8 py-2 md:py-3 rounded-lg md:rounded-xl border-2 border-black shadow-[2px_2px_0px_#000] md:shadow-[4px_4px_0px_#000]">
              stand out


            </div>
            <div className="bg-orange-300 text-black text-xl md:text-2xl lg:text-3xl font-bold px-4 md:px-6 py-2 md:py-3 rounded-lg md:rounded-xl shadow-md">
              to employers 💼

            </div>
          </div>

          <div className="text-3xl md:text-4xl mb-3 md:mb-4">↓</div>

          <div className="text-center text-gray-700 max-w-md mb-4 md:mb-6 text-sm md:text-base font-['Poppins']">
            Join thousands of learners who have accelerated their 
            careers with EDUTOU's revolutionary approach to education
          </div>

          <StyledEnrollButton
            whileHover={{
              scale: 1.05,
              boxShadow: '4px 4px 0 1px rgba(0, 0, 0, 0)',
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
          >
            <Link to="/enroll" className="flex items-center">
              Get Started Learning
              <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
            </Link>
          </StyledEnrollButton>
        </div>
      </section>
    </div>
  );
};

export default Home;