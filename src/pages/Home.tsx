"use client";

import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Layers, RefreshCw } from 'lucide-react';
import {
    motion,
    useMotionValue,
    useSpring,
    useTransform,
    useInView,
} from "framer-motion";
import styled from 'styled-components';
import Projects from '../components/services';
import TestnomialCard from './testnomialcard';
import TechStack from './techstack';
import Waves from '../components/waves';

// -----------------------------
// BorderBeam Component
// -----------------------------
const BorderBeam = ({
    className,
    size = 50,
    delay = 0,
    duration = 6,
    colorFrom = "#ffaa40",
    colorTo = "#9c40ff",
    transition,
    style,
    reverse = false,
    initialOffset = 0,
    borderWidth = 1,
}) => {
    return (
        <div
            className="pointer-events-none absolute inset-0 rounded-[inherit] border-transparent [mask-clip:padding-box,border-box] [mask-composite:intersect] [mask-image:linear-gradient(transparent,transparent),linear-gradient(#000,#000)]"
            style={{
                "--border-beam-width": `${borderWidth}px`,
                borderWidth: `var(--border-beam-width)`,
                ...style,
            }}
        >
            <motion.div
                className={cn(
                    "absolute aspect-square",
                    "bg-gradient-to-l from-[var(--color-from)] via-[var(--color-to)] to-transparent",
                    className,
                )}
                style={{
                    width: size,
                    offsetPath: `rect(0 auto auto 0 round ${borderWidth + 2}px)`,
                    "--color-from": colorFrom,
                    "--color-to": colorTo,
                } as React.CSSProperties}
                initial={{ offsetDistance: `${initialOffset}%` }}
                animate={{
                    offsetDistance: reverse
                        ? [`${100 - initialOffset}%`, `${-initialOffset}%`]
                        : [`${initialOffset}%`, `${100 + initialOffset}%`],
                }}
                transition={{
                    repeat: Infinity,
                    ease: "linear",
                    duration,
                    delay: -delay,
                    ...transition,
                }}
            />
        </div>
    );
};

// -----------------------------
// Marquee Component for Moving Text
// -----------------------------
const MovingTextMarquee = () => {
    return (
        <div className="w-full overflow-hidden bg-orange-100 py-2 relative" style={{ margin: 0 }}>
            <div
                className="whitespace-nowrap w-max"
                style={{
                    animation: "scroll-right 20s linear infinite",
                }}
            >
                {[...Array(8)].map((_, i) => (
                    <span key={i} className="text-orange-600 font-medium mx-4 inline-block">
                        Featured <span className="text-orange-700 font-bold">Courses</span> and <span className="text-orange-700 font-bold">Workshops</span> - Limited Time Offer!
                    </span>
                ))}
            </div>
        </div>
    );
};

// -----------------------------
// Styled Components
// -----------------------------
const StyledCard = styled(motion.div)`
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

const StyledEnrollButton = styled(motion.button)`
    padding: 10px 20px;
    border: 2px solid black;
    background-color: orange;
    border-radius: 10px;
    font-weight: 600;
    font-family: 'Poppins', sans-serif;
    font-size: 0.9rem;
    cursor: pointer;
    transition: all 0.3s ease;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
    
    @media (max-width: 768px) {
        padding: 8px 16px;
        font-size: 0.8rem;
    }

    a {
        color: inherit;
        text-decoration: none;
        display: flex;
        align-items: center;
    }

    &:hover {
        background-color: #ff8c00;
        color: white;
        transform: translateY(-2px);
        box-shadow: 4px 4px 0 1px rgba(0, 0, 0);
    }

    &:active {
        transform: translateY(0);
    }
