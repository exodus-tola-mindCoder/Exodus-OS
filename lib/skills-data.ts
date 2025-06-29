export interface Skill {
  id: string;
  category: string;
  name: string;
  icon: string;
  description: string;
  experience: string;
  projects: string[];
}

export const skillsData: Skill[] = [
  {
    id: 'mern-stack',
    category: 'Full Stack Web',
    name: 'MERN Stack',
    icon: '⚛️',
    description: 'MongoDB, Express.js, React, Node.js - Complete full-stack JavaScript development',
    experience: 'Built Campus Repo, BloodHero Ethiopia, and PeerSwap using MERN architecture',
    projects: ['Campus Repo', 'BloodHero Ethiopia', 'PeerSwap']
  },
  {
    id: 't3-stack',
    category: 'Modern Web Framework',
    name: 'T3 Stack',
    icon: '🔺',
    description: 'Next.js, TypeScript, tRPC, Prisma, Tailwind - Type-safe full-stack development',
    experience: 'Practicing advanced type-safety and modern development patterns for scalable applications',
    projects: ['EastLink Market', 'Freshman Placement System']
  },
  {
    id: 'react-native',
    category: 'Mobile Development',
    name: 'Expo + React Native',
    icon: '📱',
    description: 'Cross-platform mobile app development with React Native and Expo',
    experience: 'Prototyped mobile apps for AgriX, UniGo, and Spiritual Growth App',
    projects: ['AgriX', 'UniGo', 'Spiritual Growth App']
  },
  {
    id: 'ai-integration',
    category: 'AI Integration',
    name: 'AI APIs',
    icon: '🤖',
    description: 'Addis AI APIs, Gemini AI, and machine learning integration',
    experience: 'Integrated AI features for smart recommendations and data analysis',
    projects: ['AgriX', 'Freshman Placement System']
  },
  {
    id: 'python-django',
    category: 'Backend Development',
    name: 'Python + Django',
    icon: '🐍',
    description: 'Robust backend development with Python and Django framework',
    experience: 'Built scalable APIs and data processing systems',
    projects: ['Freshman Placement System', 'AgriX Analytics']
  },
  {
    id: 'database-management',
    category: 'Database',
    name: 'Database Management',
    icon: '🗄️',
    description: 'PostgreSQL, MongoDB, Redis - Database design and optimization',
    experience: 'Designed efficient database schemas for high-traffic applications',
    projects: ['All Projects']
  },
  {
    id: 'cloud-deployment',
    category: 'DevOps & Cloud',
    name: 'Cloud Deployment',
    icon: '☁️',
    description: 'AWS, Google Cloud, Vercel, Docker - Scalable cloud infrastructure',
    experience: 'Deployed and maintained production applications serving thousands of users',
    projects: ['AgriX', 'BloodHero Ethiopia', 'Campus Repo']
  },
  {
    id: 'ui-ux-tools',
    category: 'Design & Animation',
    name: 'UI/UX Tools',
    icon: '🎨',
    description: 'Framer Motion, Tailwind CSS, Figma - Modern UI design and animations',
    experience: 'Created engaging user interfaces with smooth animations and responsive design',
    projects: ['Exodus OS', 'UniGo', 'All Web Projects']
  },
  {
    id: 'authentication',
    category: 'Security',
    name: 'Authentication & Security',
    icon: '🔐',
    description: 'NextAuth, JWT, OAuth - Secure user authentication and authorization',
    experience: 'Implemented secure authentication systems for sensitive applications',
    projects: ['Freshman Placement System', 'EastLink Market']
  },
  {
    id: 'localization',
    category: 'Internationalization',
    name: 'i18n & Localization',
    icon: '🌍',
    description: 'Multi-language support for Amharic, Afaan Oromo, and English',
    experience: 'Built applications supporting local Ethiopian languages for better accessibility',
    projects: ['Exodus OS', 'Spiritual Growth App', 'AgriX']
  }
];