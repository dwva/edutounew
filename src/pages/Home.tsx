import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const Home = () => {
  // Sponsors data
  const sponsors = [
    { name: "TechCorp" },
    { name: "CloudNine" },
    { name: "AI Nexus" },
    { name: "DigitalWay" },
    { name: "WebScale" },
    { name: "DataFlow" }
  ];

  // All available testimonials
  const allTestimonials = [
    {
      quote: "This course transformed my approach to AI development. The hands-on projects were exactly what I needed to boost my confidence.",
      name: "Sarah Johnson",
      title: "Frontend Developer"
    },
    {
      quote: "The AI pair programming sessions were revolutionary. I learned more in one week than I did in months of self-study.",
      name: "Michael Chen",
      title: "Computer Science Student"
    },
    {
      quote: "EDUTOU's personalized learning approach helped me overcome my learning plateaus. The AI recommendations were spot on!",
      name: "David Rodriguez",
      title: "UX Designer"
    },
    {
      quote: "The industry mentors provided invaluable insights that you can't find in textbooks. Worth every penny!",
      name: "Emily Wilson",
      title: "Product Manager"
    },
    {
      quote: "The community support was amazing. I never felt alone in my learning journey.",
      name: "Alex Thompson",
      title: "Software Engineer"
    },
    {
      quote: "The curriculum was perfectly paced and the projects were challenging but achievable.",
      name: "Jessica Lee",
      title: "Data Scientist"
    },
    {
      quote: "I landed my dream job within a month of completing the program. The career support was exceptional.",
      name: "Ryan Park",
      title: "Machine Learning Engineer"
    }
  ];

  // State for visible testimonials
  const [visibleTestimonials, setVisibleTestimonials] = useState(allTestimonials.slice(0, 4));
  const testimonialContainerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollTestimonials = (direction: 'left' | 'right') => {
    if (testimonialContainerRef.current) {
      const container = testimonialContainerRef.current;
      const cardWidth = container.scrollWidth / visibleTestimonials.length;
      const scrollAmount = direction === 'left' ? -cardWidth : cardWidth;
      
      container.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });

      // Update current index
      setCurrentIndex(prev => {
        if (direction === 'right') {
          return prev === allTestimonials.length - 1 ? 0 : prev + 1;
        } else {
          return prev === 0 ? allTestimonials.length - 1 : prev - 1;
        }
      });
    }
  };

  const addTestimonial = (direction: 'left' | 'right') => {
    if (direction === 'right') {
      const nextIndex = (currentIndex + visibleTestimonials.length) % allTestimonials.length;
      setVisibleTestimonials(prev => [...prev.slice(1), allTestimonials[nextIndex]]);
    } else {
      const prevIndex = (currentIndex - 1 + allTestimonials.length) % allTestimonials.length;
      setVisibleTestimonials(prev => [allTestimonials[prevIndex], ...prev.slice(0, -1)]);
    }
  };

  const handleArrowClick = (direction: 'left' | 'right') => {
    scrollTestimonials(direction);
    addTestimonial(direction);
  };

  return (
    <div className="bg-white text-gray-900">
      {/* Font import */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
          
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

          .education-text {
            color: white;
            -webkit-text-stroke: 2px orange;
            text-shadow: none;
            position: relative;
            display: inline-block;
          }

          .testimonial-container {
            scroll-snap-type: x mandatory;
            -ms-overflow-style: none;
            scrollbar-width: none;
          }

          .testimonial-container::-webkit-scrollbar {
            display: none;
          }

          .testimonial-card {
            scroll-snap-align: start;
          }

          .testimonial-text {
            font-family: 'Inter', sans-serif;
          }
        `}
      </style>
      
      {/* Hero Section */}
      <section className="min-h-screen bg-white relative flex items-center justify-center px-6">
        <div className="absolute top-6 left-1/2 transform -translate-x-1/2 bg-orange-100 text-orange-800 px-6 py-2 rounded-full text-sm font-medium shadow-md z-20">
          New courses launching this month
        </div>
        <div className="relative z-10 text-center max-w-5xl mt-16">
          <h1 className="text-5xl md:text-7xl font-bold mb-10 leading-tight text-black pt-8" style={{ fontFamily: "'Poppins', sans-serif", lineHeight: '1.2' }}>
            Revolutionizing <br className="hidden md:block" />
            <span className="education-text">Education</span> Through AI
          </h1>
          <div className="my-12 flex flex-col items-center">
            <StyledEnrollButton
              whileHover={{ 
                scale: 1.05,
                boxShadow: "4px 4px 0 1px rgba(0,0,0)"
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="mb-8"
            >
              <Link to="/enroll" className="flex items-center">
                Enroll Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </StyledEnrollButton>
            <p className="text-black text-lg max-w-3xl mx-auto mb-10 leading-relaxed" style={{ 
              fontFamily: "'Poppins', sans-serif", 
              fontSize: "1.05rem",
              lineHeight: '1.6'
            }}>
              Education is not the filling of a pail, but the lighting of a fire. Discover how we ignite minds through artificial intelligence.
            </p>
          </div>
          <blockquote className="text-black font-semibold text-lg italic mt-12" style={{ 
            fontFamily: "'Poppins', sans-serif",
            lineHeight: '1.6'
          }}>
            "The future belongs to those who prepare for it today."
          </blockquote>
        </div>
      </section>

      {/* Sponsors Section */}
      <section className="bg-white">
        <div className="h-[6rem] flex flex-col items-center justify-center relative overflow-hidden">
          <InfiniteMovingSponsors
            items={sponsors}
            direction="right"
            speed="normal"
          />
        </div>
      </section>

      {/* Why EDUTOU Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col lg:flex-row gap-12 mb-16 items-start">
            <div className="lg:w-1/2">
              <h2 className="text-5xl font-bold mb-4 leading-tight" style={{ fontFamily: "'Poppins', sans-serif" }}>
                Why <span className="text-orange-500">EDUTOU</span> is Different
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed mb-6" style={{ fontFamily: "'Poppins', sans-serif" }}>
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
                flag: 'FEATURE'
              },
              {
                title: 'Project-Based Curriculum',
                desc: 'Build portfolio-worthy projects from day one with expert guidance.',
                icon: '🛠️',
                flag: 'FEATURE'
              },
              {
                title: 'Industry Mentor Network',
                desc: 'Learn directly from professionals at top tech companies.',
                icon: '👨‍💼',
                flag: 'FEATURE'
              },
            ].map((item, index) => (
              <StyledCard 
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true }}
              >
                <div className="card columns">
                  <div className="button-container">
                    <button className="btn red-flag">{item.flag}</button>
                    <p className="offer">{item.icon}</p>
                  </div>
                  <p className="secondary-heading">
                    {item.title}
                  </p>
                  <p className="card-description">{item.desc}</p>
                </div>
              </StyledCard>
            ))}
          </div>
          <div className="flex justify-center mt-16">
            <StyledLearnMoreButton
              whileHover={{ 
                scale: 1.05,
                boxShadow: "4px 4px 0 1px rgba(0,0,0)"
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              Learn More
              <ArrowRight className="ml-2 h-5 w-5" />
            </StyledLearnMoreButton>
          </div>
        </div>
      </section>

      {/* Featured Course Section */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-8 flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80"
              alt="AI Workshop"
              className="rounded-xl shadow-2xl w-full"
            />
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-bold mb-6" style={{ fontFamily: "'Poppins', sans-serif" }}>
              <span className="text-orange-500">7-Day</span> AI Accelerator
            </h2>
            <p className="text-gray-700 text-lg mb-8 leading-relaxed" style={{ fontFamily: "'Poppins', sans-serif" }}>
              Master the fundamentals of modern web development enhanced with AI tools in our intensive, project-based workshop.
            </p>
            <ul className="space-y-4 mb-8" style={{ fontFamily: "'Poppins', sans-serif" }}>
              <li className="flex items-start">
                <span className="text-orange-500 mr-3">✓</span>
                <span>Daily live coding sessions with AI pair programming</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 mr-3">✓</span>
                <span>Personalized feedback from industry experts</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 mr-3">✓</span>
                <span>Build and deploy a full-stack AI application</span>
              </li>
            </ul>
            <Link
              to="/courses/full-stack-foundation"
              className="inline-block bg-orange-500 text-white font-semibold px-8 py-4 rounded-full hover:bg-orange-600 transition-all duration-300"
            >
              Join the Workshop
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white relative">
        <div className="max-w-7xl mx-auto px-8 text-center mb-12">
          <h2 className="text-4xl font-bold mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>
            See What Others Are <span className="text-orange-500">Achieving</span> Through Learning
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto" style={{ fontFamily: "'Poppins', sans-serif" }}>
            Hear from learners who transformed their careers with our AI-powered education.
          </p>
        </div>
        
        <div className="max-w-7xl mx-auto px-8 relative">
          {/* Left Arrow */}
          <button 
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow-lg border-2 border-black hover:bg-orange-100 transition-colors"
            onClick={() => handleArrowClick('left')}
            aria-label="Scroll testimonials left"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          {/* Testimonials Container */}
          <div 
            ref={testimonialContainerRef}
            className="testimonial-container flex overflow-x-auto space-x-6 pb-6 px-2"
          >
            {visibleTestimonials.map((testimonial, index) => (
              <div
                key={`${testimonial.name}-${index}`}
                className="testimonial-card flex-shrink-0 w-full md:w-1/2 lg:w-1/3 px-2"
              >
                <div className="bg-orange-50 border-2 border-black rounded-xl p-6 flex flex-col h-full shadow-lg" style={{ minHeight: '300px' }}>
                  <p 
                    className="testimonial-text text-gray-800 mb-4 text-lg leading-relaxed" 
                    style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}
                  >
                    "{testimonial.quote}"
                  </p>
                  <div className="mt-auto pt-4 border-t-2 border-orange-200">
                    <p 
                      className="font-bold text-gray-900 text-xl" 
                      style={{ fontFamily: "'Poppins', sans-serif" }}
                    >
                      {testimonial.name}
                    </p>
                    <p 
                      className="text-sm text-gray-600" 
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {testimonial.title}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button 
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow-lg border-2 border-black hover:bg-orange-100 transition-colors"
            onClick={() => handleArrowClick('right')}
            aria-label="Scroll testimonials right"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center mt-6 space-x-2">
          {allTestimonials.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${index >= currentIndex && index < currentIndex + visibleTestimonials.length ? 'bg-orange-500' : 'bg-gray-300'} transition-colors`}
              onClick={() => {
                setCurrentIndex(index);
                setVisibleTestimonials(allTestimonials.slice(index, index + 4));
              }}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
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

          <div className="text-center text-gray-700 max-w-md mb-6" style={{ fontFamily: "'Poppins', sans-serif" }}>
            We make it fun and easy to learn the sign language. Don't hesitate
            and subscribe now! And we will take care of the rest!
          </div>

          <StyledLearnMoreButton
            whileHover={{ 
              scale: 1.05,
              boxShadow: "4px 4px 0 1px rgba(0,0,0)"
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
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

// Infinite Moving Sponsors Component
const InfiniteMovingSponsors = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    name: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
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

// Styled Components
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
    box-shadow: 4px 4px 0 1px rgba(0,0,0);
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
    box-shadow: 2px 2px 0 1px rgba(0,0,0);
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
  box-shadow: 0 0 0 0 rgba(0,0,0,0);
  
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
    box-shadow: 4px 4px 0 1px rgba(0,0,0);
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
  box-shadow: 0 0 0 0 rgba(0,0,0,0);
  
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
    box-shadow: 4px 4px 0 1px rgba(0,0,0);
  }
  
  &:active {
    transform: translateY(0);
  }
`;

export default Home;