`;

// -----------------------------
// Utility function for classNames
// -----------------------------
function cn(...classes) {
    return classes
        .flatMap(cls => {
            if (!cls) return [];
            if (typeof cls === "string") return [cls];
            if (typeof cls === "object") {
                return Object.entries(cls)
                    .filter(([_, value]) => Boolean(value))
                    .map(([key]) => key);
            }
            return [];
        })
        .join(" ");
}

// -----------------------------
// EdutouAboutUs Component
// -----------------------------
function EdutouAboutUs() {
    const [isVisible, setIsVisible] = useState(false);
    const [activeFeature, setActiveFeature] = useState(0);
    
    useEffect(() => {
        setIsVisible(true);
    }, []);
    
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveFeature((prev) => (prev + 1) % 3);
        }, 4000);
        
        return () => clearInterval(interval);
    }, []);
    
    const features = [
        {
            id: 0,
            icon: <Zap className="w-6 h-6 md:w-8 md:h-8 text-orange-500" />,
            title: "Adaptive Learning Paths",
            description: "Our AI analyzes your strengths and growth areas in real-time, creating a personalized learning journey tailored specifically to you."
        },
        {
            id: 1,
            icon: <Layers className="w-6 h-6 md:w-8 md:h-8 text-orange-500" />,
            title: "Project-Based Curriculum",
            description: "Apply what you learn immediately to solve actual problems, building a portfolio of real work as you advance through your courses."
        },
        {
            id: 2,
            icon: <RefreshCw className="w-6 h-6 md:w-8 md:h-8 text-orange-500" />,
            title: "Continuous Evolution",
            description: "Our courses update automatically as industry standards shift, ensuring you're always learning the most current and relevant skills."
        }
    ];

    
}

// -----------------------------
// StatsCount Component
// -----------------------------
function AnimatedCounter({
    value,
    suffix = "",
    duration = 1,
    delay = 0,
    label,
}) {
    const ref = useRef(null);
    const isInView = useInView(ref, { margin: "-50px" });

    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, {
        damping: 20,
        stiffness: 50,
        mass: 1,
    });

    const rounded = useTransform(springValue, (latest) =>
        Number(latest.toFixed(value % 1 === 0 ? 0 : 1))
    );

    const [displayValue, setDisplayValue] = useState(0);

    useEffect(() => {
        const unsubscribe = rounded.on("change", (latest) => {
            setDisplayValue(latest);
        });
        return () => unsubscribe();
    }, [rounded]);

    useEffect(() => {
        let timeout;
        if (isInView) {
            motionValue.set(0);
            timeout = setTimeout(() => {
                motionValue.set(value);
            }, delay * 300);
        } else {
            motionValue.set(0);
        }
        return () => clearTimeout(timeout);
    }, [isInView, value, motionValue, delay]);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{
                duration: 0.8,
                delay: delay * 0.2,
                type: "spring",
                stiffness: 80,
            }}
            className={cn(
                "text-center flex-1 min-w-0 flex flex-col justify-center h-full"
            )}
        >
            <motion.div
                className={cn(
                    "text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-4 whitespace-nowrap text-orange-500"
                )}
                initial={{ scale: 0.8 }}
                animate={isInView ? { scale: 1 } : { scale: 0.8 }}
                transition={{
                    duration: 0.6,
                    delay: delay * 0.2 + 0.3,
                    type: "spring",
                    stiffness: 100,
                }}
            >
                {displayValue}
                {suffix}
            </motion.div>
            <motion.p
                className={cn(
                    "text-gray-600 text-xs sm:text-sm leading-relaxed px-1 sm:px-2 hyphens-auto break-words"
                )}
                style={{ wordBreak: "break-word", overflowWrap: "break-word" }}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: delay * 0.2 + 0.6, duration: 0.6 }}
            >
                {label}
            </motion.p>
        </motion.div>
    );
}

function StatsCount({
    stats,
    title,
    showDividers = true,
    className = "",
}) {
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { margin: "-100px" });

    return (
        <motion.section
            ref={containerRef}
            className={cn(
                "py-8 sm:py-12 lg:py-20 px-2 sm:px-4 md:px-8 w-full overflow-hidden bg-white",
                className
            )}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8 }}
        >
            <motion.div
                className={cn("text-center mb-8 sm:mb-12 lg:mb-16")}
                initial={{ opacity: 0, y: -20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                <h2 className={cn("text-base sm:text-lg md:text-xl lg:text-2xl font-bold tracking-wide px-4 font-['Poppins']")}>
                    {title}
                </h2>
            </motion.div>

            <div className={cn("w-full max-w-6xl mx-auto")}>
                <div className={cn("flex flex-row items-stretch justify-between gap-2 sm:gap-4 lg:gap-8 w-full min-h-[120px] sm:min-h-[140px]")}>
                    {stats && stats.map((stat, index) => (
                        <div key={index} className={cn("relative flex-1 min-w-0 flex flex-col justify-center h-full")}>
                            <AnimatedCounter
                                value={stat.value}
                                suffix={stat.suffix}
                                duration={stat.duration}
                                delay={index}
                                label={stat.label}
                            />
                            {index < stats.length - 1 && showDividers && (
                                <motion.div
                                    className={cn( "absolute -right-1 sm:-right-2 lg:-right-4 top-1/2 transform -translate-y-1/2 h-12 sm:h-16 lg:h-20 w-px bg-gray-200" )}
                                    initial={{ opacity: 0, scaleY: 0 }}
                                    animate={ isInView ? { opacity: 1, scaleY: 1 } : { opacity: 0, scaleY: 0 } }
                                    transition={{ delay: 1.5 + index * 0.2, duration: 0.6 }}
                                />
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
}

// -----------------------------
// Main Home Component
// -----------------------------
const Home = () => {
    const edutouStats = [
        {
            value: 10,
            suffix: "k+",
            label: "Students Enrolled Globally",
        },
        {
            value: 95,
            suffix: "%",
            label: "Course Completion Rate",
        },
        {
            value: 200,
            suffix: "+",
            label: "Industry Mentors & Experts",
        },
    ];

    return (
        <div className="bg-white text-gray-900" style={{ margin: 0, padding: 0 }}>
            <style>
                {`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
                @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
                
                .education-text {
                    color: white;
                    -webkit-text-stroke: 2px orange;
                    text-shadow: none;
                }

                @keyframes scroll-right {
                    0% {
                        transform: translateX(0%);
                    }
                    100% {
                        transform: translateX(calc(-100% / 2));
                    }
                }

                /* Remove default margins */
                body, html {
                    margin: 0;
                    padding: 0;
                }
                
                /* Mobile-specific spacing fixes */
                @media (max-width: 768px) {
                    /* Reduce hero section padding */
                    .hero-section {
                        padding-top: 1rem !important;
                        padding-bottom: 1.5rem !important;
                        min-height: 80vh !important;
                    }
                    
                    /* Reduce gap between hero text and quote */
                    .hero-content h1 {
                        margin-bottom: 1rem !important;
                    }
                    
                    .hero-content blockquote {
                        margin-top: 1.5rem !important;
                    }
                    
                    /* Reduce gap between sections */
                    .section-spacing {
                        padding-top: 2rem !important;
                        padding-bottom: 2rem !important;
                    }
                    
                    /* Reduce gap in Why EDUTOU section */
                    .why-section {
                        padding-top: 1.5rem !important;
                        padding-bottom: 1.5rem !important;
                    }
                    
                    /* Reduce gap in tech stack section */
                    .tech-stack-section {
                        padding-top: 1rem !important;
                        padding-bottom: 1rem !important;
                    }
                }
                `}
            </style>

            {/* Moving text marquee - Now at the very top */}
            <MovingTextMarquee />

            {/* Hero Section with Waves background - Reduced padding for mobile */}
            <section className="hero-section min-h-screen w-full relative flex items-center justify-center px-4 sm:px-6 overflow-hidden" style={{ marginTop: 0, paddingTop: '2rem', paddingBottom: '2rem' }}>
                {/* Waves Background */}
                <div className="absolute inset-0 z-0">
                    <Waves />
                </div>

                {/* Amber Glow Overlay */}
                <div
                    className="absolute inset-0 z-0"
                    style={{
                        backgroundImage: `
                            radial-gradient(125% 125% at 50% 90%, rgba(255, 255, 255, 0.7) 40%, rgba(245, 158, 11, 0.5) 100%)
                        `,
                        backgroundSize: "100% 100%",
                    }}
                />

                {/* Hero Content - TEXT LAYOUT FIXED */}
                <div className="hero-content relative z-10 text-center max-w-5xl">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-10 leading-tight text-black font-['Poppins']">
                        The Future of Learning{" "}
                        <span className="education-text">Powered</span> by AI.
                    </h1>
                    <div className="my-6 md:my-12 flex flex-col items-center">
                        <StyledEnrollButton
                            whileHover={{
                                scale: 1.05,
                                boxShadow: '4px 4px 0 1px rgba(0,0,0)',
                            }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                            className="mb-4 md:mb-8"
                        >
                            <Link to="/currentcourse" className="flex items-center">
                                Enroll Today
                                <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
                            </Link>
                        </StyledEnrollButton>
                        <p className="text-black text-sm md:text-base lg:text-lg max-w-3xl mx-auto mb-4 md:mb-10 leading-relaxed font-['Poppins'] px-2">
                            At EDUTOU, we've reimagined education for the digital age. Our AI-powered platform adapts to your learning style, focusing on the skills that matter in today's rapidly evolving job market.
                        </p>
                    </div>
                    <blockquote className="text-black font-semibold text-base md:text-lg italic mt-4 md:mt-12 font-['Poppins']">
                        "The ones who learn, adapt, and innovate... change the world." 🚀
                    </blockquote>
                </div>
            </section>

            {/* Why EDUTOU Section - Reduced padding */}
            <section className="why-section py-8 md:py-24 bg-white">
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                    <div className="flex flex-col lg:flex-row gap-6 md:gap-12 mb-8 md:mb-16 items-start">
                        <div className="lg:w-1/2">
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight font-['Poppins']">
                                Why <span className="text-orange-500">EDUTOU</span> is Different
                            </h2>
                            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6 font-['Poppins']">
                                Discover the core features that make our learning platform stand out.
                            </p>
                        </div>
                        <div className="lg:w-1/2"></div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
                        {[
                            {
                                title: 'AI-Powered Personalization',
                                desc: 'Adaptive learning algorithms tailor content to your unique needs and pace.',
                                icon: '🤖',
                                flag: 'FEATURE',
                            },
                            {
                                title: 'Project-Based Curriculum',
                                desc: 'Build portfolio-worthy projects from day one with expert guidance.',
                                icon: '🛠️',
                                flag: 'FEATURE',
                            },
                            {
                                title: 'Industry Mentor Network',
                                desc: 'Learn directly from professionals at top tech companies.',
                                icon: '👨‍💼',
                                flag: 'FEATURE',
                            },
                        ].map((item, index) => (
                            <StyledCard
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.15 }}
                                viewport={{ once: true }}
                            >
                                <div className="columns">
                                    <div className="button-container">
                                        <button className="btn red-flag">{item.flag}</button>
                                        <p className="offer">{item.icon}</p>
                                    </div>
                                    <p className="secondary-heading">{item.title}</p>
                                    <p className="card-description">{item.desc}</p>
                                </div>
                            </StyledCard>
                        ))}
                    </div>
                </div>
            </section>

            {/* TechStack Section - Reduced padding */}
            <section className="tech-stack-section py-8 md:py-16 bg-white">
                <TechStack />
            </section>

            {/* Animated Stats Section */}
            <StatsCount stats={edutouStats} title="OUR IMPACT IN NUMBERS" />

            {/* Explore header + Projects carousel */}
            <Projects />

           

            {/* Testimonials Section */}
            <TestnomialCard />

            {/* Sign Language CTA Section */}
            <section className="py-12 md:py-24 bg-white">
                <div className="flex flex-col items-center justify-center p-4">
                    <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-4 md:mb-6 max-w-3xl">
                        <div className="bg-orange-300 text-black text-xl md:text-2xl lg:text-3xl font-bold px-4 md:px-6 py-2 md:py-3 rounded-full shadow-md">
                            Build
                        </div>
                        <div className="bg-orange-100 text-black text-xl md:text-2xl lg:text-3xl font-bold px-4 md:px-6 py-2 md:py-3 rounded-lg md:rounded-xl border-2 border-black shadow-[2px_2px_0px_#000] md:shadow-[4px_4px_0px_#000]">
                            projects
                        </div>
                        <div className="bg-orange-200 text-black text-xl md:text-2xl lg:text-3xl font-bold px-4 md:px-6 py-2 md:py-3 rounded-2xl md:rounded-3xl shadow-md">
                            real-world
                        </div>
                        <div className="flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full border-2 border-black shadow-md">
                            <div className="text-xl md:text-2xl lg:text-3xl">🙂</div>
                        </div>
                        <div className="bg-orange-100 text-black text-xl md:text-2xl lg:text-3xl font-bold px-4 md:px-6 py-2 md:py-3 rounded-full shadow-md">
                            and
                        </div>
                        <div className="bg-orange-200 text-black text-xl md:text-2xl lg:text-3xl font-bold px-5 md:px-8 py-2 md:py-3 rounded-lg md:rounded-xl border-2 border-black shadow-[2px_2px_0px_#000] md:shadow-[4px_4px_0px_#000]">
                            stand out
                        </div>
                        <div className="bg-orange-300 text-black text-xl md:text-2xl lg:text-3xl font-bold px-4 md:px-6 py-2 md:py-3 rounded-lg md:rounded-xl shadow-md">
                            to employers 💼
                        </div>
                    </div>

                    <div className="text-3xl md:text-4xl mb-3 md:mb-4">↓</div>

                    <div className="text-center text-gray-700 max-w-md mb-4 md:mb-6 text-sm md:text-base font-['Poppins']">
                        Join thousands of learners who have accelerated their 
                        careers with EDUTOU's revolutionary approach to education
                    </div>

                    <StyledEnrollButton
                        whileHover={{
                            scale: 1.05,
                            boxShadow: '4px 4px 0 1px rgba(0, 0, 0, 0)',
                        }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                    >
                        <Link to="/enroll" className="flex items-center">
                            Get Started Learning
                            <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
                        </Link>
                    </StyledEnrollButton>
                </div>
            </section>
        </div>
    );
};

export default Home;