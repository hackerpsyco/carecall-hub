export interface NavItem {
  id: string;
  title: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
  github?: string;
}

export interface HackathonAchievement {
  id: number;
  title: string;
  date: string;
  description: string;
  position: string;
  team?: string;
  image?: string;
}

export interface TechSkill {
  id: number;
  name: string;
  icon: string;
  proficiency: number; // 1-100
  category: 'frontend' | 'backend' | 'mobile' | 'ai' | 'tools' | 'other';
}

export interface Social {
  id: number;
  name: string;
  icon: string;
  url: string;
}