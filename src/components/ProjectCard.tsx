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

export default function ProjectCard({ project, hideTech = false }: { project: Project; hideTech?: boolean }) {
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
							<span key={t} className="px-2 py-1 text-xs rounded-full bg-orange-50 text-[var(--color-brand-dark)] border border-orange-100">
								{t}
							</span>
						))}
					</div>
				)}
			</div>
			<div className="px-5 pb-5 pt-1 flex items-center gap-3">
				<a
					href={project.enroll || '/enroll'}
					className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-[var(--color-brand)] hover:bg-[var(--color-brand-dark)] text-white border-2 border-black transition-colors text-sm font-semibold"
				>
					Enroll
				</a>
				{project.status === 'soon' && (
					<>
						<span className="px-2 py-1 text-xs rounded-full bg-gray-100 text-gray-700 border border-gray-300">Soon</span>
						<a
							href={project.details || '#'}
							className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-white text-black border-2 border-black hover:bg-gray-50 transition-colors text-sm font-semibold"
						>
							View Details
						</a>
					</>
				)}
			</div>
		</div>
	);
}


