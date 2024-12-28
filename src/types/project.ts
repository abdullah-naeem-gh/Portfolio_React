export interface Project {
  id: string;
  title: string;
  description: string;
  icon: JSX.Element;
  tech: string[];
  longDescription: string;
  features: string[];
  images: {
    url: string;
    alt: string;
  }[];
  demoUrl?: string;
  githubUrl?: string;
  documentation?: string;
}