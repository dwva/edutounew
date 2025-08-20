import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Users, Clock, Code, Zap, Cpu, Server, Database, Brain } from 'lucide-react';

export type Project = {
    id: number;
    title: string;
    description: string;
    image: string;
    tech: string[];
    status: 'current' | 'soon';
    enroll?: string;
    details?: string;
};

function ProjectCard({ project, hideTech = false }: { project: Project; hideTech?: boolean }) {
    return (
        <div className="bg-white border-2 border-black rounded-xl shadow-sm overflow-hidden flex flex-col h-full hover:shadow-[6px_6px_0_0_rgba(0,0,0,0.2)] transition-transform hover:-translate-y-0.5 min-h-[400px]">
            <div className="aspect-video bg-gray-100 border-b-2 border-black">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
            </div>
            <div className="p-4 flex flex-col gap-3 flex-1">
                <h3 className="text-base md:text-lg font-bold text-gray-900 line-clamp-2">{project.title}</h3>
                <p className="text-xs md:text-sm text-gray-700 leading-relaxed flex-1 line-clamp-3">{project.description}</p>
                {!hideTech && (
                    <div className="flex flex-wrap gap-1.5 mt-2">
                        {project.tech.map((t) => (
                            <span key={t} className="px-2 py-1 text-xs rounded-full bg-orange-50 text-orange-800 border border-orange-100">
                                {t}
                            </span>
                        ))}
                    </div>
                )}
            </div>
            <div className="px-4 pb-4 pt-1 flex items-center gap-3">
                
                {project.status === 'current' ? (
                   
                    <button 
                        className="inline-flex items-center justify-center px-3 py-2 rounded-lg bg-orange-500 hover:bg-orange-600 text-white border-2 border-black transition-colors text-xs md:text-sm font-semibold w-full"
                        onClick={() => (window.location.href = "/enroll")}
                    >
                        Enroll
                    </button>
                ) : (
                    <button className="inline-flex items-center justify-center px-3 py-2 rounded-lg bg-gray-400 text-white border-2 border-black cursor-not-allowed text-xs md:text-sm font-semibold w-full">
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
            title: "AI Essentials",
            description: "Understanding core AI concepts, machine learning fundamentals, and practical AI implementation strategies for developers.",
            image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=400&h=250&fit=crop",
            tech: ["Machine Learning", "TensorFlow", "PyTorch", "Data Science"],
            status: "current"
            
        },

        {
            id: 6,
            title: "Full Stack Development Powered by AI",
            description: "Build modern web applications using AI-powered tools and frameworks. Master both frontend and backend development with cutting-edge AI assistance.",
            image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=250&fit=crop",
            tech: ["React", "Node.js", "AI Tools", "MongoDB"],
            status: "soon"
        },
        {
            id: 2,
            title: "Front End Development",
            description: "Master modern frontend technologies including React, Vue, and advanced CSS to create stunning, responsive user interfaces.",
            image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=400&h=250&fit=crop",
            tech: ["React", "Vue", "CSS3", "JavaScript"],
            status: "soon"
        },
        {
            id: 3,
            title: "Zero-Hero AI Tools for Development",
            description: "Learn to leverage AI tools to supercharge your development workflow and build intelligent applications from scratch.",
            image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop",
            tech: ["OpenAI", "GitHub Copilot", "ChatGPT", "AI APIs"],
            status: "soon"
        },
        {
            id: 4,
            title: "Pure Backend Development",
            description: "Deep dive into server-side development, APIs, databases, and cloud architecture for building robust, scalable applications.",
            image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=250&fit=crop",
            tech: ["Node.js", "Express", "PostgreSQL", "AWS"],
            status: "soon"
        },
        {
            id: 5,
            title: "Zero-Hero Python Development",
            description: "Master Python from basics to advanced concepts including web development, data analysis, automation, and machine learning.",
            image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=400&h=250&fit=crop",
            tech: ["Python", "Django", "Flask", "Pandas"],
            status: "soon"
        },
       
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % courses.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + courses.length) % courses.length);
    };

    // For mobile: show 1 card, for tablet: show 2, for desktop: show 3
    const getVisibleCourses = () => {
        // On mobile, show only current card
        return [courses[currentSlide]];
    };

    const getDesktopVisibleCourses = () => {
        // On desktop, show 3 cards
        const maxSlide = Math.max(0, courses.length - 3);
        const safeCurrentSlide = Math.min(currentSlide, maxSlide);
        return courses.slice(safeCurrentSlide, safeCurrentSlide + 3);
    };

    return (
        <div className="bg-gray-50 min-h-screen p-4 md:p-8">
            <div className="max-w-7xl mx-auto">
               
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 md:mb-12 text-center"> Featureds <span className="text-orange-500">Course</span></h1>
                
                <div className="relative">
                    {/* Mobile Layout - Single Card with Navigation */}
                    <div className="md:hidden">
                        {/* Navigation Buttons - Mobile */}
                        <div className="flex justify-between items-center mb-6">
                            <button
                                onClick={prevSlide}
                                className="bg-white hover:bg-gray-100 border-2 border-black rounded-full p-2 transition-all duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                                disabled={currentSlide === 0}
                                title="Previous Course"
                                aria-label="Previous Course"
                            >
                                <ChevronLeft className="w-5 h-5 text-black" />
                            </button>
                            
                            <div className="text-sm text-gray-600 font-medium">
                                {currentSlide + 1} of {courses.length}
                            </div>
                            
                            <button
                                onClick={nextSlide}
                                className="bg-white hover:bg-gray-100 border-2 border-black rounded-full p-2 transition-all duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                                disabled={currentSlide === courses.length - 1}
                                title="Next Course"
                                aria-label="Next Course"
                            >
                                <ChevronRight className="w-5 h-5 text-black" />
                            </button>
                        </div>

                        {/* Course Card - Mobile */}
                        <div className="w-full max-w-sm mx-auto">
                            <ProjectCard project={getVisibleCourses()[0]} />
                        </div>
                        
                        {/* Dots Indicator - Mobile */}
                        <div className="flex justify-center mt-6 gap-2">
                            {courses.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentSlide(index)}
                                    className={`w-2 h-2 rounded-full transition-colors ${
                                        currentSlide === index ? 'bg-orange-500' : 'bg-gray-300'
                                    }`}
                                    aria-label={`Go to slide ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Desktop Layout - Three Cards with Navigation */}
                    <div className="hidden md:block">
                        {/* Navigation Buttons - Desktop */}
                        <button
                            onClick={prevSlide}
                            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white hover:bg-gray-100 border-2 border-black rounded-full p-3 transition-all duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                            disabled={currentSlide === 0}
                            title="Previous Slide"
                            aria-label="Previous Slide"
                        >
                            <ChevronLeft className="w-6 h-6 text-black" />
                        </button>

                        <button
                            onClick={nextSlide}
                            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white hover:bg-gray-100 border-2 border-black rounded-full p-3 transition-all duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                            disabled={currentSlide >= courses.length - 3}
                            title="Next Slide"
                            aria-label="Next Slide"
                        >
                            <ChevronRight className="w-6 h-6 text-black" />
                        </button>

                        {/* Course Cards - Desktop */}
                        <div className="grid grid-cols-3 gap-6 px-16">
                            {getDesktopVisibleCourses().map((course) => (
                                <ProjectCard key={course.id} project={course} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export type Workshop = {
    id: number;
    title: string;
    description: string;
    image: string;
    status: 'current' | 'soon';
    enroll?: string;
    details?: string;
};

function WorkshopCard({ workshop }: { workshop: Workshop }) {
    return (
        <div className="bg-white border-2 border-black rounded-xl shadow-sm overflow-hidden flex flex-col h-full hover:shadow-[6px_6px_0_0_rgba(0,0,0,0.2)] transition-transform hover:-translate-y-0.5 min-h-[350px]">
            <div className="aspect-video bg-gray-100 border-b-2 border-black">
                <img src={workshop.image} alt={workshop.title} className="w-full h-full object-cover" />
            </div>
            <div className="p-4 flex flex-col gap-3 flex-1">
                <h3 className="text-base md:text-lg font-bold text-gray-900 line-clamp-2">{workshop.title}</h3>
                <p className="text-xs md:text-sm text-gray-700 leading-relaxed flex-1 line-clamp-3">{workshop.description}</p>
            </div>
            <div className="px-4 pb-4 pt-1 flex items-center gap-3">
                <button 
                    className="inline-flex items-center justify-center px-3 py-2 rounded-lg bg-orange-500 hover:bg-orange-600 text-white border-2 border-black transition-colors text-xs md:text-sm font-semibold w-full"
                    onClick={() => (window.location.href = "/enroll")}
                >
                    Enroll
                </button>
            </div>
        </div>
    );
}

const WorkshopCards = () => {
    const [currentWorkshopSlide, setCurrentWorkshopSlide] = useState(0);

   const courses: Project[] = [
  {
    id: 1,
    title: "Hands-On: Building Your First Autonomous Agent",
    description:
      "An immersive workshop where you'll design, code, and deploy your very first intelligent agent. Learn step by step how agents sense their environment, make decisions, and act autonomously — turning ideas into working systems.",
    image:
      "https://images.unsplash.com/photo-1581092334859-9f3c9a5b1c1f?w=400&h=250&fit=crop",
    tech: ["Python", "AI Agents", "Autonomy", "Coding"],
    status: "current",
  },
  {
    id: 2,
    title: "Agentic AI Foundations Workshop",
    description:
      "Dive into the fundamentals of agentic AI and uncover how autonomous systems are built. Understand the key principles of decision-making, adaptability, and learning that drive today's most advanced AI agents.",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&h=250&fit=crop",
    tech: ["AI Foundations", "Decision-Making", "Adaptability", "Learning"],
    status: "current",
  },
  {
    id: 3,
    title: "Creative Applications of Agentic AI Workshop",
    description:
      "Discover how agentic AI is shaping the future of creativity. From generating ideas and designs to assisting with content creation, this workshop blends innovation with hands-on projects to unlock new possibilities.",
    image:
      "https://images.unsplash.com/photo-1508830524289-0adcbe822b40?w=400&h=250&fit=crop",
    tech: ["Creativity", "AI Design", "Innovation", "Content Creation"],
    status: "current",
  },
  {
    id: 4,
    title: "Multi-Agent Mastery: Collaboration Workshop",
    description:
      "Step into the world of collaborative intelligence. Learn how to design ecosystems where multiple agents communicate, negotiate, and cooperate to solve complex, real-world problems at scale.",
    image:
      "https://images.unsplash.com/photo-1526378722484-bd91ca387e72?w=400&h=250&fit=crop",
    tech: ["Multi-Agent Systems", "Collaboration", "Negotiation", "Ecosystems"],
    status: "soon",
  },
];


    const nextWorkshopSlide = () => {
        setCurrentWorkshopSlide((prev) => (prev + 1) % courses.length);
    };

    const prevWorkshopSlide = () => {
        setCurrentWorkshopSlide((prev) => (prev - 1 + courses.length) % courses.length);
    };

    return (
        <div className="bg-gray-50 p-4 md:p-8">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 md:mb-12 text-center">Featured <span className="text-orange-500">Workshops</span></h1>
                
                <div className="relative">
                    {/* Mobile Layout - Single Workshop Card with Navigation */}
                    <div className="md:hidden">
                        {/* Navigation Buttons - Mobile */}
                        <div className="flex justify-between items-center mb-6">
                            <button
                                onClick={prevWorkshopSlide}
                                className="bg-white hover:bg-gray-100 border-2 border-black rounded-full p-2 transition-all duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                                disabled={currentWorkshopSlide === 0}
                                title="Previous Workshop"
                                aria-label="Previous Workshop"
                            >
                                <ChevronLeft className="w-5 h-5 text-black" />
                            </button>
                            
                            <div className="text-sm text-gray-600 font-medium">
                                {currentWorkshopSlide + 1} of {courses.length}
                            </div>
                            
                            <button
                                onClick={nextWorkshopSlide}
                                className="bg-white hover:bg-gray-100 border-2 border-black rounded-full p-2 transition-all duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                                disabled={currentWorkshopSlide === courses.length - 1}
                                title="Next Workshop"
                                aria-label="Next Workshop"
                            >
                                <ChevronRight className="w-5 h-5 text-black" />
                            </button>
                        </div>

                        {/* Workshop Card - Mobile */}
                        <div className="w-full max-w-sm mx-auto">
                            <WorkshopCard workshop={courses[currentWorkshopSlide]} />
                        </div>
                        
                        {/* Dots Indicator - Mobile */}
                        <div className="flex justify-center mt-6 gap-2">
                            {courses.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentWorkshopSlide(index)}
                                    className={`w-2 h-2 rounded-full transition-colors ${
                                        currentWorkshopSlide === index ? 'bg-orange-500' : 'bg-gray-300'
                                    }`}
                                    aria-label={`Go to workshop ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Desktop Layout - All Workshop Cards in Grid */}
                    <div className="hidden md:block">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                            {courses.map((workshop) => (
                                <WorkshopCard key={workshop.id} workshop={workshop} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default function CombinedComponent() {
    return (
        <div>
            <CourseCarousel />
            <WorkshopCards />
        </div>
    );
}