import React from 'react';
import { Briefcase } from 'lucide-react';
import type { Experience } from '../types/experience.ts';
import { experiences } from '../data/experiences.ts';

export default function Experience() {
  return (
    <section id="experience" className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Professional Experience
        </h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700 rounded-xl p-6 hover:border-blue-500 dark:hover:border-blue-500/50 transition-colors"
            >
              <div className="flex items-center gap-3 mb-4">
                <Briefcase className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">{exp.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {exp.company} | {exp.location} | {exp.type}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{exp.period} • {exp.duration}</p>
                </div>
              </div>
              <ul className="space-y-2 list-disc list-inside text-gray-600 dark:text-gray-300">
                {exp.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}