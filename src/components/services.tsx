import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import styled from 'styled-components';
import { motion } from "framer-motion";

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
// Styled Components (copied from Home.tsx)
// -----------------------------
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

    .button-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 20px;
        margin-bottom: 16px;
        
        @media (max-width: 768px) {
            gap: 15px;
            margin-bottom: 12px;
        }
    }

    .offer {
        font-size: 20px;
        font-weight: 900;
        border-bottom: 2px solid black;
        cursor: pointer;
        transition: all 0.4s;
        margin: 0;
        
        @media (max-width: 768px) {
            font-size: 18px;
        }
        
        @media (max-width: 480px) {
            font-size: 16px;
        }
    }

    .btn {
        padding: 6px 12px;
        border: 1px solid black;
        background-color: orange;
        border-radius: 8px;
        letter-spacing: 0.5px;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.4s;
        font-size: 12px;
        
        @media (max-width: 768px) {
            padding: 5px 10px;
            font-size: 11px;
        }
    }

    .columns:hover .btn {
        box-shadow: 2px 2px 0 1px rgba(0, 0, 0);
    }

    .columns:hover .offer {
        color: green;
        border-color: green;
    }

    .btn:focus {
        background: transparent;
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
        <StyledCard
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
        >
            <div className="columns">
                <div className="aspect-video bg-gray-100 border-b-2 border-black mb-4 rounded-lg overflow-hidden">
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                </div>
                <div className="button-container">
                    <button className="btn orange-flag">{project.status === 'current' ? 'CURRENT' : 'SOON'}</button>
                    <p className="offer">📚</p>
                </div>
                <h3 className="secondary-heading">{project.title}</h3>
                <p className="card-description">{project.description}</p>
            </div>
        </StyledCard>
    );
}

function WorkshopCard({ workshop }: { workshop: Workshop }) {
    return (
        <StyledCard
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
        >
            <div className="columns">
                <div className="aspect-video bg-gray-100 border-b-2 border-black mb-4 rounded-lg overflow-hidden">
                    <img src={workshop.image} alt={workshop.title} className="w-full h-full object-cover" />
                </div>
                <div className="button-container">
                    <button className="btn orange-flag">{workshop.status === 'current' ? 'CURRENT' : 'SOON'}</button>
                    <p className="offer">🛠️</p>
                </div>
                <h3 className="secondary-heading">{workshop.title}</h3>
                <p className="card-description">{workshop.description}</p>
            </div>
        </StyledCard>
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
                <h1 className="text-3xl md:text-4xl section-heading text-gray-900 mb-8 md:mb-12 text-center">Featured <span className="text-orange-500">Courses</span></h1>
                
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
                            <StyledCard
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                viewport={{ once: true }}
                            >
                                <div className="columns">
                                    <div className="aspect-video bg-gray-100 border-b-2 border-black mb-4 rounded-lg overflow-hidden">
                                        <img src={courses[currentSlide].image} alt={courses[currentSlide].title} className="w-full h-full object-cover" />
                                    </div>
                                    <div className="button-container">
                                        <button className="btn orange-flag">{courses[currentSlide].status === 'current' ? 'CURRENT' : 'SOON'}</button>
                                        <p className="offer">📚</p>
                                    </div>
                                    <h3 className="secondary-heading">{courses[currentSlide].title}</h3>
                                    <p className="card-description">{courses[currentSlide].description}</p>
                                </div>
                            </StyledCard>
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
                <h1 className="text-3xl md:text-4xl section-heading text-gray-900 mb-8 md:mb-12 text-center">Featured <span className="text-orange-500">Workshops</span></h1>
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
                            <StyledCard
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                viewport={{ once: true }}
                            >
                                <div className="columns">
                                    <div className="aspect-video bg-gray-100 border-b-2 border-black mb-4 rounded-lg overflow-hidden">
                                        <img src={workshops[currentWorkshopSlide].image} alt={workshops[currentWorkshopSlide].title} className="w-full h-full object-cover" />
                                    </div>
                                    <div className="button-container">
                                        <button className="btn orange-flag">{workshops[currentWorkshopSlide].status === 'current' ? 'CURRENT' : 'SOON'}</button>
                                        <p className="offer">🛠️</p>
                                    </div>
                                    <h3 className="secondary-heading">{workshops[currentWorkshopSlide].title}</h3>
                                    <p className="card-description">{workshops[currentWorkshopSlide].description}</p>
                                </div>
                            </StyledCard>
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
            <style>
                {`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
                
                .orange-flag {
                    background-color: #fca311 !important;
                    color: white;
                }
                `}
            </style>
            
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