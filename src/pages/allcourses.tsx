import React from 'react';

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
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-12">
          All Courses
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
