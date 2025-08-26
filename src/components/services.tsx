import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// -----------------------------
// Type Definitions
// -----------------------------

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

// CORRECTED: Added 'tech' property to match the data being used.
export type Workshop = {
    id: number;
    title: string;
    description: string;
    image: string;
    tech: string[];
    status: 'current' | 'soon';
    enroll?: string;
    details?: string;
};


// -----------------------------
// Background Component
// -----------------------------

const AnimatedDotsBackground = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const mouseRef = useRef({ x: 0, y: 0 });
    const animationRef = useRef<number>();

    useEffect(() => {
        const canvas = canvasRef.current!;
        const ctx = canvas.getContext('2d')!;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        const dotSize = 20;
        const dotRadius = 1;
        const influenceRadius = 100;

        const handleMouseMove = (e: MouseEvent) => {
            mouseRef.current = { x: e.clientX, y: e.clientY };
        };
        window.addEventListener('mousemove', handleMouseMove);

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            const mouse = mouseRef.current;

            for (let x = 0; x < canvas.width; x += dotSize) {
                for (let y = 0; y < canvas.height; y += dotSize) {
                    const distance = Math.sqrt(Math.pow(x - mouse.x, 2) + Math.pow(y - mouse.y, 2));
                    const influence = Math.max(0, 1 - distance / influenceRadius);
                    const grey = { r: 89, g: 89, b: 89 };
                    const orange = { r: 255, g: 165, b: 0 };
                    const r = Math.round(grey.r + (orange.r - grey.r) * influence);
                    const g = Math.round(grey.g + (orange.g - grey.g) * influence);
                    const b = Math.round(grey.b + (orange.b - grey.b) * influence);
                    const scale = 1 + influence * 0.5;
                    const currentRadius = dotRadius * scale;

                    ctx.beginPath();
                    ctx.arc(x, y, currentRadius, 0, 2 * Math.PI);
                    ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${0.35 + influence * 0.65})`;
                    ctx.fill();
                }
            }
            animationRef.current = requestAnimationFrame(animate);
        };
        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            window.removeEventListener('mousemove', handleMouseMove);
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 z-0 pointer-events-none"
        />
    );
};


// -----------------------------
// Card Components
// -----------------------------

function ProjectCard({ project }: { project: Project }) {
    return (
        <div className="bg-white border-2 border-black rounded-xl shadow-sm overflow-hidden flex flex-col h-full hover:shadow-[6px_6px_0_0_rgba(0,0,0,0.2)] transition-all duration-200 hover:-translate-y-1 min-h-[400px]">
            <div className="aspect-video bg-gray-100 border-b-2 border-black">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
            </div>
            <div className="p-4 flex flex-col gap-3 flex-1">
                <h3 className="text-base md:text-lg font-bold text-gray-900 line-clamp-2">{project.title}</h3>
                <p className="text-xs md:text-sm text-gray-700 leading-relaxed flex-1 line-clamp-3">{project.description}</p>
                <div className="flex flex-wrap gap-1.5 mt-2">
                    {project.tech.map((t) => (
                        <span key={t} className="px-2 py-1 text-xs rounded-full bg-orange-50 text-orange-800 border border-orange-100">
                            {t}
                        </span>
                    ))}
                </div>
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

function WorkshopCard({ workshop }: { workshop: Workshop }) {
    return (
         <div className="bg-white border-2 border-black rounded-xl shadow-sm overflow-hidden flex flex-col h-full hover:shadow-[6px_6px_0_0_rgba(0,0,0,0.2)] transition-all duration-200 hover:-translate-y-1 min-h-[400px]">
            <div className="aspect-video bg-gray-100 border-b-2 border-black">
                <img src={workshop.image} alt={workshop.title} className="w-full h-full object-cover" />
            </div>
            <div className="p-4 flex flex-col gap-3 flex-1">
                <h3 className="text-base md:text-lg font-bold text-gray-900 line-clamp-2">{workshop.title}</h3>
                <p className="text-xs md:text-sm text-gray-700 leading-relaxed flex-1 line-clamp-3">{workshop.description}</p>
                 <div className="flex flex-wrap gap-1.5 mt-2">
                    {workshop.tech.map((t) => (
                        <span key={t} className="px-2 py-1 text-xs rounded-full bg-blue-50 text-blue-800 border border-blue-100">
                            {t}
                        </span>
                    ))}
                </div>
            </div>
            <div className="px-4 pb-4 pt-1 flex items-center gap-3">
                 {workshop.status === 'current' ? (
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

// -----------------------------
// Content Components
// -----------------------------

const CourseCarousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const courses: Project[] = [
        { id: 1, title: "AI Essentials", description: "Understanding core AI concepts, machine learning fundamentals, and practical AI implementation strategies for developers.", image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=400&h=250&fit=crop", tech: ["Machine Learning", "TensorFlow", "PyTorch", "Data Science"], status: "current" },
        { id: 6, title: "Full Stack Development Powered by AI", description: "Build modern web applications using AI-powered tools and frameworks. Master both frontend and backend development with cutting-edge AI assistance.", image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=250&fit=crop", tech: ["React", "Node.js", "AI Tools", "MongoDB"], status: "soon" },
        { id: 2, title: "Front End Development", description: "Master modern frontend technologies including React, Vue, and advanced CSS to create stunning, responsive user interfaces.", image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=400&h=250&fit=crop", tech: ["React", "Vue", "CSS3", "JavaScript"], status: "soon" },
        { id: 3, title: "Zero-Hero AI Tools for Development", description: "Learn to leverage AI tools to supercharge your development workflow and build intelligent applications from scratch.", image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop", tech: ["OpenAI", "GitHub Copilot", "ChatGPT", "AI APIs"], status: "soon" },
        { id: 4, title: "Pure Backend Development", description: "Deep dive into server-side development, APIs, databases, and cloud architecture for building robust, scalable applications.", image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=250&fit=crop", tech: ["Node.js", "Express", "PostgreSQL", "AWS"], status: "soon" },
        { id: 5, title: "Zero-Hero Python Development", description: "Master Python from basics to advanced concepts including web development, data analysis, automation, and machine learning.", image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=400&h=250&fit=crop", tech: ["Python", "Django", "Flask", "Pandas"], status: "soon" },
    ];

    // CORRECTED: Changed carousel logic to be linear to match disabled buttons
    const nextSlide = () => setCurrentSlide((prev) => prev + 1);
    const prevSlide = () => setCurrentSlide((prev) => prev - 1);

    return (
        <div>
            <div className="max-w-7xl mx-auto">
                {/* CORRECTED: Typo in title */}
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 md:mb-12 text-center">Featured <span className="text-orange-500">Courses</span></h1>
                
                <div className="relative">
                    {/* Mobile Layout */}
                    <div className="md:hidden">
                        <div className="flex justify-between items-center mb-6">
                            <button onClick={prevSlide} className="bg-white hover:bg-gray-100 border-2 border-black rounded-full p-2 transition-all duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed" disabled={currentSlide === 0} aria-label="Previous Course">
                                <ChevronLeft className="w-5 h-5 text-black" />
                            </button>
                            <div className="text-sm text-gray-600 font-medium">{currentSlide + 1} of {courses.length}</div>
                            <button onClick={nextSlide} className="bg-white hover:bg-gray-100 border-2 border-black rounded-full p-2 transition-all duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed" disabled={currentSlide === courses.length - 1} aria-label="Next Course">
                                <ChevronRight className="w-5 h-5 text-black" />
                            </button>
                        </div>
                        <div className="w-full max-w-sm mx-auto">
                            <ProjectCard project={courses[currentSlide]} />
                        </div>
                        <div className="flex justify-center mt-6 gap-2">
                            {courses.map((_, index) => (
                                <button key={index} onClick={() => setCurrentSlide(index)} className={`w-2 h-2 rounded-full transition-colors ${currentSlide === index ? 'bg-orange-500' : 'bg-gray-300'}`} aria-label={`Go to slide ${index + 1}`} />
                            ))}
                        </div>
                    </div>

                    {/* Desktop Layout */}
                    <div className="hidden md:block">
                        <button onClick={prevSlide} className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white hover:bg-gray-100 border-2 border-black rounded-full p-3 transition-all duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed" disabled={currentSlide === 0} aria-label="Previous Slide">
                            <ChevronLeft className="w-6 h-6 text-black" />
                        </button>
                        <button onClick={nextSlide} className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white hover:bg-gray-100 border-2 border-black rounded-full p-3 transition-all duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed" disabled={currentSlide >= courses.length - 3} aria-label="Next Slide">
                            <ChevronRight className="w-6 h-6 text-black" />
                        </button>
                        <div className="grid grid-cols-3 gap-6 px-16">
                            {courses.slice(currentSlide, currentSlide + 3).map((course) => (
                                <ProjectCard key={course.id} project={course} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const WorkshopCards = () => {
    const [currentWorkshopSlide, setCurrentWorkshopSlide] = useState(0);

    // CORRECTED: Renamed variable and used Workshop type
    const workshops: Workshop[] = [
        { id: 1, title: "Hands-On: Building Your First Autonomous Agent", description: "An immersive workshop where you'll design, code, and deploy your very first intelligent agent.", image: "https://images.unsplash.com/photo-1581092334859-9f3c9a5b1c1f?w=400&h=250&fit=crop", tech: ["Python", "AI Agents", "Autonomy", "Coding"], status: "current" },
        { id: 2, title: "Agentic AI Foundations Workshop", description: "Dive into the fundamentals of agentic AI and uncover how autonomous systems are built.", image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&h=250&fit=crop", tech: ["AI Foundations", "Decision-Making", "Adaptability"], status: "current" },
        { id: 3, title: "Creative Applications of Agentic AI Workshop", description: "Discover how agentic AI is shaping the future of creativity, from generating ideas to assisting with content creation.", image: "https://images.unsplash.com/photo-1508830524289-0adcbe822b40?w=400&h=250&fit=crop", tech: ["Creativity", "AI Design", "Innovation", "Content"], status: "current" },
        { id: 4, title: "Multi-Agent Mastery: Collaboration Workshop", description: "Learn how to design ecosystems where multiple agents communicate, negotiate, and cooperate to solve complex problems.", image: "https://images.unsplash.com/photo-1526378722484-bd91ca387e72?w=400&h=250&fit=crop", tech: ["Multi-Agent Systems", "Collaboration", "Negotiation"], status: "soon" },
    ];

    // CORRECTED: Changed carousel logic to be linear to match disabled buttons
    const nextWorkshopSlide = () => setCurrentWorkshopSlide((prev) => prev + 1);
    const prevWorkshopSlide = () => setCurrentWorkshopSlide((prev) => prev - 1);

    return (
        <div>
            <div className="max-w-7xl mx-auto">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 md:mb-12 text-center">Featured <span className="text-orange-500">Workshops</span></h1>
                <div className="relative">
                    {/* Mobile Layout */}
                    <div className="md:hidden">
                        <div className="flex justify-between items-center mb-6">
                            <button onClick={prevWorkshopSlide} className="bg-white hover:bg-gray-100 border-2 border-black rounded-full p-2 transition-all duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed" disabled={currentWorkshopSlide === 0} aria-label="Previous Workshop">
                                <ChevronLeft className="w-5 h-5 text-black" />
                            </button>
                            <div className="text-sm text-gray-600 font-medium">{currentWorkshopSlide + 1} of {workshops.length}</div>
                            <button onClick={nextWorkshopSlide} className="bg-white hover:bg-gray-100 border-2 border-black rounded-full p-2 transition-all duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed" disabled={currentWorkshopSlide === workshops.length - 1} aria-label="Next Workshop">
                                <ChevronRight className="w-5 h-5 text-black" />
                            </button>
                        </div>
                        <div className="w-full max-w-sm mx-auto">
                            <WorkshopCard workshop={workshops[currentWorkshopSlide]} />
                        </div>
                        <div className="flex justify-center mt-6 gap-2">
                            {workshops.map((_, index) => (
                                <button key={index} onClick={() => setCurrentWorkshopSlide(index)} className={`w-2 h-2 rounded-full transition-colors ${currentWorkshopSlide === index ? 'bg-orange-500' : 'bg-gray-300'}`} aria-label={`Go to workshop ${index + 1}`} />
                            ))}
                        </div>
                    </div>

                    {/* Desktop Layout */}
                    <div className="hidden md:block">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                            {workshops.map((workshop) => (
                                <WorkshopCard key={workshop.id} workshop={workshop} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// -----------------------------
// Main Exported Component
// -----------------------------

export default function CombinedComponent() {
    const [activeTab, setActiveTab] = useState('courses');

    return (
        <div className="min-h-screen w-full bg-white relative overflow-hidden">
            {/* INTEGRATED: Animated background is now part of the component */}
            <AnimatedDotsBackground />

            {/* Content is layered on top with a higher z-index */}
            <div className="relative z-10 py-12 md:py-16">
                <div className="max-w-7xl mx-auto px-4">
                    {/* Tab Navigation */}
                    <div className="flex justify-center mb-8 md:mb-12">
                        <div className="bg-gray-200 rounded-full p-1 flex">
                            <button
                                onClick={() => setActiveTab('courses')}
                                className={`px-6 py-3 rounded-full text-sm md:text-base font-medium transition-all duration-300 ${
                                    activeTab === 'courses'
                                        ? 'bg-white text-orange-600 shadow-md'
                                        : 'text-gray-600 hover:text-gray-900'
                                }`}
                            >
                                Featured Courses
                            </button>
                            <button
                                onClick={() => setActiveTab('workshops')}
                                className={`px-6 py-3 rounded-full text-sm md:text-base font-medium transition-all duration-300 ${
                                    activeTab === 'workshops'
                                        ? 'bg-white text-orange-600 shadow-md'
                                        : 'text-gray-600 hover:text-gray-900'
                                }`}
                            >
                                Workshops
                            </button>
                        </div>
                    </div>

                    {/* Tab Content */}
                    <div className="bg-white rounded-2xl shadow-lg p-4 md:p-8">
                        {activeTab === 'courses' && <CourseCarousel />}
                        {activeTab === 'workshops' && <WorkshopCards />}
                    </div>
                </div>
            </div>
        </div>
    );
}