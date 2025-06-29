export interface Project {
  id: string;
  name: string;
  description: string;
  problem: string;
  solution: string;
  techStack: string[];
  status: 'Live' | 'In Development' | 'Beta' | 'Completed';
  year: string;
  metrics?: {
    users?: string;
    funding?: string;
    awards?: string;
  };
  links: {
    github?: string;
    live?: string;
    pitch?: string;
  };
}

export const projectsData: Project[] = [
  {
    id: 'agrix',
    name: 'AgriX',
    description: 'Smart agricultural platform connecting farmers with modern farming techniques and market access.',
    problem: 'Ethiopian farmers lack access to modern agricultural knowledge, weather data, and direct market connections, leading to poor yields and unfair pricing.',
    solution: 'Mobile platform providing weather forecasts, crop management advice, market prices, and direct buyer connections using AI and machine learning.',
    techStack: ['React Native', 'Node.js', 'MongoDB', 'Python', 'TensorFlow', 'AWS'],
    status: 'Live',
    year: '2024',
    metrics: {
      users: '5K+',
      funding: '$15K',
      awards: '2'
    },
    links: {
      github: 'https://github.com/exodus/agrix',
      live: 'https://agrix-demo.vercel.app',
      pitch: '/docs/agrix-pitch.pdf'
    }
  },
  {
    id: 'unigo',
    name: 'UniGo',
    description: 'Campus navigation and student services app for Ethiopian universities.',
    problem: 'New students struggle to navigate large university campuses and access student services efficiently.',
    solution: 'Interactive campus maps with AR navigation, service booking, event notifications, and peer connections.',
    techStack: ['Flutter', 'Firebase', 'Google Maps API', 'ARCore', 'Node.js'],
    status: 'Beta',
    year: '2024',
    metrics: {
      users: '2K+',
      funding: '$8K'
    },
    links: {
      github: 'https://github.com/exodus/unigo',
      live: 'https://unigo-beta.vercel.app'
    }
  },
  {
    id: 'freshman-placement',
    name: 'Freshman Placement System',
    description: 'Automated student placement system for Ethiopian universities based on entrance exam results.',
    problem: 'Manual university placement process is slow, error-prone, and lacks transparency for students.',
    solution: 'Automated system that matches students to programs based on grades, preferences, and capacity using optimization algorithms.',
    techStack: ['React', 'Python', 'Django', 'PostgreSQL', 'Redis', 'Docker'],
    status: 'Completed',
    year: '2023',
    metrics: {
      users: '50K+',
      funding: '$25K'
    },
    links: {
      github: 'https://github.com/exodus/freshman-placement',
      pitch: '/docs/placement-system-pitch.pdf'
    }
  },
  {
    id: 'eastlink-market',
    name: 'EastLink Market',
    description: 'B2B e-commerce platform connecting Ethiopian businesses with suppliers and logistics services.',
    problem: 'Small businesses in Ethiopia face challenges finding reliable suppliers and efficient logistics for their operations.',
    solution: 'Digital marketplace with integrated logistics, payment processing, and business networking features.',
    techStack: ['Next.js', 'TypeScript', 'Supabase', 'Stripe', 'Vercel'],
    status: 'In Development',
    year: '2024',
    links: {
      github: 'https://github.com/exodus/eastlink-market'
    }
  },
  {
    id: 'bloodhero-ethiopia',
    name: 'BloodHero Ethiopia',
    description: 'Blood donation coordination app connecting donors with hospitals and blood banks.',
    problem: 'Critical blood shortages in Ethiopian hospitals due to lack of efficient donor coordination and awareness.',
    solution: 'Mobile app that matches blood donors with nearby hospitals, tracks donation history, and sends emergency alerts.',
    techStack: ['React Native', 'Express.js', 'MongoDB', 'Socket.io', 'AWS'],
    status: 'Live',
    year: '2023',
    metrics: {
      users: '12K+',
      awards: '3'
    },
    links: {
      github: 'https://github.com/exodus/bloodhero-ethiopia',
      live: 'https://bloodhero.app'
    }
  },
  {
    id: 'peerswap',
    name: 'PeerSwap',
    description: 'Peer-to-peer learning and skill exchange platform for Ethiopian students.',
    problem: 'Students struggle to find study partners and tutors for specific subjects, leading to academic challenges.',
    solution: 'Platform where students can offer tutoring services, form study groups, and exchange knowledge in different subjects.',
    techStack: ['Vue.js', 'Node.js', 'MySQL', 'Socket.io', 'Digital Ocean'],
    status: 'Beta',
    year: '2023',
    metrics: {
      users: '3K+'
    },
    links: {
      github: 'https://github.com/exodus/peerswap',
      live: 'https://peerswap-beta.netlify.app'
    }
  },
  {
    id: 'campus-repo',
    name: 'Campus Repo',
    description: 'Digital repository for academic resources and past exam papers for Ethiopian universities.',
    problem: 'Students lack access to quality study materials and past exam papers for exam preparation.',
    solution: 'Centralized platform where students can upload, share, and access academic resources organized by course and university.',
    techStack: ['Angular', 'Spring Boot', 'PostgreSQL', 'ElasticSearch', 'Heroku'],
    status: 'Live',
    year: '2022',
    metrics: {
      users: '8K+'
    },
    links: {
      github: 'https://github.com/exodus/campus-repo',
      live: 'https://campus-repo.herokuapp.com'
    }
  },
  {
    id: 'spiritual-growth',
    name: 'Spiritual Growth App',
    description: 'Digital platform for spiritual development with multilingual religious content.',
    problem: 'Limited access to quality spiritual content and community for personal religious growth in local languages.',
    solution: 'App featuring daily devotionals, prayer tracking, religious audio content, and community features in Amharic and Oromo.',
    techStack: ['React Native', 'Firebase', 'Cloud Functions', 'Expo'],
    status: 'In Development',
    year: '2024',
    links: {
      github: 'https://github.com/exodus/spiritual-growth'
    }
  }
];