import React, { useEffect, useRef, useState } from 'react';
import ProjectCard, { type Project } from './ProjectCard';

export default function Projects() {
	const [isVisible, setIsVisible] = useState(false);
	const scrollerRef = useRef<HTMLDivElement>(null);

	const projects: Project[] = [
		{
			id: 1,
			title: 'Full Stack Development Powered by AI',
			description:
				'Hands-on full stack program enhanced by AI guidance. Build and deploy apps using React, Node.js, and databases with AI-assisted workflows.',
			image: '/placeholder.svg',
			tech: ['React', 'Node.js', 'MongoDB', 'AI'],
			status: 'current',
			enroll: '/enroll',
		},
		{
			id: 2,
			title: 'Front End Development',
			description:
				'Modern frontend engineering with React, component-driven design, performance optimization, and accessibility best practices.',
			image: '/placeholder.svg',
			tech: ['React', 'Vite', 'Tailwind'],
			status: 'current',
			enroll: '/enroll',
		},
		{
			id: 3,
			title: 'Zero-Hero AI Tools for Development',
			description:
				'Learn practical AI tooling to accelerate development: code assistance, testing, documentation, and automation from zero to hero.',
			image: '/placeholder.svg',
			tech: ['OpenAI', 'VSCode', 'Automation'],
			status: 'current',
			enroll: '/enroll',
		},
		{
			id: 4,
			title: 'Pure Backend Development',
			description:
				'APIs, microservices, databases, and production-ready backends with robust testing and observability.',
			image: '/placeholder.svg',
			tech: ['Node.js', 'PostgreSQL', 'Docker'],
			status: 'soon',
			details: '/courses',
		},
		{
			id: 5,
			title: 'Zero-Hero Python Development',
			description:
				'Python fundamentals to advanced: scripting, data handling, APIs, and packaging with real projects.',
			image: '/placeholder.svg',
			tech: ['Python', 'FastAPI', 'Pandas'],
			status: 'soon',
			details: '/courses',
		},
		{
			id: 6,
			title: 'AI Essentials',
			description:
				'Core AI concepts, prompts, embeddings, vector stores, and deployment practices for practical AI apps.',
			image: '/placeholder.svg',
			tech: ['AI', 'Embeddings', 'Vector DB'],
			status: 'current',
			enroll: '/enroll',
		},
	];

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => entry.isIntersecting && setIsVisible(true),
			{ threshold: 0.1 }
		);
		const el = document.getElementById('projects');
		if (el) observer.observe(el);
		return () => observer.disconnect();
	}, []);

	const scrollByAmount = (amount: number) => {
		if (scrollerRef.current) {
			scrollerRef.current.scrollBy({ left: amount, behavior: 'smooth' });
		}
	};

	return (
		<section id="projects" className="py-20 bg-white relative overflow-hidden">
			<div className="absolute inset-0 opacity-5 pointer-events-none">
				<div
					className="absolute inset-0"
					style={{
						backgroundImage:
							'radial-gradient(circle at 25% 25%, var(--color-brand) 0%, transparent 50%), radial-gradient(circle at 75% 75%, var(--color-brand) 0%, transparent 50%)',
					}}
				/>
			</div>

			<div className="max-w-6xl mx-auto px-6 relative z-10">
				<div
					className={`text-center mb-10 transition-all duration-1000 ${
						isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
					}`}
				>
					<h2 className="text-4xl md:text-5xl font-bold text-black mb-2">
						Explore Our <span className="text-[var(--color-brand-dark)]">Courses</span>
					</h2>
					<p className="text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
						Choose a program and move through the cards with the arrows.
					</p>
				</div>

				<div className="relative">
					<button
						aria-label="scroll left"
						onClick={() => scrollByAmount(-400)}
						className="hidden md:flex absolute -left-4 top-1/2 -translate-y-1/2 z-10 h-10 w-10 items-center justify-center rounded-full border border-black bg-white shadow hover:bg-gray-50"
					>
						<span className="text-xl">‹</span>
					</button>
					<div
						ref={scrollerRef}
						className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-2"
						style={{ scrollbarWidth: 'thin' }}
					>
						{projects.map((project, index) => (
							<div
								key={project.id}
								className={`min-w-[380px] max-w-[420px] snap-start transition-all duration-1000 ${
									isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
								}`}
								style={{ transitionDelay: `${index * 100}ms` }}
							>
								<ProjectCard project={project} />
							</div>
						))}
					</div>
					<button
						aria-label="scroll right"
						onClick={() => scrollByAmount(400)}
						className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10 h-10 w-10 items-center justify-center rounded-full border border-black bg-white shadow hover:bg-gray-50"
					>
						<span className="text-xl">›</span>
					</button>
				</div>
			</div>
		</section>
	);
}


