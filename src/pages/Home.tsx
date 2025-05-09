import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const Home = () => {
  // Testimonials data for the moving cards
  const testimonials = [
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
      quote: "I was skeptical about AI-powered education, but after completing the accelerator, I'm a complete believer. Game-changing!",
      name: "James Park",
      title: "Fullstack Developer"
    }
  ];

  return (
    <div className="bg-white text-gray-900">
      {/* Font import */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
        `}
      </style>

      {/* Hero Section */}
      <section className="min-h-screen bg-black text-white relative flex items-center justify-center">
        <div className="absolute top-10 left-1/2 transform -translate-x-1/2 bg-orange-100 text-orange-800 px-6 py-2 rounded-full text-sm font-medium shadow-md z-20">
          New courses launching May 2023
        </div>
        <div className="relative z-10 text-center max-w-5xl px-6">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-white" style={{ fontFamily: "'Poppins', sans-serif" }}>
            Revolutionizing <span className="text-orange-500">Education</span> Through AI
          </h1>

          <div className="my-16 flex flex-col items-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mb-10"
            >
              <Link
                to="/enroll"
                className="border-2 border-white bg-white text-black font-bold text-lg px-8 py-3 rounded-full transition-all duration-300 inline-flex items-center hover:bg-black hover:text-white"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Enroll Today
                <ArrowRight className="ml-2 h-6 w-6" />
              </Link>
            </motion.div>

            <p className="text-white text-lg max-w-3xl mx-auto mb-10" style={{ fontFamily: "'Poppins', sans-serif", fontSize: "1.05rem" }}>
              Education is not the filling of a pail, but the lighting of a fire. Discover how we ignite minds through artificial intelligence.
            </p>
          </div>

          <blockquote className="mt-20 text-white font-semibold text-lg italic" style={{ fontFamily: "'Poppins', sans-serif" }}>
            "The future belongs to those who prepare for it today."
          </blockquote>
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

          {/* Enhanced Learn More Button */}
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

      {/* Testimonials Section with Infinite Moving Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-8 text-center mb-12">
          <h2 className="text-4xl font-bold mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>
            What Our <span className="text-orange-500">Students</span> Say
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto" style={{ fontFamily: "'Poppins', sans-serif" }}>
            Hear from learners who transformed their careers with our AI-powered education.
          </p>
        </div>
        
        <div className="h-[30rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <div className="flex justify-center mb-8">
            <div className="bg-orange-500 text-white rounded-full w-20 h-20 flex items-center justify-center text-3xl font-bold">
              E
            </div>
          </div>

          <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>
            Start Your Transformation
          </h2>
          <p className="text-gray-600 mb-8 max-w-md mx-auto" style={{ fontFamily: "'Poppins', sans-serif" }}>
            Join thousands of learners who have accelerated their careers.
          </p>
          <div className="flex justify-center">
            <Link
              to="/enroll"
              className="bg-orange-500 text-white font-semibold px-8 py-3 rounded-full hover:bg-orange-600 transition-all duration-300 border-2 border-orange-300"
            >
              Enroll Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

// Infinite Moving Cards Component
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
          <StyledTestimonialCard
            key={item.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="card columns">
              <div className="button-container">
                <button className="btn red-flag">TESTIMONIAL</button>
                <p className="offer">⭐</p>
              </div>
              <p className="secondary-heading">
                {item.quote}
              </p>
              <div className="testimonial-footer">
                <span className="testimonial-name">{item.name}</span>
                <span className="testimonial-title">{item.title}</span>
              </div>
            </div>
          </StyledTestimonialCard>
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

const StyledTestimonialCard = styled(motion.li)`
  width: 350px;
  max-width: 100%;
  position: relative;
  flex-shrink: 0;
  
  .columns {
    width: 100%;
    height: 100%;
    position: relative;
    border-radius: 20px;
    padding: 35px;
    border: 2px solid black;
    transition: all 0.4s;
    background: white;
    display: flex;
    flex-direction: column;
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

  .secondary-heading {
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 20px;
    font-family: 'Poppins', sans-serif;
    line-height: 1.6;
    flex-grow: 1;
  }

  .testimonial-footer {
    display: flex;
    flex-direction: column;
    margin-top: auto;
  }

  .testimonial-name {
    font-size: 16px;
    font-weight: 600;
    font-family: 'Poppins', sans-serif;
    color: #333;
  }

  .testimonial-title {
    font-size: 14px;
    font-weight: 500;
    font-family: 'Poppins', sans-serif;
    color: #666;
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