import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ProjectCard, { type Project } from '../components/ProjectCard';

const Courses = () => {
  const courses: Project[] = [
    { id: 1, title: 'Full Stack Development Powered by AI', description: 'Hands-on full stack program enhanced by AI guidance. Build and deploy apps using React, Node.js, and databases with AI-assisted workflows.', image: '/placeholder.svg', tech: [], status: 'current', enroll: '/enroll' },
    { id: 2, title: 'Front End Development', description: 'Modern frontend engineering with React, component-driven design, performance optimization, and accessibility best practices.', image: '/placeholder.svg', tech: [], status: 'current', enroll: '/enroll' },
    { id: 3, title: 'Zero-Hero AI Tools for Development', description: 'Learn practical AI tooling to accelerate development: code assistance, testing, documentation, and automation from zero to hero.', image: '/placeholder.svg', tech: [], status: 'current', enroll: '/enroll' },
    { id: 4, title: 'Pure Backend Development', description: 'APIs, microservices, databases, and production-ready backends with robust testing and observability.', image: '/placeholder.svg', tech: [], status: 'soon', details: '/courses' },
    { id: 5, title: 'Zero-Hero Python Development', description: 'Python fundamentals to advanced: scripting, data handling, APIs, and packaging with real projects.', image: '/placeholder.svg', tech: [], status: 'soon', details: '/courses' },
    { id: 6, title: 'AI Essentials', description: 'Core AI concepts, prompts, embeddings, vector stores, and deployment practices for practical AI apps.', image: '/placeholder.svg', tech: [], status: 'current', enroll: '/enroll' },
  ];
  // Explore carousel animation state
  const [animateIndex, setAnimateIndex] = useState<number>(-1);
  const [revealed, setRevealed] = useState<boolean[]>(Array(courses.length).fill(false));
  const scrollerRef = useRef<HTMLDivElement>(null);

  const triggerSequential = () => {
    // reset
    setRevealed(Array(courses.length).fill(false));
    setAnimateIndex(0);
  };

  useEffect(() => {
    if (animateIndex < 0) return;
    if (animateIndex >= courses.length) return;

    const timeout = setTimeout(() => {
      setRevealed((prev) => {
        const next = [...prev];
        next[animateIndex] = true;
        return next;
      });
      // auto scroll to bring next into view
      if (scrollerRef.current) {
        scrollerRef.current.scrollBy({ left: 420, behavior: 'smooth' });
      }
      setAnimateIndex((i) => i + 1);
    }, 250);
    return () => clearTimeout(timeout);
  }, [animateIndex, courses.length]);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-white text-black py-20 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Courses</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Accelerate your career with our innovative, AI-powered learning experiences
          </p>
        </div>
      </section>

      {/* Courses Grid Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course) => (
              <ProjectCard key={course.id} project={course} hideTech />
            ))}
          </div>
        </div>
      </section>

      {/* Explore Our Courses - Horizontal with fade/slide and trigger button */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-2">Explore Our <span className="text-[var(--color-brand-dark)]">Courses</span></h2>
            <p className="text-gray-600">Click Play to reveal cards one by one</p>
          </div>
          <div className="relative">
            <button
              onClick={triggerSequential}
              className="absolute -top-14 right-0 px-4 py-2 rounded-lg bg-[var(--color-brand)] hover:bg-[var(--color-brand-dark)] text-white border border-black"
            >
              Play
            </button>
            <div ref={scrollerRef} className="flex gap-6 overflow-x-auto scroll-smooth pb-2">
              {courses.map((course, idx) => (
                <div
                  key={`explore-${course.id}`}
                  className="min-w-[380px] max-w-[420px]"
                  style={{
                    opacity: revealed[idx] ? 1 : 0,
                    transform: revealed[idx] ? 'translateX(0px)' : 'translateX(40px)',
                    transition: 'opacity 500ms ease, transform 500ms ease',
                  }}
                >
                  <ProjectCard project={course} hideTech />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white text-black border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Learning Journey?</h2>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Enroll today and take the first step toward mastering the skills that will define your future.
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center px-8 py-3 bg-[var(--color-brand)] hover:bg-[var(--color-brand-dark)] text-white rounded-lg font-medium transition-colors border border-black"
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