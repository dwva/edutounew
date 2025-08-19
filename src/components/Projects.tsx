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
        <div className="bg-white border-2 border-black rounded-xl shadow-sm overflow-hidden flex flex-col h-full hover:shadow-[6px_6px_0_0_rgba(0,0,0,0.2)] transition-transform hover:-translate-y-0.5">
            <div className="aspect-video bg-gray-100 border-b-2 border-black">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
            </div>
            <div className="p-5 flex flex-col gap-3 flex-1">
                <h3 className="text-lg font-bold text-gray-900">{project.title}</h3>
                <p className="text-sm text-gray-700 leading-relaxed flex-1">{project.description}</p>
                {!hideTech && (
                    <div className="flex flex-wrap gap-2 mt-2">
                        {project.tech.map((t) => (
                            <span key={t} className="px-2 py-1 text-xs rounded-full bg-orange-50 text-orange-800 border border-orange-100">
                                {t}
                            </span>
                        ))}
                    </div>
                )}
            </div>
            <div className="px-5 pb-5 pt-1 flex items-center gap-3">
                {project.status === 'current' ? (
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
            description: "Build modern web applications using AI-powered tools and frameworks. Master both frontend and backend development with cutting-edge AI assistance.",
            image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=250&fit=crop",
            tech: ["React", "Node.js", "AI Tools", "MongoDB"],
            status: "current"
        },
        {
            id: 2,
            title: "Front End Development",
            description: "Master modern frontend technologies including React, Vue, and advanced CSS to create stunning, responsive user interfaces.",
            image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=400&h=250&fit=crop",
            tech: ["React", "Vue", "CSS3", "JavaScript"],
            status: "current"
        },
        {
            id: 3,
            title: "Zero-Hero AI Tools for Development",
            description: "Learn to leverage AI tools to supercharge your development workflow and build intelligent applications from scratch.",
            image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop",
            tech: ["OpenAI", "GitHub Copilot", "ChatGPT", "AI APIs"],
            status: "current"
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
        {
            id: 6,
            title: "AI Essentials",
            description: "Understanding core AI concepts, machine learning fundamentals, and practical AI implementation strategies for developers.",
            image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=400&h=250&fit=crop",
            tech: ["Machine Learning", "TensorFlow", "PyTorch", "Data Science"],
            status: "current"
        }
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % (courses.length - 2));
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + (courses.length - 2)) % (courses.length - 2));
    };

    const visibleCourses = courses.slice(currentSlide, currentSlide + 3);

    return (
        <div className="bg-gray-50 min-h-screen p-8">
            <div className="max-w-7xl mx-auto">
                <div className="relative">
                    {/* Navigation Buttons */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white hover:bg-gray-100 border-2 border-black rounded-full p-3 transition-all duration-300 shadow-lg"
                        disabled={currentSlide === 0}
                        title="Previous Slide"
                        aria-label="Previous Slide"
                    >
                        <ChevronLeft className="w-6 h-6 text-black" />
                    </button>

                    <button
                        onClick={nextSlide}
                        className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white hover:bg-gray-100 border-2 border-black rounded-full p-3 transition-all duration-300 shadow-lg"
                        disabled={currentSlide >= courses.length - 3}
                        title="Next Slide"
                        aria-label="Next Slide"
                    >
                        <ChevronRight className="w-6 h-6 text-black" />
                    </button>

                    {/* Course Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-16">
                        {visibleCourses.map((course) => (
                            <ProjectCard key={course.id} project={course} />
                        ))}
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
        <div className="bg-white border-2 border-black rounded-xl shadow-sm overflow-hidden flex flex-col h-full hover:shadow-[6px_6px_0_0_rgba(0,0,0,0.2)] transition-transform hover:-translate-y-0.5">
            <div className="aspect-video bg-gray-100 border-b-2 border-black">
                <img src={workshop.image} alt={workshop.title} className="w-full h-full object-cover" />
            </div>
            <div className="p-5 flex flex-col gap-3 flex-1">
                <h3 className="text-lg font-bold text-gray-900">{workshop.title}</h3>
                <p className="text-sm text-gray-700 leading-relaxed flex-1">{workshop.description}</p>
            </div>
            <div className="px-5 pb-5 pt-1 flex items-center gap-3">
                <button className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-orange-500 hover:bg-orange-600 text-white border-2 border-black transition-colors text-sm font-semibold">
                    Register
                </button>
            </div>
        </div>
    );
}

const WorkshopCards = () => {
    const workshops: Workshop[] = [
        {
            id: 1,
            title: "Full Stack Development Powered by AI Workshop",
            description: "Hands-on workshop covering full-stack development with AI integration. Build a complete project while learning to use AI tools effectively in your development workflow.",
            image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400&h=250&fit=crop",
            status: "current"
        },
        {
            id: 2,
            title: "AI Essentials Workshop",
            description: "Interactive workshop for understanding core AI concepts and practical implementation. Get hands-on experience with machine learning tools and AI APIs.",
            image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=250&fit=crop",
            status: "current"
        },
        {
            id: 3,
            title: "Zero-Hero AI Tools for Development Workshop",
            description: "Practical workshop to master AI development tools. Learn to integrate ChatGPT, GitHub Copilot, and other AI assistants into your coding practice.",
            image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=400&h=250&fit=crop",
            status: "current"
        },
        {
            id: 4,
            title: "Front End Development Workshop",
            description: "Intensive workshop on modern frontend development. Build responsive, interactive user interfaces using the latest frameworks and best practices.",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
            status: "current"
        }
    ];

    return (
        <div className="bg-gray-50 p-8">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl font-bold text-gray-900 mb-12 text-center">Featured Workshops</h1>
                
                {/* Workshop Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {workshops.map((workshop) => (
                        <WorkshopCard key={workshop.id} workshop={workshop} />
                    ))}
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