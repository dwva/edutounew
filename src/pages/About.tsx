import React from 'react';
import { Users, Award, Rocket, GraduationCap, Building, Briefcase } from 'lucide-react';
import PixelatedCanvasDemo from "../components/pixelated-canvas-demo-2";

// Import your image here from the components folder.
import aboutImage from '../components/team.jpg';

const About = () => {
  return (
    <div className="min-h-screen w-full bg-white relative">
    
      
      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="bg-transparent text-black pt-24 pb-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                About <span className="text-orange-500">Edutou</span>
              </h1>
              <div className="max-w-3xl mx-auto text-lg text-gray-700">
                <p className="mb-2">
                  At Edutou, we're passionate about bridging the gap between education and industry demands.
                </p>
              </div>
            </div>

            {/* New: Group Image with Rounded Corners and adjusted dimensions */}
            <div className="mb-16 flex justify-center">
              <img
                src={aboutImage}
                alt="Edutou Team"
                className="rounded-xl shadow-lg w-full h-auto object-cover max-w-6xl"
                style={{ maxHeight: '600px' }}
              />
            </div>

            {/* New: Quote Section */}
            <div className="max-w-4xl mx-auto text-center mb-16">
              <blockquote className="text-2xl md:text-3xl font-light text-gray-800 italic leading-relaxed">
                “Education is not the filling of a pail, but the lighting of a fire.”
              </blockquote>
              <p className="mt-4 text-lg text-gray-600 font-medium">— William Butler Yeats</p>
            </div>

            {/* New: Achievements Section */}
            <section className="py-16 bg-transparent text-black">
              <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold mb-4 text-orange-500">Our Achievements</h2>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    A look at what we've accomplished together
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                  <div className="flex flex-col items-center">
                    <GraduationCap className="h-16 w-16 text-orange-500 mb-4" />
                    <span className="text-4xl font-bold text-gray-800">50K+</span>
                    <p className="text-lg text-gray-600 mt-2">Students Taught</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <Building className="h-16 w-16 text-orange-500 mb-4" />
                    <span className="text-4xl font-bold text-gray-800">200+</span>
                    <p className="text-lg text-gray-600 mt-2">Industry Partnerships</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <Briefcase className="h-16 w-16 text-orange-500 mb-4" />
                    <span className="text-4xl font-bold text-gray-800">95%</span>
                    <p className="text-lg text-gray-600 mt-2">Career Placements</p>
                  </div>
                </div>
              </div>
            </section>

          {/* Existing: Particle Logo Animation (Left) and Paragraph Content (Right) */}
            <div className="flex flex-col lg:flex-row items-center justify-between gap-20 mt-8">
              {/* Left side - Particle Logo Animation with circular background */}
              <div className="lg:w-1/2 flex justify-center lg:justify-start">
                <div className="relative w-80 h-80 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden">
                  <PixelatedCanvasDemo />
                </div>
              </div>
              {/* Right side - Content with Image 2 like structure */}
              <div className="lg:w-1/2 flex justify-center lg:justify-end">
                <div className="text-left max-w-md space-y-6">
                  <div className="flex items-start">
                    <div className="w-3 h-3 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">Bridging the Gap</h3>
                      <p className="text-md text-gray-700">
                        EDUTOU started from a simple idea: traditional education isn't keeping up with the modern workplace. We bridge this gap.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-3 h-3 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">Visionary Leadership</h3>
                      <p className="text-md text-gray-700">
                        Our founders, a mix of educators and tech leaders, envisioned a learning experience blending cutting-edge tech with real-world skills.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-3 h-3 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">Impactful Transformations</h3>
                      <p className="text-md text-gray-700">
                        We've helped thousands transform their careers through our innovative approach. We're building the future of learning.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section with Cards */}
        <section className="py-16 bg-transparent text-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-orange-500">Our Values</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                The principles that guide everything we do at EDUTOU
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Innovation Card */}
              <div className="flex flex-col items-center text-center p-8 bg-white rounded-lg shadow-lg border border-gray-100 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
                <div className="bg-orange-100 p-4 rounded-full w-20 h-20 flex items-center justify-center mb-6">
                  <Rocket className="h-10 w-10 text-orange-500" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-orange-500">Innovation</h3>
                <p className="text-gray-700">
                  We constantly push the boundaries of what's possible in education, embracing new technologies and methodologies.
                </p>
              </div>

              {/* Community Card */}
              <div className="flex flex-col items-center text-center p-8 bg-white rounded-lg shadow-lg border border-gray-100 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
                <div className="bg-orange-100 p-4 rounded-full w-20 h-20 flex items-center justify-center mb-6">
                  <Users className="h-10 w-10 text-orange-500" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-orange-500">Community</h3>
                <p className="text-gray-700">
                  We believe in the power of collaboration and peer learning, fostering a supportive community of lifelong learners.
                </p>
              </div>

              {/* Excellence Card */}
              <div className="flex flex-col items-center text-center p-8 bg-white rounded-lg shadow-lg border border-gray-100 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
                <div className="bg-orange-100 p-4 rounded-full w-20 h-20 flex items-center justify-center mb-6">
                  <Award className="h-10 w-10 text-orange-500" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-orange-500">Excellence</h3>
                <p className="text-gray-700">
                  We hold ourselves and our students to the highest standards, striving for excellence in everything we do.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;