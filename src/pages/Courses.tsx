
import React from 'react';
import { Link } from 'react-router-dom';
import { Code, Brain, Clock, Users, Award, ArrowRight } from 'lucide-react';

const Courses = () => {
  const courses = [
    {
      id: 'full-stack-foundation',
      title: 'Full Stack Foundation: 7-Day AI-Powered Web Development Workshop',
      description: 'Master the essentials of modern web development in just one week with our AI-enhanced learning approach.',
      icon: <Code className="h-6 w-6" />,
      duration: '7 days',
      level: 'Beginner to Intermediate',
      featured: true,
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80'
    },
    {
      id: 'data-science-foundation',
      title: 'Data Science Foundation: 7-Day Data Analytics Workshop',
      description: 'Learn the fundamentals of data science, analytics, and visualization using modern tools and techniques.',
      icon: <Brain className="h-6 w-6" />,
      duration: '7 days',
      level: 'Beginner to Intermediate',
      featured: false,
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80'
    },
    {
      id: 'machine-learning-foundation',
      title: 'Machine Learning Foundation: 7-Day AI Workshop',
      description: 'Dive into the world of machine learning and artificial intelligence with hands-on projects and real-world applications.',
      icon: <Brain className="h-6 w-6" />,
      duration: '7 days',
      level: 'Beginner to Intermediate',
      featured: false,
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80'
    },
    {
      id: 'app-development-foundation',
      title: 'App Development Foundation: 7-Day Mobile Dev Workshop',
      description: 'Build mobile applications from scratch and learn the essential concepts of modern app development.',
      icon: <Code className="h-6 w-6" />,
      duration: '7 days',
      level: 'Beginner to Intermediate',
      featured: false,
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80'
    },
  ];
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-900 to-purple-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Courses</h1>
          <p className="text-xl text-indigo-200 max-w-3xl mx-auto">
            Accelerate your career with our innovative, AI-powered learning experiences
          </p>
        </div>
      </section>

      {/* Courses List Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8">
            {courses.map((course) => (
              <div 
                key={course.id}
                className={`bg-white rounded-xl overflow-hidden shadow-md border ${course.featured ? 'border-indigo-500' : 'border-gray-200'}`}
              >
                <div className="grid grid-cols-1 md:grid-cols-3">
                  <div className="md:col-span-1">
                    <img 
                      src={course.image} 
                      alt={course.title} 
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="p-6 md:col-span-2">
                    {course.featured && (
                      <div className="inline-block px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full font-semibold text-sm mb-4">
                        FEATURED COURSE
                      </div>
                    )}
                    <div className="flex items-center mb-3">
                      <div className={`p-2 rounded-full ${course.featured ? 'bg-indigo-100 text-indigo-600' : 'bg-gray-100 text-gray-600'} mr-3`}>
                        {course.icon}
                      </div>
                      <h2 className="text-2xl font-bold text-gray-900">{course.title}</h2>
                    </div>
                    <p className="text-gray-700 mb-6">
                      {course.description}
                    </p>
                    <div className="flex flex-wrap gap-4 mb-6">
                      <div className="flex items-center">
                        <Clock className="h-5 w-5 text-gray-500 mr-2" />
                        <span className="text-gray-700">{course.duration}</span>
                      </div>
                      <div className="flex items-center">
                        <Users className="h-5 w-5 text-gray-500 mr-2" />
                        <span className="text-gray-700">{course.level}</span>
                      </div>
                      <div className="flex items-center">
                        <Award className="h-5 w-5 text-gray-500 mr-2" />
                        <span className="text-gray-700">Certificate Included</span>
                      </div>
                    </div>
                                    <div className="flex items-center gap-4 mt-4">
                                    <div className="flex items-center gap-4 mt-4">
  {course.id === 'full-stack-foundation' ? (
    <Link 
      to="/enroll" 
      className="bg-indigo-600 text-white px-4 py-2 rounded-md inline-block hover:bg-indigo-700"
    >
      Enroll Now
    </Link>
  ) : (
    <>
      <Link 
        to="/enroll" 
        className="bg-gray-300 text-gray-500 px-4 py-2 rounded-md inline-block line-through cursor-not-allowed"
        onClick={(e) => e.preventDefault()}
      >
        Enroll Now
      </Link>
      <span className="text-red-600 font-semibold">
        Slots Full
      </span>
    </>
  )}
</div>

                  
</div>
                                  </div>
                                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Approach Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Learning Approach</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              What makes EDUTOU courses different from traditional education
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="bg-indigo-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <Brain className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Personalized Learning Paths</h3>
              <p className="text-gray-600">
                Our AI system adapts to your learning style and pace, creating a customized curriculum that maximizes your progress.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="bg-indigo-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <Code className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Project-Based Learning</h3>
              <p className="text-gray-600">
                Apply what you learn immediately through hands-on projects that simulate real-world challenges and build your portfolio.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="bg-indigo-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <Users className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Community & Mentorship</h3>
              <p className="text-gray-600">
                Connect with fellow learners and industry mentors who provide guidance, feedback, and networking opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-indigo-900 to-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Learning Journey?</h2>
          <p className="text-xl text-indigo-200 mb-8 max-w-3xl mx-auto">
            Enroll today and take the first step toward mastering the skills that will define your future.
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center px-8 py-3 bg-white text-indigo-900 hover:bg-indigo-100 rounded-lg font-medium transition-colors"
          >
            Contact Us
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Courses;