"use client";

import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Layers, RefreshCw } from 'lucide-react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

// -----------------------------
// New Explore Our Courses Component (WebDeveloperSite)
// -----------------------------
function WebDeveloperSite() {
  const [isHovered, setIsHovered] = useState<string | null>(null);

  const fontStyle = `
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
    
    * {
      font-family: 'Poppins', sans-serif;
    }
  `;

  return (
    <>
      <style>{fontStyle}</style>
      <div className="flex flex-col w-full">
        <div className="w-full py-8 bg-white px-4 border-b border-gray-200">
          <div className="max-w-6xl mx-auto text-left">
            <h1 className='text-4xl font-bold text-black'>Explore Our</h1><h1 className="text-4xl font-bold text-orange-500"> courses</h1>
          </div>
        </div>
        
        {/* Web Developer Section */}
        <div className="flex items-center w-full border-b border-gray-200 py-16 px-4">
          <div className="flex w-full max-w-6xl mx-auto">
            <div className="flex items-center mr-8">
              <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center">
                <svg className="w-12 h-12 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 6L12 18L20 6" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
            <div className="flex flex-col justify-center relative" 
              onMouseEnter={() => setIsHovered("webdev-card")}
              onMouseLeave={() => setIsHovered(null)}
            >
              <h2 className="text-2xl font-bold">Web Dev</h2>
              <p className="text-orange-500">12 weeks, online</p>
            </div>
            <div className="ml-auto max-w-lg">
              <p className="text-gray-800 mb-4">
                Master the foundations of modern web development. Build responsive websites and dynamic applications with HTML, CSS, JavaScript, React, and Node.js. Perfect for beginners and those looking to upgrade their skills.
              </p>
              <div 
                className="relative"
                onMouseEnter={() => setIsHovered("webdev")}
                onMouseLeave={() => setIsHovered(null)}
              >
                <motion.button
                  initial={{ opacity: 0, y: 10 }}
                  animate={isHovered === "webdev" ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="bg-orange-500 text-white border border-black px-5 py-2
                    font-bold cursor-pointer transition-all duration-300 ease-in-out
                    hover:scale-105 hover:shadow-[4px_4px_0px_rgba(0,0,0,0.3)]"
                >
                  Let's Go
                </motion.button>
              </div>
            </div>
          </div>
        </div>
        
        {/* UX/UI Design Section */}
        <div className="flex items-center w-full border-b border-gray-200 py-16 px-4">
          <div className="flex w-full max-w-6xl mx-auto">
            <div className="flex items-center mr-8">
              <div className="w-20 h-20 bg-blue-400 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">UI/UX</span>
              </div>
            </div>
            <div className="flex flex-col justify-center relative" 
              onMouseEnter={() => setIsHovered("uxui-card")}
              onMouseLeave={() => setIsHovered(null)}
            >
              <h2 className="text-2xl font-bold">UX/UI Design</h2>
              <p className="text-orange-500">10 weeks, hybrid</p>
            </div>
            <div className="ml-auto max-w-lg">
              <p className="text-gray-800 mb-4">
                Learn to create beautiful, intuitive digital experiences. From user research and wireframing to high-fidelity prototypes and design systems. Includes real-world projects to build your professional portfolio.
              </p>
              <div 
                className="relative"
                onMouseEnter={() => setIsHovered("uxui")}
                onMouseLeave={() => setIsHovered(null)}
              >
                <motion.button
                  initial={{ opacity: 0, y: 10 }}
                  animate={isHovered === "uxui" ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="bg-orange-500 text-white border border-black px-5 py-2
                    font-bold cursor-pointer transition-all duration-300 ease-in-out
                    hover:scale-105 hover:shadow-[4px_4px_0px_rgba(0,0,0,0.3)]"
                >
                  Let's Go
                </motion.button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Data Science Section */}
        <div className="flex items-center w-full border-b border-gray-200 py-16 px-4">
          <div className="flex w-full max-w-6xl mx-auto">
            <div className="flex items-center mr-8">
              <div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center">
                <svg className="w-12 h-12 text-black" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 6L12 18L20 6" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
            <div className="flex flex-col justify-center relative" 
              onMouseEnter={() => setIsHovered("data-card")}
              onMouseLeave={() => setIsHovered(null)}
            >
              <h2 className="text-2xl font-bold">Data Science</h2>
              <p className="text-orange-500">14 weeks, online</p>
            </div>
            <div className="ml-auto max-w-lg">
              <p className="text-gray-800 mb-4">
                Dive into the world of data analysis and machine learning. From statistical analysis to predictive modeling, learn Python, pandas, scikit-learn, and TensorFlow while working on real datasets to solve complex problems.
              </p>
              <div 
                className="relative"
                onMouseEnter={() => setIsHovered("data")}
                onMouseLeave={() => setIsHovered(null)}
              >
                <motion.button
                  initial={{ opacity: 0, y: 10 }}
                  animate={isHovered === "data" ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="bg-orange-500 text-white border border-black px-5 py-2
                    font-bold cursor-pointer transition-all duration-300 ease-in-out
                    hover:scale-105 hover:shadow-[4px_4px_0px_rgba(0,0,0,0.3)]"
                >
                  Let's Go
                </motion.button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Mobile App Development Section */}
        <div className="flex items-center w-full border-b border-gray-200 py-16 px-4">
          <div className="flex w-full max-w-6xl mx-auto">
            <div className="flex items-center mr-8">
              <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">APP</span>
              </div>
            </div>
            <div className="flex flex-col justify-center relative" 
              onMouseEnter={() => setIsHovered("mobile-card")}
              onMouseLeave={() => setIsHovered(null)}
            >
              <h2 className="text-2xl font-bold">Mobile App Development</h2>
              <p className="text-orange-500">16 weeks, online</p>
            </div>
            <div className="ml-auto max-w-lg">
              <p className="text-gray-800 mb-4">
                Create native and cross-platform mobile applications for iOS and Android. Master React Native, Swift, and Kotlin while learning app architecture, state management, and API integration. Graduate with a portfolio of published apps.
              </p>
              <div 
                className="relative"
                onMouseEnter={() => setIsHovered("mobile")}
                onMouseLeave={() => setIsHovered(null)}
              >
                <motion.button
                  initial={{ opacity: 0, y: 10 }}
                  animate={isHovered === "mobile" ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="bg-orange-500 text-white border border-black px-5 py-2
                    font-bold cursor-pointer transition-all duration-300 ease-in-out
                    hover:scale-105 hover:shadow-[4px_4px_0px_rgba(0,0,0,0.3)]"
                >
                  Let's Go
                </motion.button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Cybersecurity Section */}
        <div className="flex items-center w-full border-b border-gray-200 py-16 px-4">
          <div className="flex w-full max-w-6xl mx-auto">
            <div className="flex items-center mr-8">
              <div className="w-20 h-20 bg-red-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">SEC</span>
              </div>
            </div>
            <div className="flex flex-col justify-center relative" 
              onMouseEnter={() => setIsHovered("security-card")}
              onMouseLeave={() => setIsHovered(null)}
            >
              <h2 className="text-2xl font-bold">Cybersecurity</h2>
              <p className="text-orange-500">18 weeks, hybrid</p>
            </div>
            <div className="ml-auto max-w-lg">
              <p className="text-gray-800 mb-4">
                Develop expertise in network security, ethical hacking, and threat detection. Learn security fundamentals, penetration testing, cryptography, and compliance frameworks. Get prepared for industry certifications like CompTIA Security+ and CEH.
              </p>
              <div 
                className="relative"
                onMouseEnter={() => setIsHovered("security")}
                onMouseLeave={() => setIsHovered(null)}
              >
                <motion.button
                  initial={{ opacity: 0, y: 10 }}
                  animate={isHovered === "security" ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="bg-orange-500 text-white border border-black px-5 py-2
                    font-bold cursor-pointer transition-all duration-300 ease-in-out
                    hover:scale-105 hover:shadow-[4px_4px_0px_rgba(0,0,0,0.3)]"
                >
                  Let's Go
                </motion.button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Explore Courses Button */}
        <div className="w-full py-16 flex justify-center">
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "4px 4px 0px rgba(0,0,0,0.3)" }}
            transition={{ duration: 0.3 }}
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg text-lg border border-black hover:shadow-[4px_4px_0px_rgba(0,0,0,0.3)]"
          >
            Explore All Courses
          </motion.button>
        </div>
      </div>
    </>
  );
}

