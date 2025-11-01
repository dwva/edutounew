import React from 'react'; 
import { Users, Award, Rocket, GraduationCap, Building, Briefcase, ArrowRight } from 'lucide-react'; 
import styled from 'styled-components';
import { motion } from "framer-motion";

// Styled Components
const StyledCardBase = styled.div`
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

const StyledCard = motion(StyledCardBase);

const StyledEnrollButton = styled(motion.button)`
    padding: 10px 20px;
    border: 2px solid black;
    background-color: #ff8c00;
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
    color: white;
    
    @media (max-width: 768px) {
        padding: 8px 16px;
        font-size: 0.8rem;
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

import PixelatedCanvasDemo from '../components/pixelated-canvas-demo-2';
import teamImage from '../components/team.jpg';

// Placeholder for hero image - replace with your actual image import
const heroImage = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='400'%3E%3Crect fill='%23f5f5f5' width='800' height='400'/%3E%3Ctext x='50%25' y='50%25' font-size='20' text-anchor='middle' fill='%23999'%3EEdutou Hero Image%3C/text%3E%3C/svg%3E";

// Remove the placeholder for team image - replace with your actual image import
const aboutImage = teamImage;

// Remove the placeholder for logo animation component

const About = () => { 
  return ( 
    <div className="min-h-screen w-full bg-white relative"> 
      <style>
        {`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap');
        
        .hero-heading {
          font-family: 'Poppins', sans-serif;
          font-weight: 700;
        }
        
        .section-heading {
          font-family: 'Poppins', sans-serif;
          font-weight: 700;
        }
        
        .subheading {
          font-family: 'Poppins', sans-serif;
          font-weight: 600;
        }
        
        .body-text {
          font-family: 'Poppins', sans-serif;
          font-weight: 400;
        }
        `}
      </style>
      <div className="relative z-10"> 
        {/* Hero Section */} 
        <section className="bg-transparent text-black pt-24 pb-12"> 
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> 
            <div className="text-left mb-12 max-w-4xl"> 
              <h1 className="text-5xl md:text-7xl font-bold section-heading mb-6" style={{ lineHeight: '1.2' }}> 
                ABOUT <span className="text-orange-500">EDUTOU</span> 
              </h1> 
              <div className="text-lg md:text-xl text-gray-700 max-w-2xl"> 
                <p className="mb-2 body-text leading-relaxed" style={{ fontSize: '18px', lineHeight: '1.6' }}> 
                  At Edutou, we're passionate about bridging the gap between education and industry demands. We empower learners with cutting-edge skills and knowledge that transform careers and shape the future of work.
                </p> 
              </div> 
            </div> 
            
            {/* Group Image */} 
            <div className="mb-16 flex justify-center"> 
              <div className="relative max-w-7xl w-full"> 
                <img 
                  src={aboutImage} 
                  alt="Edutou Team" 
                  className="rounded-xl w-full h-auto object-cover border-4 border-orange-200" 
                  style={{ maxHeight: '500px' }} 
                /> 
                <div 
                  className="absolute bottom-0 left-0 right-0 rounded-b-xl pointer-events-none" 
                  style={{ 
                    height: '55%', 
                    background: 
                      'linear-gradient(to bottom, transparent 0%, rgba(255, 255, 255,0.00001) 20%, rgba(255, 255, 255, 0.8) 60%, rgb(255, 255, 255) 100%)', 
                    borderRadius: '0 0 0.75rem 0.75rem', 
                  }} 
                ></div> 
              </div> 
            </div> 
            
            {/* Quote */} 
            <div className="max-w-4xl mx-auto text-center mb-16"> 
              <blockquote className="text-2xl md:text-3xl hero-heading text-gray-800 italic leading-relaxed"> 
                "Education is not the filling of a pail, but the lighting of a fire." 
              </blockquote> 
              <p className="mt-4 text-lg text-gray-600 subheading">— William Butler Yeats</p> 
            </div> 
            
            {/* Combined Achievements */} 
            <section className="py-16 bg-transparent"> 
              <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8"> 
                <div className="text-center mb-12"> 
                  <h2 className="text-3xl section-heading mb-4 text-orange-500">Our Achievements</h2> 
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto body-text"> 
                    A look at what we've accomplished together 
                  </p> 
                </div> 
                
                {/* Single rounded tab */} 
                <div className="bg-white rounded-3xl p-6 flex flex-col md:flex-row items-center justify-around text-center border border-white shadow-lg"> 
                  <div className="mb-4 md:mb-0"> 
                    <GraduationCap className="h-8 w-8 mx-auto mb-1 text-black" /> 
                    <span className="text-xl font-bold text-black">50K+</span> 
                    <p className="text-xs mt-1 text-black">Students Taught</p> 
                  </div> 
                  <div className="mb-4 md:mb-0"> 
                    <Building className="h-8 w-8 mx-auto mb-1 text-black" /> 
                    <span className="text-xl font-bold text-black">200+</span> 
                    <p className="text-xs mt-1 text-black">Industry Partnerships</p> 
                  </div> 
                  <div> 
                    <Briefcase className="h-8 w-8 mx-auto mb-1 text-black" /> 
                    <span className="text-xl font-bold text-black">95%</span> 
                    <p className="text-xs mt-1 text-black">Career Placements</p> 
                  </div> 
                </div> 
                
                {/* Alternating Paragraphs */} 
                <div className="mt-12 bg-orange-50 rounded-3xl p-10 space-y-8"> 
                  <div className="flex flex-col md:flex-row items-center md:items-start"> 
                    <div className="md:w-1/2 text-left"> 
                      <h3 className="text-xl subheading text-orange-500">Bridging the Gap</h3> 
                      <p className="text-gray-700 body-text"> 
                        EDUTOU started from a simple idea: traditional education isn't keeping up with the modern workplace. We bridge this gap. 
                      </p> 
                    </div> 
                    <div className="md:w-1/2"></div> 
                  </div> 
                  <div className="flex flex-col md:flex-row items-center md:items-start"> 
                    <div className="md:w-1/2 hidden md:block"></div> 
                    <div className="md:w-1/2 text-right"> 
                      <h3 className="text-xl subheading text-orange-500">Visionary Leadership</h3> 
                      <p className="text-gray-700 body-text"> 
                        Our founders, a mix of educators and tech leaders, envisioned a learning experience blending cutting-edge tech with real-world skills. 
                      </p> 
                    </div> 
                  </div> 
                  <div className="flex flex-col md:flex-row items-center md:items-start"> 
                    <div className="md:w-1/2 text-left"> 
                      <h3 className="text-xl font-semibold text-orange-500">Impactful Transformations</h3> 
                      <p className="text-gray-700 body-text"> 
                        We've helped thousands transform their careers through our innovative approach. We're building the future of learning. 
                      </p> 
                    </div> 
                    <div className="md:w-1/2"></div> 
                  </div> 
                </div> 
                
                {/* Logo Animation with Nearby Text */}
                <div className="mt-16 flex justify-center items-center w-full relative">
                  {/* Left-bottom text */}
                  <div className="absolute bottom-0 left-12 text-left max-w-xs">
                    <h4 className="text-lg section-heading text-orange-500">Empower Tomorrow</h4>
                    <p className="text-gray-700 text-sm body-text">
                      We equip learners with skills that make an impact in their careers.
                    </p>
                  </div>
                  {/* Logo circle */}
                  <div className="w-80 h-80 rounded-full bg-orange-100 flex items-center justify-center overflow-hidden relative z-10">
                    <PixelatedCanvasDemo />
                  </div>
                  {/* Right-top text */}
                  <div className="absolute top-0 right-12 text-right max-w-xs">
                    <h4 className="text-lg section-heading text-orange-500">Innovate Today</h4>
                    <p className="text-gray-700 text-sm body-text">
                      Discover cutting-edge solutions and embrace the future with us.
                    </p>
                  </div>
                </div>
              </div> 
            </section> 
            
            {/* Team Section */}
            <section className="py-16 bg-transparent">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
               
                
                <div className="bg-orange-50 rounded-3xl p-10">
                  <div className="text-center">
                    <p className="text-gray-700 body-text max-w-3xl mx-auto">
                      Our team brings together decades of experience in education, technology, and business to deliver exceptional learning experiences.
                    </p>
                  </div>
                </div>
              </div>
            </section>
            
            {/* Values Section */} 
            <section className="py-16 bg-transparent text-black"> 
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> 
                <div className="text-center mb-12"> 
                  <h2 className="text-3xl section-heading mb-4 text-orange-500">Our Values</h2> 
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto body-text"> 
                    The principles that guide everything we do at EDUTOU 
                  </p> 
                </div> 
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8"> 
                  <StyledCard
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <div className="columns">
                      <div className="flex justify-center mb-6">
                        <div className="bg-orange-100 p-4 rounded-full w-20 h-20 flex items-center justify-center">
                          <Rocket className="h-10 w-10 text-orange-500" />
                        </div>
                      </div>
                      <h3 className="secondary-heading text-orange-500">Innovation</h3>
                      <p className="card-description text-gray-700">
                        We constantly push the boundaries of what's possible in education, embracing new technologies and methodologies.
                      </p>
                    </div>
                  </StyledCard>
                  <StyledCard
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="columns">
                      <div className="flex justify-center mb-6">
                        <div className="bg-orange-100 p-4 rounded-full w-20 h-20 flex items-center justify-center">
                          <Users className="h-10 w-10 text-orange-500" />
                        </div>
                      </div>
                      <h3 className="secondary-heading text-orange-500">Community</h3>
                      <p className="card-description text-gray-700">
                        We believe in the power of collaboration and peer learning, fostering a supportive community of lifelong learners.
                      </p>
                    </div>
                  </StyledCard>
                  <StyledCard
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <div className="columns">
                      <div className="flex justify-center mb-6">
                        <div className="bg-orange-100 p-4 rounded-full w-20 h-20 flex items-center justify-center">
                          <Award className="h-10 w-10 text-orange-500" />
                        </div>
                      </div>
                      <h3 className="secondary-heading text-orange-500">Excellence</h3>
                      <p className="card-description text-gray-700">
                        We hold ourselves and our students to the highest standards, striving for excellence in everything we do.
                      </p>
                    </div>
                  </StyledCard>
                </div> 
              </div> 
            </section> 
             
            {/* Future Section */} 
            <section className="bg-white text-white py-24"> 
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> 
                <div className="text-center"> 
                  <h2 className="text-5xl md:text-7xl section-heading mb-10 leading-snug text-black"> 
                    The future of your <span className="text-orange-500 subheading">industry starts here</span> 
                  </h2> 
                  <div className="flex justify-center space-x-4"> 
                    <StyledEnrollButton
                      whileHover={{
                        scale: 1.05,
                        boxShadow: '4px 4px 0 1px rgba(0,0,0)',
                      }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                    >
                      <span className="flex items-center">
                        Let's start together
                        <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
                      </span>
                    </StyledEnrollButton>
                  </div> 
                </div> 
              </div> 
            </section> 
          </div> 
        </section> 
      </div> 
    </div> 
  ); 
}; 

export default About;