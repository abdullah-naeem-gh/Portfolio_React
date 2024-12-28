import React from 'react';
import type { Skill } from '../types/skill';

interface SkillDetailsProps {
  skill: Skill;
}

export default function SkillDetails({ skill }: SkillDetailsProps) {
  return (
    <div className="space-y-6">
      <p className="text-gray-600 dark:text-gray-300">{skill.description}</p>
      
      <div>
        <h4 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Experience Level</h4>
        <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
          <div
            className="h-full bg-blue-600 dark:bg-blue-400 rounded-full transition-all duration-1000"
            style={{ width: `${skill.proficiency}%` }}
          />
        </div>
      </div>

      <div>
        <h4 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Key Technologies</h4>
        <div className="grid grid-cols-2 gap-4">
          {skill.technologies.map((tech) => (
            <div
              key={tech.name}
              className="p-4 rounded-lg bg-gray-50 dark:bg-gray-700/50 border border-gray-100 
                dark:border-gray-600"
            >
              <h5 className="font-medium text-gray-900 dark:text-white mb-2">{tech.name}</h5>
              <p className="text-sm text-gray-600 dark:text-gray-300">{tech.description}</p>
            </div>
          ))}
        </div>
      </div>

      {skill.certifications && skill.certifications.length > 0 && (
        <div>
          <h4 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
            Certifications
          </h4>
          <ul className="space-y-4">
            {skill.certifications.map((cert, index) => (
              <li
                key={index}
                className="flex items-start gap-4 p-4 rounded-lg bg-gray-50 dark:bg-gray-700/50 
                  border border-gray-100 dark:border-gray-600"
              >
                <div>
                  <h5 className="font-medium text-gray-900 dark:text-white">{cert.name}</h5>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                    {cert.issuer} • {cert.date}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}