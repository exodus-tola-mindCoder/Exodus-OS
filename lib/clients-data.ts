export interface Client {
  id: string;
  name: string;
  logo: string;
  description: string;
  industry: string;
  projectType: string;
  website?: string;
}

export const clientsData: Client[] = [
  {
    id: 'mensch-fur-menschen',
    name: 'Mensch für Menschen Foundation',
    logo: '/clients/mensch-fur-menschen.png',
    description: 'Developed digital solutions for agricultural development programs and farmer training initiatives across rural Ethiopia.',
    industry: 'Non-Profit / Development',
    projectType: 'Web Platform & Mobile App',
    website: 'https://menschfuermenschen.org'
  },
  {
    id: 'attc',
    name: 'Agro Technical and Technology College',
    logo: '/clients/attc.png',
    description: 'Built comprehensive student management system including placement automation, academic tracking, and administrative tools.',
    industry: 'Education',
    projectType: 'Management System'
  },
  {
    id: 'gelana-dachasa',
    name: 'Gelana Dachasa General Construction',
    logo: '/clients/gelana-dachasa.png',
    description: 'Created project management platform for construction projects, including resource tracking and client communication tools.',
    industry: 'Construction',
    projectType: 'Project Management System'
  },
  {
    id: 'shalom-music',
    name: 'Shalom Music & Video Production',
    logo: '/clients/shalom-music.png',
    description: 'Developed content management system and e-commerce platform for music distribution and video production services.',
    industry: 'Media & Entertainment',
    projectType: 'E-commerce & CMS'
  },
  {
    id: 'simbo-clinic',
    name: 'Simbo Clinic',
    logo: '/clients/simbo-clinic.png',
    description: 'Built patient management system with appointment scheduling, medical records, and billing integration for improved healthcare delivery.',
    industry: 'Healthcare',
    projectType: 'Healthcare Management System'
  }
];