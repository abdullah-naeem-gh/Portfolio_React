import React from 'react';
import { ExternalLink, Github, BookOpen } from 'lucide-react';
import type { Project } from '../types/project';

interface ProjectDetailsProps {
  project: Project;
}

export default function ProjectDetails({ project }: ProjectDetailsProps) {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <p className="text-gray-600 dark:text-gray-300">{project.longDescription}</p>
        
        <div className="flex flex-wrap gap-4">
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline"
            >
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline"
            >
              <Github className="w-4 h-4" />
              View Source
            </a>
          )}
          {project.documentation && (
            <a
              href={project.documentation}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline"
            >
              <BookOpen className="w-4 h-4" />
              Documentation
            </a>
          )}
        </div>
      </div>

      <div>
        <h4 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Key Features</h4>
        <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
          {project.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {project.images.map((image, index) => (
          <div key={index} className="relative group">
            <img
              src={image.url}
              alt={image.alt}
              className="rounded-lg shadow-md hover:shadow-xl transition-shadow"
            />
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 
              transition-opacity flex items-center justify-center text-white text-sm">
              {image.alt}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}