// -----------------------------
// InfiniteMovingCards Component (Updated with white cards)
// -----------------------------
const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    quote: string;
    name: string;
    title: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLUListElement>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }, []);

  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };

  return (
    <div
      ref={containerRef}
      className={`scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)] ${className}`}
    >
      <ul
        ref={scrollerRef}
        className={`flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap ${
          start && "animate-scroll"
        } ${pauseOnHover && "hover:[animation-play-state:paused]"}`}
      >
        {items.map((item, idx) => (
          <li
            className="w-[350px] max-w-full relative rounded-2xl border border-gray-200 flex-shrink-0 px-8 py-6 md:w-[450px] bg-white shadow-lg"
            key={idx}
          >
            <blockquote>
              <div
                aria-hidden="true"
                className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
              ></div>
              <span className="relative z-20 text-sm leading-[1.6] text-gray-800 font-normal">
                {item.quote}
              </span>
              <div className="relative z-20 mt-6 flex flex-row items-center">
                <span className="flex flex-col gap-1">
                  <span className="text-sm leading-[1.6] text-gray-600 font-semibold">
                    {item.name}
                  </span>
                  <span className="text-sm leading-[1.6] text-gray-500 font-normal">
                    {item.title}
                  </span>
                </span>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};

// -----------------------------
// InfiniteMovingCardsDemo Component (Updated with white cards)
// -----------------------------
export function InfiniteMovingCardsDemo() {
  const testimonials = [
    {
      quote: "I learned more in one week than I did in months of self-study. The AI-powered curriculum adapted perfectly to my learning style.",
      name: "Michael Chen",
      title: "Computer Science Student",
    },
    {
      quote: "The project-based approach helped me build a portfolio that landed me my dream job at a tech startup.",
      name: "Sarah Johnson",
      title: "Frontend Developer",
    },
    {
      quote: "The AI recommendations were spot on! It knew exactly which concepts I needed to focus on to improve.",
      name: "David Rodriguez",
      title: "UX Designer",
    },
    {
      quote: "Worth every penny! The personalized learning path saved me so much time compared to traditional courses.",
      name: "Emily Wilson",
      title: "Product Manager",
    },
    {
      quote: "The community support was amazing. I never felt alone in my learning journey.",
      name: "Alex Thompson",
      title: "Software Engineer",
    },
  ];

  return (
    <div className="py-12 rounded-md flex flex-col antialiased bg-white items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

// -----------------------------
// Infinite Moving Testimonials Component (Rectangle Cards)
// -----------------------------
const InfiniteMovingTestimonials = ({
  testimonials,
  speed = 'normal',
  pauseOnHover = true,
}: {
  testimonials: Array<{
    quote: string;
    name: string;
    title: string;
  }>;
  speed?: 'fast' | 'normal' | 'slow';
  pauseOnHover?: boolean;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    if (scrollerRef.current) {
      // Duplicate the testimonial cards for infinite scrolling
      const children = Array.from(scrollerRef.current.children);
      children.forEach((child) => {
        const clone = child.cloneNode(true);
        scrollerRef.current?.appendChild(clone);
      });
      setStart(true);
    }
  }, []);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.style.setProperty(
        '--animation-duration',
        speed === 'fast' ? '20s' : speed === 'normal' ? '40s' : '80s'
      );
    }
  }, [speed]);

  return (
    <div
      ref={containerRef}
      className="relative overflow-hidden max-w-7xl mx-auto"
      style={{
        maskImage:
          'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
        WebkitMaskImage:
          'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
      }}
    >
      <div
        ref={scrollerRef}
        className={`flex gap-6 py-6 whitespace-nowrap ${
          start ? 'animate-scroll-horizontal' : ''
        } ${pauseOnHover ? 'hover:animation-play-state-paused' : ''}`}
        style={{
          animationTimingFunction: 'linear',
          animationIterationCount: 'infinite',
          animationName: 'scroll-horizontal',
          animationDuration: 'var(--animation-duration)',
          animationDirection: 'normal',
          animationPlayState: 'running',
        }}
      >
        {testimonials.map((t, idx) => (
          <div
            key={idx}
            className="bg-white border border-gray-200 rounded-lg p-10 shadow-lg min-w-[320px] flex flex-col justify-between box-border"
            style={{ boxSizing: 'border-box' }}
          >
            <p className="text-gray-800 mb-6 font-medium leading-relaxed text-left break-words">
              {t.quote}
            </p>
            <div className="pt-4 border-t-2 border-orange-200 text-left">
              <p className="font-bold text-gray-900 text-lg">{t.name}</p>
              <p className="text-sm text-gray-600">{t.title}</p>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes scroll-horizontal {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-50%));
          }
        }
        .animate-scroll-horizontal {
          animation-name: scroll-horizontal;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
          animation-duration: var(--animation-duration);
          animation-play-state: running;
        }
        .hover\\:animation-play-state-paused:hover {
          animation-play-state: paused !important;
        }
      `}</style>
    </div>
  );
};

// -----------------------------
// Infinite Moving Sponsors Component
// -----------------------------
const InfiniteMovingSponsors = ({
  items,
  direction = 'left',
  speed = 'fast',
  pauseOnHover = true,
  className,
}: {
  items: {
    name: string;
  }[];
  direction?: 'left' | 'right';
  speed?: 'fast' | 'normal' | 'slow';
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  React.useEffect(() => {
    addAnimation();
  }, []);

  const [start, setStart] = React.useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      containerRef.current.style.setProperty(
        '--animation-direction',
        direction === 'left' ? 'forwards' : 'reverse'
      );
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      containerRef.current.style.setProperty(
        '--animation-duration',
        speed === 'fast' ? '20s' : speed === 'normal' ? '40s' : '80s'
      );
    }
  };

  return (
    <div
      ref={containerRef}
      className={`scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)] ${className}`}
    >
      <ul
        ref={scrollerRef}
        className={`flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap ${
          start ? 'animate-scroll' : ''
        } ${pauseOnHover ? 'hover:[animation-play-state:paused]' : ''}`}
      >
        {items.map((item, idx) => (
          <li
            className="w-[150px] max-w-full relative rounded-lg flex-shrink-0"
            key={idx}
          >
            <div className="bg-white h-full border border-gray-200 rounded-lg shadow-sm p-4 flex items-center justify-center">
              <h3 className="text-lg font-medium text-center">{item.name}</h3>
            </div>
          </li>
        ))}
      </ul>
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
    padding: 35px;
    border: 2px solid black;
    transition: all 0.4s;
    background: white;
  }

  .columns:hover {
    box-shadow: 4px 4px 0 1px rgba(0, 0, 0);
    transform: translateY(-5px);
  }

  .button-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 30px;
    margin-bottom: 20px;
  }

  .offer {
    font-size: 24px;
    font-weight: 900;
    border-bottom: 2px solid black;
    cursor: pointer;
    transition: all 0.4s;
    margin: 0;
  }

  .btn {
    padding: 7px 15px;
    border: 1px solid black;
    background-color: orange;
    border-radius: 10px;
    letter-spacing: 1px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.4s;
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
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 20px;
    font-family: 'Poppins', sans-serif;
  }

  .card-description {
    font-size: 18px;
    font-weight: 500;
    line-height: 1.5;
    font-family: 'Poppins', sans-serif;
  }
`;

const StyledLearnMoreButton = styled(motion.button)`
  padding: 12px 24px;
  border: 2px solid black;
  background-color: orange;
  border-radius: 12px;
  font-weight: 600;
  font-family: 'Poppins', sans-serif;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);

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

const StyledEnrollButton = styled(motion.button)`
  padding: 12px 24px;
  border: 2px solid black;
  background-color: orange;
  border-radius: 12px;
  font-weight: 600;
  font-family: 'Poppins', sans-serif;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);

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
// EdutouAboutUs Component
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
      icon: <Zap className="w-8 h-8 text-orange-500" />,
      title: "Adaptive Learning Paths",
      description: "Our AI analyzes your strengths and growth areas in real-time, creating a personalized learning journey tailored specifically to you."
    },
    {
      id: 1,
      icon: <Layers className="w-8 h-8 text-orange-500" />,
      title: "Project-Based Curriculum",
      description: "Apply what you learn immediately to solve actual problems, building a portfolio of real work as you advance through your courses."
    },
    {
      id: 2,
      icon: <RefreshCw className="w-8 h-8 text-orange-500" />,
      title: "Continuous Evolution",
      description: "Our courses update automatically as industry standards shift, ensuring you're always learning the most current and relevant skills."
    }
  ];

  return (
    <div className="min-h-screen bg-white text-black relative overflow-hidden">
      {/* Hero Section */}
      <section className={`py-12 px-4 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            {/* Left Content - Vertically centered */}
            <div className="lg:w-1/2 flex flex-col justify-center w-full">
              <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-snug relative inline-block">
                Education{' '}
                <span className="text-orange-500 relative z-10">
                  Reimagined
                  {/* Animated gradient underline */}
                  <span className="absolute left-0 bottom-0 w-full h-1 bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 rounded transition-all duration-500 animate-underline"></span>
                </span>
              </h1>
              
              <p className="text-base mb-6 text-gray-700 leading-relaxed max-w-xl">
                EDUTOU stands at the intersection of cutting-edge artificial intelligence and modern education. 
                We've built a learning ecosystem that adapts to you—not the other way around.
              </p>
              
              <div className="bg-gray-50 p-4 rounded-lg shadow-sm border-l-4 border-orange-500 mb-6 max-w-xl">
                <h3 className="font-semibold text-lg mb-1">Our Mission</h3>
                <p className="text-gray-700 text-sm">
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

              <div className="bg-white rounded-2xl shadow-xl p-6 relative z-10 transition-all duration-500 transform hover:shadow-2xl border border-gray-100">                   
                <h2 className="text-2xl font-bold mb-6 border-b pb-3 border-gray-100">What sets us apart</h2>
                
                {features.map((feature) => (
                  <div 
                    key={feature.id} 
                    className={`mb-6 p-4 rounded-xl cursor-pointer transition-all duration-300 transform ${
                      activeFeature === feature.id 
                        ? 'bg-gray-50 shadow-lg scale-105 opacity-100' 
                        : 'bg-white opacity-70 hover:opacity-100 hover:shadow-md hover:scale-105'
                    }`}
                    onMouseEnter={() => setActiveFeature(feature.id)}
                  >
                    <div className="flex items-start gap-4">
                      <div className="transition-transform duration-500 transform">
                        {feature.icon}
                      </div>
                      <div>
                        <h3 className="font-bold text-xl mb-1 group-hover:underline underline-animation">{feature.title}</h3>
                        <p className="text-gray-700 text-sm">{feature.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-orange-100 rounded-full opacity-70"></div>
              <div className="absolute top-8 -right-8 w-20 h-20 bg-gray-100 rounded-full opacity-70"></div>
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
// Main Home Component
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

  const testimonials = [
    {
      quote: 'My approach to AI development.',
      name: 'Sarah Johnson',
      title: 'Frontend Developer',
    },
    {
      quote: 'I learned more in one week than I did in months of self-study.',
      name: 'Michael Chen',
      title: 'Computer Science Student',
    },
    {
      quote: "The AI recommendations were spot on!",
      name: 'David Rodriguez',
      title: 'UX Designer',
    },
    {
      quote: "Worth every penny!",
      name: 'Emily Wilson',
      title: 'Product Manager',
    },
    {
      quote: 'The community support was amazing.',
      name: 'Alex Thompson',
      title: 'Software Engineer',
    },
    {
      quote: 'The curriculum was perfectly challenging but achievable.',
      name: 'Jessica Lee',
      title: 'Data Scientist',
    },
    {
      quote: 'The career support was exceptional.',
      name: 'Ryan Park',
      title: 'Machine Learning Engineer',
    },
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
        `}
      </style>

      {/* Hero Section */}
      <section className="min-h-screen bg-white relative flex items-center justify-center px-6">
        <div className="absolute top-6 left-1/2 transform -translate-x-1/2 bg-orange-100 text-orange-800 px-6 py-2 rounded-full text-sm font-medium shadow-md z-20">
          New courses launching this month
        </div>
        <div className="relative z-10 text-center max-w-5xl mt-16">
          <h1 className="text-5xl md:text-7xl font-bold mb-10 leading-tight text-black pt-8 font-['Poppins']">
            The Future of Learning <br className="hidden md:block" />
            <span className="education-text">Powered</span> by AI.
          </h1>
          <div className="my-12 flex flex-col items-center">
            <StyledEnrollButton
              whileHover={{
                scale: 1.05,
                boxShadow: '4px 4px 0 1px rgba(0,0,0)',
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              className="mb-8"
            >
              <Link to="/enroll" className="flex items-center">
                Enroll Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </StyledEnrollButton>
            <p className="text-black text-lg max-w-3xl mx-auto mb-10 leading-relaxed font-['Poppins']">
              At EDUTOU, we've reimagined education for the digital age. Our AI-powered platform adapts to your learning style, focusing on the skills that matter in today's rapidly evolving job market.
            </p>
          </div>
          <blockquote className="text-black font-semibold text-lg italic mt-12 font-['Poppins']">
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

      {/* Why EDUTOU Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col lg:flex-row gap-12 mb-16 items-start">
            <div className="lg:w-1/2">
              <h2 className="text-5xl font-bold mb-4 leading-tight font-['Poppins']">
                Why <span className="text-orange-500">EDUTOU</span> is Different
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed mb-6 font-['Poppins']">
                Discover the core features that make our learning platform stand out.
              </p>
            </div>
            <div className="lg:w-1/2"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
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
          <div className="flex justify-center mt-16">
            <StyledLearnMoreButton
              whileHover={{
                scale: 1.05,
                boxShadow: '4px 4px 0 1px rgba(0,0,0)',
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            >
              Learn More
              <ArrowRight className="ml-2 h-5 w-5" />
            </StyledLearnMoreButton>
          </div>
        </div>
      </section>

      {/* --- Updated Our Courses Section --- */}
      <WebDeveloperSite />

      {/* Edutou About Us Section */}
      <EdutouAboutUs />

      {/* Testimonials Section */}
      <section className="py-16 bg-white relative">
        <div className="max-w-7xl mx-auto px-8 text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 font-['Poppins']">
            See What Others Are <span className="text-orange-500">Achieving</span> Through Learning
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto font-['Poppins']">
            Hear from learners who transformed their careers with our AI-powered education.
          </p>
        </div>

        <InfiniteMovingCardsDemo />
      </section>

      {/* Sign Language CTA Section */}
      <section className="py-24 bg-white">
        <div className="flex flex-col items-center justify-center p-4">
          <div className="flex flex-wrap justify-center gap-3 mb-6 max-w-3xl">
            <div className="bg-orange-300 text-black text-3xl font-bold px-8 py-4 rounded-full shadow-md">
              Learn sign
            </div>
            <div className="bg-orange-100 text-black text-3xl font-bold px-8 py-4 rounded-xl border-2 border-black shadow-[4px_4px_0px_#000]">
              language
            </div>
            <div className="bg-orange-200 text-black text-3xl font-bold px-8 py-4 rounded-3xl shadow-md">
              and
            </div>
            <div className="flex items-center justify-center w-16 h-16 rounded-full border-2 border-black shadow-md">
              <div className="text-3xl">🙂</div>
            </div>
            <div className="bg-orange-100 text-black text-3xl font-bold px-8 py-4 rounded-full shadow-md">
              get
            </div>
            <div className="bg-orange-200 text-black text-3xl font-bold px-10 py-4 rounded-xl border-2 border-black shadow-[4px_4px_0px_#000]">
              closer to
            </div>
            <div className="bg-orange-300 text-black text-3xl font-bold px-8 py-4 rounded-xl shadow-md">
              others
            </div>
          </div>

          <div className="text-4xl mb-4">↓</div>

          <div className="text-center text-gray-700 max-w-md mb-6 font-['Poppins']">
            Join thousands of learners who have accelerated their 
            careers with EDUTOU's revolutionary approach to education
          </div>

          <StyledLearnMoreButton
            whileHover={{
              scale: 1.05,
              boxShadow: '4px 4px 0 1px rgba(0, 0, 0, 0)',
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
          >
            <Link to="/enroll" className="flex items-center">
              Get Started Learning
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </StyledLearnMoreButton>
        </div>
      </section>
    </div>
  );
};

export default Home;