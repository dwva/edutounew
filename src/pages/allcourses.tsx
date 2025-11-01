import React from 'react';
import styled from 'styled-components';
import { motion } from "framer-motion";

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

// Styled Components (copied from services.tsx)
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

function ProjectCard({ project, hideTech = false }: { project: Project; hideTech?: boolean }) {
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

const CoursesGrid = () => {
  const courses: Project[] = [
    {
      id: 6,
      title: 'AI Essentials',
      description:
        'Understanding core AI concepts, machine learning fundamentals, and practical AI implementation strategies for developers.',
      image:
        'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=400&h=250&fit=crop',
      tech: ['Machine Learning', 'TensorFlow', 'PyTorch', 'Data Science'],
      status: 'current',
    },
    {
      id: 1,
      title: 'Full Stack Development Powered by AI',
      description:
        'Build modern web applications using AI-powered tools and frameworks. Master both frontend and backend development with cutting-edge AI assistance.',
      image:
        'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=250&fit=crop',
      tech: ['React', 'Node.js', 'AI Tools', 'MongoDB'],
      status: 'soon',
    },
    {
      id: 2,
      title: 'Front End Development',
      description:
        'Master modern frontend technologies including React, Vue, and advanced CSS to create stunning, responsive user interfaces.',
      image:
        'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=400&h=250&fit=crop',
      tech: ['React', 'Vue', 'CSS3', 'JavaScript'],
      status: 'soon',
    },
    {
      id: 3,
      title: 'Zero-Hero AI Tools for Development',
      description:
        'Learn to leverage AI tools to supercharge your development workflow and build intelligent applications from scratch.',
      image:
        'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop',
      tech: ['OpenAI', 'GitHub Copilot', 'ChatGPT', 'AI APIs'],
      status: 'soon',
    },
    {
      id: 4,
      title: 'Pure Backend Development',
      description:
        'Deep dive into server-side development, APIs, databases, and cloud architecture for building robust, scalable applications.',
      image:
        'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=250&fit=crop',
      tech: ['Node.js', 'Express', 'PostgreSQL', 'AWS'],
      status: 'soon',
    },
    {
      id: 5,
      title: 'Zero-Hero Python Development',
      description:
        'Master Python from basics to advanced concepts including web development, data analysis, automation, and machine learning.',
      image:
        'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=400&h=250&fit=crop',
      tech: ['Python', 'Django', 'Flask', 'Pandas'],
      status: 'soon',
    },
  
  ];

  return (
    <div className="bg-gray-50 min-h-screen p-8 pt-24">
      <style>
        {`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
        
        .orange-flag {
          background-color: #fca311 !important;
          color: white;
        }
        `}
      </style>
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <h1 className="text-5xl md:text-7xl font-bold section-heading text-center text-gray-900 mb-12" style={{ lineHeight: '1.2' }}>
          <span className="text-orange-500">All</span> Courses
        </h1>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {courses.map((course) => (
            <ProjectCard key={course.id} project={course} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default function CombinedComponent() {
  return (
    <div>
      <CoursesGrid />
    </div>
  );
}