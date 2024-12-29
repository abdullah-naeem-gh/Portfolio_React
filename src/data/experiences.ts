import type { Experience } from '../types/experience.ts';

export const experiences: Experience[] = [
  {
    title: 'MLOps Intern',
    company: 'Mezino Technologies',
    location: 'Lahore',
    type: 'Onsite',
    period: 'Jun 2024 - Sep 2024',
    duration: '4 months',
    description: [
      'Developed REST APIs with Node.js and Express, using TypeScript and documented with OpenAPI standards.',
      'Containerized applications using Docker and built CI/CD pipelines with GitHub Actions for seamless deployment.',
      'Leveraged vector embeddings and deployed large AI models on GCPs Vertex AI Workbench and Runpod for various ML workflows.',
      'Deployed applications on Google Cloud Run, integrating them with Cloud SQL and Cloud Storage to manage infrastructure effectively with Pulumi.'
    ]
  }
];