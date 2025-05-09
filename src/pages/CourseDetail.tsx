import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Calendar, Users, Award, CheckCircle, ArrowRight, Check } from 'lucide-react';
const CourseDetail = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-900 to-purple-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full font-semibold text-sm mb-4">
                MOST POPULAR
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                Full Stack Foundation: 7-Day AI-Powered Web Development Workshop
              </h1>
              <p className="text-xl text-indigo-200 mb-8">
                Master the essentials of modern web development in just one week with our AI-enhanced learning approach.
              </p>
              <div className="flex flex-wrap gap-6 mb-8">
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-indigo-300 mr-2" />
                  <span>7 Days</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 text-indigo-300 mr-2" />
                  <span>Cohort-1: 15th to 22nd March </span>
                </div>
                <div className="flex items-center">
                  <Users className="h-5 w-5 text-indigo-300 mr-2" />
                  <span>Beginner to Intermediate</span>
                </div>
              </div>
              <Link 
                to="/enroll" 
                className="inline-flex items-center px-6 py-3 bg-indigo-500 hover:bg-indigo-600 text-white rounded-lg font-medium transition-colors"
              >
                Enroll Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div className="hidden md:block">
              <img 
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
                alt="Web Development Workshop" 
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Course Overview Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Course Overview</h2>
              <p className="text-gray-700 mb-6">
                The Full Stack Foundation workshop is an intensive, hands-on program designed to give you a comprehensive introduction to modern web development. Through a combination of AI-powered learning modules, live coding sessions, and project-based assignments, you'll build a strong foundation in both front-end and back-end technologies.
              </p>
              <p className="text-gray-700 mb-6">
                What sets this workshop apart is our unique AI-enhanced approach. Our intelligent learning system adapts to your progress, providing additional resources and challenges where needed, while accelerating through concepts you grasp quickly. This ensures that every minute of your learning journey is optimized for maximum growth.
              </p>
              <p className="text-gray-700 mb-8">
                By the end of the 7 days, you'll have built a complete web application from scratch, giving you the confidence and skills to continue your development journey or tackle real-world projects.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">What You'll Learn</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span>HTML5, CSS3, and modern JavaScript (ES6+)</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span>React.js fundamentals and component architecture</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span>Node.js and Express for backend development</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span>Database design and integration with MongoDB</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span>API development and integration</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span>Authentication and authorization</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span>Responsive design principles</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span>Deployment and hosting</span>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Course Schedule</h3>
              <div className="space-y-6 mb-8">
                <div className="border-l-4 border-indigo-500 pl-4">
                  <h4 className="font-bold text-gray-900">Day 1-2: Front-End Foundations</h4>
                  <p className="text-gray-700">HTML, CSS, JavaScript fundamentals, and introduction to React</p>
                </div>
                <div className="border-l-4 border-indigo-500 pl-4">
                  <h4 className="font-bold text-gray-900">Day 3-4: Back-End Development</h4>
                  <p className="text-gray-700">Node.js, Express, and database integration with MongoDB</p>
                </div>
                <div className="border-l-4 border-indigo-500 pl-4">
                  <h4 className="font-bold text-gray-900">Day 5-6: Full Stack Integration</h4>
                  <p className="text-gray-700">Connecting front-end and back-end, authentication, and advanced features</p>
                </div>
                <div className="border-l-4 border-indigo-500 pl-4">
                  <h4 className="font-bold text-gray-900">Day 7: Deployment and Next Steps</h4>
                  <p className="text-gray-700">Deploying your application, best practices, and continuing your learning journey</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-gray-50 p-6 rounded-xl sticky top-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Course Details</h3>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-indigo-600 mr-3" />
                    <div>
                      <p className="font-medium text-gray-900">Duration</p>
                      <p className="text-gray-600">7 days (1:00-1:30 hours/day)</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <Calendar className="h-5 w-5 text-indigo-600 mr-3" />
                    <div>
                      <p className="font-medium text-gray-900">Start Date</p>
                      <p className="text-gray-600">March 15th to 22nd</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <Users className="h-5 w-5 text-indigo-600 mr-3" />
                    <div>
                      <p className="font-medium text-gray-900">Skill Level</p>
                      <p className="text-gray-600">Beginner to Intermediate</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <Award className="h-5 w-5 text-indigo-600 mr-3" />
                    <div>
                      <p className="font-medium text-gray-900">Certificate</p>
                      <p className="text-gray-600">Yes, upon completion</p>
                    </div>
                  </div>
                </div>
                
                <div className="border-t border-gray-200 pt-6 mb-6">
                  <h4 className="font-bold text-gray-900 mb-3">Prerequisites</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">Basic computer literacy</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">Interest in programming</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">No prior coding experience required</span>
                    </li>
                  </ul>
                </div>
                
                <Link 
                  to="/enroll" 
                  className="block w-full py-3 px-4 bg-indigo-600 hover:bg-indigo-700 text-white text-center rounded-lg font-medium transition-colors"
                >
                  Enroll Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
          
          <div className="space-y-6 max-w-3xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Do I need any prior programming experience?</h3>
              <p className="text-gray-700">
                No prior programming experience is required. Our AI-powered learning system adapts to your skill level, making this workshop accessible to complete beginners while still challenging for those with some experience.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-2">How is this different from other coding bootcamps?</h3>
              <p className="text-gray-700">
                Our workshop uses adaptive AI technology to personalize your learning experience, focusing on areas where you need more help and accelerating through concepts you grasp quickly. We also emphasize real-world projects and industry-relevant skills rather than theoretical knowledge.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-2">What kind of project will I build during the workshop?</h3>
              <p className="text-gray-700">
                You'll build a complete web application from scratch, which could be a personal portfolio, a task management app, or an e-commerce store. The specific project can be tailored to your interests while ensuring you learn all the core concepts.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-2">What happens after I complete the workshop?</h3>
              <p className="text-gray-700">
                After completing the workshop, you'll receive a certificate and continued access to our learning resources. You'll also be invited to join our alumni community, where you can network with other graduates and receive updates on advanced courses and job opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-indigo-900 to-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Skills?</h2>
          <p className="text-xl text-indigo-200 mb-8 max-w-3xl mx-auto">
            Join our next cohort and start your journey to becoming a full stack developer.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link 
              to="/contact" 
              className="px-8 py-3 bg-white text-indigo-900 hover:bg-indigo-100 rounded-lg font-medium transition-colors"
            >
              Enroll Now
            </Link>
            <Link 
              to="/courses" 
              className="px-8 py-3 bg-transparent border border-white hover:bg-indigo-800 rounded-lg font-medium transition-colors"
            >
              Explore Other Courses
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CourseDetail;