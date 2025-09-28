import React from 'react'; 
import { Users, Award, Rocket, GraduationCap, Building, Briefcase } from 'lucide-react'; 
import PixelatedCanvasDemo from "../components/pixelated-canvas-demo-2"; 
import aboutImage from '../components/team.jpg'; 

const About = () => { 
  return ( 
    <div className="min-h-screen w-full bg-white relative"> 
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

            {/* Group Image */} 
            <div className="mb-16 flex justify-center"> 
              <div className="relative max-w-5xl w-full"> 
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
              <blockquote className="text-2xl md:text-3xl font-light text-gray-800 italic leading-relaxed"> 
                "Education is not the filling of a pail, but the lighting of a fire." 
              </blockquote> 
              <p className="mt-4 text-lg text-gray-600 font-medium">— William Butler Yeats</p> 
            </div> 

            {/* Combined Achievements */} 
            <section className="py-16 bg-transparent"> 
              <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8"> 
                <div className="text-center mb-12"> 
                  <h2 className="text-3xl font-bold mb-4 text-orange-500">Our Achievements</h2> 
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto"> 
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
                      <h3 className="text-xl font-semibold text-orange-500">Bridging the Gap</h3> 
                      <p className="text-gray-700"> 
                        EDUTOU started from a simple idea: traditional education isn't keeping up with the modern workplace. We bridge this gap. 
                      </p> 
                    </div> 
                    <div className="md:w-1/2"></div> 
                  </div> 

                  <div className="flex flex-col md:flex-row items-center md:items-start"> 
                    <div className="md:w-1/2 hidden md:block"></div> 
                    <div className="md:w-1/2 text-right"> 
                      <h3 className="text-xl font-semibold text-orange-500">Visionary Leadership</h3> 
                      <p className="text-gray-700"> 
                        Our founders, a mix of educators and tech leaders, envisioned a learning experience blending cutting-edge tech with real-world skills. 
                      </p> 
                    </div> 
                  </div> 

                  <div className="flex flex-col md:flex-row items-center md:items-start"> 
                    <div className="md:w-1/2 text-left"> 
                      <h3 className="text-xl font-semibold text-orange-500">Impactful Transformations</h3> 
                      <p className="text-gray-700"> 
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
                    <h4 className="text-lg font-bold text-orange-500">Empower Tomorrow</h4>
                    <p className="text-gray-700 text-sm">
                      We equip learners with skills that make a impact in their careers.
                    </p>
                  </div>

                  {/* Logo circle */}
                  <div className="w-80 h-80 rounded-full bg-orange-100 flex items-center justify-center overflow-hidden relative z-10">
                    <PixelatedCanvasDemo />
                  </div>

                  {/* Right-top text */}
                  <div className="absolute top-0 right-12 text-right max-w-xs">
                    <h4 className="text-lg font-bold text-orange-500">Innovate Today</h4>
                    <p className="text-gray-700 text-sm">
                      Discover cutting-edge solutions and embrace the future with us.
                    </p>
                  </div>
                </div>

              </div> 
            </section> 

            {/* Values Section */} 
            <section className="py-16 bg-transparent text-black"> 
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> 
                <div className="text-center mb-12"> 
                  <h2 className="text-3xl font-bold mb-4 text-orange-500">Our Values</h2> 
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto"> 
                    The principles that guide everything we do at EDUTOU 
                  </p> 
                </div> 

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8"> 
                  <div className="flex flex-col items-center text-center p-8 bg-white rounded-lg shadow-lg border border-gray-100 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"> 
                    <div className="bg-orange-100 p-4 rounded-full w-20 h-20 flex items-center justify-center mb-6"> 
                      <Rocket className="h-10 w-10 text-orange-500" /> 
                    </div> 
                    <h3 className="text-xl font-bold mb-2 text-orange-500">Innovation</h3> 
                    <p className="text-gray-700"> 
                      We constantly push the boundaries of what's possible in education, embracing new technologies and methodologies. 
                    </p> 
                  </div> 

                  <div className="flex flex-col items-center text-center p-8 bg-white rounded-lg shadow-lg border border-gray-100 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"> 
                    <div className="bg-orange-100 p-4 rounded-full w-20 h-20 flex items-center justify-center mb-6"> 
                      <Users className="h-10 w-10 text-orange-500" /> 
                    </div> 
                    <h3 className="text-xl font-bold mb-2 text-orange-500">Community</h3> 
                    <p className="text-gray-700"> 
                      We believe in the power of collaboration and peer learning, fostering a supportive community of lifelong learners. 
                    </p> 
                  </div> 

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
             
            {/* Future Section */} 
            <section className="bg-white text-white py-24"> 
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> 
                <div className="text-center"> 
                  <h2 className="text-5xl md:text-7xl font-bold mb-10 leading-snug text-black"> 
                    The future of your <span className="text-black font-medium">industry starts here</span> 
                  </h2> 
                  <div className="flex justify-center space-x-4"> 
                    <button className="px-8 py-3 text-lg font-medium text-black bg-white rounded-lg hover:bg-gray-200 transition duration-300 shadow-xl"> 
                      Lets start together 
                    </button> 
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
