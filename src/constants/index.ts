import { NavItem, Project, HackathonAchievement, TechSkill, Social } from '../types';

export const navLinks: NavItem[] = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "about",
    title: "Who Am I?",
  },
  {
    id: "projects",
    title: "My Work",
  },
  {
    id: "hackathons",
    title: "Wins & Hacks",
  },
  {
    id: "techstack",
    title: "Tech Stack",
  },
  {
    id: "contact",
    title: "Let's Talk",
  },
];

export const projects: Project[] = [
  {
    id: 1,
    title: "Clas - School Management System",
    description:
      "Clas is a comprehensive school management system built with Django, HTML, JavaScript, and CSS. It provides an intuitive interface for managing students, teachers, classes, and academic records.",
    image: "https://user2995.na.imgto.link/public/20260224/screenshot-2026-02-24-171409.avif",
    tags: [ "django","html","javascript", "CSS","postgresql"],
    github: "https://github.com/hackerpsyco/try",
    link: "https://clas.wazireducationsociety.org/",
  },
   {
    id: 2,
    title: "Volunteers Management System",
    description:
      "A volunteer management system built using  React, Supabase, TypeScript for efficient database management. The platform allows users to create and manage teams in various tech domains, fostering a collaborative community for sharing problems and solutions.",
    image: "https://user2995.na.imgto.link/public/20260224/screenshot-2026-02-24-171516.avif",
    tags: ["React", "supabase", "typescript"],
    github: "https://github.com/hackerpsyco/volunteers_management",
    link: "https://volunteers-management.vercel.app/",
  },
   {
    id: 3,
    title: "Innoalaxy",
    description:
      "Innoalaxy is a dynamic platform built with React and Tailwind CSS, designed to foster innovation and collaboration. It offers a user-friendly interface for sharing ideas, connecting with like-minded individuals, and showcasing projects. The platform emphasizes creativity and community engagement, making it an ideal space for innovators to thrive.",
    image: "https://user2995.na.imgto.link/public/20260224/screenshot-2026-02-24-171434.avif",
    tags: ["React", "tailwind CSS"],
    github: "https://github.com/hackerpsyco/resurrect-code",
    link: "https://www.innoalaxy.in/",
  },

 
   {
    id: 4,
    title: "Team Management System",
    description:
      "team management system paltform using nextjs and drizzle orm for database management and also create different teams in tech like frontend, backend with community inside problems share.",
    image: "https://i.ibb.co/RGg1Fdpb/Screenshot-2025-11-10-004843.png",
    tags: ["Nextjs", "Drizzle ORM", "tailwind CSS"],
    github: "https://github.com/Piyush105454/humanlink-anonymous-problem-solver",
    link: "https://humanlink-anonymous-problem-solver-kappa.vercel.app/",
  },
  {
    id: 5,
    title: "Swapeat",
    description:
      "SwapEat is a web-based platform built using Django, featuring real-time location tracking with Leaflet.js and chat integration using Nextjs Channels and WebSockets. It enables efficient food sharing by connecting users through a responsive interface and secure backend. The system supports user authentication, live messaging, and geolocation-based listings.",
    image: "https://i.ibb.co/KHvdbHJ/Screenshot-2025-11-10-005205.png",
    tags: ["React", "supabase", "typescript", "CSS"],
    github: "https://github.com/Piyush105454/swapeat",
    link: "https://swap-bite-find.onrender.com/",
  },
 
  
   
 
];

export const hackathons: HackathonAchievement[] = [
  {
    id: 1,
    title: "IIIT Bhopal Ideathon",
    date: "March 2025",
    description: "SwapEat is a web-based platform built using Django, featuring real-time location tracking and real time chat and api use for food detection.",
    position: "2st Place",
    team: "Innov8ors",
  },
 
];

export const technologies: TechSkill[] = [
  {
    id: 1,
    name: "HTML5",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    proficiency: 90,
    category: "frontend"
  },
  {
    id: 2,
    name: "CSS3",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    proficiency: 85,
    category: "frontend"
  },
  {
    id: 3,
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    proficiency: 85,
    category: "frontend"
  },
  {
    id: 4,
    name: "React.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    proficiency: 80,
    category: "frontend"
  },
  {
    id: 5,
    name: "Next.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    proficiency: 80,
    category: "frontend"
  },
  {
    id: 6,
    name: "Tailwind CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
    proficiency: 75,
    category: "frontend"
  },
  {
    id: 7,
    name: "Python",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    proficiency: 90,
    category: "backend"
  },
  {
    id: 8,
    name: "Node.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    proficiency: 75,
    category: "backend"
  },
  {
    id: 9,
    name: "Django",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
    proficiency: 70,
    category: "backend"
  },
  /*{
    id: 9,
    name: "Flask",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg",
    proficiency: 65,
    category: "backend"
  },*/
  
 
 
  {
    id: 16,
    name: "Scikit-learn",
    icon: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg",
    proficiency: 70,
    category: "ai"
  },
  {
    id: 17,
    name: "FastAPI",
    icon: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg",
    proficiency: 70,
    category: "ai"
  },
  {
    id: 18,
    name: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    proficiency: 80,
    category: "tools"
  },
 
  {
    id: 19,
    name: "Firebase",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
    proficiency: 75,
    category: "tools"
  },
  {
    id: 20,
    name: "VS Code",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
    proficiency: 90,
    category: "tools"
  }
];

export const socials: Social[] = [
  {
    id: 1,
    name: "GitHub",
    icon: "github",
    url: "https://github.com/Piyush105454",
  },
  {
    id: 2,
    name: "LinkedIn",
    icon: "linkedin",
    url: "https://www.linkedin.com/in/piyush-tamoli-751b2125a",
  },
  {
    id: 3,
    name: "Instagram",
    icon: "instagram",
    url: "https://www.instagram.com/piyush_tamoli/?hl=en",
  },
];
