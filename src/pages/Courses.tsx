import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  tech: string[];
  status: "current" | "soon";
  enroll?: string;
  details?: string;
};

function ProjectCard({
  project,
  hideTech = false,
}: {
  project: Project;
  hideTech?: boolean;
}) {
  return (
    <div className="bg-white border-2 border-black rounded-xl shadow-sm overflow-hidden flex flex-col h-full hover:shadow-[6px_6px_0_0_rgba(0,0,0,0.2)] transition-transform hover:-translate-y-0.5">
      <div className="aspect-video bg-gray-100 border-b-2 border-black">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-5 flex flex-col gap-3 flex-1">
        <h3 className="text-lg font-bold text-gray-900">{project.title}</h3>
        <p className="text-sm text-gray-700 leading-relaxed flex-1">
          {project.description}
        </p>
        {!hideTech && (
          <div className="flex flex-wrap gap-2 mt-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="px-2 py-1 text-xs rounded-full bg-orange-50 text-orange-800 border border-orange-100"
              >
                {t}
              </span>
            ))}
          </div>
        )}
      </div>
      <div className="px-5 pb-5 pt-1 flex items-center gap-3">
        {project.status === "current" ? (
          <button className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-orange-500 hover:bg-orange-600 text-white border-2 border-black transition-colors text-sm font-semibold">
            Enroll
          </button>
        ) : (
          <button className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-gray-400 text-white border-2 border-black cursor-not-allowed text-sm font-semibold">
            Soon
          </button>
        )}
      </div>
    </div>
  );
}

const CourseCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const courses: Project[] = [
    {
      id: 1,
      title: "Full Stack Development Powered by AI",
      description:
        "Build modern web applications using AI-powered tools and frameworks. Master both frontend and backend development with cutting-edge AI assistance.",
      image:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=250&fit=crop",
      tech: ["React", "Node.js", "AI Tools", "MongoDB"],
      status: "current",
    },
    {
      id: 2,
      title: "Front End Development",
      description:
        "Master modern frontend technologies including React, Vue, and advanced CSS to create stunning, responsive user interfaces.",
      image:
        "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=400&h=250&fit=crop",
      tech: ["React", "Vue", "CSS3", "JavaScript"],
      status: "current",
    },
    {
      id: 3,
      title: "Zero-Hero AI Tools for Development",
      description:
        "Learn to leverage AI tools to supercharge your development workflow and build intelligent applications from scratch.",
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop",
      tech: ["OpenAI", "GitHub Copilot", "ChatGPT", "AI APIs"],
      status: "current",
    },
    {
      id: 4,
      title: "Pure Backend Development",
      description:
        "Deep dive into server-side development, APIs, databases, and cloud architecture for building robust, scalable applications.",
      image:
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=250&fit=crop",
      tech: ["Node.js", "Express", "PostgreSQL", "AWS"],
      status: "soon",
    },
    {
      id: 5,
      title: "Zero-Hero Python Development",
      description:
        "Master Python from basics to advanced concepts including web development, data analysis, automation, and machine learning.",
      image:
        "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=400&h=250&fit=crop",
      tech: ["Python", "Django", "Flask", "Pandas"],
      status: "soon",
    },
    {
      id: 6,
      title: "AI Essentials",
      description:
        "Understanding core AI concepts, machine learning fundamentals, and practical AI implementation strategies for developers.",
      image:
        "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=400&h=250&fit=crop",
      tech: ["Machine Learning", "TensorFlow", "PyTorch", "Data Science"],
      status: "current",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % (courses.length - 2));
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + (courses.length - 2)) % (courses.length - 2)
    );
  };

  const visibleCourses = courses.slice(currentSlide, currentSlide + 3);

  return (
    <div className="bg-gray-50 min-h-screen p-6 pt-28">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Explore Our <span className="text-orange-500">Courses</span>
        </h2>

        {/* Mobile: Horizontal Scroll */}
        <div className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory md:hidden">
          {courses.map((course) => (
            <div
              key={course.id}
              className="min-w-[80%] snap-center flex-shrink-0"
            >
              <ProjectCard project={course} />
            </div>
          ))}
        </div>

        {/* Desktop: Carousel with buttons */}
        <div className="relative hidden md:block">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-gray-100 border-2 border-black rounded-full p-2 md:p-3 transition-all duration-300 shadow-lg"
            disabled={currentSlide === 0}
            aria-label="Previous Slide"
            title="Previous Slide"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-black" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-gray-100 border-2 border-black rounded-full p-2 md:p-3 transition-all duration-300 shadow-lg"
            disabled={currentSlide >= courses.length - 3}
            aria-label="Next Slide"
            title="Next Slide"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-black" />
          </button>

          {/* Course Cards */}
          <div className="grid grid-cols-3 gap-6 px-4 md:px-16">
            {visibleCourses.map((course) => (
              <ProjectCard key={course.id} project={course} />
            ))}
          </div>
          {/* Dot Navigation */}
          <div className="flex justify-center gap-2 mt-6">
            {Array.from({ length: courses.length - 2 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 border-2 border-black ${
                  index === currentSlide
                    ? "bg-orange-500"
                    : "bg-white hover:bg-gray-200"
                }`}
                aria-label={`Go to slide ${index + 1}`}
                title={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCarousel;
