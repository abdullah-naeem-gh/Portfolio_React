export interface Technology {
  name: string;
  description: string;
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
}

export interface Skill {
  id: string;
  category: string;
  icon: JSX.Element;
  items: string[];
  description: string;
  proficiency: number;
  technologies: Technology[];
  certifications?: Certification[];
}