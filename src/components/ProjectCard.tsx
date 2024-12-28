import React from 'react';
import type { Project } from '../types/project';

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

export default function ProjectCard({ project, onClick }: ProjectCardProps) {
  return (
    <div
      onClick={onClick}
      className="group p-6 rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-100 
        dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500/50 transition-all 
        cursor-pointer hover:shadow-lg"
    >
      <div className="mb-4">{project.icon}</div>
      <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white group-hover:text-blue-600 
        dark:group-hover:text-blue-400 transition-colors">
        {project.title}
      </h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-2">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 
              rounded-full text-sm"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}