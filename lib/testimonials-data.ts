export interface Testimonial {
  id: string;
  name: string;
  position: string;
  organization: string;
  photo: string;
  testimonial: string;
  featured?: boolean;
}

export const testimonialsData: Testimonial[] = [
  {
    id: 'daniel-bic',
    name: 'Mr. Daniel',
    position: 'Manager',
    organization: 'BIC Ethiopia',
    photo: '/testimonials/daniel.jpg',
    testimonial: 'Exodus has demonstrated exceptional technical skills and innovative thinking in developing solutions for our agricultural sector. His work on AgriX has shown real potential to transform how farmers access information and markets.',
    featured: true
  },
  {
    id: 'attc-president',
    name: 'ATTC President',
    position: 'President',
    organization: 'Agro Technical and Technology College',
    photo: '/testimonials/attc-president.jpg',
    testimonial: 'Working with Exodus on the Freshman Placement System was a game-changer for our institution. The automated system he developed has streamlined our student placement process and eliminated manual errors.',
    featured: true
  },
  {
    id: 'biniyam-addis-ai',
    name: 'Biniyam',
    position: 'Founder',
    organization: 'Addis AI and Addis CV',
    photo: '/testimonials/biniyam.jpg',
    testimonial: 'Exodus is one of the most promising developers in the Ethiopian tech ecosystem. His ability to understand local challenges and build scalable solutions is remarkable. I highly recommend him for any technical project.',
    featured: true
  },
  {
    id: 'anwar-mohammed',
    name: 'Anwar Mohammed',
    position: 'CEO & Founder',
    organization: 'Nile Technology Solution',
    photo: '/testimonials/anwar.jpg',
    testimonial: 'Exodus brings a unique combination of technical expertise and business acumen to every project. His work ethic and dedication to solving real-world problems make him an invaluable partner.',
    featured: true
  },
  {
    id: 'attc-staff-1',
    name: 'Dr. Sarah Bekele',
    position: 'Academic Director',
    organization: 'ATTC',
    photo: '/testimonials/sarah-bekele.jpg',
    testimonial: 'The digital solutions Exodus developed for our college have significantly improved our administrative efficiency. His understanding of educational technology is impressive.'
  },
  {
    id: 'attc-staff-2',
    name: 'Ato Mesfin Tadesse',
    position: 'IT Coordinator',
    organization: 'ATTC',
    photo: '/testimonials/mesfin-tadesse.jpg',
    testimonial: 'Exodus delivered high-quality software solutions on time and within budget. His technical documentation and support throughout the project were exceptional.'
  }
];