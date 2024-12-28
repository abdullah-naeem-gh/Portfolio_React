import React, { useState } from 'react';
import { Code2, Cloud, Brain, Smartphone } from 'lucide-react';
import type { Skill } from '../types/skill';
import Modal from './Modal';
import SkillDetails from './SkillDetails';

const skills: Skill[] = [
  {
    id: 'frontend',
    category: 'Frontend Development',
    icon: <Code2 className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
    items: ['React', 'JavaScript', 'TypeScript', 'HTML/CSS'],
    description: `Experienced in building modern, responsive web applications using React and TypeScript. 
      Proficient in state management, component architecture, and performance optimization.`,
    proficiency: 90,
    technologies: [
      {
        name: 'React',
        description: 'Advanced state management, custom hooks, and performance optimization',
      },
      {
        name: 'TypeScript',
        description: 'Type-safe development with advanced TypeScript features',
      },
      {
        name: 'Modern CSS',
        description: 'Tailwind CSS, CSS Modules, and CSS-in-JS solutions',
      },
      {
        name: 'Build Tools',
        description: 'Webpack, Vite, and other modern build tools',
      },
    ],
    certifications: [
      {
        name: 'Advanced React Patterns',
        issuer: 'Frontend Masters',
        date: 'March 2024',
      },
    ],
  },
  {
    id: 'backend',
    category: 'Backend Development',
    icon: <Cloud className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
    items: ['Node.js', 'Google Cloud Platform', 'Express.js'],
    description: `Specialized in building scalable backend services using Node.js and cloud technologies. 
      Experience with microservices architecture and cloud deployment.`,
    proficiency: 85,
    technologies: [
      {
        name: 'Node.js',
        description: 'RESTful APIs, GraphQL, and real-time applications',
      },
      {
        name: 'GCP',
        description: 'Cloud Functions, App Engine, and Cloud Run',
      },
      {
        name: 'Databases',
        description: 'MongoDB, PostgreSQL, and Redis',
      },
      {
        name: 'DevOps',
        description: 'CI/CD, Docker, and Kubernetes',
      },
    ],
  },
  {
    id: 'ml',
    category: 'Machine Learning',
    icon: <Brain className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
    items: ['Currently Learning', 'Python', 'TensorFlow'],
    description: `Currently exploring machine learning and AI technologies. Learning Python and TensorFlow 
      for data analysis and model development.`,
    proficiency: 60,
    technologies: [
      {
        name: 'Python',
        description: 'Data analysis and scientific computing',
      },
      {
        name: 'TensorFlow',
        description: 'Neural networks and deep learning models',
      },
      {
        name: 'Data Science',
        description: 'Pandas, NumPy, and Scikit-learn',
      },
      {
        name: 'Visualization',
        description: 'Matplotlib and Seaborn for data visualization',
      },
    ],
  },
  {
    id: 'mobile',
    category: 'Mobile Development',
    icon: <Smartphone className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
    items: ['Flutter', 'Dart', 'Mobile UI/UX'],
    description: `Developing cross-platform mobile applications using Flutter and Dart. Focus on creating 
      smooth, native-like experiences with beautiful UI/UX.`,
    proficiency: 75,
    technologies: [
      {
        name: 'Flutter',
        description: 'Cross-platform app development with custom widgets',
      },
      {
        name: 'Dart',
        description: 'Object-oriented programming and async operations',
      },
      {
        name: 'State Management',
        description: 'Provider, Riverpod, and BLoC patterns',
      },
      {
        name: 'Native Features',
        description: 'Camera, location, and local storage integration',
      },
    ],
  },
];

export default function Skills() {
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);

  return (
    <section id="skills" className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Skills & Expertise
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill) => (
            <div
              key={skill.id}
              onClick={() => setSelectedSkill(skill)}
              className="p-6 rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-100 
                dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500/50 
                transition-colors cursor-pointer group"
            >
              <div className="flex items-center gap-3 mb-4">
                {skill.icon}
                <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 
                  dark:group-hover:text-blue-400 transition-colors">
                  {skill.category}
                </h3>
              </div>
              <ul className="space-y-2">
                {skill.items.map((item) => (
                  <li key={item} className="text-gray-600 dark:text-gray-300">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <Modal
        isOpen={!!selectedSkill}
        onClose={() => setSelectedSkill(null)}
        title={selectedSkill?.category || ''}
      >
        {selectedSkill && <SkillDetails skill={selectedSkill} />}
      </Modal>
    </section>
  );
}