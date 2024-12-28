import React, { useState } from 'react';
import type { Project } from '../types/project';
import ProjectCard from './ProjectCard';
import ProjectDetails from './ProjectDetails';
import Modal from './Modal';
import { projects } from '../data/projects';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Notable Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>
      </div>

      <Modal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        title={selectedProject?.title || ''}
      >
        {selectedProject && <ProjectDetails project={selectedProject} />}
      </Modal>
    </section>
  );
}